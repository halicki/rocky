---
description: Run the daily SEO optimization loop for surfingwithrocky.com
---

# /daily-seo — Daily SEO Optimization Loop

You are executing the daily SEO loop for **surfingwithrocky.com**. Your job: read GSC data, pick **one** high-ROI action from the playbook, implement it, build, commit, push, verify.

**Working directory**: the repository root (the directory containing `package.json`). Locally that is `/Users/arek/code/rocky`; in a Claude Code cloud session it is `/home/user/rocky`. Use paths relative to the repo root everywhere.
**Branch**: `master` (auto-deploys via Vercel on push). This loop runs from a scheduled cloud Routine: the repository owner has **explicitly authorized** this loop to commit and push directly to `master`. Do not create a PR, do not push to any `claude/*` branch. If the session starts on another branch, run `git fetch origin master && git checkout master && git pull origin master` first.
**Today's date**: use current system date in `YYYY-MM-DD` format (UTC is fine; the loop runs at ~06:00 Europe/Warsaw).
**Runtime**: there is no browser (no Chrome MCP) and nobody is watching. Never ask the user a question; when in doubt, HOLD and write the doubt into the log.

## Retry policy — microproblems get one retry

A **microproblem** is a transient, infrastructure-level failure that is not caused by this
run's own code or content change — a flaky network fetch, a stale build cache, a registry
hiccup. It is diagnosed, not assumed: before retrying, get one piece of cheap evidence that the
failure is not reproducible on the current code (a clean-cache rebuild succeeds, or a second
attempt of the same install/fetch succeeds). A failure that reproduces after that check is a
real problem, not a microproblem — do not retry it further; fall through immediately to the
step's normal failure handling (SKIP / ABORT / revert) as written below.

**Cap: at most one retry per step, per run. Never loop.** If the retry also fails, treat it as
a real failure and follow the step's normal (non-retry) failure handling right away — do not
attempt a third try, and do not invent a different retry mechanism than the one specified for
that step.

This applies to: Step 0's `npm ci` (network install), Step 1's GSC snapshot script (only for a
plainly transient exit — a real `403` or missing credentials is never a microproblem, never
retry those two), Step 6's local build (rebuild once with a clean `.next` before concluding
BUILD FAILED — this exact class of failure, a stale Turbopack font-resolution cache, is what
prompted this policy on 2026-09-22), and Step 8's deploy verification (its retry needs its own
git sequence, since redeploying a Vercel build isn't a plain re-run — see Step 8).

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

