import type { Metadata } from "next";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import ExploreMoreLinks from "@/components/landing/ExploreMoreLinks";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WHATSAPP_URL, GOOGLE_MAPS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Beginner Surf Lessons in Bali | Surfing With Rocky",
  description:
    "First time surfing? Rocky's beginner surf lessons in Bali are designed for complete first-timers. Ex-lifeguard, 20+ years experience, Batu Bolong Beach Canggu. Book via WhatsApp.",
  keywords: [
    "beginner surf lessons Bali",
    "surf lessons for beginners Bali",
    "first surf lesson Bali",
    "learn to surf Bali beginner",
    "surf lessons Canggu beginner",
    "beginner surfing Bali",
    "surf school for beginners Bali",
  ],
  alternates: {
    canonical: "https://surfingwithrocky.com/beginner-surf-lessons-bali",
  },
  openGraph: {
    title: "Beginner Surf Lessons in Bali | Surfing With Rocky",
    description:
      "First time surfing? Rocky's beginner surf lessons in Bali are designed for complete first-timers. Ex-lifeguard, 20+ years experience, Batu Bolong Beach Canggu.",
    type: "website",
    locale: "en_US",
    url: "https://surfingwithrocky.com/beginner-surf-lessons-bali",
    siteName: "Surfing With Rocky",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beginner Surf Lessons in Bali | Surfing With Rocky",
    description:
      "First time surfing? Rocky's beginner surf lessons in Bali are designed for complete first-timers. Ex-lifeguard, Batu Bolong Beach Canggu.",
  },
};

const REVIEWS = [
  {
    stars: 5,
    text: "Rocky is a brilliant instructor. He consistently corrected my mistakes, and I always had a board perfectly suited to the conditions. It was my first encounter with the ocean, and under his guidance, I felt very safe.",
    name: "Adrian Gliński",
    time: "2 years ago",
  },
  {
    stars: 5,
    text: "Rocky was a phenomenal surf instructor and I 10/10 recommend booking your lessons here. As total beginners, he was able to get us comfortable on the board and riding the waves within the first lesson.",
    name: "Isaac",
    time: "2 years ago",
  },
  {
    stars: 5,
    text: "Best surfing lesson I've ever had. I was super nervous getting back into it as I hadn't given it a go in years but Rocky was awesome!!! Eased my nerves instantly and I caught some sick waves!!",
    name: "Rachel Brown",
    time: "a month ago",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Beach Warm-Up & Safety Talk",
    body: "Before your feet touch water, Rocky walks you through ocean safety, reading waves, and how to fall correctly. No rush — you go when you feel ready.",
  },
  {
    step: "02",
    title: "Paddling & Pop-Up on Sand",
    body: "You'll practice the pop-up technique on the sand until it feels natural. Rocky fine-tunes your stance and arm position so the muscle memory is there before the waves.",
  },
  {
    step: "03",
    title: "Catching Your First Waves",
    body: "Rocky gets in the water with you and pushes you into small, rolling white-water waves. He picks the right waves for your level — not too big, not too slow.",
  },
  {
    step: "04",
    title: "Stand Up & Ride",
    body: "Most beginners stand up within the first 30 minutes. Rocky coaches from the water, giving real-time tips on balance and weight distribution every ride.",
  },
];

const CREDENTIALS = [
  { label: "Ex-lifeguard", icon: "🛟" },
  { label: "20+ years surfing", icon: "🏄" },
  { label: "Born & raised in Bali", icon: "🌴" },
  { label: "82 five-star reviews", icon: "⭐" },
  { label: "Daily 6AM – 6PM", icon: "🕐" },
  { label: "All gear provided", icon: "🏄‍♂️" },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Beginner Surf Lessons in Bali",
  description:
    "Safe, fun beginner surf lessons for complete first-timers at Batu Bolong Beach, Canggu. Rocky is a former lifeguard with 20+ years of surfing experience.",
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
  serviceType: "Beginner Surf Instruction",
  audience: {
    "@type": "Audience",
    audienceType: "Beginners, First-timers, Tourists",
  },
  areaServed: "Bali, Indonesia",
  offers: {
    "@type": "Offer",
    name: "Single Beginner Session",
    price: "400000",
    priceCurrency: "IDR",
  },
};

