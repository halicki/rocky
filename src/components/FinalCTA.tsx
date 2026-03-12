import { WHATSAPP_URL, GOOGLE_MAPS_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-ocean-blue to-ocean-green px-6 py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 font-serif text-4xl md:text-5xl">
          Ready to Surf?
        </h2>
        <p className="mb-8 text-lg text-text-secondary">
          Send Rocky a message — he&apos;ll sort out the rest
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-whatsapp px-10 py-4 text-lg font-bold text-white transition-transform hover:scale-105"
        >
          💬 WhatsApp Rocky
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary/60">
          <span>📍 Canggu, Bali</span>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-gold"
          >
            ⭐ Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
