import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ChopArticle, ChopFaq, ChopHero, ChopLayout, ChopNote, ChopRelated, ChopSection, ChopSources, SourceLink } from "@/components/chop-a-forest/ChopLayout";
import { PurchasePlanner } from "@/components/chop-a-forest/PurchasePlanner";
import { chopPurchaseRows, chopToolsMetadata } from "@/lib/games/chop-a-forest";

export const metadata = chopToolsMetadata;

export default function ChopToolsPage() {
  return <ChopLayout page="tools" title="Chop A Forest tools, backpacks and truck buy order">
    <ChopHero page="tools" title="Chop A Forest tools." accent="Buy for the bottleneck." description="A coin-first upgrade reference, an editable purchase planner, and the small truck and tool mistakes that can stall a good run." />
    <div className="cf-wrap cf-answer-bar"><span className="cf-eyebrow">WHAT TO BUY FIRST</span><p>Use <strong>Axe → first Backpack → Rusty Runabout</strong> as a starting plan. After that, watch your run: longer cutting calls for a tool upgrade; repeated walking calls for storage or transport.</p><a href="#planner">Work out your next target <ArrowRight size={14} aria-hidden="true" /></a></div>
    <ChopArticle links={[{ id: "coin-upgrades", label: "Coin upgrade reference" }, { id: "planner", label: "Your next coin target" }, { id: "hauling", label: "Bag or truck?" }, { id: "cutting", label: "Axe, saw & overheating" }, { id: "conflicts", label: "What the reports disagree on" }, { id: "faq", label: "Quick answers" }, { id: "sources", label: "Sources & version" }]}>
      <ChopSection id="coin-upgrades" number="01" title="The useful early-game numbers.">
        <p className="cf-lead">These are community-reported coin costs from Oct 17–19. They are not a live shop feed. Keep coin items separate from similarly named Robux passes.</p>
        <div className="cf-table-wrap"><table className="cf-table"><caption>Early purchases · reported prices and capacity</caption><thead><tr><th scope="col">Purchase</th><th scope="col">Coin cost</th><th scope="col">What it solves</th></tr></thead><tbody>{chopPurchaseRows.map(row => <tr key={row.name}><th scope="row">{row.name}<small>{row.capacity === "—" ? "Cutting tool" : row.capacity}</small></th><td>{row.price}</td><td>{row.use}<small>{row.note}</small></td></tr>)}</tbody></table></div>
        <p className="cf-caption">Axe: <SourceLink source="route" />. Bags: <SourceLink source="backpack" />. Coin trucks: <SourceLink source="trucks" />. These rows compare functions, not a tested fastest route.</p>
      </ChopSection>
      <ChopSection id="planner" number="02" title="Turn a price into a saving target.">
        <PurchasePlanner />
      </ChopSection>
      <ChopSection id="hauling" number="03" title="A bag and a truck do different jobs.">
        <div className="cf-comparison"><div><p className="cf-eyebrow">PICKUP → TRANSPORT</p><h3>Backpack</h3><p>Think of it as the batch you collect before unloading. If you keep stopping at your parked truck after a tiny pickup, a larger bag can reduce those transfers.</p></div><div><p className="cf-eyebrow">TRANSPORT → SELL PAD</p><h3>Truck</h3><p>Think of it as the batch you take to sell. If the long walk to the chipper dominates your run, loading a vehicle by the trees changes that part of the route.</p></div></div>
        <h3 className="cf-subheading">Bought a truck, but nothing happened?</h3>
        <p>The Garage report separates buying from spawning. Return to the vehicle menu and choose <strong>SPAWN</strong>. At the truck, the driving prompt and log-loading prompt are different actions. <SourceLink source="trucks" /></p>
        <div className="cf-process-line"><div><span>1</span><strong>Buy & spawn</strong><p>Confirm the selected vehicle.</p></div><div><span>2</span><strong>Load the bed</strong><p>Use its log-loading prompt.</p></div><div><span>3</span><strong>Drive & sell</strong><p>Sell at the pad; collect the dropped coins.</p></div></div>
        <p>For a clean comparison, keep the same trees and tools for one loop before and after an upgrade. Watch how often you stop, not just the balance after a lucky load. This is a way to judge your own run, not a claim of a particular coins-per-minute return.</p>
      </ChopSection>
      <ChopSection id="cutting" number="04" title="Faster cutting is useful only while it is cutting.">
        <p>The chainsaw report describes a held cutting action and a heat bar. An overheated saw temporarily stops working; use its heat display rather than assuming repeated clicks will restart it. Reposition or handle the logs while it cools. Exact cooldown seconds are not verified here. <SourceLink source="saw" /></p>
        <ChopNote tone="green" title="Separate the tool, the trial and the pass."><p>The official Chainsaw Forever description promises the tool in every run. A trial has a timer; an in-run coin offer, if your version has one, is a different listing again. Neither an ownership badge nor the pass price proves what a coin-shop version costs. <SourceLink source="passes" /></p></ChopNote>
        <p>If chopping is already quick but loose logs are piling up, buying another cutting upgrade is a poor answer to that observation. First compare pickup, loading and sale time. If there are no logs piling up and the tree is the wait, inspect the tool’s next upgrade instead.</p>
      </ChopSection>
      <ChopSection id="conflicts" number="05" title="Numbers we would not spend from.">
        <p>Some published values conflict. A useful reference should tell you where it stops being reliable, before you press Buy.</p>
        <ul className="cf-conflict-list"><li><strong>First Backpack capacity:</strong> the dedicated bag guide reports 15; older tables include 10. Confirm the displayed capacity rather than assuming a universal tier history. <SourceLink source="backpack" /></li><li><strong>Early truck speed:</strong> the Garage report contains different readings. We retain its coin costs and capacity leads, but do not use a guessed speed progression. <SourceLink source="trucks" /></li><li><strong>Coin Chainsaw availability:</strong> AllThingsHow reports a coin option, while the other saw guide focuses on the Robux pass. We have not confirmed the current coin offer, so it is not a saving target in the planner. <SourceLink source="route" /> <SourceLink source="saw" /></li></ul>
        <Link className="cf-inline-link" href="/chop-a-forest/zones#locked-gate">If the problem is a locked gate, start here instead <ArrowRight size={16} aria-hidden="true" /></Link>
      </ChopSection>
      <ChopFaq items={[
        { q: "Where do I upgrade the Backpack?", a: <p>The dedicated bag report places the stand outside the cabin beside the sell area. Read the next tier’s coin price and capacity before buying; a similarly named Infinite offer can be a separate pass. <SourceLink source="backpack" /></p> },
        { q: "Why does my truck not load when I try to drive?", a: <p>Driving and loading are different interactions. Aim at the bed and use the load prompt rather than entering the driver seat. Check the bed’s load counter before returning to sell.</p> },
        { q: "Is the most expensive truck always the best next upgrade?", a: <p>No general ranking follows from its price. Check whether your delay is still transport, and whether the next vehicle uses coins, gems or Robux. The planner only covers the first coin targets.</p> },
        { q: "Can the planner tell me how much money I will earn?", a: <p>No. It only subtracts your coin balance from an editable purchase price. It does not model tree values, class bonuses, mutations, paid multipliers or completion time.</p> },
      ]} />
      <ChopRelated current="tools" />
      <ChopSources sources={["official", "route", "backpack", "trucks", "saw", "passes"]} />
    </ChopArticle>
  </ChopLayout>;
}
