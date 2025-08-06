import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scissors, 
  Palette, 
  Crown, 
  Briefcase, 
  Heart, 
  Star,
  ArrowRight,
  Sparkles,
  Camera,
  MessageCircle,
  Phone
} from "lucide-react";
import React, { useState } from "react";

const InteractiveServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      icon: Scissors,
      title: "Bespoke Suits",
      subtitle: "Executive Excellence",
      description: "Handcrafted suits that define your professional presence",
      features: ["Custom measurements", "Premium fabrics", "Perfect fit guarantee", "3 fittings included"],
      price: "From KSh 25,000",
      color: "from-nickoutfit-gold to-nickoutfit-bronze",
      bgImage: "/src/assets/fabric-suits.jpg"
    },
    {
      icon: Palette,
      title: "Vitenge Couture",
      subtitle: "African Elegance",
      description: "Contemporary African fashion meets traditional craftsmanship",
      features: ["Authentic African prints", "Modern cuts", "Cultural heritage", "Custom designs"],
      price: "From KSh 8,000",
      color: "from-purple-500 to-pink-500",
      bgImage: "/src/assets/fabric-vitenge.jpg"
    },
    {
      icon: Crown,
      title: "Wedding Attire",
      subtitle: "Your Special Day",
      description: "Make your wedding day unforgettable with custom bridal wear",
      features: ["Bridal gowns", "Groom suits", "Bridesmaid dresses", "Wedding coordination"],
      price: "From KSh 45,000",
      color: "from-rose-400 to-pink-600"
    },
    {
      icon: Briefcase,
      title: "Corporate Uniforms",
      subtitle: "Brand Identity",
      description: "Professional uniforms that represent your brand perfectly",
      features: ["Brand consistency", "Bulk orders", "Quality materials", "Fast delivery"],
      price: "From KSh 3,500",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const handleWhatsApp = (service: string) => {
    const message = `Hi! I'm interested in ${service}. Can you provide more details?`;
    window.open(`https://wa.me/254750080003?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-nickoutfit-gold/20 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 rounded-full bg-nickoutfit-bronze/30 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-nickoutfit-gold text-nickoutfit-black font-semibold px-6 py-2">
            Our Specialties
          </Badge>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-nickoutfit-charcoal mb-6">
            We Don't Just <span className="text-nickoutfit-gold italic">Sew</span>,
            <br />We <span className="text-nickoutfit-bronze italic">Style</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From boardroom elegance to wedding magic, discover our signature services
          </p>
        </div>

        {/* Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-2 relative overflow-hidden ${
                  activeService === index ? 'border-nickoutfit-gold shadow-glow' : 'border-nickoutfit-stone/20 hover:border-nickoutfit-gold/50'
                }`}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <CardContent className="p-8 relative">
                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-fabric`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-2xl font-bold text-nickoutfit-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-nickoutfit-gold font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-nickoutfit-charcoal">{service.price}</span>
                    <ArrowRight className={`h-5 w-5 text-nickoutfit-gold transition-transform ${
                      activeService === index ? 'translate-x-1' : ''
                    }`} />
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-nickoutfit-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Active Service Details */}
        <Card className="bg-gradient-to-r from-nickoutfit-black to-nickoutfit-charcoal border-nickoutfit-gold/30 shadow-elegant">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  {React.createElement(services[activeService].icon, { 
                    className: "h-8 w-8 text-nickoutfit-gold" 
                  })}
                  <h3 className="font-serif text-3xl font-bold text-nickoutfit-warm-white">
                    {services[activeService].title}
                  </h3>
                </div>
                
                <p className="text-nickoutfit-stone mb-8 text-lg leading-relaxed">
                  {services[activeService].description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-nickoutfit-gold" />
                      <span className="text-nickoutfit-stone text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => handleWhatsApp(services[activeService].title)}
                    className="bg-gradient-gold hover:bg-nickoutfit-gold-dark text-nickoutfit-black font-semibold gold-shimmer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Quote
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-nickoutfit-gold text-nickoutfit-gold hover:bg-nickoutfit-gold hover:text-nickoutfit-black"
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    View Gallery
                  </Button>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="relative">
                <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-nickoutfit-gold/20 to-nickoutfit-bronze/20 backdrop-blur-sm border border-nickoutfit-gold/30 fabric-texture flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="h-16 w-16 text-nickoutfit-gold mx-auto mb-4 animate-pulse" />
                    <p className="text-nickoutfit-warm-white font-serif text-xl">
                      {services[activeService].title}
                    </p>
                    <p className="text-nickoutfit-gold text-lg">
                      {services[activeService].price}
                    </p>
                  </div>
                </div>
                
                {/* Floating Contact */}
                <div className="absolute -bottom-4 -right-4 bg-nickoutfit-gold rounded-full p-4 shadow-glow hover:scale-110 transition-transform cursor-pointer"
                     onClick={() => window.open("tel:+254750080003")}>
                  <Phone className="h-6 w-6 text-nickoutfit-black" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-nickoutfit-charcoal font-medium mb-6">
            Ready to start your tailoring journey?
          </p>
          <Button 
            onClick={() => handleWhatsApp("Custom Design Consultation")}
            size="lg"
            className="bg-gradient-bronze hover:bg-nickoutfit-bronze text-nickoutfit-black font-bold px-12 py-4 text-lg shadow-elegant gold-shimmer"
          >
            <Heart className="mr-3 h-5 w-5" />
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;