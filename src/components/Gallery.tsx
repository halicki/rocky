import Image from "next/image";
import { GOOGLE_MAPS_URL } from "@/lib/constants";

const PHOTOS = [
  { src: "/images/surf-lesson-batu-bolong-beach-canggu-bali.jpg", alt: "Surf lesson at Batu Bolong Beach Canggu Bali" },
  { src: "/images/rocky-teaching-surf-stance-batu-bolong-canggu.jpg", alt: "Rocky teaching surf stance on Batu Bolong Beach Canggu" },
  { src: "/images/surf-instructor-coaching-student-batu-bolong-canggu.jpg", alt: "Rocky surf instructor coaching student at Batu Bolong" },
  { src: "/images/group-surf-lesson-canggu-bali.jpg", alt: "Surfing With Rocky group lesson Canggu Bali" },
  { src: "/images/sunset-surf-session-batu-bolong-beach-bali.jpg", alt: "Sunset surf session at Batu Bolong Beach Bali" },
  { src: "/images/kids-surf-lesson-batu-bolong-beach-canggu.jpg", alt: "Surfing With Rocky team and kids at Batu Bolong Beach" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="hidden bg-bg-dark px-6 py-10 md:block md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
          Gallery
        </p>
        <h2 className="mb-8 font-heading text-3xl font-bold md:text-4xl">
          Life on the Waves
        </h2>

        {/* Desktop: 3x2 grid layout */}
        <div className="grid grid-cols-3 gap-3">
          {PHOTOS.map((photo, i) => (
            <div key={i} className="relative aspect-4/3 overflow-hidden rounded-xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm font-semibold text-accent-blue transition-colors hover:text-accent-blue/80"
        >
          See more photos on Google Maps →
        </a>
      </div>
    </section>
  );
}
