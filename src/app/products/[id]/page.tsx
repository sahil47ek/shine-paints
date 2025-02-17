import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

// This would typically come from a database
const products = [
  {
    id: 1,
    name: 'Interior Premium Emulsion',
    description: 'Superior quality wall paint for indoor spaces',
    longDescription: `Our Interior Premium Emulsion is crafted for those who demand the best for their indoor spaces. This premium paint offers exceptional coverage, a smooth finish, and long-lasting durability. Its low VOC formula ensures a safer environment for your family while providing beautiful, consistent results.`,
    price: '$29.99',
    category: 'Interior',
    image: '/project1.jpg',
    features: ['Low VOC', 'Easy Application', 'Superior Coverage'],
    colors: ['#F8E5E5', '#D4E6F1', '#F9E79F', '#D5F5E3'],
    specifications: {
      coverage: '350-400 sq ft/gallon',
      dryingTime: '2-3 hours',
      recoatTime: '4 hours',
      finish: 'Matte/Eggshell/Satin',
      washability: 'Excellent',
      packaging: ['1 Gallon', '5 Gallons']
    },
    applications: [
      'Living Rooms',
      'Bedrooms',
      'Dining Rooms',
      'Offices',
      'Interior Walls',
      'Ceilings'
    ],
    benefits: [
      'Excellent hiding power',
      'Smooth finish',
      'Easy to clean',
      'Low odor',
      'Environmentally friendly',
      'Long-lasting color'
    ]
  }
  // ... other products
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id)) || products[0];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Product Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{product.longDescription}</p>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500">per gallon</span>
                </div>
              </div>

              {/* Color Options */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Available Colors</h3>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map((color, index) => (
                    <div key={index} className="group relative">
                      <div
                        className="w-12 h-12 rounded-full border-2 border-white shadow-lg cursor-pointer transform transition-transform hover:scale-110"
                        style={{ backgroundColor: color }}
                      />
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="px-2 py-1 bg-gray-900 text-white text-xs rounded-full whitespace-nowrap">
                          {color}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="border-t border-gray-100 pt-6">
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-rose-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Contact for Purchase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold mb-2 capitalize text-gray-900">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-gray-600">
                  {Array.isArray(value) ? value.join(', ') : value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Recommended Applications</h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {product.applications.map((application) => (
                    <div key={application} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span className="text-gray-600">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 gap-4">
                  {product.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Need More Options?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-700">
            Explore our complete collection of premium paints and find the perfect match for your project.
          </p>
          <Link
            href="/products"
            className="inline-block bg-gradient-to-r from-rose-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
} 