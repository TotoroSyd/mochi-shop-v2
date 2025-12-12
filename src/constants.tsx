import { Product } from "./components/ProductCard";
import sakuraMochi from "@/assets/sakura-mochi.jpg";
import matchaMochi from "@/assets/matcha-mochi.jpg";
import strawberryMochi from "@/assets/strawberry-mochi.jpg";
import sesameMochi from "@/assets/sesame-mochi.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Sakura Mochi",
    description:
      "Delicate pink mochi with cherry blossom flavor, a sign of the season. Made with traditional Japanese techniques.",
    price: 8.99,
    image: sakuraMochi,
    category: "Seasonal",
    featured: true,
  },
  {
    id: "2",
    name: "Matcha Mochi",
    description:
      "Rich green tea flavored mochi with authentic matcha powder from Kyoto. Perfectly balanced sweetness.",
    price: 7.99,
    image: matchaMochi,
    category: "Classic",
  },
  {
    id: "3",
    name: "Ichigo Daifuku",
    description:
      "Fresh strawberry wrapped in soft, pillowy mochi. A perfect combination of sweet and refreshing.",
    price: 9.99,
    image: strawberryMochi,
    category: "Fruit",
    featured: true,
  },
  {
    id: "4",
    name: "Black Sesame Mochi",
    description:
      "Nutty and aromatic black sesame mochi with a rich, deep flavor that's both traditional and satisfying.",
    price: 8.49,
    image: sesameMochi,
    category: "Traditional",
  },
];
