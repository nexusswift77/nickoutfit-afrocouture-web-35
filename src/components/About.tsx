import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";
import tailorWork from "@/assets/tailor-work.jpg";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers across Kenya"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience",
      description: "Crafting quality garments"
    },
    {
      icon: Award,
      number: "100%",
      label: "Quality Guarantee",
      description: "Every piece made to perfection"
    },
    {
      icon: Heart,
      number: "24/7",
      label: "Customer Support",
      description: "Always here to help"
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/254750080003", "_blank");
  };

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-nickoutfit-gold to-transparent"></div>
            <div className="w-3 h-3 rounded-full bg-nickoutfit-gold"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-nickoutfit-gold to-transparent"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-nickoutfit-charcoal mb-6">
            The Stitch Behind <span className="text-nickoutfit-gold italic">the Brand</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From a single machine in Kariobangi to couture weddings across Nairobi — 
            proudly tailoring Kenya with precision, heritage, and Afro-urban elegance since 2019.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="animate-slide-in-left">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-nickoutfit-charcoal mb-8">
              Where <span className="text-nickoutfit-gold italic">Culture</span> Meets Craft
            </h3>
            
            {/* Journey Timeline */}
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div className="relative pl-8">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-nickoutfit-gold shadow-glow"></div>
                <div className="absolute left-2 top-6 w-px h-full bg-gradient-to-b from-nickoutfit-gold to-transparent"></div>
                <h4 className="font-semibold text-nickoutfit-charcoal mb-2">The Beginning</h4>
                <p>
                  NickOutfit began as a passion project to bridge traditional African fashion 
                  with contemporary tailoring. From grandmother's vintage sewing machine to Kenya's 
                  premier bespoke destination.
                </p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-nickoutfit-bronze shadow-fabric"></div>
                <div className="absolute left-2 top-6 w-px h-full bg-gradient-to-b from-nickoutfit-bronze to-transparent"></div>
                <h4 className="font-semibold text-nickoutfit-charcoal mb-2">The Craft</h4>
                <p>
                  Blending time-honored techniques with modern design principles. Every stitch 
                  honors heritage while embracing Nairobi's bold, fashion-forward future.
                </p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-nickoutfit-gold-light"></div>
                <h4 className="font-semibold text-nickoutfit-charcoal mb-2">The Promise</h4>
                <p>
                  We don't just make clothes – we craft confidence, style, and cultural pride. 
                  Every garment tells your story with Afro-minimalist elegance.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsApp}
                size="lg" 
                className="bg-gradient-gold hover:bg-nickoutfit-gold-dark text-nickoutfit-black font-semibold shadow-gold transition-fabric gold-shimmer"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-nickoutfit-gold text-nickoutfit-gold hover:bg-nickoutfit-gold hover:text-nickoutfit-black transition-fabric"
              >
                View Our Story
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant fabric-texture">
              <img 
                src={tailorWork} 
                alt="Nick working on a custom garment" 
                className="w-full h-[500px] object-cover transition-fabric hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nickoutfit-black/60 via-transparent to-nickoutfit-gold/10"></div>
              
              {/* Stitch Border Effect */}
              <div className="absolute inset-4 border-2 border-dashed border-nickoutfit-gold/30 rounded-xl pointer-events-none"></div>
            </div>
            
            {/* Floating quote */}
            <Card className="absolute -bottom-8 -left-8 max-w-sm bg-gradient-gold shadow-glow border-none stitch-border">
              <CardContent className="p-6">
                <blockquote className="text-nickoutfit-black font-medium italic font-serif text-lg">
                  "Every piece we create is a work of art that tells your unique story."
                </blockquote>
                <cite className="text-nickoutfit-black/70 text-sm mt-3 block font-semibold">— Nick, Founder & Master Tailor</cite>
              </CardContent>
            </Card>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 border border-nickoutfit-gold/30 rounded-full flex items-center justify-center bg-nickoutfit-warm-white/10 backdrop-blur-sm">
              <span className="text-nickoutfit-gold font-serif text-sm">5+</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center border-nickoutfit-stone/20 hover:border-nickoutfit-gold/40 hover:shadow-fabric transition-fabric group bg-nickoutfit-cream/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-6 group-hover:scale-110 transition-bounce shadow-glow">
                    <Icon className="h-8 w-8 text-nickoutfit-black" />
                  </div>
                  <div className="font-serif text-4xl font-bold text-nickoutfit-charcoal mb-3">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-nickoutfit-gold mb-2 text-lg">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-nickoutfit-cream via-nickoutfit-warm-white to-nickoutfit-cream border-2 border-nickoutfit-gold/20 shadow-elegant fabric-texture">
            <CardContent className="p-12 md:p-16 relative">
              {/* Decorative Elements */}
              <div className="absolute top-6 left-6 w-8 h-8 border border-nickoutfit-gold/30 rounded-full"></div>
              <div className="absolute bottom-6 right-6 w-6 h-6 bg-nickoutfit-bronze/30 rounded-full"></div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-nickoutfit-charcoal mb-8">
                Our <span className="text-nickoutfit-gold italic">Mission</span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To preserve and celebrate African fashion heritage while creating contemporary garments 
                that empower individuals to express their unique style.
              </p>
              <div className="flex justify-center mb-6">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-nickoutfit-gold to-transparent"></div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "We believe that great tailoring is not just about perfect measurements — it's about 
                understanding dreams, honoring traditions, and crafting confidence that lasts a lifetime."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;