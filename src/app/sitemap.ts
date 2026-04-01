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
  ];
}
