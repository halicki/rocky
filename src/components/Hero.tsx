import { WHATSAPP_URL, GOOGLE_MAPS_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/photo2.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/60 to-bg-primary/90" />

      <div className="relative z-10 max-w-2xl">
        <p className="mb-4 text-xs tracking-[0.25em] uppercase text-accent-gold">
          Canggu, Bali
        </p>
        <h1 className="mb-6 font-serif text-5xl leading-tight md:text-7xl">
          Catch Your First Wave
        </h1>
        <p className="mx-auto mb-8 max-w-md text-lg text-text-secondary">
          Professional surf lessons with a personal touch. All levels welcome —
          from first-timers to intermediate surfers.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-accent-gold px-8 py-4 text-lg font-bold text-bg-primary transition-transform hover:scale-105"
        >
          Book via WhatsApp →
        </a>
        <p className="mt-4 text-sm text-text-secondary">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-gold"
          >
            ⭐ 5.0 on Google Maps · 82 reviews
          </a>
        </p>
      </div>
    </section>
  );
}
