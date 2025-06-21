'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { projects } from '../data/projects';

export default function FeaturedProjects() {
  const swiperRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure Swiper is properly initialized
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our showcase of stunning transformations and see how we bring color to life in every space.
          </p>
        </div>

        {/* Projects Slider */}
        <div className="relative">
          <div className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="!pb-12"
              onInit={() => setIsLoaded(true)}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                    <div className="relative h-48 sm:h-56 lg:h-64 flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority={project.id === 1}
                      />
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 flex-grow flex flex-col min-h-[10rem] sm:min-h-[12rem]">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">
                        {project.shortDescription}
                      </p>
                      <button
                        disabled
                        className="inline-flex items-center text-gray-400 cursor-not-allowed mt-auto opacity-50 text-sm sm:text-base"
                      >
                        View Project
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-next !-right-2 sm:!-right-6 !top-1/2 !-translate-y-1/2 !w-8 !h-8 sm:!w-12 sm:!h-12 !bg-white !shadow-lg" />
          <div className="swiper-button-prev !-left-2 sm:!-left-6 !top-1/2 !-translate-y-1/2 !w-8 !h-8 sm:!w-12 sm:!h-12 !bg-white !shadow-lg" />
        </div>
      </div>
    </section>
  );
} 
