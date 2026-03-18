import { WHATSAPP_URL, GOOGLE_MAPS_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end justify-center px-6 pb-16 pt-24 text-left md:items-center md:pb-0 md:text-center">
      {/* Background image with lighter overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/photo2.jpg')" }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-bg-dark/40 via-bg-dark/30 to-bg-dark/80" />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="mb-4 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-accent-blue md:justify-center">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-coral" />
          Batu Bolong · Canggu · Bali
        </div>

        <h1 className="font-heading font-bold tracking-tight">
          <span className="block text-5xl leading-[0.9] text-white md:text-7xl">
            LEARN TO
          </span>
          <span className="block text-5xl leading-[0.9] text-accent-blue md:text-7xl">
            SURF
          </span>
          <span className="mt-2 block text-2xl font-medium text-text-secondary md:text-3xl">
            with Rocky &amp; Team
          </span>
        </h1>

        <p className="mt-5 text-base text-text-secondary md:text-lg">
          Safe, fun lessons at Batu Bolong Beach. 20+ years experience. All
          levels welcome.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 md:justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent-coral px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:scale-105"
          >
            Book a Lesson
          </a>
          <a
            href="#lessons"
            className="rounded-lg border-2 border-accent-blue px-8 py-4 text-base font-bold text-accent-blue transition-all duration-200 hover:bg-accent-blue/10"
          >
            See Prices
          </a>
        </div>

        <p className="mt-6 text-sm text-text-secondary">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-blue"
          >
            <span className="text-accent-gold-star">★★★★★</span> 5.0 on Google
            Maps · 82 reviews
          </a>
        </p>
      </div>
    </section>
  );
}
