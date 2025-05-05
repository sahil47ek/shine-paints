'use client';

import React, { useState } from 'react';
import ColorModal from './ColorModal';

interface ColorVariant {
  name: string;
  code: string;
  hex: string;
  category: string;
}

interface ColorCardProps {
  colorFamily: ColorVariant[];
  defaultColor: ColorVariant;
  brand: string;
  category: string;  // Keep for filtering but won't display
  searchTerm: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ colorFamily, defaultColor, brand, searchTerm }) => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(defaultColor);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Effect to update selected color when search term matches
  React.useEffect(() => {
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      const matchingColor = colorFamily.find(
        color => 
          color.name.toLowerCase().includes(searchTermLower) ||
          color.code.toLowerCase().includes(searchTermLower)
      );
      if (matchingColor) {
        setSelectedColor(matchingColor);
      }
    }
  }, [searchTerm, colorFamily]);

  // Split colors into two rows
  const midPoint = Math.ceil(colorFamily.length / 2);
  const firstRow = colorFamily.slice(0, midPoint);
  const secondRow = colorFamily.slice(midPoint);

  return (
    <>
      <div className="w-full rounded-lg shadow-lg overflow-hidden bg-white">
        {/* Color Display with Code and Selection Buttons */}
        <div className="relative">
          <div 
            className="w-full h-44 cursor-pointer hover:opacity-90 transition-opacity"
            style={{ backgroundColor: selectedColor.hex }}
            onClick={() => setIsModalOpen(true)}
          />
          
          {/* Color Code - Positioned at top right of color display */}
          <div className="absolute top-3 right-3">
            <span className="text-sm font-mono bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
              {selectedColor.code}
            </span>
          </div>
          
          {/* Color Selection Buttons - Positioned at bottom center of color display */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-white rounded-xl shadow-md p-2">
              <div className="flex flex-col gap-2">
                {/* First Row */}
                <div className="flex justify-center gap-1">
                  {firstRow.map((color) => (
                    <button
                      key={color.code}
                      onClick={() => setSelectedColor(color)}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        selectedColor.code === color.code
                          ? 'border-blue-500 scale-110'
                          : 'border-gray-200 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
                {/* Second Row */}
                <div className="flex justify-center gap-1">
                  {secondRow.map((color) => (
                    <button
                      key={color.code}
                      onClick={() => setSelectedColor(color)}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        selectedColor.code === color.code
                          ? 'border-blue-500 scale-110'
                          : 'border-gray-200 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Color Information */}
        <div className="p-3 mt-10">
          <h3 className="text-base font-semibold text-center mb-2">{selectedColor.name}</h3>
          <div className="flex justify-center">
            <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
              {brand === 'Jotun' || brand === 'Jotashield' ? 'Jotashield' : brand}
            </span>
          </div>
        </div>
      </div>

      {/* Color Modal */}
      <ColorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        color={selectedColor}
        brand={brand}
      />
    </>
  );
};

export default ColorCard; 