import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronRight, Fish, Utensils, Wallet, Waves } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_NAME } from "@/lib/site";
import { sellAMillionSushi as game, sushiPages, sushiReviewed, sushiVideoAt } from "@/lib/games/sell-a-million-sushi";

type Page = "guide" | "merge-fishermen" | "not-making-money";
const labels = { guide: "Start here", "merge-fishermen": "Merge fishermen", "not-making-money": "Money troubleshooting" };

export function SushiGuide({ page, title, accent, description, answer, links, children }: {
  page: Page; title: string; accent: string; description: string; answer: ReactNode;
  links: { id: string; label: string }[]; children: ReactNode;
}) {
  const path = page === "guide" ? game.path : `${game.path}/${page}`;
  return <SiteShell current={page} slug="sell-a-million-sushi">
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "Article", headline: `${title} ${accent}`, url: absoluteUrl(path), inLanguage: "en", datePublished: sushiReviewed, dateModified: sushiReviewed, author: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() }, publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() }, about: { "@type": "VideoGame", name: game.name, url: game.playUrl } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: game.name, item: absoluteUrl(game.path) },
        ...(page === "guide" ? [] : [{ "@type": "ListItem", position: 3, name: labels[page], item: absoluteUrl(path) }]),
      ] },
    ] }} />
    <main id="content" className="su">
      <div className="su-wrap su-crumb"><Link href="/">Game guides</Link><ChevronRight size={12} aria-hidden="true" />{page === "guide" ? <span>{game.name}</span> : <><Link href={game.path}>{game.name}</Link><ChevronRight size={12} aria-hidden="true" /><span>{labels[page]}</span></>}</div>
      <header className="su-wrap su-hero">
        <div><p className="su-eyebrow"><Waves size={17} aria-hidden="true" /> UPVANE / RESTAURANT NOTES</p><p className="su-game">Sell a Million Sushi</p><h1>{title}<em>{accent}</em></h1><p className="su-deck">{description}</p><div className="su-actions"><a className="su-button" href={`#${links[0].id}`}>Get the steps <ArrowDown size={16} aria-hidden="true" /></a><a className="su-source-link" href={game.playUrl} rel="noopener noreferrer" data-analytics-event="play_roblox" data-analytics-game={game.slug} data-analytics-location="hero">Play on Roblox <ArrowUpRight size={15} aria-hidden="true" /></a></div><p className="su-date">Source review <time dateTime={sushiReviewed}>Nov 1, 2026</time><span>·</span>Independent guide</p></div>
        {page === "guide" ? <figure className="su-art"><img src={game.thumb} alt="Original Upvane illustration of a sushi counter beside the sea" width={960} height={700} fetchPriority="high" /><figcaption>THE FIRST SERVICE <span>Illustration, not gameplay</span></figcaption></figure> : <div className="su-visual" aria-label={page === "merge-fishermen" ? "Observed first merge: three Tier 1 fishermen become one Tier 2 fisherman" : "Fish, kitchen, customers, then collect money"}><p className="su-eyebrow">{page === "merge-fishermen" ? "YOUR FIRST MERGE" : "FOLLOW THE HANDOFFS"}</p>{page === "merge-fishermen" ? <><div className="su-merge-fish"><Fish /><Fish /><Fish /></div><p>3 × Tier 1</p><ArrowDown aria-hidden="true" /><div className="su-tier"><Fish size={47} strokeWidth={1.3} /><span>Tier 2<small>Mackerel</small></span></div><small>Opening tutorial observed in the source video</small></> : <><div className="su-mini-flow"><Fish /><span>Catch & collect</span><ArrowDown /><Utensils /><span>Deliver & cook</span><ArrowDown /><Wallet /><span>Customers → collect money</span></div><small>A checklist, not a measured income formula</small></>}</div>}
        <div className="su-answer"><span className="su-eyebrow">THE SHORT ANSWER</span><div>{answer}</div></div>
      </header>
      <div className="su-wrap su-reading"><aside className="su-side"><nav aria-label="On this page"><p className="su-eyebrow">ON THE MENU</p>{links.map((link, i) => <a href={`#${link.id}`} key={link.id}><span>0{i + 1}</span>{link.label}</a>)}<a href="#faq"><span>?</span>Quick answers</a><a href="#sources"><span>↗</span>Sources & version</a></nav><p>For Popular Marketplace’s Roblox game. Opening tutorial only where marked.</p></aside><article className="su-body">{children}<SushiRelated current={page} /><SushiSources /></article></div>
    </main>
  </SiteShell>;
}

export function SushiSection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="su-section"><div className="su-section-heading"><span>{number}</span><h2>{title}</h2></div>{children}</section>;
}
export function SushiWatch({ seconds, children }: { seconds: number; children: ReactNode }) {
  return <a className="su-watch" href={sushiVideoAt(seconds)} rel="noopener noreferrer">{children}<ArrowUpRight size={13} aria-hidden="true" /></a>;
}
export function SushiNote({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="su-note"><strong>{title}</strong><div>{children}</div></aside>;
}
export function SushiFaq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return <SushiSection id="faq" number="?" title="Quick answers"><div className="su-faq">{items.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><div>{item.a}</div></details>)}</div></SushiSection>;
}
function SushiRelated({ current }: { current: Page }) {
  return <section className="su-section su-related" aria-labelledby="su-related-title"><p className="su-eyebrow">NEXT ON THE MENU</p><h2 id="su-related-title">Keep your restaurant moving.</h2><div>{[{ id: "guide", title: "From first hire to first sale", body: "The opening loop, in the order you actually need it.", href: game.path }, ...sushiPages].filter(p => p.id !== current).map(p => <Link href={p.href} key={p.id} data-analytics-event="guide_nav" data-analytics-game={game.slug} data-analytics-section={p.id} data-analytics-location="related"><h3>{p.title}</h3><p>{p.body}</p><ArrowRight size={20} aria-hidden="true" /></Link>)}</div></section>;
}
function SushiSources() {
  return <section id="sources" className="su-sources"><p className="su-eyebrow">SOURCES & VERSION NOTES</p><h2>What we checked.</h2><p>Reviewed November 1, 2026. Upvane checked the public game listing and the opening gameplay below. This is a video-based guide; we have not independently played this build. Follow your current tutorial and pad labels if they differ.</p><ol><li><a href={game.playUrl} rel="noopener noreferrer">Popular Marketplace’s Roblox listing <ArrowUpRight size={13} aria-hidden="true" /></a><p>Game identity and the hire → catch → deliver → cook → sell loop. The listing also describes merging fishermen.</p></li><li><a href={sushiVideoAt(0)} rel="noopener noreferrer">RORO PLAYZ: “I TRIED TO SELL 1 MILLION SUSHI IN ROBLOX!” <ArrowUpRight size={13} aria-hidden="true" /></a><p>Opening sequence checked: 0:05–0:20 collection and delivery; 0:25–0:50 customers and money collection; 2:30–2:35 the first three-fisherman merge. Later paid-currency progression is not used to estimate normal earnings or completion time.</p></li></ol><p>Only the first merge is documented here. Higher-tier merge rules, offline income, maximum levels, exact catch rates and a fastest upgrade order remain unverified. Troubleshooting checks are Upvane’s advice based on the observed handoffs, not confirmed bug fixes.</p><p className="su-source-foot">Artwork and diagrams are original Upvane illustrations, not game screenshots or maps. YouTube links open the source site; this guide has no embedded video player. <Link href="/editorial-policy">Our evidence policy <ArrowRight size={12} aria-hidden="true" /></Link></p></section>;
}
