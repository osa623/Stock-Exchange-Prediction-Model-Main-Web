"use client";
import { useState } from "react";
import { incomeDataByYear, Year, IncomeRow, years } from "./incomeData";

const colWidths = {
  label: "w-[60%]",
  value: "w-[40%]",
};

export default function IncomeST() {
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
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#c7cbd0] font-encode">
              INCOME STATEMENT
            </h3>
            <div className="hidden sm:block h-[2px] w-20 bg-gradient-to-r from-[#B28D41] to-transparent mb-2"></div>
          </div>
        </div>

        {/* YEAR TABS */}
        <div className="flex gap-1">
          {years.map((year) => (
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
          <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 items-center bg-[#0F1729]/80">
            <div className={`${colWidths.label} text-left text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>
              Item
            </div>
            <div className={`${colWidths.value} text-right text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>
              Amount (LKR)
            </div>
          </div>

          <div className="flex flex-col max-h-[600px] overflow-y-auto hide-scrollbar">
            {incomeDataByYear[activeYear].map((row: IncomeRow) => (
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
