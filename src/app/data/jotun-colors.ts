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

export const jotunColors: ColorFamily[] = [
  {
    name: "Brown & Beige",
    brand: "Jotun",
    category: "Brown & Beige",
    colors: [
      { name: "Desert Beige", code: "J101", hex: "#D4C4B7", category: "Brown & Beige" },
      { name: "Elegant Beige", code: "J102", hex: "#C8B8A8", category: "Brown & Beige" },
      { name: "Khaki", code: "J103", hex: "#B8A88C", category: "Brown & Beige" },
      { name: "True Brown", code: "J104", hex: "#8B6B4A", category: "Brown & Beige" },
      { name: "Natural Clay", code: "J105", hex: "#B8A088", category: "Brown & Beige" },
      { name: "Bare Beige", code: "J106", hex: "#E0D4C4", category: "Brown & Beige" },
      { name: "Rich Walnut", code: "J107", hex: "#5C4A3A", category: "Brown & Beige" },
      { name: "Deep Taupe", code: "J108", hex: "#8C7C6C", category: "Brown & Beige" },
      { name: "Sand Fossil", code: "J109", hex: "#D0C0B0", category: "Brown & Beige" },
      { name: "Cashmere Brown", code: "J110", hex: "#A09080", category: "Brown & Beige" },
      { name: "Rooted Brown", code: "J111", hex: "#6C5C4C", category: "Brown & Beige" },
      { name: "Timeless Walnut", code: "J112", hex: "#4C3C2C", category: "Brown & Beige" },
      { name: "Warm Earth", code: "J113", hex: "#B4A494", category: "Brown & Beige" },
      { name: "Polished Clay", code: "J114", hex: "#C8B8A8", category: "Brown & Beige" },
      { name: "Almond Beige", code: "J115", hex: "#E8D8C8", category: "Brown & Beige" },
      { name: "Fossil Grey", code: "J116", hex: "#A8A098", category: "Brown & Beige" }
    ]
  },
  {
    name: "Grey & Greige",
    brand: "Jotun",
    category: "Grey & Greige",
    colors: [
      { name: "Modern Grey", code: "J201", hex: "#A0A0A0", category: "Grey & Greige" },
      { name: "Urban Charm", code: "J202", hex: "#B0B0B0", category: "Grey & Greige" },
      { name: "Classic Greige", code: "J203", hex: "#C0C0B0", category: "Grey & Greige" },
      { name: "Concrete Grey", code: "J204", hex: "#808080", category: "Grey & Greige" },
      { name: "Majestic Grey", code: "J205", hex: "#707070", category: "Grey & Greige" },
      { name: "Elegant Greige", code: "J206", hex: "#D0D0C0", category: "Grey & Greige" },
      { name: "Mild Grey", code: "J207", hex: "#B8B8B8", category: "Grey & Greige" },
      { name: "Rock Grey", code: "J208", hex: "#606060", category: "Grey & Greige" },
      { name: "Stone Grey", code: "J209", hex: "#909090", category: "Grey & Greige" },
      { name: "Dusty Grey", code: "J210", hex: "#A8A8A8", category: "Grey & Greige" },
      { name: "Graphite Grey", code: "J211", hex: "#505050", category: "Grey & Greige" },
      { name: "Smoky Shadow", code: "J212", hex: "#404040", category: "Grey & Greige" },
      { name: "Nightfall Grey", code: "J213", hex: "#303030", category: "Grey & Greige" },
      { name: "Foggy Steel", code: "J214", hex: "#B0B0B8", category: "Grey & Greige" },
      { name: "Shadowed Silver", code: "J215", hex: "#C0C0C8", category: "Grey & Greige" },
      { name: "Soft Pewter", code: "J216", hex: "#D0D0D8", category: "Grey & Greige" }
    ]
  },
  {
    name: "Yellow & Cream",
    brand: "Jotun",
    category: "Yellow & Cream",
    colors: [
      { name: "Pale Dune", code: "J301", hex: "#F0E8D0", category: "Yellow & Cream" },
      { name: "Sunbeam", code: "J302", hex: "#F8E8B0", category: "Yellow & Cream" },
      { name: "Creamy Glow", code: "J303", hex: "#F8F0D8", category: "Yellow & Cream" },
      { name: "Mellow Yellow", code: "J304", hex: "#F0D8A0", category: "Yellow & Cream" },
      { name: "Buttercream", code: "J305", hex: "#F8E8C0", category: "Yellow & Cream" },
      { name: "Golden Olive", code: "J306", hex: "#D8C080", category: "Yellow & Cream" },
      { name: "Warm Sand", code: "J307", hex: "#E0D0A0", category: "Yellow & Cream" },
      { name: "Desert Glow", code: "J308", hex: "#E8C880", category: "Yellow & Cream" },
      { name: "Ochre Dust", code: "J309", hex: "#D0B070", category: "Yellow & Cream" },
      { name: "Soft Linen", code: "J310", hex: "#F0E8D8", category: "Yellow & Cream" },
      { name: "Citrus Cream", code: "J311", hex: "#F8E8B8", category: "Yellow & Cream" }
    ]
  },
  {
    name: "Orange & Terracotta",
    brand: "Jotun",
    category: "Orange & Terracotta",
    colors: [
      { name: "Rustic Brick", code: "J401", hex: "#B06040", category: "Orange & Terracotta" },
      { name: "Burnt Sienna", code: "J402", hex: "#A05030", category: "Orange & Terracotta" },
      { name: "Terracotta Clay", code: "J403", hex: "#C07050", category: "Orange & Terracotta" },
      { name: "Spiced Apricot", code: "J404", hex: "#E09070", category: "Orange & Terracotta" },
      { name: "Golden Terracotta", code: "J405", hex: "#D08060", category: "Orange & Terracotta" },
      { name: "Earthen Orange", code: "J406", hex: "#B07050", category: "Orange & Terracotta" },
      { name: "Ember Tone", code: "J407", hex: "#A06040", category: "Orange & Terracotta" },
      { name: "Warm Ochre", code: "J408", hex: "#C08060", category: "Orange & Terracotta" }
    ]
  },
  {
    name: "Red & Burgundy",
    brand: "Jotun",
    category: "Red & Burgundy",
    colors: [
      { name: "Rustic Red", code: "J501", hex: "#A03020", category: "Red & Burgundy" },
      { name: "Crimson Dusk", code: "J502", hex: "#802020", category: "Red & Burgundy" },
      { name: "Burgundy Dust", code: "J503", hex: "#602020", category: "Red & Burgundy" },
      { name: "Deep Russet", code: "J504", hex: "#702020", category: "Red & Burgundy" },
      { name: "Classic Maroon", code: "J505", hex: "#502020", category: "Red & Burgundy" }
    ]
  },
  {
    name: "Purple & Lilac",
    brand: "Jotun",
    category: "Purple & Lilac",
    colors: [
      { name: "Dusty Lilac", code: "J601", hex: "#D0B0C0", category: "Purple & Lilac" },
      { name: "Lavender Mist", code: "J602", hex: "#E0C0D0", category: "Purple & Lilac" },
      { name: "Smoky Mauve", code: "J603", hex: "#C0A0B0", category: "Purple & Lilac" },
      { name: "Plum Smoke", code: "J604", hex: "#B090A0", category: "Purple & Lilac" },
      { name: "Muted Orchid", code: "J605", hex: "#A08090", category: "Purple & Lilac" }
    ]
  },
  {
    name: "Blue",
    brand: "Jotun",
    category: "Blue",
    colors: [
      { name: "Sky Haze", code: "J701", hex: "#B0C0D0", category: "Blue" },
      { name: "Powder Blue", code: "J702", hex: "#C0D0E0", category: "Blue" },
      { name: "Cool Breeze", code: "J703", hex: "#D0E0F0", category: "Blue" },
      { name: "Serene Sky", code: "J704", hex: "#A0B0C0", category: "Blue" },
      { name: "Misty Lake", code: "J705", hex: "#90A0B0", category: "Blue" },
      { name: "Blue Slate", code: "J706", hex: "#708090", category: "Blue" },
      { name: "Coastal Blue", code: "J707", hex: "#506070", category: "Blue" },
      { name: "Midnight Wave", code: "J708", hex: "#304050", category: "Blue" },
      { name: "Deep Horizon", code: "J709", hex: "#203040", category: "Blue" }
    ]
  },
  {
    name: "Green",
    brand: "Jotun",
    category: "Green",
    colors: [
      { name: "Olive Grove", code: "J801", hex: "#708060", category: "Green" },
      { name: "Mossy Path", code: "J802", hex: "#607050", category: "Green" },
      { name: "Forest Haze", code: "J803", hex: "#506040", category: "Green" },
      { name: "Sage Leaf", code: "J804", hex: "#809070", category: "Green" },
      { name: "Soft Fern", code: "J805", hex: "#90A080", category: "Green" },
      { name: "Pale Pistachio", code: "J806", hex: "#B0C0A0", category: "Green" },
      { name: "Deep Forest", code: "J807", hex: "#405030", category: "Green" },
      { name: "Earthy Green", code: "J808", hex: "#506040", category: "Green" }
    ]
  },
  {
    name: "Black & Charcoal",
    brand: "Jotun",
    category: "Black & Charcoal",
    colors: [
      { name: "Carbon Black", code: "J901", hex: "#202020", category: "Black & Charcoal" },
      { name: "Charcoal Depth", code: "J902", hex: "#303030", category: "Black & Charcoal" },
      { name: "Black Granite", code: "J903", hex: "#404040", category: "Black & Charcoal" },
      { name: "Ebony Veil", code: "J904", hex: "#101010", category: "Black & Charcoal" }
    ]
  }
]; 