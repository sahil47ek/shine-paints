'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { projects, Project } from '../../data/projects';

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p: Project) => p.id === Number(params.id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <a href="/" className="text-rose-500 hover:text-purple-500 transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={project.gallery[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-white/90">{project.location}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-600 mb-8 text-lg">{project.description}</p>

            {/* Gallery */}
            <div className="mb-12">
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-2xl overflow-hidden"
              >
                {project.gallery.map((image: string, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-[500px]">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Project Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Location</h4>
                  <p className="text-gray-600">{project.location}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Completion Date</h4>
                  <p className="text-gray-600">{project.completionDate}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold mb-2">Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-rose-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Project Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Category</h4>
                  <p className="text-lg">{project.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Location</h4>
                  <p className="text-lg">{project.location}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Completion Date</h4>
                  <p className="text-lg">{project.completionDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 