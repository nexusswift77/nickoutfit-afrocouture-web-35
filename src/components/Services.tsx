import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Shirt, Crown, Building, Palette, Users } from "lucide-react";
import servicesImage from "@/assets/services-showcase.jpg";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Tailored Suits",
      description: "Bespoke suits crafted to perfection for men and women. From business formal to casual elegance.",
      features: ["Custom measurements", "Premium fabrics", "Perfect fit guarantee"]
    },
    {
      icon: Palette,
      title: "African Couture",
      description: "Vibrant vitenge, kitenge, and Ankara designs that celebrate African heritage with modern flair.",
      features: ["Traditional patterns", "Modern cuts", "Cultural authenticity"]
    },
    {
      icon: Crown,
      title: "Wedding Attire",
      description: "Make your special day unforgettable with custom bridal gowns, groomswear, and bridesmaid dresses.",
      features: ["Bridal consultation", "Custom designs", "Perfect timing"]
    },
    {
      icon: Building,
      title: "Corporate Uniforms",
      description: "Professional uniforms that represent your brand with style and functionality.",
      features: ["Brand integration", "Bulk orders", "Quality assurance"]
    },
    {
      icon: Scissors,
      title: "Custom Tailoring",
      description: "From alterations to completely custom pieces, we bring your vision to life.",
      features: ["Design consultation", "Expert craftsmanship", "Attention to detail"]
    },
    {
      icon: Users,
      title: "Group Orders",
      description: "Special rates for families, events, and organizations. Perfect for coordinated looks.",
      features: ["Volume discounts", "Coordinated styling", "Flexible scheduling"]
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/254750080003", "_blank");
  };

  return (
    <section id="services" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From traditional African wear to modern suits, we offer comprehensive tailoring services 
            that blend cultural heritage with contemporary style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-gold transition-smooth border-border/50 hover:border-gold/30">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-4 group-hover:scale-110 transition-bounce">
                    <Icon className="h-8 w-8 text-charcoal" />
                  </div>
                  <CardTitle className="text-xl font-bold text-charcoal group-hover:text-gold transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Showcase Image */}
        <div className="relative mb-12 rounded-lg overflow-hidden shadow-elegant">
          <img 
            src={servicesImage} 
            alt="NickOutfit Services Showcase" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent flex items-center">
            <div className="max-w-2xl px-8">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                The Icon of Style and Designs
              </h3>
              <p className="text-lg text-warm-white/90 mb-6">
                Every piece we create tells a story of craftsmanship, culture, and contemporary style.
              </p>
              <Button 
                onClick={handleWhatsApp}
                size="lg" 
                className="bg-gradient-gold hover:bg-gold-dark text-charcoal font-semibold shadow-gold transition-smooth"
              >
                Book Your Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss your tailoring needs and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="bg-gradient-gold hover:bg-gold-dark text-charcoal font-semibold px-8 shadow-gold transition-smooth"
            >
              WhatsApp: 0750 080 003
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold px-8 transition-smooth"
              onClick={() => window.open("mailto:info@nickoutfit.com", "_blank")}
            >
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;