"use client";

import Link from "next/link";
import { useState } from "react";

type FAQLink = { href: string; text: string };

type FAQItem = {
  question: string;
  answer: string;
  links?: FAQLink[];
};

const faqs: FAQItem[] = [
  {
    question: "Is Batu Bolong good for beginner surfers?",
    answer:
      "Yes! Batu Bolong Beach in Canggu is one of the best beginner surf spots in Bali. The waves are long, gentle and consistent — perfect for your first surf lesson. Rocky and his team have been teaching beginners here for years.",
  },
  {
    question: "Do I need experience to take a surf lesson?",
    answer:
      "No experience needed at all. Rocky and his team specialize in beginner surf lessons. They will teach you everything from ocean safety and reading waves to paddling and standing up. All skill levels are welcome.",
  },
  {
    question: "What should I bring to my surf lesson?",
    answer:
      "Just bring yourself, swimwear and sun protection. Rocky provides a high quality surfboard and zinc sun protection for your face. A rash guard or wetsuit is not required in Bali's warm water.",
  },
  {
    question: "Can I book via WhatsApp?",
    answer:
      "Yes, WhatsApp is the easiest way to book. Just send Rocky a message and he will confirm your lesson time and answer any questions. You can also ask about availability for surf guiding trips around Bali.",
  },
  {
    question: "How much does a surf lesson in Bali cost?",
    answer:
      "A 2-hour surf lesson at Batu Bolong with Rocky's team typically runs 350,000–500,000 IDR (about 22–32 USD) per person for a small group, with private lessons priced higher. The fee covers a high-quality surfboard, zinc sun protection, water and instruction from a local Bali-certified coach. Prices stay consistent year-round and there are no hidden fees — what you confirm on WhatsApp is what you pay on the beach.",
    links: [
      { href: "/surf-lesson-prices-bali", text: "See full surf lesson prices in Bali" },
      { href: "/blog/how-much-surf-lesson-cost-bali", text: "Read: how much a surf lesson costs in Bali" },
    ],
  },
  {
    question: "When is the best time to surf in Canggu, Bali?",
    answer:
      "Canggu surfs well year-round, but the cleanest beginner conditions at Batu Bolong land in the dry season (May–October), when offshore winds groom the waves in the morning. The wet season (November–April) still works for first-timers — onshore breeze softens the swell and crowds thin out. Either way, mornings between 6:30 and 10:00 are the best window for a lesson at Batu Bolong because the wind is lightest and the waves are most forgiving.",
    links: [
      { href: "/blog/best-time-to-surf-canggu", text: "Read: best time to surf Canggu (full month-by-month guide)" },
      { href: "/batu-bolong-surf", text: "Batu Bolong surf spot guide" },
    ],
  },
  {
    question: "Are surf lessons in Canggu safe for kids and complete beginners?",
    answer:
      "Yes. Batu Bolong has a sandy beach, a long gentle reef-sand mix and waves that break far from shore — ideal for kids from about 7 years old and adults who have never paddled before. Rocky's team runs 1-on-1 ratios for kids and small-group lessons for adults, both starting with a beach safety briefing before getting in the water. We've taught families together, solo travelers and nervous first-timers for years.",
    links: [
      { href: "/beginner-surf-lessons-bali", text: "Beginner surf lessons in Bali" },
      { href: "/blog/canggu-surfing-safe-for-kids", text: "Read: is Canggu surfing safe for kids?" },
      { href: "/private-surf-lesson-bali", text: "Private surf lessons (recommended for kids)" },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bg-dark px-6 py-10 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-center text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
          FAQ
        </p>
        <h2 className="mb-10 text-center font-heading text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>
        <dl>
          {faqs.map((faq, i) => (
            <div key={faq.question} className="border-b border-border-subtle">
              <dt>
                <button
                  className="flex w-full items-center justify-between py-5 text-left font-heading text-lg font-semibold transition-colors hover:text-accent-blue"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  {faq.question}
                  <span className="ml-4 shrink-0 text-xl text-accent-blue">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
              </dt>
              <dd
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? "600px" : "0px",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="pb-3 leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
                {faq.links && faq.links.length > 0 && (
                  <ul className="pb-5 text-sm">
                    {faq.links.map((link) => (
                      <li key={link.href} className="mb-1">
                        <Link
                          href={link.href}
                          className="text-accent-blue underline-offset-2 hover:underline"
                        >
                          → {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
