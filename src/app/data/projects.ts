export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  location: string;
  completionDate: string;
  features: string[];
  gallery: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Living Room',
    shortDescription: 'Contemporary space transformed with premium wall paints and sophisticated color palettes.',
    description: 'A contemporary space transformed with our premium wall paints. This project showcases our ability to create modern, sophisticated interiors with carefully selected color palettes and premium finishes.',
    category: 'Interior',
    location: 'New York, NY',
    completionDate: 'March 2024',
    features: [
      'Premium wall paint application',
      'Custom color matching',
      'Professional finish',
      'Eco-friendly materials',
      'Accent wall detailing',
      'Ceiling treatment'
    ],
    gallery: [
      'https://img.freepik.com/free-photo/modern-living-room-with-green-wall_23-2148896816.jpg',
      'https://img.freepik.com/free-photo/modern-living-room-with-green-wall_23-2148896816.jpg',
      'https://img.freepik.com/free-photo/modern-living-room-with-green-wall_23-2148896816.jpg',
      'https://img.freepik.com/free-photo/modern-living-room-with-green-wall_23-2148896816.jpg',
      'https://img.freepik.com/free-photo/modern-living-room-with-green-wall_23-2148896816.jpg',
      'https://img.freepik.com/free-photo/modern-living-room-with-green-wall_23-2148896816.jpg'
    ],
    image: 'https://img.freepik.com/free-photo/modern-living-room-with-green-wall_23-2148896816.jpg'
  },
  {
    id: 2,
    title: 'Coastal Villa',
    shortDescription: 'Stunning exterior transformation with weather-resistant finishes and coastal protection.',
    description: 'A stunning exterior transformation that combines durability with aesthetic appeal. This project demonstrates our expertise in weather-resistant finishes and coastal property protection.',
    category: 'Exterior',
    location: 'Miami, FL',
    completionDate: 'February 2024',
    features: [
      'Weather-resistant paint system',
      'UV protection coating',
      'Mold-resistant finish',
      'Long-lasting durability',
      'Salt-air protection',
      'Custom color matching'
    ],
    gallery: [
      'https://img.freepik.com/free-photo/luxury-house-real-estate-property-dusk_1127-3126.jpg',
      'https://img.freepik.com/free-photo/luxury-house-real-estate-property-dusk_1127-3126.jpg',
      'https://img.freepik.com/free-photo/luxury-house-real-estate-property-dusk_1127-3126.jpg',
      'https://img.freepik.com/free-photo/luxury-house-real-estate-property-dusk_1127-3126.jpg',
      'https://img.freepik.com/free-photo/luxury-house-real-estate-property-dusk_1127-3126.jpg',
      'https://img.freepik.com/free-photo/luxury-house-real-estate-property-dusk_1127-3126.jpg'
    ],
    image: 'https://img.freepik.com/free-photo/luxury-house-real-estate-property-dusk_1127-3126.jpg'
  },
  {
    id: 3,
    title: 'Urban Cafe',
    shortDescription: 'Vibrant commercial space with specialty wall treatments and custom finishes.',
    description: 'A vibrant commercial space transformed with specialty wall treatments and custom finishes. This project highlights our ability to create unique atmospheres for business spaces.',
    category: 'Commercial',
    location: 'Chicago, IL',
    completionDate: 'January 2024',
    features: [
      'Custom wall treatments',
      'High-traffic resistant finish',
      'Easy-to-clean surfaces',
      'Brand-specific color scheme',
      'Accent wall features',
      'Ceiling detailing'
    ],
    gallery: [
      'https://img.freepik.com/free-photo/cafe-interior-with-wooden-furniture_23-2148896818.jpg',
      'https://img.freepik.com/free-photo/cafe-interior-with-wooden-furniture_23-2148896818.jpg',
      'https://img.freepik.com/free-photo/cafe-interior-with-wooden-furniture_23-2148896818.jpg',
      'https://img.freepik.com/free-photo/cafe-interior-with-wooden-furniture_23-2148896818.jpg',
      'https://img.freepik.com/free-photo/cafe-interior-with-wooden-furniture_23-2148896818.jpg',
      'https://img.freepik.com/free-photo/cafe-interior-with-wooden-furniture_23-2148896818.jpg'
    ],
    image: 'https://img.freepik.com/free-photo/cafe-interior-with-wooden-furniture_23-2148896818.jpg'
  },
  {
    id: 4,
    title: 'Minimalist Bedroom',
    shortDescription: 'Serene bedroom space with carefully selected neutral tones and premium finishes.',
    description: 'A serene bedroom space created with carefully selected neutral tones and premium finishes. This project showcases our expertise in creating peaceful, minimalist interiors.',
    category: 'Interior',
    location: 'Los Angeles, CA',
    completionDate: 'December 2023',
    features: [
      'Neutral color palette',
      'Premium matte finish',
      'Low-VOC paint',
      'Custom color matching',
      'Accent wall treatment',
      'Ceiling detailing'
    ],
    gallery: [
      'https://img.freepik.com/free-photo/modern-bedroom-interior_23-2148896817.jpg',
      'https://img.freepik.com/free-photo/modern-bedroom-interior_23-2148896817.jpg',
      'https://img.freepik.com/free-photo/modern-bedroom-interior_23-2148896817.jpg',
      'https://img.freepik.com/free-photo/modern-bedroom-interior_23-2148896817.jpg',
      'https://img.freepik.com/free-photo/modern-bedroom-interior_23-2148896817.jpg',
      'https://img.freepik.com/free-photo/modern-bedroom-interior_23-2148896817.jpg'
    ],
    image: 'https://img.freepik.com/free-photo/modern-bedroom-interior_23-2148896817.jpg'
  },
  {
    id: 5,
    title: 'Historic Restoration',
    shortDescription: 'Careful restoration using specialized paint solutions and traditional techniques.',
    description: 'A careful restoration of a historic building using specialized paint solutions and traditional techniques. This project demonstrates our commitment to preserving architectural heritage.',
    category: 'Restoration',
    location: 'Boston, MA',
    completionDate: 'November 2023',
    features: [
      'Historic color matching',
      'Specialized restoration techniques',
      'Period-appropriate finishes',
      'Heritage preservation',
      'Weather protection',
      'Custom color formulation'
    ],
    gallery: [
      'https://img.freepik.com/free-photo/old-building-facade_1127-3125.jpg',
      'https://img.freepik.com/free-photo/old-building-facade_1127-3125.jpg',
      'https://img.freepik.com/free-photo/old-building-facade_1127-3125.jpg',
      'https://img.freepik.com/free-photo/old-building-facade_1127-3125.jpg',
      'https://img.freepik.com/free-photo/old-building-facade_1127-3125.jpg',
      'https://img.freepik.com/free-photo/old-building-facade_1127-3125.jpg'
    ],
    image: 'https://img.freepik.com/free-photo/old-building-facade_1127-3125.jpg'
  },
  {
    id: 6,
    title: 'Garden Studio',
    shortDescription: 'Creative workspace enhanced with vibrant colors and natural light optimization.',
    description: 'A creative workspace enhanced with vibrant colors and natural light optimization. This project showcases our ability to create inspiring work environments.',
    category: 'Interior',
    location: 'Seattle, WA',
    completionDate: 'October 2023',
    features: [
      'Vibrant color scheme',
      'Natural light optimization',
      'Creative workspace design',
      'Eco-friendly materials',
      'Custom wall treatments',
      'Accent features'
    ],
    gallery: [
      'https://img.freepik.com/free-photo/modern-studio-room_1127-3124.jpg',
      'https://img.freepik.com/free-photo/modern-studio-room_1127-3124.jpg',
      'https://img.freepik.com/free-photo/modern-studio-room_1127-3124.jpg',
      'https://img.freepik.com/free-photo/modern-studio-room_1127-3124.jpg',
      'https://img.freepik.com/free-photo/modern-studio-room_1127-3124.jpg',
      'https://img.freepik.com/free-photo/modern-studio-room_1127-3124.jpg'
    ],
    image: 'https://img.freepik.com/free-photo/modern-studio-room_1127-3124.jpg'
  }
]; 