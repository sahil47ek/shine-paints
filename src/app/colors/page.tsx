'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { colors, Color } from '../data/colors';
import CustomDropdown from '../components/CustomDropdown';
import ColorCard from '../components/ColorCard';
import { fenomasticColors } from '../data/fenomastic-colors';
import { jotunColors } from '../data/jotun-colors';
import { jotashieldColors } from '../data/jotashield-colors';
import { durosanColors } from '../data/durosan-colors';
import Navbar from '../components/Navbar';

export default function ColorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'category'>('name');
  const [selectedShades, setSelectedShades] = useState<Record<number, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const colorsPerPage = 12;

  const categories = ['All', 'Classic', 'Off-White', 'Brights', 'Accents', 'Neutrals', 'Blues', 'Browns', 'Greens', 'Greys', 'Pinks', 'Purples', 'Whites', 'Yellows', 'Reds'];
  const brands = ['All', 'Asian Paints', 'Jotun', 'Fenomastic', 'Jotashield', 'Durosan'];

  const filteredColors = useMemo(() => {
    return colors
      .filter(color => {
        const matchesSearch = color.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || color.category === selectedCategory;
        const matchesBrand = selectedBrand === 'All' || color.brand === selectedBrand;
        
        return matchesSearch && matchesCategory && matchesBrand;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        return a.category.localeCompare(b.category);
      });
  }, [searchTerm, selectedCategory, selectedBrand, sortBy]);

  // Filter Fenomastic colors based on category
  const filteredFenomasticColors = useMemo(() => {
    return fenomasticColors.filter(colorFamily => {
      const matchesSearch = colorFamily.colors.some(color => 
        color.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCategory = selectedCategory === 'All' || colorFamily.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Filter Jotun colors based on category
  const filteredJotunColors = useMemo(() => {
    return jotunColors.filter(colorFamily => {
      const matchesSearch = colorFamily.colors.some(color => 
        color.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCategory = selectedCategory === 'All' || colorFamily.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Filter Jotashield colors based on category
  const filteredJotashieldColors = useMemo(() => {
    return jotashieldColors.filter(colorFamily => {
      const matchesSearch = colorFamily.colors.some(color => 
        color.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCategory = selectedCategory === 'All' || colorFamily.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Filter Durosan colors based on category
  const filteredDurosanColors = useMemo(() => {
    return durosanColors.filter(colorFamily => {
      const matchesSearch = colorFamily.colors.some(color => 
        color.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCategory = selectedCategory === 'All' || colorFamily.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Calculate pagination for all color types
  const getPaginatedColors = (colors: any[], page: number) => {
    const startIndex = (page - 1) * colorsPerPage;
    const endIndex = startIndex + colorsPerPage;
    return colors.slice(startIndex, endIndex);
  };

  // Get paginated colors based on selected brand
  const getCurrentColors = () => {
    let colorsToDisplay: any[] = [];

    if (selectedBrand === 'Fenomastic') {
      colorsToDisplay = filteredFenomasticColors;
    } else if (selectedBrand === 'Jotun') {
      colorsToDisplay = filteredJotunColors;
    } else if (selectedBrand === 'Jotashield') {
      colorsToDisplay = filteredJotashieldColors;
    } else if (selectedBrand === 'Durosan') {
      colorsToDisplay = filteredDurosanColors;
    } else {
      // When "All" is selected, combine all color arrays
      colorsToDisplay = [
        ...filteredFenomasticColors,
        ...filteredJotunColors,
        ...filteredJotashieldColors,
        ...filteredDurosanColors,
        ...filteredColors
      ];
    }

    // Apply sorting based on the selected sort option
    colorsToDisplay.sort((a, b) => {
      if (sortBy === 'name') {
        return a.colors[0].name.localeCompare(b.colors[0].name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    return getPaginatedColors(colorsToDisplay, currentPage);
  };

  // Calculate total pages based on selected brand
  const getTotalPages = () => {
    if (selectedBrand === 'Fenomastic') {
      return Math.ceil(filteredFenomasticColors.length / colorsPerPage);
    } else if (selectedBrand === 'Jotun') {
      return Math.ceil(filteredJotunColors.length / colorsPerPage);
    } else if (selectedBrand === 'Jotashield') {
      return Math.ceil(filteredJotashieldColors.length / colorsPerPage);
    } else if (selectedBrand === 'Durosan') {
      return Math.ceil(filteredDurosanColors.length / colorsPerPage);
    } else {
      // When "All" is selected, calculate total pages based on all colors
      const totalColors = 
        filteredFenomasticColors.length +
        filteredJotunColors.length +
        filteredJotashieldColors.length +
        filteredDurosanColors.length +
        filteredColors.length;
      return Math.ceil(totalColors / colorsPerPage);
    }
  };

  const currentColors = getCurrentColors();
  const totalPages = getTotalPages();

  const handleShadeSelect = (colorId: number, shadeHex: string) => {
    setSelectedShades(prev => ({
      ...prev,
      [colorId]: shadeHex
    }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-6 pt-28 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Explore Our Colors</h1>
          <Link
            href="/#color-inspiration"
            className="inline-flex items-center text-rose-500 hover:text-purple-500 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Fixed Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-32 lg:h-fit space-y-6">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Search Colors</h2>
              <input
                type="text"
                placeholder="Search by name..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <div className="space-y-4">
                {/* Brand Filter */}
                <CustomDropdown
                  label="Brand"
                  options={brands}
                  value={selectedBrand}
                  onChange={(value) => {
                    setSelectedBrand(value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            {/* Sort */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Sort By</h2>
              <CustomDropdown
                label="Sort By"
                options={['Name', 'Category']}
                value={sortBy === 'name' ? 'Name' : 'Category'}
                onChange={(value) => {
                  setSortBy(value === 'Name' ? 'name' : 'category');
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          {/* Scrollable Color Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentColors.map((colorFamily) => (
                <ColorCard
                  key={colorFamily.colors[0].code}
                  colorFamily={colorFamily.colors}
                  defaultColor={colorFamily.colors[0]}
                  brand={colorFamily.brand}
                  category={colorFamily.category}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    First
                  </button>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === page
                          ? 'bg-rose-500 text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Last
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 