"use client";

import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";

const startingItems = [
  { name: "Axe", defaultPrice: "150" },
  { name: "First Backpack", defaultPrice: "175" },
  { name: "Rusty Runabout", defaultPrice: "500" },
];

export function PurchasePlanner() {
  const [coins, setCoins] = useState("0");
  const [owned, setOwned] = useState([false, false, false]);
  const [prices, setPrices] = useState(startingItems.map(item => item.defaultPrice));
  const next = owned.findIndex(value => !value);
  const valid = coins.trim() !== "" && Number.isFinite(Number(coins)) && Number(coins) >= 0 && Number.isInteger(Number(coins)) && prices.every(price => price.trim() !== "" && Number.isFinite(Number(price)) && Number(price) >= 0 && Number.isInteger(Number(price)));
  const short = next >= 0 && valid ? Math.max(0, Number(prices[next]) - Number(coins)) : 0;
  function reset() { setCoins("0"); setOwned([false, false, false]); setPrices(startingItems.map(item => item.defaultPrice)); }
  return <div className="cf-planner">
    <div className="cf-planner-heading"><div><p className="cf-eyebrow">A SMALL PLANNING AID</p><h3>Your next coin target.</h3></div><button type="button" onClick={reset}><RotateCcw size={13} aria-hidden="true" />Reset</button></div>
    <p>Check what you own in this run. Replace any default price with the coin price in your current shop.</p>
    <label className="cf-budget-label">Your current coins<input type="number" min="0" step="1" inputMode="numeric" value={coins} onChange={event => setCoins(event.target.value)} /></label>
    <div className="cf-planner-items">{startingItems.map((item, i) => <div key={item.name}><label className="cf-owned-label"><input type="checkbox" checked={owned[i]} onChange={event => setOwned(values => values.map((value, index) => index === i ? event.target.checked : value))} /><span>{item.name}</span></label><label className="cf-planner-price"><span>{item.name} coin price</span><input type="number" min="0" step="1" inputMode="numeric" value={prices[i]} onChange={event => setPrices(values => values.map((value, index) => index === i ? event.target.value : value))} /><small>coins</small></label></div>)}</div>
    <div className="cf-planner-result" aria-live="polite" aria-atomic="true">{!valid ? <p>Enter zero or a positive whole number for your coins and each price.</p> : next === -1 ? <><Check size={22} aria-hidden="true" /><div><strong>Your starter route is covered.</strong><p>Use the hauling and cutting checks below to choose what comes next.</p></div></> : <><span className="cf-planner-target">0{next + 1}</span><div><strong>{short > 0 ? `Save ${short.toLocaleString("en-US")} more coins for ${startingItems[next].name}.` : `You can cover ${startingItems[next].name} at the entered price.`}</strong><p>{short > 0 ? "Gap = the entered price minus your current coins." : "This checks price only. Quest progress and shop availability still apply."}</p></div></>}</div>
    <p className="cf-caption">Uses the suggested starter order, not an optimization model. Planner state resets on reload. Existing site analytics are described in the Privacy Policy.</p>
  </div>;
}
