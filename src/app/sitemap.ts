import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { blogPosts } from "@/lib/blog";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const newestPostDate = new Date(
    blogPosts.reduce((latest, post) =>
      post.date > latest.date ? post : latest
    ).date
  );

  const img = (path: string) => new URL(path, SITE_URL).toString();

  return [
    {
      url: new URL("/", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        img("/images/photo1.jpg"),
        img("/images/photo2.jpg"),
        img("/images/photo3.jpg"),
        img("/images/photo4.jpg"),
        img("/images/photo5.jpg"),
        img("/images/photo6.jpg"),
        img("/images/rocky-surf-instructor-portrait-canggu-bali.jpg"),
        img("/images/surf-instructor-rocky-beginner-lesson-batu-bolong-canggu.jpg"),
        img("/images/surfing-all-ages-batu-bolong-beach-canggu-bali.jpg"),
      ],
    },
    {
      url: new URL("/surf-lessons-canggu/", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [img("/images/photo2.jpg")],
    },
    {
      url: new URL("/beginner-surf-lessons-bali/", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        img("/images/photo4.jpg"),
        img("/images/surf-instructor-rocky-beginner-lesson-batu-bolong-canggu.jpg"),
      ],
    },
    {
      url: new URL("/batu-bolong-surf/", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [img("/images/photo1.jpg")],
    },
    {
      url: new URL("/private-surf-lesson-bali/", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [img("/images/photo5.jpg")],
    },
    {
      url: new URL("/surf-lesson-prices-bali/", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("/images/rocky-surf-instructor-portrait-canggu-bali.jpg")],
    },
    {
      url: new URL("/blog/", SITE_URL).toString(),
      lastModified: newestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: new URL(`/blog/${post.slug}/`, SITE_URL).toString(),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
