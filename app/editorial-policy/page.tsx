import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import {
  SITE_CONTACT_EMAIL,
  SITE_NAME,
  pageMetadata,
} from "@/lib/site";

export const metadata = pageMetadata(
  "Editorial Policy — Upvane",
  "How Upvane chooses Roblox games, verifies guide facts, labels codes, and updates unofficial Roblox kits.",
  "/editorial-policy",
);

export default function EditorialPolicyPage() {
  return (
    <SiteShell current="legal">
      <main id="content" className="wrap legal">
        <p className="kicker">Editorial policy</p>
        <h1>How Upvane verifies Roblox game kits</h1>
        <p className="meta">Last updated 2026-08-16. Unofficial fan site.</p>

        <p>
          {SITE_NAME} publishes unofficial Roblox game kits. The goal is to help
          players identify the right game, avoid fake code lists, and understand
          which mechanics are confirmed, reported, or still unverified.
        </p>

        <h2>How games are chosen</h2>
        <p>
          The homepage can mention games from a rising scan, but a scanned name
          is not automatically a guide. A game becomes a kit only when there is
          enough player demand, enough searchable gameplay detail, and a clear
          way to verify facts from the Roblox page, in-game UI, official notes,
          or public English-client gameplay.
        </p>

        <h2>Sources we prefer</h2>
        <ol className="steps">
          <li>
            <span>01</span>
            <p>
              The official Roblox experience page: creator, place ID, game
              description, thumbnail, and whether a game is the right title.
            </p>
          </li>
          <li>
            <span>02</span>
            <p>
              In-game UI seen on an English client: Index screens, rewards
              windows, code boxes, shop panels, maps, and visible labels.
            </p>
          </li>
          <li>
            <span>03</span>
            <p>
              Official developer notes, official wikis, or creator-owned
              channels when they are available.
            </p>
          </li>
          <li>
            <span>04</span>
            <p>
              Public gameplay videos and third-party articles as leads. These
              can support a note, but they do not turn a claim into Working or
              confirmed by themselves.
            </p>
          </li>
        </ol>

        <h2>Codes policy</h2>
        <p>
          Upvane does not publish fake generators, Free Robux claims, or empty
          code pages disguised as working lists. A codes page exists only when a
          game has a real redeem path or credible public evidence that one
          exists.
        </p>
        <p>
          A code is marked <strong>Working</strong> only after an official
          source lists it or this kit verifies a redeem. A code is marked{" "}
          <strong>Disputed</strong> when public lists disagree or the redeem path
          has not been photographed. A code is marked <strong>Expired</strong>{" "}
          when it fails in-game or an official table archives it.
        </p>

        <h2>What pages disclose</h2>
        <p>
          Each kit should show a last checked date. Important pages may include
          verification notes explaining what was confirmed and what was not.
          Pages should not change dates just to look fresh; a date should move
          because facts, screenshots, sources, or checks changed.
        </p>

        <h2>Corrections</h2>
        <p>
          Roblox games change quickly. If a page has the wrong game, a stale
          code, or a missed UI label, email{" "}
          <a href={`mailto:${SITE_CONTACT_EMAIL}`}>{SITE_CONTACT_EMAIL}</a>{" "}
          with the game name, page URL, and what you saw. Screenshots or official
          links help most.
        </p>

        <p>
          Back to <Link href="/">all Upvane kits</Link>.
        </p>
      </main>
    </SiteShell>
  );
}
