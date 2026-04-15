---
description: Run the daily SEO optimization loop for surfingwithrocky.com
---

# /daily-seo — Daily SEO Optimization Loop

You are executing the daily SEO loop for **surfingwithrocky.com**. Your job: read GSC data, pick **one** high-ROI action from the playbook, implement it, build, commit, push, verify.

**Working directory**: `/Users/arek/code/rocky`
**Branch**: `master` (auto-deploys via Vercel on push)
**Today's date**: use current system date in `YYYY-MM-DD` format.

## Mandatory reads (before anything else)

Read these three files in parallel — they are the loop's memory:
1. `docs/seo-log/INDEX.md` — history of all previous days
2. `docs/seo-log/PLAYBOOK.md` — action priority rules
3. `docs/seo-log/<yesterday>.md` — most recent log entry (determine yesterday's date from INDEX)

## Step 1 — GSC Snapshot

Run the GSC API script:

```bash
cd /Users/arek/code/rocky && node --env-file=.env.local scripts/gsc-snapshot.mjs
```

Parse the JSON output:
- `window.start` / `window.end` — actual data window
- `totals` — `{ clicks, impressions, ctr, position }`
- `queries[]` — top 25 queries with clicks, impressions, ctr, position
- `pages[]` — top 25 pages with clicks, impressions, ctr, position

**Failure handling:**

| Exit / error | Action |
|---|---|
| `GSC_SERVICE_ACCOUNT_JSON is not set` | Fall back to Chrome MCP (see below). Log `GSC_API_MISSING_CREDS`. |
| `403 Forbidden` | Service account not in GSC property. Log `GSC_API_403`. Fall back to Chrome MCP. |
| Any other non-zero exit | Log `GSC_API_ERROR: <stderr>`. Fall back to Chrome MCP. |

**Chrome MCP fallback** (use only if API script fails):

Load tools via ToolSearch: `{ query: "+chrome", max_results: 10 }`.
1. `tabs_context_mcp` with `createIfEmpty: true`
2. Navigate to: `https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Asurfingwithrocky.com&hl=pl&num_of_days=28`
3. `get_page_text` → parse totals + queries table
4. Click "Strony" tab → wait 2s → `get_page_text` → parse pages table
5. If page shows "Zaloguj się" / "Sign in" / empty data → **ABORT**. Write one-line log: `SKIP: GSC not authenticated — user must re-login`. No commit. Stop.

## Step 2 — Compare with yesterday

Diff each top query:
- **Δ clicks**, **Δ impressions**, **Δ position** vs yesterday's log
- Note any query that appeared/disappeared
- Note any query that moved >5 positions

## Step 3 — Evaluate previous action impact

Read yesterday's `action` and `target` from yesterday's log. Check if related queries moved:
- Moved favorably in the intended direction → write `IMPACT: confirmed positive` in today's log
- No change → `IMPACT: pending (normal 2–7 day crawl delay)`
- Moved negatively → `IMPACT: regression — investigate` + flag in INDEX.md

## Step 4 — Pick today's action

Walk through `PLAYBOOK.md` rules **top to bottom**. Pick the **first** rule whose condition matches current data. Respect orthogonality: do NOT re-target the same page as yesterday unless yesterday's action is confirmed positive.

Write the chosen action as:
```
ACTION: <rule number> — <one-line description>
TARGET: <file path or "new: <path>">
RATIONALE: <one line why this rule, why this target>
HYPOTHESIS: <what GSC metric should improve by when>
```

## Step 5 — Implement

**Only the chosen change. Nothing else.** Allowed scope:
- `src/app/**/page.{tsx,mdx}`
- `src/lib/blog.ts` (when adding a new post)
- `src/components/ArticleSchema.tsx`, `src/components/StructuredData.tsx`, `src/components/FAQ.tsx` — dodawanie nowych instancji OK; nie modyfikować logiki komponentu bez potrzeby
- `src/components/landing/ExploreMoreLinks.tsx` — tylko gdy akcja = internal linking
- `src/app/sitemap.ts` — tylko gdy dodajesz nowy route, który nie jest auto-wykryty

**Forbidden** (see PLAYBOOK zakaz-lista):
- `package.json`, `next.config.ts`, `eslint.config.mjs`, `tsconfig.json`
- `src/app/globals.css`, `src/app/layout.tsx`
- `src/components/{Navbar,LandingNavbar,BlogNavbar,Footer}.tsx`
- `docs/seo-strategy.md`, `docs/LOCAL_PACK_STRATEGY.md`
- Changing existing URLs (breaks canonicals/sitemap)

Max 3 modified files. Exception: 1 new MDX post counts as 1.

## Step 6 — Local build verification

```
cd /Users/arek/code/rocky && npm run build
```

- Build success → proceed to Step 7
- Build fails → **ABORT**. Revert any edits (`git checkout -- <files>`), write `BUILD FAILED: <error>` in today's log, do NOT commit. Stop.

## Step 7 — Commit + push

Single commit with message format:
```
seo(daily): <short action> — <short why>
```

Example: `seo(daily): strengthen /batu-bolong-surf with conditions section — capture magicseaweed cluster`

Then `git push origin master`. **Never** `--force`, **never** `--no-verify`.

## Step 8 — Wait + verify deployment

Wait 90 seconds for Vercel. Load Vercel MCP tools via ToolSearch: `{ query: "+vercel deployment", max_results: 5 }`.

1. `list_deployments` for project `surfingwithrocky` (or find via `list_projects`)
2. Take the newest deployment matching the commit SHA (first 7 chars of `git rev-parse HEAD`)
3. `get_deployment` — confirm `readyState === "READY"`
4. If `ERROR` → revert the commit with `git revert HEAD --no-edit && git push`, log `DEPLOY FAILED: <reason>`, stop.

## Step 9 — Smoke test production

Use `WebFetch` (or Chrome MCP) on the affected URL:
- For metadata change: grep the new title/description in the HTML response
- For new schema: grep for the `@type` value in `<script type="application/ld+json">`
- For new page: confirm 200 status and presence of a known string

If smoke test fails → log `SMOKE FAILED: <what>`, do NOT revert (content is live, just note for investigation).

## Step 10 — Log today

Create `docs/seo-log/<today>.md` with this structure:

```markdown
# <YYYY-MM-DD> — <short title>

**Day**: N (auto: baseline = day 0)
**Previous action impact**: <confirmed|pending|regression>

## GSC Snapshot (28-day window)

### Totals
- Clicks: X (Δ +/-N)
- Impressions: X (Δ +/-N)
- CTR: X% (Δ +/-N)
- Avg position: X.X (Δ +/-N)

### Top queries
| Query | Clicks | Impr | CTR | Pos | Δ Pos |
...

### Top pages
| Page | Clicks | Impr | CTR | Pos |
...

## Action chosen

ACTION: ...
TARGET: ...
RATIONALE: ...
HYPOTHESIS: ...

## Implementation

Files changed:
- path/to/file.tsx — <what changed>

Commit: <sha>
Deployment: <url> (READY)
Smoke test: <pass/fail + evidence>

## Notes for tomorrow

<any observations, follow-up candidates>
```

Append one line to `docs/seo-log/INDEX.md`:
```
| <date> | <rule#> | <target> | <sha> | <one-line note> |
```

## Step 11 — Commit the log

Second commit (log only):
```
seo(log): <date> — <action summary>
```

Then `git push`. Done.

## Failure modes

| Problem | Action |
|---|---|
| GSC not logged in | Skip day, single-line log entry, no commit |
| Build fails | Revert edits locally, log error, no commit |
| Deploy fails | `git revert HEAD && git push`, log error |
| Smoke test fails | Log warning, do NOT revert |
| No rule matches | Fallback to rule #5 (Blog expansion), pick first unused topic |
| Yesterday's action still pending AND no other rule matches different target | Write `HOLD: pending previous action` log, no commit |

## Guardrails (hard)

- Max 3 modified files (or 1 new MDX)
- Max 1 code commit + 1 log commit per run
- Never touch forbidden files (list above)
- Never skip the build step
- Never skip the log step
- Never run in a branch other than `master`
