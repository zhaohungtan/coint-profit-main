import { TrendingDown, TrendingUp } from "lucide-react";

type Props = {
  symbol: string;
  company: string;
  last: number;
  changePct: number;
  rangeHigh: number;
  rangeLow: number;
};

export function TtdQuoteStrip({ symbol, company, last, changePct, rangeHigh, rangeLow }: Props) {
  const up = changePct >= 0;
  return (
    <div className="rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-md">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{symbol}</p>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{company}</h1>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <p className="text-xs text-muted-foreground">Last (demo series)</p>
            <p className="font-mono text-3xl font-semibold tabular-nums md:text-4xl">${last.toFixed(2)}</p>
          </div>
          <div
            className={`flex items-center gap-1 rounded-lg px-3 py-1.5 font-mono text-sm font-medium ${
              up ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"
            }`}
          >
            {up ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            {up ? "+" : ""}
            {changePct.toFixed(2)}% <span className="text-muted-foreground">/ ~21d</span>
          </div>
          <div className="hidden border-l border-border/60 pl-6 sm:block">
            <p className="text-xs text-muted-foreground">Series range</p>
            <p className="font-mono text-sm tabular-nums text-muted-foreground">
              ${rangeLow.toFixed(2)} – ${rangeHigh.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
