const jeeraPkg = "/assets/Jeera%20rice-D1edgWx3.jpeg";
const kaliMoochPkg = "/assets/Kali%20Mooch-CsOo953S.jpeg";
const krushnamodPkg = "/assets/Krushnamod-DKfMF_eX.jpeg";
const steamedJeeraPkg = "/assets/Steam%20Jerra%20Rice-CV2gKYlz.jpeg";
const aiJeera = "/assets/ai-jeera-CWrB_1Ww.png";
const aiKaliMooch = "/assets/ai-kalimooch-rice-wf38rKtn.png";
const aiKrushnakamod = "/assets/ai-krushnakamod-DYBmYUmy.png";
const aiSteamedJeera = "/assets/ai-steamedjeera-drwmuXQ5.png";
const products = [
  {
    slug: "kali-mooch",
    name: "Kalimooch",
    tagline: "Premium Short Grain",
    image: aiKaliMooch,
    packagingImage: kaliMoochPkg,
    features: [
      "Rich Natural Aroma",
      "Soft & Fluffy Texture",
      "Perfect for Everyday & Traditional Meals"
    ],
    description: "Premium rice known for its natural aroma and rich traditional taste. Specially selected grains ideal for daily meals and festive occasions."
  },
  {
    slug: "jeera-rice",
    name: "Jeera Rice",
    tagline: "Premium Lachkari Wada Kolam Rice",
    image: aiJeera,
    packagingImage: jeeraPkg,
    features: ["Fine Slender Grains", "Delicate Aroma", "Ideal for Daily Meals"],
    description: "Carefully selected Kolam rice processed with modern cleaning technology to ensure uniform grains, low broken percentage, and soft cooking texture. Perfect for daily meals in every home."
  },
  {
    slug: "steamed-jeera",
    name: "Steam Jeera Rice",
    tagline: "Premium Steamed Rice",
    image: aiSteamedJeera,
    packagingImage: steamedJeeraPkg,
    features: [
      "Soft & Fluffy",
      "Long Separate Grains",
      "Consistent Cooking Performance"
    ],
    description: "Hydro-thermally treated and double polished for a luminous appearance and consistent cook, retaining maximum nutrients."
  },
  {
    slug: "krushnamod",
    name: "Krushnakamod",
    tagline: "Premium Chinnor Rice",
    image: aiKrushnakamod,
    packagingImage: krushnamodPkg,
    features: [
      "Authentic Heritage",
      "Premium Natural Fragrance",
      "Perfect for Festive & Traditional Recipes"
    ],
    description: "Premium Chinnor rice known for its natural aroma and rich traditional taste. Specially selected grains ideal for festive and traditional recipes."
  }
];
export {
  products as p
};
