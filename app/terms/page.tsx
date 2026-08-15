import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { stealAnEgg } from "@/lib/games/steal-an-egg";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms — Upvane",
  description: "Terms of use for the unofficial Upvane Roblox game guides.",
  alternates: { canonical: `${SITE_ORIGIN}/terms` },
};

export default function TermsPage() {
  return (
    <SiteShell current="legal">
      <main id="content" className="wrap legal">
        <p className="kicker">Legal</p>
        <h1>Terms</h1>
        <p className="meta">Last updated 2026-08-15. Unofficial fan site.</p>
        <p>
          {SITE_NAME} is unofficial. It is not affiliated with, endorsed by, or
          sponsored by Roblox Corporation or {stealAnEgg.developer}.
        </p>
        <p>
          Pages are informational only. Facts are dated. Game features, codes,
          and pet data can change without notice. We do not warrant completeness
          or accuracy.
        </p>
        <p>
          Roblox is a trademark of Roblox Corporation. Game names and related
          marks belong to their owners. Use Roblox under Roblox’s own terms.
        </p>
        <p>
          Do not use this site to seek exploits, scripts, generators, or Free
          Robux. Content here must not be treated as official patch notes or as
          an in-game Index.
        </p>
      </main>
    </SiteShell>
  );
}
