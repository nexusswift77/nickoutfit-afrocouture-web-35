import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "CEO, Tech Startup",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "NickOutfit transformed my entire professional wardrobe. The attention to detail and perfect fit is absolutely incredible!",
      service: "Corporate Suits"
    },
    {
      name: "Michael Ochieng",
      role: "Wedding Groom",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Our wedding day was perfect, and my suit was the highlight! Everyone kept asking where I got it tailored. Pure perfection!",
      service: "Wedding Attire"
    },
    {
      name: "Grace Akinyi",
      role: "Fashion Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The vitenge dress they made for my graduation was absolutely stunning. I felt like African royalty walking across that stage!",
      service: "Vitenge Couture"
    },
    {
      name: "David Kimani",
      role: "Bank Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Professional, timely, and exceptional quality. My colleagues always compliment my suits. NickOutfit is simply the best!",
      service: "Bespoke Tailoring"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-nickoutfit-black via-nickoutfit-charcoal to-nickoutfit-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-nickoutfit-gold/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-24 h-24 border border-nickoutfit-bronze/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-gold text-nickoutfit-black font-semibold px-6 py-2">
            Client Love
          </Badge>
          
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-nickoutfit-warm-white mb-6">
            <span className="text-nickoutfit-gold italic">Stories</span> That Inspire Us
          </h2>
          
          <p className="text-xl text-nickoutfit-stone max-w-3xl mx-auto">
            Hear from our amazing clients who trusted us with their most important moments
          </p>
        </div>

        {/* Main Testimonial */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-nickoutfit-warm-white to-nickoutfit-cream border-2 border-nickoutfit-gold/30 shadow-glow mb-12">
          <CardContent className="p-12 md:p-16 text-center relative">
            <Quote className="h-16 w-16 text-nickoutfit-gold/30 mx-auto mb-8" />
            
            <p className="text-2xl md:text-3xl text-nickoutfit-charcoal leading-relaxed mb-8 font-medium italic">
              "{testimonials[currentTestimonial].text}"
            </p>
            
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-nickoutfit-gold fill-current" />
              ))}
            </div>
            
            {/* Client Info */}
            <div className="flex items-center justify-center gap-4">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-4 border-nickoutfit-gold shadow-fabric"
              />
              <div className="text-left">
                <h4 className="font-bold text-nickoutfit-charcoal text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-nickoutfit-gold text-sm font-medium">
                  {testimonials[currentTestimonial].service}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8">
          <Button
            variant="outline"
            size="lg"
            onClick={prevTestimonial}
            className="border-nickoutfit-gold text-nickoutfit-gold hover:bg-nickoutfit-gold hover:text-nickoutfit-black"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-nickoutfit-gold scale-125' 
                    : 'bg-nickoutfit-gold/30 hover:bg-nickoutfit-gold/60'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="lg"
            onClick={nextTestimonial}
            className="border-nickoutfit-gold text-nickoutfit-gold hover:bg-nickoutfit-gold hover:text-nickoutfit-black"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* All Reviews Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-500 hover:scale-105 ${
                index === currentTestimonial 
                  ? 'border-2 border-nickoutfit-gold shadow-glow' 
                  : 'border-nickoutfit-stone/20 hover:border-nickoutfit-gold/40'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6 text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mx-auto mb-3 border-2 border-nickoutfit-gold/30"
                />
                <h5 className="font-semibold text-nickoutfit-charcoal mb-1">
                  {testimonial.name}
                </h5>
                <p className="text-sm text-muted-foreground mb-2">
                  {testimonial.role}
                </p>
                <div className="flex justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-nickoutfit-gold fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;