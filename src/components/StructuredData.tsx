export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name: "Surfing With Rocky",
    description:
      "Professional surf lessons in Batu Bolong, Canggu, Bali. Beginner friendly lessons with a certified lifeguard instructor and local Balinese surf team.",
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "82",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "400000-1050000 IDR",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Bank Transfer",
    areaServed: {
      "@type": "Place",
      name: "Canggu, Bali, Indonesia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Surf Lessons",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Single Surf Lesson",
            description:
              "90-minute beginner surf lesson at Batu Bolong Beach",
          },
          price: "400000",
          priceCurrency: "IDR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Three Lesson Package",
            description:
              "3 x 90-minute surf lessons – progressive coaching",
          },
          price: "1050000",
          priceCurrency: "IDR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Two Person Lesson",
            description: "90-minute surf lesson for two people",
          },
          price: "750000",
          priceCurrency: "IDR",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
