export default function About() {
  return (
    <section id="about" className="bg-bg-light py-10 md:py-20">
      <div className="gradient-bar w-full" />
      <div className="mx-auto max-w-4xl px-6 pt-10 md:pt-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <div className="w-full shrink-0 overflow-hidden rounded-2xl md:w-80">
            <img
              src="/images/profile.jpg"
              alt="Rocky - Surf Instructor in Canggu, Bali"
              className="aspect-4/3 w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.15em] uppercase text-accent-coral">
              Your Instructor
            </p>
            <h2 className="mb-4 font-heading text-3xl font-bold text-text-dark-primary">
              Hey, I&apos;m Rocky
            </h2>
            <p className="leading-relaxed text-text-dark-secondary">
              I grew up in Bali and have been surfing these waves for over 20
              years. As a former professional lifeguard, safety is always my top
              priority. Together with my team of local Balinese instructors, we
              help surfers from all over the world catch their first waves at
              Batu Bolong.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-bg-dark px-4 py-2 text-xs font-semibold text-accent-blue">
                🏄 20+ Years
              </span>
              <span className="rounded-full bg-bg-dark px-4 py-2 text-xs font-semibold text-accent-blue">
                🛟 Ex-Lifeguard
              </span>
              <span className="rounded-full bg-bg-dark px-4 py-2 text-xs font-semibold text-accent-blue">
                ⭐ 5.0 Rating
              </span>
              <span className="rounded-full bg-bg-dark px-4 py-2 text-xs font-semibold text-accent-blue">
                📍 Batu Bolong
              </span>
            </div>

            <p className="mt-4 text-sm text-text-dark-secondary/60">
              Open daily 6 AM – 6 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
