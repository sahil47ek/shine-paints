import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isBestSeller?: boolean;
  isSpecialOffer?: boolean;
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
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
      isBestSeller: true,
    },
    {
      id: '2',
      name: 'Exterior Weather Shield',
      description: 'Weather-resistant exterior paint',
      price: 59.99,
      category: 'Exterior',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828',
      isSpecialOffer: true,
    },
    // Add more sample products as needed
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
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productSlice.actions;

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectCategories = (state: RootState) => state.products.categories;

export default productSlice.reducer; 
