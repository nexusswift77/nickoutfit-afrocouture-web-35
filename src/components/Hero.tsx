import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, Scissors, Heart, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/254750080003", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+254750080003", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:info@nickoutfit.com", "_blank");
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Marquee */}
      <div className="fixed top-20 left-0 w-full z-40 bg-nickoutfit-gold/10 backdrop-blur-sm border-y border-nickoutfit-gold/20 py-2 overflow-hidden">
        <div className="marquee whitespace-nowrap text-nickoutfit-gold font-medium text-sm">
          ✂️ Tailored Suits • 💃🏽 African Couture • 💍 Wedding Attire • 🧵 Vitenge Magic • 👔 Corporate Uniforms • ✨ Custom Tailoring • 
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Fabric Texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat fabric-texture"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          {/* Sophisticated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-nickoutfit-black/95 via-nickoutfit-charcoal/85 to-nickoutfit-black/90"></div>
          <div className="absolute inset-0 bg-gradient-fabric"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          {/* Brand Logo */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-block relative">
              <img 
                src="/lovable-uploads/9592d2ad-dca7-42c3-86b7-68e5b83a535d.png" 
                alt="NickOutfit - The Icon of Style and Design" 
                className="w-40 h-40 md:w-48 md:h-48 object-contain filter drop-shadow-2xl hover:scale-105 transition-fabric"
              />
              <div className="absolute inset-0 rounded-full bg-nickoutfit-gold/20 blur-xl animate-pulse-gold"></div>
            </div>
          </div>

          {/* Hero Headlines */}
          <div className="mb-8 animate-slide-in-left">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-nickoutfit-warm-white mb-4">
              <span className="block bg-gradient-to-r from-nickoutfit-warm-white to-nickoutfit-stone bg-clip-text text-transparent">
                TAILORING YOUR
              </span>
              <span className="block text-nickoutfit-gold italic font-medium text-3xl md:text-5xl lg:text-6xl">
                Story
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-nickoutfit-gold to-transparent w-20"></div>
              <Sparkles className="h-6 w-6 text-nickoutfit-gold animate-pulse" />
              <div className="h-px bg-gradient-to-r from-transparent via-nickoutfit-gold to-transparent w-20"></div>
            </div>

            <p className="text-xl md:text-2xl text-nickoutfit-gold-light mb-4 font-medium tracking-wide">
              Tailoring Elegance for Nairobi's Bold & Beautiful
            </p>
          </div>

          {/* Storytelling Text */}
          <div className="mb-12 animate-slide-in-right">
            <p className="text-lg md:text-xl text-nickoutfit-warm-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
              Where Kenyan heritage meets modern elegance. From vibrant vitenges to bespoke suits, 
              wedding couture to corporate uniforms — we don't just sew, we style your confidence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm text-nickoutfit-stone/80">
              <div className="flex items-center justify-center gap-2">
                <Scissors className="h-4 w-4 text-nickoutfit-bronze" />
                <span>Precision Tailoring</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="h-4 w-4 text-nickoutfit-bronze" />
                <span>Cultural Heritage</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 text-nickoutfit-bronze" />
                <span>Modern Elegance</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="bg-gradient-gold hover:bg-nickoutfit-gold-dark text-nickoutfit-black font-semibold px-10 py-5 text-lg shadow-glow transition-fabric hover:shadow-elegant transform hover:scale-105 gold-shimmer"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              WhatsApp Us Now
            </Button>
            
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg"
              className="border-2 border-nickoutfit-gold text-nickoutfit-gold hover:bg-nickoutfit-gold hover:text-nickoutfit-black font-semibold px-10 py-5 text-lg transition-fabric backdrop-blur-sm bg-nickoutfit-warm-white/5"
            >
              <Scissors className="mr-3 h-5 w-5" />
              Explore Styles
            </Button>

            <Button 
              onClick={scrollToGallery}
              variant="ghost" 
              size="lg"
              className="text-nickoutfit-warm-white hover:text-nickoutfit-gold font-semibold px-8 py-5 text-lg transition-fabric hover:bg-nickoutfit-gold/10"
            >
              View Gallery
            </Button>
          </div>

          {/* Contact Showcase */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center text-nickoutfit-stone/80 animate-fade-in">
            <div className="flex items-center gap-3 hover-lift cursor-pointer" onClick={handleCall}>
              <div className="w-10 h-10 rounded-full bg-nickoutfit-gold/20 flex items-center justify-center">
                <Phone className="h-4 w-4 text-nickoutfit-gold" />
              </div>
              <div>
                <div className="text-sm text-nickoutfit-stone/60">Call Direct</div>
                <div className="font-medium text-nickoutfit-warm-white">0750 080 003</div>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-transparent via-nickoutfit-gold/30 to-transparent"></div>
            
            <div className="flex items-center gap-3 hover-lift cursor-pointer" onClick={handleWhatsApp}>
              <div className="w-10 h-10 rounded-full bg-nickoutfit-gold/20 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-nickoutfit-gold" />
              </div>
              <div>
                <div className="text-sm text-nickoutfit-stone/60">WhatsApp</div>
                <div className="font-medium text-nickoutfit-warm-white">Available 24/7</div>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-transparent via-nickoutfit-gold/30 to-transparent"></div>
            
            <div className="flex items-center gap-3 hover-lift cursor-pointer" onClick={handleEmail}>
              <div className="w-10 h-10 rounded-full bg-nickoutfit-gold/20 flex items-center justify-center">
                <Mail className="h-4 w-4 text-nickoutfit-gold" />
              </div>
              <div>
                <div className="text-sm text-nickoutfit-stone/60">Email Us</div>
                <div className="font-medium text-nickoutfit-warm-white">info@nickoutfit.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Artistic Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-nickoutfit-black via-nickoutfit-charcoal/50 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-nickoutfit-gold/30 animate-float"></div>
        <div className="absolute top-1/3 right-16 w-1 h-1 rounded-full bg-nickoutfit-bronze/40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-nickoutfit-gold/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </section>
    </>
  );
};

export default Hero;