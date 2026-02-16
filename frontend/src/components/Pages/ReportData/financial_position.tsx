"use client";
import { useState } from "react";

type PositionRow = {
  label: string;
  value: number;
};

type Year = "2020" | "2021" | "2022" | "2023" | "2024";

const positionDataByYear: Record<Year, PositionRow[]> = {
  2020: [
    { label: "Total Assets", value: 18500000000 },
    { label: "Total Liabilities", value: 12200000000 },
    { label: "Equity", value: 6300000000 },
    { label: "Net Interest Income", value: 2241803990 },
    { label: "Operating Income", value: 1874567890 },
    { label: "Operating Expenses", value: 945678900 },
    { label: "Profit Before Tax", value: 928888990 },
    { label: "Tax Expense", value: 275666000 },
    { label: "Net Profit", value: 653222990 },
  ],
  2021: [
    { label: "Total Assets", value: 19500000000 },
    { label: "Total Liabilities", value: 13000000000 },
    { label: "Equity", value: 6300000000 },
    { label: "Net Interest Income", value: 2241803990 },
    { label: "Operating Income", value: 1874567890 },
    { label: "Operating Expenses", value: 945678900 },
    { label: "Profit Before Tax", value: 928888990 },
    { label: "Tax Expense", value: 275666000 },
    { label: "Net Profit", value: 653222990 },
  ],
  2022: [
    { label: "Total Assets", value: 20500000000 },
    { label: "Total Liabilities", value: 13800000000 },
    { label: "Equity", value: 6700000000 },
    { label: "Equity", value: 6300000000 },
    { label: "Net Interest Income", value: 2241803990 },
    { label: "Operating Income", value: 1874567890 },
    { label: "Operating Expenses", value: 945678900 },
    { label: "Profit Before Tax", value: 928888990 },
    { label: "Tax Expense", value: 275666000 },
    { label: "Net Profit", value: 653222990 },
  ],
  2023: [
    { label: "Total Assets", value: 21800000000 },
    { label: "Total Liabilities", value: 14500000000 },
    { label: "Equity", value: 7300000000 },
    { label: "Equity", value: 6300000000 },
    { label: "Net Interest Income", value: 2241803990 },
    { label: "Operating Income", value: 1874567890 },
    { label: "Operating Expenses", value: 945678900 },
    { label: "Profit Before Tax", value: 928888990 },
    { label: "Tax Expense", value: 275666000 },
    { label: "Net Profit", value: 653222990 },
  ],
  2024: [
    { label: "Total Assets", value: 23000000000 },
    { label: "Total Liabilities", value: 15200000000 },
    { label: "Equity", value: 7800000000 },
    { label: "Equity", value: 6300000000 },
    { label: "Net Interest Income", value: 2241803990 },
    { label: "Operating Income", value: 1874567890 },
    { label: "Operating Expenses", value: 945678900 },
    { label: "Profit Before Tax", value: 928888990 },
    { label: "Tax Expense", value: 275666000 },
    { label: "Net Profit", value: 653222990 },
  ],
};

const colWidths = {
  label: "w-[60%]",
  value: "w-[40%]",
};

export default function FinancialPosition() {
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
              STATEMENT OF FINANCIAL POSITION
            </h3>
            <div className="hidden sm:block h-[2px] w-20 bg-gradient-to-r from-[#B28D41] to-transparent mb-2"></div>
          </div>
        </div>

        {/* YEAR TABS */}
        <div className="flex gap-1">
          {(Object.keys(positionDataByYear) as Year[]).map((year) => (
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

        {/* TABLE SECTION (UNCHANGED) */}
        <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 items-center bg-[#0F1729]/80">
            <div className={`${colWidths.label} text-left text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>
              Item
            </div>
            <div className={`${colWidths.value} text-right text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>
              Amount (LKR)
            </div>
          </div>

          <div className="flex flex-col max-h-[600px] overflow-y-auto hide-scrollbar">
            {positionDataByYear[activeYear].map((row: PositionRow) => (
              <div
                key={row.label}
                className="flex w-full items-center px-4 sm:px-6 py-4 hover:bg-white/[0.02] transition-colors border-b border-white/[0.03] last:border-0 group cursor-default"
              >
                <div className={`${colWidths.label} flex flex-col pr-4`}>
                  <span className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-white transition-colors font-encode leading-tight">
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
