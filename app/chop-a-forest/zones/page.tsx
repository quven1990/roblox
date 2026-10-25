import Link from "next/link";
import { ArrowRight, Flag, LockKeyhole, Swords } from "lucide-react";
import { ChopArticle, ChopFaq, ChopHero, ChopLayout, ChopNote, ChopRelated, ChopSection, ChopSources, SourceLink } from "@/components/chop-a-forest/ChopLayout";
import { chapterOneZones, chopZonesMetadata } from "@/lib/games/chop-a-forest";

export const metadata = chopZonesMetadata;

export default function ChopZonesPage() {
  return <ChopLayout page="zones" title="Chop A Forest zones and bosses: unlock Birch Grove">
    <ChopHero page="zones" title="Chop A Forest zones." accent="Get through the next gate." description="The Chapter 1 route, a practical Old Barkback walkthrough, and what to check when the forest looks clear but the next area stays closed." />
    <div className="cf-wrap cf-answer-bar"><span className="cf-eyebrow">STUCK AT BIRCH GROVE?</span><p>The reported first gate has two parts: <strong>clear Oak Wood to 100%, then defeat Old Barkback</strong>. Buying a better tool alone does not finish that objective.</p><a href="#old-barkback">First Boss steps <ArrowRight size={14} aria-hidden="true" /></a></div>
    <ChopArticle links={[{ id: "zone-order", label: "Chapter 1 zone order" }, { id: "locked-gate", label: "Why a gate stays locked" }, { id: "old-barkback", label: "Beat the first Boss" }, { id: "finish", label: "Finish the right chapter" }, { id: "faq", label: "Quick answers" }, { id: "sources", label: "Sources & version" }]}>
      <ChopSection id="zone-order" number="01" title="Eight areas. One forest route.">
        <p className="cf-lead">Use this as a Chapter 1 orientation list, not as a map of Chapter 2. The order comes from the Oct 19 community walkthrough; the first two Boss gates are documented separately.</p>
        <ol className="cf-zone-route">{chapterOneZones.map((zone, index) => <li key={zone.name} className={`cf-zone-${zone.kind}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{zone.name}</strong>{index === 0 ? <small>Reported Boss: Old Barkback</small> : index === 1 ? <small>Reported Boss: The Pale Stag</small> : null}</li>)}</ol>
        <p className="cf-caption">Community-reported names and order. No later-Boss names, HP figures or universal gate thresholds are inferred. <SourceLink source="route" /> <SourceLink source="birch" /></p>
      </ChopSection>
      <ChopSection id="locked-gate" number="02" title="Read what the gate is asking for.">
        <p>A near-full clearance bar and a completed gate are different things. Use the message on your current run to choose the next action.</p>
        <div className="cf-diagnostics">
          <div><span className="cf-diagnostic-icon"><LockKeyhole size={22} aria-hidden="true" /></span><div><h3>The banner still counts trees left</h3><p>Walk the fence line and check around buildings for a standing trunk. Finish felling it; collecting every loose log is a separate task from cutting every standing tree.</p><small>Reported clearance check · <SourceLink source="birch" /></small></div></div>
          <div><span className="cf-diagnostic-icon"><Swords size={22} aria-hidden="true" /></span><div><h3>The area is at 100%, but a Boss is awake</h3><p>Stop spending coins on storage to solve this gate. In the documented Oak Wood sequence, the fight—not another purchase—comes next.</p><small>Oct 18 community Boss report · <SourceLink source="boss" /></small></div></div>
          <div><span className="cf-diagnostic-icon"><Flag size={22} aria-hidden="true" /></span><div><h3>The Boss is gone, but the gate still looks closed</h3><p>Look for the area-unlocked message and recheck the objective name. If they disagree, note the chapter and message before reporting a bug. No paid item is documented here as a bypass.</p><small>Upvane troubleshooting advice</small></div></div>
        </div>
        <ChopNote title="Why older walkthroughs can send you the wrong way"><p>The Oct 19 walkthrough emphasizes clearing trees; the Oct 18 first-gate report documents a Boss after clearance. Follow the live objective in your run. “Clear the area” is not enough detail when your version also asks you to fight.</p><SourceLink source="route" /> <SourceLink source="birch" /></ChopNote>
      </ChopSection>
      <ChopSection id="old-barkback" number="03" title="Old Barkback: prepare, then fight.">
        <p>The sequence below is from MMORocks’ Oct 18 playtest. Upvane has not tested Boss damage, HP, attack patterns or a guaranteed fight time. <SourceLink source="boss" /></p>
        <ol className="cf-checklist">
          <li><span>01</span><div><h3>Finish Oak Wood’s clearance objective.</h3><p>Check the remaining-tree banner, then wait for the Old Barkback wake-up message. If trees are still counted, work around the edge of the area first.</p></div></li>
          <li><span>02</span><div><h3>Use the nearby WCT Supply Crate.</h3><p>The report lists an AK-47 option at 10 coins. Read the currency on your current button; a Forever offer is a different purchase. Equip the weapon shown in your hotbar before approaching the Boss.</p></div></li>
          <li><span>03</span><div><h3>Fight from range.</h3><p>The report describes close-range knockdowns. Get your equipment selected before engaging rather than opening the crate menu beside the Boss. If downed, follow the revive or recovery prompt, then return with the weapon equipped.</p></div></li>
          <li><span>04</span><div><h3>Confirm the unlock and collect the drop.</h3><p>After the Boss falls, look for Birch Grove’s unlock notice. The first-gate report says the Acorn Egg needs a held interaction rather than a quick tap; then use PETS → EGGS to open it.</p></div></li>
        </ol>
        <p className="cf-caption">Gate, crate and egg interaction: <SourceLink source="birch" />. Fight positioning and recovery: <SourceLink source="boss" />. Keyboard slot numbers are omitted because a trial tool can occupy a slot.</p>
      </ChopSection>
      <ChopSection id="finish" number="04" title="Forest clear and desert clear are different goals.">
        <p>The creator’s badge requirements give a useful final check. They describe different finish actions for the two chapters; an empty-looking area alone is not the whole requirement. <SourceLink source="badges" /></p>
        <div className="cf-finish-grid"><div><p className="cf-eyebrow">CHAPTER 1 · FOREST</p><h3>Clear, then cash out.</h3><p>The Forest Cleared badge requires felling every tree and cashing out. The reported walkthrough points to The Businessman for the final payout; read the remaining-tree response if he will not finish the run.</p><SourceLink source="route" /></div><div><p className="cf-eyebrow">CHAPTER 2 · DESERT</p><h3>Cacti, then the detonator.</h3><p>The Desert Cleared badge specifically requires every cactus cleared and the detonator activated. Do not apply the forest’s cash-out instruction to the desert.</p><SourceLink source="badges" /></div></div>
        <p>The official timed forest badges use thresholds of under 3 hours, under 2 hours and under 90 minutes. They are separate goals from the basic clear. Finish one ordinary run before treating a speed badge as your next upgrade target.</p>
      </ChopSection>
      <ChopFaq items={[
        { q: "Do I need coins to unlock Birch Grove?", a: <p>The documented unlock is clearance plus Old Barkback. Coins help buy equipment, but a higher balance is not a substitute for the gate objective.</p> },
        { q: "Who comes after Old Barkback?", a: <p>The first-gate report names The Pale Stag in Birch Grove. Later-Boss names are not established by this review, so they are not filled in from another game or inferred from tree types. <SourceLink source="birch" /></p> },
        { q: "Why am I stuck at 99%?", a: <p>Start with the remaining-tree count. Check beside fences and structures for a trunk you missed; if a target still has HP, it has not finished falling. If the counter and visible objective disagree, record them rather than assuming you need Robux.</p> },
        { q: "Does this route cover the desert?", a: <p>No. The eight names above are the reported Chapter 1 forest route. Chapter 2 has cactus and detonator requirements, confirmed by its own badge description. We have not mapped its areas here.</p> },
      ]} />
      <ChopRelated current="zones" />
      <ChopSources sources={["official", "badges", "route", "birch", "boss"]} />
    </ChopArticle>
  </ChopLayout>;
}
