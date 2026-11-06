import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_NAME } from "@/lib/site";
import { practicalBasketball as game, basketballPages, basketballReviewed, basketballSources } from "@/lib/games/practical-basketball";

export type BasketballPage = "guide" | "controls" | "shooting-and-dunking";
const labels = { guide: "Start here", controls: "Controls", "shooting-and-dunking": "Shooting & dunking" };

export function BasketballGuide({ page, title, accent, description, answer, links, children }: {
  page: BasketballPage; title: string; accent: string; description: string; answer: ReactNode;
  links: { id: string; label: string }[]; children: ReactNode;
}) {
  const path = page === "guide" ? game.path : `${game.path}/${page}`;
  return <SiteShell current={page} slug="practical-basketball">
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "Article", headline: `${title} ${accent}`, url: absoluteUrl(path), inLanguage: "en", datePublished: basketballReviewed, dateModified: basketballReviewed, author: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() }, publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl() }, about: { "@type": "VideoGame", name: game.name, url: game.playUrl } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: game.name, item: absoluteUrl(game.path) },
        ...(page === "guide" ? [] : [{ "@type": "ListItem", position: 3, name: labels[page], item: absoluteUrl(path) }]),
      ] },
    ] }} />
    <main id="content" className="pb">
      <div className="pb-wrap pb-crumb"><Link href="/">Game guides</Link><ChevronRight size={12} aria-hidden="true" />{page === "guide" ? <span>{game.name}</span> : <><Link href={game.path}>{game.name}</Link><ChevronRight size={12} aria-hidden="true" /><span>{labels[page]}</span></>}</div>
      <header className="pb-wrap pb-hero">
        <div className="pb-intro"><p className="pb-eyebrow"><span className="pb-dot" /> UPVANE / COURTSIDE NOTES</p><h1>{title}<em>{accent}</em></h1><p className="pb-deck">{description}</p><div className="pb-actions"><a className="pb-button" href={`#${links[0].id}`}>{page === "controls" ? "Find your buttons" : "Get into the details"}<ArrowDown size={16} aria-hidden="true" /></a><a className="pb-play" href={game.playUrl} rel="noopener noreferrer" data-analytics-event="play_roblox" data-analytics-game={game.slug} data-analytics-location="hero">Play on Roblox <ArrowUpRight size={15} aria-hidden="true" /></a></div><p className="pb-date">Source review <time dateTime={basketballReviewed}>Nov 6, 2026</time><span>·</span>Unofficial guide</p></div>
        <figure className="pb-art"><img src={game.thumb} alt="Original Upvane overhead basketball court illustration with a ball and a hoop, not gameplay" width={960} height={700} fetchPriority="high" /><figcaption><span>ONE POSSESSION AT A TIME</span><span>Illustration, not gameplay</span></figcaption></figure>
        <div className="pb-answer"><span className="pb-eyebrow">THE SHORT ANSWER</span><div>{answer}</div></div>
      </header>
      <div className="pb-wrap pb-reading"><aside className="pb-side"><nav aria-label="On this page"><p className="pb-eyebrow">YOUR PLAYBOOK</p>{links.map((link, i) => <a href={`#${link.id}`} key={link.id}><span>0{i + 1}</span>{link.label}</a>)}<a href="#faq"><span>?</span>Quick answers</a><a href="#sources"><span>↗</span>Sources & version</a></nav></aside><article className="pb-body">{children}<BasketballRelated current={page} /><BasketballSources /></article></div>
    </main>
  </SiteShell>;
}

export function BasketballSection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="pb-section"><div className="pb-section-heading"><span>{number}</span><h2>{title}</h2></div>{children}</section>;
}

export function BasketballNote({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="pb-note"><strong>{title}</strong><div>{children}</div></aside>;
}

export function BasketballFaq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return <BasketballSection id="faq" number="?" title="Quick answers"><div className="pb-faq">{items.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><div>{item.a}</div></details>)}</div></BasketballSection>;
}

function BasketballRelated({ current }: { current: BasketballPage }) {
  return <section className="pb-section pb-related" aria-labelledby="pb-related-title"><p className="pb-eyebrow">NEXT POSSESSION</p><h2 id="pb-related-title">Take one useful next step.</h2><div>{[{ id: "guide", title: "Build a useful first session", body: "Verify the game and learn a small set of actions before spending on a build.", href: game.path }, ...basketballPages].filter(p => p.id !== current).map(p => <Link href={p.href} key={p.id} data-analytics-event="guide_nav" data-analytics-game={game.slug} data-analytics-section={p.id} data-analytics-location="related"><h3>{p.title}</h3><p>{p.body}</p><ArrowRight size={20} aria-hidden="true" /></Link>)}</div></section>;
}

function BasketballSources() {
  return <section id="sources" className="pb-sources"><p className="pb-eyebrow">SOURCES & VERSION NOTES</p><h2>Read the play, and the evidence.</h2><p>Reviewed November 6, 2026. The Roblox listing and public API identify Practical’s Games’ Alpha. <strong>Controls on these pages are community-reported, not an Upvane client playtest.</strong> Check the current tutorial or creator’s control reference if an input differs.</p><ol>
    <li><a href={game.playUrl} rel="noopener noreferrer">Practical’s Games’ Roblox listing <ArrowUpRight size={13} aria-hidden="true" /></a><p>Primary source for the experience identity, Alpha status and direction to community controls. Place 80681221431821; universe 7529591378. A matching title from a different creator is not the same listing.</p></li>
    <li><a href={basketballSources.controls} rel="noopener noreferrer">AllThingsHow: platform control report <ArrowUpRight size={13} aria-hidden="true" /></a><p>Updated November 3, 2026. Source for the selected shooting, finishing and passing inputs. We omit advanced combinations where reports conflict; a button reference does not establish a build requirement.</p></li>
    <li><a href={basketballSources.beginner} rel="noopener noreferrer">TechWiser: earlier beginner observations <ArrowUpRight size={13} aria-hidden="true" /></a><p>August 4, 2026, before the current Alpha. Used for the named tutorial categories and basic PC dribble reference. Menu paths, tutorial availability and rewards may differ now.</p></li>
    <li><a href={basketballSources.socials} rel="noopener noreferrer">Practical Basketball’s social links <ArrowUpRight size={13} aria-hidden="true" /></a><p>The developer’s hub links its community and video channels. We could not independently read the current Discord control messages or verify a complete touch layout.</p></li>
  </ol><p>Practice routines and diagnostic suggestions are Upvane editorial advice, not measured make rates, a certified fix for bugs, or a best-build ranking. No exact release duration, dunk attribute threshold or badge breakpoint has been verified here.</p><p className="pb-source-foot">Court artwork is an original Upvane illustration, not a game screenshot or an in-game court map. No video player is embedded. <Link href="/editorial-policy">Our evidence policy →</Link></p></section>;
}
