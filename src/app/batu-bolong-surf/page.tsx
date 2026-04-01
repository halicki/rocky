import type { Metadata } from "next";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import ExploreMoreLinks from "@/components/landing/ExploreMoreLinks";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WHATSAPP_URL, GOOGLE_MAPS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Surfing Batu Bolong Beach Canggu | Surfing With Rocky",
  description:
    "Everything you need to know about surfing Batu Bolong Beach in Canggu, Bali. Wave conditions, best times, tide info, and why it's perfect for beginners. Book a lesson with Rocky.",
  keywords: [
    "Batu Bolong surf",
    "Batu Bolong Beach surfing",
    "surfing Canggu beach",
    "Batu Bolong waves",
    "best beginner surf beach Bali",
    "Canggu surf spot",
    "surf Batu Bolong Canggu",
  ],
  alternates: {
    canonical: "https://surfingwithrocky.com/batu-bolong-surf",
  },
  openGraph: {
    title: "Surfing Batu Bolong Beach Canggu | Surfing With Rocky",
    description:
      "Everything you need to know about surfing Batu Bolong Beach in Canggu, Bali. Wave conditions, best times, tide info, and why it's perfect for beginners.",
    type: "website",
    locale: "en_US",
    url: "https://surfingwithrocky.com/batu-bolong-surf",
    siteName: "Surfing With Rocky",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surfing Batu Bolong Beach Canggu | Surfing With Rocky",
    description:
      "Wave conditions, best times, tide info for Batu Bolong Beach Canggu — Bali's best beginner surf spot.",
  },
};

const WAVE_FACTS = [
  {
    icon: "🌊",
    label: "Wave Height",
    value: "0.5 – 1.5m",
    note: "Consistent & manageable for beginners",
  },
  {
    icon: "🏖️",
    label: "Bottom",
    value: "Sand",
    note: "Forgiving wipeouts, safe for all levels",
  },
  {
    icon: "📐",
    label: "Break Type",
    value: "Beach break",
    note: "A-frame peaks, lefts and rights",
  },
  {
    icon: "🌡️",
    label: "Water Temp",
    value: "27 – 29°C",
    note: "Warm year-round, no wetsuit needed",
  },
  {
    icon: "💨",
    label: "Best Wind",
    value: "Offshore (SE)",
    note: "May – September dry season",
  },
  {
    icon: "🕐",
    label: "Best Time",
    value: "6AM – 10AM",
    note: "Before onshore wind picks up",
  },
];

const SEASONS = [
  {
    name: "Dry Season",
    months: "May – September",
    conditions: "Southeast trade winds create offshore conditions at Batu Bolong. This is the prime surf season — clean, glassy waves in the morning, consistent swell from the south.",
    icon: "☀️",
    highlight: true,
  },
  {
    name: "Wet Season",
    months: "October – April",
    conditions: "Still surfable, especially mornings. Waves can be slightly more irregular, but the crowds thin out and prices drop. Early mornings are often glassy before the wind switches.",
    icon: "🌧️",
    highlight: false,
  },
];

const ROCKY_TIPS = [
  {
    tip: "Arrive before 8AM",
    detail: "The offshore wind keeps waves clean and glassy in the early morning. After 10AM the onshore sea breeze kicks in and chops up the surface.",
  },
  {
    tip: "Watch for the channel",
    detail: "There's a rip channel on the south end of the beach. It's actually useful — experienced surfers use it to paddle out faster — but beginners should stay in the main peak.",
  },
  {
    tip: "Mid-tide is perfect",
    detail: "The best beginner waves at Batu Bolong happen at mid-tide. At low tide the break can get shallow and punchy; at high tide some banks close out. Rocky always checks the tide chart before a lesson.",
  },
  {
    tip: "The inside section is yours",
    detail: "Intermediate and advanced surfers tend to sit in the lineup further out. As a beginner, the inside white-water section is all yours — plenty of long, rolling waves to practice on.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Batu Bolong Beach",
  description:
    "A popular beach break in Canggu, Bali, known for its consistent mellow waves and sandy bottom. One of the best beginner surf spots on the island.",
  url: "https://surfingwithrocky.com/batu-bolong-surf",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Batu Bolong Beach",
    addressLocality: "Canggu",
    addressRegion: "Bali",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.6525,
    longitude: 115.1302,
  },
  touristType: "Surfers, Beginners",
};

