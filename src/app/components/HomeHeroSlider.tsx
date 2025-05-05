'use client';

import Link from 'next/link';

export default function HomeHeroSlider() {
  return (
    <section className="relative min-h-[calc(100vh)] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-75" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transform Your Space
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            Premium Quality Paints for Every Surface
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-in"
          >
            Explore Our Products
          </Link>
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