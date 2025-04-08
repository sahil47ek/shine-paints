'use client';

import dynamic from 'next/dynamic';

const MapEmbed = dynamic(() => import('./MapEmbed'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 animate-pulse rounded-t-xl" />
  ),
});

interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}

export default function LocationCard({ name, address, phone, email, mapUrl }: LocationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="relative h-48">
        <MapEmbed mapUrl={mapUrl} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900">{name}</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-rose-500">📍</span>
            </div>
            <p className="text-gray-600">{address}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-500">📞</span>
            </div>
            <p className="text-gray-600">{phone}</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-500">✉️</span>
            </div>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 