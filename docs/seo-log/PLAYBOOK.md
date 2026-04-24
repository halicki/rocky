# SEO Action Playbook — v2

Heurystyka wyboru **jednej** akcji dziennie. Agent przechodzi reguły od góry i wybiera **pierwszą**, która pasuje.

> **v2 (2026-04-23): Główna zmiana strategii** — pętla była zbyt ostrożna. 8 dni głównie schema tweaków
> (Rule 4) przy braku nowego contentu = wolna trajektoria. Nowe zasady: content co 3 dni jako
> twardy wymóg, tematyczne klastry tygodniowe, Rule 4 jako ostateczność a nie domyślna akcja.

---

## Zasada nadrzędna: rytm contentu

**Co 3 dzień roboczy → OBOWIĄZKOWY nowy post blogowy (Rule 2)**, niezależnie od tego czy
inne reguły pasują. Sprawdź w INDEX.md datę ostatniego posta — jeśli minęły ≥3 dni bez
nowego MDX, Rule 2 wchodzi automatycznie na pozycję #1.

Dlaczego: jeden post 1200 słów = więcej długoterminowego SEO-value niż 10 schema tweaków.
Strona ma 3 posty. Potrzebuje 15–20 żeby budować topical authority.

---

## Reguły priorytetowe (ROI-sorted)

### 1. Striking Distance Boost  🎯  (NAJWYŻSZY ROI — natychmiastowe kliknięcia)

**Warunek**: strona z pozycją **5–20** i **≥10 wyświetleniami** w ostatnich 28 dniach
(oceniaj po danych strony, nie tylko query-level — GSC sampling ukrywa część query).

**Akcja** — wszystko naraz na tej jednej stronie:
- dodaj 300–500 słów treści z dokładnym query w H2 i pierwszych 100 słowach
- dodaj 3 internal linki z anchor textem zawierającym query (z innych stron do tej)
- upewnij się że `<title>` i `<meta description>` zawierają dokładne query
- dodaj `FAQPage` JSON-LD z 4–6 Q&A jeśli jeszcze nie ma

**Ortogonalność**: jeśli strona była celem w ciągu ostatnich 7 dni i akcja jest pending —
wybierz drugą stronę w striking distance lub zejdź do Rule 2.

---

### 2. Blog Content Expansion  📝  (WYSOKIE ROI — nowe entry points)

**Warunek (ANY z poniższych)**:
- minęły ≥3 dni od ostatniego nowego posta MDX (sprawdź INDEX.md) ← **twardy trigger**
- Rule 1 nie pasuje i Rule 3 nie pasuje
- mamy ≥5 impr na query bez dedykowanej strony

**Akcja**: nowy post MDX. Kolejność priorytetów (zacznij od góry, pierwszy który jeszcze
nie istnieje):

| # | Temat posta | Slug | Target query |
|---|---|---|---|
| 1 | How much does a surf lesson cost in Bali? | `how-much-surf-lesson-cost-bali` | surfing lessons bali price |
| 2 | Private vs group surf lessons in Bali — which is better? | `private-vs-group-surf-lesson-bali` | surf lesson private vs group bali |
| 3 | What to wear surfing in Bali (complete checklist) | `what-to-wear-surfing-bali` | what to wear surfing bali |
| 4 | Best surf spots in Canggu for intermediate surfers | `best-surf-spots-canggu-intermediates` | best surf spot canggu intermediates |
| 5 | Canggu vs Uluwatu for beginner surfers | `canggu-vs-uluwatu-beginners` | canggu vs uluwatu for beginners |
| 6 | Is Canggu surfing safe for kids? | `canggu-surfing-safe-for-kids` | is canggu surfing safe for kids |
| 7 | How long does it take to learn to surf in Bali? | `how-long-to-learn-surfing-bali` | how long to learn surfing bali |
| 8 | Batu Bolong surf conditions by month | `batu-bolong-surf-conditions-by-month` | batu bolong surf conditions |
| 9 | Best time to book surf lessons in Canggu | `when-to-book-surf-lessons-canggu` | when to book surf lessons canggu |
| 10 | Surfing in Bali for complete beginners — guide | `surfing-bali-complete-beginners-guide` | surfing bali beginners |

