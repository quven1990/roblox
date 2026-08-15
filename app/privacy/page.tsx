import { SiteShell } from "@/components/SiteShell";
import {
  SITE_CLARITY_ID,
  SITE_CONTACT_EMAIL,
  SITE_GA4_ID,
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
          Page views are counted in three places. A self-hosted Plausible script
          loads from plausible.shipsolo.io (data-domain upvane.com). Plausible
          is cookieless. The typical payload is the page URL, referrer, browser,
          operating system, device type, and a coarse country derived from IP
          address.
        </p>
        <p>
          Google Analytics 4 (measurement ID {SITE_GA4_ID}) also runs. That
          script loads from googletagmanager.com and google-analytics.com. It
          can set first-party cookies (such as _ga) and send page URL, referrer,
          device, and approximate location to Google. We use it to see which
          guides are read. We do not turn on Google ads or remarketing on this
          site. Google’s own privacy policy applies to that processing.
        </p>
        <p>
          Microsoft Clarity (project {SITE_CLARITY_ID}) also runs. That script
          loads from clarity.ms. It can set cookies and record page views,
          clicks, scrolling, and anonymized session replays so we can see how
          the guides are used. Microsoft’s privacy policy applies to that
          processing. This site has no login forms; do not type secrets into the
          pages.
        </p>
        <p>
          We do not control every retention setting on those hosts. A content
          blocker that stops the analytics scripts is enough if you prefer not
          to be counted. You can also email {SITE_PRIVACY_EMAIL} with questions
          about the count.
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
          do not operate. Those sites have their own privacy policies. Google
          receives Analytics data and Microsoft receives Clarity data, as
          described above. We do not sell personal information and we do not run
          ads on this site.
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
