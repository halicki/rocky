import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: new URL("/", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/surf-lessons-canggu", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("/beginner-surf-lessons-bali", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("/batu-bolong-surf", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("/private-surf-lesson-bali", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: new URL("/surf-lesson-prices-bali", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/blog", SITE_URL).toString(),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: new URL("/blog/is-batu-bolong-good-for-beginners", SITE_URL).toString(),
      lastModified: new Date("2025-01-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: new URL("/blog/what-to-expect-first-surf-lesson-bali", SITE_URL).toString(),
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: new URL("/blog/best-time-to-surf-canggu", SITE_URL).toString(),
      lastModified: new Date("2025-01-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
