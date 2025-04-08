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

export const fenomasticColors: ColorFamily[] = [
  {
    name: "Blackened Black Family",
    brand: "Fenomastic",
    category: "Neutrals",
    colors: [
      {
        name: "Blackened Black",
        code: "9938",
        hex: "#2C2C2C",
        category: "Neutrals"
      },
      // Add more color variants of the same family here when available
    ]
  },
  {
    name: "Ocean Blues Family",
    brand: "Fenomastic",
    category: "Blues",
    colors: [
      {
        name: "Arctic Blue",
        code: "4445",
        hex: "#A8C5D6",
        category: "Blues"
      },
      {
        name: "Classic Blue",
        code: "4062",
        hex: "#4F77B3",
        category: "Blues"
      },
      {
        name: "Lake View",
        code: "5225",
        hex: "#5B8FA6",
        category: "Blues"
      },
      {
        name: "Parrot Blue",
        code: "4202",
        hex: "#4E8EAE",
        category: "Blues"
      },
      {
        name: "Retro Blue",
        code: "5159",
        hex: "#6B9BC1",
        category: "Blues"
      },
      
      {
        name: "Seashell",
        code: "2499",
        hex: "#E8EFF2",
        category: "Blues"
      },
      {
        name: "Surfer Blue",
        code: "5280",
        hex: "#3C7FA4",
        category: "Blues"
      },
      {
        name: "Svalbard Sea",
        code: "5262",
        hex: "#4B7B9E",
        category: "Blues"
      },
      {
        name: "Varm Blue",
        code: "4624",
        hex: "#6E98B8",
        category: "Blues"
      },
      {
        name: "Oxford River",
        code: "9915",
        hex: "#A4B5C6",
        category: "Blues"
      },
      {
        name: "Skylight",
        code: "1624",
        hex: "#E8EDF2",
        category: "Blues"
      }
    ]
  },
  {
    name: "Earth Tones Family",
    brand: "Fenomastic",
    category: "Browns",
    colors: [
      {
        name: "Lollipop Bamboo",
        code: "2622",
        hex: "#C4B5A2",
        category: "Browns"
      },
      {
        name: "Moon Reflection",
        code: "4072",
        hex: "#B3ADA3",
        category: "Browns"
      },
      {
        name: "Thousand Nights",
        code: "4454",
        hex: "#8B7B6B",
        category: "Browns"
      },
      {
        name: "Vandyke Brown",
        code: "10249",
        hex: "#594941",
        category: "Browns"
      },
      {
        name: "Almond Butter",
        code: "10966",
        hex: "#E5D9C9",
        category: "Browns"
      },
      {
        name: "Hipster Brown",
        code: "10965",
        hex: "#D6C7B7",
        category: "Browns"
      }
    ]
  },
  {
    name: "Coffee Tones Family",
    brand: "Fenomastic",
    category: "Neutrals",
    colors: [
      {
        name: "Macchiato",
        code: "1359",
        hex: "#E6D5C6",
        category: "Neutrals"
      },
      {
        name: "Vanilla Latte",
        code: "1519",
        hex: "#F0E6D8",
        category: "Neutrals"
      },
      {
        name: "French Beige",
        code: "20046",
        hex: "#D4C4B7",
        category: "Neutrals"
      },
    ]
  },
  {
    name: "Garden Greens Family",
    brand: "Fenomastic",
    category: "Greens",
    colors: [
      {
        name: "Bubbly Green",
        code: "6221",
        hex: "#90B891",
        category: "Greens"
      },
      {
        name: "Classic Green",
        code: "6243",
        hex: "#4A7B4C",
        category: "Greens"
      },
      {
        name: "Cupcake Green",
        code: "6267",
        hex: "#B8D4B9",
        category: "Greens"
      },
      
      {
        name: "Moss Green",
        code: "7354",
        hex: "#5B7748",
        category: "Greens"
      },
      {
        name: "Spring Leaf",
        code: "7003",
        hex: "#A3C9A4",
        category: "Greens"
      },
      {
        name: "Zanbaq",
        code: "7270",
        hex: "#8AAB8B",
        category: "Greens"
      },
      {
        name: "Spring Air",
        code: "8087",
        hex: "#E8EDE8",
        category: "Greens"
      },
      {
        name: "Antique Green",
        code: "10960",
        hex: "#D5E0D5",
        category: "Greens"
      },
      {
        name: "Sea Emerald",
        code: "6084",
        hex: "#4A8B8C",
        category: "Blues"
      },
      {
        name: "Sea Turtle",
        code: "5208",
        hex: "#5B8E8A",
        category: "Blues"
      },
    ]
  },
  {
    name: "Modern Greys Family",
    brand: "Fenomastic",
    category: "Greys",
    colors: [
      {
        name: "Eclipse Grey",
        code: "4017",
        hex: "#595B5E",
        category: "Greys"
      },
      {
        name: "Industrial Grey",
        code: "5343",
        hex: "#6B6D70",
        category: "Greys"
      },
      {
        name: "Jazz Grey",
        code: "9930",
        hex: "#4D4F52",
        category: "Greys"
      },
      {
        name: "Limestone",
        code: "10341",
        hex: "#D1D2D4",
        category: "Greys"
      },
      {
        name: "Matrix",
        code: "9913",
        hex: "#363839",
        category: "Greys"
      },
      {
        name: "Pebblestone",
        code: "1877",
        hex: "#9B9C9E",
        category: "Greys"
      },
      {
        name: "Platinum",
        code: "9911",
        hex: "#E5E6E8",
        category: "Greys"
      },
      {
        name: "Sable Stone",
        code: "10342",
        hex: "#7F8184",
        category: "Greys"
      },
      {
        name: "Silver Tone",
        code: "8094",
        hex: "#C4C5C7",
        category: "Greys"
      },
      {
        name: "Iron Grey",
        code: "1032",
        hex: "#4A4C4F",
        category: "Greys"
      },
      {
        name: "Comfort Grey",
        code: "12078",
        hex: "#E5E5E3",
        category: "Greys"
      },
      {
        name: "Sheer Grey",
        code: "12077",
        hex: "#DEDEDD",
        category: "Greys"
      },
      {
        name: "Reflection",
        code: "1622",
        hex: "#E9EBE9",
        category: "Neutrals"
      },
    ]
  },
  {
    name: "Soft Pinks Family",
    brand: "Fenomastic",
    category: "Pinks",
    colors: [
      {
        name: "Soft Flamingo",
        code: "3206",
        hex: "#FFB5B5",
        category: "Pinks"
      },
      {
        name: "Petit Four",
        code: "2613",
        hex: "#F8D1D1",
        category: "Pinks"
      },
      {
        name: "Princess Pink",
        code: "3242",
        hex: "#FFB6C1",
        category: "Pinks"
      },
      {
        name: "Naughty Pink",
        code: "3185",
        hex: "#FF69B4",
        category: "Pinks"
      },
      {
        name: "Sand Rose",
        code: "1140",
        hex: "#F7CAC9",
        category: "Pinks"
      },
      {
        name: "Petals",
        code: "1156",
        hex: "#FFE4E1",
        category: "Pinks"
      },
      {
        name: "Tutu Pink",
        code: "3244",
        hex: "#FFC0CB",
        category: "Pinks"
      },
      {
        name: "Silky Pink",
        code: "12085",
        hex: "#FFF0F5",
        category: "Pinks"
      },
      {
        name: "Frosted Rose",
        code: "1352",
        hex: "#FFE4E1",
        category: "Pinks"
      },
      {
        name: "Devine",
        code: "12083",
        hex: "#F2E4E6",
        category: "Pinks"
      },
      {
        name: "Dusky Peony",
        code: "12084",
        hex: "#E8D4D6",
        category: "Pinks"
      },
      {
        name: "Rose Basket",
        code: "2619",
        hex: "#E8D6D6",
        category: "Neutrals"
      },
      {
        name: "Romantic",
        code: "1304",
        hex: "#E8D8D8",
        category: "Neutrals"
      },
    ]
  },
  {
    name: "Purple Dreams Family",
    brand: "Fenomastic",
    category: "Purples",
    colors: [
      {
        name: "Heath Violet",
        code: "177",
        hex: "#9B6B9E",
        category: "Purples"
      },
      {
        name: "Slate Lavender",
        code: "10982",
        hex: "#967BB6",
        category: "Purples"
      },
      {
        name: "Purple Dreams",
        code: "20047",
        hex: "#8B4789",
        category: "Purples"
      },
      
    ]
  },
  {
    name: "Pure Whites Family",
    brand: "Fenomastic",
    category: "Whites",
    colors: [
      {
        name: "Jazz White",
        code: "7236",
        hex: "#FFFFFF",
        category: "Whites"
      },
      {
        name: "Milky Way",
        code: "1832",
        hex: "#FAFAFA",
        category: "Whites"
      },
      {
        name: "Peppermint",
        code: "8003",
        hex: "#F5F5F5",
        category: "Whites"
      },
      {
        name: "Crisp White",
        code: "9910",
        hex: "#FFFFFF",
        category: "Whites"
      },
      {
        name: "Classic White",
        code: "9918",
        hex: "#FCFCFC",
        category: "Whites"
      },
      {
        name: "Coconut White",
        code: "1876",
        hex: "#F8F8F8",
        category: "Whites"
      },
      {
        name: "Egg White",
        code: "1001",
        hex: "#F5F5F5",
        category: "Whites"
      },
      {
        name: "White Lily",
        code: "10182",
        hex: "#FFFFFF",
        category: "Whites"
      },
      {
        name: "Antic White",
        code: "1016",
        hex: "#F5F2EB",
        category: "Whites"
      },
      {
        name: "Cotton Ball",
        code: "1453",
        hex: "#F7F7F5",
        category: "Whites"
      },
    ]
  },
  {
    name: "Sunny Yellows Family",
    brand: "Fenomastic",
    category: "Yellows",
    colors: [
      {
        name: "Sun",
        code: "1369",
        hex: "#FFD700",
        category: "Yellows"
      },
      {
        name: "Lemon Zest",
        code: "7408",
        hex: "#FFF44F",
        category: "Yellows"
      }
    ]
  },
  {
    name: "Rich Reds Family",
    brand: "Fenomastic",
    category: "Reds",
    colors: [
      {
        name: "Sophisticated Red",
        code: "20217",
        hex: "#B22222",
        category: "Reds"
      },
      {
        name: "Bologna",
        code: "2115",
        hex: "#CD5C5C",
        category: "Reds"
      },
      {
        name: "Hibiscus",
        code: "2731",
        hex: "#E88D8D",
        category: "Reds"
      },
      {
        name: "Poison Red Palm Leaf",
        code: "3252",
        hex: "#9B4B4B",
        category: "Greens"
      },
      {
        name: "Fiery Crush",
        code: "3247",
        hex: "#E84D4D",
        category: "Reds"
      }
    ]
  },
  {
    name: "Elegant Neutrals Family",
    brand: "Fenomastic",
    category: "Neutrals",
    colors: [
      
      {
        name: "Elegant",
        code: "1434",
        hex: "#E5DCDC",
        category: "Neutrals"
      },
      {
        name: "Wild Elegance",
        code: "1432",
        hex: "#DCD1D1",
        category: "Neutrals"
      },
      
      {
        name: "Clear Magnolia",
        code: "1442",
        hex: "#F0EAE6",
        category: "Neutrals"
      },
      {
        name: "Washed Linen",
        code: "10679",
        hex: "#E8E4DC",
        category: "Neutrals"
      },
      {
        name: "Cashmere",
        code: "10683",
        hex: "#E5DFD7",
        category: "Neutrals"
      },
      
      
      {
        name: "Raw Canvas",
        code: "10961",
        hex: "#E5E2DC",
        category: "Neutrals"
      },
      {
        name: "Tidløs",
        code: "1024",
        hex: "#E8E5DC",
        category: "Neutrals"
      },
      {
        name: "Alladin",
        code: "4468",
        hex: "#E5E0D6",
        category: "Neutrals"
      },
      {
        name: "Paige",
        code: "4520",
        hex: "#E8E4DC",
        category: "Neutrals"
      }
    ]
  },
  
];

export default fenomasticColors; 