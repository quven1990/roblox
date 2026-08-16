import { SiteShell } from "@/components/SiteShell";
import {
  SITE_CONTACT_EMAIL,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_PRIVACY_EMAIL,
  pageMetadata,
} from "@/lib/site";

export const metadata = pageMetadata(
  "Terms — Upvane",
  "Terms of use for the unofficial Upvane Roblox game guides.",
  "/terms",
);

export default function TermsPage() {
  return (
    <SiteShell current="legal">
      <main id="content" className="wrap legal">
        <p className="kicker">Legal</p>
        <h1>Terms</h1>
        <p className="meta">Last updated 2026-08-16. Unofficial fan site.</p>

        <p>
          By using {SITE_NAME} ({SITE_ORIGIN}) you agree to these terms. They
          describe a free unofficial fan site. They are not legal advice and they
          are not a Roblox or developer contract.
        </p>

        <h2>Contact</h2>
        <p>
          General:{" "}
          <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>.
          Privacy:{" "}
          <a href={`mailto:${SITE_PRIVACY_EMAIL}`}>{SITE_PRIVACY_EMAIL}</a>.
        </p>

        <h2>Unofficial site</h2>
        <p>
          {SITE_NAME} is unofficial. It is not affiliated with, endorsed by, or
          sponsored by Roblox Corporation or the developers of games covered
          here. Titles that say “wiki” mean fan notes. They are not the in-game
          Index and they are not official patch notes.
        </p>

        <h2>Trademarks and art</h2>
        <p>
          Roblox is a trademark of Roblox Corporation. Game names, characters,
          and related marks belong to their owners. Some kit images are official
          Roblox experience thumbnails and icons taken from that game’s Roblox
          page, resized for this site. Other pages may still use unofficial
          illustrations. None of this implies affiliation. Images can differ
          from a live session. Use Roblox under Roblox’s own terms.
        </p>

        <h2>Accuracy</h2>
        <p>
          Pages are informational only. Facts are dated. Pets, eggs, biomes,
          mutations, speed, and any future codes can change without notice. We
          do not warrant completeness or accuracy. Codes pages exist only when a
          redeem box is confirmed in that game. Do not treat empty rumor lists
          as working codes.
        </p>

        <h2>What you must not do</h2>
        <p>
          Do not use this site to seek exploits, scripts, generators, stolen
          accounts, or Free Robux. Do not copy these pages and present them as
          official. Do not scrape in a way that harms the host. Do not send
          malware or illegal content to our inboxes.
        </p>

        <h2>Payments</h2>
        <p>
          This version of the site does not sell memberships, Robux, or
          downloads. There is no checkout and no refund policy because there is
          nothing to refund.
        </p>

        <h2>Links and clips</h2>
        <p>
          Play links send you to Roblox. A few pages can load a YouTube player
          after you tap play. Roblox, YouTube, and other third-party sites are
          outside these terms. Your Privacy details for this site are at{" "}
          <a href="/privacy/">/privacy</a>.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms when the site changes. The date at the top
          is the current version. Continued use after an update means you accept
          the new text.
        </p>
      </main>
    </SiteShell>
  );
}
