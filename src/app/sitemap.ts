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
        img("/images/surf-lesson-batu-bolong-beach-canggu-bali.jpg"),
        img("/images/rocky-teaching-surf-stance-batu-bolong-canggu.jpg"),
        img("/images/surf-instructor-coaching-student-batu-bolong-canggu.jpg"),
        img("/images/group-surf-lesson-canggu-bali.jpg"),
        img("/images/sunset-surf-session-batu-bolong-beach-bali.jpg"),
        img("/images/kids-surf-lesson-batu-bolong-beach-canggu.jpg"),
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
      images: [img("/images/rocky-teaching-surf-stance-batu-bolong-canggu.jpg")],
    },
    {
      url: new URL("/beginner-surf-lessons-bali/", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        img("/images/group-surf-lesson-canggu-bali.jpg"),
        img("/images/surf-instructor-rocky-beginner-lesson-batu-bolong-canggu.jpg"),
      ],
    },
    {
      url: new URL("/batu-bolong-surf/", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [img("/images/surf-lesson-batu-bolong-beach-canggu-bali.jpg")],
    },
    {
      url: new URL("/private-surf-lesson-bali/", SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [img("/images/sunset-surf-session-batu-bolong-beach-bali.jpg")],
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