export default function BatuBolongSurf() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <LandingNavbar />

      <main>
        {/* Hero */}
        <section
          className="relative flex min-h-[70vh] items-center justify-center px-6 pt-24 pb-16"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(17,17,17,0.45) 0%, rgba(17,17,17,0.88) 100%), url('/images/photo1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              Canggu, Bali
            </p>
            <h1 className="mb-5 font-heading text-4xl font-bold leading-tight md:text-6xl">
              Surfing{" "}
              <span className="text-accent-blue">Batu Bolong Beach</span>
            </h1>
            <p className="mb-8 text-lg text-text-secondary md:text-xl">
              A local&apos;s guide to one of Bali&apos;s best beginner surf breaks —
              wave conditions, best times, tide tips, and how to book a lesson
              with Rocky.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent-coral px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:scale-105"
              >
                💬 Book a Lesson
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:border-white/60"
              >
                📍 View on Maps
              </a>
            </div>
          </div>
        </section>

        {/* About the beach */}
        <section className="bg-bg-dark px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                The Spot
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                About Batu Bolong Beach
              </h2>
            </div>
            <div className="prose-custom mx-auto max-w-2xl space-y-5 text-center text-text-secondary">
              <p className="text-base leading-relaxed">
                Batu Bolong is a small beach break in the heart of Canggu, Bali — wedged between
                the famous Old Man&apos;s beach bar and the ancient Batu Bolong Temple. It&apos;s one
                of the most consistent surf spots on Bali&apos;s southwest coast, receiving swell
                from the Indian Ocean year-round.
              </p>
              <p className="text-base leading-relaxed">
                What makes it special for beginners is the combination of a sandy bottom, moderate
                wave energy, and relatively short paddle distance to the break. You don&apos;t need to
                battle a heavy shore dump or a long paddle through powerful surf — the beach is
                genuinely accessible to first-timers.
              </p>
              <p className="text-base leading-relaxed">
                Rocky has been surfing this beach his entire life. When he picks your wave, he
                knows exactly how it will break.
              </p>
            </div>
          </div>
        </section>

        {/* Wave facts */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Wave Data
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Conditions at a Glance
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {WAVE_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col items-center rounded-xl border border-border-subtle bg-bg-card p-5 text-center"
                >
                  <span className="mb-2 text-2xl">{fact.icon}</span>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent-blue">
                    {fact.label}
                  </p>
                  <p className="font-heading text-lg font-bold">{fact.value}</p>
                  <p className="mt-1 text-xs text-text-secondary">{fact.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasons */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Timing
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Best Time to Surf Canggu
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {SEASONS.map((s) => (
                <div
                  key={s.name}
                  className={`rounded-xl p-7 ${
                    s.highlight
                      ? "border-2 border-accent-blue bg-bg-card shadow-lg shadow-accent-blue/5"
                      : "border border-border-subtle bg-bg-card"
                  }`}
                >
                  {s.highlight && (
                    <span className="mb-3 inline-block rounded-md bg-accent-coral px-3 py-1 text-xs font-bold text-white">
                      PRIME SEASON
                    </span>
                  )}
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-2xl">{s.icon}</span>
                    <h3 className="font-heading text-xl font-bold">{s.name}</h3>
                  </div>
                  <p className="mb-3 text-sm font-semibold text-accent-blue">{s.months}</p>
                  <p className="text-sm leading-relaxed text-text-secondary">{s.conditions}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-text-secondary">
              Good news: Batu Bolong has waves year-round. Rocky runs lessons 365 days a year, 6AM – 6PM.
            </p>
          </div>
        </section>

        {/* Rocky's local tips */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Insider Knowledge
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Rocky&apos;s Local Tips
              </h2>
              <p className="mt-4 text-text-secondary">
                20+ years of surfing this break, distilled.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {ROCKY_TIPS.map((t) => (
                <div
                  key={t.tip}
                  className="rounded-xl border border-border-subtle bg-bg-card p-6"
                >
                  <h3 className="mb-2 flex items-center gap-2 font-heading font-semibold">
                    <span className="text-accent-coral">→</span> {t.tip}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA to book */}
        <section className="bg-bg-dark px-6 pb-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border-subtle bg-bg-card p-8 text-center md:p-12">
            <h2 className="mb-4 font-heading text-2xl font-bold md:text-3xl">
              Ready to Surf Batu Bolong?
            </h2>
            <p className="mb-6 text-text-secondary">
              Rocky knows this beach better than anyone. Book a lesson and learn
              to read the waves with a local who has surfed here since childhood.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-accent-coral px-10 py-4 text-base font-bold text-white transition-all duration-200 hover:scale-105"
            >
              💬 Book with Rocky on WhatsApp
            </a>
          </div>
        </section>

        <ExploreMoreLinks
          links={[
            { href: "/surf-lessons-canggu", label: "Surf Lessons in Canggu" },
            { href: "/beginner-surf-lessons-bali", label: "Beginner Surf Lessons" },
            { href: "/private-surf-lesson-bali", label: "Private Surf Lessons" },
            { href: "/surf-lesson-prices-bali", label: "Surf Lesson Prices Bali" },
          ]}
        />
      </main>

      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
