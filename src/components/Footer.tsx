import { Phone, MessageCircle, Mail, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Tailored Suits",
    "African Couture",
    "Wedding Attire",
    "Corporate Uniforms",
    "Custom Tailoring"
  ];

  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-charcoal font-bold text-lg">NO</span>
              </div>
              <div>
                <div className="text-white font-bold text-xl">NICKOUTFIT</div>
                <div className="text-gold text-sm italic">We Tailor</div>
              </div>
            </div>
            <p className="text-warm-white/80 mb-6 leading-relaxed">
              The Icon of Style and Designs. Where Kenyan heritage meets modern elegance 
              in every stitch.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/254750080003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/20 hover:bg-gold flex items-center justify-center transition-smooth hover:scale-110"
              >
                <MessageCircle className="h-5 w-5 text-gold hover:text-charcoal transition-smooth" />
              </a>
              <a 
                href="https://instagram.com/nickoutfitt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/20 hover:bg-gold flex items-center justify-center transition-smooth hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-gold hover:text-charcoal transition-smooth" />
              </a>
              <a 
                href="mailto:info@nickoutfit.com"
                className="w-10 h-10 rounded-full bg-gold/20 hover:bg-gold flex items-center justify-center transition-smooth hover:scale-110"
              >
                <Mail className="h-5 w-5 text-gold hover:text-charcoal transition-smooth" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-warm-white/80 hover:text-gold transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-warm-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-warm-white/80 text-sm">0750 080 003</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-gold" />
                <span className="text-warm-white/80 text-sm">WhatsApp Available</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-warm-white/80 text-sm">info@nickoutfit.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-gold" />
                <span className="text-warm-white/80 text-sm">@nickoutfitt</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="font-medium text-white mb-3">Business Hours</h4>
              <div className="text-warm-white/80 text-sm space-y-1">
                <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                <div>Saturday: 9:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-warm-white/60">
            <div className="mb-4 md:mb-0">
              © {currentYear} NickOutfit. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>Proudly Tailoring Kenya</span>
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <span>The Icon of Style and Designs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;