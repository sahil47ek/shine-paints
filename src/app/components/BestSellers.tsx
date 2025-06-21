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
    <section className="py-8 sm:py-12 lg:py-16 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-purple-50 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Best Sellers Header */}
        <div className="bg-gradient-to-r from-rose-400 to-purple-500 rounded-2xl overflow-hidden mb-6 sm:mb-8 lg:mb-12">
          <div className="relative">
            <div className="bg-black/10 w-full h-[180px] sm:h-[220px] lg:h-[280px]" />
            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-10">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                  Best Sellers Collection
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-3 sm:mb-4 max-w-2xl">
                  Discover our professional-grade paints loved by customers. Premium quality for every surface.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2">
                    <div className="text-white/80 text-xs">Total Sales</div>
                    <div className="text-white text-base sm:text-lg font-bold">2,500+</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2">
                    <div className="text-white/80 text-xs">Happy Customers</div>
                    <div className="text-white text-base sm:text-lg font-bold">1,200+</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2">
                    <div className="text-white/80 text-xs">5-Star Reviews</div>
                    <div className="text-white text-base sm:text-lg font-bold">95%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Sellers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
} 