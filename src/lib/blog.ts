import fs from "node:fs";
import path from "node:path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO format: "2025-01-15"
  excerpt: string;
}

// Posts are auto-discovered from the filesystem at build time — never hand-edit a
// catalog. Every post lives at src/app/blog/<slug>/page.mdx and exposes `title:` +
// `description:` (in `export const metadata`) and `datePublished="YYYY-MM-DD"` (in
// its <ArticleSchema> JSX). This file is imported only by server code (sitemap.ts,
// blog/page.tsx), so `fs` runs at build and never enters a client bundle.
const BLOG_DIR = path.join(process.cwd(), "src", "app", "blog");

function extract(src: string, re: RegExp, file: string, name: string): string {
  const m = src.match(re);
  if (!m) throw new Error(`blog.ts: could not extract ${name} from ${file}`);
  return m[1];
}

function loadPosts(): BlogPost[] {
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => path.join(BLOG_DIR, e.name, "page.mdx"))
    .filter((f) => fs.existsSync(f)) // skips the /blog index (page.tsx) + non-post dirs
    .map((file) => {
      const src = fs.readFileSync(file, "utf8");
      return {
        slug: path.basename(path.dirname(file)),
        // metadata block is first in every file → first match is metadata.title/description
        title: extract(src, /title:\s*"([^"]+)"/, file, "title"),
        excerpt: extract(src, /description:\s*"([^"]+)"/, file, "description"),
        date: extract(src, /datePublished="(\d{4}-\d{2}-\d{2})"/, file, "datePublished"),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date)); // newest first
}

export const blogPosts: BlogPost[] = loadPosts();
