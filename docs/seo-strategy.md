# SEO & Content Strategy — surfingwithrocky.com

## Goal
Rank organically for "surf lessons Canggu / Batu Bolong / Bali" searches and drive more WhatsApp bookings without paid ads.

## Current State
- Single-page site (`/` only) — can only rank for brand queries
- Basic metadata + JSON-LD already in place (good foundation)
- Missing: OG image, dynamic sitemap, any content pages

---

## Step 1 — Technical SEO fixes [x]

Quick wins that improve how Google and social platforms understand the site.

### 1a. OG image
- Add `images` to the `metadata` object in `layout.tsx`
- Use existing `/images/photo1.jpg` as the social sharing card image
- Improves click-through rate when shared on Facebook, WhatsApp, Twitter

### 1b. Dynamic sitemap
- Replace static `public/sitemap.xml` (manually updated, easy to forget) with `src/app/sitemap.ts`
- Next.js generates `sitemap.xml` at build time — auto-includes any new pages added in Step 2+
- Delete `public/sitemap.xml` after

### 1c. robots.ts cleanup
- Replace `public/robots.txt` with `src/app/robots.ts` — keeps all SEO config in one place (src/app)
- Delete `public/robots.txt` after

---

## Step 2 — Location & service landing pages [ ]

Add dedicated sub-pages targeting high-intent local searches. Each page reuses existing components but with page-specific copy and metadata.

| URL | Target keyword | Monthly searches (est.) |
|-----|---------------|------------------------|
| `/surf-lessons-canggu` | "surf lessons canggu" | ~500/mo |
| `/surf-lessons-batu-bolong` | "surf lessons batu bolong" | ~200/mo |
| `/beginner-surf-lessons-bali` | "beginner surf lessons bali" | ~300/mo |
| `/surf-school-bali` | "surf school bali" | ~800/mo |

Each page needs:
- Unique `<title>` and `<description>`
- H1 with the target keyword
- 200–400 words of unique copy (location context, what to expect, why this spot)
- Same Lessons + WhatsApp CTA components
- Added to `sitemap.ts`

---

## Step 3 — Blog / content section [ ]

Long-tail organic traffic. Articles answer questions tourists search before booking.

Setup: MDX blog at `/blog` using `next-mdx-remote` or `@next/mdx`.

Priority articles:
1. "Best time to surf in Bali" — year-round conditions, dry vs wet season
2. "Canggu surf spots guide" — Batu Bolong, Old Man's, Echo Beach comparison
3. "What to expect at your first surf lesson in Bali" — reassurance content
4. "Surf lessons Canggu price guide" — pricing comparison, value framing
5. "Is Canggu good for beginner surfers?" — FAQ-style, ranks for voice search

Each article ends with a Rocky CTA section.

---

## Sitemap of future pages

```
surfingwithrocky.com/
├── /                              ← existing
├── /surf-lessons-canggu           ← Step 2
├── /surf-lessons-batu-bolong      ← Step 2
├── /beginner-surf-lessons-bali    ← Step 2
├── /surf-school-bali              ← Step 2
└── /blog/                         ← Step 3
    ├── /best-time-to-surf-bali
    ├── /canggu-surf-spots-guide
    ├── /first-surf-lesson-bali
    ├── /surf-lessons-canggu-price
    └── /is-canggu-good-for-beginners
```
