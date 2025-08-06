import Navbar from "@/components/Navbar";
import InteractiveServices from "@/components/InteractiveServices";
import FabricShowcase from "@/components/FabricShowcase";
import TailorTimeline from "@/components/TailorTimeline";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <InteractiveServices />
        <FabricShowcase />
        <TailorTimeline />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;