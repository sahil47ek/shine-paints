import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  isBestSeller: boolean;
  isSpecialOffer: boolean;
  specialOfferDiscount?: number;
}

interface ProductState {
  products: Product[];
  initialized: boolean;
}

// Default product data
const defaultProducts: Product[] = [{
  id: '1',
  name: 'Premium Interior Paint',
  description: 'High-quality interior paint with excellent coverage',
  price: 49.99,
  category: 'Interior',
  image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80',
  stock: 50,
  isBestSeller: true,
  isSpecialOffer: false,
  specialOfferDiscount: 0
}];

const initialState: ProductState = {
  products: defaultProducts,
  initialized: false
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initializeFromStorage: (state) => {
      if (typeof window !== 'undefined' && !state.initialized) {
        const storedProducts = localStorage.getItem('shine-paints-products');
        if (storedProducts) {
          state.products = JSON.parse(storedProducts);
        }
        state.initialized = true;
      }
    },
    addProduct: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
      const newProduct = {
        ...action.payload,
        id: Date.now().toString()
      };
      state.products.push(newProduct);
      if (typeof window !== 'undefined') {
        localStorage.setItem('shine-paints-products', JSON.stringify(state.products));
      }
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
        if (typeof window !== 'undefined') {
          localStorage.setItem('shine-paints-products', JSON.stringify(state.products));
        }
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('shine-paints-products', JSON.stringify(state.products));
      }
    }
  }
});

// Export actions
export const { initializeFromStorage, addProduct, updateProduct, deleteProduct } = productSlice.actions;

// Export selectors
export const selectAllProducts = (state: { products: ProductState }) => state.products.products;
export const selectCategories = (state: { products: ProductState }) => {
  return Array.from(new Set(state.products.products.map(product => product.category))).sort();
};

export default productSlice.reducer; 