export default function BeginnerSurfLessonsBali() {

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
              "linear-gradient(to bottom, rgba(17,17,17,0.5) 0%, rgba(17,17,17,0.88) 100%), url('/images/photo4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              Complete Beginners Welcome
            </p>
            <h1 className="mb-5 font-heading text-4xl font-bold leading-tight md:text-6xl">
              Beginner Surf Lessons{" "}
              <span className="text-accent-blue">in Bali</span>
            </h1>
            <p className="mb-8 text-lg text-text-secondary md:text-xl">
              Never surfed before? Perfect. Rocky specialises in getting
              first-timers standing up and riding waves — safely, quickly, and
              with a huge smile.
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
                href="#steps"
                className="rounded-lg border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:border-white/60"
              >
                How It Works ↓
              </a>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="bg-bg-dark px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Your Safety Comes First
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                You&apos;re in Good Hands
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
                Rocky isn&apos;t just a great surf teacher — he&apos;s a former professional
                lifeguard who knows how to keep you safe in the ocean while making
                sure you&apos;re actually having fun.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {CREDENTIALS.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border-subtle bg-bg-card px-3 py-5 text-center"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <span className="text-xs font-semibold text-text-secondary">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-step */}
        <section id="steps" className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                The Lesson
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                What Happens in a Lesson
              </h2>
            </div>
            <div className="space-y-6">
              {STEPS.map((s) => (
                <div
                  key={s.step}
                  className="flex gap-6 rounded-xl border border-border-subtle bg-bg-card p-6 md:p-8"
                >
                  <div className="shrink-0">
                    <span className="font-heading text-3xl font-bold text-accent-blue/30">
                      {s.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-lg font-semibold">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews from beginners */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              Reviews
            </p>
            <h2 className="mb-3 font-heading text-3xl font-bold md:text-4xl">
              What First-Timers Say
            </h2>
            <p className="mb-10 text-sm text-text-secondary">
              <span className="text-accent-gold-star">★★★★★</span> 5.0 · 82 reviews on Google Maps
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {REVIEWS.map((review) => (
                <div
                  key={review.name}
                  className="rounded-xl bg-bg-card p-6 text-left"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm text-accent-gold-star">
                      {"★".repeat(review.stars)}
                    </p>
                    <p className="text-xs text-text-secondary/50">{review.time}</p>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed italic text-text-secondary">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-white/80">{review.name}</p>
                </div>
              ))}
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm font-semibold text-accent-blue transition-colors hover:text-accent-blue/80"
            >
              See all 82 reviews on Google Maps →
            </a>
          </div>
        </section>

        {/* Quick FAQ */}
        <section className="bg-bg-dark px-6 pb-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Common Questions
              </p>
              <h2 className="font-heading text-2xl font-bold md:text-3xl">
                Beginner FAQs
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Do I need to know how to swim?",
                  a: "Basic swimming ability is recommended. You don't need to be a strong swimmer — we stay in shallow water — but being comfortable in the ocean makes the experience more enjoyable. Rocky is a former lifeguard and your safety is always the priority.",
                },
                {
                  q: "How long until I can stand up on a wave?",
                  a: "Most beginners stand up on their first day. The white-water waves at Batu Bolong are slow and forgiving, which means you get plenty of attempts. Rocky knows exactly which waves to push you into.",
                },
                {
                  q: "What should I bring?",
                  a: "Just yourself and sunscreen. Rocky provides the surfboard and rashguard. Wear or bring a swimsuit. A towel and water are handy for after.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-border-subtle bg-bg-card p-6"
                >
                  <h3 className="mb-2 font-heading font-semibold">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="bg-bg-dark px-6 pb-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border-subtle bg-bg-card p-8 text-center">
            <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              Pricing
            </p>
            <h2 className="mb-3 font-heading text-2xl font-bold">
              From 400K IDR per Session
            </h2>
            <p className="mb-6 text-text-secondary">
              Single sessions, multi-session packages and couples deals available.
              All equipment included.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/surf-lesson-prices-bali"
                className="rounded-lg border-2 border-accent-blue px-6 py-3 text-sm font-bold text-accent-blue transition-all duration-200 hover:bg-accent-blue/10"
              >
                View All Prices →
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent-coral px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-105"
              >
                💬 Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <ExploreMoreLinks
          links={[
            { href: "/surf-lessons-canggu", label: "Surf Lessons in Canggu" },
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
