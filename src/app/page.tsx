import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Lessons from "@/components/Lessons";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Lessons />
      <Reviews />
      <Gallery />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
