import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import type { Metadata } from 'next'
import BestSellers from './components/BestSellers';
import HomeHeroSlider from './components/HomeHeroSlider';

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
    telephone: '+1-234-567-8900',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: ['English']
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

        {/* Trending Colors Section */}
        <section className="relative py-20">
          <div className="absolute inset-0">
            <div className="h-full w-full bg-gradient-to-b from-rose-100 to-purple-100"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/80"></div>
          </div>
          <div className="relative container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500 animate-fade-in">
              Trending Colors of 2024
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-fade-in">
              Discover this year's most inspiring color palette, carefully curated by our color experts
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Desert Rose", color: "bg-[#E8B4B8]" },
                { name: "Ocean Depth", color: "bg-[#1B4965]" },
                { name: "Sage Harmony", color: "bg-[#9CAF88]" },
                { name: "Golden Hour", color: "bg-[#F2C94C]" },
              ].map((item, index) => (
                <div 
                  key={item.name} 
                  className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`${item.color} h-64 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}></div>
                  <p className="mt-4 text-lg font-medium text-center text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-purple-500 transition-colors">{item.name}</p>
                </div>
              ))}
            </div>
        </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 animate-fade-in">Featured Projects</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-fade-in">
              Get inspired by our latest transformations and see how our colors bring spaces to life
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Modern Living Room", feature: "Sage Harmony", image: "/images/project1.jpg" },
                { title: "Serene Bedroom", feature: "Desert Rose", image: "/images/project2.jpg" },
                { title: "Contemporary Kitchen", feature: "Ocean Depth", image: "/images/project3.jpg" },
              ].map((project, index) => (
                <div 
                  key={project.title}
                  className="relative h-[500px] group overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 200}ms` }}
        >
          <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p>Featuring {project.feature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Color Inspiration */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Find Your Perfect Color</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Explore our curated color palettes designed by expert color consultants.
                  From timeless neutrals to bold statements, find the perfect shade for your space.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["Neutrals", "Pastels", "Bold", "Metallics"].map((category) => (
                    <span
                      key={category}
                      className="px-6 py-2 text-black bg-white rounded-full text-sm shadow-sm border border-gray-100 hover:border-rose-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center text-rose-500 font-semibold hover:text-purple-500 transition-colors group"
                >
                  Browse All Colors
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-fade-in">
                <div className="space-y-4">
                  <div className="h-48 bg-[#F8E5E5] rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"></div>
                  <div className="h-48 bg-[#D4E6F1] rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-48 bg-[#F9E79F] rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"></div>
                  <div className="h-48 bg-[#D5F5E3] rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <BestSellers />

        {/* Design Services */}
        <section className="py-20 bg-gradient-to-r from-rose-400 to-purple-500">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white animate-fade-in">Need Help with Your Project?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90 animate-fade-in">
              Our color consultants are here to help you create the perfect space.
              Book a free consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-in"
            >
              Book Consultation
            </Link>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 animate-fade-in">
              Get Inspired
            </h2>
            <p className="text-gray-600 text-center mb-12 animate-fade-in">
              Follow us <span className="font-semibold hover:text-rose-500 transition-colors cursor-pointer">@shinepaintsofficial</span> for daily inspiration
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item} 
                  className="relative aspect-square group overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
                >
                  <Image
                    src={`https://placehold.co/600x600/${item === 1 ? 'rose' : item === 2 ? 'purple' : item === 3 ? 'amber' : 'blue'}/white/png?text=Paint+Inspiration+${item}`}
                    alt={`Instagram post ${item}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
    </>
  );
}
