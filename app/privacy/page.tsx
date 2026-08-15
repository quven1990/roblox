import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy — Upvane",
  description: "Privacy policy for the unofficial Upvane Roblox game guides.",
  alternates: { canonical: `${SITE_ORIGIN}/privacy` },
};

export default function PrivacyPage() {
  return (
    <SiteShell current="legal">
      <main id="content" className="wrap legal">
        <p className="kicker">Legal</p>
        <h1>Privacy</h1>
        <p className="meta">Last updated 2026-08-15. Unofficial fan site.</p>
        <p>
          {SITE_NAME} publishes unofficial guides for Roblox games. This version
          of the site has no accounts, no membership, and no analytics IDs
          configured.
        </p>
        <p>
          We do not collect account credentials, Roblox passwords, or payment
          details. We do not sell Robux and we do not run generators.
        </p>
        <p>
          This static site does not set advertising or analytics cookies. If you
          follow a link to Roblox or another third-party site, that site’s
          privacy policy applies.
        </p>
        <p>
          Your browser may still send standard request data (such as IP address
          and user agent) to the host that serves these pages. We do not use
          that data to identify you.
        </p>
      </main>
    </SiteShell>
  );
}
