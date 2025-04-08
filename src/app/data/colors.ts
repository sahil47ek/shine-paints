export interface Color {
  id: number;
  name: string;
  hex: string;
  shades: {
    name: string;
    hex: string;
  }[];
  category: 'Classic' | 'Off-White' | 'Brights' | 'Accents' | 'Neutrals';
  brand: 'Asian Paints' | 'Jotun' | 'Fenomastic' | 'Jotashield' | 'Durosan';
  roomType: string[];
  mood: string[];
  description: string;
}

export const colors: Color[] = []; 