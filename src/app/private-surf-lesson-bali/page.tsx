import type { Metadata } from "next";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import ExploreMoreLinks from "@/components/landing/ExploreMoreLinks";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WHATSAPP_URL, GOOGLE_MAPS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Private Surf Lessons in Bali | Surfing With Rocky",
  description:
    "1-on-1 private surf lessons in Bali at Batu Bolong Beach, Canggu. Personalised coaching, faster progress, photos & video included. Open daily 6AM–6PM. From 400K IDR.",
  keywords: [
    "private surf lessons Bali",
    "1 on 1 surf lesson Bali",
    "private surf instructor Bali",
    "private surf lesson Canggu",
    "one on one surf lesson Bali",
    "personal surf coach Bali",
    "private surfing class Bali",
  ],
  alternates: {
    canonical: "https://surfingwithrocky.com/private-surf-lesson-bali",
  },
  openGraph: {
    title: "Private Surf Lessons in Bali | Surfing With Rocky",
    description:
      "1-on-1 private surf lessons in Bali at Batu Bolong Beach, Canggu. Personalised coaching, faster progress, photos & video included. Open daily 6AM–6PM.",
    type: "website",
    locale: "en_US",
    url: "https://surfingwithrocky.com/private-surf-lesson-bali",
    siteName: "Surfing With Rocky",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Surf Lessons in Bali | Surfing With Rocky",
    description:
      "1-on-1 private surf lessons in Bali at Batu Bolong Beach, Canggu. Personalised coaching, faster progress. From 400K IDR.",
  },
};

const BENEFITS = [
  {
    icon: "🎯",
    title: "100% Focused on You",
    body: "Rocky watches every single wave you catch and gives you feedback immediately after each ride. No waiting for others, no generic tips — coaching dialled in to your exact technique.",
  },
  {
    icon: "⚡",
    title: "Progress 3× Faster",
    body: "Private students typically progress three times faster than those in group lessons. With no distractions and instant feedback, the improvement from session to session is dramatic.",
  },
  {
    icon: "📸",
    title: "Photos & Video on Request",
    body: "Want to capture the moment? Rocky can arrange photos and video of your session so you can see your own technique and share the experience.",
  },
  {
    icon: "🕐",
    title: "Flexible Scheduling",
    body: "Open daily from 6AM to 6PM. Book the time that works for you — early morning for the best conditions, or work around your itinerary. Rocky is flexible.",
  },
  {
    icon: "🏄",
    title: "Right Board for You",
    body: "Rocky selects the board based on your height, weight, and experience — not what's available in a rack. The right equipment makes an enormous difference to your progress.",
  },
  {
    icon: "🌊",
    title: "Wave Selection",
    body: "Rocky reads the water and picks the right waves for your level. Beginners get mellow, rolling white-water. More advanced students get pushed into the bigger set waves.",
  },
];

const VS_COMPARISON = [
  { feature: "Instructor attention", private: "100% on you", group: "Shared across 4–8 students" },
  { feature: "Feedback frequency", private: "After every wave", group: "When the instructor gets to you" },
  { feature: "Board selection", private: "Tailored to your size & level", group: "Whatever is available" },
  { feature: "Progress pace", private: "Fast — mistakes fixed immediately", group: "Slower — more waiting between attempts" },
  { feature: "Wave selection", private: "Rocky picks perfect waves for you", group: "General advice for the group" },
  { feature: "Scheduling", private: "Your time, your pace", group: "Fixed group time slots" },
];

const PACKAGES = [
  {
    name: "Single Session",
    price: "400K",
    unit: "IDR / person",
    desc: "~90-min 1-on-1 lesson",
    features: ["Board & rashguard included", "Photo/video available", "Flexible scheduling"],
    highlighted: false,
  },
  {
    name: "Three Sessions",
    price: "1.05M",
    unit: "IDR / person",
    desc: "Best for real improvement",
    features: ["Save 150K IDR total", "Tracked progress", "Most popular choice"],
    highlighted: true,
  },
];

