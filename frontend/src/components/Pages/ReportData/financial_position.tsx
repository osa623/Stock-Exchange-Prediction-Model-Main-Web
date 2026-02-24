"use client";
import { useState, useEffect, useCallback } from "react";
import { financialPositionDataByYear, Year, PositionRow, years as staticYears } from "./financialPositionData";
import { getRecordsByCompanyAndType, mapDataToRows } from "@/lib/api";

const colWidths = {
  label: "w-[60%]",
  value: "w-[40%]",
};

interface Props {
  symbol?: string;
}

export default function FinancialPosition({ symbol }: Props) {
  const availableYears = staticYears;
  const [activeYear, setActiveYear] = useState<Year>("2024");

  const [apiRows, setApiRows] = useState<Record<string, { label: string; value: number }[]>>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const fetchData = useCallback(async () => {
    if (!symbol) return;
    setLoading(true);
    setApiError(false);
    try {
      const records = await getRecordsByCompanyAndType(symbol, "financial_position");
      const mapped: Record<string, { label: string; value: number }[]> = {};
      for (const [year, record] of Object.entries(records)) {
        mapped[year] = mapDataToRows(record);
      }
      setApiRows(mapped);
    } catch {
      setApiError(true);
    } finally {
      setLoading(false);
    }
  }, [symbol]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const rowsForYear: PositionRow[] =
    apiRows[activeYear] ??
    (financialPositionDataByYear as Record<string, PositionRow[]>)[activeYear] ??
    [];

  const usingApiData = !!apiRows[activeYear];

  return (
    <section className="relative flex flex-col w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 h-full">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-6">

        {/* HEADER SECTION */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xs sm:text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest font-encode">
            Financial Data{symbol ? ` — ${symbol}` : ""}
          </h2>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#c7cbd0] tracking-tight leading-tight font-encode">
              STATEMENT OF FINANCIAL POSITION
            </h3>
            <div className="hidden sm:block h-[2px] w-20 bg-gradient-to-r from-[#B28D41] to-transparent mb-2" />
          </div>
          {symbol && !loading && (
            <span className={`self-start text-[10px] px-2 py-0.5 rounded font-encode uppercase tracking-widest ${usingApiData
                ? "bg-green-900/20 text-green-400 border border-green-800/40"
                : "bg-yellow-900/20 text-yellow-500 border border-yellow-800/40"
              }`}>
              {usingApiData ? "Live Data" : "Sample Data"}
            </span>
          )}
        </div>

        {/* YEAR TABS */}
        <div className="flex gap-1 flex-wrap">
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-4 py-2 text-sm font-semibold rounded-t-lg transition-all
                ${activeYear === year
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

          {loading ? (
            <div className="flex items-center justify-center py-16 text-gray-400 text-sm font-encode">
              <span className="animate-pulse">Fetching data for {symbol}…</span>
            </div>
          ) : (
            <div className="flex flex-col max-h-[600px] overflow-y-auto hide-scrollbar">
              {rowsForYear.length === 0 ? (
                <div className="py-16 text-center text-gray-500 text-sm font-encode">
                  No data available for {activeYear}
                </div>
              ) : (
                rowsForYear.map((row: PositionRow, idx: number) => (
                  <div
                    key={`${row.label}-${idx}`}
                    className="flex w-full items-center px-4 sm:px-6 py-4 hover:bg-white/[0.02] transition-colors border-b border-white/[0.03] last:border-0 group cursor-default"
                  >
                    <div className={`${colWidths.label} flex flex-col pr-4`}>
                      <span className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-white transition-colors font-encode leading-tight">
                        {row.label}
                      </span>
                    </div>
                    <div className={`${colWidths.value} text-right text-gray-300 font-mono text-sm sm:text-base group-hover:text-[#B28D41] transition-colors`}>
                      <span className="text-gray-600 mr-2 text-xs">LKR</span>
                      {Number(row.value).toLocaleString()}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {apiError && (
            <div className="px-6 py-3 text-xs text-yellow-500 border-t border-white/5 font-encode">
              ⚠ Could not connect to API — showing sample data
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
