import { GOOGLE_MAPS_URL } from "@/lib/constants";

const REVIEWS = [
  {
    stars: 5,
    text: "Best surfing lesson I've ever had. I was super nervous getting back into it as I hadn't given it a go in years but Rocky was awesome!!! Eased my nerves instantly and I caught some sick waves!! Highly recommend, will definitely be back.",
    name: "Rachel Brown",
    time: "a month ago",
  },
  {
    stars: 5,
    text: "Rocky will push you into your first waves so you can feel what's best about surfing. I highly recommend this experienced instructor.",
    name: "Piotr Wojtkowski",
    time: "2 months ago",
  },
  {
    stars: 5,
    text: "ABSOLUTELY THE BEST SURFING COACH in Bali! After a couple of lessons I feel a lot more confident in my surfing skills. What's best is his energy, drive and passion for surfing. Always a fun class! Thank you Rocky!",
    name: "Alika Yas",
    time: "8 months ago",
  },
  {
    stars: 5,
    text: "So happy that I ended up with Rocky as my surf instructor in Bali. He gave great feedback to help me improve my skills and it was always a great time being out on the water with him.",
    name: "Jacqueline Gerbe",
    time: "9 months ago",
  },
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
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-bg-dark px-6 py-10 md:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
          Reviews
        </p>
        <h2 className="mb-3 font-heading text-3xl font-bold md:text-4xl">
          What Students Say
        </h2>
        <p className="mb-10 text-sm text-text-secondary">
          <span className="text-accent-gold-star">★★★★★</span> 5.0 · 82 reviews
          on Google Maps
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              <p className="mb-4 text-sm leading-relaxed text-text-secondary italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-sm font-semibold text-white/80">
                {review.name}
              </p>
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
  );
}