const FAQ_ITEMS = [
  {
    q: "What is the difference between a private and group surf lesson?",
    a: "In a private lesson Rocky's full attention is on you — every wave, every correction, every breakthrough. Group lessons split the instructor's time across 4–8 students. Private students typically progress three times faster because mistakes are fixed immediately after each ride.",
  },
  {
    q: "How long is a private surf lesson with Rocky?",
    a: "Each private session is approximately 90 minutes in the water. Rocky includes a short warm-up on the beach before paddling out so you arrive in the water prepared and confident.",
  },
  {
    q: "Do I need surfing experience to book a private lesson?",
    a: "No experience is needed. Rocky teaches complete beginners as well as intermediate surfers looking to improve specific techniques. He selects the right board and waves for your exact level from day one.",
  },
  {
    q: "How much does a private surf lesson cost in Bali?",
    a: "A single private surf session with Rocky costs 400,000 IDR (approximately USD 25). A three-session pack costs 1,050,000 IDR — saving 150,000 IDR. Board, rashguard, and personalised coaching are all included.",
  },
  {
    q: "Where do private surf lessons take place?",
    a: "All lessons are held at Batu Bolong Beach in Canggu, Bali — one of the most beginner-friendly surf breaks on the island. Rocky teaches here daily from 6AM to 6PM.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://surfingwithrocky.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Private Surf Lesson Bali",
      item: "https://surfingwithrocky.com/private-surf-lesson-bali",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Private Surf Lessons in Bali",
  description:
    "One-on-one private surf lessons at Batu Bolong Beach, Canggu. Personalised coaching with Rocky — ex-lifeguard, 20+ years experience. Daily 6AM–6PM.",
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
    openingHours: "Mo-Su 06:00-18:00",
  },
  serviceType: "Private Surf Instruction",
  areaServed: "Bali, Indonesia",
  offers: [
    {
      "@type": "Offer",
      name: "Single Private Session",
      price: "400000",
      priceCurrency: "IDR",
    },
    {
      "@type": "Offer",
      name: "Three Private Sessions",
      price: "1050000",
      priceCurrency: "IDR",
    },
  ],
};

