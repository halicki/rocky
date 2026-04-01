import Link from "next/link";

interface ExploreLink {
  href: string;
  label: string;
}

interface ExploreMoreLinksProps {
  links: ExploreLink[];
  title?: string;
}

export default function ExploreMoreLinks({ links, title = "Explore More" }: ExploreMoreLinksProps) {
  return (
    <section className="bg-bg-dark px-6 pb-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center text-xs font-semibold tracking-[0.15em] uppercase text-text-secondary/50">
          {title}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-center text-sm font-medium text-text-secondary transition-colors hover:border-accent-blue/40 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
