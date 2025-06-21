import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import type { Metadata } from 'next'
import BestSellers from './components/BestSellers';
import HomeHeroSlider from './components/HomeHeroSlider';
import FeaturedProjects from './components/FeaturedProjects';

export const metadata: Metadata = {
  title: 'Premium Paint Solutions for Your Home & Business',
  description: 'Discover our premium quality paints, expert color consultation services, and innovative paint solutions for interior and exterior applications.',
  openGraph: {
    title: 'Premium Paint Solutions - Shine Paints',
    description: 'Transform your space with our premium quality paints and expert color consultation services.',
    images: [
      {
        url: 'https://placehold.co/1200x630/rose/white/png?text=Shine+Paints',
        width: 1200,
        height: 630,
        alt: 'Shine Paints Premium Solutions',
      },
    ],
  },
};

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shine Paints',
  description: 'Premium paint solutions for interior and exterior applications',
  url: 'https://shinepaint.com',
  logo: 'https://placehold.co/512x512/rose/white/png?text=Shine+Paints+Logo',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91 87142 09920',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Malayalam']
  },
  offers: {
    '@type': 'AggregateOffer',
    itemOffered: [
      {
        '@type': 'Service',
        name: 'Interior Painting',
        description: 'Premium interior paint solutions'
      },
      {
        '@type': 'Service',
        name: 'Exterior Painting',
        description: 'Durable exterior paint solutions'
      },
      {
        '@type': 'Service',
        name: 'Color Consultation',
        description: 'Expert color advisory services'
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section with Slider */}
        <HomeHeroSlider />

       

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* Color Inspiration */}
        <section className="pt-12 sm:pt-16 lg:pt-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Find Your Perfect Color</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                  Explore our curated color palettes designed by expert color consultants.
                  From timeless neutrals to bold statements, find the perfect shade for your space.
                </p>
                <Link
                  href="/colors"
                  className="inline-flex items-center text-rose-500 font-semibold hover:text-purple-500 transition-colors group"
                >
                  Browse All Colors
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-fade-in">
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-32 sm:h-40 lg:h-48 bg-[#F8E5E5] rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"></div>
                  <div className="h-32 sm:h-40 lg:h-48 bg-[#D4E6F1] rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"></div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                  <div className="h-32 sm:h-40 lg:h-48 bg-[#F9E79F] rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"></div>
                  <div className="h-32 sm:h-40 lg:h-48 bg-[#D5F5E3] rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <BestSellers />

        {/* Design Services */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-rose-400 to-purple-500">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white animate-fade-in">Need Help with Your Project?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto text-white/90 animate-fade-in">
              Our color consultants are here to help you create the perfect space.
              Book a free consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-in"
            >
              Book Consultation
            </Link>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center text-gray-900 animate-fade-in">
              Get Inspired
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 animate-fade-in">
              Follow us on{" "}
              <Link
                href="https://www.instagram.com/shinepaints?igsh=MXcwbzJjdTZqOTAxMQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-rose-500 transition-colors"
              >
                @shinepaints
              </Link>{" "}
              for daily inspiration
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { 
                  title: "Interior Design Inspiration",
                  image: "/i1.jpeg"
                },
                {
                  title: "Color Palette Ideas",
                  image: "/i2.jpeg"
                },
                {
                  title: "Professional Painting",
                  image: "/i3.jpeg"
                },
                {
                  title: "Texture & Finishes",
                  image: "/i4.jpeg"
                }
              ].map((item) => (
                <div 
                  key={item.title} 
                  className="relative aspect-square group overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
