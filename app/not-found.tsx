import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { catalog } from "@/lib/games";

export default function NotFound() {
  return (
    <SiteShell current="legal">
      <main id="content" className="wrap legal">
        <p className="kicker">404</p>
        <h1>Page not found</h1>
        <p>
          That URL is not on Upvane. Go back to the{" "}
          <Link href="/">games list</Link>
          {catalog[0] ? (
            <>
              {" "}
              or open <Link href={catalog[0].path}>{catalog[0].name}</Link>.
            </>
          ) : null}
        </p>
      </main>
    </SiteShell>
  );
}
