"use client";

import { useState } from "react";

const faqs = [
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
                  maxHeight: openIndex === i ? "200px" : "0px",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="pb-5 leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
