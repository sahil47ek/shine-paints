import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Locations from '../components/Locations';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 bg-gradient-to-r from-rose-50 to-purple-50">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Have questions about our products or need expert color advice?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form Section - Fixed */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <div className="lg:border-r lg:border-gray-100 lg:pr-8 lg:pr-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Send us a message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Locations Section - Scrollable */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Our Locations</h2>
              <Locations />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 