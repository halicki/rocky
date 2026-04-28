# SEO Loop — Running Index

Chronological log. One line per day. Newest at bottom.

Columns: date | action | target | commit | notes

| Date | Action | Target | Commit | Notes |
|---|---|---|---|---|
| 2026-04-14 | BASELINE bootstrap | — | b9f0225 | baseline: 4 clicks / 91 impr / CTR 4.4% / avg pos 22.3 over 12 days; 10 queries ranked |
| 2026-04-14 Day 1 | Rule 4 — on-page enrich + FAQPage schema | /batu-bolong-surf/ | 120b66c | added surf-report section, 6-Q FAQ + FAQPage JSON-LD; targets batu-bolong cluster (pos 43–62) |
| 2026-04-15 | Rule 2 — CTR rescue: title + AggregateRating | /surf-lesson-prices-bali/ | 4b019cf | new title adds 2026+price hook (52 chars); description trimmed to 149 chars; Service schema gains aggregateRating (5.0/82 reviews) → star rich-result |

| 2026-04-16 | Rule 2 | /blog/best-time-to-surf-canggu | 3c56efa | CTR rescue: title gains "Bali" keyword (was "Canggu"), description trimmed 170→147 chars; targets "best time to surf bali" cluster |

| 2026-04-17 | Rule 4 | /surf-lessons-canggu | 7ce3723 | FAQPage schema + FAQ section on pos-7 commercial page; GSC detailed endpoint DNS failure — totals only (97 impr, +6) |

| 2026-04-19 | Rule 4 | /blog/is-batu-bolong-good-for-beginners + /blog/what-to-expect-first-surf-lesson-bali | a42fd94 | BreadcrumbList JSON-LD on 2 untouched blog posts; impr +30 to 127; all prior actions still in crawl delay |

| 2026-04-20 | Rule 4 | /beginner-surf-lessons-bali | 6f4d602 | FAQPage JSON-LD on page with 3 existing FAQs; impr +2 to 129; all actions still in crawl delay |

| 2026-04-21 | Rule 4 | /private-surf-lesson-bali | d924c92 | FAQ section + FAQPage JSON-LD on untouched pos-5.7 page; impr +5 to 134; all actions in crawl delay |
| 2026-04-23 | Rule 4 | /blog/best-time-to-surf-canggu | 0502af8 | BreadcrumbList JSON-LD on highest-impression blog post (62 impr, pos 39.9, confirmed improving); impr +22 to 156 |
| 2026-04-24 | Rule 4 | /surf-lesson-prices-bali | a337608 | BreadcrumbList JSON-LD — first breadcrumb on a landing page; complements Service+AggregateRating; GSC window static (ends 2026-04-20), 156 impr |
| 2026-04-24 | PERF (poza pętlą) | Hero + Gallery + About | 20f1a49 | hero.mp4 4.3MB→1.6MB (-63%), hero.webm usunięty, Gallery/About <img>→<Image>; LCP 9.7s→2.8s, payload 5.1MB→3.2MB |
| 2026-04-24 | ASSETS (poza pętlą) | public/images/ | ff98f55 | 3 zdjęcia z @surfingwithrocky Instagram z SEO nazwami (beginner lesson, portrait, all-ages) |
| 2026-04-24 | STRATEGY (poza pętlą) | docs/seo-log/PLAYBOOK.md | fc27f5b | PLAYBOOK v2 — content-first: blog post co ≥3 dni jako twardy trigger, Rule 4 max 2x/tydzień, tygodniowe klastry |
| 2026-04-25 | Rule 2 | /blog/how-much-surf-lesson-cost-bali | dd344c8 | First new blog post — "How Much Does a Surf Lesson Cost in Bali?"; 1200w, ArticleSchema+BreadcrumbList+FAQPage, 3 internal links; impr +4 to 160 |
| 2026-04-26 | Rule 1 | /surf-lessons-canggu | ea6df36 | Striking-distance push: new H2 "Surf Lessons in Canggu — What to Expect" + ~360w section (logistics, gear, seasons); page at pos 12.8, 12 impr; site impr +9 to 169 |
| 2026-04-27 | Rule 2 | /blog/private-vs-group-surf-lesson-bali | b81c7b4 | Second new MDX post — ~1700w "Private vs Group Surf Lessons in Bali"; ArticleSchema+BreadcrumbList+FAQPage(6Q), 4 internal links; Rule 1 blocked by orthogonality on 2 of 3 candidates; site impr +2 to 171 |
| 2026-04-28 | Rule 2 | /blog/what-to-wear-surfing-bali | 6b1240e | Third new MDX post — ~1900w "What to Wear Surfing in Bali"; ArticleSchema+BreadcrumbList+FAQPage(6Q), 5 internal links; Rule 1 still blocked by orthogonality, Rule 2 fall-through (topic #3); site impr +2 to 173 |
| 2026-04-29 | Rule 6 | /batu-bolong-surf | 111f8b2 | BreadcrumbList JSON-LD on landing without breadcrumb (20 impr, pos 23.4, has TouristAttraction+FAQPage); breaks 3-day Rule 2 streak per Day 13 notes; GSC window static (2026-04-25 end), totals flat at 173 impr |

## Ważne — następna akcja pętli

**2026-04-29**: 4 days in a row of Rule 2 would be excessive — switch to Rule 6 BreadcrumbList on `/batu-bolong-surf` (pos 23.4, 20 impr; weekly polish budget reset since last polish 2026-04-24) or Rule 5 (image SEO filename audit, 234 image impr / pos 80.9 / 0 clicks). Rule 1 still gated: `/surf-lessons-canggu` lifts 2026-05-03, `/surf-lesson-prices-bali` lifts 2026-05-01.
**2026-05-01**: next mandatory content trigger (3 days after 2026-04-28 post). Next priority topic: #4 "Best surf spots in Canggu for intermediate surfers" (`best-surf-spots-canggu-intermediates`).

## Trend observations

- **Baseline (2026-04-14)**: site is early-stage. Only 12 days of GSC data. Single query in striking distance: `pantai batu bolong` (pos 3.0, 1 impr). All other queries position 40–90. No clicks from non-brand long-tail yet.
- Top opportunity vectors identified at bootstrap:
  - `surf lessons canggu` (pos 48) — mapped to `/surf-lessons-canggu/`, needs rank push
  - `batu bolong surf` (pos 43) — mapped to `/batu-bolong-surf/`, needs rank push
  - `pantai batu bolong` (pos 3) — defended, already ranking well
  - `best time to surf bali` (pos 91) — mapped to blog `best-time-to-surf-canggu`, needs broader query coverage
