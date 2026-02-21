"use client";

import MainNav from "@/components/Ui/Stocks/MainNav";
import SecondaryNav from "@/components/Ui/Stocks/RatioNav";
import RatiosSubNav from "@/components/Ui/Stocks/RatiosSubNav";
import { ratiosIncomeDataByYear, years } from "@/components/Pages/Ratios/ratiosData";
import EChartsLineChart from "@/components/Ui/Charts/EChartsLineChart";

function buildSeries(label: string) {
  return years.map((y) => {
    const row = ratiosIncomeDataByYear[y].find((r) => r.label === label);
    return { year: y, value: row ? row.value : 0 };
  });
}

const charts = [
  { title: "P/E Ratio", metric: "P/E Ratio", color: "#4ADE80" },
  { title: "P/B Ratio", metric: "P/B Ratio", color: "#60A5FA" },
  { title: "P/S Ratio", metric: "P/S Ratio", color: "#FBBF24" },
  { title: "Earnings Yield", metric: "Earnings Yield", color: "#F87171" },
];

export default function RatiosIncomeGraphsPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-8 space-y-8">

        {/* TOP NAV */}
        <MainNav />

        {/* SECONDARY NAV */}
        <SecondaryNav />

        {/* SUB NAV */}
        <RatiosSubNav />

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
