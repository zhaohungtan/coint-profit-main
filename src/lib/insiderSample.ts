/** Illustrative insider-style rows for UI only — not synced to live SEC Form 4 data. */
export type InsiderRow = {
  date: string;
  name: string;
  role: string;
  side: "Buy" | "Sell" | "Grant" | "Exercise";
  shares: number;
  valueUsd: number | null;
  note?: string;
};

export const INSIDER_SAMPLE: InsiderRow[] = [
  {
    date: "2026-03-14",
    name: "Green J.",
    role: "CEO",
    side: "Buy",
    shares: 12000,
    valueUsd: 612000,
    note: "Open market",
  },
  {
    date: "2026-02-02",
    name: "Vasquez L.",
    role: "CFO",
    side: "Sell",
    shares: 4200,
    valueUsd: 198000,
    note: "10b5-1 plan",
  },
  {
    date: "2026-01-18",
    name: "Pickering S.",
    role: "President",
    side: "Buy",
    shares: 5000,
    valueUsd: 241000,
    note: "Open market",
  },
  {
    date: "2025-11-30",
    name: "Green J.",
    role: "CEO",
    side: "Grant",
    shares: 85000,
    valueUsd: null,
    note: "RSU vest",
  },
  {
    date: "2025-10-08",
    name: "Arrington T.",
    role: "Director",
    side: "Buy",
    shares: 2500,
    valueUsd: 118000,
    note: "Open market",
  },
  {
    date: "2025-09-21",
    name: "Vasquez L.",
    role: "CFO",
    side: "Exercise",
    shares: 8000,
    valueUsd: null,
    note: "Options",
  },
  {
    date: "2025-08-03",
    name: "Pickering S.",
    role: "President",
    side: "Sell",
    shares: 3100,
    valueUsd: 152000,
    note: "10b5-1 plan",
  },
];
