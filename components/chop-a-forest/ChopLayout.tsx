import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, ExternalLink, Leaf, TreePine } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { JsonLd } from "@/components/JsonLd";
import { chopAForest, chopJsonLd, chopPages, chopSources, type ChopSourceKey } from "@/lib/games/chop-a-forest";

export type ChopPage = "guide" | "zones" | "tools";
export function ChopLayout({ page, title, children }: { page: ChopPage; title: string; children: ReactNode }) {
  return (
    <SiteShell current={page} slug="chop-a-forest">
      <JsonLd data={chopJsonLd(page, title)} />
      <main id="content" className={`cf cf-${page}`}>
        <div className="cf-wrap cf-breadcrumb"><Link href="/">Game guides</Link><ChevronRight size={12} aria-hidden="true" />{page === "guide" ? <span>Chop A Forest</span> : <><Link href={chopAForest.path}>Chop A Forest</Link><ChevronRight size={12} aria-hidden="true" /><span>{page === "zones" ? "Zones & bosses" : "Tools & upgrades"}</span></>}</div>
        {children}
      </main>
    </SiteShell>
  );
}

export function ChopHero({ page, title, accent, description }: { page: ChopPage; title: string; accent: string; description: string }) {
  return (
    <header className={`cf-wrap cf-hero ${page === "guide" ? "" : "cf-hero-inner"}`}>
      <div className="cf-hero-copy">
        <p className="cf-eyebrow"><span className="cf-dot" /> UPVANE FIELD GUIDE <span className="cf-edition">/ {page === "guide" ? "01 — START HERE" : page === "zones" ? "02 — FIND YOUR WAY" : "03 — GEAR UP"}</span></p>
        <h1>{title}<em>{accent}</em></h1>
        <p className="cf-deck">{description}</p>
        <div className="cf-hero-actions"><a className="cf-button" href={page === "guide" ? "#first-purchases" : page === "zones" ? "#zone-order" : "#coin-upgrades"}>{page === "guide" ? "Plan your first purchases" : page === "zones" ? "See the forest route" : "Compare coin upgrades"}<ArrowDown size={16} aria-hidden="true" /></a>{page === "guide" && <a className="cf-text-link" href={chopAForest.playUrl} rel="noopener noreferrer" data-analytics-event="play_roblox" data-analytics-game="chop-a-forest" data-analytics-location="hero">Play on Roblox <ArrowUpRight size={16} aria-hidden="true" /></a>}</div>
        <div className="cf-review"><Leaf size={14} aria-hidden="true" /><span>Source review: <time dateTime="2026-10-25">Oct 25, 2026</time></span><span className="cf-review-divider" />Independent guide</div>
      </div>
      {page === "guide" ? <figure className="cf-hero-art"><img src="/games/chop-a-forest/forest.svg" alt="Upvane illustration of a forest, a winding trail and a timber cabin" width={800} height={650} fetchPriority="high" /><figcaption><span><TreePine size={13} aria-hidden="true" /> FOREST FIELD NOTES</span><span>Illustration, not gameplay</span></figcaption></figure> : <div className="cf-inner-art" aria-hidden="true"><TreePine strokeWidth={.8} /><span>{page === "zones" ? "08" : "03"}</span><p>{page === "zones" ? "REPORTED FOREST AREAS" : "FIRST COIN TARGETS"}</p></div>}
    </header>
  );
}

export function ChopArticle({ links, children }: { links: { id: string; label: string }[]; children: ReactNode }) {
  return <div className="cf-wrap cf-reading-layout"><aside className="cf-side"><nav aria-label="On this page"><p className="cf-eyebrow">IN THIS GUIDE</p>{links.map((item, i) => <a key={item.id} href={`#${item.id}`}><span>{String(i + 1).padStart(2, "0")}</span>{item.label}</a>)}</nav><p className="cf-side-note">For WCT Capital’s game.<br />Chapter 1 mechanics unless marked otherwise.</p></aside><article className="cf-body">{children}</article></div>;
}

export function ChopSection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="cf-section"><div className="cf-section-heading"><span>{number}</span><h2>{title}</h2></div>{children}</section>;
}

export function ChopNote({ children, title = "Before you spend", tone = "warm" }: { children: ReactNode; title?: string; tone?: "warm" | "green" }) {
  return <aside className={`cf-note cf-note-${tone}`}><p className="cf-note-title">{tone === "green" ? <Check size={17} aria-hidden="true" /> : <Leaf size={17} aria-hidden="true" />}{title}</p><div>{children}</div></aside>;
}

export function SourceLink({ source, children }: { source: ChopSourceKey; children?: ReactNode }) {
  return <a className="cf-citation" href={chopSources[source].href} rel="noopener noreferrer">{children ?? "Source"}<ArrowUpRight size={11} aria-hidden="true" /></a>;
}

export function ChopFaq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return <section id="faq" className="cf-section"><div className="cf-section-heading"><span>?</span><h2>A few useful answers</h2></div><div className="cf-faq">{items.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><div>{item.a}</div></details>)}</div></section>;
}

export function ChopRelated({ current }: { current: ChopPage }) {
  const pages = [{ id: "guide", title: "Build a better first run", body: "First purchases and a quick way to find what is slowing you down.", href: chopAForest.path }, ...chopPages];
  return <section className="cf-section cf-related" aria-labelledby="cf-related-title"><p className="cf-eyebrow">KEEP YOUR RUN MOVING</p><h2 id="cf-related-title">Your next useful read.</h2><div>{pages.filter(p => p.id !== current).map((p, i) => <Link key={p.id} href={p.href} data-analytics-event="guide_nav" data-analytics-game="chop-a-forest" data-analytics-section={p.id} data-analytics-location="related"><span className="cf-related-num">0{i + 1}</span><h3>{p.title}</h3><p>{p.body}</p><ArrowRight size={21} aria-hidden="true" /></Link>)}</div></section>;
}

export function ChopSources({ sources }: { sources: ChopSourceKey[] }) {
  return <section id="sources" className="cf-sources"><p className="cf-eyebrow">SOURCES & VERSION NOTES</p><h2>What this guide is based on.</h2><p>Reviewed October 25, 2026. Upvane checked the public listing and the dated reports below; we have not independently played this build. Reported prices, controls and gates can change. Your current shop panel and objective take precedence.</p><ol>{sources.map(key => <li key={key}><a href={chopSources[key].href} rel="noopener noreferrer">{chopSources[key].label}<ExternalLink size={12} aria-hidden="true" /></a><p>{chopSources[key].note}</p></li>)}</ol><p className="cf-source-footnote">Recommendations about what to buy next are Upvane’s planning advice, not measured completion-time claims. Artwork is an original Upvane illustration, not an in-game map or screenshot. <Link href="/editorial-policy">How we handle evidence <ArrowRight size={12} aria-hidden="true" /></Link></p></section>;
}
