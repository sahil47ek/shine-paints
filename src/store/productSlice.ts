import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  image: string;
  stock: number;
  isBestSeller?: boolean;
  isSpecialOffer?: boolean;
  specialOfferDiscount?: number;
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
      description: 'Premium interior paint with excellent coverage and a smooth, durable finish. Perfect for living rooms and bedrooms.',
      price: 49.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 100
    },
    {
      id: '2',
      name: 'Wonderwall Life',
      description: 'High-quality interior paint with advanced durability and washability. Ideal for high-traffic areas and family spaces.',
      price: 45.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 85
    },
    {
      id: '3',
      name: 'Tex Ultra',
      description: 'Premium exterior paint with superior weather resistance and UV protection. Perfect for protecting your home from harsh elements.',
      price: 59.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 75
    },
    {
      id: '4',
      name: 'Waterxtreme',
      description: 'Advanced waterproof exterior paint with superior protection against water damage and moisture. Ideal for areas with heavy rainfall.',
      price: 64.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 60
    },
    {
      id: '5',
      name: 'Hygiene',
      description: 'Antibacterial interior paint with advanced hygiene protection. Perfect for hospitals, clinics, and high-hygiene areas.',
      price: 54.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 70
    },
    {
      id: '6',
      name: 'Fenomestic Wonder Wall',
      description: 'Premium interior paint with excellent coverage and a smooth finish. Perfect for modern living spaces.',
      price: 47.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 90
    },
    {
      id: '7',
      name: 'Colourxtreme Matt',
      description: 'Premium exterior paint with a sophisticated matt finish. Provides excellent color retention and weather resistance.',
      price: 62.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 65
    },
    {
      id: '8',
      name: 'Colourxtreme Silk',
      description: 'Premium exterior paint with a luxurious silk finish. Offers superior durability and a beautiful sheen.',
      price: 67.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 55
    },
    {
      id: '9',
      name: 'Fenomestic My Home Rich Matt',
      description: 'Premium interior paint with a rich matt finish. Provides excellent coverage and a sophisticated look for your home.',
      price: 52.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 80
    },
    {
      id: '10',
      name: 'Fenomestic My Home Smooth Silk',
      description: 'Premium interior paint with a smooth silk finish. Offers a luxurious sheen and excellent durability for your home.',
      price: 57.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 75
    },
    {
      id: '11',
      name: 'Jotashield Matt',
      description: 'Premium exterior paint with a sophisticated matt finish. Provides excellent protection against weather elements.',
      price: 69.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 50
    },
    {
      id: '12',
      name: 'Jotashield Silk',
      description: 'Premium exterior paint with a luxurious silk finish. Offers superior weather protection and a beautiful sheen.',
      price: 74.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 45
    },
    {
      id: '13',
      name: 'Fenomestic Matt',
      description: 'Classic interior paint with a beautiful matt finish. Perfect for creating a sophisticated and modern look in any room.',
      price: 44.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 85
    },
    {
      id: '14',
      name: 'Fenomestic Silk',
      description: 'Classic interior paint with a luxurious silk finish. Ideal for creating an elegant and refined atmosphere.',
      price: 49.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 80
    },
    {
      id: '15',
      name: 'Easycoat Plus Matt',
      description: 'Durable exterior paint with a matt finish. Provides excellent weather protection and easy maintenance.',
      price: 59.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 70
    },
    {
      id: '16',
      name: 'Easycoat Plus Silk',
      description: 'Durable exterior paint with a silk finish. Offers superior weather resistance and a beautiful sheen.',
      price: 64.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 65
    },
    {
      id: '17',
      name: 'Action White',
      description: 'High-quality interior paint with excellent coverage and a bright, clean finish. Perfect for creating a fresh and modern look.',
      price: 39.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 95
    },
    {
      id: '18',
      name: 'Action Silk',
      description: 'Premium interior paint with a luxurious silk finish. Provides excellent durability and a beautiful sheen for any room.',
      price: 44.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 90
    },
    {
      id: '19',
      name: 'Jolly Fix',
      description: 'Specialized interior paint with advanced adhesion properties. Ideal for difficult surfaces and high-traffic areas.',
      price: 49.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 75
    },
    {
      id: '20',
      name: 'Easycoat Extra',
      description: 'Enhanced exterior paint with superior weather protection and durability. Perfect for long-lasting exterior finishes.',
      price: 54.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 80
    },
    {
      id: '21',
      name: 'Easycoat',
      description: 'Reliable exterior paint with excellent weather resistance. Provides good coverage and protection for exterior surfaces.',
      price: 49.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 85
    },
    {
      id: '22',
      name: 'Royale Glitz Matt',
      description: 'Premium interior paint with a sophisticated matt finish. Provides excellent coverage and a modern look.',
      price: 59.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 90
    },
    {
      id: '23',
      name: 'Royale Glitz Silk',
      description: 'Luxurious interior paint with a beautiful silk finish. Offers superior durability and a premium sheen.',
      price: 64.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 85
    },
    {
      id: '24',
      name: 'Apcolite Advance',
      description: 'Advanced interior paint with superior washability and durability. Perfect for high-traffic areas.',
      price: 49.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 95
    },
    {
      id: '25',
      name: 'Apcolite Advance Shyne',
      description: 'Premium interior paint with a beautiful shine. Provides excellent coverage and durability.',
      price: 54.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 80
    },
    {
      id: '26',
      name: 'Apcolite All Protect',
      description: 'Specialized interior paint with advanced protection against stains and marks. Ideal for family homes.',
      price: 59.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 75
    },
    {
      id: '27',
      name: 'Premium Emulsion',
      description: 'High-quality interior paint with excellent coverage and durability. Perfect for all interior surfaces.',
      price: 44.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 100
    },
    {
      id: '28',
      name: 'Tractor Shyne',
      description: 'Durable interior paint with a beautiful shine. Provides excellent coverage and washability.',
      price: 39.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 90
    },
    {
      id: '29',
      name: 'Tractor Spark',
      description: 'Premium interior paint with a sparkling finish. Perfect for creating a vibrant atmosphere.',
      price: 44.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 85
    },
    {
      id: '30',
      name: 'Tractor Advance',
      description: 'Advanced interior paint with superior durability and washability. Ideal for modern homes.',
      price: 49.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 80
    },
    {
      id: '31',
      name: 'Ultima Protect Duro Lite',
      description: 'Lightweight exterior paint with superior protection. Perfect for long-lasting exterior finishes.',
      price: 69.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 70
    },
    {
      id: '32',
      name: 'Ultima Protect Stretch',
      description: 'Advanced exterior paint with excellent elasticity. Provides superior protection against cracks.',
      price: 74.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 65
    },
    {
      id: '33',
      name: 'Apex Ultima',
      description: 'Premium exterior paint with superior weather protection. Perfect for harsh climates.',
      price: 64.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 75
    },
    {
      id: '34',
      name: 'Apex Ultima Stretch',
      description: 'Advanced exterior paint with excellent elasticity and weather protection. Ideal for all climates.',
      price: 69.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 70
    },
    {
      id: '35',
      name: 'Apex',
      description: 'High-quality exterior paint with excellent weather resistance. Perfect for all exterior surfaces.',
      price: 59.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 80
    },
    {
      id: '36',
      name: 'Apex Shyne',
      description: 'Premium exterior paint with a beautiful shine. Provides excellent weather protection.',
      price: 64.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 75
    },
    {
      id: '37',
      name: 'Apex Advance',
      description: 'Advanced exterior paint with superior durability and weather protection. Ideal for all surfaces.',
      price: 69.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 70
    },
    {
      id: '38',
      name: 'Ace',
      description: 'Reliable exterior paint with excellent weather resistance. Perfect for budget-conscious projects.',
      price: 49.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 85
    },
    {
      id: '39',
      name: 'Ace Spark',
      description: 'Premium exterior paint with a sparkling finish. Provides good weather protection.',
      price: 54.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 80
    },
    {
      id: '40',
      name: 'Ace Advance',
      description: 'Advanced exterior paint with superior durability. Perfect for long-lasting finishes.',
      price: 59.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 75
    },
    {
      id: '41',
      name: 'Roofseal (Terrace)',
      description: 'Premium waterproofing solution for terraces and flat roofs. Provides excellent protection against water seepage and UV rays.',
      price: 89.99,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 45
    },
    {
      id: '42',
      name: 'Sureseal (Wall)',
      description: 'Advanced wall waterproofing solution that prevents water penetration and dampness in walls.',
      price: 79.99,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 50
    },
    {
      id: '43',
      name: 'Rain Coat Star (Wall)',
      description: 'High-performance waterproofing coating for exterior walls, providing long-lasting protection against rain and moisture.',
      price: 84.99,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 40
    },
    {
      id: '44',
      name: 'Pidifin 2k (Bathroom)',
      description: 'Two-component waterproofing system specifically designed for bathrooms and wet areas.',
      price: 94.99,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 35
    },
    {
      id: '45',
      name: 'Bitufix (Foundation)',
      description: 'Specialized waterproofing solution for foundations and basements, providing superior protection against water ingress.',
      price: 99.99,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 30
    },
    {
      id: '46',
      name: 'Damp Proof (Terrace)',
      description: 'Premium waterproofing solution for terraces, providing excellent protection against water seepage and UV rays.',
      price: 85.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 40
    },
    {
      id: '47',
      name: 'Damp Proof Ultra (Terrace)',
      description: 'Advanced waterproofing solution for terraces with enhanced protection and durability.',
      price: 95.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 35
    },
    {
      id: '48',
      name: 'Damp Proof (Wall)',
      description: 'Effective wall waterproofing solution that prevents water penetration and dampness.',
      price: 75.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 45
    },
    {
      id: '49',
      name: 'Hydroloc (Wall)',
      description: 'High-performance waterproofing coating for walls, providing long-lasting protection against moisture.',
      price: 80.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 40
    },
    {
      id: '50',
      name: 'Damp Sheath Advance Ext (Wall)',
      description: 'Advanced exterior wall waterproofing system with superior protection against water ingress.',
      price: 90.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 35
    },
    {
      id: '51',
      name: 'Damp Sheath Intr (Wall)',
      description: 'Specialized interior wall waterproofing solution for preventing dampness and moisture.',
      price: 78.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 40
    },
    {
      id: '52',
      name: 'Damp Block (Bathroom)',
      description: 'Comprehensive bathroom waterproofing solution that prevents water seepage and protects against moisture damage.',
      price: 88.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 30
    },
    {
      id: '53',
      name: 'Water Extreme Base Coat + Top Coat (Wall)',
      description: 'Complete waterproofing system for walls with base coat and top coat. Provides superior protection against water penetration and moisture damage.',
      price: 89.99,
      category: 'Waterproofing',
      brand: 'Jotun Paint',
      image: 'https://img.freepik.com/free-photo/paint-can-with-paintbrush_23-2148188272.jpg',
      stock: 40
    }
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
