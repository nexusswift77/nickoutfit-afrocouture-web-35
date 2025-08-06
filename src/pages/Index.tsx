import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CreativeShowcase from "@/components/CreativeShowcase";
import ProcessPreview from "@/components/ProcessPreview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import QuickBooking from "@/components/QuickBooking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CreativeShowcase />
        <ProcessPreview />
        <TestimonialsCarousel />
        <QuickBooking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
