import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Team',
  description: 'Learn about Shine Paints\' commitment to quality, innovation, and sustainability. Meet our expert team of color consultants and paint specialists.',
  openGraph: {
    title: 'About Shine Paints - Our Story & Expert Team',
    description: 'Discover the passionate team behind Shine Paints and our commitment to transforming spaces with premium quality paints.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        width: 1200,
        height: 630,
        alt: 'Shine Paints Team',
      },
    ],
  },
}

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Color Expert',
    description: 'With over 15 years of experience in color theory and consultation, Sarah leads our color advisory services.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    description: 'Expert in paint formulation and quality control.',
  },
  {
    name: 'Emma Williams',
    role: 'Design Consultant',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    description: 'Specializes in interior and exterior color schemes.',
  },
];

const values = [
  {
    title: 'Quality',
    description: 'The paint industry often confuses customers with misleading quotations and low-quality alternatives. At Shine Paints, we openly discuss pricing, educate customers on product differences, and ensure they make informed choices.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'The paint industry often confuses customers with misleading quotations and low-quality alternatives. At Shine Paints, we openly discuss pricing, educate customers on product differences, and ensure they make informed choices.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Sustainability',
    description: 'We are committed to eco-friendly practices, promoting durable and safe paint solutions that reduce environmental impact while ensuring long-lasting beauty for homes and spaces.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Shine Paints',
    description: 'Premium paint solutions for interior and exterior applications',
    foundingDate: '2010',
    employees: teamMembers.map(member => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      description: member.description
    })),
    sameAs: [
      'https://facebook.com/shinepaint',
      'https://twitter.com/shinepaint',
      'https://linkedin.com/company/shinepaint'
    ]
  }
}

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white ">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[80vh] lg:min-h-[100vh] pt-10">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
              alt="Our Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Our Story
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-100">
                  We're passionate about bringing color and life to your spaces through premium quality paints and expert consultation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Vision */}
              <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 mb-4 sm:mb-6">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Our Vision</h2>
                <p className="text-sm sm:text-base text-gray-600 italic">
                  "To build a trusted, customer-friendly paint brand across India, offering high-quality products and expert services that cater to all budget segments. We aim to redefine the paint industry by ensuring transparency, innovation, and lifetime trust with our customers."
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-br from-purple-50 to-rose-50 rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 sm:mb-6">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Our Mission</h2>
                <p className="text-sm sm:text-base text-gray-600 italic">
                  "At Shine Paints, we don't just sell paint; we provide expertise, trust, and quality. Our mission is to educate customers, eliminate fraudulent practices, and offer end-to-end painting solutions with honest pricing. By continuously innovating and expanding, we strive to make Shine Paints the go-to choice for homeowners and businesses across the country."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative pb-12 sm:pb-16 lg:pb-20">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=80"
              alt="Paint Workshop"
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 sm:mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-gray-50 hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
              alt="Team Collaboration"
              fill
              className="object-cover opacity-5"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                    <p className="text-sm sm:text-base text-purple-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm sm:text-base text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-rose-400 to-purple-500">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">Ready to Transform Your Space?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-white/90 max-w-2xl mx-auto">
              Let our expert team help you choose the perfect colors and finishes for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/products"
                className="inline-block border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 