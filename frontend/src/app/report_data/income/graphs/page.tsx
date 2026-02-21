"use client";

import MainNav from "@/components/Ui/Stocks/MainNav";
import SecondaryNav from "@/components/Ui/Stocks/Report_DataNav";
import IncomeSubNav from "@/components/Ui/Stocks/IncomeSubNav";
import { incomeDataByYear, years } from "@/components/Pages/ReportData/incomeData";
import EChartsLineChart from "@/components/Ui/Charts/EChartsLineChart";

function buildSeries(label: string) {
  return years.map((y) => {
    const row = incomeDataByYear[y].find((r) => r.label === label);
    return { year: y, value: row ? row.value : 0 };
  });
}

const charts = [
  { title: "Gross Income (Operating Income)", metric: "Operating Income", color: "#4ADE80" },
  { title: "Net Profit", metric: "Net Profit", color: "#60A5FA" },
  { title: "Other Operating Income", metric: "Other Operating Income", color: "#FBBF24" },
  { title: "Other Operating Expense", metric: "Other Operating Expense", color: "#F87171" },
  { title: "EPS (Earnings Per Share)", metric: "EPS", color: "#A78BFA" },
  { title: "Dividends", metric: "Dividends", color: "#FB7185" },
];

export default function IncomeGraphsPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-8 space-y-8">

        {/* TOP NAV */}
        <MainNav />

        {/* SECONDARY NAV */}
        <SecondaryNav />

        {/* SUB NAV */}
        <IncomeSubNav />

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
