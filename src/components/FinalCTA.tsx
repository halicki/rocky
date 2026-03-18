import { WHATSAPP_URL, GOOGLE_MAPS_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-indigo-deep to-indigo-mid px-6 py-10 text-center md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
          Ready to Surf?
        </h2>
        <p className="mb-8 text-lg text-text-secondary">
          Message Rocky — he&apos;ll sort out the rest
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent-coral px-10 py-4 text-lg font-bold text-white transition-all duration-200 hover:scale-105"
        >
          💬 WhatsApp Rocky
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary/50">
          <span>📍 Canggu, Bali</span>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-blue"
          >
            <span className="text-accent-gold-star">★</span> Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
