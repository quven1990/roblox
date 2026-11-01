import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronRight, MoveUpRight, RotateCcw } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_NAME } from "@/lib/site";
import { plus1SpiderArm as game, spiderPages, spiderReviewed, spiderVideoAt } from "@/lib/games/plus-1-spider-arm";

export type SpiderPage = "guide" | "climbing-grip" | "rebirth";
const labels = { guide: "Start here", "climbing-grip": "Climbing & Grip", rebirth: "Rebirth" };
const reports = {
  guide: { href: "https://bloxron.com/plus-1-spider-arm/armatures", label: "Bloxron: armature shop observations", note: "Oct 31 report. Used for the first Wins-shop purchases; the Cobalt panel was also checked in the video." },
  "climbing-grip": { href: "https://bloxron.com/plus-1-spider-arm/stages", label: "Bloxron: stage-board observations", note: "Oct 31 report. Early stage Grip figures are marked as reported, with Stage 2 also visible in the video." },
  rebirth: { href: "https://bloxron.com/plus-1-spider-arm/beginner-guide", label: "Bloxron: Rebirth gates and training pads", note: "Oct 31 community report for the first five gates and pad unlocks. The second Rebirth panel was independently checked against the source video." },
};

export function SpiderGuide({ page, title, accent, description, answer, links, children }: {
  page: SpiderPage; title: string; accent: string; description: string; answer: ReactNode;
  links: { id: string; label: string }[]; children: ReactNode;
}) {
  const path = page === "guide" ? game.path : `${game.path}/${page}`;
  return <SiteShell current={page} slug="plus-1-spider-arm">
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "Article", headline: `${title} ${accent}`, url: absoluteUrl(path), inLanguage: "en", datePublished: spiderReviewed, dateModified: spiderReviewed, author: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() }, publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() }, about: { "@type": "VideoGame", name: game.name, url: game.playUrl } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: game.name, item: absoluteUrl(game.path) },
        ...(page === "guide" ? [] : [{ "@type": "ListItem", position: 3, name: labels[page], item: absoluteUrl(path) }]),
      ] },
    ] }} />
    <main id="content" className="sp">
      <div className="sp-wrap sp-crumb"><Link href="/">Game guides</Link><ChevronRight size={12} aria-hidden="true" />{page === "guide" ? <span>{game.name}</span> : <><Link href={game.path}>{game.name}</Link><ChevronRight size={12} aria-hidden="true" /><span>{labels[page]}</span></>}</div>
      <header className="sp-wrap sp-hero">
        <div><p className="sp-eyebrow"><MoveUpRight size={16} aria-hidden="true" /> UPVANE / CLIMBING NOTES</p><p className="sp-game">{game.name}</p><h1>{title}<em>{accent}</em></h1><p className="sp-deck">{description}</p><div className="sp-actions"><a className="sp-button" href={`#${links[0].id}`}>Find your next step <ArrowDown size={16} aria-hidden="true" /></a><a className="sp-source-link" href={game.playUrl} rel="noopener noreferrer" data-analytics-event="play_roblox" data-analytics-game={game.slug} data-analytics-location="hero">Play on Roblox <ArrowUpRight size={15} aria-hidden="true" /></a></div><p className="sp-date">Source review <time dateTime={spiderReviewed}>Nov 1, 2026</time><span>·</span>Independent guide</p></div>
        {page === "guide" ? <figure className="sp-art"><img src={game.thumb} alt="Original Upvane illustration of a mechanical climbing rig crossing rooftops" width={960} height={700} fetchPriority="high" /><figcaption>TAKE THE NEXT LEDGE <span>Illustration, not gameplay</span></figcaption></figure> : <div className="sp-visual">{page === "climbing-grip" ? <><p className="sp-eyebrow">THE CLIMBING CHECK</p><kbd>SPACE</kbd><p>Contact the wall. Hold to climb.</p><div className="sp-meter" aria-hidden="true"><span /></div><small>Watch remaining Grip while you hang.<br />Diagram only; not a live game meter.</small></> : <><p className="sp-eyebrow">SECOND REBIRTH / VIDEO EXAMPLE</p><RotateCcw size={38} strokeWidth={1.2} aria-hidden="true" /><div className="sp-reset"><span>Level 20<small>XP boost ×1.5</small></span><ArrowRight size={20} aria-hidden="true" /><span>Level 1<small>XP boost ×2</small></span></div><small>A level reset with a higher XP boost.<br />Read the current panel before confirming.</small></>}</div>}
        <div className="sp-answer"><span className="sp-eyebrow">THE SHORT ANSWER</span><div>{answer}</div></div>
      </header>
      <div className="sp-wrap sp-reading"><aside className="sp-side"><nav aria-label="On this page"><p className="sp-eyebrow">YOUR ROUTE</p>{links.map((link, i) => <a href={`#${link.id}`} key={link.id}><span>0{i + 1}</span>{link.label}</a>)}<a href="#faq"><span>?</span>Quick answers</a><a href="#sources"><span>↗</span>Sources & version</a></nav><p>For This Time For Sure’s game. Use current stage and purchase panels after updates.</p></aside><article className="sp-body">{children}<SpiderRelated current={page} /><SpiderSources page={page} /></article></div>
    </main>
  </SiteShell>;
}
export function SpiderSection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="sp-section"><div className="sp-section-heading"><span>{number}</span><h2>{title}</h2></div>{children}</section>;
}
export function SpiderWatch({ seconds, children }: { seconds: number; children: ReactNode }) {
  return <a className="sp-watch" href={spiderVideoAt(seconds)} rel="noopener noreferrer">{children}<ArrowUpRight size={13} aria-hidden="true" /></a>;
}
export function SpiderNote({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="sp-note"><strong>{title}</strong><div>{children}</div></aside>;
}
export function SpiderTable({ label, children }: { label: string; children: ReactNode }) {
  return <div className="sp-table-wrap" tabIndex={0} role="region" aria-label={label}>{children}</div>;
}
export function SpiderFaq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return <SpiderSection id="faq" number="?" title="Quick answers"><div className="sp-faq">{items.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><div>{item.a}</div></details>)}</div></SpiderSection>;
}
function SpiderRelated({ current }: { current: SpiderPage }) {
  return <section className="sp-section sp-related" aria-labelledby="sp-related-title"><p className="sp-eyebrow">KEEP CLIMBING</p><h2 id="sp-related-title">Make the next move count.</h2><div>{[{ id: "guide", title: "Build a better first session", body: "Climb, train, claim Wins, and read the early shop without mixing up currencies.", href: game.path }, ...spiderPages].filter(p => p.id !== current).map(p => <Link href={p.href} key={p.id} data-analytics-event="guide_nav" data-analytics-game={game.slug} data-analytics-section={p.id} data-analytics-location="related"><h3>{p.title}</h3><p>{p.body}</p><ArrowRight size={20} aria-hidden="true" /></Link>)}</div></section>;
}
function SpiderSources({ page }: { page: SpiderPage }) {
  return <section id="sources" className="sp-sources"><p className="sp-eyebrow">SOURCES & VERSION NOTES</p><h2>Evidence for this climb.</h2><p>Reviewed November 1, 2026. Upvane checked the public listing, relevant video frames and the named community report. We have not independently played this build. The instructions on your current screen take precedence.</p><ol>
    <li><a href={game.playUrl} rel="noopener noreferrer">This Time For Sure’s Roblox listing <ArrowUpRight size={13} aria-hidden="true" /></a><p>Hold-to-climb control, Grip drain, arms from training, stage Wins, 13 stages and 12 armatures are described by the creator.</p></li>
    <li><a href={spiderVideoAt(page === "rebirth" ? 155 : page === "climbing-grip" ? 66 : 136)} rel="noopener noreferrer">Valtric: “Noob to Pro With 0 Robux in +1 Spider Arm” <ArrowUpRight size={13} aria-hidden="true" /></a><p>Checked frames include Stage 2 at 1:06, the Cobalt purchase at 2:16, the second Rebirth panel at 2:35, and later training progress. These are source locations, not measured completion times. Temporary boosts appear in the run.</p></li>
    <li><a href={reports[page].href} rel="noopener noreferrer">{reports[page].label} <ArrowUpRight size={13} aria-hidden="true" /></a><p>{reports[page].note}</p></li>
  </ol><p>No measured Grip drain/recovery formula, fastest Rebirth route or later-world walkthrough is supplied. Mobile and controller bindings are not independently verified. Shop and stage figures can change.</p><p className="sp-source-foot">Artwork and diagrams are original Upvane illustrations, not game screenshots or maps. Source videos are external links; no video player is embedded here. <Link href="/editorial-policy">Our evidence policy <ArrowRight size={12} aria-hidden="true" /></Link></p></section>;
}