export default function PrivateSurfLessonBali() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <LandingNavbar />

      <main>
        {/* Hero */}
        <section
          className="relative flex min-h-[70vh] items-center justify-center px-6 pt-24 pb-16"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(17,17,17,0.5) 0%, rgba(17,17,17,0.88) 100%), url('/images/photo5.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              1-on-1 Instruction · Batu Bolong Beach
            </p>
            <h1 className="mb-5 font-heading text-4xl font-bold leading-tight md:text-6xl">
              Private Surf Lessons{" "}
              <span className="text-accent-blue">in Bali</span>
            </h1>
            <p className="mb-8 text-lg text-text-secondary md:text-xl">
              Rocky&apos;s full attention on you — every wave, every wipeout, every
              breakthrough. The fastest way to learn to surf in Bali.
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
              <span>Open daily 6AM – 6PM</span>
              <span>
                <span className="text-accent-gold-star">★★★★★</span> 5.0 on Google
              </span>
              <span>From 400K IDR</span>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-bg-dark px-6 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Why Private
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                The Private Advantage
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl border border-border-subtle bg-bg-card p-6"
                >
                  <div className="mb-3 text-3xl">{b.icon}</div>
                  <h3 className="mb-2 font-heading text-base font-semibold">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private vs Group comparison */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Comparison
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Private vs Group Lessons
              </h2>
            </div>
            <div className="overflow-hidden rounded-xl border border-border-subtle">
              <div className="grid grid-cols-3 bg-bg-card px-5 py-3 text-xs font-semibold uppercase tracking-widest">
                <span className="text-text-secondary">Feature</span>
                <span className="text-accent-blue">Private Lesson</span>
                <span className="text-text-secondary/50">Group Lesson</span>
              </div>
              {VS_COMPARISON.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 gap-4 px-5 py-4 text-sm ${
                    i % 2 === 0 ? "bg-bg-dark" : "bg-bg-card"
                  }`}
                >
                  <span className="font-medium text-white/70">{row.feature}</span>
                  <span className="text-white">{row.private}</span>
                  <span className="text-text-secondary">{row.group}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule info */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border-subtle bg-bg-card p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                    Availability
                  </p>
                  <h2 className="mb-4 font-heading text-2xl font-bold">
                    Open Every Day
                  </h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between rounded-lg bg-bg-dark px-4 py-3">
                      <span className="text-text-secondary">Monday – Sunday</span>
                      <span className="font-semibold text-accent-blue">6:00 AM – 6:00 PM</span>
                    </div>
                    <p className="text-text-secondary">
                      Best conditions are in the early morning (6–10AM) when winds are offshore
                      and waves are clean. Rocky recommends booking for dawn patrol whenever
                      your schedule allows.
                    </p>
                    <p className="text-text-secondary">
                      Same-day bookings welcome — just message on WhatsApp and Rocky will
                      confirm availability.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                    What to Bring
                  </p>
                  <h2 className="mb-4 font-heading text-2xl font-bold">
                    Just Yourself
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {[
                      "✓  Sunscreen (apply before you arrive)",
                      "✓  Swimwear",
                      "✓  Water bottle",
                      "✓  A good attitude 🤙",
                      "—  Surfboard (Rocky provides)",
                      "—  Rashguard (Rocky provides)",
                    ].map((item) => (
                      <li
                        key={item}
                        className={`${item.startsWith("✓") ? "text-text-secondary" : "text-text-secondary/40"}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              Pricing
            </p>
            <h2 className="mb-10 font-heading text-3xl font-bold md:text-4xl">
              Private Lesson Packages
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col rounded-xl p-8 ${
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
                  <p className="mb-1 text-xs font-semibold tracking-widest uppercase text-accent-blue">
                    {pkg.name}
                  </p>
                  <p className="mb-1 font-heading text-4xl font-bold">{pkg.price}</p>
                  <p className="mb-1 text-xs text-text-secondary">{pkg.unit}</p>
                  <p className="mb-5 text-sm text-text-secondary/60">{pkg.desc}</p>
                  <ul className="mb-6 space-y-2 text-left text-sm text-text-secondary">
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
                    Book Now →
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-text-secondary">
              Also available:{" "}
              <Link href="/surf-lesson-prices-bali" className="text-accent-blue hover:underline">
                Couples lessons (750K IDR) and group rates
              </Link>
            </p>
          </div>
        </section>

        {/* Social proof */}
        <section className="bg-bg-dark px-6 pb-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border-subtle bg-bg-card p-8 text-center">
            <p className="mb-2 text-accent-gold-star text-xl">★★★★★</p>
            <blockquote className="mb-4 text-base italic text-text-secondary">
              &ldquo;ABSOLUTELY THE BEST SURFING COACH in Bali! After a couple of lessons I feel a
              lot more confident in my surfing skills. What&apos;s best is his energy, drive and
              passion for surfing. Always a fun class!&rdquo;
            </blockquote>
            <p className="text-sm font-semibold">Alika Yas</p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-accent-blue hover:underline"
            >
              Read all 82 reviews on Google Maps →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                FAQ
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Private Surf Lesson Questions
              </h2>
            </div>
            <div className="space-y-4">
              {FAQ_ITEMS.map(({ q, a }) => (
                <div
                  key={q}
                  className="rounded-xl border border-border-subtle bg-bg-card p-6"
                >
                  <h3 className="mb-3 font-heading text-base font-semibold">{q}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ExploreMoreLinks
          links={[
            { href: "/surf-lessons-canggu", label: "Surf Lessons in Canggu" },
            { href: "/beginner-surf-lessons-bali", label: "Beginner Surf Lessons" },
            { href: "/batu-bolong-surf", label: "About Batu Bolong Beach" },
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
