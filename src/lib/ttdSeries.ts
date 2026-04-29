/** Deterministic pseudo-price series for charting (not a live market feed). */
export type PricePoint = { date: string; close: number };

const MS_DAY = 86400000;
const PRICE_MIN = 23;
const PRICE_MAX = 50;

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function formatDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

/**
 * ~18 months of weekday closes in [$23, $50], newest bar exactly $23 (stylized demo band).
 */
export function generateTtdSeries(tradingDays = 390, seed = 42): PricePoint[] {
  const rand = mulberry32(seed);
  const newestFirst: PricePoint[] = [];
  const end = new Date();
  end.setUTCHours(12, 0, 0, 0);

  let price = PRICE_MIN;
  let dayOffset = 0;

  while (newestFirst.length < tradingDays) {
    const d = new Date(end.getTime() - dayOffset * MS_DAY);
    const dow = d.getUTCDay();
    if (dow !== 0 && dow !== 6) {
      if (newestFirst.length > 0) {
        const mid = (PRICE_MIN + PRICE_MAX) / 2;
        const drift = (mid - price) * 0.028;
        const shock = (rand() - 0.5) * 3.2;
        price = Math.max(PRICE_MIN, Math.min(PRICE_MAX, price + drift + shock));
      }
      newestFirst.push({ date: formatDate(d), close: Math.round(price * 100) / 100 });
    }
    dayOffset += 1;
  }

  const chronological = newestFirst.reverse();
  chronological[chronological.length - 1].close = PRICE_MIN;

  let hi = 0;
  for (let i = 0; i < chronological.length - 1; i++) {
    if (chronological[i].close > chronological[hi].close) hi = i;
  }
  if (chronological[hi].close < PRICE_MAX - 0.01) {
    chronological[hi] = { ...chronological[hi], close: PRICE_MAX };
  }

  return chronological;
}

export function seriesStats(series: PricePoint[]) {
  if (!series.length) {
    return { last: PRICE_MIN, changePct: 0, high: PRICE_MAX, low: PRICE_MIN };
  }
  const last = series[series.length - 1].close;
  const prev = series.length > 21 ? series[series.length - 22].close : series[0].close;
  const changePct = prev ? ((last - prev) / prev) * 100 : 0;
  const closes = series.map((p) => p.close);
  return {
    last,
    changePct,
    high: Math.max(...closes),
    low: Math.min(...closes),
  };
}
