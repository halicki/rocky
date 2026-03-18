import { WHATSAPP_URL } from "@/lib/constants";

const PACKAGES = [
  {
    name: "Single Session",
    price: "400K",
    unit: "IDR / person",
    features: [
      "~90 min session",
      "Board & rashguard included",
      "Photo/video available",
    ],
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
    features: [
      "2 boards & rashguards",
      "Cheaper than couples therapy",
      "Loser buys Bintangs after",
    ],
    highlighted: false,
  },
  {
    name: "Group Booking",
    price: null,
    unit: null,
    features: [
      "Custom experience for your group",
      "Flexible scheduling",
      "Contact us for pricing",
    ],
    highlighted: false,
  },
];

export default function Lessons() {
  return (
    <section id="lessons" className="bg-bg-dark px-6 py-10 md:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
          Lessons
        </p>
        <h2 className="mb-10 font-heading text-3xl font-bold md:text-4xl">
          Pick Your Wave
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
                  <p className="font-heading text-3xl font-bold">
                    {pkg.price}
                  </p>
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
  );
}
