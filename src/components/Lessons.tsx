import { WHATSAPP_URL } from "@/lib/constants";

const PACKAGES = [
  {
    name: "Single Lesson",
    price: "400K",
    unit: "IDR / person",
    features: ["~90 min session", "Board & rashguard included", "Photo/video available"],
    highlighted: false,
  },
  {
    name: "3-Lesson Pack",
    price: "1M",
    unit: "IDR / person",
    features: ["Save 200K IDR", "Progress tracking", "Flexible scheduling"],
    highlighted: true,
  },
];

export default function Lessons() {
  return (
    <section id="lessons" className="bg-bg-primary px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-xs tracking-[0.15em] uppercase text-accent-gold">
          Lessons
        </p>
        <h2 className="mb-12 font-serif text-3xl md:text-4xl">
          Simple &amp; Transparent
        </h2>

        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative w-full max-w-xs rounded-lg p-8 ${
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
              <p className="mb-4 text-xs tracking-widest uppercase text-accent-gold">
                {pkg.name}
              </p>
              <p className="mb-1 font-serif text-4xl">{pkg.price}</p>
              <p className="mb-6 text-xs text-text-secondary">{pkg.unit}</p>
              <ul className="mb-8 space-y-2 text-sm text-text-secondary">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-md bg-accent-gold py-3 text-center text-sm font-semibold text-bg-primary transition-transform hover:scale-105"
              >
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
