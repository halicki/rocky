import type { Metadata } from "next";
import LandingNavbar from "@/components/LandingNavbar";
import ExploreMoreLinks from "@/components/landing/ExploreMoreLinks";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WHATSAPP_URL, GOOGLE_MAPS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Surf Lesson Prices Bali 2026 | From $25 USD | Rocky",
  description:
    "Surf lesson prices in Bali from 400K IDR (~$25 USD). Single, 3-pack & couples packages. All gear included. 82 five-star reviews. Book via WhatsApp.",
  keywords: [
    "surf lesson prices Bali",
    "how much surf lessons Bali",
    "surf lesson cost Bali",
    "surf school prices Canggu",
    "cheap surf lessons Bali",
    "surf lesson rates Bali",
    "surf instructor cost Bali",
  ],
  alternates: {
    canonical: "https://surfingwithrocky.com/surf-lesson-prices-bali",
  },
  openGraph: {
    title: "Surf Lesson Prices Bali 2026 | From $25 USD | Rocky",
    description:
      "Transparent surf lesson pricing at Batu Bolong, Canggu. From $25 USD per session. All gear included. 82 five-star reviews on Google.",
    type: "website",
    locale: "en_US",
    url: "https://surfingwithrocky.com/surf-lesson-prices-bali",
    siteName: "Surfing With Rocky",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surf Lesson Prices Bali 2026 | From $25 USD | Rocky",
    description:
      "Surf lesson prices in Bali from 400K IDR (~$25 USD). Single, 3-pack & couples packages. All gear included. 82 five-star reviews.",
  },
};

const PACKAGES = [
  {
    name: "Single Session",
    price: "400K",
    priceIDR: "400,000",
    priceUSD: "≈ $25 USD",
    unit: "IDR / person",
    desc: "One ~90-minute lesson",
    features: [
      "~90 minutes in the water",
      "Surfboard included",
      "Rashguard included",
      "Safety briefing",
      "Wave pushes & coaching",
      "Photo/video on request",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Three Sessions",
    price: "1.05M",
    priceIDR: "1,050,000",
    priceUSD: "≈ $65 USD",
    unit: "IDR / person",
    desc: "Best for real progress",
    features: [
      "3 × ~90-minute lessons",
      "Save 150,000 IDR vs single",
      "All equipment included",
      "Progress tracking",
      "Flexible scheduling",
      "Most popular package",
    ],
    highlighted: true,
    badge: "BEST VALUE",
  },
  {
    name: "Couples / Friends",
    price: "750K",
    priceIDR: "750,000",
    priceUSD: "≈ $47 USD",
    unit: "IDR / 2 people",
    desc: "For 2 people together",
    features: [
      "2 × ~90-minute lessons",
      "2 boards & rashguards",
      "375K per person",
      "Shared instruction",
      "Great value for pairs",
      "Loser buys Bintangs 🍺",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Group Booking",
    price: "Custom",
    priceIDR: null,
    priceUSD: null,
    unit: null,
    desc: "3+ people",
    features: [
      "Tailored to group size",
      "Custom scheduling",
      "All equipment provided",
      "Great for bachelor parties",
      "Team building / retreats",
      "Contact for a quote",
    ],
    highlighted: false,
    badge: null,
  },
];

const INCLUDED = [
  { item: "Surfboard (foam longboard, sized to you)", included: true },
  { item: "Rashguard for UV & reef protection", included: true },
  { item: "Safety briefing & warm-up", included: true },
  { item: "In-water coaching", included: true },
  { item: "Wave selection by Rocky", included: true },
  { item: "Post-session tips", included: true },
  { item: "Photo/video", included: false, note: "On request" },
  { item: "Transport to the beach", included: false, note: "Not included" },
];

const VALUE_POINTS = [
  {
    icon: "🏆",
    title: "No Hidden Fees",
    body: "The price you see is the price you pay. Board, rashguard, instruction, and safety equipment are all included. No surprise charges on the beach.",
  },
  {
    icon: "🌟",
    title: "5.0 on Google — 82 Reviews",
    body: "Rocky's reviews speak for themselves. Tourists from all over the world have learned to surf here and left five-star reviews. Quality you can verify.",
  },
  {
    icon: "👨‍🏫",
    title: "Professional Instructor",
    body: "Rocky is a former professional lifeguard with 20+ years surfing Batu Bolong. Not a beach hustler — a genuine, experienced instructor.",
  },
  {
    icon: "📍",
    title: "Best Beginner Location",
    body: "Batu Bolong is widely considered one of the best beaches in Bali to learn to surf. Mellow waves, sandy bottom, great atmosphere.",
  },
];

const BREADCRUMB_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://surfingwithrocky.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Surf Lesson Prices Bali",
      item: "https://surfingwithrocky.com/surf-lesson-prices-bali",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Surf Lessons Bali — Pricing",
  description:
    "Transparent surf lesson pricing at Batu Bolong Beach, Canggu. Single sessions from 400K IDR. All equipment included.",
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
  },
  serviceType: "Surf Instruction",
  areaServed: "Bali, Indonesia",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "82",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Surf Lesson Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Single Session",
        price: "400000",
        priceCurrency: "IDR",
        description: "~90-minute private surf lesson, board and rashguard included",
      },
      {
        "@type": "Offer",
        name: "Three Sessions",
        price: "1050000",
        priceCurrency: "IDR",
        description: "Three ~90-minute surf lessons, saves 150K IDR vs single rate",
      },
      {
        "@type": "Offer",
        name: "Couples / Friends",
        price: "750000",
        priceCurrency: "IDR",
        description: "Surf lesson for 2 people together, both boards and rashguards included",
      },
    ],
  },
};

