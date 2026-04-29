import * as React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TtdQuoteStrip } from "@/components/ttd/TtdQuoteStrip";
import { TtdPriceChart } from "@/components/ttd/TtdPriceChart";
import { InsiderTable } from "@/components/ttd/InsiderTable";
import { ScenarioLab } from "@/components/ttd/ScenarioLab";
import { generateTtdSeries, seriesStats } from "@/lib/ttdSeries";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const series = React.useMemo(() => generateTtdSeries(), []);
  const stats = React.useMemo(() => seriesStats(series), [series]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="relative pt-24">
        <div className="pointer-events-none absolute inset-0 grid-background-animated opacity-40" />
        <div className="relative container mx-auto space-y-12 px-4 pb-20 md:px-6">
          <section className="space-y-4">
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Backed by UC Berkeley grads · Ex-Tesla & Uber
            </p>
            <TtdQuoteStrip
              symbol="TTD"
              company="CoinProfit"
              last={stats.last}
              changePct={stats.changePct}
              rangeHigh={stats.high}
              rangeLow={stats.low}
            />
          </section>

          <section id="chart">
            <Card className="border-border/60 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 pt-6 md:p-6">
                <TtdPriceChart data={series} />
              </CardContent>
            </Card>
          </section>

          <section id="insider" className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <InsiderTable />
            </div>
            <div className="space-y-4 lg:col-span-2">
              <Card className="h-full border-amber-500/25 bg-amber-500/[0.04]">
                <CardContent className="flex h-full flex-col justify-center space-y-3 p-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-amber-200/90">Flow read</p>
                  <p className="text-sm leading-relaxed text-foreground/85">
                    Retail terminals love painting stripes on insider prints. Here you get the same energy —
                    sortable table, badges, dollar notionals — with explicit &quot;demo data&quot; watermarks so
                    nobody mistakes this for a compliance-grade feed.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    For real filings use SEC EDGAR or your broker&apos;s insider tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="scenario">
            <ScenarioLab />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
