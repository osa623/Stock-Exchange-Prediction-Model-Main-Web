"use client";

import React, { useState } from "react";
import PageHeader from "@/components/Common/PageHeader";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import CompanyCard from "@/components/Ui/Cards/CompanyCard";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";
import { Filter, Download } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ScreenerToolPage() {
  const [minRoe, setMinRoe] = useState<number>(10);
  const [maxDebt, setMaxDebt] = useState<number>(1.0);
  const [minYield, setMinYield] = useState<number>(0);

  const results = MOCK_COMPANIES.filter(
    (c) => c.roe >= minRoe && c.debtToEquity <= maxDebt && c.dividendYield >= minYield
  );

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#0B0F16] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <PageHeader
            title="Institutional Financial Screener"
            subtitle="Filter CSE listed companies by custom ROE, Debt to Equity, and Dividend Yield thresholds"
            category="Investor Tools"
            breadcrumbs={[
              { label: "Tools", href: "/tools" },
              { label: "Screener" },
            ]}
          />

          {/* Filter Controls */}
          <div className="p-6 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 space-y-6">
            <div className="flex items-center justify-between border-b border-[#306B99]/20 pb-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white font-inter">
                <Filter size={18} className="text-[#38BDF8]" />
                <span>Screening Criteria</span>
              </div>
              <button
                onClick={() => {
                  setMinRoe(0);
                  setMaxDebt(2.0);
                  setMinYield(0);
                }}
                className="text-xs text-[#38BDF8] hover:underline font-encode"
              >
                Reset Filters
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Min ROE */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300 font-encode">Min Return on Equity (ROE)</span>
                  <span className="text-[#FACC15] font-bold font-mono">{minRoe}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={minRoe}
                  onChange={(e) => setMinRoe(Number(e.target.value))}
                  className="w-full accent-[#38BDF8]"
                />
              </div>

              {/* Max Debt / Equity */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300 font-encode">Max Debt / Equity</span>
                  <span className="text-[#38BDF8] font-bold font-mono">{maxDebt}x</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2.0"
                  step="0.1"
                  value={maxDebt}
                  onChange={(e) => setMaxDebt(Number(e.target.value))}
                  className="w-full accent-[#38BDF8]"
                />
              </div>

              {/* Min Dividend Yield */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300 font-encode">Min Dividend Yield</span>
                  <span className="text-[#E9D37E] font-bold font-mono">{minYield}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={minYield}
                  onChange={(e) => setMinYield(Number(e.target.value))}
                  className="w-full accent-[#38BDF8]"
                />
              </div>
            </div>
          </div>

          {/* Results Summary & Export */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-encode border-b border-[#306B99]/20 pb-2">
            <span>Found {results.length} Entities Matching Criteria</span>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#182847] text-slate-200 hover:text-white border border-[#306B99]/30 transition-all font-bold">
              <Download size={14} />
              <span>Export CSV</span>
            </button>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((c) => (
              <CompanyCard key={c.symbol} company={c} />
            ))}
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
