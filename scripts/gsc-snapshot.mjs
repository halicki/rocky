#!/usr/bin/env node
/**
 * GSC Snapshot — fetches all available Google Search Console data.
 *
 * Usage:
 *   node scripts/gsc-snapshot.mjs [--days 28]
 *   node --env-file=.env.local scripts/gsc-snapshot.mjs
 *   npm run gsc:snapshot
 *
 * Required env vars:
 *   GSC_SERVICE_ACCOUNT_JSON  — full service-account JSON key as a string
 *   GSC_SITE_URL              — (optional) defaults to sc-domain:surfingwithrocky.com
 *
 * Output keys:
 *   window, totals, queries, pages,
 *   by_device, by_country, by_date, by_search_type,
 *   index_coverage (page status summary)
 */

import { google } from 'googleapis';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const SITE_URL     = process.env.GSC_SITE_URL ?? 'sc-domain:surfingwithrocky.com';
const SITE_URL_SC  = process.env.GSC_SITE_URL_SC ?? 'https://surfingwithrocky.com/'; // for URL-inspection / sitemaps API

const DAYS = (() => {
  const idx = process.argv.indexOf('--days');
  return idx !== -1 ? parseInt(process.argv[idx + 1], 10) : 28;
})();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toDateStr(d) {
  return d.toISOString().slice(0, 10);
}

function dateWindow(days) {
  const end = new Date();
  end.setDate(end.getDate() - 3); // GSC has ~3-day processing lag
  const start = new Date(end);
  start.setDate(start.getDate() - (days - 1));
  return { start: toDateStr(start), end: toDateStr(end) };
}

/** Parse a row that has dimension keys[] + metrics */
function parseRows(rows, keyNames) {
  return (rows ?? []).map((row) => {
    const obj = {};
    keyNames.forEach((k, i) => { obj[k] = row.keys?.[i] ?? null; });
    obj.clicks      = row.clicks      ?? 0;
    obj.impressions = row.impressions ?? 0;
    obj.ctr         = +((( row.ctr      ?? 0) * 100).toFixed(1));
    obj.position    = +(( row.position  ?? 0).toFixed(1));
    return obj;
  });
}

