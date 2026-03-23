import { GOOGLE_MAPS_URL } from "@/lib/constants";

const PHOTOS = [
  { src: "/images/photo1.jpg", alt: "Surf lesson at Batu Bolong Beach Canggu Bali" },
  { src: "/images/photo2.jpg", alt: "Rocky teaching surf stance on Batu Bolong Beach Canggu" },
  { src: "/images/photo3.jpg", alt: "Rocky surf instructor coaching student at Batu Bolong" },
  { src: "/images/photo4.jpg", alt: "Surfing With Rocky group lesson Canggu Bali" },
  { src: "/images/photo5.jpg", alt: "Sunset surf session at Batu Bolong Beach Bali" },
  { src: "/images/photo6.jpg", alt: "Surfing With Rocky team and kids at Batu Bolong Beach" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-bg-dark px-6 py-10 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
          Gallery
        </p>
        <h2 className="mb-8 font-heading text-3xl font-bold md:text-4xl">
          Life on the Waves
        </h2>

        {/* Mobile: horizontal scroll carousel */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="min-w-[80vw] shrink-0 snap-center overflow-hidden rounded-xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-4/3 w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Desktop: 3x2 grid layout */}
        <div className="hidden gap-3 md:grid md:grid-cols-3">
          {PHOTOS.map((photo, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-4/3 w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
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
