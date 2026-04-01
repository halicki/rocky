export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO format: "2025-01-15"
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "is-batu-bolong-good-for-beginners",
    title: "Is Batu Bolong Good for Beginners? Everything You Need to Know",
    date: "2025-01-20",
    excerpt:
      "Thinking about learning to surf in Bali? Discover why Batu Bolong Beach in Canggu is widely considered the best beginner surf spot on the island — from its gentle waves to its sandy bottom.",
  },
  {
    slug: "what-to-expect-first-surf-lesson-bali",
    title: "What to Expect at Your First Surf Lesson in Bali",
    date: "2025-01-15",
    excerpt:
      "Never surfed before? Here's exactly what happens during your first surf lesson at Batu Bolong — from beach theory to catching your first wave — so you can show up confident and ready.",
  },
  {
    slug: "best-time-to-surf-canggu",
    title: "Best Time to Surf in Canggu — Month by Month Guide",
    date: "2025-01-10",
    excerpt:
      "Planning your surf trip to Canggu? This month-by-month guide covers dry season, wet season, crowd levels, and the exact conditions beginners need to have the best experience.",
  },
];
