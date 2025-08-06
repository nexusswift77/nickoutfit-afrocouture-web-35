import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Trophy, 
  Users, 
  Shield,
  ArrowRight,
  Sparkles,
  Crown,
  Scissors,
  Timer,
  Truck,
  CheckCircle2,
  Star,
  Heart,
  MessageCircle
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CreativeShowcase = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const stitchProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // WhatsApp float animation
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.2;
      setShowWhatsApp(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    if (!timelineRef.current) return;

    // Tailor Timeline Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

    // Animate stitch lines
    tl.to(".stitch-line", {
      width: "100%",
      duration: 2,
      ease: "power2.out"
    });

    // Animate process steps
    gsap.utils.toArray(".process-step").forEach((step: any, index) => {
      gsap.fromTo(step, 
        { 
          opacity: 0, 
          y: 50,
          rotation: -5 
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const whyChooseUs = [
    {
      icon: Timer,
      title: "Express Delivery",
      description: "24-48hr rush service available",
      detail: "Professional deadlines? Corporate events? We deliver excellence at lightning speed with our premium express service.",
      color: "from-emerald-500 to-teal-600",
      delay: "0s"
    },
    {
      icon: Trophy,
      title: "Industry Excellence",
      description: "Kenya's Premier Tailoring House",
      detail: "Award-winning craftsmanship recognized across East Africa. Setting the gold standard in bespoke African fashion.",
      color: "from-amber-500 to-yellow-600",
      delay: "0.2s"
    },
    {
      icon: Users,
      title: "Elite Clientele",
      description: "800+ Distinguished Clients",
      detail: "Trusted by Kenya's top executives, celebrities, and discerning professionals who demand nothing but perfection.",
      color: "from-blue-600 to-indigo-700",
      delay: "0.4s"
    },
    {
      icon: Shield,
      title: "Perfection Promise",
      description: "100% satisfaction guaranteed",
      detail: "Our master craftsmanship guarantee: Love your garment completely, or we'll remake it until you do. Excellence, assured.",
      color: "from-violet-600 to-purple-700",
      delay: "0.6s"
    }
  ];

  const stats = [
    { number: "3,200+", label: "Masterpieces Crafted", icon: Scissors, gradient: "from-nickoutfit-gold to-nickoutfit-bronze" },
    { number: "24hrs", label: "Express Service", icon: Clock, gradient: "from-emerald-500 to-teal-600" },
    { number: "100%", label: "Client Satisfaction", icon: CheckCircle2, gradient: "from-violet-500 to-purple-600" },
    { number: "5★", label: "Premium Rating", icon: Star, gradient: "from-amber-500 to-yellow-600" }
  ];

  const tailorProcess = [
    { step: "Measurement", icon: "📏", description: "Precise body measurements for perfect fit" },
    { step: "Fabric Selection", icon: "🧵", description: "Choose from premium fabrics and patterns" },
    { step: "Cutting", icon: "✂️", description: "Expert cutting with attention to detail" },
    { step: "Stitching", icon: "🪡", description: "Master craftsmanship brings it together" },
    { step: "Fitting", icon: "👔", description: "Final adjustments for perfection" }
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        ref={parallaxRef}
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-nickoutfit-cream via-nickoutfit-warm-white to-nickoutfit-cream"
      >
        {/* Enhanced Background Elements with Animation */}
        <div className={`absolute top-0 left-0 w-[500px] h-[500px] bg-nickoutfit-gold/5 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute bottom-0 right-0 w-[400px] h-[400px] bg-nickoutfit-bronze/5 rounded-full blur-3xl transition-all duration-1000 delay-500 ${isVisible ? 'animate-pulse' : ''}`}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-nickoutfit-gold/3 to-nickoutfit-bronze/3 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header with Staggered Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-nickoutfit-gold to-transparent w-16"></div>
              <Sparkles className="h-8 w-8 text-nickoutfit-gold animate-pulse" />
              <Badge className="bg-gradient-gold text-nickoutfit-black font-bold px-8 py-3 text-lg shadow-glow">
                Why Choose Excellence?
              </Badge>
              <Sparkles className="h-8 w-8 text-nickoutfit-gold animate-pulse" />
              <div className="h-px bg-gradient-to-r from-transparent via-nickoutfit-gold to-transparent w-16"></div>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-nickoutfit-charcoal mb-6 sm:mb-8 leading-tight"
            >
              Where <span className="text-nickoutfit-gold italic">Craftsmanship</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Meets <span className="text-nickoutfit-bronze italic">Innovation</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4"
            >
              Discover the NickOutfit difference — where traditional African tailoring artistry 
              meets cutting-edge design innovation and uncompromising quality standards.
            </motion.p>
          </motion.div>

          {/* Enhanced Interactive Stats with Premium Styling */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-28 px-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card 
                    className="group cursor-pointer transition-all duration-700 border-2 border-nickoutfit-stone/30 hover:border-nickoutfit-gold/60 bg-gradient-to-br from-white via-nickoutfit-cream/30 to-white hover:shadow-glow backdrop-blur-sm"
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <CardContent className="p-4 sm:p-6 md:p-10 text-center relative overflow-hidden">
                      <motion.div 
                        className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 shadow-elegant`}
                        animate={{ 
                          scale: hoveredStat === index ? 1.2 : 1,
                          rotate: hoveredStat === index ? 12 : 0 
                        }}
                      >
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                      </motion.div>
                      
                      <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-nickoutfit-charcoal mb-2 sm:mb-3 transition-all duration-300">
                        {stat.number}
                      </div>
                      
                      <div className="text-nickoutfit-gold font-semibold text-sm sm:text-base md:text-lg">
                        {stat.label}
                      </div>
                      
                      {/* Enhanced animated background */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-nickoutfit-gold/8 to-transparent"
                        animate={{ 
                          opacity: hoveredStat === index ? 1 : 0,
                          scale: hoveredStat === index ? 1.1 : 1 
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: hoveredStat === index ? "100%" : "-100%" }}
                        transition={{ duration: 0.8 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Tailor Process Timeline with Scroll Animation */}
          <div ref={timelineRef} className="mb-32">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl font-bold text-center text-nickoutfit-charcoal mb-16"
            >
              Our <span className="text-nickoutfit-gold italic">Crafting</span> Process
            </motion.h3>
            
            <div className="relative">
              {/* Animated Stitch Line */}
              <div className="absolute top-1/2 left-0 h-1 bg-nickoutfit-stone/20 w-full transform -translate-y-1/2"></div>
              <div className="stitch-line absolute top-1/2 left-0 h-1 bg-gradient-to-r from-nickoutfit-gold to-nickoutfit-bronze transform -translate-y-1/2 w-0"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 px-4">
                {tailorProcess.map((process, index) => (
                  <motion.div
                    key={index}
                    className="process-step text-center relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="relative z-10 bg-white rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center text-2xl sm:text-3xl shadow-elegant border-4 border-nickoutfit-gold/20">
                      {process.icon}
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-nickoutfit-charcoal mb-2 sm:mb-3">
                      {process.step}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Why Choose Us Cards with Scroll Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20 md:mb-24 px-4">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <Card className="group relative overflow-hidden border-2 border-nickoutfit-stone/30 hover:border-nickoutfit-gold/50 transition-all duration-700 backdrop-blur-sm bg-gradient-to-br from-white via-nickoutfit-cream/20 to-white h-full">
                    <CardContent className="p-6 sm:p-8 md:p-10 relative h-full flex flex-col">
                      {/* Premium Icon Design */}
                      <motion.div 
                        className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 sm:mb-8 shadow-elegant relative`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent"></div>
                      </motion.div>
                      
                      {/* Enhanced Content */}
                      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-nickoutfit-charcoal mb-3 sm:mb-4 leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="text-nickoutfit-gold font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                        {item.description}
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base flex-grow">
                        {item.detail}
                      </p>
                      
                      {/* Learn More Button */}
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-nickoutfit-gold hover:text-nickoutfit-gold-dark font-medium group/btn mt-auto"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nickoutfit-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action with Creative Elements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-nickoutfit-black via-nickoutfit-charcoal to-nickoutfit-black border-2 border-nickoutfit-gold/30 shadow-elegant relative overflow-hidden mx-4">
              <CardContent className="p-8 sm:p-12 md:p-16 text-center relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-nickoutfit-gold/30 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-nickoutfit-bronze/30 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-nickoutfit-gold/20 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <motion.h3 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-nickoutfit-warm-white mb-4 sm:mb-6"
                  >
                    Ready to Look <span className="text-nickoutfit-gold italic">Absolutely</span>
                    <br />
                    <span className="text-nickoutfit-bronze italic">Incredible?</span>
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-xl text-nickoutfit-stone mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
                  >
                    Join thousands of satisfied customers who chose NickOutfit for their most important moments
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
                  >
                    <Button 
                      size="lg"
                      className="bg-gradient-gold hover:bg-nickoutfit-gold-dark text-nickoutfit-black font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg shadow-glow gold-shimmer w-full sm:w-auto min-h-[48px]"
                      onClick={() => window.open("https://wa.me/254750080003?text=Hi! I'd like to start my tailoring journey with NickOutfit", "_blank")}
                    >
                      <Heart className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      Start Your Journey
                    </Button>
                    
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-nickoutfit-gold text-nickoutfit-gold hover:bg-nickoutfit-gold hover:text-nickoutfit-black font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-h-[48px]"
                    >
                      <Crown className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      View Portfolio
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ 
          opacity: showWhatsApp ? 1 : 0, 
          scale: showWhatsApp ? 1 : 0,
          rotate: showWhatsApp ? 0 : -180
        }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          duration: 0.6 
        }}
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50"
      >
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 min-h-[48px] min-w-[48px]"
          onClick={() => window.open("https://wa.me/254750080003?text=Hi! I'd like to get a quote from NickOutfit", "_blank")}
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </motion.div>

      {/* Scroll to Stitch Footer Animation */}
      <motion.div 
        className="h-2 bg-gradient-to-r from-nickoutfit-gold via-nickoutfit-bronze to-nickoutfit-gold"
        style={{ 
          scaleX: stitchProgress,
          transformOrigin: "left"
        }}
      />
    </section>
  );
};

export default CreativeShowcase;