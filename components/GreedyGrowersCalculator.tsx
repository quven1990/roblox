"use client";

import { useMemo, useState } from "react";

type Fields = {
  seedName: string;
  seedCost: string;
  baseHarvest: string;
  growthMinutes: string;
  mutationName: string;
  mutationMultiplier: string;
  petName: string;
  petAbility: string;
  petBonusPercent: string;
  petCooldownMinutes: string;
  fertilizerMultiplier: string;
  rebirthMultiplier: string;
  lightningFailurePercent: string;
  plots: string;
  playTimeMinutes: string;
};

const sampleDefaults: Fields = {
  seedName: "Sample seed",
  seedCost: "100",
  baseHarvest: "160",
  growthMinutes: "3",
  mutationName: "",
  mutationMultiplier: "1",
  petName: "",
  petAbility: "",
  petBonusPercent: "0",
  petCooldownMinutes: "0",
  fertilizerMultiplier: "1",
  rebirthMultiplier: "1",
  lightningFailurePercent: "20",
  plots: "1",
  playTimeMinutes: "60",
};

function num(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatMoney(value: number) {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(value);
}

function compute(fields: Fields) {
  const seedCost = Math.max(0, num(fields.seedCost));
  const baseHarvest = Math.max(0, num(fields.baseHarvest));
  const growthMinutes = Math.max(0.01, num(fields.growthMinutes));
  const mutationMultiplier = Math.max(0, num(fields.mutationMultiplier) || 1);
  const petBonusPercent = num(fields.petBonusPercent);
  const fertilizerMultiplier = Math.max(
    0,
    num(fields.fertilizerMultiplier) || 1,
  );
  const rebirthMultiplier = Math.max(0, num(fields.rebirthMultiplier) || 1);
  const lightningFailurePercent = Math.min(
    100,
    Math.max(0, num(fields.lightningFailurePercent)),
  );
  const plots = Math.max(1, Math.floor(num(fields.plots) || 1));
  const playTimeMinutes = Math.max(0, num(fields.playTimeMinutes));

  const successRate = 1 - lightningFailurePercent / 100;
  const baseProfit = baseHarvest - seedCost;
  const petValue = baseHarvest * (1 + petBonusPercent / 100);
  const adjustedValue =
    petValue * mutationMultiplier * fertilizerMultiplier * rebirthMultiplier;
  const lightningEv = adjustedValue * successRate - seedCost;
  const profitPerMinute = (lightningEv / growthMinutes) * plots;
  const combinedMultiplier =
    (1 + petBonusPercent / 100) *
    mutationMultiplier *
    fertilizerMultiplier *
    rebirthMultiplier;
  const breakEvenHarvest =
    successRate > 0 && combinedMultiplier > 0
      ? seedCost / (successRate * combinedMultiplier)
      : Number.POSITIVE_INFINITY;
  const attempts = Math.floor((playTimeMinutes / growthMinutes) * plots);
  const sessionEv = lightningEv * Math.max(0, attempts);
  const evPerHour = profitPerMinute * 60;

  let verdict = "Need a cleaner sample before you stretch the wait.";
  if (lightningEv <= 0) {
    verdict =
      "This sample loses money after lightning risk. Harvest earlier, cut seed cost, or lower failure rate.";
  } else if (lightningFailurePercent >= 40) {
    verdict =
      "Expected value is positive, but lightning risk is high. Prefer shorter waits until the sample repeats.";
  } else if (lightningEv > 0 && lightningFailurePercent <= 25) {
    verdict =
      "Wait longer is reasonable if this sample repeats. Keep growth time fixed when you compare.";
  }

  const petLine = fields.petName.trim()
    ? `Judging only ${fields.petName.trim()}${
        fields.petAbility.trim() ? ` (${fields.petAbility.trim()})` : ""
      }. No unverified preset ranking.`
    : "No pet selected. Compare pets after you test one.";

  return {
    baseProfit,
    petValue,
    adjustedValue,
    lightningEv,
    profitPerMinute,
    breakEvenHarvest,
    evPerHour,
    sessionEv,
    attempts,
    successRate,
    verdict,
    petLine,
  };
}

const fieldGroups: {
  title: string;
  fields: {
    key: keyof Fields;
    label: string;
    hint: string;
    type?: "text" | "number";
  }[];
}[] = [
  {
    title: "Seed run",
    fields: [
      {
        key: "seedName",
        label: "Seed",
        hint: "Name or note for the seed you are testing.",
        type: "text",
      },
      {
        key: "seedCost",
        label: "Seed cost",
        hint: "What you paid before planting.",
      },
      {
        key: "baseHarvest",
        label: "Base harvest value",
        hint: "Harvest before pet, mutation, fertilizer, or rebirth math.",
      },
      {
        key: "growthMinutes",
        label: "Growth time (minutes)",
        hint: "Minutes from planting to your planned harvest.",
      },
    ],
  },
  {
    title: "Multipliers",
    fields: [
      {
        key: "mutationName",
        label: "Mutation",
        hint: "Optional name, or leave blank.",
        type: "text",
      },
      {
        key: "mutationMultiplier",
        label: "Mutation multiplier",
        hint: "Use 1 until you have a measured multiplier.",
      },
      {
        key: "fertilizerMultiplier",
        label: "Fertilizer multiplier",
        hint: "Use 1 unless you measured a fertilizer effect.",
      },
      {
        key: "rebirthMultiplier",
        label: "Rebirth multiplier",
        hint: "Use 1 unless your rebirth bonus is verified.",
      },
    ],
  },
  {
    title: "Pet (manual only)",
    fields: [
      {
        key: "petName",
        label: "Pet",
        hint: "Optional. Leave blank if no pet is tested.",
        type: "text",
      },
      {
        key: "petAbility",
        label: "Pet ability",
        hint: "Short note for the observed ability text.",
        type: "text",
      },
      {
        key: "petBonusPercent",
        label: "Manual pet bonus %",
        hint: "Enter only a bonus you measured. No default preset.",
      },
      {
        key: "petCooldownMinutes",
        label: "Pet cooldown (minutes)",
        hint: "Minutes between observed ability triggers. Use 0 if unknown.",
      },
    ],
  },
  {
    title: "Risk and session",
    fields: [
      {
        key: "lightningFailurePercent",
        label: "Lightning failure rate %",
        hint: "Estimated percent of attempts lost before harvest.",
      },
      {
        key: "plots",
        label: "Number of plots",
        hint: "How many plots repeat the same run.",
      },
      {
        key: "playTimeMinutes",
        label: "Play time (minutes)",
        hint: "Session length used for the session EV preview.",
      },
    ],
  },
];

export function GreedyGrowersCalculator() {
  const [fields, setFields] = useState<Fields>(sampleDefaults);
  const result = useMemo(() => compute(fields), [fields]);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="gg-calc">
      <div className="gg-calc-toolbar">
        <p className="source">
          Sample values only. Pet bonus starts at 0 because no pet multiplier is
          verified yet.
        </p>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => setFields(sampleDefaults)}
        >
          Reset sample
        </button>
      </div>

      <div className="gg-calc-layout">
        <form
          className="gg-calc-form"
          onSubmit={(event) => event.preventDefault()}
        >
          {fieldGroups.map((group) => (
            <fieldset key={group.title} className="gg-calc-fieldset">
              <legend>{group.title}</legend>
              <div className="gg-calc-fields">
                {group.fields.map((field) => (
                  <label key={field.key} className="gg-calc-field">
                    <span>{field.label}</span>
                    <input
                      type={field.type ?? "number"}
                      inputMode={field.type === "text" ? undefined : "decimal"}
                      value={fields[field.key]}
                      onChange={(event) =>
                        update(field.key, event.target.value)
                      }
                    />
                    <em>{field.hint}</em>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </form>

        <div className="gg-calc-results" aria-live="polite">
          <h2>Results</h2>
          <dl className="gg-calc-stats">
            <div>
              <dt>Base profit</dt>
              <dd>{formatMoney(result.baseProfit)}</dd>
              <p>Base harvest value minus one seed cost.</p>
            </div>
            <div>
              <dt>Pet-adjusted value</dt>
              <dd>{formatMoney(result.petValue)}</dd>
              <p>Base value after the manual pet bonus percent.</p>
            </div>
            <div>
              <dt>Mutation-adjusted value</dt>
              <dd>{formatMoney(result.adjustedValue)}</dd>
              <p>Pet value after mutation, fertilizer, and rebirth.</p>
            </div>
            <div>
              <dt>Lightning-adjusted EV</dt>
              <dd>{formatMoney(result.lightningEv)}</dd>
              <p>
                Expected profit per attempt after{" "}
                {formatMoney(result.successRate * 100)}% success and seed cost.
              </p>
            </div>
            <div>
              <dt>Profit per minute</dt>
              <dd>{formatMoney(result.profitPerMinute)}</dd>
              <p>EV divided by growth time, then multiplied by plots.</p>
            </div>
            <div>
              <dt>Break-even harvest</dt>
              <dd>{formatMoney(result.breakEvenHarvest)}</dd>
              <p>
                Base harvest needed to break even after multipliers and
                lightning risk.
              </p>
            </div>
            <div>
              <dt>Expected value per hour</dt>
              <dd>{formatMoney(result.evPerHour)}</dd>
              <p>Profit per minute × 60.</p>
            </div>
            <div>
              <dt>Session expected value</dt>
              <dd>{formatMoney(result.sessionEv)}</dd>
              <p>
                {result.attempts} planned attempt
                {result.attempts === 1 ? "" : "s"} in the entered play time.
              </p>
            </div>
          </dl>

          <div className="note">
            <p>
              <strong>Harvest now / wait longer.</strong> {result.verdict}
            </p>
          </div>
          <div className="note">
            <p>
              <strong>Best pet for this seed.</strong> {result.petLine}
            </p>
          </div>
          <div className="note warn">
            <p>
              <strong>Data trust.</strong> Manual sample. Needs repeated runs
              before ranking. Pet cooldown is recorded for your notes and does
              not change the EV math yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
