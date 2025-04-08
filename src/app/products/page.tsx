'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '../../store/hooks';
import { selectAllProducts, selectCategories, selectBrands } from '../../store/productSlice';
import Navbar from '../components/Navbar';
import BestSellers from '../components/BestSellers';

export default function Products() {
  const products = useAppSelector(selectAllProducts);
  const categories = ['All', 'Interior', 'Exterior', 'Waterproofing'];
  const brands = ['All', 'Asian Paints', 'Jotun Paint', 'Ezdee Paint', 'MRF', 'Birla Oppus', 'JK', 'Dr Fixit', 'Indigo'];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsCategoryOpen(false);
        setIsBrandOpen(false);
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (selectedBrand === 'All' || product.brand === selectedBrand)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        default:
          return 0;
      }
    });

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to the products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)', icon: '↑↓' },
    { value: 'price', label: 'Price (Low to High)', icon: '↑' },
  ];

  const getSortLabel = () => {
    return sortOptions.find(option => option.value === sortBy)?.label || 'Sort by';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-0">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://img.freepik.com/free-photo/paint-buckets-with-watercolor-collection_23-2148188263.jpg"
              alt="Paint Products Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
                Explore Our Collection
              </div>
              <h1 className="text-5xl font-bold mb-6 text-white">
                Premium Paint Collection
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Discover our extensive range of high-quality paints and finishes for every surface. From interior elegance to exterior durability, find the perfect solution for your space.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-white/80 text-sm">Products</div>
                  <div className="text-white text-2xl font-bold">{products.length}+</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-white/80 text-sm">Categories</div>
                  <div className="text-white text-2xl font-bold">{categories.length}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-white/80 text-sm">Best Sellers</div>
                  <div className="text-white text-2xl font-bold">{products.filter(p => p.isBestSeller).length}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <BestSellers />

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50 sticky top-20 z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Search Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search Products
                </label>
                  <input
                    type="text"
                  placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
              </div>

              {/* Category Dropdown */}
              <div className="dropdown-container">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <div className="relative">
                  <button
                    onClick={() => {
                      setIsSortOpen(false);
                      setIsBrandOpen(false);
                      setIsCategoryOpen(!isCategoryOpen);
                    }}
                    className="w-full px-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-rose-400 flex items-center justify-between"
                  >
                    <span className="text-gray-700">
                      {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        isCategoryOpen ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isCategoryOpen && (
                    <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg">
                      <div className="py-1 max-h-60 overflow-auto">
                       
                        {categories.map(category => (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category);
                              setIsCategoryOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center justify-between ${
                              selectedCategory === category ? 'bg-rose-50 text-rose-600' : 'text-gray-700'
                            }`}
                          >
                            <span>{category}</span>
                            {selectedCategory === category && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Brand Dropdown */}
              <div className="dropdown-container">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>
                <div className="relative">
                  <button
                    onClick={() => {
                      setIsCategoryOpen(false);
                      setIsSortOpen(false);
                      setIsBrandOpen(!isBrandOpen);
                    }}
                    className="w-full px-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-rose-400 flex items-center justify-between"
                  >
                    <span className="text-gray-700">
                      {selectedBrand === 'All' ? 'All Brands' : selectedBrand}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        isBrandOpen ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isBrandOpen && (
                    <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg">
                      <div className="py-1">
                        
                        {brands.map(brand => (
                          <button
                            key={brand}
                            onClick={() => {
                              setSelectedBrand(brand);
                              setIsBrandOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center justify-between ${
                              selectedBrand === brand ? 'bg-rose-50 text-rose-600' : 'text-gray-700'
                            }`}
                          >
                            <span>{brand}</span>
                            {selectedBrand === brand && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="dropdown-container">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort by
                </label>
                <div className="relative">
                  <button
                    onClick={() => {
                      setIsCategoryOpen(false);
                      setIsBrandOpen(false);
                      setIsSortOpen(!isSortOpen);
                    }}
                    className="w-full px-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-rose-400 flex items-center justify-between"
                  >
                    <span className="text-gray-700">{getSortLabel()}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        isSortOpen ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isSortOpen && (
                    <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg">
                      <div className="py-1">
                        {sortOptions.map(option => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value as 'name' | 'price');
                              setIsSortOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center justify-between ${
                              sortBy === option.value ? 'bg-rose-50 text-rose-600' : 'text-gray-700'
                            }`}
                          >
                            <div className="flex items-center">
                              <span className="w-6 text-center">{option.icon}</span>
                              <span>{option.label}</span>
                            </div>
                            {sortBy === option.value && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div id="products-section" className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {(product.isBestSeller || product.isSpecialOffer) && (
                      <div className="absolute top-4 left-4 flex gap-2">
                        {product.isBestSeller && (
                          <div className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                            Best Seller
                          </div>
                        )}
                        {product.isSpecialOffer && (
                          <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                            {product.specialOfferDiscount}% OFF
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-rose-50 to-purple-50 text-rose-600 rounded-full text-sm font-medium">
                        {product.brand}
                      </span>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        product.stock === 0 
                          ? 'text-red-700 bg-red-100' 
                          : product.stock <= 10 
                          ? 'text-yellow-700 bg-yellow-100' 
                          : 'text-green-700 bg-green-100'
                      }`}>
                        {product.stock === 0 ? 'Out of Stock' : 'In Stock'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.isSpecialOffer && (
                          <span className="text-sm text-gray-400 line-through">
                            ${(product.price / (1 - (product.specialOfferDiscount || 0) / 100)).toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === pageNumber
                        ? 'bg-gradient-to-r from-rose-500 to-purple-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}

            {/* Results count */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Showing {indexOfFirstProduct + 1} to {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 