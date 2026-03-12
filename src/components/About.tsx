export default function About() {
  return (
    <section id="about" className="bg-bg-secondary px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row">
        <div className="h-48 w-48 shrink-0 overflow-hidden rounded-full">
          <img
            src="/images/profile.jpg"
            alt="Rocky - Surf Instructor in Canggu, Bali"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-2 text-xs tracking-[0.15em] uppercase text-accent-gold">
            Meet Your Instructor
          </p>
          <h2 className="mb-4 font-serif text-3xl">Rocky</h2>
          <p className="leading-relaxed text-text-secondary">
            With over 20 years of surfing experience and a deep love for the
            ocean, Rocky is one of Canggu&apos;s most trusted surf instructors.
            Based at Batu Bolong Beach, he offers fun, safe, and personalized
            lessons for all levels. Whether it&apos;s your first time on a board
            or you&apos;re looking to level up, Rocky&apos;s patient coaching
            style and infectious energy will have you catching waves in no time.
          </p>
          <p className="mt-3 text-sm text-text-secondary/60">
            📍 Jl. Pantai Batu Bolong, Canggu · Open daily 6 AM – 6 PM
          </p>
        </div>
      </div>
    </section>
  );
}
