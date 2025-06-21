import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Tools() {
  const digitalTools = [
    {
      title: "Paint Calculator",
      description: "Calculate paint quantity and cost estimates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v4m-3-4v4m-6-4v4m-3-4v4m-6.5-7h21M5 4h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      link: "/tools/calculator"
    },
    {
      title: "Color Visualizer",
      description: "Preview paint colors in your space",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4.586a1 1 0 01.707.293l7.414 7.414a1 1 0 01.293.707V17a4 4 0 01-4 4H7z" />
        </svg>
      ),
      link: "/tools/visualizer"
    },
    {
      title: "Project Planner",
      description: "Plan and track your painting projects",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      link: "/tools/planner"
    }
  ];

  const paintingTools = [
    {
      name: "Professional Brush Set",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80",
      price: "₹29.99"
    },
    {
      name: "Pro Roller System",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
      price: "₹39.99"
    },
    {
      name: "Paint Sprayer",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop&q=80",
      price: "₹199.99"
    },
    {
      name: "Complete Painter's Kit",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
      price: "₹89.99"
    },
    {
      name: "Paint Mixer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
      price: "₹49.99"
    },
    {
      name: "Paint Tray Set",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80",
      price: "₹24.99"
    },
    {
      name: "Paint Scraper Kit",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop&q=80",
      price: "₹19.99"
    },
    {
      name: "Paint Edger",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80",
      price: "₹34.99"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[80vh] lg:h-[100vh] flex items-center">
          <div className="absolute inset-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&auto=format&fit=crop&q=80"
                  alt="Professional Paint Tools"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              </div>
              <div className="hidden lg:grid grid-rows-2 h-full">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1600&auto=format&fit=crop&q=80"
                    alt="Paint Brushes"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&auto=format&fit=crop&q=80"
                    alt="Paint Supplies"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-block bg-gradient-to-r from-rose-400 to-purple-500 px-4 py-1 rounded-full text-white text-sm font-medium mb-4 animate-fade-in">
                Professional Equipment
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white animate-fade-in leading-tight">
                Professional Tools & Resources
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 animate-fade-in">
                Equip yourself with premium painting tools and innovative digital solutions. From professional-grade brushes to smart color visualization tools, we provide everything you need for a perfect finish.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Tools Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">
              Professional Tools
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
              Quality painting tools for professional results
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {paintingTools.map((tool) => (
                <div
                  key={tool.name}
                  className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">{tool.name}</h3>
                    <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">
                      {tool.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-rose-400 to-purple-500">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-white animate-fade-in">Need Expert Advice?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-white/90 max-w-2xl mx-auto animate-fade-in">
              Our team is here to help you choose the right tools for your project. Get in touch with us today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-white bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-in border-2 border-white hover:border-rose-400"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 