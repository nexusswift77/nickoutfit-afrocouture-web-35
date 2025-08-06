import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ruler, Scissors, Zap, Crown, CheckCircle } from "lucide-react";
import processMeasuring from "@/assets/process-measuring.jpg";
import processCutting from "@/assets/process-cutting.jpg";
import processStitching from "@/assets/process-stitching.jpg";
import processFinal from "@/assets/process-final.jpg";

const TailorTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const timelineSteps = [
    {
      id: 1,
      title: "Consultation & Measurement",
      subtitle: "Getting to know you and your style",
      description: "We start with a detailed consultation to understand your vision, followed by precise measurements using traditional and modern techniques.",
      image: processMeasuring,
      icon: Ruler,
      duration: "30-45 minutes",
      details: ["Style consultation", "Precision measurements", "Fabric recommendations", "Design sketching"]
    },
    {
      id: 2,
      title: "Pattern Making & Cutting",
      subtitle: "Crafting the foundation of your garment",
      description: "Our master tailors create custom patterns and carefully cut your chosen fabrics with precision and attention to detail.",
      image: processCutting,
      icon: Scissors,
      duration: "2-3 hours",
      details: ["Custom pattern creation", "Fabric layout planning", "Precision cutting", "Quality inspection"]
    },
    {
      id: 3,
      title: "Expert Stitching",
      subtitle: "Where craftsmanship comes alive",
      description: "Each piece is meticulously stitched using time-honored techniques combined with modern precision equipment.",
      image: processStitching,
      icon: Zap,
      duration: "3-5 days",
      details: ["Hand and machine stitching", "Lining installation", "Detail work", "Quality control"]
    },
    {
      id: 4,
      title: "Final Fitting & Reveal",
      subtitle: "Your perfect garment comes to life",
      description: "The final fitting ensures everything is perfect before presenting you with your beautifully crafted garment.",
      image: processFinal,
      icon: Crown,
      duration: "30 minutes",
      details: ["Final adjustments", "Perfect fit confirmation", "Styling advice", "Care instructions"]
    }
  ];

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-progress through steps when visible
          timelineSteps.forEach((_, index) => {
            setTimeout(() => setActiveStep(index), index * 1000);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    const message = "Hello NickOutfit! I'd love to learn more about your tailoring process and book a consultation.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254750080003?text=${encodedMessage}`, "_blank");
  };

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal text-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-white mb-6">
            The Tailoring Journey
          </h2>
          <p className="text-lg text-warm-white/80 max-w-3xl mx-auto">
            From concept to creation, experience the artistry behind every NickOutfit masterpiece.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30 hidden lg:block">
            <div 
              className="bg-gradient-to-b from-gold to-gold-light transition-all duration-2000 ease-out w-full"
              style={{ 
                height: isVisible ? `${((activeStep + 1) / timelineSteps.length) * 100}%` : '0%' 
              }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-16 lg:space-y-24">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep >= index;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`
                    relative flex flex-col lg:flex-row items-center gap-8
                    ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                    ${isActive ? 'animate-fade-in' : 'opacity-50'}
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Number Circle */}
                  <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500
                      ${isActive 
                        ? 'bg-gradient-gold shadow-gold animate-pulse-gold' 
                        : 'bg-warm-white/10 border-2 border-warm-white/30'
                      }
                    `}>
                      {isActive ? (
                        <Icon className="h-7 w-7 text-charcoal" />
                      ) : (
                        <span className="text-warm-white font-bold text-lg">{step.id}</span>
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card className={`
                    flex-1 max-w-2xl bg-warm-white/5 border-warm-white/20 backdrop-blur-sm
                    ${isActive ? 'border-gold/50 shadow-gold' : ''}
                    transition-all duration-500
                    ${isLeft ? 'lg:mr-8' : 'lg:ml-8'}
                  `}>
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className={`
                            w-full h-64 md:h-full object-cover transition-all duration-700
                            ${isActive ? 'scale-105' : 'scale-100 filter grayscale'}
                          `}
                        />
                        <div className="absolute top-4 right-4">
                          <div className="bg-gold px-3 py-1 rounded-full">
                            <span className="text-charcoal text-sm font-medium">{step.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                            <span className="text-gold font-bold text-sm">{step.id}</span>
                          </div>
                          <div className="text-gold text-sm font-medium">Step {step.id}</div>
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-warm-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gold text-lg mb-4">
                          {step.subtitle}
                        </p>
                        <p className="text-warm-white/80 mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Details List */}
                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-gold" />
                              <span className="text-warm-white/70 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="mb-8">
            <h3 className="font-serif text-3xl font-bold text-warm-white mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-lg text-warm-white/80">
              Experience the NickOutfit difference. From consultation to completion, 
              we're with you every step of the way.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="bg-gradient-gold hover:bg-gold-dark text-charcoal font-semibold px-8 shadow-gold transition-smooth"
            >
              Book Your Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold px-8 transition-smooth"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailorTimeline;