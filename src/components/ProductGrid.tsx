import ProductCard from "./ProductCard";
import { products } from "@/constants";
import { Button } from "@/components/ui/button";

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Our Signature Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            Each mochi is carefully handcrafted using traditional Japanese
            methods, bringing you authentic flavors and textures that have been
            perfected over generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <ProductCard product={product} />
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
