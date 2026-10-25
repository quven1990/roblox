import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { catalog, catalogForJsonLd, catalogTools } from "@/lib/games";
import { hubJsonLd } from "@/lib/hub";
import { siteCopy } from "@/lib/site";

export function HubHome() {
  const tools = catalogTools();
  const guides = catalog.filter(game => game.slug !== "tha-lemon-3").flatMap(game => game.featuredPages.filter(page =>
    !tools.some(tool => tool.href === page.href)
  ).map(page => ({ ...page, game: game.name })));
  return (
    <SiteShell current="hub">
      <JsonLd data={hubJsonLd(catalogForJsonLd())} />
      <main id="content">
        <section className="hub-hero"><div className="wrap"><div className="hub-hero-copy">
          <p className="kicker">Upvane guides</p><h1>{siteCopy.h1}</h1><p>{siteCopy.dek}</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#games">Browse game guides <ArrowRight size={18} aria-hidden="true" /></a></div>
        </div></div></section>
        <article className="wrap hub-summary"><p>{siteCopy.summary}</p></article>
        <section id="games" className="wrap section-head is-catalog"><p className="kicker">Explore</p><h2>Game guides</h2><p>Choose a game to find its walkthroughs and reference pages.</p></section>
        <section className="wrap featured-grid" data-count={String(Math.min(catalog.length, 4))} aria-label="Game guides">
          {catalog.map((game, index) => <article className="game-card" key={game.slug}>
            <div className="game-thumb"><img src={game.thumb} alt={game.slug === "chop-a-forest" ? "Original Upvane forest illustration for the Chop A Forest guide" : `${game.name} game artwork`} width={960} height={540} loading={index === 0 ? "eager" : "lazy"} /></div>
            <div className="game-card-body"><div className="game-card-top"><img className="game-icon" src={game.icon} alt="" width={72} height={72} /><h3>{game.name}</h3></div>
              <p className="game-lede">{game.slug === "tha-lemon-3" ? "Game overview and listing details for the 223Z STUDIOS experience." : game.lede}</p><div className="chips">{game.featuredPages.filter(page => game.slug !== "tha-lemon-3" || page.href === game.path).map(page => <Link key={page.href} href={page.href}>{page.label}</Link>)}</div>
              <div className="actions"><Link className="btn btn-primary" href={game.path} data-analytics-event="hub_kit_open" data-analytics-game={game.slug} data-analytics-surface="home">Explore {game.name}<ArrowRight size={17} aria-hidden="true" /></Link></div>
            </div>
          </article>)}
        </section>
        {guides.length > 0 && <><section className="wrap section-head is-catalog"><h2>Browse guide pages</h2><p>Published guides and reference tables for the games above.</p></section>
          <section className="wrap tools-list" aria-label="Published guide pages">{guides.map(page => <Link className="tool-row" key={page.href} href={page.href}><span>{page.game} · {page.label}</span><ArrowRight size={16} aria-hidden="true" /></Link>)}</section></>}
        {tools.length > 0 && <><section id="tools" className="wrap section-head is-catalog"><h2>Useful tools</h2><p>Use each tool with the assumptions and limits shown on its page.</p></section>
          <section className="wrap tools-list" aria-label="Useful tools">{tools.map(tool => <Link className="tool-row" key={tool.href} href={tool.href}><Wrench size={18} aria-hidden="true" /><span>{tool.label}</span><ArrowRight size={16} aria-hidden="true" /></Link>)}</section></>}
        <section className="wrap hub-summary"><p>Upvane is an independent, unofficial guide website for players. Game details can change; check each guide’s source notes and last checked date.</p></section>
      </main>
    </SiteShell>
  );
}
