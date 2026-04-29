import { INSIDER_SAMPLE } from "@/lib/insiderSample";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function sideVariant(side: string): "default" | "secondary" | "destructive" | "outline" {
  if (side === "Buy") return "default";
  if (side === "Sell") return "destructive";
  return "secondary";
}

export function InsiderTable() {
  return (
    <Card className="border-border/60 bg-card/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          Insider tape
          <Badge variant="outline" className="font-normal text-[10px] uppercase tracking-wide">
            Demo rows
          </Badge>
        </CardTitle>
        <CardDescription>
          Styled like retail flow terminals — sample transactions only, not a live Form 4 feed.
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Insider</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Side</TableHead>
              <TableHead className="text-right">Shares</TableHead>
              <TableHead className="text-right">Value</TableHead>
              <TableHead className="hidden md:table-cell">Note</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {INSIDER_SAMPLE.map((row, i) => (
              <TableRow key={`${row.date}-${row.name}-${row.side}-${i}`}>
                <TableCell className="whitespace-nowrap font-mono text-xs">{row.date}</TableCell>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell className="text-muted-foreground">{row.role}</TableCell>
                <TableCell>
                  <Badge variant={sideVariant(row.side)} className="text-[10px]">
                    {row.side}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono text-sm tabular-nums">
                  {row.shares.toLocaleString()}
                </TableCell>
                <TableCell className="text-right font-mono text-sm tabular-nums">
                  {row.valueUsd != null ? `$${(row.valueUsd / 1000).toFixed(0)}k` : "—"}
                </TableCell>
                <TableCell className="hidden max-w-[180px] truncate text-muted-foreground md:table-cell">
                  {row.note}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
