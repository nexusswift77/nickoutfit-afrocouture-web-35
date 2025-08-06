import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "0750 080 003",
      action: () => window.open("tel:+254750080003", "_blank")
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "0750 080 003",
      action: () => window.open("https://wa.me/254750080003", "_blank")
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@nickoutfit.com",
      action: () => window.open("mailto:info@nickoutfit.com", "_blank")
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@nickoutfitt",
      action: () => window.open("https://instagram.com/nickoutfitt", "_blank")
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello NickOutfit! 

*New Inquiry from Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Interest:* ${formData.service}

*Message:*
${formData.message}

Looking forward to hearing from you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254750080003?text=${encodedMessage}`, "_blank");
    
    toast({
      title: "Message Sent!",
      description: "We'll redirect you to WhatsApp to complete your inquiry.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to create something amazing? Contact us today and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-charcoal">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-charcoal font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 border-border/50 focus:border-gold"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-charcoal font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 border-border/50 focus:border-gold"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-charcoal font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 border-border/50 focus:border-gold"
                        placeholder="+254 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-charcoal font-medium">
                        Service Interest
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      >
                        <option value="">Select a service</option>
                        <option value="Tailored Suits">Tailored Suits</option>
                        <option value="African Couture">African Couture</option>
                        <option value="Wedding Attire">Wedding Attire</option>
                        <option value="Corporate Uniforms">Corporate Uniforms</option>
                        <option value="Custom Tailoring">Custom Tailoring</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-charcoal font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 border-border/50 focus:border-gold min-h-[120px]"
                      placeholder="Tell us about your project, measurements, timeline, or any specific requirements..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-gradient-gold hover:bg-gold-dark text-charcoal font-semibold shadow-gold transition-smooth"
                  >
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Hours */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-charcoal">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div 
                      key={index}
                      onClick={info.action}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted cursor-pointer transition-smooth group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-bounce">
                        <Icon className="h-5 w-5 text-charcoal" />
                      </div>
                      <div>
                        <div className="font-medium text-charcoal">{info.title}</div>
                        <div className="text-sm text-muted-foreground">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-charcoal flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-charcoal font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button 
                onClick={() => window.open("https://wa.me/254750080003", "_blank")}
                size="lg" 
                className="w-full bg-gradient-gold hover:bg-gold-dark text-charcoal font-semibold shadow-gold transition-smooth"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Now
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open("tel:+254750080003", "_blank")}
                size="lg" 
                className="w-full border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold transition-smooth"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;