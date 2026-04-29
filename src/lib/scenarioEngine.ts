export type ScenarioInputs = {
  /** Months user expects to hold / view */
  horizonMonths: number;
  /** Expected global digital ad growth, % YoY */
  adGrowthPct: number;
  /** How much CTV share shift matters in their thesis, 0–100 */
  ctvConviction: number;
  /** Macro / risk appetite: 0 fear, 100 greed */
  riskAppetite: number;
  /** Worry about concentration among agencies / walled gardens, 0–100 */
  concentrationStress: number;
};

export type Stance = "LONG" | "SHORT" | "NEUTRAL";

export type ScenarioResult = {
  stance: Stance;
  score: number;
  headline: string;
  bullets: string[];
};

/**
 * Lightweight scenario toy — combines sliders into a directional label.
 * Not investment advice; no model of fundamentals or valuation.
 */
export function computeTtdScenario(input: ScenarioInputs): ScenarioResult {
  let score = 0;
  const bullets: string[] = [];

  if (input.adGrowthPct >= 6) {
    score += 28;
    bullets.push("Strong ad growth assumption supports demand-side platforms.");
  } else if (input.adGrowthPct >= 2) {
    score += 12;
    bullets.push("Moderate ad growth is a mild tailwind for ad-tech spend.");
  } else if (input.adGrowthPct < 0) {
    score -= 26;
    bullets.push("Shrinking ad budgets pressure CPMs and platform budgets.");
  }

  const ctv = (input.ctvConviction - 50) / 50;
  score += ctv * 18;
  if (input.ctvConviction > 65) {
    bullets.push("High CTV conviction aligns with CTV-heavy positioning narratives.");
  } else if (input.ctvConviction < 35) {
    bullets.push("Low CTV conviction discounts a core TTD story pillar.");
  }

  const risk = (input.riskAppetite - 50) / 50;
  score += risk * 10;
  if (input.riskAppetite > 70) {
    bullets.push("Risk-on backdrop often favors high-beta growth names.");
  } else if (input.riskAppetite < 30) {
    bullets.push("Risk-off environments can compress growth multiples.");
  }

  const conc = (input.concentrationStress - 50) / 50;
  score -= conc * 22;
  if (input.concentrationStress > 65) {
    bullets.push("Agency / walled-garden concentration is a recurring bear case.");
  }

  if (input.horizonMonths <= 3 && input.adGrowthPct < 0) {
    score -= 8;
    bullets.push("Short horizon + negative growth skews toward tactical caution.");
  }
  if (input.horizonMonths >= 18 && input.adGrowthPct > 4) {
    score += 8;
    bullets.push("Longer horizon + healthy growth gives more room for execution.");
  }

  score = Math.max(-100, Math.min(100, Math.round(score)));

  let stance: Stance = "NEUTRAL";
  if (score >= 18) stance = "LONG";
  else if (score <= -18) stance = "SHORT";

  const headline =
    stance === "LONG"
      ? "Scenario skew: constructive on TTD over your inputs."
      : stance === "SHORT"
        ? "Scenario skew: defensive / bearish tilt on TTD over your inputs."
        : "Scenario skew: mixed — no strong edge from these assumptions alone.";

  if (!bullets.length) {
    bullets.push("Adjust sliders to stress different paths (CTV, macro, ad growth).");
  }

  return { stance, score, headline, bullets };
}
