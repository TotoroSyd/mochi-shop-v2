import ProductCard, { Product } from "./ProductCard";
import { Button } from "@/components/ui/button";
import sakuraMochi from "@/assets/sakura-mochi.jpg";
import matchaMochi from "@/assets/matcha-mochi.jpg";
import strawberryMochi from "@/assets/strawberry-mochi.jpg";
import sesameMochi from "@/assets/sesame-mochi.jpg";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: "1",
    name: "Sakura Mochi",
    description: "Delicate pink mochi with cherry blossom flavor, a sign of the season. Made with traditional Japanese techniques.",
    price: 8.99,
    image: sakuraMochi,
    category: "Seasonal",
    featured: true,
  },
  {
    id: "2",
    name: "Matcha Mochi",
    description: "Rich green tea flavored mochi with authentic matcha powder from Kyoto. Perfectly balanced sweetness.",
    price: 7.99,
    image: matchaMochi,
    category: "Classic",
  },
  {
    id: "3",
    name: "Ichigo Daifuku",
    description: "Fresh strawberry wrapped in soft, pillowy mochi. A perfect combination of sweet and refreshing.",
    price: 9.99,
    image: strawberryMochi,
    category: "Fruit",
    featured: true,
  },
  {
    id: "4",
    name: "Black Sesame Mochi",
    description: "Nutty and aromatic black sesame mochi with a rich, deep flavor that's both traditional and satisfying.",
    price: 8.49,
    image: sesameMochi,
    category: "Traditional",
  },
];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  return (
    <section id="products" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Our Signature Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            Each mochi is carefully handcrafted using traditional Japanese methods, 
            bringing you authentic flavors and textures that have been perfected over generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for?
          </p>
          <Button variant="elegant" size="lg" className="rounded-full">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;