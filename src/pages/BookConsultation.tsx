import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  MapPin,
  Zap,
  Heart,
  User,
  Briefcase,
  Palette,
  Crown,
  Scissors,
  CheckCircle2,
  Star,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

const BookConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'whatsapp'
  });

  const services = [
    { value: "bespoke-suits", label: "Bespoke Suits", icon: Briefcase, price: "From KSh 25,000" },
    { value: "vitenge-couture", label: "Vitenge Couture", icon: Palette, price: "From KSh 8,000" },
    { value: "wedding-attire", label: "Wedding Attire", icon: Crown, price: "From KSh 45,000" },
    { value: "corporate-uniforms", label: "Corporate Uniforms", icon: User, price: "From KSh 3,500" },
    { value: "custom-design", label: "Custom Design", icon: Scissors, price: "Quote on Request" }
  ];

  const budgetRanges = [
    "Under KSh 10,000",
    "KSh 10,000 - 25,000", 
    "KSh 25,000 - 50,000",
    "KSh 50,000 - 100,000",
    "Above KSh 100,000"
  ];

  const timelineOptions = [
    "Rush (1-3 days)",
    "Standard (1-2 weeks)", 
    "Flexible (2-4 weeks)",
    "No Rush (1+ months)"
  ];

  const consultationBenefits = [
    {
      icon: User,
      title: "Personal Style Analysis",
      description: "Discover your unique style profile and body type recommendations"
    },
    {
      icon: Palette,
      title: "Fabric & Color Consultation", 
      description: "Expert guidance on premium fabrics and colors that complement you"
    },
    {
      icon: Scissors,
      title: "Design Conceptualization",
      description: "Sketch and visualize your custom garment before we begin"
    },
    {
      icon: Calendar,
      title: "Timeline & Fittings Plan",
      description: "Detailed schedule including measurement sessions and fittings"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `🌟 *PREMIUM CONSULTATION REQUEST* 🌟

👤 *Client Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

✂️ *Project Details:*
• Service: ${formData.service}
• Budget Range: ${formData.budget}
• Timeline: ${formData.timeline}
• Preferred Contact: ${formData.preferredContact}

💬 *Additional Details:*
${formData.message}

📅 Ready to schedule my FREE consultation with NickOutfit's master tailors!`;

    window.open(`https://wa.me/254750080003?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-nickoutfit-black via-nickoutfit-charcoal to-nickoutfit-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-fabric opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-gold text-nickoutfit-black font-bold px-8 py-3 text-lg shadow-glow">
                Free Premium Consultation
              </Badge>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-nickoutfit-warm-white mb-8">
                Begin Your <span className="text-nickoutfit-gold italic">Tailoring</span>
                <br />
                <span className="text-nickoutfit-bronze italic">Journey</span>
              </h1>
              
              <p className="text-2xl text-nickoutfit-stone max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the NickOutfit difference with a complimentary 45-minute consultation 
                where we transform your vision into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-nickoutfit-gold">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>100% Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 text-nickoutfit-bronze">
                  <Clock className="h-5 w-5" />
                  <span>45-Minute Session</span>
                </div>
                <div className="flex items-center gap-2 text-nickoutfit-gold">
                  <Star className="h-5 w-5" />
                  <span>Expert Style Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-nickoutfit-charcoal mb-6">
                What You'll <span className="text-nickoutfit-gold italic">Experience</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every consultation is designed to understand your unique style and create the perfect garment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="group hover:scale-105 transition-all duration-500 border-2 border-nickoutfit-stone/20 hover:border-nickoutfit-gold/40 bg-gradient-to-br from-white to-nickoutfit-cream/30">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-elegant">
                        <Icon className="h-10 w-10 text-nickoutfit-black" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-nickoutfit-charcoal mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-24 bg-gradient-to-br from-nickoutfit-cream via-nickoutfit-warm-white to-nickoutfit-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <Card className="bg-gradient-to-br from-white to-nickoutfit-cream/50 border-2 border-nickoutfit-gold/30 shadow-elegant">
                <CardContent className="p-12">
                  <div className="text-center mb-10">
                    <h3 className="font-serif text-4xl font-bold text-nickoutfit-charcoal mb-4">
                      Book Your Session
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Complete the form below and we'll contact you within 30 minutes
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-nickoutfit-charcoal mb-3">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Enter your full name"
                          className="h-12 border-2 border-nickoutfit-stone/30 focus:border-nickoutfit-gold text-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-nickoutfit-charcoal mb-3">
                          Email Address *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          className="h-12 border-2 border-nickoutfit-stone/30 focus:border-nickoutfit-gold text-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-nickoutfit-charcoal mb-3">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="07XX XXX XXX"
                        className="h-12 border-2 border-nickoutfit-stone/30 focus:border-nickoutfit-gold text-lg"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-nickoutfit-charcoal mb-4">
                        Service Needed *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Card 
                              key={service.value}
                              className={`cursor-pointer transition-all duration-300 ${
                                formData.service === service.value 
                                  ? 'border-2 border-nickoutfit-gold bg-nickoutfit-gold/5' 
                                  : 'border border-nickoutfit-stone/30 hover:border-nickoutfit-gold/50'
                              }`}
                              onClick={() => setFormData({...formData, service: service.label})}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                  <Icon className="h-6 w-6 text-nickoutfit-gold" />
                                  <div>
                                    <div className="font-semibold text-nickoutfit-charcoal">
                                      {service.label}
                                    </div>
                                    <div className="text-sm text-nickoutfit-gold">
                                      {service.price}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-nickoutfit-charcoal mb-3">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="w-full h-12 px-4 border-2 border-nickoutfit-stone/30 rounded-md focus:outline-none focus:border-nickoutfit-gold text-lg"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-nickoutfit-charcoal mb-3">
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="w-full h-12 px-4 border-2 border-nickoutfit-stone/30 rounded-md focus:outline-none focus:border-nickoutfit-gold text-lg"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((timeline) => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-nickoutfit-charcoal mb-3">
                        Tell us about your vision
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Describe your style goals, occasion, inspiration, or any specific requirements..."
                        rows={5}
                        className="border-2 border-nickoutfit-stone/30 focus:border-nickoutfit-gold text-lg"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full h-14 bg-gradient-gold hover:bg-nickoutfit-gold-dark text-nickoutfit-black font-bold text-xl shadow-glow gold-shimmer"
                    >
                      <Calendar className="mr-3 h-6 w-6" />
                      Book My Free Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-gradient-to-r from-nickoutfit-black to-nickoutfit-charcoal border-2 border-nickoutfit-gold/30 shadow-elegant">
                  <CardContent className="p-10">
                    <h3 className="font-serif text-3xl font-bold text-nickoutfit-warm-white mb-8">
                      Prefer to Connect Directly?
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-nickoutfit-warm-white/5 hover:bg-nickoutfit-warm-white/10 transition-colors cursor-pointer"
                           onClick={() => window.open("https://wa.me/254750080003", "_blank")}>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <MessageCircle className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-nickoutfit-warm-white text-lg">WhatsApp</div>
                          <div className="text-nickoutfit-stone">Instant response • Available 24/7</div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-nickoutfit-gold ml-auto" />
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-nickoutfit-warm-white/5 hover:bg-nickoutfit-warm-white/10 transition-colors cursor-pointer"
                           onClick={() => window.open("tel:+254750080003")}>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                          <Phone className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-nickoutfit-warm-white text-lg">Call Direct</div>
                          <div className="text-nickoutfit-stone">0750 080 003 • Mon-Sat 8AM-6PM</div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-nickoutfit-gold ml-auto" />
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-nickoutfit-warm-white/5 hover:bg-nickoutfit-warm-white/10 transition-colors cursor-pointer"
                           onClick={() => window.open("mailto:info@nickoutfit.com")}>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                          <Mail className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-nickoutfit-warm-white text-lg">Email Us</div>
                          <div className="text-nickoutfit-stone">info@nickoutfit.com • 24hr response</div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-nickoutfit-gold ml-auto" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-2 border-nickoutfit-gold/30 bg-gradient-to-br from-nickoutfit-cream to-white">
                  <CardContent className="p-8">
                    <h4 className="font-serif text-2xl font-bold text-nickoutfit-charcoal mb-6">
                      Atelier Hours
                    </h4>
                    
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-semibold">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-semibold">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-semibold">By Appointment</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-nickoutfit-gold/10 rounded-xl">
                      <div className="flex items-center gap-2 text-nickoutfit-charcoal">
                        <MapPin className="h-5 w-5 text-nickoutfit-gold" />
                        <span className="font-semibold">Located in Nairobi, Kenya</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Exact location shared upon booking confirmation
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookConsultationPage;