import { SiteShell } from "@/components/SiteShell";
import {
  SITE_CONTACT_EMAIL,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_PRIVACY_EMAIL,
  pageMetadata,
} from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy — Upvane",
  "Privacy policy for the unofficial Upvane Roblox game guides.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <SiteShell current="legal">
      <main id="content" className="wrap legal">
        <p className="kicker">Legal</p>
        <h1>Privacy</h1>
        <p className="meta">Last updated 2026-08-15. Unofficial fan site.</p>

        <p>
          {SITE_NAME} ({SITE_ORIGIN}) publishes unofficial guides for Roblox
          games. This policy describes what this static site actually does with
          information. It is not legal advice.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy requests:{" "}
          <a href={`mailto:${SITE_PRIVACY_EMAIL}`}>{SITE_PRIVACY_EMAIL}</a>.
          General questions:{" "}
          <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>.
        </p>

        <h2>What this site does not collect</h2>
        <p>
          There are no accounts, memberships, comment forms, uploads, or
          checkout. We do not collect Roblox passwords, cookies for advertising,
          or payment details. We do not sell Robux and we do not run generators.
        </p>

        <h2>Analytics</h2>
        <p>
          Page views are counted with a self-hosted Plausible script loaded from
          plausible.shipsolo.io, with data-domain upvane.com. Plausible is
          cookieless. The typical payload is the page URL, referrer, browser,
          operating system, device type, and a coarse country derived from IP
          address. We use that to see which guides are read, not to identify you
          as a person.
        </p>
        <p>
          We do not control every retention setting on that analytics host. If
          you prefer not to be counted, a content blocker that stops the
          Plausible script is enough. You can also email{" "}
          {SITE_PRIVACY_EMAIL} with questions about the count.
        </p>

        <h2>Hosting and fonts</h2>
        <p>
          The company that serves these pages receives standard request data
          such as IP address, user agent, time, and the path you asked for.
          That is normal web hosting for security and uptime. We do not use
          those logs to build a profile of you.
        </p>
        <p>
          The Outfit typeface is bundled with this site at build time. Visiting
          a page does not load fonts from Google.
        </p>

        <h2>If you email us</h2>
        <p>
          Mail to {SITE_CONTACT_EMAIL} or {SITE_PRIVACY_EMAIL} is stored in
          ordinary email inboxes. We keep what we need to answer you and then
          delete threads we no longer need. Do not send Roblox passwords or
          payment cards.
        </p>

        <h2>Third-party sites</h2>
        <p>
          Play buttons and other outbound links go to Roblox or other sites we
          do not operate. Those sites have their own privacy policies. We do
          not sell personal information and we do not share analytics with
          advertisers.
        </p>

        <h2>Children</h2>
        <p>
          These pages are informational fan guides. We do not knowingly collect
          personal information from children under 13. The site does not create
          accounts for anyone. If a parent thinks a child emailed us, write to{" "}
          {SITE_PRIVACY_EMAIL} and we will delete that thread if we still have
          it.
        </p>

        <h2>Your requests</h2>
        <p>
          Because we do not run accounts, there is no profile to download. You
          may still email {SITE_PRIVACY_EMAIL} to ask what we store, to ask us
          to delete an email you sent, or to object to analytics at a high
          level. We will answer in plain language.
        </p>
      </main>
    </SiteShell>
  );
}
