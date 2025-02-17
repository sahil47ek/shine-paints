import { create } from 'zustand'

interface Product {
  id: string
  name: string
  price: number
  image: string
  isBestSeller: boolean
}

interface AppState {
  isNavOpen: boolean
  products: Product[]
  setNavOpen: (isOpen: boolean) => void
  setProducts: (products: Product[]) => void
}

export const useStore = create<AppState>()((set) => ({
  isNavOpen: false,
  products: [
    {
      id: '1',
      name: 'Premium Interior Paint',
      price: 49.99,
      image: '/images/product1.jpg',
      isBestSeller: true
    },
    {
      id: '2',
      name: 'Weather Shield Exterior',
      price: 59.99,
      image: '/images/product2.jpg',
      isBestSeller: true
    },
    {
      id: '3',
      name: 'Eco-Friendly Wall Paint',
      price: 54.99,
      image: '/images/product3.jpg',
      isBestSeller: true
    },
    {
      id: '4',
      name: 'Designer Color Collection',
      price: 64.99,
      image: '/images/product4.jpg',
      isBestSeller: true
    }
  ],
  setNavOpen: (isOpen: boolean) => set({ isNavOpen: isOpen }),
  setProducts: (products: Product[]) => set({ products: products })
})) 