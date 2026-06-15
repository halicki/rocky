import type { Metadata } from "next";
import LandingNavbar from "@/components/LandingNavbar";
import ExploreMoreLinks from "@/components/landing/ExploreMoreLinks";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WHATSAPP_URL, GOOGLE_MAPS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Batu Bolong Surf Report & Beginner Guide | Canggu, Bali",
  description:
    "Live Batu Bolong surf conditions, daily swell report, wave height, tides and best times to paddle out. A local's guide to Pantai Batu Bolong beach in Canggu — the easiest beginner wave in Bali.",
  keywords: [
    "Batu Bolong surf",
    "Batu Bolong surf report",
    "pantai batu bolong",
    "Batu Bolong Beach Canggu",
    "magicseaweed Batu Bolong",
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

const BATU_BOLONG_FAQS = [
  {
    question: "Where can I check a live Batu Bolong surf report?",
    answer:
      "Surfline, Magicseaweed and Windy all publish daily Batu Bolong forecasts — swell height, period, wind direction and tide. Rocky personally checks conditions every morning at sunrise and sends a short WhatsApp update with wave size, crowd and whether it is a good day for a lesson. Message him the night before if you want tomorrow's call.",
  },
  {
    question: "Is Pantai Batu Bolong good for first-time surfers?",
    answer:
      "Yes — Pantai Batu Bolong (Batu Bolong Beach) is widely considered the most beginner-friendly surf break in Canggu. The sandy bottom, slow rolling waves and short paddle out make it genuinely safe for people who have never stood on a board. On an average day the white-water inside section is full of beginners having their first stand-up.",
  },
  {
    question: "What is the best time of day to surf Batu Bolong Beach Canggu?",
    answer:
      "Early morning, 6AM to 9AM. The southeast trade winds are offshore, the water is glassy and the crowd is thin. After 10AM the onshore sea breeze picks up and the surface gets choppy. Rocky's first lesson of the day leaves the beach at 6AM for exactly this reason.",
  },
  {
    question: "How crowded does Batu Bolong get?",
    answer:
      "Batu Bolong is Canggu's most popular break, so during high season (July–September) the lineup can get busy, especially from 8AM onward. The good news: beginners stay on the inside whitewater section which has plenty of space, and Rocky picks the quietest peak for his lessons. Off-peak months and early mornings are almost empty.",
  },
  {
    question: "What tide is best for surfing Batu Bolong?",
    answer:
      "Mid-tide pushing in is the sweet spot — the sandbanks at Batu Bolong produce the cleanest, longest waves when there is around 1.2–1.6m of water over them. Low tide can get shallow and punchy on the inside; very high tide makes some peaks fat and mushy. Rocky plans every lesson around the daily tide chart.",
  },
  {
    question: "Do I need to bring my own board to Batu Bolong?",
    answer:
      "No. Board rental shacks line the beach road and Rocky provides a high-quality foam board included in every lesson. Foam longboards (7'–9') are the right choice at Batu Bolong — they catch the rolling waves easily and are forgiving on wipeouts. Bring swimwear, reef-safe sunscreen and water. That is it.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BATU_BOLONG_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const MONTHLY_CONDITIONS = [
  {
    months: "May – July",
    label: "Peak Dry Season",
    swell: "1.0 – 1.8m",
    wind: "Offshore SE all day",
    crowd: "Building",
    note: "The most consistent batu bolong surf of the year. Swell from the south fills in, the southeast trades hold offshore from sunrise until late afternoon and the surface stays clean. Beginners get glassy knee-to-waist insiders; intermediates get rideable shoulders out the back.",
  },
  {
    months: "August – September",
    label: "Prime + Crowds",
    swell: "1.2 – 2.0m",
    wind: "Offshore SE, stronger",
    crowd: "Heavy 7AM – 10AM",
    note: "Largest, cleanest waves of the year. The Magicseaweed Batu Bolong forecast lights up green almost daily. The trade-off: this is high tourist season, so book lessons for 6AM dawn patrol to dodge the crowd.",
  },
  {
    months: "October – November",
    label: "Shoulder Season",
    swell: "0.8 – 1.5m",
    wind: "Variable, lighter",
    crowd: "Thinning fast",
    note: "Wind switches start mid-morning and afternoon storms appear. Mornings are still excellent for beginners. The Pantai Batu Bolong line-up empties out — best value period for a private lesson.",
  },
  {
    months: "December – February",
    label: "Wet Season",
    swell: "0.5 – 1.2m",
    wind: "Onshore W after 9AM",
    crowd: "Almost empty",
    note: "Smaller, softer swell with onshore wind by mid-morning — actually the easiest waves of the year for first-time surfers. Pre-7AM sessions can be glassy and the beach is yours. Pack a rain jacket; afternoon storms are dramatic but short.",
  },
  {
    months: "March – April",
    label: "Transition",
    swell: "0.6 – 1.4m",
    wind: "Light, switching",
    crowd: "Light",
    note: "Wind starts tilting back to offshore in March. By April the dry season is rebuilding. Mixed conditions — some days flat, some days great — but the classic Canggu surf scene is waking up again.",
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

const BREADCRUMB_SCHEMA = {
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
      name: "Batu Bolong Surf",
      item: "https://surfingwithrocky.com/batu-bolong-surf",
    },
  ],
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
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

        {/* Surf Report & Live Conditions */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Daily Check
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Batu Bolong Surf Report & Live Conditions
              </h2>
              <p className="mt-4 text-text-secondary">
                How to read the forecast — and how Rocky reads it for you.
              </p>
            </div>
            <div className="prose-custom mx-auto max-w-3xl space-y-5 text-text-secondary">
              <p className="text-base leading-relaxed">
                Batu Bolong Beach sits on the southwest coast of Canggu, exposed directly to swells
                rolling in from the Indian Ocean. Most days of the year it gets waves — the question
                is how big, how clean, and at what tide. You can pull a Batu Bolong surf report from{" "}
                <strong>Surfline</strong>, <strong>Magicseaweed</strong> or <strong>Windy</strong>,
                but raw forecast numbers rarely tell the whole story for beginners.
              </p>
              <p className="text-base leading-relaxed">
                Rocky walks down to the break every morning at sunrise and looks at three things:{" "}
                <em>wave height</em> (knee to shoulder is the beginner sweet spot),{" "}
                <em>wind direction</em> (offshore SE is prime) and{" "}
                <em>tide movement</em> (mid-tide pushing in is the best beginner window at Batu
                Bolong). He then picks the peak of the day — not the biggest wave, the friendliest
                one.
              </p>
              <p className="text-base leading-relaxed">
                <strong>Want a same-day surf check?</strong> Message Rocky on WhatsApp the night
                before or at dawn. He will reply with the current wave size at Batu Bolong Beach
                Canggu, the crowd level, and an honest call on whether it is a good day for your
                level. No booking pressure — just a local giving you the real conditions.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-accent-blue bg-bg-card px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:border-accent-coral"
              >
                💬 Ask Rocky for Today&apos;s Surf Report
              </a>
            </div>
          </div>
        </section>

        {/* Batu Bolong Surf Report by Month */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Year-Round Guide
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Batu Bolong Surf Report by Month
              </h2>
              <p className="mt-4 text-text-secondary">
                Batu Bolong surf is good every month of the year — but the wave, wind and crowd
                story changes a lot between seasons. Here is what a daily Batu Bolong surf report
                actually looks like across the calendar, based on Rocky&apos;s 20+ years on this beach.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {MONTHLY_CONDITIONS.map((m) => (
                <div
                  key={m.months}
                  className="rounded-xl border border-border-subtle bg-bg-card p-6"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent-blue">
                    {m.label}
                  </p>
                  <h3 className="mb-3 font-heading text-lg font-bold">{m.months}</h3>
                  <ul className="mb-3 space-y-1 text-xs text-text-secondary">
                    <li><span className="text-accent-coral">Swell:</span> {m.swell}</li>
                    <li><span className="text-accent-coral">Wind:</span> {m.wind}</li>
                    <li><span className="text-accent-coral">Crowd:</span> {m.crowd}</li>
                  </ul>
                  <p className="text-sm leading-relaxed text-text-secondary">{m.note}</p>
                </div>
              ))}
            </div>
            <div className="prose-custom mx-auto mt-10 max-w-3xl space-y-4 text-text-secondary">
              <p className="text-base leading-relaxed">
                Whatever month you arrive on Bali, Pantai Batu Bolong is the safest call for a
                first wave. If you are travelling between May and September, expect classic
                offshore mornings and book your{" "}
                <a href="/surf-lessons-canggu" className="text-accent-blue underline">
                  surf lessons in Canggu
                </a>{" "}
                early — the lineup fills fast. Off-peak (December – February) means smaller
                waves but quieter sessions, which is why a lot of complete beginners actually
                prefer it for their{" "}
                <a href="/beginner-surf-lessons-bali" className="text-accent-blue underline">
                  first surf lesson in Bali
                </a>
                .
              </p>
              <p className="text-base leading-relaxed">
                Looking for a one-on-one session away from the crowd peaks? A{" "}
                <a href="/private-surf-lesson-bali" className="text-accent-blue underline">
                  private surf lesson at Batu Bolong
                </a>{" "}
                lets Rocky pick the best peak of the day for your level. For pricing across all
                lesson formats — group, private, kids and multi-day packages — see the full{" "}
                <a href="/surf-lesson-prices-bali" className="text-accent-blue underline">
                  Bali surf lesson price guide
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Batu Bolong Surf School */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                Learn Here
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Batu Bolong Surf School — What Makes a Good One
              </h2>
            </div>
            <div className="prose-custom mx-auto max-w-3xl space-y-5 text-text-secondary">
              <p className="text-base leading-relaxed">
                A good Batu Bolong surf school does three things well: it reads the daily wave
                report before you arrive, it picks the safest peak on the beach for your level,
                and it gives you genuine one-on-one attention in the water. Anything less and you
                end up paddling next to ten other beginners while one instructor shouts from the
                sand — common at Batu Bolong Beach in high season, and the reason most travellers
                book a small or private operation instead.
              </p>
              <p className="text-base leading-relaxed">
                Rocky runs a small Batu Bolong surf school out of this beach — two students per
                coach maximum, board and rashguard included, and the lesson is timed to the tide
                rather than the clock. That is the difference between a 90-minute session where
                you stand up twice and a 90-minute session where you actually start reading the
                wave. If you are weighing options for{" "}
                <a href="/blog/best-surf-school-bali-how-to-choose" className="text-accent-blue underline">
                  how to choose a surf school in Bali
                </a>
                , the filters are simple: instructor-to-student ratio, local water knowledge,
                tide-aware scheduling, and a real safety brief before you paddle out.
              </p>
              <p className="text-base leading-relaxed">
                What makes Batu Bolong Beach surf lessons easier than other Bali breaks: the
                sand bottom, the long forgiving inside section, and the short paddle. Most first-
                time students at this beach stand up within their first two waves. If you have
                surfed before, the outside peak holds shoulder-high faces during dry season and
                Rocky will move you off the white-water within a single session. Group sizes,
                schedules and packages are described in the broader{" "}
                <a href="/surf-lessons-canggu" className="text-accent-blue underline">
                  Canggu surf lesson guide
                </a>
                , and exact pricing — solo, private, kids, multi-day — is on the{" "}
                <a href="/surf-lesson-prices-bali" className="text-accent-blue underline">
                  Bali surf lesson price page
                </a>
                . Book one lesson, see if it clicks, then decide on more.
              </p>
            </div>
          </div>
        </section>

        {/* Batu Bolong FAQ */}
        <section className="bg-bg-dark px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
                FAQ
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Batu Bolong Surf Questions
              </h2>
            </div>
            <dl className="space-y-4">
              {BATU_BOLONG_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-border-subtle bg-bg-card p-6"
                >
                  <dt className="mb-2 font-heading text-lg font-semibold">
                    {faq.question}
                  </dt>
                  <dd className="text-sm leading-relaxed text-text-secondary">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
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

        <ExploreMoreLinks
          title="From the Blog"
          links={[
            { href: "/blog/batu-bolong-surf-forecast", label: "Reading the Batu Bolong Forecast" },
            { href: "/blog/canggu-surf-forecast", label: "Canggu Surf Forecast Guide" },
            { href: "/blog/is-batu-bolong-good-for-beginners", label: "Batu Bolong for Beginners" },
            { href: "/blog/best-time-to-surf-canggu", label: "Best Time to Surf Canggu" },
          ]}
        />
      </main>

      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
