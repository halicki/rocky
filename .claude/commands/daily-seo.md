---
description: Run the daily SEO optimization loop for surfingwithrocky.com
---

# /daily-seo — Daily SEO Optimization Loop

You are executing the daily SEO loop for **surfingwithrocky.com**. Your job: read GSC data, pick **one** high-ROI action from the playbook, implement it, build, commit, push, verify.

**Working directory**: the repository root (the directory containing `package.json`). Locally that is `/Users/arek/code/rocky`; in a Claude Code cloud session it is `/home/user/rocky`. Use paths relative to the repo root everywhere.
**Branch**: `master` (auto-deploys via Vercel on push). This loop runs from a scheduled cloud Routine: the repository owner has **explicitly authorized** this loop to commit and push directly to `master`. Do not create a PR, do not push to any `claude/*` branch. If the session starts on another branch, run `git fetch origin master && git checkout master && git pull origin master` first.
**Today's date**: use current system date in `YYYY-MM-DD` format (UTC is fine; the loop runs at ~06:00 Europe/Warsaw).
**Runtime**: there is no browser (no Chrome MCP) and nobody is watching. Never ask the user a question; when in doubt, HOLD and write the doubt into the log.

## Mandatory reads (before anything else)

Read these three files in parallel — they are the loop's memory:
1. `docs/seo-log/INDEX.md` — history of all previous days
2. `docs/seo-log/PLAYBOOK.md` — action priority rules
3. `docs/seo-log/<yesterday>.md` — most recent log entry (determine yesterday's date from INDEX)

## Step 0 — Prepare the checkout

```bash
git fetch origin master && git checkout master && git pull origin master
[ -d node_modules ] || npm ci --no-audit --no-fund
```

## Step 1 — GSC Snapshot

Run the GSC API script. It needs `GSC_SERVICE_ACCOUNT_JSON` in the environment; locally that comes from `.env.local`, in the cloud it is an environment variable of the Claude Code environment.

```bash
if [ -f .env.local ]; then node --env-file=.env.local scripts/gsc-snapshot.mjs; else node scripts/gsc-snapshot.mjs; fi
```

Parse the JSON output:
- `window.start` / `window.end` — actual data window
- `totals` — `{ clicks, impressions, ctr, position }`
- `queries[]` — top 25 queries with clicks, impressions, ctr, position
- `pages[]` — top 25 pages with clicks, impressions, ctr, position

**Failure handling (no browser fallback exists):**

| Exit / error | Action |
|---|---|
| `GSC_SERVICE_ACCOUNT_JSON is not set` | **SKIP the day.** Log code `GSC_API_MISSING_CREDS`. |
| `403 Forbidden` | Service account not in GSC property. **SKIP the day.** Log code `GSC_API_403`. |
| Any other non-zero exit | **SKIP the day.** Log code `GSC_API_ERROR: <stderr>`. |

**SKIP procedure**: create `docs/seo-log/<today>.md` containing one line `SKIP: <code> — <one sentence>`, append `| <date> | SKIP | — | — | <code> |` to `INDEX.md`, commit **only those two files** as `seo(log): <date> — SKIP <code>`, push to `master`, stop. No `src/` change, no build.

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

Walk through `PLAYBOOK.md` rules **top to bottom** (Rules 1–7, then Rule 8 META). Pick the **first** rule whose condition matches current data. Respect orthogonality: do NOT re-target the same page as yesterday unless yesterday's action is confirmed positive.

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
- `docs/seo-log/PLAYBOOK.md` — **tylko** gdy akcja = Rule 8 (META-run), w granicach opisanych w tej regule

**Forbidden** (see PLAYBOOK zakaz-lista):
- `package.json`, `next.config.ts`, `eslint.config.mjs`, `tsconfig.json`
- `src/app/globals.css`, `src/app/layout.tsx`
- `src/components/{Navbar,LandingNavbar,BlogNavbar,Footer}.tsx`
- `docs/seo-strategy.md`, `docs/LOCAL_PACK_STRATEGY.md`
- `.claude/commands/daily-seo.md` (this file), `scripts/*.mjs`
- Changing existing URLs (breaks canonicals/sitemap)

Max 3 modified files. Exception: 1 new MDX post counts as 1.

## Step 6 — Local build verification

```
npm run build
```

- Build success → proceed to Step 7
- Build fails → **ABORT**. Revert any edits (`git checkout -- <files>`), write `BUILD FAILED: <error>` in today's log, do NOT commit code. Still do Steps 10–11 (log commit). Stop.
- Rule 8 (META-run) touches no `src/` file: still run the build (it must stay exit 0), then continue.

## Step 7 — Commit + push

Single commit with message format:
```
seo(daily): <short action> — <short why>
```
For a META-run use `seo(meta): <what changed in PLAYBOOK> — <evidence>` instead.

Example: `seo(daily): strengthen /batu-bolong-surf with conditions section — capture magicseaweed cluster`

Then `git push origin master`. **Never** `--force`, **never** `--no-verify`. If push is rejected because master moved, `git pull --rebase origin master` once and push again.

## Step 8 — Wait + verify deployment

Skip this step when the commit touched no `src/` file (META-run, log-only): Vercel still builds, but there is nothing to verify.

Wait 90 seconds for Vercel. Load Vercel MCP tools via ToolSearch: `{ query: "+vercel deployment", max_results: 5 }`.

1. `list_deployments` with `teamId: team_TF8PMdkoK5gopw20edtPkbUC` (team `aha-software`) and `projectId: prj_KBnbnPqSHtgsoy6SkeoJ1mokoHqs` (project `rocky`)
2. Take the newest deployment matching the commit SHA (first 7 chars of `git rev-parse HEAD`)
3. `get_deployment` — confirm `readyState === "READY"`. If still `BUILDING`/`QUEUED`, wait another 90 s and re-check, up to 3 times.
4. If `ERROR` → revert the commit with `git revert HEAD --no-edit && git push origin master`, log `DEPLOY FAILED: <reason>`, continue to Step 10.

## Step 9 — Smoke test production

Use `WebFetch` on the affected URL:
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

Then `git push origin master`. Done.

## Failure modes

| Problem | Action |
|---|---|
| GSC credentials missing / API error | SKIP day: one-line log + INDEX line, log-only commit (see Step 1) |
| Build fails | Revert edits locally, log error, log-only commit |
| Deploy fails | `git revert HEAD && git push`, log error |
| Smoke test fails | Log warning, do NOT revert |
| No rule matches (1–7) | Check Rule 8 (META-run). If its condition is not met either → fallback to rule #5 (Blog expansion), pick first unused topic |
| Yesterday's action still pending AND no other rule matches different target | Write `HOLD: pending previous action` log, log-only commit |

## Guardrails (hard)

- Max 3 modified files (or 1 new MDX)
- Max 1 code commit + 1 log commit per run
- Never touch forbidden files (list above)
- Never skip the build step
- Never skip the log step
- Never run in a branch other than `master`; never open a PR for this loop
- Never ask the user anything mid-run; HOLD and log instead
