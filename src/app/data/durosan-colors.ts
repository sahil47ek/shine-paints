interface ColorVariant {
  name: string;
  code: string;
  hex: string;
  category: string;
}

interface ColorFamily {
  name: string;
  brand: string;
  category: string;
  colors: ColorVariant[];
}

export const durosanColors: ColorFamily[] = [
  {
    name: "Whites, Off-Whites & Creams",
    brand: "Durosan",
    category: "White & Cream",
    colors: [
      { name: "Egg White", code: "1024", hex: "#F8F8F8", category: "White & Cream" },
      { name: "Timeless", code: "10580", hex: "#F0F0F0", category: "White & Cream" },
      { name: "Soft Skin", code: "0567", hex: "#F8F0E8", category: "White & Cream" },
      { name: "Dazzle Light", code: "5272", hex: "#FFFFFF", category: "White & Cream" },
      { name: "White Clay", code: "Kitavanilla", hex: "#F0E8D8", category: "White & Cream" },
      { name: "Essence", code: "Essence", hex: "#F8E8D0", category: "White & Cream" }
    ]
  },
  {
    name: "Beige, Taupe & Browns",
    brand: "Durosan",
    category: "Brown & Beige",
    colors: [
      { name: "Stone", code: "0555", hex: "#B8A898", category: "Brown & Beige" },
      { name: "Wood Smoke", code: "0568", hex: "#A09080", category: "Brown & Beige" },
      { name: "Dusty Sand", code: "1777", hex: "#C8B8A8", category: "Brown & Beige" },
      { name: "Melon Seeds", code: "1776", hex: "#D0C0B0", category: "Brown & Beige" },
      { name: "Kofee", code: "20175", hex: "#8B6B4A", category: "Brown & Beige" }
    ]
  },
  {
    name: "Reds, Pinks & Corals",
    brand: "Durosan",
    category: "Red & Pink",
    colors: [
      { name: "Empire", code: "0520", hex: "#A03020", category: "Red & Pink" },
      { name: "Exotic Red", code: "Exotic", hex: "#B04030", category: "Red & Pink" },
      { name: "Corall", code: "Corall", hex: "#E07060", category: "Red & Pink" },
      { name: "Petal Pink", code: "Petal", hex: "#F0A090", category: "Red & Pink" },
      { name: "Red", code: "0926", hex: "#C05040", category: "Red & Pink" },
      { name: "Chili", code: "3145", hex: "#B03020", category: "Red & Pink" },
      { name: "Peela Chili", code: "Peela", hex: "#C04030", category: "Red & Pink" }
    ]
  },
  {
    name: "Yellows & Orange Tones",
    brand: "Durosan",
    category: "Yellow & Orange",
    colors: [
      { name: "Peela Chili", code: "8059", hex: "#E08040", category: "Yellow & Orange" },
      { name: "Vanilla Essence", code: "Vanilla", hex: "#F8E8B0", category: "Yellow & Orange" }
    ]
  },
  {
    name: "Greens",
    brand: "Durosan",
    category: "Green",
    colors: [
      { name: "Divine Green", code: "6203", hex: "#708060", category: "Green" },
      { name: "Svalbard Sea", code: "5262", hex: "#607050", category: "Green" },
      { name: "Mountain View", code: "7309", hex: "#506040", category: "Green" },
      { name: "Jungle Green", code: "7659", hex: "#405030", category: "Green" }
    ]
  },
  {
    name: "Blues",
    brand: "Durosan",
    category: "Blue",
    colors: [
      { name: "Eternal Blue", code: "4108", hex: "#304050", category: "Blue" },
      { name: "Gustavian Blue", code: "4109", hex: "#405060", category: "Blue" },
      { name: "Natural Energy", code: "4164", hex: "#506070", category: "Blue" },
      { name: "Neel", code: "4904", hex: "#607080", category: "Blue" },
      { name: "Surfer Blue", code: "5280", hex: "#708090", category: "Blue" },
      { name: "Iris Blue", code: "4035", hex: "#8090A0", category: "Blue" },
      { name: "Fjordgra", code: "4004", hex: "#90A0B0", category: "Blue" },
      { name: "Bahr", code: "6033", hex: "#A0B0C0", category: "Blue" }
    ]
  },
  {
    name: "Greys, Blacks & Silvers",
    brand: "Durosan",
    category: "Grey & Black",
    colors: [
      { name: "Platinum", code: "Platinum", hex: "#E0E0E0", category: "Grey & Black" },
      { name: "Steel", code: "0960", hex: "#C0C0C0", category: "Grey & Black" },
      { name: "Matrix", code: "9913", hex: "#A0A0A0", category: "Grey & Black" },
      { name: "Gra", code: "0386", hex: "#808080", category: "Grey & Black" },
      { name: "Flint", code: "0115", hex: "#606060", category: "Grey & Black" },
      { name: "Black", code: "0099", hex: "#202020", category: "Grey & Black" }
    ]
  }
]; 