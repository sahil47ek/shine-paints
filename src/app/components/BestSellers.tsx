'use client';

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from '../../store/hooks';
import { selectAllProducts } from '../../store/productSlice';
import ProductCard from './ProductCard';

export default function BestSellers() {
  const products = useAppSelector(selectAllProducts);
  const bestSellers = products.filter(product => product.isBestSeller).slice(0, 4);

  return (
    <section className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-purple-50 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      
      <div className="container mx-auto px-6 relative">
        {/* Best Sellers Header */}
        <div className="bg-gradient-to-r from-rose-400 to-purple-500 rounded-2xl overflow-hidden mb-16">
          <div className="relative">
            <div className="bg-black/10 w-full h-[300px]" />
            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Best Sellers Collection
                </h2>
                <p className="text-xl text-white/90 mb-6 max-w-2xl">
                  Discover our professional-grade paints loved by customers. Premium quality for every surface.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-white/80 text-sm">Total Sales</div>
                    <div className="text-white text-2xl font-bold">2,500+</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-white/80 text-sm">Happy Customers</div>
                    <div className="text-white text-2xl font-bold">1,200+</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-white/80 text-sm">5-Star Reviews</div>
                    <div className="text-white text-2xl font-bold">95%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Sellers Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
} 