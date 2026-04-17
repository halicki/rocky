# SEO Action Playbook

Heurystyka wyboru **jednej** akcji dziennie. Agent przechodzi reguły od góry i wybiera **pierwszą**, która pasuje do aktualnych danych GSC.

## Reguły priorytetowe (ROI-sorted)

### 1. Striking Distance Boost  🎯  (NAJWYŻSZY ROI)
**Warunek**: query z pozycją **5–20** i **≥10 wyświetleniami** w ostatnich 28 dniach.
**Akcja**: znajdź stronę dopasowaną do query, wzmocnij ją:
- dodaj 200–400 słów treści z query w nagłówku H2/H3 i pierwszych 100 słowach
- dodaj 2–3 internal linki z anchor textem zawierającym query
- dodaj `FAQPage` JSON-LD z 3–5 Q&A pod query
- upewnij się że `<title>` i `meta description` zawierają dokładne query

### 2. CTR Rescue  📈
**Warunek**: strona z **≥20 wyświetleniami** i **CTR < 2%** (lub <50% benchmarka dla danej pozycji).
**Akcja**: przepisz `<title>` i `meta description` dla tej strony:
- title: `<Primary Keyword> | <Benefit> | <Brand>` — max 60 znaków
- description: 140–155 znaków, zawiera query + konkretna liczba/rok + CTA
- rozważ dodanie `aggregateRating` w schema jeśli nie ma

### 3. Content Gap Fill  ✏️
**Warunek**: query z **≥5 wyświetleniami** ale **brak dedykowanej strony** (GSC pokazuje root / niespokrewnioną stronę).
**Akcja**: stwórz dedykowany landing lub blog post MDX pod to query:
- plik w `src/app/<slug>/page.tsx` (landing) lub `src/app/blog/<slug>/page.mdx` (post)
- min. 800 słów, `ArticleSchema` lub `Service` schema, internal linki do 3 istniejących stron
- wpis w `src/lib/blog.ts` jeśli blog

### 4. Technical SEO Polish  🔧
**Warunek**: żadna z powyższych nie pasuje, a istnieją niskowiszące braki techniczne.
**Akcja** (wybierz jedną z najbardziej brakujących):
- `FAQPage` JSON-LD na stronie z treścią FAQ (komponent `FAQ.tsx` jest, ale nie zawsze schema)
- `BreadcrumbList` JSON-LD na blog postach i landingach
- alt text dla obrazków bez alt (sprawdź `public/` + komponenty `Gallery.tsx`, `Hero.tsx`)
- `VideoObject` schema jeśli na stronie jest embedded wideo
- dodanie internal linków w `ExploreMoreLinks` z lepszym anchor textem
- **[JEDNORAZOWE] Google Analytics 4** — dodaj `<Script>` GA4 do `src/app/layout.tsx` (jeden raz, gdy żaden inny priorytet nie pasuje i ruch zaczyna rosnąć). GA4 automatycznie trackuje kliknięcia w linki zewnętrzne (WhatsApp CTA = outbound click = de facto conversion). Pozwoli mierzyć CTR per landing po tym jak ruch się pojawi. Implementacja: dodaj `gtag.js` przez `next/script` z `strategy="afterInteractive"`, measurement ID z `.env.local`. Po zrobieniu raz — usuń ten punkt z listy.

### 5. Blog Content Expansion  📝
**Warunek**: powyższe nie pasują, brak ruchu ogólnie, potrzeba więcej contentu pod long-tail.
**Akcja**: nowy post MDX pod konkretny long-tail z listy poniżej (wybierz najwyżej):
- "best surf spot canggu for intermediates"
- "what to wear surfing in bali"
- "how much does surf lesson bali cost"
- "canggu vs uluwatu for beginners"
- "surf lesson private vs group bali"
- "is canggu surfing safe for kids"
- "how long to learn surfing bali"

Każdy post: min. 1000 słów, ArticleSchema, 3+ internal linki, zdjęcie z alt, FAQPage schema jeśli ma sekcję FAQ.

### 6. Local Pack Ticket  📍  (MANUALNE)
**Warunek**: Local Pack ma priorytet dla `surf lessons canggu`, `surf lessons near me`.
**Akcja**: agent NIE może modyfikować Google Business Profile — tworzy ticket w logu dnia:
- sugeruje post GBP (temat + 150 słów draftu)
- sugeruje zdjęcie do uploadu (jakie, z jakim caption)
- sprawdza czy są nowe review bez odpowiedzi — proponuje odpowiedzi
- sprawdza Q&A w GBP — proponuje brakujące odpowiedzi
User wykonuje to ręcznie (~5 min dziennie). Ticket z GBP może towarzyszyć commitowi kodu.

### 7. Core Web Vitals / Speed  ⚡
**Warunek**: Lighthouse performance <90 na kluczowej stronie (mierzone przez `WebFetch` + heurystyka).
**Akcja**: jedna konkretna optymalizacja:
- konwersja obrazka do WebP/AVIF
- `priority` na LCP image
- `font-display: swap` jeśli brakuje
- usunięcie nieużywanego CSS/JS

---

## Zakaz-lista (agent NIGDY nie robi)

- ❌ nie modyfikuje `package.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`
- ❌ nie zmienia globalnych stylów (`globals.css`)
- ❌ nie rusza core layoutu / nawigacji (`layout.tsx`, `Navbar.tsx`, `LandingNavbar.tsx`, `BlogNavbar.tsx`, `Footer.tsx`)
- ❌ nie usuwa treści (tylko dodaje/przepisuje)
- ❌ nie robi content rewrite istniejącego bloga ani landing page całościowo — tylko surgical edits
- ❌ nie rusza `docs/seo-strategy.md`, `docs/LOCAL_PACK_STRATEGY.md`
- ❌ nie zmienia URLi istniejących stron (break canonical/sitemap)
- ❌ nie commituje więcej niż 3 plików dziennie (wyjątek: 1 nowy post MDX = 1 plik)
- ❌ nie używa `--no-verify`, `--force`, `--amend`

## Ortogonalność

Jeśli akcja z dnia N-1 jest **pending** (Google potrzebuje 2–7 dni na re-crawl), agent NIE modyfikuje tej samej strony ponownie. Wybiera inną stronę lub inny typ akcji. Każda zmiana ma mieć szansę "oddychać" i pokazać efekt.

## Tie-breakers

Jeśli dwie strony/query pasują do tej samej reguły z identycznym ROI, preferencja:
1. strona już ranked (non-zero impressions) > nowa strona
2. większa liczba wyświetleń
3. wyższe tematyczne dopasowanie do Canggu / Bali (lokalny intent)