**Wymagania każdego posta**:
- min. **1200 słów** (dłuższe = więcej long-tail coverage)
- `ArticleSchema` + `BreadcrumbList` JSON-LD (oba, od razu)
- `FAQPage` JSON-LD jeśli post ma sekcję FAQ (powinna być)
- **3+ internal linki** do istniejących stron (`/surf-lessons-canggu`, `/surf-lesson-prices-bali`,
  `/batu-bolong-surf`, `/beginner-surf-lessons-bali`, `/private-surf-lesson-bali`)
- przynajmniej jeden `<h2>` zawierający dokładne target query
- CTA do WhatsApp na końcu (wzorzec z istniejących postów)
- plik: `src/app/blog/<slug>/page.mdx`
- brak wpisu w `src/lib/blog.ts` (routing przez filesystem, nie katalog)

---

### 3. Content Gap Fill  ✏️

**Warunek**: query z **≥5 wyświetleniami** w GSC, ale brak dedykowanej strony
(GSC pokazuje root `/` lub niespokrewnioną stronę jako landing).

**Akcja**: stwórz dedykowany landing (`src/app/<slug>/page.tsx`) lub przekieruj do Rule 2
(nowy post MDX) jeśli intent jest informacyjny. Min. 800 słów, pełne schema.

---

### 4. CTR Rescue  📈

**Warunek**: strona z **≥20 wyświetleniami**, **CTR < 2%** i **nie była celem CTR rescue
w ciągu ostatnich 14 dni**.

**Akcja**: przepisz `<title>` i `<meta description>`:
- title: `<Primary Keyword> | <Konkretna korzyść / liczba> | Surfing With Rocky` — max 60 znaków
- description: 140–155 znaków, query + rok/cena/liczba + CTA (np. "Book via WhatsApp")
- dodaj `aggregateRating` w schema jeśli nie ma

**Uwaga**: jeśli strona miała CTR rescue i po 14 dniach dalej 0% CTR — sprawdź Google Cache
(czy nowy title w ogóle się zaindeksował) zanim zrobisz kolejny rescue.

---

### 5. Image SEO  🖼️

**Warunek**: GSC pokazuje **≥100 wyświetleń obrazków** z pozycją >50 (sprawdź
`by_search_type` w snapshoocie — typ `image`). Lub: znaleziono obrazek bez alt textu
lub z nieinformatywną nazwą pliku (`photo1.jpg`, `IMG_xxxx.jpg`).

**Akcja** (wybierz jedno):
- audit `public/images/` — zmień nazwy plików na opisowe (`batu-bolong-surf-lesson-canggu.jpg`)
  i zaktualizuj referencje w kodzie
- sprawdź czy wszystkie `<Image>` i `<img>` mają opisowy alt text z keywords
- dodaj `ImageObject` schema do strony z galerią jeśli brak
- rozważ dodanie sekcji `<image:image>` do `sitemap.xml`

**Kontekst**: site ma 232 wyświetlenia obrazków na poz. 80.8 z 0 kliknięciami. Surfing
jest kategorią wizualną — image search to duża szansa.

---

### 6. Technical SEO Polish  🔧  (OSTATECZNOŚĆ — max 2x/tydzień)

**Warunek**: żadna z powyższych nie pasuje LUB minęły <3 dni od ostatniego posta
i nie ma wyraźnego hitting-distance candidate. **Nie stosuj częściej niż 2 razy w tygodniu.**

