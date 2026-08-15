#!/usr/bin/env node

const KEY = "020c3e7fbd654fe9b601efd4cccb3779";
const HOST = "upvane.com";
const ORIGIN = `https://${HOST}`;
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const SITEMAP = `${ORIGIN}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const wait = process.argv.includes("--wait");

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForKey(timeoutMs = 6 * 60 * 1000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const res = await fetch(KEY_LOCATION, { cache: "no-store" });
      const text = (await res.text()).trim();
      if (res.ok && text === KEY) {
        return;
      }
      console.log(`Key file ${res.status}; waiting for Cloudflare deploy…`);
    } catch {
      console.log("Key file not reachable; waiting for Cloudflare deploy…");
    }
    await sleep(15_000);
  }
  throw new Error(`Timed out waiting for ${KEY_LOCATION}`);
}

function parseSitemap(xml) {
  return [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim()))];
}

async function main() {
  if (wait) {
    await waitForKey();
  } else {
    const res = await fetch(KEY_LOCATION, { cache: "no-store" });
    const text = (await res.text()).trim();
    if (!res.ok || text !== KEY) {
      throw new Error(`Key file not live at ${KEY_LOCATION} (${res.status}). Deploy first or use --wait.`);
    }
  }

  const sitemapRes = await fetch(SITEMAP, { cache: "no-store" });
  if (!sitemapRes.ok) {
    throw new Error(`Could not read sitemap: ${sitemapRes.status}`);
  }
  const urls = parseSitemap(await sitemapRes.text());
  if (urls.length === 0) {
    throw new Error("Sitemap had no URLs.");
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  });
  const text = await res.text();
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow ${res.status}: ${text || "(empty body)"}`);
  }

  console.log(`IndexNow ${res.status} for ${urls.length} URLs`);
  for (const url of urls) {
    console.log(`  ${url}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
