'use server'

import { revalidatePath } from 'next/cache';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// In a real application, this would be stored in a database
let leads: LeadData[] = [];

export async function submitContactForm(data: LeadData) {
  try {
    // Add timestamp to the lead data
    const leadWithTimestamp = {
      ...data,
      createdAt: new Date().toISOString(),
      status: 'new' as const
    };

    // Store the lead
    leads.push(leadWithTimestamp);

    // Revalidate the leads page to show the new data
    revalidatePath('/admin/leads');

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'There was an error submitting your message. Please try again later.'
    };
  }
}

// Function to get all leads (for the admin page)
export async function getLeads() {
  return leads;
}

export async function sendContactForm(formData: FormData) {
  try {
    // Process form data here
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Add your email sending logic here
    
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to send message' };
  }
} 