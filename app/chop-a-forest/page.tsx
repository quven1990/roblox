import Link from "next/link";
import { ArrowRight, Axe, Backpack, Truck } from "lucide-react";
import { BottleneckFinder } from "@/components/chop-a-forest/BottleneckFinder";
import { ChopArticle, ChopFaq, ChopHero, ChopLayout, ChopNote, ChopRelated, ChopSection, ChopSources, SourceLink } from "@/components/chop-a-forest/ChopLayout";
import { chopMetadata } from "@/lib/games/chop-a-forest";

export const metadata = chopMetadata;

export default function ChopAForestPage() {
  return <ChopLayout page="guide" title="Chop A Forest: a smarter first run">
    <ChopHero page="guide" title="Chop A Forest." accent="A smarter first run." description="Know what to buy, why the next gate is still closed, and which upgrade will actually move your run forward." />
    <div className="cf-wrap cf-answer-bar"><span className="cf-eyebrow">THE SHORT ANSWER</span><p>Chop, collect, sell, then upgrade the part that slows you down. A practical coin-first start is <strong>Axe → Backpack → starter truck</strong>. A locked gate can be a tree or Boss objective—not a money problem.</p><a href="#sources">Evidence & limits <ArrowRight size={14} aria-hidden="true" /></a></div>
    <ChopArticle links={[{ id: "first-purchases", label: "Your first purchases" }, { id: "run-loop", label: "Make the loop work" }, { id: "next-move", label: "Find your bottleneck" }, { id: "faq", label: "Quick answers" }, { id: "sources", label: "Sources & version" }]}>
      <ChopSection id="first-purchases" number="01" title="Give your first coins a job.">
        <p className="cf-lead">Aim for a useful tool, then enough carrying space to keep it working. These are reported early-game targets, not a claim that one buy order is fastest for every run.</p>
        <div className="cf-purchase-path">
          {[{ name: "Axe", price: "150", icon: Axe, text: "Spend less of the run punching the same tree." }, { name: "Backpack", price: "175", icon: Backpack, text: "Carry a batch instead of walking back after a few logs." }, { name: "Rusty Runabout", price: "500", icon: Truck, text: "Move collected logs to the sell pad in a truckload." }].map((item, i) => <div key={item.name}><span className="cf-step-number">0{i + 1}</span><item.icon size={28} strokeWidth={1.4} aria-hidden="true" /><h3>{item.name}</h3><p className="cf-price">{item.price}<small>coins · reported</small></p><p>{item.text}</p></div>)}
        </div>
        <p className="cf-caption">Coin targets from dated community reports. Shop values can change. <SourceLink source="route" /> <SourceLink source="backpack" /> <SourceLink source="trucks" /></p>
        <ChopNote title="Do not confuse a run purchase with a Forever pass."><p>A coin purchase and a Robux offer may appear near each other. Read the currency and duration before confirming. A timed trial is not evidence that you own the tool for future runs.</p></ChopNote>
        <Link className="cf-inline-link" href="/chop-a-forest/tools">Compare the upgrades and their trade-offs <ArrowRight size={16} aria-hidden="true" /></Link>
      </ChopSection>
      <ChopSection id="run-loop" number="02" title="Treat the forest as a loop.">
        <p>The creator’s listing confirms the core loop: cut trees, collect wood, sell for coins and upgrade. It also explicitly says that solo and friend runs save. Use one of those run types when you want to continue later. <SourceLink source="official" /></p>
        <ol className="cf-checklist">
          <li><span>01</span><div><h3>Clear a patch, then collect.</h3><p>Keep a small working area near your transport or sell route. If your bag fills before you finish collecting it, deal with the load before adding another scattered pile.</p></div></li>
          <li><span>02</span><div><h3>Confirm the sale before leaving.</h3><p>After selling, collect the coins that the chipper drops, then check your balance. A truck parked near the pad still needs its sell interaction before the load is sold.</p></div></li>
          <li><span>03</span><div><h3>Choose the next upgrade from your last trip.</h3><p>Long chopping time points to tools. Repeated hauling points to storage or transport. A closed gate points to the area objective. Fixing the wrong one can spend your savings without solving the problem.</p></div></li>
        </ol>
        <p className="cf-caption">This loop audit is Upvane’s planning advice. Truck loading and selling steps are based on the <SourceLink source="trucks">Garage report</SourceLink>.</p>
      </ChopSection>
      <ChopSection id="next-move" number="03" title="What is slowing your run down?">
        <p>Choose the problem you can actually see. Get one next step, instead of another generic “upgrade everything” tip.</p>
        <BottleneckFinder />
      </ChopSection>
      <ChopFaq items={[
        { q: "Does Chop A Forest save my progress?", a: <p>The creator explicitly confirms solo and friend saves. The listing does not explain every public-server or purchase-persistence rule, so do not assume all run types behave the same way. <SourceLink source="official" /></p> },
        { q: "Why is Birch Grove still locked at 100%?", a: <p>The reported Oak Wood sequence wakes Old Barkback at full clearance. Defeat the Boss, then check for the unlock message. See the <Link href="/chop-a-forest/zones#old-barkback">first Boss walkthrough</Link> before buying more upgrades.</p> },
        { q: "Should I buy a truck or a bigger bag?", a: <p>A bag controls how much you pick up before unloading. A truck controls the batch you drive to sell. If the sell walk is the delay, a parked truck may matter more than another bag tier. If you already own one, learn its load and spawn actions first.</p> },
        { q: "Are there working Chop A Forest codes?", a: <p>We have not verified a redemption interface or a working code for this review. This section does not publish a codes list. A video title alone is not proof of a redeemable reward.</p> },
      ]} />
      <ChopRelated current="guide" />
      <ChopSources sources={["official", "route", "backpack", "trucks", "birch", "saw"]} />
    </ChopArticle>
  </ChopLayout>;
}
