import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mochi.jpg";

interface HeroProps {
  onOrderClick: () => void;
}

const Hero = ({ onOrderClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
          Delightful Sweet
          <span className="block text-primary bg-gradient-sakura bg-clip-text text-transparent">
            Japanese Mochi
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
          Welcome to Mochi Machi - your home for authentic, fresh-made Japanese Mochi. 
          Experience the traditional flavors crafted with love and care.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:0.4s]">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onOrderClick}
            className="text-lg px-8 py-4 rounded-full"
          >
            Order Now
          </Button>
          <Button 
            variant="elegant" 
            size="lg" 
            className="text-lg px-8 py-4 rounded-full"
          >
            Learn More
          </Button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-sakura-light/30 rounded-full animate-float [animation-delay:1s] hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-matcha-light/40 rounded-full animate-float [animation-delay:2s] hidden lg:block" />
        <div className="absolute top-1/3 right-20 w-8 h-8 bg-peach/40 rounded-full animate-gentle-bounce [animation-delay:0.5s] hidden lg:block" />
      </div>
    </section>
  );
};

export default Hero;