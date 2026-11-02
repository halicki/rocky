# 2026-11-02 addendum — the Rule 4 crawl gate, answered from outside the Routine

**Origin**: owner-requested manual run (local session, browser + URL Inspection API available).
Not a second loop action — **no file under `src/` was touched and the daily action budget is
untouched**. Today's scheduled action was Rule 7 (`b9c3b4f`); this addendum is data only.

## Why this exists

Today's log blocked Rule 4 on a gate it cannot open:

> *"remaining ≥20-impr/<2% CTR pages are rescued once with 0 clicks (playbook requires a
> Google-cache check first — **unavailable in this browserless Routine**)"*

That block was correct and it has been blocking Rule 4 since ~10-19. The gate exists because a
zero-click reading on a rescued page means nothing if **Google never re-crawled the new snippet**.
Google Cache was retired in 2024, so the playbook's literal instruction is unexecutable — but the
question behind it is answerable with the **Search Console URL Inspection API**
(`urlInspection.index.inspect` → `indexStatusResult.lastCrawlTime`), which the service account can
already reach. No new credential needed.

## Result: 8 of 13 rescues have been re-crawled, 5 have not

Every rescued page serves its new description live (checked with `curl` against production, all 13
return the post-rescue text), so **deployment is not the problem**. Crawl is.

| Page | Rescued | Last crawl | Gate |
|---|---|---|---|
| `/blog/canggu-surf-forecast/` | 10-08 | **11-02** | ✅ re-crawled |
| `/private-surf-lesson-bali/` | 10-12 | **11-02** | ✅ re-crawled |
| `/blog/` | 10-03 | 10-31 | ✅ re-crawled |
| `/blog/best-time-to-surf-canggu/` | 10-10 | 10-31 | ✅ re-crawled |
| `/surf-lesson-prices-bali/` | 10-04 | 10-27 | ✅ re-crawled |
| `/blog/batu-bolong-beach-canggu-guide/` | 10-09 | 10-25 | ✅ re-crawled |
| `/blog/private-vs-group-surf-lesson-bali/` | 10-06 | 10-24 | ✅ re-crawled |
| `/batu-bolong-surf/` | 10-07 | 10-11 | ✅ re-crawled |
| `/blog/what-to-bring-surf-lesson-bali/` | 10-17 | 10-05 | ❌ **STALE** |
| `/blog/surf-camp-vs-surf-lessons-bali/` | 10-18 | 10-05 | ❌ **STALE** |
| `/blog/canggu-vs-uluwatu-beginners/` | 10-11 | 09-27 | ❌ **STALE** |
| `/blog/canggu-surfing-safe-for-kids/` | 10-05 | 09-14 | ❌ **STALE** |
| `/blog/best-surf-school-bali-how-to-choose/` | 10-02 | **07-29** | ❌ **STALE (95 days before its own rescue)** |

All 13 report `coverageState: "Submitted and indexed"` — indexed is **not** the same as re-crawled,
and that distinction is the whole content of this gate.

## What this changes for the next run

1. **For the 8 re-crawled pages the gate is now OPEN.** Their zero/low-click readings are real
   Rule 4 outcomes and may be scored or re-rescued per the normal rule. The gate does not need
   re-checking per run — re-check a page only when it is about to be actioned.
2. **For the 5 stale pages the gate is CLOSED, and their zero-click readings must not be counted
   as Rule 4 failures.** This is the error the gate was written to prevent, and the loop has been
   carrying these five in its "rescued once with 0 clicks" pool. `best-surf-school-bali-how-to-choose`
   is the extreme case: its last crawl predates its own rescue by 95 days, so the snippet searchers
   see is the pre-rescue one.
3. **Do not treat "stale" as a reason to re-rescue.** A second rewrite of a snippet Google has not
   fetched yet changes nothing it can see. If anything is warranted on the stale five it is crawl
   acquisition (internal links, sitemap freshness), not another title.
4. **Method to reuse, not re-derive**: one `urlInspection.index.inspect` call per page against
   `sc-domain:surfingwithrocky.com`; compare `lastCrawlTime` to the rescue date from `git log` on
   the file. Worth folding into `scripts/gsc-snapshot.mjs` so the Routine stops being blind to it —
   **that is an owner-scope change, flagged not made.**

## Two observations recorded without claims attached

**1. The impression growth is competitor-brand navigational, and it is diluting CTR.**
`msw canggu` 772 + `magicseaweed canggu` 642 + `surfline canggu` 262 + `magicseaweed berawa` 68 +
`canggu surfline` 43 + `magic seaweed canggu` 39 + `msw berawa` 31 + `canggu magicseaweed` 20 =
**1877 impressions, 2 clicks**, i.e. **28% of all site impressions at 0.1% CTR**. Site CTR fell
1.18% → 0.74% across the gap while impressions rose 4840 → 6627. Avg position 13.8 → 9.1 is mostly
this pool ranking well. **Position 9.1 is not a commercial improvement** and should not be reported
as one.

**2. First gate-satisfied reading of a booking CTA on navigational intent — and it is negative.**
The 09-12 run refused a CTR rescue on `/blog/canggu-surf-forecast/` arguing a "Book via WhatsApp"
CTA has a **negative expected sign** on competitor-brand navigational queries. The 10-07 rescue on
`/batu-bolong-surf/` did exactly that ("…Book a lesson on WhatsApp."), and that page **was
re-crawled 10-11**, so the new snippet is what searchers now see:

| | at rescue (10-07) | now (10-03→10-30 window) |
|---|---|---|
| Impressions | 1233 | 1205 |
| CTR | 0.8% | **0.5%** |
| Position | 9.1 | **7.0** |

CTR fell while position *improved* — the direction the 09-12 argument predicted. **This is not a
result**: n is tiny (6 clicks), the pool composition shifted underneath it, and no bar was
pre-registered. It is logged so that a future run can register a proper read instead of
rediscovering the question. **If a read is registered, register the bar before looking again.**

## Correction to this session's own reasoning

This manual run initially concluded the loop was dead (local scheduled task `enabled: false`,
last local log 09-13) and prepared a Rule 4 rescue on `/batu-bolong-surf/` for a 193-char
description. Both were wrong: the loop moved to a **cloud Routine** on 09-13 (`9d2e9a1`) and has
run daily since, and that description was already fixed by the 10-07 rescue. The local branch was
90 commits behind. The prepared commit was discarded unpushed; nothing reached production.
Recorded because "the local checkout is not the loop's state" is a trap the next manual run can
fall into the same way.
