'use client';

import { useState } from 'react';
import { submitContactForm } from '../actions/contact';
import CustomDropdown from './CustomDropdown';

const subjectOptions = [
  'Product Inquiry',
  'Color Consultation',
  'Technical Support',
  'Bulk Order',
  'Other'
];

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: selectedSubject,
      message: formData.get('message') as string
    };

    try {
      const result = await submitContactForm(data);
      setFormStatus({
        type: result.success ? 'success' : 'error',
        message: result.message
      });
      if (result.success) {
        (e.target as HTMLFormElement).reset();
        setSelectedSubject('');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
      {/* Form Status Message */}
      {formStatus.message && (
        <div
          className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
            formStatus.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label 
            htmlFor="name" 
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-sm sm:text-base"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label 
            htmlFor="email" 
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-sm sm:text-base"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label 
            htmlFor="phone" 
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-sm sm:text-base"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <CustomDropdown
            label="Subject"
            options={subjectOptions}
            value={selectedSubject}
            onChange={setSelectedSubject}
          />
        </div>
        <div>
          <label 
            htmlFor="message" 
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-sm sm:text-base"
            required
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-rose-500 to-purple-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 text-sm sm:text-base"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
} 