import { GOOGLE_MAPS_URL } from "@/lib/constants";

const PHOTOS = [
  { src: "/images/photo1.jpg", alt: "Surfing lesson with Rocky in Canggu" },
  { src: "/images/photo2.jpg", alt: "Learning to surf in Bali" },
  { src: "/images/photo3.jpg", alt: "Rocky teaching surf techniques" },
  { src: "/images/photo4.jpg", alt: "Catching waves in Canggu" },
  { src: "/images/photo5.jpg", alt: "Surf lesson on the beach" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-bg-primary px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-xs tracking-[0.15em] uppercase text-accent-gold">
          Gallery
        </p>
        <h2 className="mb-12 font-serif text-3xl md:text-4xl">
          Life on the Waves
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-lg ${
                i === 0 ? "col-span-2 row-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm text-accent-gold/80 transition-colors hover:text-accent-gold"
        >
          See more photos on Google Maps →
        </a>
      </div>
    </section>
  );
}
