import { WHATSAPP_URL } from "@/lib/constants";

const PACKAGES = [
  {
    name: "Single Session",
    price: "400K",
    unit: "IDR / person",
    features: ["~90 min session", "Board & rashguard included", "Photo/video available"],
    highlighted: false,
  },
  {
    name: "Three Session Package",
    price: "1.05M",
    unit: "IDR / person",
    features: ["Save 150K IDR", "Progress tracking", "Flexible scheduling"],
    highlighted: true,
  },
  {
    name: "Two Person Group Session",
    price: "750K",
    unit: "IDR / 2 people",
    features: ["Cheaper than couples therapy", "2 boards & rashguards included", "Loser buys Bintangs after"],
    highlighted: false,
  },
  {
    name: "Group Booking",
    price: null,
    unit: null,
    features: ["Custom experience for your group", "Flexible scheduling", "Contact us for pricing"],
    highlighted: false,
  },
];

export default function Lessons() {
  return (
    <section id="lessons" className="bg-bg-primary px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-xs tracking-[0.15em] uppercase text-accent-gold">
          Lessons
        </p>
        <h2 className="mb-12 font-serif text-3xl md:text-4xl">
          Simple &amp; Transparent
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-lg p-8 ${
                pkg.highlighted
                  ? "border-2 border-accent-gold bg-bg-secondary"
                  : "border border-accent-gold/20 bg-bg-secondary"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 right-4 rounded bg-accent-gold px-3 py-1 text-xs font-bold text-bg-primary">
                  BEST VALUE
                </span>
              )}
              <p className="mb-4 h-8 text-[0.65rem] leading-tight tracking-widest uppercase text-accent-gold flex items-center justify-center">
                {pkg.name}
              </p>
              {pkg.price ? (
                <>
                  <p className="mb-1 font-serif text-3xl">{pkg.price}</p>
                  <p className="mb-6 text-xs text-text-secondary">{pkg.unit}</p>
                </>
              ) : (
                <p className="mb-6 font-serif text-3xl">Custom</p>
              )}
              <ul className="mb-8 space-y-2 text-sm text-text-secondary">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block w-full rounded-md bg-accent-gold py-3 text-center text-sm font-semibold text-bg-primary transition-transform hover:scale-105"
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
