const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-earth to-earth/90 text-card py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-sakura rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">桜</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mochi Machi</h3>
                <p className="text-sm opacity-90">Authentic Japanese Sweets</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-md">
              Bringing you the finest traditional Japanese mochi, handcrafted with love and 
              authentic ingredients imported directly from Japan.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#products" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Our Products
              </a>
              <a href="#about" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </a>
              <a href="#contact" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contact
              </a>
              <a href="#shipping" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Shipping Info
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>📧 hello@mochimachi.com</p>
              <p>📞 (555) 123-MOCHI</p>
              <p>📍 San Francisco, CA</p>
            </div>
            <div className="pt-2">
              <p className="text-xs opacity-60">
                Follow us for daily mochi inspiration and seasonal specials
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-card/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © 2024 Mochi Machi. Made with ❤️ for mochi lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;