/** Parse a dimensionless aggregate row (no keys[]) */
function parseTotalsRow(row) {
  if (!row) return { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  return {
    clicks:      row.clicks      ?? 0,
    impressions: row.impressions ?? 0,
    ctr:         +(((row.ctr      ?? 0) * 100).toFixed(2)),
    position:    +( (row.position ?? 0).toFixed(1)),
  };
}

/** Safe query — returns rows or [] on any error */
async function safeQuery(sc, siteUrl, body, label) {
  try {
    const res = await sc.searchanalytics.query({ siteUrl, requestBody: body });
    return res.data.rows ?? [];
  } catch (err) {
    process.stderr.write(`[WARN] ${label}: ${err.message}\n`);
    return [];
  }
}

/** Safe sitemaps list */
async function safeSitemaps(sc, siteUrl) {
  try {
    const res = await sc.sitemaps.list({ siteUrl });
    return (res.data.sitemap ?? []).map((s) => ({
      path:          s.path,
      lastSubmitted: s.lastSubmitted,
      lastDownloaded: s.lastDownloaded,
      isPending:     s.isPending,
      isSitemapsIndex: s.isSitemapsIndex,
      warnings:      s.warnings ?? 0,
      errors:        s.errors   ?? 0,
      contents: (s.contents ?? []).map((c) => ({
        type:      c.type,
        submitted: c.submitted,
        indexed:   c.indexed,
      })),
    }));
  } catch (err) {
    process.stderr.write(`[WARN] sitemaps: ${err.message}\n`);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // 1. Validate credentials
  const credJson = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!credJson) {
    console.error(
      'ERROR: GSC_SERVICE_ACCOUNT_JSON is not set.\n' +
      'See .env.local.example for setup instructions.',
    );
    process.exit(1);
  }

  let credentials;
  try {
    credentials = JSON.parse(credJson);
  } catch {
    console.error('ERROR: GSC_SERVICE_ACCOUNT_JSON is not valid JSON.');
    process.exit(1);
  }

  // 2. Auth
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const sc = google.searchconsole({ version: 'v1', auth });

  // 3. Date window
  const { start, end } = dateWindow(DAYS);

  const base = { startDate: start, endDate: end, dataState: 'all' };

  // 4. Fire all requests in parallel
  const [
    totalsRows,
    queriesRows,
    pagesRows,
    deviceRows,
    countryRows,
    dateRows,
    imgRows,
    videoRows,
    discoverRows,
    newsRows,
    sitemaps,
  ] = await Promise.all([
    // Web search — core
    safeQuery(sc, SITE_URL, { ...base, rowLimit: 1 },                                      'totals'),
    safeQuery(sc, SITE_URL, { ...base, dimensions: ['query'],   rowLimit: 500 },           'queries'),
    safeQuery(sc, SITE_URL, { ...base, dimensions: ['page'],    rowLimit: 500 },           'pages'),

    // Web search — breakdowns
    safeQuery(sc, SITE_URL, { ...base, dimensions: ['device'],  rowLimit: 10  },           'by_device'),
    safeQuery(sc, SITE_URL, { ...base, dimensions: ['country'], rowLimit: 50  },           'by_country'),
    safeQuery(sc, SITE_URL, { ...base, dimensions: ['date'],    rowLimit: DAYS },          'by_date'),

    // Other search types — aggregate only
    safeQuery(sc, SITE_URL, { ...base, type: 'image',    rowLimit: 1 },                   'image_totals'),
    safeQuery(sc, SITE_URL, { ...base, type: 'video',    rowLimit: 1 },                   'video_totals'),
    safeQuery(sc, SITE_URL, { ...base, type: 'discover', rowLimit: 1 },                   'discover_totals'),
    safeQuery(sc, SITE_URL, { ...base, type: 'news',     rowLimit: 1 },                   'news_totals'),

    // Index coverage — sitemaps
    safeSitemaps(sc, SITE_URL),
  ]);

  // 5. Assemble
  const allSearchTypes = [
    { type: 'web',      ...parseTotalsRow(totalsRows[0])   },
    { type: 'image',    ...parseTotalsRow(imgRows[0])      },
    { type: 'video',    ...parseTotalsRow(videoRows[0])    },
    { type: 'discover', ...parseTotalsRow(discoverRows[0]) },
    { type: 'news',     ...parseTotalsRow(newsRows[0])     },
  ].filter((r) => r.impressions > 0);

  const result = {
    window: { start, end, days: DAYS },

    // ---- Search performance ------------------------------------------------
    totals:  parseTotalsRow(totalsRows[0]),
    queries: parseRows(queriesRows, ['query']),
    pages:   parseRows(pagesRows,   ['page']),

    // ---- Breakdowns --------------------------------------------------------
    by_device:      parseRows(deviceRows,  ['device']),
    by_country:     parseRows(countryRows, ['country']),
    by_date:        parseRows(dateRows,    ['date']),
    by_search_type: allSearchTypes,

    // ---- Index coverage ----------------------------------------------------
    // sitemaps[].contents[].{ type, submitted, indexed }
    // submitted vs indexed gap = pages not yet indexed
    sitemaps,
  };

  console.log(JSON.stringify(result, null, 2));
}

main().catch((err) => {
  if (err.code === 403 || err.status === 403) {
    console.error(
      'GSC API 403 Forbidden.\n' +
      '→ Add the service account e-mail as "Full User" in GSC:\n' +
      '  Search Console → Settings → Users and permissions → Add user\n' +
      `  Service account e-mail is in GSC_SERVICE_ACCOUNT_JSON under "client_email"`,
    );
  } else if (err.code === 404 || err.status === 404) {
    console.error(
      `GSC API 404 — property not found: ${SITE_URL}\n` +
      '→ Check GSC_SITE_URL. Domain properties use the sc-domain: prefix.',
    );
  } else {
    console.error('GSC API error:', err.message);
  }
  process.exit(1);
});
