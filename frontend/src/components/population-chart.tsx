"use client";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { PopulationCounts } from "@/types/country";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const chartConfig = {
  value: {
    label: "value",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function PopulationChart({
  chartData,
}: {
  chartData: PopulationCounts[];
}) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#eaeaea" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
