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
  Heart
} from "lucide-react";
import { useState } from "react";

const QuickBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    "Bespoke Suits",
    "Vitenge Couture", 
    "Wedding Attire",
    "Corporate Uniforms",
    "Custom Design"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi NickOutfit! 

📝 *New Consultation Request*
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
✂️ Service: ${formData.service}
💬 Message: ${formData.message}

I'd like to book a consultation. Thank you!`;

    window.open(`https://wa.me/254750080003?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const quickContact = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Instant Response",
      action: "Chat Now",
      color: "from-green-500 to-emerald-600",
      onClick: () => window.open("https://wa.me/254750080003", "_blank")
    },
    {
      icon: Phone,
      title: "Call Direct",
      subtitle: "0750 080 003",
      action: "Call Now",
      color: "from-blue-500 to-cyan-600",
      onClick: () => window.open("tel:+254750080003")
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "info@nickoutfit.com",
      action: "Send Email",
      color: "from-purple-500 to-violet-600",
      onClick: () => window.open("mailto:info@nickoutfit.com")
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-nickoutfit-cream via-nickoutfit-warm-white to-nickoutfit-cream relative overflow-hidden">
      {/* Artistic Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nickoutfit-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-nickoutfit-bronze/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-gold text-nickoutfit-black font-semibold px-6 py-2">
            Book Your Consultation
          </Badge>
          
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-nickoutfit-charcoal mb-6">
            Let's Create Something
            <br />
            <span className="text-nickoutfit-gold italic">Amazing</span> Together
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your tailoring journey? Book your free consultation and let's bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Booking Form */}
          <Card className="bg-gradient-to-br from-white to-nickoutfit-cream/50 border-2 border-nickoutfit-gold/20 shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl font-bold text-nickoutfit-charcoal mb-3">
                  Free Consultation
                </h3>
                <p className="text-muted-foreground">
                  Tell us about your project and we'll get back to you within 30 minutes
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-nickoutfit-charcoal mb-2">
                    Your Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="border-nickoutfit-stone/30 focus:border-nickoutfit-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nickoutfit-charcoal mb-2">
                    Phone Number *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="07XX XXX XXX"
                    className="border-nickoutfit-stone/30 focus:border-nickoutfit-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-nickoutfit-charcoal mb-2">
                    Service Needed *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-3 py-2 border border-nickoutfit-stone/30 rounded-md focus:outline-none focus:ring-2 focus:ring-nickoutfit-gold focus:border-nickoutfit-gold"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-nickoutfit-charcoal mb-2">
                    Tell us about your project
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your vision, timeline, budget, or any special requirements..."
                    rows={4}
                    className="border-nickoutfit-stone/30 focus:border-nickoutfit-gold"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-gold hover:bg-nickoutfit-gold-dark text-nickoutfit-black font-bold shadow-glow gold-shimmer"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="h-4 w-4 text-nickoutfit-gold" />
                  <span>30-minute response time guaranteed</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4 text-nickoutfit-bronze" />
                  <span>100% satisfaction guarantee</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact Options */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-bold text-nickoutfit-charcoal mb-4">
                Or Contact Us <span className="text-nickoutfit-gold italic">Directly</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Prefer to reach out directly? Choose your preferred method below for immediate assistance.
              </p>
            </div>

            <div className="space-y-4">
              {quickContact.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card 
                    key={index}
                    className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-fabric border-nickoutfit-stone/20 hover:border-nickoutfit-gold/40"
                    onClick={contact.onClick}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center shadow-fabric`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-bold text-nickoutfit-charcoal text-xl mb-1">
                            {contact.title}
                          </h4>
                          <p className="text-muted-foreground mb-2">
                            {contact.subtitle}
                          </p>
                          <Button 
                            variant="ghost" 
                            className="text-nickoutfit-gold hover:text-nickoutfit-gold-dark font-medium p-0 h-auto"
                          >
                            {contact.action} →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Business Info */}
            <Card className="bg-gradient-to-r from-nickoutfit-black to-nickoutfit-charcoal border-nickoutfit-gold/30">
              <CardContent className="p-8">
                <h4 className="font-serif text-2xl font-bold text-nickoutfit-warm-white mb-6">
                  Visit Our Atelier
                </h4>
                
                <div className="space-y-4 text-nickoutfit-stone">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-nickoutfit-gold" />
                    <span>Nairobi, Kenya</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-nickoutfit-gold" />
                    <div>
                      <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                      <div>Saturday: 9:00 AM - 4:00 PM</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickBooking;