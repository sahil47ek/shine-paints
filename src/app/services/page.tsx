import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Services() {
  const services = [
    {
      title: "Interior Painting",
      description: "Professional interior painting services for homes and offices with premium quality paints and finishes.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80",
      price: "From ₹299",
      features: ["Color consultation", "Surface preparation", "Premium paints", "Clean finish", "Warranty included"]
    },
    {
      title: "Exterior Painting",
      description: "Durable exterior painting solutions that protect and beautify your building's facade.",
      image: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?w=800&auto=format&fit=crop&q=80",
      price: "From ₹499",
      features: ["Weather-resistant paints", "Surface treatment", "Long-lasting finish", "UV protection", "Maintenance guide"]
    },
    {
      title: "Color Consultation",
      description: "Expert color consultation to help you choose the perfect palette for your space.",
      image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=80",
      price: "From ₹99",
      features: ["Personal consultation", "Color samples", "Digital mockups", "Expert advice", "Follow-up support"]
    },
    {
      title: "Commercial Painting",
      description: "Comprehensive painting solutions for businesses and commercial properties",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&auto=format&fit=crop&q=80",
      price: "Custom Quote",
      features: ["Project planning", "Flexible scheduling", "Safety compliance", "Quality assurance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative h-[80vh] sm:h-[80vh] lg:h-[100vh] flex items-center">
          {/* Background Images */}
          <div className="absolute inset-0">
            {/* Mobile Background */}
            <div className="relative h-full sm:hidden">
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&auto=format&fit=crop&q=80"
                alt="Professional Painting Services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
            </div>
            
            {/* Desktop Background Grid */}
            <div className="hidden sm:grid grid-cols-3 h-full gap-1">
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&auto=format&fit=crop&q=80"
                  alt="Interior Painting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              </div>
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&auto=format&fit=crop&q=80"
                  alt="Exterior Painting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50" />
              </div>
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=1600&auto=format&fit=crop&q=80"
                  alt="Commercial Painting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent" />
              </div>
            </div>
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
          
          {/* Content */}
          <div className="relative container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl pt-8 sm:pt-12 lg:pt-16">
              <div className="inline-block bg-gradient-to-r from-rose-400 to-purple-500 px-3 sm:px-4 py-1 rounded-full text-white text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-fade-in">
                Professional Painting Services
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white animate-fade-in leading-tight">
                Transform Your Space with Expert Craftsmanship
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 animate-fade-in">
                From residential interiors to commercial exteriors, our professional team delivers excellence in every brushstroke. Experience the perfect blend of quality, expertise, and attention to detail.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-rose-400 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-in"
                >
                  Get Free Quote
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">15+</div>
                  <div className="text-white/80 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">2500+</div>
                  <div className="text-white/80 text-xs sm:text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">98%</div>
                  <div className="text-white/80 text-xs sm:text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">
                Our Premium Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Professional painting solutions for every project with guaranteed quality and satisfaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">
                        {service.price}
                      </span>
                      <Link
                        href="/contact"
                        className="text-sm sm:text-base font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
                      >
                        Get Quote 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&auto=format&fit=crop&q=80"
                  alt="Professional Painters"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <div className="space-y-8 sm:space-y-10">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">
                    Why Choose Shine Paints?
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    We deliver exceptional painting services with unmatched quality, expertise, and customer satisfaction.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {[
                    {
                      title: "Expert Paint Consulting",
                      description: "We help customers select the ideal paint based on their home's design, whether it's contemporary, traditional, or modern.",
                      icon: (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )
                    },
                    {
                      title: "Professional Painting Services",
                      description: "To prevent fraudulent practices and ensure the highest quality, we provide professional painting services, guaranteeing the proper application of every coat.",
                      icon: (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      )
                    },
                    {
                      title: "Exclusive Add-ons & Warranty",
                      description: "Our commitment doesn't end with a sale. We offer free water service for a year and free touch-ups on selected products, ensuring long-term satisfaction.",
                      icon: (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
                    },
                    {
                      title: "Quality Assurance",
                      description: "Every project undergoes rigorous quality checks to ensure the highest standards of finish and durability.",
                      icon: (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 sm:space-x-5">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-rose-400 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 