**Akcja** (wybierz jedną — w tej kolejności priorytetów):
1. `BreadcrumbList` JSON-LD na stronie która jej nie ma (sprawdź wszystkie landing pages)
2. `FAQPage` JSON-LD na stronie z sekcją FAQ bez schema
3. internal linki z `ExploreMoreLinks` — dodaj linki do nowszych postów
4. alt text na obrazkach bez alt
5. `VideoObject` schema jeśli strona ma embedded video

**Zakończono ✅** (nie powtarzać):
- `BreadcrumbList`: `/blog/is-batu-bolong-good-for-beginners`, `/blog/what-to-expect-first-surf-lesson-bali`, `/blog/best-time-to-surf-canggu`
- `FAQPage`: `/batu-bolong-surf`, `/surf-lessons-canggu`, `/beginner-surf-lessons-bali`, `/private-surf-lesson-bali`
- GA4: `G-0LTBL2X919` w `layout.tsx` ✅

---

### 7. Local Pack Ticket  📍  (MANUALNE — raz w tygodniu)

**Warunek**: piątek lub brak innej akcji technicznej tego dnia.

**Akcja**: agent tworzy ticket w logu dnia (NIE modyfikuje GBP bezpośrednio):
- draft posta GBP (temat + 150 słów, zdjęcie do uploadu z captionem)
- propozycje odpowiedzi na nowe reviews bez odpowiedzi
- brakujące Q&A w profilu GBP

User wykonuje ręcznie (~5 min). Target queries: `surf lessons canggu`, `surf lessons near me`.

---

## Tygodniowe klastry tematyczne

Zamiast losowej kolejności akcji, grupuj zmiany wokół jednego tematu w tygodniu.
Google buduje topical authority szybciej gdy widzi skupiony sygnał.

**Przykładowy rytm:**

| Tydzień | Klaster | Akcje |
|---|---|---|
| A | **Surf lessons Canggu** | Post: "private vs group", Post: "how much does it cost", Update: `/surf-lessons-canggu` internal links |
| B | **Batu Bolong** | Post: "batu bolong conditions by month", Update: `/batu-bolong-surf` content expansion |
| C | **Beginner surfing Bali** | Post: "complete beginners guide", Post: "is it safe for kids" |
| D | **Striking distance push** | Wzmocnienie strony która zbliżyła się do top-10 |

W praktyce: sprawdź GSC, jeśli żadna strona nie jest w striking distance — idź z planem
tematycznym i napisz kolejny post z klastra A, B lub C.

---

## Przyszłe ulepszenia pętli

### GA4 API w pętli  📊
**Kiedy**: ruch osiągnie ~50 sesji/tydzień (sprawdź w GA4 → Reports → Overview).
**Co zrobić**: dodaj odczyt GA4 Data API do `scripts/gsc-snapshot.mjs`. Service account
GSC ma już dostęp — wystarczy dodać go w GA4 Admin → Account Access Management.
Measurement ID: `G-0LTBL2X919`.

### Keyword research automation
**Kiedy**: mamy 20+ postów. **Co zrobić**: raz w tygodniu odpytaj GSC o queries z
impr 2–9 i pozycją 15–50 — to kandydaci do nowych postów lub content expansion.

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
- ❌ nie stosuje Rule 6 (Technical Polish) częściej niż 2x w tygodniu

---

## Ortogonalność

- Nie modyfikuj tej samej strony ponownie jeśli poprzednia akcja jest pending (<7 dni)
- Wyjątek: możesz dodać inny TYP schema do tej samej strony (np. BreadcrumbList
  jeśli wcześniej dodałeś FAQPage) po ≥7 dniach i gdy akcja pokazuje pozytywny trend
- Nowe posty blogowe NIE podlegają ortogonalności — każdy post to nowy URL

## Tie-breakers

Jeśli dwie strony/query pasują do tej samej reguły z identycznym ROI:
1. strona już ranked (non-zero impressions) > nowa strona
2. większa liczba wyświetleń
3. wyższe tematyczne dopasowanie do Canggu / Bali (lokalny intent)
4. strona nigdy nie była celem żadnej akcji > strona modyfikowana poprzednio
