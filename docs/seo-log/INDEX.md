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

## Trend observations

- **Baseline (2026-04-14)**: site is early-stage. Only 12 days of GSC data. Single query in striking distance: `pantai batu bolong` (pos 3.0, 1 impr). All other queries position 40–90. No clicks from non-brand long-tail yet.
- Top opportunity vectors identified at bootstrap:
  - `surf lessons canggu` (pos 48) — mapped to `/surf-lessons-canggu/`, needs rank push
  - `batu bolong surf` (pos 43) — mapped to `/batu-bolong-surf/`, needs rank push
  - `pantai batu bolong` (pos 3) — defended, already ranking well
  - `best time to surf bali` (pos 91) — mapped to blog `best-time-to-surf-canggu`, needs broader query coverage
