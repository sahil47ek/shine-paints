'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useAppSelector } from '../../store/hooks';
import { selectAllProducts, selectCategories, selectBrands } from '../../store/productSlice';
import Navbar from '../components/Navbar';
import BestSellers from '../components/BestSellers';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const searchParams = useSearchParams();
  const products = useAppSelector(selectAllProducts);
  const categories = ['All', 'Best Sellers', 'Interior', 'Exterior', 'Waterproofing'];
  const brands = ['All', 'Asian Paints', 'Jotun Paint', 'Ezdee Paint', 'MRF', 'Birla Oppus', 'JK', 'Dr Fixit', 'Indigo'];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Handle URL parameters on component mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams, categories]);

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

  // Reset pagination when search query, category, or brand changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedBrand]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      // Enhanced search functionality
      const searchTerm = searchQuery.toLowerCase().trim();
      const productName = product.name.toLowerCase().trim();
      const productBrand = product.brand.toLowerCase().trim();
      
      const matchesSearch = searchTerm === '' || 
        productName.includes(searchTerm) ||
        productBrand.includes(searchTerm);
      
      let matchesCategory = selectedCategory === 'All';
      
      if (selectedCategory === 'Best Sellers') {
        matchesCategory = product.isBestSeller === true;
      } else if (selectedCategory !== 'All') {
        matchesCategory = product.category === selectedCategory;
      }
      
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      
      return matchesSearch && matchesCategory && matchesBrand;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.basePrice - b.basePrice;
        case 'price-high':
          return b.basePrice - a.basePrice;
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
    { value: 'price-low', label: 'Price (Low to High)', icon: '↑' },
    { value: 'price-high', label: 'Price (High to Low)', icon: '↓' },
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
              src="/product-banner.jpeg"
              alt="Paint Products Collection"
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
                  placeholder="Search by product name or brand..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  aria-label="Search products by name or brand"
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
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent hover:border-gray-400 transition-colors flex items-center justify-between"
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
                    <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="py-1 max-h-60 overflow-auto">
                        {categories.map(category => (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category);
                              setIsCategoryOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                              selectedCategory === category ? 'bg-rose-50 text-rose-600 font-medium' : 'text-gray-700'
                            }`}
                          >
                            <span>{category}</span>
                            {selectedCategory === category && (
                              <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
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
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent hover:border-gray-400 transition-colors flex items-center justify-between"
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
                    <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="py-1 max-h-60 overflow-auto">
                        {brands.map(brand => (
                          <button
                            key={brand}
                            onClick={() => {
                              setSelectedBrand(brand);
                              setIsBrandOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                              selectedBrand === brand ? 'bg-rose-50 text-rose-600 font-medium' : 'text-gray-700'
                            }`}
                          >
                            <span>{brand}</span>
                            {selectedBrand === brand && (
                              <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
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
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent hover:border-gray-400 transition-colors flex items-center justify-between"
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
                    <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="py-1">
                        {sortOptions.map(option => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value as 'name' | 'price-low' | 'price-high');
                              setIsSortOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                              sortBy === option.value ? 'bg-rose-50 text-rose-600 font-medium' : 'text-gray-700'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-6 text-center text-sm">{option.icon}</span>
                              <span>{option.label}</span>
                            </div>
                            {sortBy === option.value && (
                              <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
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
              {searchQuery ? (
                <span>
                  Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} matching "{searchQuery}" 
                  {filteredProducts.length !== products.length && ` out of ${products.length} total products`}
                </span>
              ) : (
                <span>Showing {filteredProducts.length} of {products.length} products</span>
              )}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="mb-6">
                  <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery 
                    ? `No products match "${searchQuery}". Try adjusting your search terms or filters.`
                    : 'No products match your current filters. Try adjusting your selection.'
                  }
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedBrand('All');
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div id="products-section" className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
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
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
} 