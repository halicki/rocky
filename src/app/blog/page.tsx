import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Surf Blog — Tips & Guides for Beginners | Surfing With Rocky",
  description:
    "Surf tips, wave guides, and insider knowledge from Rocky — a professional surf instructor with 20+ years at Batu Bolong Beach, Canggu, Bali.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Surf Blog — Tips & Guides for Beginners | Surfing With Rocky",
    description:
      "Surf tips, wave guides, and insider knowledge from Rocky — Batu Bolong's most experienced surf instructor.",
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "Surfing With Rocky",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg-dark pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="gradient-bar mx-auto mb-6 w-16" />
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Surf Blog
          </h1>
          <p className="mt-4 text-text-secondary">
            Tips, guides, and insider knowledge from Rocky — 20+ years surfing Batu Bolong.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-border-subtle bg-bg-card p-6 transition-all duration-200 hover:border-accent-blue/40"
            >
              <time className="text-xs text-text-secondary">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2 font-heading text-xl font-bold text-white">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-accent-blue transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-blue hover:gap-2 transition-all"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
