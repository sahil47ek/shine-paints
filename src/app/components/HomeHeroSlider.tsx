'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    title: 'Transform Your Space',
    subtitle: 'Premium Quality Paints for Every Surface',
    cta: 'Shop Now',
    ctaLink: '/products',
    gradient: 'from-rose-400 to-purple-500'
  },
  {
    title: 'Expert Color Consultation',
    subtitle: 'Find the Perfect Shade for Your Project',
    cta: 'Book Now',
    ctaLink: '/services/consultation',
    gradient: 'from-blue-400 to-emerald-500'
  },
  {
    title: 'Professional Tools',
    subtitle: 'Everything You Need for a Perfect Finish',
    cta: 'View Tools',
    ctaLink: '/tools',
    gradient: 'from-amber-400 to-orange-500'
  }
];

export default function HomeHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} transition-colors duration-700`} />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute'
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {slide.subtitle}
              </p>
              <Link
                href={slide.ctaLink}
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {slide.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-6 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-100'
                  : 'bg-white/50 scale-75 hover:scale-90'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square">
        <div className="w-full h-full bg-white/10 rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="absolute left-1/4 bottom-1/4 w-1/4 aspect-square">
        <div className="w-full h-full bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
} 