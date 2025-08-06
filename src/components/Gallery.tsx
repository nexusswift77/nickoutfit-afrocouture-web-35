import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, LayoutList } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { id: "all", name: "All Work", count: 24 },
    { id: "suits", name: "Tailored Suits", count: 8 },
    { id: "african", name: "African Couture", count: 10 },
    { id: "wedding", name: "Wedding Attire", count: 4 },
    { id: "corporate", name: "Corporate", count: 2 }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Executive Business Suit",
      category: "suits",
      image: "/lovable-uploads/placeholder-image.jpg",
      description: "Custom tailored three-piece suit in charcoal wool",
      testimonial: "Absolutely perfect fit! NickOutfit exceeded my expectations.",
      client: "James K."
    },
    {
      id: 2,
      title: "Vibrant Vitenge Dress",
      category: "african",
      image: "/lovable-uploads/placeholder-image.jpg",
      description: "Traditional Kenyan patterns with modern silhouette",
      testimonial: "I felt like a queen! The colors and fit were amazing.",
      client: "Sarah M."
    },
    {
      id: 3,
      title: "Wedding Gown Elegance",
      category: "wedding",
      image: "/lovable-uploads/placeholder-image.jpg",
      description: "Bespoke bridal gown with African-inspired details",
      testimonial: "My dream dress came to life. Thank you NickOutfit!",
      client: "Grace L."
    },
    {
      id: 4,
      title: "Corporate Uniform Set",
      category: "corporate",
      image: "/lovable-uploads/placeholder-image.jpg",
      description: "Professional uniforms for tech company team",
      testimonial: "Professional quality that represents our brand perfectly.",
      client: "Tech Innovations Ltd"
    },
    {
      id: 5,
      title: "Ankara Statement Jacket",
      category: "african",
      image: "/lovable-uploads/placeholder-image.jpg",
      description: "Bold Ankara print blazer with contemporary cut",
      testimonial: "I get compliments everywhere I wear this jacket!",
      client: "David O."
    },
    {
      id: 6,
      title: "Groomsmen Collection",
      category: "wedding",
      image: "/lovable-uploads/placeholder-image.jpg",
      description: "Coordinated suits for wedding party",
      testimonial: "The whole wedding party looked amazing. Excellent work!",
      client: "Michael & Team"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleWhatsApp = () => {
    window.open("https://wa.me/254750080003", "_blank");
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of bespoke tailoring, from elegant suits to vibrant African couture.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  ${selectedCategory === category.id 
                    ? "bg-gradient-gold text-charcoal hover:bg-gold-dark" 
                    : "border-gold text-gold hover:bg-gold hover:text-charcoal"
                  } 
                  transition-smooth
                `}
              >
                {category.name}
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-gold-light text-charcoal"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`
                ${viewMode === "grid" 
                  ? "bg-gradient-gold text-charcoal" 
                  : "border-gold text-gold hover:bg-gold hover:text-charcoal"
                }
              `}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`
                ${viewMode === "list" 
                  ? "bg-gradient-gold text-charcoal" 
                  : "border-gold text-gold hover:bg-gold hover:text-charcoal"
                }
              `}
            >
              <LayoutList className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`
          ${viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-6"
          }
        `}>
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className={`
                group overflow-hidden border-border/50 hover:border-gold/30 hover:shadow-gold transition-smooth
                ${viewMode === "list" ? "flex flex-col md:flex-row" : ""}
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`
                relative overflow-hidden
                ${viewMode === "list" ? "md:w-1/2" : ""}
              `}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Badge className="bg-gold text-charcoal">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </Badge>
                </div>
              </div>
              
              <CardContent className={`
                p-6 flex flex-col justify-between
                ${viewMode === "list" ? "md:w-1/2" : ""}
              `}>
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2 group-hover:text-gold transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  
                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-gold pl-4 mb-4">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "{item.testimonial}"
                    </p>
                    <cite className="text-xs text-gold font-medium">
                      - {item.client}
                    </cite>
                  </blockquote>
                </div>
                
                <Button 
                  onClick={handleWhatsApp}
                  size="sm" 
                  className="bg-gradient-gold hover:bg-gold-dark text-charcoal font-semibold w-full transition-smooth"
                >
                  Order Similar Design
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More / CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Love what you see? Let's create something amazing for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="bg-gradient-gold hover:bg-gold-dark text-charcoal font-semibold px-8 shadow-gold transition-smooth"
            >
              Start Your Custom Order
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold px-8 transition-smooth"
              onClick={() => window.open("https://instagram.com/nickoutfitt", "_blank")}
            >
              View More on Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;