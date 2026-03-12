# Rocky Surf Website — Design Spec

## Context

Rocky is a surf instructor in Canggu, Bali. He was paying 30M IDR/year (~$1,800) for website hosting — way too much for a simple landing page. His current site (endlesswavesbali.online) is offline.

**Goal:** Build a free-hosted, professional single-page website that drives WhatsApp bookings. Deploy on Vercel (endlesswavesbali.vercel.app) at zero hosting cost.

## Requirements

- **Primary action:** Contact Rocky via WhatsApp
- **Tone:** Professional but warm and personal — not corporate
- **Visual style:** "Tropical Warm" — dark ocean backgrounds, sand/gold (#d4a574) accents, serif headings (Georgia), clean sans-serif body text
- **Content sources:** Photos and reviews from Google Maps listing
- **Structure:** Single-page with anchor navigation
- **Pricing:** Single lesson 400K IDR, 3-lesson pack 1M IDR
- **Domain:** endlesswavesbali.vercel.app (free Vercel subdomain for now)

## Tech Stack

- **Next.js** (App Router) — static export for zero-cost Vercel hosting
- **Tailwind CSS** — utility-first styling, fast to build
- **No CMS, no database** — all content hardcoded, easy for us to update
- **`<img>` tags** with manually optimized images (static export doesn't support next/image optimization)

### Why Next.js over plain HTML?

- Easy Vercel deployment (git push = deploy)
- Component structure for maintainability
- Static export (`output: 'export'` in next.config.ts) = same performance as raw HTML, but easier to develop
- Tailwind integration out of the box

## Page Sections (top to bottom)

### 1. Navigation

- Fixed top bar, transparent on hero, solid on scroll (requires `'use client'` + scroll listener)
- Logo text: "Surfing with Rocky" in gold
- Anchor links: About, Lessons, Reviews, Gallery
- WhatsApp CTA button (always visible, gold background)
- Tablet (768-1024px): show full nav links, hamburger only below 768px

### 2. Hero

- Full-viewport height
- Background: gradient (#0f172a → #1e3a5f → #2d6a4f) — will be replaced with a real photo later
- Location tag: "Canggu, Bali" (small, uppercase, gold)
- Heading: "Catch Your First Wave" (Georgia serif, large)
- Subtext: one-liner about lessons
- Primary CTA: "Book via WhatsApp →" (gold button)
- Social proof: "⭐ 5.0 on Google Maps · 50+ reviews"

### 3. About Rocky

- Two-column: photo (circle crop) + text
- Section label: "Meet Your Instructor"
- Name: "Rocky"
- Short bio: experience, teaching style, personality
- Warm, personal tone

### 4. Lessons & Pricing

- Two cards side by side
- **Single Lesson:** 400K IDR — ~90 mins, board & rashguard included
- **3-Lesson Pack:** 1M IDR — save 200K, progress tracking, flexible scheduling
- 3-pack highlighted as "BEST VALUE"
- Each card has a WhatsApp booking link

### 5. Reviews

- 3 review cards in a row (responsive: stack on mobile)
- Reviews manually copy-pasted from Google Maps listing and hardcoded (no API)
- Star rating, quote, name + country
- Link to full Google Maps reviews

### 6. Gallery

- 3x2 grid of photos (responsive: 2-column on mobile)
- Photos from Google Maps listing
- No lightbox in v1 — simple grid only

### 7. Final CTA

- Gradient background
- "Ready to Surf?" heading
- Large green WhatsApp button (#25D366)
- Contact info: location, Instagram, Google Maps link

### 8. Footer

- Minimal: copyright line

## Color Palette

| Token          | Hex                   | Usage                    |
| -------------- | --------------------- | ------------------------ |
| bg-primary     | #0f172a               | Main background          |
| bg-secondary   | #1a2332               | Alternating sections     |
| accent-gold    | #d4a574               | CTAs, labels, highlights |
| ocean-blue     | #1e3a5f               | Gradients                |
| ocean-green    | #2d6a4f               | Gradients                |
| whatsapp       | #25D366               | WhatsApp buttons         |
| text-primary   | #ffffff               | Headings                 |
| text-secondary | rgba(255,255,255,0.7) | Body text                |

## Typography

- **Headings:** Georgia, serif — warm, classic feel
- **Body:** system-ui / Inter — clean, readable
- **Labels:** Uppercase, letter-spacing 2-4px, small size

## Responsive Behavior

- **Desktop (>1024px):** Full layout as mockup
- **Tablet (768-1024px):** Pricing cards stack, gallery 2-col
- **Mobile (<768px):** Single column, hamburger nav, full-width cards

## WhatsApp Integration

- WhatsApp number stored as constant in a `src/lib/constants.ts` file — placeholder `6281234567890` until Rocky provides his real number
- All CTA buttons link to `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Rocky!%20I'd%20like%20to%20book%20a%20surf%20lesson`
- Floating WhatsApp button in bottom-right corner (mobile) — `WhatsAppFloat.tsx` component
- Pre-filled message for easy contact

## Performance Goals

- Static export (`output: 'export'` in next.config.ts, `images: { unoptimized: true }`)
- Build command: `npm run build` (no separate `next export`)
- All images optimized and lazy-loaded
- Lighthouse score: 90+ on all metrics
- Page load < 2s on 3G

## Content To Gather

Before deployment, we need from Rocky:

1. His WhatsApp number
2. 6+ photos (or we scrape Google Maps)
3. Short bio text (or we write it based on reviews)
4. Instagram handle (if any)
5. Any specific details about lessons (duration, what's included)

## File Structure

```
rocky/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, metadata
│   │   ├── page.tsx            # Main page composing all sections
│   │   └── globals.css         # Tailwind + custom CSS vars
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Lessons.tsx
│       ├── Reviews.tsx
│       ├── Gallery.tsx
│       ├── FinalCTA.tsx
│       ├── WhatsAppFloat.tsx
│       └── Footer.tsx
│   └── lib/
│       └── constants.ts        # WhatsApp number, Google Maps URL, etc.
├── public/
│   └── images/                 # Rocky's photos
├── tailwind.config.ts          # Custom colors, fonts
├── next.config.ts
└── package.json
```

## Metadata & SEO

- **Title:** "Surfing with Rocky — Surf Lessons in Canggu, Bali"
- **Description:** "Professional surf lessons in Canggu, Bali. All levels welcome. Book via WhatsApp."
- **OG Image:** Hero gradient or photo (placeholder for now)
- **OG Tags:** title, description, image, url
- **Favicon:** Simple wave/surf emoji or custom icon (can add later)

## Verification

1. `npm run dev` — check all sections render correctly
2. Test responsive behavior at 375px, 768px, 1440px
3. Verify all WhatsApp links open correctly
4. Run `npm run build` — confirm static export succeeds (uses `output: 'export'`)
5. Check Lighthouse scores
6. Deploy to Vercel via git push
