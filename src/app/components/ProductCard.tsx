'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../store/productSlice';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Find the first non-disabled volume option
  const firstAvailableVolume = product.volumeOptions.find(option => !option.disabled) || product.volumeOptions[0];
  const [selectedVolume, setSelectedVolume] = useState(firstAvailableVolume);

  const handleVolumeChange = (volume: string) => {
    const volumeOption = product.volumeOptions.find(option => option.volume === volume);
    if (volumeOption && !volumeOption.disabled) {
      setSelectedVolume(volumeOption);
    }
  };

  // Check if all prices are 0
  const allPricesZero = product.volumeOptions.every(option => option.price === 0);

  return (
    <div className="bg-white pt-6 sm:pt-8 rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-md h-full flex flex-col">
      <div className="relative h-32 sm:h-40 lg:h-44 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="transition-transform duration-500 group-hover:scale-105 object-contain"
        />
        {(product.isBestSeller || product.isSpecialOffer) && (
          <div className="absolute top-2 left-2 flex gap-1">
            {product.isBestSeller && (
              <div className="bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                Best Seller
              </div>
            )}
            {product.isSpecialOffer && (
              <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                {product.specialOfferDiscount}% OFF
              </div>
            )}
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <span className="px-2 py-1 bg-gradient-to-r from-rose-50 to-purple-50 text-rose-600 rounded-full text-xs font-medium">
            {product.brand}
          </span>
          <span className={`px-2 py-1 text-xs rounded-full ${
            product.category === 'Interior'
              ? 'bg-blue-50 text-blue-600'
              : product.category === 'Exterior'
              ? 'bg-green-50 text-green-600'
              : 'bg-amber-50 text-amber-600'
          }`}>
            {product.category}
          </span>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-rose-500 transition-colors overflow-hidden whitespace-nowrap">
          <span 
            className="inline-block hover:animate-marquee"
            style={{
              animationDuration: '3s',
              animationTimingFunction: 'ease-out',
              animationIterationCount: '1',
              animationPlayState: 'paused'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              const parent = target.parentElement as HTMLElement;
              if (target.scrollWidth > parent.clientWidth) {
                target.style.animationPlayState = 'running';
              }
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.animationPlayState = 'paused';
              // Reset to start position when mouse leaves
              target.style.transform = 'translateX(0)';
            }}
          >
            {product.name}
          </span>
        </h3>
        
        {/* Volume Selection */}
        <div className="mb-2 sm:mb-3">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Select Volume:
          </label>
          <div className={`grid gap-1 ${
            product.volumeOptions.length === 3 ? 'grid-cols-3' : 'grid-cols-4'
          }`}>
            {product.volumeOptions.map((option) => (
              <button
                key={option.volume}
                onClick={() => handleVolumeChange(option.volume)}
                disabled={option.disabled}
                className={`px-1 py-1.5 text-xs rounded-lg border transition-all duration-200 ${
                  option.disabled
                    ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                    : selectedVolume.volume === option.volume
                    ? 'border-rose-500 bg-rose-50 text-rose-600 font-medium'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                {option.volume}
              </button>
            ))}
          </div>
        </div>

        {/* Price Display */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-lg sm:text-xl font-bold ${
            allPricesZero || selectedVolume.price === 0
              ? 'text-gray-400'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500'
          }`}>
            ₹{selectedVolume.price.toFixed(2)}
          </span>
          {product.isSpecialOffer && selectedVolume.price > 0 && (
            <span className="text-xs text-gray-400 line-through">
              ₹{(selectedVolume.price / (1 - (product.specialOfferDiscount || 0) / 100)).toFixed(2)}
            </span>
          )}
        </div>

        {/* Contact for Purchase Button */}
        <Link
          href="/contact"
          className="block text-center bg-gradient-to-r from-rose-400 to-purple-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity mt-auto"
        >
          Contact for Purchase
        </Link>
      </div>
    </div>
  );
} 