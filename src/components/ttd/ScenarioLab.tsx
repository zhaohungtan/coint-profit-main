import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { computeTtdScenario } from "@/lib/scenarioEngine";
import { ArrowDownRight, ArrowUpRight, CircleDot } from "lucide-react";

function StanceBadge({ stance }: { stance: string }) {
  if (stance === "LONG") {
    return (
      <Badge className="gap-1 bg-emerald-600 px-4 py-1.5 text-base hover:bg-emerald-600">
        <ArrowUpRight className="h-4 w-4" />
        LONG TTD
      </Badge>
    );
  }
  if (stance === "SHORT") {
    return (
      <Badge variant="destructive" className="gap-1 px-4 py-1.5 text-base">
        <ArrowDownRight className="h-4 w-4" />
        SHORT TTD
      </Badge>
    );
  }
  return (
    <Badge variant="secondary" className="gap-1 px-4 py-1.5 text-base">
      <CircleDot className="h-4 w-4" />
      NEUTRAL
    </Badge>
  );
}

export function ScenarioLab() {
  const [horizonMonths, setHorizonMonths] = React.useState([12]);
  const [adGrowthPct, setAdGrowthPct] = React.useState([4]);
  const [ctvConviction, setCtvConviction] = React.useState([72]);
  const [riskAppetite, setRiskAppetite] = React.useState([55]);
  const [concentrationStress, setConcentrationStress] = React.useState([48]);

  const result = React.useMemo(
    () =>
      computeTtdScenario({
        horizonMonths: horizonMonths[0],
        adGrowthPct: adGrowthPct[0],
        ctvConviction: ctvConviction[0],
        riskAppetite: riskAppetite[0],
        concentrationStress: concentrationStress[0],
      }),
    [horizonMonths, adGrowthPct, ctvConviction, riskAppetite, concentrationStress],
  );

  return (
    <Card className="border-border/60 bg-gradient-to-b from-card/90 to-card/40">
      <CardHeader>
        <CardTitle className="text-lg">Scenario desk</CardTitle>
        <CardDescription>
          Move the levers — we map your narrative into a blunt LONG / SHORT / NEUTRAL label. This is a toy
          model for exploration, not a forecast.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>Horizon (months)</Label>
              <span className="font-mono text-sm text-muted-foreground">{horizonMonths[0]} mo</span>
            </div>
            <Slider min={1} max={36} step={1} value={horizonMonths} onValueChange={setHorizonMonths} />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>Assumed digital ad growth (YoY %)</Label>
              <span className="font-mono text-sm text-muted-foreground">{adGrowthPct[0]}%</span>
            </div>
            <Slider min={-6} max={14} step={1} value={adGrowthPct} onValueChange={setAdGrowthPct} />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>CTV / identity conviction</Label>
              <span className="font-mono text-sm text-muted-foreground">{ctvConviction[0]}</span>
            </div>
            <Slider min={0} max={100} step={1} value={ctvConviction} onValueChange={setCtvConviction} />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>Risk appetite (macro)</Label>
              <span className="font-mono text-sm text-muted-foreground">{riskAppetite[0]}</span>
            </div>
            <Slider min={0} max={100} step={1} value={riskAppetite} onValueChange={setRiskAppetite} />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>Concentration / walled-garden stress</Label>
              <span className="font-mono text-sm text-muted-foreground">{concentrationStress[0]}</span>
            </div>
            <Slider
              min={0}
              max={100}
              step={1}
              value={concentrationStress}
              onValueChange={setConcentrationStress}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 rounded-xl border border-border/50 bg-background/40 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Desk read</span>
            <StanceBadge stance={result.stance} />
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground">Scenario score (internal)</p>
            <p className="font-mono text-4xl font-bold tabular-nums">{result.score}</p>
          </div>
          <Separator />
          <p className="text-sm leading-relaxed text-foreground/90">{result.headline}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {result.bullets.map((b, i) => (
              <li key={`${i}-${b.slice(0, 24)}`} className="flex gap-2">
                <span className="text-primary">▹</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
