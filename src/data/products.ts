import jeeraPkg from "@/assets/Jeera rice.jpeg";
import kaliMoochPkg from "@/assets/Kali Mooch.jpeg";
import krushnamodPkg from "@/assets/Krushnamod.jpeg";
import steamedJeeraPkg from "@/assets/Steam Jerra Rice.jpeg";

import aiJeera from "@/assets/ai-jeera.png";
import aiKaliMooch from "@/assets/ai-kalimooch-rice.png";
import aiKrushnakamod from "@/assets/ai-krushnakamod.png";
import aiSteamedJeera from "@/assets/ai-steamedjeera.png";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  packagingImage: string;
  features: string[];
  description: string;
};

export const products: Product[] = [
  {
    slug: "kali-mooch",
    name: "Kalimooch",
    tagline: "Premium Short Grain",
    image: aiKaliMooch,
    packagingImage: kaliMoochPkg,
    features: [
      "Rich Natural Aroma",
      "Soft & Fluffy Texture",
      "Perfect for Everyday & Traditional Meals",
    ],
    description:
      "Premium rice known for its natural aroma and rich traditional taste. Specially selected grains ideal for daily meals and festive occasions.",
  },
  {
    slug: "jeera-rice",
    name: "Jeera Rice",
    tagline: "Premium Lachkari Wada Kolam Rice",
    image: aiJeera,
    packagingImage: jeeraPkg,
    features: ["Fine Slender Grains", "Delicate Aroma", "Ideal for Daily Meals"],
    description:
      "Carefully selected Kolam rice processed with modern cleaning technology to ensure uniform grains, low broken percentage, and soft cooking texture. Perfect for daily meals in every home.",
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
      "Consistent Cooking Performance",
    ],
    description:
      "Hydro-thermally treated and double polished for a luminous appearance and consistent cook, retaining maximum nutrients.",
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
      "Perfect for Festive & Traditional Recipes",
    ],
    description:
      "Premium Chinnor rice known for its natural aroma and rich traditional taste. Specially selected grains ideal for festive and traditional recipes.",
  },
];
