"use client";
import { useState } from "react";

type CashFlowRow = {
  label: string;
  value: number;
};

type Year = "2020" | "2021" | "2022" | "2023" | "2024";

const cashFlowDataByYear: Record<Year, CashFlowRow[]> = {
  2020: [
    { label: "Interest Income", value: 6567458657 },
    { label: "Interest Expense", value: 4325654667 },
    { label: "Net Interest Income", value: 2241803990 },
    { label: "Operating Income", value: 1674567890 },
    { label: "Operating Expenses", value: 845678900 },
    { label: "Profit Before Tax", value: 828888990 },
    { label: "Tax Expense", value: 255666000 },
    { label: "Net Profit", value: 573222990 },
  ],
  2021: [
    { label: "Interest Income", value: 7067458657 },
    { label: "Interest Expense", value: 4825654667 },
    { label: "Net Interest Income", value: 2241803990 },
    { label: "Operating Income", value: 1774567890 },
    { label: "Operating Expenses", value: 905678900 },
    { label: "Profit Before Tax", value: 868888990 },
    { label: "Tax Expense", value: 265666000 },
    { label: "Net Profit", value: 603222990 },
  ],
  2022: [
    { label: "Interest Income", value: 7567458657 },
    { label: "Interest Expense", value: 5325654667 },
    { label: "Net Interest Income", value: 2241803990 },
    { label: "Operating Income", value: 1874567890 },
    { label: "Operating Expenses", value: 945678900 },
    { label: "Profit Before Tax", value: 928888990 },
    { label: "Tax Expense", value: 275666000 },
    { label: "Net Profit", value: 653222990 },
  ],
  2023: [
    { label: "Interest Income", value: 8067458657 },
    { label: "Interest Expense", value: 5625654667 },
    { label: "Net Interest Income", value: 2441803990 },
    { label: "Operating Income", value: 1974567890 },
    { label: "Operating Expenses", value: 975678900 },
    { label: "Profit Before Tax", value: 998888990 },
    { label: "Tax Expense", value: 295666000 },
    { label: "Net Profit", value: 703222990 },
  ],
  2024: [
    { label: "Interest Income", value: 8567458657 },
    { label: "Interest Expense", value: 5925654667 },
    { label: "Net Interest Income", value: 2641803990 },
    { label: "Operating Income", value: 2074567890 },
    { label: "Operating Expenses", value: 995678900 },
    { label: "Profit Before Tax", value: 1078888990 },
    { label: "Tax Expense", value: 315666000 },
    { label: "Net Profit", value: 763222990 },
  ],
};

const colWidths = {
  label: "w-[60%]",
  value: "w-[40%]",
};

export default function CashFlow() {
  const [activeYear, setActiveYear] = useState<Year>("2024");

  return (
    <section className="relative flex flex-col w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 h-full">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-6">

        {/* HEADER SECTION */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xs sm:text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest font-encode">
            Financial Data
          </h2>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#c7cbd0] tracking-tight leading-tight font-encode">
              STATEMENT OF CASH FLOW
            </h3>
            <div className="hidden sm:block h-[2px] w-20 bg-gradient-to-r from-[#B28D41] to-transparent mb-2"></div>
          </div>
        </div>

        {/* YEAR TABS — EXACTLY LIKE INCOME STATEMENT */}
        <div className="flex gap-1">
          {(Object.keys(cashFlowDataByYear) as Year[]).map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-4 py-2 text-sm font-semibold rounded-t-lg transition-all
                ${
                  activeYear === year
                    ? "bg-[#121C33] text-[#B28D41] border border-white/10 border-b-0"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* TABLE SECTION */}
        <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          {/* Table Header */}
          <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 items-center bg-[#0F1729]/80">
            <div className={`${colWidths.label} text-left text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>
              Item
            </div>
            <div className={`${colWidths.value} text-right text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>
              Amount (LKR)
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col max-h-[600px] overflow-y-auto hide-scrollbar">
            {cashFlowDataByYear[activeYear].map((row: CashFlowRow) => (
              <div
                key={row.label}
                className="flex w-full items-center px-4 sm:px-6 py-4 hover:bg-white/[0.02] transition-colors border-b border-white/[0.03] last:border-0 group cursor-default"
              >
                <div className={`${colWidths.label} flex flex-col pr-4`}>
                  <span className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-white transition-colors font-encode">
                    {row.label}
                  </span>
                </div>
                <div className={`${colWidths.value} text-right text-gray-300 font-mono text-sm sm:text-base group-hover:text-[#B28D41] transition-colors`}>
                  <span className="text-gray-600 mr-2 text-xs">LKR</span>
                  {row.value.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
