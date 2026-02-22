
"use client";
import React, { useMemo, useState } from "react";

import {
  useTradeSummary,
  useTopGainers,
  useTopLosers,
  useAspiData,
  useSnpData,
} from "@/hooks/useCseApi";

const mockStockData = [

  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, valuation: 20, growth: 5, target: 80 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", price: 285, valuation: 12, growth: 23, target: 500 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, valuation: 20, growth: 5, target: 80 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, valuation: 20, growth: 5, target: 80 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", price: 285, valuation: 12, growth: 23, target: 500 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, valuation: 20, growth: 5, target: 80 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, valuation: 20, growth: 5, target: 80 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", price: 285, valuation: 12, growth: 23, target: 500 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, valuation: 20, growth: 5, target: 80 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, valuation: 20, growth: 5, target: 80 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", price: 285, valuation: 12, growth: 23, target: 500 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, valuation: 20, growth: 5, target: 80 },
];

const colWidths = {
  symbol: "w-[13%]",
  name: "w-[22%]",
  industry: "w-[15%]",
  price: "w-[10%]",
  valuation: "w-[13%]",
  growth: "w-[13%]",
  target: "w-[14%]",
};


export default function Value() {

    const [searchQuery, setSearchQuery] = useState("");
  
    // ─── Real CSE API data (auto-refresh every 30s) ─────────────────
    const { data: tradeSummary, loading: tradesLoading, error: tradesError } = useTradeSummary({ refetchInterval: 10_000 });
    const { data: gainers, loading: gainersLoading } = useTopGainers({ refetchInterval: 10_000 });
    const { data: losers, loading: losersLoading } = useTopLosers({ refetchInterval: 10_000 });
    const { data: aspiData, loading: aspiLoading } = useAspiData({ refetchInterval: 10_000 });
    const { data: snpData, loading: snpLoading } = useSnpData({ refetchInterval: 10_000 });
  
    // ─── Filtered stocks list ───────────────────────────────────────
    const stocks = useMemo(() => {
      const items = tradeSummary?.reqTradeSummery ?? [];
      if (!searchQuery.trim()) return items;
      const q = searchQuery.toLowerCase();
      return items.filter(
        (s) => s.symbol.toLowerCase().includes(q) || s.name.toLowerCase().includes(q)
      );
    }, [tradeSummary, searchQuery]);


  return (
    <section className="relative flex bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039] flex-col w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 h-full">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-6">

        {/* HEADER */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xs sm:text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest font-encode">
            BUYZONLABS
          </h2>
          <div className="flex items-end justify-between">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DFBD69] to-[#ffffff] mb-2 font-encode">
              Stock Fundermentals
            </h1>

            <div className="flex items-center gap-4">
              <p className="hidden sm:block text-sm text-gray-300 max-w-xs text-right">
                Click any <span className="text-[#B28D41] font-bold">Stock</span> to view more Data, Calculations, Ratios and Valuations.
              </p>

              <div className="hidden sm:block h-[2px] w-20 bg-gradient-to-r from-[#B28D41] to-transparent mb-2" />
            </div>
          </div>
        </div>

        <div className="flex w-full h-[60px] sm:h-[8vh] py-2 left-0 overflow-hidden">
                  <div className='relative w-full h-10 sm:h-12 bg-transparent border-t-2 border-gray-800 overflow-hidden top-0 flex items-center px-2 sm:px-4 gap-2'>
                    <input
                    type="text"
                    placeholder="Search stocks..."
                    className="flex-1 h-full bg-transparent text-white font-encode text-sm sm:text-[15px] font-thin outline-none placeholder:text-gray-500"
                    />
                    <button
                    className="flex items-center cursor-pointer font-encode font-medium bg-gradient-to-r from-[#B28D41] to-[#E9D37E] text-[#0D1325] rounded-lg hover:shadow-lg hover:shadow-[#B28D41]/30 transition-all duration-300 hover:scale-105 gap-1 sm:gap-2 px-4 sm:px-8 lg:px-12 py-1.5 "
                    >
                    <svg 
                      className="w-3 h-3 sm:w-4 sm:h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="hidden sm:inline">Search Stocks</span>
                    <span className="sm:hidden">Search</span>
                    </button>
                  </div>
                </div>

        {/* TABLE */}
        <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

          {/* TABLE HEADER */}
          <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 bg-[#0F1729]/80">
            <div className={`${colWidths.symbol} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Symbol</div>
            <div className={`${colWidths.name} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Company</div>
            <div className={`${colWidths.industry} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Industry</div>
            <div className={`${colWidths.price} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Price</div>
            <div className={`${colWidths.valuation} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Valuation</div>
            <div className={`${colWidths.growth} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Growth %</div>
            <div className={`${colWidths.target} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Target</div>
            <div className={`${colWidths.target} text-[0.6rem] font-semibold text-[#B28D41] uppercase tracking-widest font-encode`}>Add to Watchlist</div>


          </div>

          {/* TABLE BODY */}
          <div className="flex flex-col max-h-[600px] overflow-y-auto hide-scrollbar">
            {stocks.map((row, idx) => (
              <div
                key={idx}
                className="flex w-full items-center px-4 sm:px-6 py-4 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
              >
                <div className={`${colWidths.symbol} text-sm font-mono text-gray-300`}>
                  {row.symbol}
                </div>

                <div className={`${colWidths.name} text-sm font-bold text-gray-200`}>
                  {row.name}
                </div>

                <div className={`${colWidths.industry} text-sm text-gray-400`}>
                  {row.marketCap}
                </div>

                <div className={`${colWidths.price} text-sm font-mono text-gray-300`}>
                  {row.price.toLocaleString()}
                </div>


                <div className={`${colWidths.valuation} text-sm font-mono text-[#B28D41]`}>DCF :
                  {row.high}
                </div>

                <div className={`${colWidths.growth} text-sm font-mono`}>
                  {row.tradevolume}%
                </div>

                <div className={`${colWidths.target} text-sm font-mono text-gray-300`}>
                  fwesf
                </div>
                <div className={`${colWidths.target} flex items-center`}>
                  <button className="text-[#B28D41] hover:scale-110 transition-transform duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
