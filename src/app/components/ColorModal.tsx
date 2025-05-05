import React, { useRef, useEffect } from 'react';

interface ColorModalProps {
  isOpen: boolean;
  onClose: () => void;
  color: {
    name: string;
    code: string;
    hex: string;
    category: string;
  };
  brand: string;
}

const ColorModal: React.FC<ColorModalProps> = ({ isOpen, onClose, color, brand }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Function to determine if the color is light or dark
  const isLightColor = (hexColor: string) => {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  };

  const isDark = !isLightColor(color.hex);
  const textColorClass = isDark ? 'text-white' : 'text-gray-900';
  const badgeColorClass = isDark ? 'bg-white/20 text-white' : 'bg-black/20 text-black';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div 
        ref={modalRef}
        className="relative max-w-4xl w-full h-[80vh] rounded-xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: color.hex }}
      >
        {/* Color Information - Centered vertically and horizontally */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <h2 className={`text-5xl font-bold mb-6 ${textColorClass}`}>{color.name}</h2>
            <div className="flex items-center justify-center gap-4">
              <span className={`px-4 py-2 rounded-full text-lg backdrop-blur-sm ${badgeColorClass}`}>
                {brand === 'Jotun' || brand === 'Jotashield' ? 'Jotashield' : brand}
              </span>
              <span className={`px-4 py-2 rounded-full text-lg font-mono backdrop-blur-sm ${badgeColorClass}`}>
                {color.code}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorModal; 