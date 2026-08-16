import Link from "next/link";

export function EvidencePanel({
  title = "Verification notes",
  lastChecked,
  checked,
  verified,
  unverified,
}: {
  title?: string;
  lastChecked: string;
  checked: string;
  verified: readonly string[];
  unverified?: readonly string[];
}) {
  return (
    <aside className="evidence-panel" aria-labelledby="verification-notes">
      <div className="evidence-head">
        <div>
          <p className="kicker">Evidence</p>
          <h2 id="verification-notes">{title}</h2>
        </div>
        <span>Last checked {lastChecked}</span>
      </div>
      <p className="evidence-target">{checked}</p>
      <div className="evidence-grid">
        <div>
          <h3>Verified on this kit</h3>
          <ul>
            {verified.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {unverified?.length ? (
          <div>
            <h3>Not verified yet</h3>
            <ul>
              {unverified.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <p className="evidence-policy">
        <Link href="/editorial-policy">How Upvane verifies Roblox guides</Link>
      </p>
    </aside>
  );
}