export default function SurfLessonPricesBali() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <LandingNavbar />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-center justify-center bg-bg-dark px-6 pt-24 pb-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              Transparent Pricing · Batu Bolong Beach, Canggu
            </p>
            <h1 className="mb-5 font-heading text-4xl font-bold leading-tight md:text-5xl">
              How Much Are Surf Lessons{" "}
              <span className="text-accent-blue">in Bali?</span>
            </h1>
            <p className="mb-8 text-lg text-text-secondary md:text-xl">
              Rocky&apos;s pricing is straightforward: no haggling, no hidden fees,
              all equipment included. Here&apos;s exactly what you get for your money.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-2 text-accent-blue">
                From 400K IDR / session
              </div>
              <div className="rounded-full border border-border-subtle bg-bg-card px-4 py-2 text-text-secondary">
                ≈ $25 USD
              </div>
              <div className="rounded-full border border-border-subtle bg-bg-card px-4 py-2 text-text-secondary">
                All gear included
              </div>
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Packages
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Choose Your Package
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col rounded-xl p-7 ${
                    pkg.highlighted
                      ? "border-2 border-accent-blue bg-bg-card shadow-lg shadow-accent-blue/5"
                      : "border border-border-subtle bg-bg-card"
                  }`}
                >
                  {pkg.badge && (
                    <span className="absolute -top-3 right-4 rounded-md bg-accent-coral px-3 py-1 text-xs font-bold text-white">
                      {pkg.badge}
                    </span>
                  )}
                  <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-accent-blue">
                    {pkg.name}
                  </p>
                  <p className="font-heading text-3xl font-bold">{pkg.price}</p>
                  {pkg.priceIDR && (
                    <p className="text-xs text-text-secondary">{pkg.unit}</p>
                  )}
                  {pkg.priceUSD && (
                    <p className="mb-1 text-xs text-accent-blue/60">{pkg.priceUSD}</p>
                  )}
                  <p className="mb-5 text-xs text-text-secondary/50">{pkg.desc}</p>
                  <ul className="mb-6 flex-1 space-y-2 text-sm text-text-secondary">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 text-accent-blue">✓</span> {f}
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
                    {pkg.priceIDR ? "Book Now →" : "Contact for Quote →"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included breakdown */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Price Breakdown
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                What&apos;s Included?
              </h2>
            </div>
            <div className="overflow-hidden rounded-xl border border-border-subtle">
              {INCLUDED.map((row, i) => (
                <div
                  key={row.item}
                  className={`flex items-center justify-between gap-4 px-6 py-4 text-sm ${
                    i % 2 === 0 ? "bg-bg-dark" : "bg-bg-card"
                  }`}
                >
                  <span className="text-text-secondary">{row.item}</span>
                  {row.included ? (
                    <span className="shrink-0 rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue">
                      Included ✓
                    </span>
                  ) : (
                    <span className="shrink-0 text-xs text-text-secondary/40">
                      {row.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value proposition */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Why Rocky
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Value Beyond the Price
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {VALUE_POINTS.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-5 rounded-xl border border-border-subtle bg-bg-card p-6"
                >
                  <div className="shrink-0 text-3xl">{v.icon}</div>
                  <div>
                    <h3 className="mb-2 font-heading font-semibold">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Context: Bali pricing landscape */}
        <section className="bg-bg-dark px-6 pb-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border-subtle bg-bg-card p-8">
            <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              Context
            </p>
            <h2 className="mb-4 font-heading text-xl font-bold">
              How Do Rocky&apos;s Prices Compare?
            </h2>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>
                Surf lesson prices in Bali range widely — from 200K IDR for very basic group
                lessons with minimal instruction, to 800K+ IDR at established surf schools with
                multiple staff and facilities.
              </p>
              <p>
                Rocky&apos;s rates sit in the mid-range, but the instruction is private and
                personalised. You&apos;re paying for one experienced instructor, not a shared
                session with 6 others. With 82 five-star reviews and 20+ years of experience,
                the value is clear.
              </p>
              <p>
                The most important thing isn&apos;t always the cheapest lesson — it&apos;s the quality
                of instruction. A great first experience gets you hooked on surfing for life.
                A bad one puts you off the ocean entirely.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg bg-accent-coral py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:scale-105"
              >
                💬 Book on WhatsApp
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg border border-border-subtle py-3 text-center text-sm font-semibold text-accent-blue transition-colors hover:border-accent-blue/40"
              >
                Read 82 Reviews →
              </a>
            </div>
          </div>
        </section>

        <ExploreMoreLinks
          links={[
            { href: "/surf-lessons-canggu", label: "Surf Lessons in Canggu" },
            { href: "/beginner-surf-lessons-bali", label: "Beginner Surf Lessons" },
            { href: "/batu-bolong-surf", label: "About Batu Bolong Beach" },
            { href: "/private-surf-lesson-bali", label: "Private Surf Lessons" },
          ]}
        />
      </main>

      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
