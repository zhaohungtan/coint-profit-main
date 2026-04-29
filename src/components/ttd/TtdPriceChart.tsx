import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { PricePoint } from "@/lib/ttdSeries";

const chartConfig = {
  close: {
    label: "Close",
    color: "hsl(24 100% 52%)",
  },
} satisfies import("@/components/ui/chart").ChartConfig;

function sliceForRange(data: PricePoint[], range: string) {
  if (range === "all") return data;
  const n = range === "3m" ? 63 : range === "1y" ? 252 : data.length;
  return data.slice(-Math.min(n, data.length));
}

type Props = {
  data: PricePoint[];
};

export function TtdPriceChart({ data }: Props) {
  const [range, setRange] = React.useState("1y");
  const sliced = React.useMemo(() => sliceForRange(data, range), [data, range]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold tracking-tight">Interactive price path</h2>
        <Tabs value={range} onValueChange={setRange} className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-3 sm:w-[280px]">
            <TabsTrigger value="3m">3M</TabsTrigger>
            <TabsTrigger value="1y">1Y</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <ChartContainer config={chartConfig} className="aspect-[16/9] min-h-[280px] w-full md:aspect-[21/9]">
        <AreaChart data={sliced} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="fillTtd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-close)" stopOpacity={0.35} />
              <stop offset="95%" stopColor="var(--color-close)" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border/40" />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            minTickGap={32}
            tickFormatter={(v) => v.slice(5)}
            className="text-[10px]"
          />
          <YAxis
            domain={["auto", "auto"]}
            tickLine={false}
            axisLine={false}
            width={52}
            tickFormatter={(v) => `$${v}`}
            className="text-[10px]"
          />
          <ChartTooltip
            cursor={{ stroke: "hsl(var(--border))", strokeWidth: 1 }}
            content={<ChartTooltipContent labelFormatter={(l) => String(l)} />}
          />
          <Area
            type="monotone"
            dataKey="close"
            stroke="var(--color-close)"
            fill="url(#fillTtd)"
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
      <p className="text-center text-xs text-muted-foreground">
        Synthetic series for visualization — not exchange-synchronized. Pan/zoom via range tabs.
      </p>
    </div>
  );
}
