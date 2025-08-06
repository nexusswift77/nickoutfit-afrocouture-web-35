import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;