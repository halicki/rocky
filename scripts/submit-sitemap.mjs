#!/usr/bin/env node
/**
 * Submit sitemap.xml to Google Search Console.
 *
 * Auto-runs after `next build` via the `postbuild` npm hook. Guarded to Vercel
 * production builds only; non-fatal so a GSC hiccup never breaks a deploy.
 *
 * Manual / testing:
 *   FORCE_SITEMAP_SUBMIT=1 npm run gsc:submit
 *
 * Env (set in Vercel → Production):
 *   GSC_SERVICE_ACCOUNT_JSON  — full service-account JSON key as a string (required)
 *   GSC_SITE_URL              — (optional) default sc-domain:surfingwithrocky.com
 *   GSC_SITEMAP_URL           — (optional) default https://surfingwithrocky.com/sitemap.xml
 */

import { google } from "googleapis";

const SITE_URL    = process.env.GSC_SITE_URL    ?? "sc-domain:surfingwithrocky.com";
const SITEMAP_URL = process.env.GSC_SITEMAP_URL ?? "https://surfingwithrocky.com/sitemap.xml";

async function main() {
  // Only on Vercel production builds (or forced locally for testing).
  const forced = process.env.FORCE_SITEMAP_SUBMIT === "1";
  if (process.env.VERCEL_ENV !== "production" && !forced) {
    console.log(`[sitemap] skip — not production (VERCEL_ENV=${process.env.VERCEL_ENV ?? "unset"})`);
    return;
  }

  const credJson = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!credJson) {
    console.warn("[sitemap] skip — GSC_SERVICE_ACCOUNT_JSON not set");
    return;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(credJson),
    scopes: ["https://www.googleapis.com/auth/webmasters"], // WRITE scope (submit)
  });
  const sc = google.searchconsole({ version: "v1", auth });

  await sc.sitemaps.submit({ siteUrl: SITE_URL, feedpath: SITEMAP_URL });
  console.log(`[sitemap] submitted ${SITEMAP_URL} → ${SITE_URL}`);
}

main().catch((err) => {
  const code = err?.code ?? err?.status;
  console.warn(`[sitemap] submit failed (non-fatal): ${code ?? ""} ${err?.message ?? err}`);
  if (code === 403) {
    console.warn(
      "[sitemap] 403 → service account likely needs OWNER permission on the GSC property\n" +
      "  (Search Console → Settings → Users and permissions → set the service-account e-mail to Owner).",
    );
  }
  // exit 0 — never fail the build
});
