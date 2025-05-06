import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface Product {
  id: string;
  name: string;
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
      price: 49.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-wonderwall-lux.webp',
      stock: 100
    },
    {
      id: '2',
      name: 'Wonderwall Life',
      price: 45.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-wonderwall-life.jpg',
      stock: 85
    },
    {
      id: '3',
      name: 'Tex Ultra',
      price: 59.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/tex-ultra.webp',
      stock: 75
    },
    {
      id: '4',
      name: 'Waterxtreme',
      price: 64.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/waterxtreme.webp',
      stock: 60
    },
    {
      id: '5',
      name: 'Hygiene',
      price: 54.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-hygiene.jpeg',
      stock: 70
    },
    {
      id: '6',
      name: 'Fenomestic Wonder Wall',
      price: 47.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-wonderwall.webp',
      stock: 90
    },
    {
      id: '7',
      name: 'Colourxtreme ',
      price: 62.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/colourxtreme.jpg',
      stock: 65
    },
    {
      id: '9',
      name: 'Fenomestic My Home Rich Matt',
      price: 52.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-my-home-matt.jpg',
      stock: 80
    },
    {
      id: '10',
      name: 'Fenomestic My Home Smooth Silk',
      price: 57.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-my-home-silk.jpg',
      stock: 75
    },
    {
      id: '11',
      name: 'Jotashield Matt',
      price: 69.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/jotashield-matt.webp',
      stock: 50
    },
    {
      id: '12',
      name: 'Jotashield Silk',
      price: 74.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/jotashield-silk.webp',
      stock: 45
    },
    {
      id: '13',
      name: 'Fenomestic Matt',
      price: 44.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/fenomastic-matt.webp',
      stock: 85
    },
    {
      id: '15',
      name: 'Easycoat Plus Matt',
      price: 59.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/easycoat-plus.jpeg',
      stock: 70
    },
    {
      id: '17',
      name: 'Action White',
      price: 39.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/action-white.png',
      stock: 95
    },
    {
      id: '18',
      name: 'Action Silk',
      price: 44.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/action-silk.webp',
      stock: 90
    },
    {
      id: '19',
      name: 'Jolly Fix',
      price: 49.99,
      category: 'Interior',
      brand: 'Jotun Paint',
      image: '/products/jollyfix.jpg',
      stock: 75
    },
    {
      id: '20',
      name: 'Easycoat Extra',
      price: 54.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/easycoat-xtra.webp',
      stock: 80
    },
    {
      id: '21',
      name: 'Easycoat',
      price: 49.99,
      category: 'Exterior',
      brand: 'Jotun Paint',
      image: '/products/easycoat.jpeg',
      stock: 85
    },
    {
      id: '22',
      name: 'Royale Glitz Ultra Matt',
      price: 59.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/royale-glitz-ultra-matt.png',
      stock: 90
    },
    {
      id: '23',
      name: 'Royale Glitz',
      price: 64.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/royale-glitz.png',
      stock: 85
    },
    {
      id: '24',
      name: 'Apcolite Advance',
      price: 49.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/apcolite-advance.png',
      stock: 95
    },
    {
      id: '25',
      name: 'Apcolite Advance Shyne',
      price: 54.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/apcolite-shyne.png',
      stock: 80
    },
    {
      id: '26',
      name: 'Apcolite All Protect',
      price: 59.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/apcolite-all-protek.png',
      stock: 75
    },
    {
      id: '27',
      name: 'Apcolite Premium Emulsion',
      price: 44.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/apcolite-premium-emulsion.png',
      stock: 100
    },
    {
      id: '28',
      name: 'Tractor Shyne Advanced',
      price: 39.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/tractor-shyne-advanced.png',
      stock: 90
    },
    {
      id: '29',
      name: 'Tractor Sparc',
      price: 44.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/tractor-sparc.png',
      stock: 85
    },
    {
      id: '30',
      name: 'Tractor Emulsion Advance',
      price: 49.99,
      category: 'Interior',
      brand: 'Asian Paints',
      image: '/products/tractor-emulsion-advanced.png',
      stock: 80
    },
    {
      id: '31',
      name: 'Apex Ultima Protek Duralife',
      price: 69.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-ultima-protek-duralife.png',
      stock: 70
    },
    {
      id: '32',
      name: 'Apex Ultima Protek',
      price: 74.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-ultima-protek.png',
      stock: 65
    },
    {
      id: '33',
      name: 'Apex Ultima',
      price: 64.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-ultima.png',
      stock: 75
    },
    {
      id: '34',
      name: 'Apex Ultima Stretch',
      price: 69.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-ultima-stretch.png',
      stock: 70
    },
    {
      id: '35',
      name: 'Apex',
      price: 59.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-exterior.png',
      stock: 80
    },
    {
      id: '36',
      name: 'Apex Shyne',
      price: 64.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-shyne.png',
      stock: 75
    },
    {
      id: '37',
      name: 'Apex Advance',
      price: 69.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/apex-advance.png',
      stock: 70
    },
    {
      id: '38',
      name: 'Ace',
      price: 49.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/ace-exterior.png',
      stock: 85
    },
    {
      id: '39',
      name: 'Ace Sparc',
      price: 54.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/ace-sparc.png',
      stock: 80
    },
    {
      id: '40',
      name: 'Ace Advance',
      price: 59.99,
      category: 'Exterior',
      brand: 'Asian Paints',
      image: '/products/ace-advance.png',
      stock: 75
    },
    {
      id: '41',
      name: 'Roofseal (Terrace)',
      price: 89.99,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: '/products/roofseal-ultra.jpeg',
      stock: 45
    },
    {
      id: '42',
      name: 'Sureseal (Wall)',
      price: 79.99,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: '/products/sureseal.webp',
      stock: 50
    },
    {
      id: '43',
      name: 'Rain Coat Star (Wall)',
      price: 84.99,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: '/products/raincoat-star.webp',
      stock: 40
    },
    {
      id: '44',
      name: 'Pidifin 2k (Bathroom)',
      price: 94.99,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: '/products/pidifin-2k.webp',
      stock: 35
    },
    {
      id: '45',
      name: 'Bitufix (Foundation)',
      price: 99.99,
      category: 'Waterproofing',
      brand: 'Dr Fixit',
      image: '/products/bitufix.webp',
      stock: 30
    },
    {
      id: '46',
      name: 'Damp Proof (Terrace)',
      price: 85.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-proof.png',
      stock: 40
    },
    {
      id: '47',
      name: 'Damp Proof Ultra (Terrace)',
      price: 95.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-proof-ultra.png',
      stock: 35
    },
    {
      id: '48',
      name: 'Damp Proof (Wall)',
      price: 75.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-proof.png',
      stock: 45
    },
    {
      id: '49',
      name: 'Hydroloc (Wall)',
      price: 80.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/hydroloc.png',
      stock: 40
    },
    {
      id: '50',
      name: 'Damp Sheath Advance Ext (Wall)',
      price: 90.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-sheath-exterior-advanced.png',
      stock: 35
    },
    {
      id: '51',
      name: 'Damp Sheath Intr (Wall)',
      price: 78.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-sheath-interior.png',
      stock: 40
    },
    {
      id: '52',
      name: 'Damp Block (Bathroom)',
      price: 88.99,
      category: 'Waterproofing',
      brand: 'Asian Paints',
      image: '/products/damp-block.png',
      stock: 30
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
