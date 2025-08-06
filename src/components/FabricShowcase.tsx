import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Palette, Shirt } from "lucide-react";
import fabricVitenge from "@/assets/fabric-vitenge.jpg";
import fabricSuits from "@/assets/fabric-suits.jpg";

const FabricShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const fabricCollections = [
    {
      id: 1,
      title: "Vibrant Vitenge Collection",
      subtitle: "Traditional Kenyan Patterns",
      description: "Authentic African prints sourced from Nairobi's finest fabric markets. Each pattern tells a story of heritage and cultural pride.",
      image: fabricVitenge,
      category: "African Couture",
      fabrics: ["Kitenge", "Ankara", "Wax Print", "Kente Inspired"],
      colors: ["Royal Blue", "Golden Yellow", "Deep Red", "Forest Green"],
      icon: Palette
    },
    {
      id: 2,
      title: "Premium Suiting Materials",
      subtitle: "European Quality Fabrics",
      description: "Finest wool, cotton, and linen blends for the modern professional. Imported quality meets local craftsmanship.",
      image: fabricSuits,
      category: "Tailored Suits",
      fabrics: ["Wool Blend", "Pure Cotton", "Linen", "Silk Blend"],
      colors: ["Charcoal Grey", "Navy Blue", "Midnight Black", "Stone Beige"],
      icon: Shirt
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % fabricCollections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + fabricCollections.length) % fabricCollections.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleWhatsApp = () => {
    const fabric = fabricCollections[currentSlide];
    const message = `Hello NickOutfit! I'm interested in the ${fabric.title}. Can you tell me more about available designs and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254750080003?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-warm-white to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Trending Fabrics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of premium fabrics sourced from Nairobi's finest markets 
            and international suppliers.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <Card 
            className="overflow-hidden shadow-elegant border-none"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative h-[600px] md:h-[500px]">
              {fabricCollections.map((fabric, index) => {
                const Icon = fabric.icon;
                return (
                  <div
                    key={fabric.id}
                    className={`
                      absolute inset-0 transition-opacity duration-700
                      ${index === currentSlide ? "opacity-100" : "opacity-0"}
                    `}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      {/* Image Side */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={fabric.image} 
                          alt={fabric.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 to-transparent"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                          <div className="flex items-center gap-2 bg-gold px-4 py-2 rounded-full">
                            <Icon className="h-4 w-4 text-charcoal" />
                            <span className="text-charcoal font-medium text-sm">{fabric.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-white">
                        <div className="mb-8">
                          <h3 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-3">
                            {fabric.title}
                          </h3>
                          <p className="text-gold text-lg font-medium mb-4">
                            {fabric.subtitle}
                          </p>
                          <p className="text-muted-foreground leading-relaxed mb-8">
                            {fabric.description}
                          </p>
                        </div>

                        {/* Fabric Types */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-charcoal mb-3">Available Fabrics:</h4>
                          <div className="flex flex-wrap gap-2">
                            {fabric.fabrics.map((fabricType, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border/50"
                              >
                                {fabricType}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Color Options */}
                        <div className="mb-8">
                          <h4 className="font-semibold text-charcoal mb-3">Popular Colors:</h4>
                          <div className="flex flex-wrap gap-2">
                            {fabric.colors.map((color, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm border border-gold/20"
                              >
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <Button 
                          onClick={handleWhatsApp}
                          size="lg" 
                          className="bg-gradient-gold hover:bg-gold-dark text-charcoal font-semibold shadow-gold transition-smooth w-full md:w-auto"
                        >
                          Inquire About This Collection
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border border-border/20 text-charcoal hover:text-gold transition-smooth"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute inset-y-0 right-4 flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border border-border/20 text-charcoal hover:text-gold transition-smooth"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-2">
                {fabricCollections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`
                      w-3 h-3 rounded-full transition-smooth
                      ${index === currentSlide 
                        ? "bg-gold shadow-gold animate-pulse-gold" 
                        : "bg-white/50 hover:bg-white/80"
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Can't find the perfect fabric? We source custom materials for special projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open("https://wa.me/254750080003", "_blank")}
              size="lg" 
              className="bg-gradient-gold hover:bg-gold-dark text-charcoal font-semibold px-8 shadow-gold transition-smooth"
            >
              Request Custom Fabric
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold px-8 transition-smooth"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricShowcase;