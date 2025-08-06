import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Ruler, 
  Scissors, 
  CheckCircle,
  ArrowRight,
  Clock,
  User
} from "lucide-react";
import React, { useState } from "react";

const ProcessPreview = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: User,
      title: "Consultation",
      subtitle: "Tell us your vision",
      description: "Share your style dreams with our expert designers. We listen, understand, and plan your perfect garment.",
      duration: "30 mins",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Ruler,
      title: "Measurements",
      subtitle: "Precision is everything",
      description: "Our master tailors take detailed measurements ensuring the perfect fit. Every curve, every angle matters.",
      duration: "20 mins",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Scissors,
      title: "Crafting",
      subtitle: "Where magic happens",
      description: "Watch your vision come to life as our artisans cut, shape, and craft your garment with love and precision.",
      duration: "3-7 days",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: CheckCircle,
      title: "Final Fitting",
      subtitle: "Perfection delivered",
      description: "The moment of truth! Try on your masterpiece and let us make any final adjustments for absolute perfection.",
      duration: "15 mins",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-nickoutfit-warm-white to-nickoutfit-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-nickoutfit-gold/40 animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 rounded-full bg-nickoutfit-bronze/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-nickoutfit-bronze text-white font-semibold px-6 py-2">
            Our Process
          </Badge>
          
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-nickoutfit-charcoal mb-6">
            From <span className="text-nickoutfit-gold italic">Dream</span> to
            <br />
            <span className="text-nickoutfit-bronze italic">Reality</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our time-tested process that transforms your vision into the perfect garment
          </p>
        </div>

        {/* Interactive Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-nickoutfit-gold via-nickoutfit-bronze to-nickoutfit-gold"></div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 relative ${
                    activeStep === index 
                      ? 'scale-105 border-2 border-nickoutfit-gold shadow-glow' 
                      : 'hover:scale-102 border-nickoutfit-stone/20 hover:border-nickoutfit-gold/40'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardContent className="p-8 text-center relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-nickoutfit-gold text-nickoutfit-black font-bold text-sm flex items-center justify-center border-4 border-white shadow-fabric">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-elegant mt-4`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-serif text-2xl font-bold text-nickoutfit-charcoal mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-nickoutfit-gold font-medium mb-3">
                      {step.subtitle}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-nickoutfit-bronze" />
                      <span className="text-sm text-muted-foreground font-medium">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Active Indicator */}
                    {activeStep === index && (
                      <div className="absolute inset-0 bg-gradient-to-br from-nickoutfit-gold/5 to-transparent rounded-lg"></div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Active Step Details */}
          <Card className="bg-gradient-to-r from-nickoutfit-charcoal to-nickoutfit-black border-2 border-nickoutfit-gold/30 shadow-elegant">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  {React.createElement(steps[activeStep].icon, { 
                    className: "h-12 w-12 text-nickoutfit-gold" 
                  })}
                  <h3 className="font-serif text-4xl font-bold text-nickoutfit-warm-white">
                    {steps[activeStep].title}
                  </h3>
                </div>
                
                <p className="text-2xl text-nickoutfit-gold font-medium mb-4">
                  {steps[activeStep].subtitle}
                </p>
                
                <p className="text-xl text-nickoutfit-stone leading-relaxed max-w-4xl mx-auto mb-8">
                  {steps[activeStep].description}
                </p>
                
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-nickoutfit-bronze" />
                    <span className="text-nickoutfit-warm-white font-medium">
                      Duration: {steps[activeStep].duration}
                    </span>
                  </div>
                  
                  <div className="w-px h-6 bg-nickoutfit-gold/30"></div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-nickoutfit-stone">
                      Step {activeStep + 1} of {steps.length}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            {activeStep > 0 && (
              <button
                onClick={() => setActiveStep(activeStep - 1)}
                className="flex items-center gap-2 text-nickoutfit-gold hover:text-nickoutfit-gold-dark transition-colors"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Previous Step
              </button>
            )}
            
            {activeStep < steps.length - 1 && (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="flex items-center gap-2 text-nickoutfit-gold hover:text-nickoutfit-gold-dark transition-colors"
              >
                Next Step
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;