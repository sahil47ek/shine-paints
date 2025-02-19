import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  isBestSeller?: boolean;
  isSpecialOffer?: boolean;
  specialOfferDiscount?: number;
}

interface ProductState {
  products: Product[];
  categories: string[];
}

const initialState: ProductState = {
  products: [
    {
      id: '1',
      name: 'Premium Interior Paint',
      description: 'High-quality interior paint with excellent coverage',
      price: 49.99,
      category: 'Interior',
      image: 'https://placehold.co/800x600/rose/white/png?text=Interior+Paint',
      stock: 100,
      isBestSeller: true,
    },
    {
      id: '2',
      name: 'Exterior Weather Shield',
      description: 'Weather-resistant exterior paint',
      price: 59.99,
      category: 'Exterior',
      image: 'https://placehold.co/800x600/purple/white/png?text=Exterior+Paint',
      stock: 75,
      isSpecialOffer: true,
      specialOfferDiscount: 10,
    },
    {
      id: '3',
      name: 'Wood Finish Classic',
      description: 'Premium wood finish for lasting protection',
      price: 44.99,
      category: 'Wood Finish',
      image: 'https://placehold.co/800x600/amber/white/png?text=Wood+Finish',
      stock: 50,
      isBestSeller: true,
    },
    {
      id: '4',
      name: 'Metal Paint Pro',
      description: 'Professional-grade metal paint',
      price: 64.99,
      category: 'Metal Paint',
      image: 'https://placehold.co/800x600/blue/white/png?text=Metal+Paint',
      stock: 60,
      isSpecialOffer: true,
      specialOfferDiscount: 15,
    },
  ],
  categories: ['Interior', 'Exterior', 'Wood Finish', 'Metal Paint'],
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

export default productSlice.reducer; 
