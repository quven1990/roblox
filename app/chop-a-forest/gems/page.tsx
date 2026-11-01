import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import { ChopArticle, ChopFaq, ChopHero, ChopLayout, ChopNote, ChopRelated, ChopSection, ChopSources, SourceLink } from "@/components/chop-a-forest/ChopLayout";
export const metadata = pageMetadata("How to Get Gems in Chop A Forest & What to Buy First | Upvane", "Find the reported free Gem sources, fix a reward that will not claim, and choose a first Gem Perk without assuming fixed payouts or drop rates.", "/chop-a-forest/gems");
export default function GemsPage() {
  return <ChopLayout page="gems" title="How to get Gems in Chop A Forest and what to buy first">
    <ChopHero page="gems" title="How to get Gems" accent="in Chop A Forest." description="Start with the reward you can claim, then build Gems into a normal run. Know what to check before spending the first ones." />
    <div className="cf-wrap cf-answer-bar"><span className="cf-eyebrow">QUICK ANSWER</span><p>Check the lobby <strong>Rewards</strong> panels, then collect Gem drops during a run. Community reports describe daily, one-time group and gameplay rewards; use your own claim panel for the actual amount and timer.</p><a href="#first-perk">Choose a first perk →</a></div>
    <ChopArticle links={[{ id: "gem-sources", label: "Where Gems come from" }, { id: "claim", label: "Reward will not claim?" }, { id: "first-perk", label: "What to buy first" }, { id: "budget", label: "Budget before buying" }, { id: "faq", label: "Questions" }, { id: "sources", label: "Sources" }]}>
      <ChopSection id="gem-sources" number="01" title="Four reported places to check.">
        <p className="cf-lead">Gems are a different balance from the coins used for your early Axe and truck. The following routes come from dated community reports, not an Upvane farming test.</p>
        <ol className="cf-checklist">
          <li><span>01</span><div><h3>Daily Reward in the lobby</h3><p>Find the Rewards hut and inspect the Daily Reward pad. Claim if ready, then read the next-claim countdown. Do not assume that “daily” means a midnight reset. <SourceLink source="gemRewards" /></p></div></li>
          <li><span>02</span><div><h3>One-time group reward</h3><p>Open the current checklist and follow the group link attached to the actual WCT Capital game. Complete the listed requirements, return to the reward panel and confirm its claim state. A one-time reward is not repeatable income. <SourceLink source="gemRewards" /></p></div></li>
          <li><span>03</span><div><h3>Blue Gem drops while clearing</h3><p>The later playtest reports blue Gem objects near stumps and Gems alongside log sales. Check the Gem counter separately after collecting: a coin increase alone does not confirm a Gem payout. <SourceLink source="gems" /></p></div></li>
          <li><span>04</span><div><h3>The first Boss drop</h3><p>Old Barkback is reported to drop Gems. Pick them up after the fight; do not budget an invented fixed amount or assume an unlimited repeat-farm. The <Link href="/chop-a-forest/zones#old-barkback">Boss route</Link> covers reaching that fight. <SourceLink source="birch" /></p></div></li>
        </ol>
        <ChopNote title="Why this is not a “140 free Gems per day” promise"><p>An Oct 14 guide reports 35 Gems on a six-hour timer, while the later report describes reward-day amounts. Those observations do not establish your current reward or four guaranteed claims. Read the value you can actually collect; never add one-time group rewards into a daily forecast.</p></ChopNote>
      </ChopSection>
      <ChopSection id="claim" number="02" title="If the reward will not claim, check its state.">
        <div className="cf-diagnostics">
          <div><span className="cf-diagnostic-icon">1</span><div><h3>A countdown is still running</h3><p>That panel is on cooldown. Keep playing and return when it says ready; leaving and joining again is not evidence that the timer should reset.</p></div></div>
          <div><span className="cf-diagnostic-icon">2</span><div><h3>A group task is unticked</h3><p>Check the group linked from the experience rather than a similar name from search. The older guide describes rejoining after completing its checklist. Reopen the panel to see whether the requirement refreshed. <SourceLink source="gemRewards" /></p></div></div>
          <div><span className="cf-diagnostic-icon">3</span><div><h3>The panel says already claimed</h3><p>For a one-time reward, that can be the completed state. If it conflicts with your balance, record the message and before/after Gem count for a developer report. Do not buy a pass just to test a free claim.</p></div></div>
        </div>
      </ChopSection>
      <ChopSection id="first-perk" number="03" title="Spend for the problem your run has.">
        <p>Open <strong>SHOP → GEM PERKS</strong> to inspect the offers. The cited playtest uses the SHOP button or PC key R; follow the displayed control on other devices. <SourceLink source="gems" /></p>
        <p><strong>Sell Value is the clearest reported first option for coin progression:</strong> both cited guides list 25 Gems for a 10% cash-per-log bonus. Check the current Gem Perks panel before confirming. This is a source-backed starting suggestion, not a measured fastest-clear strategy. <SourceLink source="gems" /> <SourceLink source="gemRewards" /></p>
        <div className="cf-comparison"><div><p className="cf-eyebrow">EARNING COINS IS THE LIMIT</p><h3>Inspect Sell Value.</h3><p>A sale-value perk addresses the reward from wood you already deliver. It does not remove a locked gate or collect the wood for you.</p></div><div><p className="cf-eyebrow">YOU KEEP STOPPING TO UNLOAD</p><h3>Inspect carrying space.</h3><p>Bigger Bundle is reported at 30 Gems for one extra slot. Before spending, compare that small change with the coin Backpack options on the <Link href="/chop-a-forest/tools#hauling">hauling guide</Link>.</p></div></div>
        <ChopNote title="Do not buy Mutation Luck from an old table"><p>The two reports disagree: one lists 25 Gems and +15%, the other 40 Gems and +5%. Neither is a reliable current quote. Use the exact cost and effect displayed in your build; this guide does not resolve the conflict by averaging them.</p></ChopNote>
      </ChopSection>
      <ChopSection id="budget" number="04" title="Check what the purchase leaves you.">
        <p>If your current panel still shows Sell Value at 25 Gems and Bigger Bundle at 30, the pair costs <strong>55 Gems</strong>. The examples below assume you own neither. They are budget arithmetic, not a promise of today’s prices or a recommendation to buy both.</p>
        <div className="cf-table-wrap"><table className="cf-table"><caption>Example budget at 25- and 30-Gem prices</caption><thead><tr><th scope="col">Starting Gems</th><th scope="col">After Sell Value</th><th scope="col">Can you also cover Bigger Bundle?</th></tr></thead><tbody>
          <tr><th scope="row">25</th><td>0</td><td>No; another 30 Gems would be needed.</td></tr>
          <tr><th scope="row">40</th><td>15</td><td>No; another 15 Gems would be needed.</td></tr>
          <tr><th scope="row">55</th><td>30</td><td>Yes, at the stated 30-Gem price.</td></tr>
        </tbody></table></div>
        <p>Before confirming, read the selected perk name, currency, cost and effect. Afterward, check both the ownership indicator and remaining Gem balance. If you already own a perk or your shop shows a different price, recalculate from that state instead of following the example.</p>
        <p>There is no need to spend the remainder immediately. One extra carrying slot may be less useful than a coin Backpack upgrade or saving toward another objective. Use the <Link href="/chop-a-forest/tools#hauling">bag-versus-truck comparison</Link> to identify the delay you are trying to remove.</p>
      </ChopSection>
      <ChopFaq items={[
        { q: "What is the fastest free Gem method?", a: <p>We do not have a timed comparison. Claim an available reward, then check Gem drops while progressing normally. A guaranteed hourly rate would need a measured run and clear conditions.</p> },
        { q: "Do Gems and coins buy the same upgrades?", a: <p>No. Read the currency icon on each offer. This page concerns Gem rewards and Gem Perks; the <Link href="/chop-a-forest/tools">coin purchase planner</Link> uses only coin targets.</p> },
        { q: "Can I claim the group reward again?", a: <p>The cited reports describe it as one-time. Rejoining the group does not establish a new entitlement.</p> },
      ]} />
      <ChopRelated current="gems" /><ChopSources reviewed="November 1, 2026" sources={["official", "gems", "gemRewards", "birch"]} />
    </ChopArticle>
  </ChopLayout>;
}
