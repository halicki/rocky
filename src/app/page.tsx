import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Lessons from "@/components/Lessons";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE_URL } from "@/lib/constants";

const GALLERY_PHOTOS = [
  { src: "/images/photo1.jpg", caption: "Surf lesson at Batu Bolong Beach Canggu Bali" },
  { src: "/images/photo2.jpg", caption: "Rocky teaching surf stance on Batu Bolong Beach Canggu" },
  { src: "/images/photo3.jpg", caption: "Rocky surf instructor coaching student at Batu Bolong" },
  { src: "/images/photo4.jpg", caption: "Surfing With Rocky group lesson Canggu Bali" },
  { src: "/images/photo5.jpg", caption: "Sunset surf session at Batu Bolong Beach Bali" },
  { src: "/images/photo6.jpg", caption: "Surfing With Rocky team and kids at Batu Bolong Beach" },
];

const IMAGE_GALLERY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Surfing With Rocky — Lessons at Batu Bolong Beach, Canggu, Bali",
  description:
    "Photos from beginner, group, private and family surf lessons with Rocky at Batu Bolong Beach in Canggu, Bali.",
  url: new URL("/#gallery", SITE_URL).toString(),
  image: GALLERY_PHOTOS.map((photo) => ({
    "@type": "ImageObject",
    contentUrl: new URL(photo.src, SITE_URL).toString(),
    url: new URL(photo.src, SITE_URL).toString(),
    caption: photo.caption,
    description: photo.caption,
    creditText: "Surfing With Rocky",
    creator: { "@type": "Person", name: "Rocky" },
    contentLocation: "Batu Bolong Beach, Canggu, Bali, Indonesia",
    license: new URL("/", SITE_URL).toString(),
    acquireLicensePage: new URL("/", SITE_URL).toString(),
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(IMAGE_GALLERY_SCHEMA) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Lessons />
      <Reviews />
      <FAQ />
      <Gallery />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
