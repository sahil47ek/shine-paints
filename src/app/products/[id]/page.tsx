'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useAppSelector } from '../../../store/hooks';
import { selectProductById } from '../../../store/productSlice';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = useAppSelector(state => selectProductById(state, params.id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 pt-32">
          <h1 className="text-3xl font-bold text-gray-900">Product not found</h1>
          <Link
            href="/products"
            className="inline-block mt-4 bg-gradient-to-r from-rose-400 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

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
                <p className="text-xl text-gray-600 mb-6">{product.description}</p>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500">per gallon</span>
                </div>
              </div>

              {/* Stock Information */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold mb-4">Availability</h3>
                <p className={`text-${product.stock > 0 ? 'green' : 'red'}-600`}>
                  {product.stock > 0 ? `In Stock (${product.stock} units)` : 'Out of Stock'}
                </p>
              </div>

              {/* Category */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold mb-4">Category</h3>
                <p className="text-gray-600">{product.category}</p>
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