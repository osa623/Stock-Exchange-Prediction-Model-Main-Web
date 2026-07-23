"use client";

import React, { useState } from "react";
import PageHeader from "@/components/Common/PageHeader";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { Calculator } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CalculatorToolPage() {
  const [netIncome, setNetIncome] = useState<number>(15000);
  const [equity, setEquity] = useState<number>(90000);
  const [totalAssets, setTotalAssets] = useState<number>(150000);
  const [totalDebt, setTotalDebt] = useState<number>(40000);

  const roe = equity > 0 ? ((netIncome / equity) * 100).toFixed(2) : "0.00";
  const roa = totalAssets > 0 ? ((netIncome / totalAssets) * 100).toFixed(2) : "0.00";
  const debtToEquity = equity > 0 ? (totalDebt / equity).toFixed(2) : "0.00";

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#0B0F16] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <PageHeader
            title="Financial Ratio & Health Calculator"
            subtitle="Interactively compute custom ROE, ROA, and Debt to Equity ratios"
            category="Investor Tools"
            breadcrumbs={[
              { label: "Tools", href: "/tools" },
              { label: "Calculator" },
            ]}
          />

          <WidgetContainer
            title="Custom Financial Ratio Input"
            subtitle="Enter company trial balance metrics to calculate ratios"
            icon={<Calculator size={20} />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 font-encode mb-1">
                    Net Income / Profit After Tax (LKR Millions)
                  </label>
                  <input
                    type="number"
                    value={netIncome}
                    onChange={(e) => setNetIncome(Number(e.target.value))}
                    className="w-full bg-[#182847]/60 border border-[#306B99]/40 text-white rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 font-encode mb-1">
                    Shareholders' Equity (LKR Millions)
                  </label>
                  <input
                    type="number"
                    value={equity}
                    onChange={(e) => setEquity(Number(e.target.value))}
                    className="w-full bg-[#182847]/60 border border-[#306B99]/40 text-white rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 font-encode mb-1">
                    Total Asset Base (LKR Millions)
                  </label>
                  <input
                    type="number"
                    value={totalAssets}
                    onChange={(e) => setTotalAssets(Number(e.target.value))}
                    className="w-full bg-[#182847]/60 border border-[#306B99]/40 text-white rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 font-encode mb-1">
                    Total Debt / Borrowings (LKR Millions)
                  </label>
                  <input
                    type="number"
                    value={totalDebt}
                    onChange={(e) => setTotalDebt(Number(e.target.value))}
                    className="w-full bg-[#182847]/60 border border-[#306B99]/40 text-white rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="p-6 rounded-2xl bg-[#0D131A] border border-[#306B99]/40 space-y-6 flex flex-col justify-center">
                <h4 className="text-sm font-bold text-[#38BDF8] uppercase tracking-wider font-encode">
                  Computed Financial Ratios
                </h4>

                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 rounded-xl bg-[#182847]/60 flex justify-between items-center">
                    <span className="text-xs text-slate-300 font-encode">Return on Equity (ROE)</span>
                    <span className="text-2xl font-bold text-[#FACC15] font-mono">{roe}%</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#182847]/60 flex justify-between items-center">
                    <span className="text-xs text-slate-300 font-encode">Return on Assets (ROA)</span>
                    <span className="text-2xl font-bold text-emerald-400 font-mono">{roa}%</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#182847]/60 flex justify-between items-center">
                    <span className="text-xs text-slate-300 font-encode">Debt to Equity Ratio</span>
                    <span className="text-2xl font-bold text-[#38BDF8] font-mono">{debtToEquity}x</span>
                  </div>
                </div>
              </div>
            </div>
          </WidgetContainer>
        </div>
      </main>
    </ProtectedRoute>
  );
}
