import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Instagram, MessageCircle, Phone } from "lucide-react";

const QRSection = () => {
  const qrCodes = [
    {
      title: "Follow Us on Instagram",
      subtitle: "@nickoutfitt",
      description: "Get daily inspiration, behind-the-scenes content, and our latest creations",
      icon: Instagram,
      action: "instagram",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Start WhatsApp Chat",
      subtitle: "Instant Consultation",
      description: "Quick response for inquiries, bookings, and style advice",
      icon: MessageCircle,
      action: "whatsapp",
      color: "from-green-500 to-green-600"
    }
  ];

  const handleQRAction = (action: string) => {
    if (action === "instagram") {
      window.open("https://instagram.com/nickoutfitt", "_blank");
    } else if (action === "whatsapp") {
      window.open("https://wa.me/254750080003", "_blank");
    }
  };

  // Generate QR code placeholder (in a real implementation, you'd use a QR library)
  const QRPlaceholder = ({ action }: { action: string }) => (
    <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center border-4 border-gold/20 relative overflow-hidden">
      {/* QR Code Pattern Simulation */}
      <div className="grid grid-cols-8 gap-0.5 w-28 h-28">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className={`
              ${Math.random() > 0.5 ? 'bg-charcoal' : 'bg-transparent'}
              ${i < 21 || i > 42 ? 'bg-charcoal' : ''}
              ${i % 8 < 3 || i % 8 > 4 ? 'bg-charcoal' : ''}
            `}
          />
        ))}
      </div>
      
      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
          <QrCode className="h-4 w-4 text-charcoal" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Connect Instantly
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Scan to connect with NickOutfit instantly. Follow our journey and start your consultation 
            with a simple scan from your mobile device.
          </p>
        </div>

        {/* QR Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {qrCodes.map((qr, index) => {
            const Icon = qr.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-smooth border-border/50 hover:border-gold/30 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Gradient Header */}
                    <div className={`
                      h-24 bg-gradient-to-r ${qr.color} flex items-center justify-center relative overflow-hidden
                    `}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <Icon className="h-12 w-12 text-white z-10" />
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* QR Code */}
                        <div className="flex-shrink-0">
                          <QRPlaceholder action={qr.action} />
                          <p className="text-center text-xs text-muted-foreground mt-2">
                            Point your camera here
                          </p>
                        </div>

                        {/* Info */}
                        <div className="flex-1 text-center lg:text-left">
                          <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                            {qr.title}
                          </h3>
                          <p className="text-gold text-lg font-medium mb-3">
                            {qr.subtitle}
                          </p>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {qr.description}
                          </p>

                          {/* CTA Button */}
                          <Button 
                            onClick={() => handleQRAction(qr.action)}
                            size="lg" 
                            className="bg-gradient-gold hover:bg-gold-dark text-charcoal font-semibold shadow-gold transition-smooth w-full lg:w-auto"
                          >
                            <Icon className="mr-2 h-5 w-5" />
                            {qr.action === "instagram" ? "Follow Now" : "Chat Now"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="mt-16">
          <Card className="bg-charcoal text-warm-white border-gold/20">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">
                All Ways to Reach Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Phone className="h-6 w-6 text-gold" />
                  <span className="text-warm-white font-medium">Call Us</span>
                  <span className="text-warm-white/80">0750 080 003</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-gold" />
                  <span className="text-warm-white font-medium">WhatsApp</span>
                  <span className="text-warm-white/80">0750 080 003</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Instagram className="h-6 w-6 text-gold" />
                  <span className="text-warm-white font-medium">Instagram</span>
                  <span className="text-warm-white/80">@nickoutfitt</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QRSection;