"use client";

import MainNav from "@/components/Ui/Stocks/MainNav";
import SecondaryNav from "@/components/Ui/Stocks/CalculationsNav";
import CalculationsSubNav from "@/components/Ui/Stocks/CalculationsSubNav";
import { calculationsIncomeDataByYear, years } from "@/components/Pages/Calculations/calculationsData";
import EChartsLineChart from "@/components/Ui/Charts/EChartsLineChart";

function buildSeries(label: string) {
  return years.map((y) => {
    const row = calculationsIncomeDataByYear[y].find((r) => r.label === label);
    return { year: y, value: row ? row.value : 0 };
  });
}

const charts = [
  { title: "Revenue Growth Rate", metric: "Revenue Growth Rate", color: "#4ADE80" },
  { title: "Gross Profit", metric: "Gross Profit", color: "#60A5FA" },
  { title: "Gross Profit Margin", metric: "Gross Profit Margin", color: "#FBBF24" },
  { title: "Operating Profit (EBIT)", metric: "Operating Profit (EBIT)", color: "#F87171" },
];

export default function CalculationsIncomeGraphsPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-8 space-y-8">

        {/* TOP NAV */}
        <MainNav />

        {/* SECONDARY NAV */}
        <SecondaryNav />

        {/* SUB NAV */}
        <CalculationsSubNav />

        {/* CHARTS GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {charts.map((chart) => (
            <div
              key={chart.metric}
              className="rounded-2xl border border-white/[0.06] bg-[#0A1128]/80 backdrop-blur-sm p-5 shadow-xl shadow-black/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: chart.color, boxShadow: `0 0 8px ${chart.color}88` }}
                />
                <h3 className="text-sm font-semibold text-slate-200 tracking-wide">
                  {chart.title}
                </h3>
              </div>

              <EChartsLineChart
                data={buildSeries(chart.metric)}
                color={chart.color}
                height={280}
                areaFill
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
