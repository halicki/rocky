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
  return (
    <section id="faq" className="bg-bg-primary px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-center text-xs tracking-[0.15em] uppercase text-accent-gold">
          FAQ
        </p>
        <h2 className="mb-12 text-center font-serif text-3xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-white/10 pb-6">
              <dt className="mb-2 text-lg font-semibold">{faq.question}</dt>
              <dd className="text-text-secondary leading-relaxed">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
