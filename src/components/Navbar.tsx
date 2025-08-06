import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/254750080003", "_blank");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-nickoutfit-black/95 backdrop-blur-md border-b border-nickoutfit-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/9592d2ad-dca7-42c3-86b7-68e5b83a535d.png" 
                alt="NickOutfit Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-nickoutfit-warm-white font-bold text-lg font-serif">NICKOUTFIT</div>
                <div className="text-nickoutfit-gold text-xs italic">The Icon of Style & Design</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-nickoutfit-warm-white/80 hover:text-nickoutfit-gold transition-smooth font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-nickoutfit-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleWhatsApp}
              size="sm"
              className="bg-gradient-gold hover:bg-nickoutfit-gold-dark text-nickoutfit-black font-semibold transition-smooth gold-shimmer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-nickoutfit-warm-white hover:text-nickoutfit-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-nickoutfit-black/98 backdrop-blur-md border-t border-nickoutfit-gold/20">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-nickoutfit-warm-white/80 hover:text-nickoutfit-gold block px-3 py-2 rounded-md text-base font-medium transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button
                onClick={handleWhatsApp}
                size="sm"
                className="w-full bg-gradient-gold hover:bg-nickoutfit-gold-dark text-nickoutfit-black font-semibold transition-smooth"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;