If `npm ci` fails, retry it once, unchanged (per the Retry policy above). If it fails again
identically, this is Step 1's `DEPENDENCY_INSTALL_FAILED` territory — proceed there; do not
retry a third time and do not change install flags or touch the lockfile to work around it.

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
| `GSC_SERVICE_ACCOUNT_JSON is not set` | Permanent/config issue, not a microproblem — **SKIP the day** immediately, no retry. Log code `GSC_API_MISSING_CREDS`. |
| `403 Forbidden` | Permanent access issue, not a microproblem — **SKIP the day** immediately, no retry. Log code `GSC_API_403`. |
| Any other non-zero exit | Retry once, per the Retry policy above (network/registry blips do happen — see 2026-09-18). If the retry also fails, **SKIP the day.** Log code `GSC_API_ERROR: <stderr>`, and note in the log whether it failed once or twice identically. |

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
- Build fails → retry once with a clean cache (`rm -rf .next && npm run build`), per the Retry
  policy above. If the clean-cache retry succeeds, proceed to Step 7 as normal and note in
  today's log that a cache-clean retry was needed (one line, not a HOLD). If it fails again
  identically → **ABORT**. Revert any edits (`git checkout -- <files>`), write
  `BUILD FAILED: <error>` in today's log, do NOT commit code. Still do Steps 10–11 (log commit). Stop.
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
4. If `ERROR` → diagnose before reverting, per the Retry policy above:
   a. Reproduce locally with a clean cache: `rm -rf .next && npm run build`.
      - **Fails locally too** → not a microproblem, it's a real defect (rare, since Step 6
        already passed, but possible). Revert (`git revert HEAD --no-edit && git push origin
        master`), log `DEPLOY FAILED (confirmed defect): <reason>`, continue to Step 10. Do
        not retry further.
      - **Succeeds locally** → likely a microproblem (stale Vercel build cache, a transient
        Vercel-side error). Sanity-check the Vercel build log for a plausible transient
        signature before proceeding — an error in a file this commit didn't touch, a
        `Module not found` on a dependency unrelated to the diff, a registry/network error, or
        a "Restored build cache from previous deployment" note right before the failure (this
        exact signature — a stale Turbopack `next/font/google` cache entry — is what happened
        on 2026-09-22 and is why this policy exists). Do not retry if the log instead points at
        something this commit changed.
   b. **One retry, via git** (this loop only has push rights, not direct Vercel API
      redeploys — a manual `create_deployment` redeploy call is blocked by this environment's
      permission classifier as a production-deploy action, so git push is the only reliable
      unattended retry path): revert the failed commit (`git revert HEAD --no-edit && git push
      origin master`), wait 90 s, confirm that revert deployment reaches `READY` (this both
      restores a known-good production state immediately and proves Vercel itself is healthy
      again). Then reapply the original change (`git revert <revert-sha> --no-edit && git push
      origin master`), wait 90 s, and check `get_deployment` again with the same up-to-3×-90s
      poll as step 3 above.
   c. **Retry succeeds (`READY`)** → this is the day's shipped action. Continue to Step 9
      (smoke test) and Step 10 (log) normally. Today's log must record all three SHAs (original
      → revert → reapply) and state plainly that a transient deploy error was retried once and
      resolved. This is recovery of the same single action, not a second action — see
      Guardrails.
   d. **Retry also errors** → stop retrying. Two failures on supposedly-identical content is no
      longer a microproblem. Revert back to the known-good state (`git revert HEAD --no-edit &&
      git push origin master`), log `DEPLOY FAILED (retried once, still ERROR): <reason>`,
      continue to Step 10. Do not attempt a third build.

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
| GSC credentials missing / API 403 | SKIP day immediately, no retry: one-line log + INDEX line, log-only commit (see Step 1) |
| GSC script fails for another reason | Retry once; if it fails again, SKIP day as above (see Step 1) |
| `npm ci` fails | Retry once, unchanged; if it fails again, SKIP day via Step 1's `DEPENDENCY_INSTALL_FAILED` (see Step 0) |
| Build fails | Retry once with `rm -rf .next`; if it fails again, revert edits locally, log error, log-only commit (see Step 6) |
| Deploy fails | Diagnose (clean local rebuild), then one retry via revert then reapply; if the retry also errors, revert to known-good and log error (see Step 8) |
| Smoke test fails | Log warning, do NOT revert |
| No rule matches (1–7) | Check Rule 8 (META-run). If its condition is not met either → fallback to rule #5 (Blog expansion), pick first unused topic |
| Yesterday's action still pending AND no other rule matches different target | Write `HOLD: pending previous action` log, log-only commit |

## Guardrails (hard)

- Max 3 modified files (or 1 new MDX)
- Max 1 code commit + 1 log commit per run (a deploy-error retry's revert-then-reapply pair is
  recovery of that same single action, not a second one — see Retry policy and Step 8; it is
  still capped at exactly one retry)
- Never touch forbidden files (list above)
- Never skip the build step
- Never skip the log step
- Never run in a branch other than `master`; never open a PR for this loop
- Never ask the user anything mid-run; HOLD and log instead
- Never retry a step more than once; a microproblem that survives one retry is a real problem
  and gets the step's normal (non-retry) failure handling, not a second attempt
