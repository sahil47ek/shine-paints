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
    title: 'MYG Shaji\'s Home',
    shortDescription: 'Luxurious residential transformation with premium interior finishes and sophisticated color schemes.',
    description: 'A stunning residential project that showcases our expertise in creating luxurious living spaces. This transformation features premium interior finishes, sophisticated color palettes, and attention to detail that elevates the entire home experience.',
    category: 'Residential',
    location: 'Kerala, India',
    completionDate: 'March 2024',
    features: [
      'Premium interior wall finishes',
      'Custom color matching',
      'Luxury paint applications',
      'Accent wall treatments',
      'Ceiling detailing',
      'Eco-friendly materials'
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
    title: 'Meralda Jafer Home',
    shortDescription: 'Contemporary home design with modern aesthetics and durable exterior protection systems.',
    description: 'A contemporary home project that combines modern aesthetics with practical durability. This project demonstrates our ability to create beautiful, long-lasting finishes that protect and enhance residential properties.',
    category: 'Residential',
    location: 'Kerala, India',
    completionDate: 'February 2024',
    features: [
      'Weather-resistant exterior finishes',
      'Modern color schemes',
      'UV protection coatings',
      'Mold-resistant treatments',
      'Custom exterior detailing',
      'Long-lasting durability'
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
    title: 'KRF Resorts',
    shortDescription: 'Premium hospitality space with specialized commercial finishes and luxury accommodations.',
    description: 'A premium hospitality project that showcases our expertise in commercial applications. This resort transformation features specialized finishes designed for high-traffic areas while maintaining luxury aesthetics.',
    category: 'Commercial',
    location: 'Kerala, India',
    completionDate: 'January 2024',
    features: [
      'Commercial-grade finishes',
      'High-traffic resistant coatings',
      'Luxury hospitality aesthetics',
      'Easy-maintenance surfaces',
      'Custom color schemes',
      'Professional application'
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
  }
]; 