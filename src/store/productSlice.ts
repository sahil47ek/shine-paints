import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface VolumeOption {
  volume: string;
  price: number;
  stock: number;
  disabled?: boolean;
}

export interface Product {
  id: string;
  name: string;
  basePrice: number;
  category: string;
  brand: string;
  image: string;
  stock: number;
  isBestSeller?: boolean;
  isSpecialOffer?: boolean;
  specialOfferDiscount?: number;
  volumeOptions: VolumeOption[];
}

interface ProductState {
  products: Product[];
  categories: string[];
  brands: string[];
}

const initialState: ProductState = {
  products: [
    {
      id: '1',
      name: 'Wonderwall Lux',
      basePrice: 1185,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-wonderwall-lux.webp',
      stock: 100,
      volumeOptions: [
        { volume: '1L', price: 1185, stock: 100 },
        { volume: '4L', price: 4425, stock: 80 },
        { volume: '10L', price: 0, stock: 60, disabled: true },
        { volume: '20L', price: 20397, stock: 40 }
      ]
    },
    {
      id: '2',
      name: 'Wonderwall Life',
      basePrice: 1029,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-wonderwall-life.jpg',
      stock: 85,
      volumeOptions: [
        { volume: '1L', price: 1029, stock: 85 },
        { volume: '4L', price: 4055, stock: 70 },
        { volume: '10L', price: 9962, stock: 50 },
        { volume: '20L', price: 19728, stock: 35 }
      ]
    },
    {
      id: '3',
      name: 'Tex Ultra',
      basePrice: 0,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/tex-ultra.webp',
      stock: 75,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 75 },
        { volume: '4L', price: 0, stock: 60 },
        { volume: '10L', price: 0, stock: 45 },
        { volume: '20L', price: 0, stock: 30 }
      ]
    },
    {
      id: '4',
      name: 'Waterxtreme',
      basePrice: 0,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/waterxtreme.webp',
      stock: 60,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 60 },
        { volume: '4L', price: 0, stock: 45 },
        { volume: '10L', price: 0, stock: 35 },
        { volume: '20L', price: 0, stock: 25 }
      ]
    },
    {
      id: '5',
      name: 'Hygiene',
      basePrice: 967,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-hygiene.jpeg',
      stock: 70,
      volumeOptions: [
        { volume: '1L', price: 967, stock: 70 },
        { volume: '4L', price: 3707, stock: 55 },
        { volume: '10L', price: 9094, stock: 40 },
        { volume: '20L', price: 17849, stock: 30 }
      ]
    },
    {
      id: '6',
      name: 'Fenomestic Wonder Wall',
      basePrice: 0,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-wonderwall.webp',
      stock: 90,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 90 },
        { volume: '4L', price: 0, stock: 75 },
        { volume: '10L', price: 0, stock: 55 },
        { volume: '20L', price: 0, stock: 40 }
      ]
    },
    {
      id: '7',
      name: 'Colourxtreme',
      basePrice: 0,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/colourxtreme.jpg',
      stock: 65,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 65 },
        { volume: '4L', price: 0, stock: 50 },
        { volume: '10L', price: 0, stock: 40 },
        { volume: '20L', price: 0, stock: 25 }
      ]
    },
    {
      id: '9',
      name: 'Fenomestic My Home Rich Matt',
      basePrice: 769,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-my-home-matt.jpg',
      stock: 80,
      volumeOptions: [
        { volume: '1L', price: 769, stock: 80 },
        { volume: '4L', price: 2899, stock: 65 },
        { volume: '10L', price: 7849, stock: 50 },
        { volume: '20L', price: 15479, stock: 35 }
      ]
    },
    {
      id: '10',
      name: 'Fenomestic My Home Smooth Silk',
      basePrice: 769,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-my-home-silk.jpg',
      stock: 75,
      volumeOptions: [
        { volume: '1L', price: 769, stock: 75 },
        { volume: '4L', price: 2969, stock: 60 },
        { volume: '10L', price: 7129, stock: 45 },
        { volume: '20L', price: 14039, stock: 30 }
      ]
    },
    {
      id: '11',
      name: 'Jotashield Matt',
      basePrice: 0,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/jotashield-matt.webp',
      stock: 50,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 50 },
        { volume: '4L', price: 0, stock: 40 },
        { volume: '10L', price: 0, stock: 30 },
        { volume: '20L', price: 0, stock: 20 }
      ]
    },
    {
      id: '12',
      name: 'Jotashield Silk',
      basePrice: 0,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/jotashield-silk.webp',
      stock: 45,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 45 },
        { volume: '4L', price: 0, stock: 35 },
        { volume: '10L', price: 0, stock: 25 },
        { volume: '20L', price: 0, stock: 15 }
      ]
    },
    {
      id: '13',
      name: 'Fenomestic Matt',
      basePrice: 479,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-matt.webp',
      stock: 85,
      volumeOptions: [
        { volume: '1L', price: 479, stock: 85 },
        { volume: '4L', price: 1829, stock: 70 },
        { volume: '10L', price: 4319, stock: 55 },
        { volume: '20L', price: 8449, stock: 40 }
      ]
    },
    {
      id: '15',
      name: 'Easycoat Plus Matt',
      basePrice: 449,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/easycoat-plus.jpeg',
      stock: 70,
      volumeOptions: [
        { volume: '1L', price: 449, stock: 70 },
        { volume: '4L', price: 1709, stock: 55 },
        { volume: '10L', price: 4049, stock: 40 },
        { volume: '20L', price: 7909, stock: 30 }
      ]
    },
    {
      id: '17',
      name: 'Action White',
      basePrice: 259,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/action-white.png',
      stock: 95,
      volumeOptions: [
        { volume: '1L', price: 259, stock: 95 },
        { volume: '4L', price: 959, stock: 80 },
        { volume: '10L', price: 2319, stock: 60 },
        { volume: '20L', price: 4489, stock: 45 }
      ]
    },
    {
      id: '18',
      name: 'Action Silk',
      basePrice: 0,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/action-silk.webp',
      stock: 90,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 90 },
        { volume: '4L', price: 0, stock: 75 },
        { volume: '10L', price: 0, stock: 55 },
        { volume: '20L', price: 0, stock: 40 }
      ]
    },
    {
      id: '19',
      name: 'Jolly Fix',
      basePrice: 210,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/jollyfix.jpg',
      stock: 75,
      volumeOptions: [
        { volume: '1L', price: 210, stock: 75 },
        { volume: '4L', price: 799, stock: 60 },
        { volume: '10L', price: 1749, stock: 45 },
        { volume: '20L', price: 3279, stock: 30 }
      ]
    },
    {
      id: '20',
      name: 'Easycoat Extra',
      basePrice: 409,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/easycoat-xtra.webp',
      stock: 80,
      volumeOptions: [
        { volume: '1L', price: 409, stock: 80 },
        { volume: '4L', price: 1409, stock: 65 },
        { volume: '10L', price: 3289, stock: 50 },
        { volume: '20L', price: 6299, stock: 35 }
      ]
    },
    {
      id: '21',
      name: 'Easycoat',
      basePrice: 299,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/easycoat.jpeg',
      stock: 85,
      volumeOptions: [
        { volume: '1L', price: 299, stock: 85 },
        { volume: '4L', price: 1039, stock: 70 },
        { volume: '10L', price: 2429, stock: 55 },
        { volume: '20L', price: 4659, stock: 40 }
      ]
    },
    {
      id: '22',
      name: 'Royale Glitz Ultra Matt',
      basePrice: 810,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/royale-glitz-ultra-matt.png',
      stock: 90,
      isBestSeller: true,
      volumeOptions: [
        { volume: '1L', price: 810, stock: 90 },
        { volume: '4L', price: 3170, stock: 75 },
        { volume: '10L', price: 7040, stock: 55 },
        { volume: '20L', price: 15210, stock: 40 }
      ]
    },
    {
      id: '23',
      name: 'Royale Glitz',
      basePrice: 850,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/royale-glitz.png',
      stock: 85,
      volumeOptions: [
        { volume: '1L', price: 850, stock: 85 },
        { volume: '4L', price: 3480, stock: 70 },
        { volume: '10L', price: 8530, stock: 55 },
        { volume: '20L', price: 16730, stock: 40 }
      ]
    },
    {
      id: '24',
      name: 'Apcolite Advance',
      basePrice: 557,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/apcolite-advance.png',
      stock: 95,
      isBestSeller: true,
      volumeOptions: [
        { volume: '1L', price: 557, stock: 95 },
        { volume: '4L', price: 1549, stock: 80 },
        { volume: '10L', price: 4765, stock: 60 },
        { volume: '20L', price: 10002, stock: 45 }
      ]
    },
    {
      id: '25',
      name: 'Apcolite Advance Shyne',
      basePrice: 500,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/apcolite-shyne.png',
      stock: 80,
      volumeOptions: [
        { volume: '1L', price: 500, stock: 80 },
        { volume: '4L', price: 1980, stock: 65 },
        { volume: '10L', price: 4860, stock: 50 },
        { volume: '20L', price: 9080, stock: 35 }
      ]
    },
    {
      id: '26',
      name: 'Apcolite All Protect',
      basePrice: 0,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/apcolite-all-protek.png',
      stock: 75,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 75 },
        { volume: '4L', price: 0, stock: 60 },
        { volume: '10L', price: 0, stock: 45 },
        { volume: '20L', price: 0, stock: 30 }
      ]
    },
    {
      id: '27',
      name: 'Apcolite Premium Emulsion',
      basePrice: 489,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/apcolite-premium-emulsion.png',
      stock: 100,
      volumeOptions: [
        { volume: '1L', price: 489, stock: 100 },
        { volume: '4L', price: 1885, stock: 85 },
        { volume: '10L', price: 4550, stock: 65 },
        { volume: '20L', price: 8750, stock: 50 }
      ]
    },
    {
      id: '28',
      name: 'Tractor Shyne Advanced',
      basePrice: 301,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/tractor-shyne-advanced.png',
      stock: 90,
      isBestSeller: true,
      volumeOptions: [
        { volume: '1L', price: 301, stock: 90 },
        { volume: '4L', price: 1133, stock: 75 },
        { volume: '10L', price: 2960, stock: 55 },
        { volume: '20L', price: 5030, stock: 40 }
      ]
    },
    {
      id: '29',
      name: 'Tractor Sparc',
      basePrice: 159,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/tractor-sparc.png',
      stock: 85,
      volumeOptions: [
        { volume: '1L', price: 159, stock: 85 },
        { volume: '4L', price: 947, stock: 70 },
        { volume: '10L', price: 2212, stock: 55 },
        { volume: '20L', price: 3603, stock: 40 }
      ]
    },
    {
      id: '30',
      name: 'Tractor Emulsion Advance',
      basePrice: 0,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/tractor-emulsion-advanced.png',
      stock: 80,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 80 },
        { volume: '4L', price: 0, stock: 65 },
        { volume: '10L', price: 0, stock: 50 },
        { volume: '20L', price: 0, stock: 35 }
      ]
    },
    {
      id: '31',
      name: 'Apex Ultima Protek Duralife',
      basePrice: 0,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-ultima-protek-duralife.png',
      stock: 70,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 70 },
        { volume: '4L', price: 0, stock: 55 },
        { volume: '10L', price: 0, stock: 40 },
        { volume: '20L', price: 0, stock: 30 }
      ]
    },
    {
      id: '32',
      name: 'Apex Ultima Protek',
      basePrice: 725,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-ultima-protek.png',
      stock: 65,
      isBestSeller: true,
      volumeOptions: [
        { volume: '1L', price: 725, stock: 65 },
        { volume: '4L', price: 3068, stock: 50 },
        { volume: '10L', price: 7163, stock: 40 },
        { volume: '20L', price: 12980, stock: 25 }
      ]
    },
    {
      id: '33',
      name: 'Apex Ultima',
      basePrice: 700,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-ultima.png',
      stock: 75,
      volumeOptions: [
        { volume: '1L', price: 700, stock: 75 },
        { volume: '4L', price: 2735, stock: 60 },
        { volume: '10L', price: 6590, stock: 45 },
        { volume: '20L', price: 12710, stock: 30 }
      ]
    },
    {
      id: '34',
      name: 'Apex Ultima Stretch',
      basePrice: 0,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-ultima-stretch.png',
      stock: 70,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 70 },
        { volume: '4L', price: 0, stock: 55 },
        { volume: '10L', price: 0, stock: 40 },
        { volume: '20L', price: 0, stock: 30 }
      ]
    },
    {
      id: '35',
      name: 'Apex',
      basePrice: 494,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-exterior.png',
      stock: 80,
      volumeOptions: [
        { volume: '1L', price: 494, stock: 80 },
        { volume: '4L', price: 1895, stock: 65 },
        { volume: '10L', price: 4470, stock: 50 },
        { volume: '20L', price: 8510, stock: 35 }
      ]
    },
    {
      id: '36',
      name: 'Apex Shyne',
      basePrice: 365,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-shyne.png',
      stock: 75,
      volumeOptions: [
        { volume: '1L', price: 365, stock: 75 },
        { volume: '4L', price: 1925, stock: 60 },
        { volume: '10L', price: 4600, stock: 45 },
        { volume: '20L', price: 8710, stock: 30 }
      ]
    },
    {
      id: '37',
      name: 'Apex Advance',
      basePrice: 263,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-advance.png',
      stock: 70,
      volumeOptions: [
        { volume: '1L', price: 263, stock: 70 },
        { volume: '4L', price: 978, stock: 55 },
        { volume: '10L', price: 2285, stock: 40 },
        { volume: '20L', price: 4605, stock: 30 }
      ]
    },
    {
      id: '38',
      name: 'Ace',
      basePrice: 301,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/ace-exterior.png',
      stock: 85,
      volumeOptions: [
        { volume: '1L', price: 301, stock: 85 },
        { volume: '4L', price: 1133, stock: 70 },
        { volume: '10L', price: 2960, stock: 55 },
        { volume: '20L', price: 5030, stock: 40 }
      ]
    },
    {
      id: '39',
      name: 'Ace Sparc',
      basePrice: 159,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/ace-sparc.png',
      stock: 80,
      volumeOptions: [
        { volume: '1L', price: 159, stock: 80 },
        { volume: '4L', price: 947, stock: 65 },
        { volume: '10L', price: 2212, stock: 50 },
        { volume: '20L', price: 3603, stock: 35 }
      ]
    },
    {
      id: '40',
      name: 'Ace Advance',
      basePrice: 263,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/ace-advance.png',
      stock: 75,
      volumeOptions: [
        { volume: '1L', price: 263, stock: 75 },
        { volume: '4L', price: 978, stock: 60 },
        { volume: '10L', price: 2285, stock: 45 },
        { volume: '20L', price: 4605, stock: 30 }
      ]
    },
    {
      id: '41',
      name: 'Roofseal (Terrace)',
      basePrice: 465,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: '/products/roofseal-ultra.jpeg',
      stock: 45,
      volumeOptions: [
        { volume: '1L', price: 465, stock: 45 },
        { volume: '4L', price: 1675, stock: 35 },
        { volume: '10L', price: 4175, stock: 25 },
        { volume: '20L', price: 7355, stock: 15 }
      ]
    },
    {
      id: '42',
      name: 'Sureseal (Wall)',
      basePrice: 0,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: '/products/sureseal.webp',
      stock: 50,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 50 },
        { volume: '4L', price: 0, stock: 40 },
        { volume: '10L', price: 0, stock: 30 },
        { volume: '20L', price: 0, stock: 20 }
      ]
    },
    {
      id: '43',
      name: 'Rain Coat Star (Wall)',
      basePrice: 560,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: '/products/raincoat-star.webp',
      stock: 40,
      volumeOptions: [
        { volume: '1L', price: 560, stock: 40 },
        { volume: '4L', price: 2150, stock: 30 },
        { volume: '10L', price: 5165, stock: 25 },
        { volume: '20L', price: 9900, stock: 15 }
      ]
    },
    {
      id: '44',
      name: 'Pidifin 2k (Bathroom)',
      basePrice: 580,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: '/products/pidifin-2k.webp',
      stock: 35,
      volumeOptions: [
        { volume: '3kg', price: 580, stock: 35 },
        { volume: '9kg', price: 1395, stock: 25 },
        { volume: '15kg', price: 2360, stock: 20 }
      ]
    },
    {
      id: '45',
      name: 'Bitufix (Foundation)',
      basePrice: 0,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: '/products/bitufix.webp',
      stock: 30,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 30 },
        { volume: '4L', price: 0, stock: 20 },
        { volume: '10L', price: 0, stock: 15 },
        { volume: '20L', price: 0, stock: 10 }
      ]
    },
    {
      id: '46',
      name: 'Damp Proof (Terrace)',
      basePrice: 453,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-proof.png',
      stock: 40,
      volumeOptions: [
        { volume: '1L', price: 453, stock: 40 },
        { volume: '4L', price: 1692, stock: 30 },
        { volume: '10L', price: 4068, stock: 25 },
        { volume: '20L', price: 7840, stock: 15 }
      ]
    },
    {
      id: '47',
      name: 'Damp Proof Ultra (Terrace)',
      basePrice: 0,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-proof-ultra.png',
      stock: 35,
      volumeOptions: [
        { volume: '1L', price: 0, stock: 35, disabled: true },
        { volume: '4L', price: 2144, stock: 25 },
        { volume: '10L', price: 0, stock: 20, disabled: true },
        { volume: '20L', price: 10237, stock: 10 }
      ]
    },
    {
      id: '51',
      name: 'Damp Sheath Intr (Wall)',
      basePrice: 272,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-sheath-interior.png',
      stock: 40,
      volumeOptions: [
        { volume: '1L', price: 272, stock: 40 },
        { volume: '4L', price: 1196, stock: 30 },
        { volume: '10L', price: 2050, stock: 25 },
        { volume: '20L', price: 5135, stock: 15 }
      ]
    },
    {
      id: '50',
      name: 'Damp Sheath Advance Ext (Wall)',
      basePrice: 361,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-sheath-exterior-advanced.png',
      stock: 35,
      volumeOptions: [
        { volume: '1L', price: 361, stock: 35 },
        { volume: '4L', price: 1270, stock: 25 },
        { volume: '10L', price: 2899, stock: 20 },
        { volume: '20L', price: 5635, stock: 10 }
      ]
    },
    {
      id: '52',
      name: 'Damp Block (Bathroom)',
      basePrice: 538,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-block.png',
      stock: 30,
      volumeOptions: [
        { volume: '3kg', price: 538, stock: 30 },
        { volume: '9kg', price: 0, stock: 20, disabled: true },
        { volume: '15kg', price: 2542, stock: 15 }
      ]
    },
  ],
  categories: ['Interior', 'Exterior', 'Waterproofing'],
  brands: ['Asian Paints', 'Jotun Paint', 'Ezdee Paint', 'MRF', 'Birla Oppus', 'JK', 'Dr Fixit', 'Indigo']
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
      const newProduct = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.products.push(newProduct);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    addCategory: (state, action: PayloadAction<string>) => {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);
      }
    },
    initializeFromStorage: (state) => {
      return state;
    },
  },
});

export const { 
  setProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct,
  addCategory,
  initializeFromStorage
} = productSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectCategories = (state: RootState) => state.products.categories;
export const selectProductById = (state: RootState, productId: string) => 
  state.products.products.find(product => product.id === productId);
export const selectBrands = (state: RootState) => state.products.brands;

export default productSlice.reducer; 
