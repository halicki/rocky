# SEO Action Playbook — v3

Heurystyka wyboru **jednej** akcji dziennie. Agent przechodzi reguły od góry i wybiera **pierwszą**, która pasuje.

> **v2 (2026-04-23): Główna zmiana strategii** — pętla była zbyt ostrożna. 8 dni głównie schema tweaków
> (Rule 4) przy braku nowego contentu = wolna trajektoria. Nowe zasady: content co 3 dni jako
> twardy wymóg, tematyczne klastry tygodniowe, Rule 4 jako ostateczność a nie domyślna akcja.
>
> **v3 (2026-08-10): Naprawa Rule 1 i Rule 2 po 90 przebiegach.** Sześć poprawek. Pięć z nich
> było zgłoszonych jako "proposed" w logach 08-04…08-09 i żadna nie została zapisana — a pętla
> w tym czasie wykonała cztery akcje pod niesprawną regułą. Szósta wyszła z diagnostyki 08-10.
>
> 1. **Rule 1 — narrow, don't add.** Pięć z ostatnich sześciu strike'ów skończyło się *spadkiem*
>    pozycji, przy czterech z czterech sukcesów w maju. Domyślną akcją przestaje być dopisanie
>    300–500 słów.
> 2. **Query-visibility gate.** Rule 1 wymaga dokładnego query w H2/anchorach — a dla większości
>    stron GSC w ogóle nie pokazuje ich query. Reguła milcząco zakładała widoczność, której nie ma.
> 3. **Rank-bound vs CTR-bound.** Osiem stron siedzi na poz. 6.7–9.9 z **zerem kliknięć**. To
>    problem snippetu, nie rankingu — Rule 1 był na nie złym narzędziem.
> 4. **"Fallen out of band".** Strony, które po strike'u wypadły powyżej 20, są dziś zablokowane
>    dla każdej reguły i nie naprawią się same.
> 5. **Rule 2 ownership audit.** Przy 37 postach "duża pula" i "wolna pula" to już dwie różne rzeczy.
> 6. **Mechanical sweep.** Limit 3 plików blokuje naprawy czysto mechaniczne (patrz: canonicale).

---

## Zasada nadrzędna: rytm contentu

**Co 3 dzień roboczy → OBOWIĄZKOWY nowy post blogowy (Rule 2)**, niezależnie od tego czy
inne reguły pasują. Sprawdź w INDEX.md datę ostatniego posta — jeśli minęły ≥3 dni bez
nowego MDX, Rule 2 wchodzi automatycznie na pozycję #1.

Dlaczego: jeden post 1200 słów = więcej długoterminowego SEO-value niż 10 schema tweaków.
Strona ma 3 posty. Potrzebuje 15–20 żeby budować topical authority.

---

## Reguły priorytetowe (ROI-sorted)

### 1. Striking Distance Boost  🎯  (wysoki ROI — ale patrz v3: reguła była niesprawna)

**Warunek wejścia — wszystkie trzy muszą być spełnione:**

1. **Pasmo pozycji 10–20** (v3: było 5–20) i **≥10 wyświetleń** w ostatnich 28 dniach.
2. **Query-visibility gate** (v3): w raporcie GSC istnieje **nazwane** query, które ta strona
   ewidentnie obsługuje, z **≥3 wyświetleniami**. Bez tego akcja Rule 1 jest **niewykonalna** —
   cała jej treść mówi "wstaw dokładne query", a Ty nie wiesz, jakie. Strona bez nazwanego
   query jest *query-anonimowa* → pomiń ją i weź następnego kandydata.
3. **Ortogonalność**: strona nie była celem w ciągu ostatnich 7 dni, nie ma otwartego odczytu
   i nie jest stroną kontrolną dla trwającego testu kanibalizacyjnego.

**Krok 0 — rank-bound czy CTR-bound? (v3)** Najpierw nazwij problem, potem wybierz narzędzie:

| Objaw | Diagnoza | Reguła |
|---|---|---|
| pozycja **10–20**, są wyświetlenia | Google nie uważa strony za dość trafną dla query | **Rule 1** |
| pozycja **5–10**, **0 kliknięć** | rankujesz wysoko i nikt nie klika → problem snippetu | **Rule 4** |
| pozycja **>20** po wcześniejszym strike'u | patrz Rule 1-B niżej | **Rule 1-B** |

Dlatego pasmo zwęża się z 5–20 na 10–20. Na 2026-08-10 **osiem stron** siedziało na pozycjach
6.7–9.9 z zerem kliknięć (`when-to-book` 51 impr @ 7.9, `how-long-to-learn` 41 @ 7.2,
`best-time-to-surf-canggu` 30 @ 7.6, `/surf-lessons-canggu` 27 @ 9.9, `batu-bolong-surf-forecast`
26 @ 7.5, `what-to-bring` 19 @ 6.7, `learn-to-surf-cant-swim` 13 @ 9.7, `surf-lessons-near-me` 10 @ 7.5).
To kolejka Rule 4, nie pole Rule 1.

**Akcja domyślna (v3 — NARROW, DON'T ADD):**

Nazwij query w **istniejącej strukturze**. Nie dopisujesz nowej treści:
- dokładne query w **istniejącym** `<h2>` — przepisz nagłówek, nie dodawaj kolejnego
- dokładne query w lede (pierwsze 100 słów)
- 2–3 **istniejące** internal linki przepisane na anchor zawierający query
- `<title>` i `<meta description>` zawierają dokładne query
- `FAQPage` JSON-LD (4–6 Q&A), jeśli jeszcze go nie ma

**Dodanie sekcji 300–500 słów jest wyjątkiem i wymaga dowodu**, że strona ma **lukę treściową**
(brakuje tematu, o który pyta query), a nie **lukę słownikową** (temat jest, tylko opisany innym
słowem). Dowód zapisujesz w logu **przed** edycją. Jeśli nie umiesz go sformułować — nie dodawaj.

> **Dlaczego (dane pętli, 2026-08-09/10).** Maj: cztery strike'i, cztery potwierdzone sukcesy —
> batu-bolong 14.6→8.3, prices 14.5→8.1, surf-lessons-canggu 10.4→9.2, best-time 11.8→8.9.
> Lipiec–sierpień: **pięć z sześciu strike'ów zakończonych spadkiem pozycji** — best-surf-school
> 12.5→25.2 (11 z 12 okien ujemnych), canggu-vs-uluwatu 27.5→32.5, private-vs-group 15.7→20.4,
> intermediate-coaching 12.0→15.9, kids-safety regresja→flat; neutralny tylko bali-surf-itinerary.
> Różnica jest jednoznaczna: majowe akcje **dodawały sekcję, której stronie faktycznie brakowało**.
> Sierpniowe **dopisywały 300–500 słów stronom już kompletnym i skupionym** — czyli dokładnie to
> rozmycie tematu, przed którym ostrzegał post-mortem best-surf-school.

**Rule 1-B — klauzula "fallen out of band" (v3)**

**Warunek**: strona, która (a) była kiedyś celem akcji, (b) jest **jedynym właścicielem** realnej
puli query (≥50 wyświetleń) i (c) **wypadła powyżej pozycji 20** — przez co jest zablokowana dla
Rule 1 przez pasmo i nie naprawi się sama.

Na 2026-08-10 dotyczy dwóch stron: `/blog/best-surf-school-bali-how-to-choose/` (28 impr @ 25.2)
i `/blog/canggu-vs-uluwatu-beginners/` (284 impr @ 32.5, właściciel ~165-impr puli Uluwatu, która
jest na stałe odrzucona dla Rule 2 z powodów redakcyjnych — więc ta strona jest jedyną możliwą
naprawą tej puli).

**Akcja: wyłącznie zwężenie.** Dociśnij `<title>`, H1 i lede do **jednej** intencji; skróć lub
scal sekcję, która rozmywa temat, oddając jej treść linkiem do właściwego właściciela.
**Nigdy nie dodawaj.** Ta klauzula istnieje po to, by odblokować naprawę — nie po to, by ominąć
limit pasma i dopisać kolejne 400 słów.

Zwężanie jest jedynym przypadkiem, w którym wolno skrócić istniejącą treść (patrz zakaz-lista):
maksymalnie **jedna sekcja na akcję**, materiał **przekazany linkiem, a nie skasowany**, a log
wymienia dokładnie, co zostało zwężone i dokąd trafiła treść.

---

### 2. Blog Content Expansion  📝  (WYSOKIE ROI — nowe entry points)

**Warunek (ANY z poniższych)**:
- minęły ≥3 dni od ostatniego nowego posta MDX (sprawdź INDEX.md) ← **twardy trigger**
- Rule 1 nie pasuje i Rule 3 nie pasuje
- mamy ≥5 impr na query bez dedykowanej strony

**Krok 0 (v3) — OWNERSHIP AUDIT. Obowiązkowy, przed wyborem tematu.**

Dla każdej kandydackiej puli query: **otwórz plik strony, która dziś na nie rankuje**. Jeśli jej
`<title>`, `<meta description>` albo FAQ zawiera dosłowne query — **pula jest zajęta**. To problem
Rule 1 / Rule 4 (strona istnieje i rankuje źle), a **nie** luka contentowa. Nowy post byłby wtedy
doorway page i kanibalizacją.

Czytanie samego GSC **nie wystarczy**. Przy 37 postach "duża pula" i "wolna pula" się rozjechały —
każdy sensowny klaster ma już swoją stronę. Pytanie Rule 2 zmieniło się z *co jest duże?* na
**co jest duże I NIEOBSŁUŻONE?**, a na to GSC sam z siebie nie odpowiada.

> Audyt sprawdził się dwa razy. 08-06: pula Uluwatu — **175 wyświetleń w 13 wariantach, największa
> w danych, 2.5× większa od tej, która uzasadniła najlepszy post pętli** — została odrzucona, bo
> `canggu-vs-uluwatu-beginners` ma `<title>` brzmiący dosłownie *"Surfing in Uluwatu for Beginners?
> Learn in Canggu Instead"*. Nie luka — własność, i to rankująca na 30. 08-09: ten sam audyt
> zdyskwalifikował sześć pul w jednym przebiegu (forecast-tool ~636 impr zajęty potrójnie,
> nazwy miejsc Batu Bolong ~230, klaster `report` ~163, Uluwatu ~170, beginner-Bali ~26, ceny ~23).

**Akcja**: nowy post MDX.

**Lista tematów z v2 jest WYCZERPANA** — wszystkie 10 pozycji wysłane do 2026-05-18, a
`what-board-for-beginner-surfers-bali` skreślony 2026-08-03 po sześciu odrzuceniach. Tabela niżej
zostaje jako zapis historyczny; **nie wybieraj z niej tematu**. Od v3 temat wyprowadzasz z danych,
w tej kolejności:

**1. Wzorzec zwalidowany — najwyższy priorytet.** *Intencja miejscowa/destynacyjna na pozycji ~40,
bez własnej strony, z oddaniem nakładającej się intencji linkiem.* Jedyny wzorzec pętli z twardym
dowodem przyczynowym: post z 08-03 `batu-bolong-beach-canggu-guide` przeszedł **1 impr @ 7.0 →
245 impr @ 9.4 z 2 kliknięciami w cztery dni**, `batu bolong beach` **42 @ 43.6 → 134 @ 18.1
z pierwszym kliknięciem w historii** — a strona kontrolna `/batu-bolong-surf/` stała **dead flat
@ 9.2 przez pięć kolejnych okien** przy rosnących wyświetleniach. Zero szkody dla incumbenta.

**2. Obiekcja lub audytorium bez własnej strony.** Klaster najlepiej konwertujący na stronie:
over-40 17.6% CTR, video-analysis 20%, family 5.3%, kids 3.2% — wobec 0.1% na dużych stronach
forecastowych. Około **200× lepsza konwersja na wyświetlenie**. Dopuszczalny **bez wsparcia
w GSC**, ale tylko gdy strony na ten temat **nie ma w ogóle**: brak wyświetleń dla tematu, o którym
nigdy nie napisaliśmy, jest nieinformatywny. Jeśli strona istnieje i mimo to zero query — to jest
dowód braku popytu i temat się skreśla (tak zginął post o deskach).

**3. Pula GSC ≥30 impr, pozycja >30**, która przeszła ownership audit.

**Guard kanibalizacyjny — obowiązkowy w każdym poście.** Każdy sąsiadujący temat oddany
właścicielowi jednym zdaniem i linkiem. Zero języka konkurencyjnej strony w `<title>`/H1/H2:
żadnego "vs", "near me", "forecast"/"report", jeśli te należą do innej strony.

<details>
<summary>Historyczna lista tematów v2 (wyczerpana 2026-05-18 — nie wybieraj stąd)</summary>

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

</details>

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

**Wyjątek "mechanical sweep" (v3)**

Limit 3 plików dziennie zakłada, że każda zmiana to decyzja redakcyjna. Dla zmian **czysto
mechanicznych** — jednolinijkowych, identycznych co do wzorca w każdym pliku, bez cienia oceny
redakcyjnej — limit blokuje naprawę, której inaczej zrobić się nie da. Sweep jest dozwolony
**raz w tygodniu**, jako osobna akcja Rule 6, gdy spełnione są **wszystkie** warunki:

- zmiana jest identyczna co do wzorca we wszystkich plikach (dałaby się zrobić `sed`-em)
- **nie dotyka treści widocznej dla użytkownika** ani `<title>`/`<meta description>`
- da się zweryfikować jednym greppem przed i po, a `npm run build` przechodzi
- log wymienia **każdy** zmieniony plik

> **Otwarty przypadek (2026-08-10) — niedopasowanie canonicali.** `next.config.ts` ma
> `trailingSlash: true`, więc serwer 308-uje `/x` → `/x/`, ale **wszystkie 40 canonicali w repo
> wskazują formę bez slasha** (`alternates: { canonical: ".../blog/x" }`). Google dostaje
> sprzeczny sygnał i indeksuje niekonsekwentnie: `/blog/surf-coaching-video-analysis-canggu`
> raportuje się w **obu** formach naraz (15 impr @ 6.2 ze slashem, 5 @ 17.4 bez), a
> `/blog/best-time-to-surf-canggu` (30 impr) i `/surf-lessons-canggu` (27 impr) są zaindeksowane
> **wyłącznie** bez slasha. `next.config.ts` jest na zakaz-liście, więc jedyną dozwoloną naprawą
> jest sweep canonicali do formy ze slashem. To pierwszy zaplanowany sweep.

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
- ❌ nie usuwa treści (tylko dodaje/przepisuje) — **jedyny wyjątek: zwężanie pod Rule 1-B**,
  max jedna sekcja na akcję, treść oddana linkiem a nie skasowana, wszystko wypisane w logu
- ❌ nie robi content rewrite istniejącego bloga ani landing page całościowo — tylko surgical edits
- ❌ nie rusza `docs/seo-strategy.md`, `docs/LOCAL_PACK_STRATEGY.md`
- ❌ nie zmienia URLi istniejących stron (break canonical/sitemap)
- ❌ nie commituje więcej niż 3 plików dziennie (wyjątki: 1 nowy post MDX = 1 plik;
  **mechanical sweep** wg definicji w Rule 6 — max raz w tygodniu)
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
