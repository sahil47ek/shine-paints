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

export const jotashieldColors: ColorFamily[] = [
  {
    name: "Earthy Browns & Beiges",
    brand: "Jotashield",
    category: "Brown & Beige",
    colors: [
      { name: "Elegant", code: "1248", hex: "#D4C4B7", category: "Brown & Beige" },
      { name: "Jaipur", code: "1037", hex: "#C8B8A8", category: "Brown & Beige" },
      { name: "Barley Beige", code: "1038", hex: "#B8A88C", category: "Brown & Beige" },
      { name: "Desert Wind", code: "1041", hex: "#8B6B4A", category: "Brown & Beige" },
      { name: "Safari Beige", code: "1045", hex: "#B8A088", category: "Brown & Beige" },
      { name: "Subtle", code: "1249", hex: "#E0D4C4", category: "Brown & Beige" },
      { name: "Terracotta", code: "1082", hex: "#5C4A3A", category: "Brown & Beige" },
      { name: "Brown Sugar", code: "1083", hex: "#8C7C6C", category: "Brown & Beige" },
      { name: "Brick Tone", code: "1084", hex: "#D0C0B0", category: "Brown & Beige" },
      { name: "Brick Dust", code: "1085", hex: "#A09080", category: "Brown & Beige" },
      { name: "Ginger Dust", code: "1086", hex: "#6C5C4C", category: "Brown & Beige" },
      { name: "Sandstone", code: "1056", hex: "#4C3C2C", category: "Brown & Beige" },
      { name: "Mocha", code: "1057", hex: "#B4A494", category: "Brown & Beige" },
      { name: "Sand Storm", code: "1058", hex: "#C8B8A8", category: "Brown & Beige" },
      { name: "Classic Brown", code: "1059", hex: "#E8D8C8", category: "Brown & Beige" },
      { name: "Wood Smoke", code: "1260", hex: "#A8A098", category: "Brown & Beige" }
    ]
  },
  {
    name: "Oranges & Terracotta",
    brand: "Jotashield",
    category: "Orange & Terracotta",
    colors: [
      { name: "Terracotta", code: "1082", hex: "#B06040", category: "Orange & Terracotta" },
      { name: "Brown Sugar", code: "1083", hex: "#A05030", category: "Orange & Terracotta" },
      { name: "Brick Tone", code: "1084", hex: "#C07050", category: "Orange & Terracotta" },
      { name: "Brick Dust", code: "1085", hex: "#E09070", category: "Orange & Terracotta" },
      { name: "Ginger Dust", code: "1086", hex: "#D08060", category: "Orange & Terracotta" },
      { name: "Golden Soil", code: "1066", hex: "#B07050", category: "Orange & Terracotta" }
    ]
  },
  {
    name: "Yellows & Golds",
    brand: "Jotashield",
    category: "Yellow & Gold",
    colors: [
      { name: "Yellow Stone", code: "1064", hex: "#F0E8D0", category: "Yellow & Gold" },
      { name: "Sun Beam", code: "1065", hex: "#F8E8B0", category: "Yellow & Gold" },
      { name: "Golden Soil", code: "1066", hex: "#F8F0D8", category: "Yellow & Gold" },
      { name: "Golden Yellow", code: "1067", hex: "#F0D8A0", category: "Yellow & Gold" },
      { name: "Yellow Maze", code: "1068", hex: "#F8E8C0", category: "Yellow & Gold" },
      { name: "Yellow Haze", code: "1069", hex: "#D8C080", category: "Yellow & Gold" },
      { name: "Sunny", code: "1251", hex: "#E0D0A0", category: "Yellow & Gold" },
      { name: "Daffodil", code: "1252", hex: "#E8C880", category: "Yellow & Gold" }
    ]
  },
  {
    name: "Creams & Off-Whites",
    brand: "Jotashield",
    category: "Cream & Off-White",
    colors: [
      { name: "Cream", code: "1015", hex: "#F0E8D8", category: "Cream & Off-White" },
      { name: "Vanilla", code: "1016", hex: "#F8E8B8", category: "Cream & Off-White" },
      { name: "Almond White", code: "1017", hex: "#F8F0D8", category: "Cream & Off-White" },
      { name: "Meringue", code: "1018", hex: "#F0D8A0", category: "Cream & Off-White" },
      { name: "Ivory", code: "1019", hex: "#F8E8C0", category: "Cream & Off-White" },
      { name: "Jasmine", code: "1020", hex: "#D8C080", category: "Cream & Off-White" },
      { name: "Divine", code: "1247", hex: "#E0D0A0", category: "Cream & Off-White" }
    ]
  },
  {
    name: "Warm Neutrals & Taupes",
    brand: "Jotashield",
    category: "Warm Neutral & Taupe",
    colors: [
      { name: "Soft Suede", code: "1040", hex: "#E0D0A0", category: "Warm Neutral & Taupe" },
      { name: "Stone Beige", code: "1042", hex: "#E8C880", category: "Warm Neutral & Taupe" },
      { name: "Gentle Tan", code: "1043", hex: "#D0B070", category: "Warm Neutral & Taupe" },
      { name: "Smooth Earth", code: "1044", hex: "#F0E8D8", category: "Warm Neutral & Taupe" },
      { name: "Mild Tan", code: "1046", hex: "#F8E8B8", category: "Warm Neutral & Taupe" },
      { name: "Pure", code: "1246", hex: "#F8F0D8", category: "Warm Neutral & Taupe" },
      { name: "Soft Drift", code: "1054", hex: "#F0D8A0", category: "Warm Neutral & Taupe" },
      { name: "Warm Neutral", code: "1055", hex: "#F8E8C0", category: "Warm Neutral & Taupe" },
      { name: "Sandstone", code: "1056", hex: "#D8C080", category: "Warm Neutral & Taupe" }
    ]
  },
  {
    name: "Cool Greys & Whites",
    brand: "Jotashield",
    category: "Cool Grey & White",
    colors: [
      { name: "Morning Mist", code: "1021", hex: "#E0D0A0", category: "Cool Grey & White" },
      { name: "Lily White", code: "1022", hex: "#E8C880", category: "Cool Grey & White" },
      { name: "White Crystal", code: "1023", hex: "#D0B070", category: "Cool Grey & White" },
      { name: "Winter White", code: "1024", hex: "#F0E8D8", category: "Cool Grey & White" },
      { name: "Modern White", code: "1025", hex: "#F8E8B8", category: "Cool Grey & White" },
      { name: "Moon Beam", code: "1026", hex: "#F8F0D8", category: "Cool Grey & White" },
      { name: "Pearl White", code: "1027", hex: "#F0D8A0", category: "Cool Grey & White" },
      { name: "Classic", code: "1245", hex: "#F8E8C0", category: "Cool Grey & White" },
      { name: "Smoke", code: "1050", hex: "#D8C080", category: "Cool Grey & White" },
      { name: "Grey Cloud", code: "1051", hex: "#E0D0A0", category: "Cool Grey & White" },
      { name: "Mild Grey", code: "1052", hex: "#E8C880", category: "Cool Grey & White" },
      { name: "Greige", code: "1053", hex: "#D0B070", category: "Cool Grey & White" }
    ]
  },
  {
    name: "Blues & Blue-Greys",
    brand: "Jotashield",
    category: "Blue & Blue-Grey",
    colors: [
      { name: "Blue Silence", code: "1097", hex: "#B0C0D0", category: "Blue & Blue-Grey" },
      { name: "Blue Dusk", code: "1098", hex: "#C0D0E0", category: "Blue & Blue-Grey" },
      { name: "Steel Blue", code: "1099", hex: "#D0E0F0", category: "Blue & Blue-Grey" },
      { name: "Urban Blue", code: "1100", hex: "#A0B0C0", category: "Blue & Blue-Grey" },
      { name: "Night Sky", code: "1101", hex: "#90A0B0", category: "Blue & Blue-Grey" },
      { name: "Oceanic", code: "1261", hex: "#708090", category: "Blue & Blue-Grey" },
      { name: "Urban Sky", code: "1103", hex: "#506070", category: "Blue & Blue-Grey" },
      { name: "Gentle Blue", code: "1104", hex: "#304050", category: "Blue & Blue-Grey" },
      { name: "Misty Blue", code: "1105", hex: "#203040", category: "Blue & Blue-Grey" },
      { name: "Pale Blue", code: "1106", hex: "#B0B0B8", category: "Blue & Blue-Grey" },
      { name: "Cloud Blue", code: "1107", hex: "#C0C0C8", category: "Blue & Blue-Grey" }
    ]
  },
  {
    name: "Greens & Teals",
    brand: "Jotashield",
    category: "Green & Teal",
    colors: [
      { name: "Teal Blue", code: "1113", hex: "#708060", category: "Green & Teal" },
      { name: "Winter Green", code: "1114", hex: "#607050", category: "Green & Teal" },
      { name: "Aqua Marine", code: "1115", hex: "#506040", category: "Green & Teal" },
      { name: "Misty Green", code: "1116", hex: "#809070", category: "Green & Teal" },
      { name: "Frozen Dew", code: "1117", hex: "#90A080", category: "Green & Teal" },
      { name: "Sage Tint", code: "1118", hex: "#B0C0A0", category: "Green & Teal" },
      { name: "Pistachio Cream", code: "1119", hex: "#405030", category: "Green & Teal" },
      { name: "Spring Dew", code: "1120", hex: "#506040", category: "Green & Teal" },
      { name: "Tranquil", code: "1263", hex: "#B0B0B8", category: "Green & Teal" },
      { name: "Cool Breeze", code: "1122", hex: "#C0C0C8", category: "Green & Teal" },
      { name: "Fern Tint", code: "1123", hex: "#D0D0D8", category: "Green & Teal" },
      { name: "Meadow Mist", code: "1124", hex: "#E0E0E8", category: "Green & Teal" },
      { name: "Pale Moss", code: "1125", hex: "#F0F0F8", category: "Green & Teal" },
      { name: "Mint Cream", code: "1126", hex: "#F8F8FF", category: "Green & Teal" }
    ]
  },
  {
    name: "Pinks & Rose Tones",
    brand: "Jotashield",
    category: "Pink & Rose",
    colors: [
      { name: "Classic Rose", code: "1071", hex: "#D0B0C0", category: "Pink & Rose" },
      { name: "Blush", code: "1072", hex: "#E0C0D0", category: "Pink & Rose" },
      { name: "Rosy Pink", code: "1073", hex: "#C0A0B0", category: "Pink & Rose" },
      { name: "Peach Pink", code: "1074", hex: "#B090A0", category: "Pink & Rose" },
      { name: "Rose White", code: "1075", hex: "#A08090", category: "Pink & Rose" },
      { name: "Rose Tint", code: "1076", hex: "#B0B0B8", category: "Pink & Rose" },
      { name: "Dusty Pink", code: "1077", hex: "#C0C0C8", category: "Pink & Rose" },
      { name: "Coral", code: "1253", hex: "#D0D0D8", category: "Pink & Rose" },
      { name: "Frosted Peach", code: "1079", hex: "#E0E0E8", category: "Pink & Rose" },
      { name: "Peach Puff", code: "1080", hex: "#F0F0F8", category: "Pink & Rose" },
      { name: "Classic Peach", code: "1081", hex: "#F8F8FF", category: "Pink & Rose" }
    ]
  }
]; 