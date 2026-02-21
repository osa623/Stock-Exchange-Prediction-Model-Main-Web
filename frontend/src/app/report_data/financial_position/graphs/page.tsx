"use client";

import MainNav from "@/components/Ui/Stocks/MainNav";
import SecondaryNav from "@/components/Ui/Stocks/Report_DataNav";
import FinancialPositionSubNav from "@/components/Ui/Stocks/FinancialPositionSubNav";
import { financialPositionDataByYear, years } from "@/components/Pages/ReportData/financialPositionData";

function buildSeries(label: string) {
  return years.map((y) => {
    const row = financialPositionDataByYear[y].find((r) => r.label === label);
    return { year: y, value: row ? row.value : 0 };
  });
}

function SimpleLineChart({ data, color = "#B28D41", height = 140 }: { data: { year: string; value: number }[]; color?: string; height?: number }) {
  const width = 500;
  const padding = 24;
  const vals = data.map((d) => d.value);
  const max = Math.max(...vals);
  const min = Math.min(...vals);
  const range = max - min || 1;

  const x = (i: number) => padding + (i * (width - padding * 2)) / (data.length - 1);
  const y = (v: number) => padding + (1 - (v - min) / range) * (height - padding * 2);

  const points = data.map((d, i) => `${x(i)},${y(d.value)}`).join(" ");

  return (
    <div className="bg-[#0F1729] p-4 rounded-lg border border-white/5">
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="none">
        <polyline points={points} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
        {data.map((d, i) => (
          <circle key={d.year} cx={x(i)} cy={y(d.value)} r={3.5} fill={color} />
        ))}
      </svg>
      <div className="mt-3 flex justify-between text-xs text-gray-400">
        {data.map((d) => (
          <div key={d.year} className="whitespace-nowrap">{d.year}</div>
        ))}
      </div>
    </div>
  );
}

export default function FinancialPositionGraphsPage() {
  const charts = [
    { title: "Total Assets", metric: "Total Assets", color: "#4ADE80" },
    { title: "Total Liabilities", metric: "Total Liabilities", color: "#60A5FA" },
    { title: "Total Equity", metric: "Total Equity", color: "#FBBF24" },
    { title: "Net Asset Value", metric: "Net Asset Value", color: "#F87171" },
  ];

  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-8 space-y-8">

        {/* TOP NAV */}
        <MainNav />

        {/* SECONDARY NAV */}
        <SecondaryNav />

        {/* SUB NAV: Financials / Graphs */}
        <FinancialPositionSubNav />

        {/* CHARTS SECTION */}
        <div className="space-y-8">
          {charts.map((chart) => (
            <div key={chart.metric} className="w-full">
              <h3 className="text-sm font-bold text-[#B28D41] mb-2">{chart.title}</h3>
              <SimpleLineChart data={buildSeries(chart.metric)} color={chart.color} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
