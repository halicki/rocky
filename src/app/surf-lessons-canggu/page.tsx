import type { Metadata } from "next";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ExploreMoreLinks from "@/components/landing/ExploreMoreLinks";
import { WHATSAPP_URL, GOOGLE_MAPS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Surf Lessons in Canggu, Bali | Surfing With Rocky",
  description:
    "Book surf lessons in Canggu, Bali with Rocky at Batu Bolong Beach. Professional instruction for beginners. From 400K IDR. WhatsApp to book today.",
  keywords: [
    "surf lessons Canggu",
    "surf lessons Canggu Bali",
    "surf school Canggu",
    "learn to surf Canggu",
    "Batu Bolong surf lessons",
    "surf instructor Canggu",
    "surf classes Canggu",
  ],
  alternates: {
    canonical: "https://surfingwithrocky.com/surf-lessons-canggu",
  },
  openGraph: {
    title: "Surf Lessons in Canggu, Bali | Surfing With Rocky",
    description:
      "Book surf lessons in Canggu, Bali with Rocky at Batu Bolong Beach. Professional instruction for beginners. From 400K IDR.",
    type: "website",
    locale: "en_US",
    url: "https://surfingwithrocky.com/surf-lessons-canggu",
    siteName: "Surfing With Rocky",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surf Lessons in Canggu, Bali | Surfing With Rocky",
    description:
      "Book surf lessons in Canggu, Bali with Rocky at Batu Bolong Beach. Professional instruction for beginners. From 400K IDR.",
  },
};

const PACKAGES = [
  {
    name: "Single Session",
    price: "400K",
    unit: "IDR / person",
    features: ["~90 min session", "Board & rashguard included", "Photo/video available"],
    highlighted: false,
  },
  {
    name: "Three Sessions",
    price: "1.05M",
    unit: "IDR / person",
    features: ["Save 150K IDR", "Progress tracking", "Flexible scheduling"],
    highlighted: true,
  },
  {
    name: "Couples / Friends",
    price: "750K",
    unit: "IDR / 2 people",
    features: ["2 boards & rashguards", "Shared lesson, private feel", "Loser buys Bintangs after"],
    highlighted: false,
  },
  {
    name: "Group Booking",
    price: null,
    unit: null,
    features: ["Custom experience", "Flexible scheduling", "Contact for pricing"],
    highlighted: false,
  },
];

const WHY_CANGGU = [
  {
    icon: "🌊",
    title: "Mellow, Beginner-Friendly Waves",
    body: "Batu Bolong produces consistent, rolling waves perfect for learning. No heavy shore break — just clean, manageable surf year-round.",
  },
  {
    icon: "🏖️",
    title: "Sandy Bottom Beach",
    body: "Unlike reef breaks elsewhere in Bali, Batu Bolong has a forgiving sandy bottom, so wipeouts are soft and confidence builds fast.",
  },
  {
    icon: "📍",
    title: "Heart of Canggu",
    body: "Steps from Batu Bolong's cafes, warung, and yoga studios. Easy to reach by scooter from anywhere in Canggu or Echo Beach.",
  },
];

const INCLUDED = [
  "~90-minute in-water lesson",
  "Surfboard (foam longboard, sized to you)",
  "Rashguard for sun and reef protection",
  "All safety briefing & beach warm-up",
  "1-on-1 push into waves",
  "Tips on stance, paddling and pop-up",
  "Photo / video (on request)",
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Surf Lessons in Canggu, Bali",
  description:
    "Professional surf lessons for beginners at Batu Bolong Beach, Canggu with Rocky — ex-lifeguard with 20+ years of surfing experience.",
  provider: {
    "@type": "LocalBusiness",
    name: "Surfing With Rocky",
    url: "https://surfingwithrocky.com",
    telephone: "+6281999571854",
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
  },
  serviceType: "Surf Instruction",
  areaServed: "Canggu, Bali",
  offers: [
    {
      "@type": "Offer",
      name: "Single Session",
      price: "400000",
      priceCurrency: "IDR",
    },
    {
      "@type": "Offer",
      name: "Three Sessions",
      price: "1050000",
      priceCurrency: "IDR",
    },
    {
      "@type": "Offer",
      name: "Couples / Friends",
      price: "750000",
      priceCurrency: "IDR",
    },
  ],
};

export default function SurfLessonsCanggu() {

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
          className="relative flex min-h-[70vh] items-center justify-center bg-bg-dark px-6 pt-24 pb-16"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(17,17,17,0.55) 0%, rgba(17,17,17,0.85) 100%), url('/images/photo2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              Batu Bolong Beach · Canggu, Bali
            </p>
            <h1 className="mb-5 font-heading text-4xl font-bold leading-tight md:text-6xl">
              Surf Lessons in{" "}
              <span className="text-accent-blue">Canggu, Bali</span>
            </h1>
            <p className="mb-8 text-lg text-text-secondary md:text-xl">
              Learn to surf at Bali&apos;s most popular beginner beach with Rocky
              — professional instructor, ex-lifeguard, 20+ years in the ocean.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent-coral px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:scale-105"
              >
                💬 Book on WhatsApp
              </a>
              <a
                href="#pricing"
                className="rounded-lg border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:border-white/60"
              >
                See Prices ↓
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary/60">
              <span>
                <span className="text-accent-gold-star">★★★★★</span> 5.0 on
                Google
              </span>
              <span>Open daily 6AM – 6PM</span>
              <span>From 400K IDR</span>
            </div>
          </div>
        </section>

        {/* Why Canggu */}
        <section className="bg-bg-dark px-6 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                The Location
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Why Learn at Batu Bolong?
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {WHY_CANGGU.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border-subtle bg-bg-card p-7"
                >
                  <div className="mb-4 text-3xl">{item.icon}</div>
                  <h3 className="mb-3 font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border-subtle bg-bg-card p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                    Every Lesson
                  </p>
                  <h2 className="mb-6 font-heading text-2xl font-bold md:text-3xl">
                    What&apos;s Included
                  </h2>
                  <ul className="space-y-3">
                    {INCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                        <span className="mt-0.5 shrink-0 text-accent-blue">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-6 rounded-xl border border-border-subtle bg-bg-dark p-6">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent-blue">
                      Meet Your Instructor
                    </p>
                    <h3 className="mb-3 font-heading text-xl font-bold">Rocky</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Born and raised in Bali, Rocky has been surfing Batu Bolong since childhood.
                      As a former lifeguard with 20+ years of ocean experience, he knows every
                      current and mood of this beach — and how to get first-timers standing up
                      on their first day.
                    </p>
                  </div>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-sm font-semibold text-accent-blue transition-colors hover:text-accent-blue/80"
                  >
                    <span className="text-accent-gold-star">★★★★★</span> See 82 reviews on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              Pricing
            </p>
            <h2 className="mb-10 font-heading text-3xl font-bold md:text-4xl">
              Pick Your Package
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col rounded-xl p-6 ${
                    pkg.highlighted
                      ? "border-2 border-accent-blue bg-bg-card shadow-lg shadow-accent-blue/5"
                      : "border border-border-subtle bg-bg-card"
                  }`}
                >
                  {pkg.highlighted && (
                    <span className="absolute -top-3 right-4 rounded-md bg-accent-coral px-3 py-1 text-xs font-bold text-white">
                      BEST VALUE
                    </span>
                  )}
                  <p className="mb-3 text-xs font-semibold tracking-widest uppercase text-accent-blue">
                    {pkg.name}
                  </p>
                  {pkg.price ? (
                    <>
                      <p className="font-heading text-3xl font-bold">{pkg.price}</p>
                      <p className="mb-5 text-xs text-text-secondary">{pkg.unit}</p>
                    </>
                  ) : (
                    <p className="mb-5 font-heading text-3xl font-bold">Custom</p>
                  )}
                  <ul className="mb-6 space-y-2 text-left text-sm text-text-secondary">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 text-accent-blue">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-block w-full rounded-lg py-3 text-center text-sm font-bold transition-all duration-200 hover:scale-105 ${
                      pkg.highlighted
                        ? "bg-accent-coral text-white"
                        : "border-2 border-accent-blue text-accent-blue hover:bg-accent-blue/10"
                    }`}
                  >
                    {pkg.price ? "Book Now →" : "Contact Us →"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ExploreMoreLinks
          links={[
            { href: "/beginner-surf-lessons-bali", label: "Beginner Surf Lessons Bali" },
            { href: "/batu-bolong-surf", label: "About Batu Bolong Beach" },
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
