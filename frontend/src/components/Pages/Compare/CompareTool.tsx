"use client";

import React, { useState } from "react";
import PageHeader from "@/components/Common/PageHeader";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { MOCK_COMPANIES, CompanyProfile } from "@/lib/mock-data/companies";
import { GitCompare, Plus, X, ShieldCheck } from "lucide-react";

export default function CompareTool() {
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([
    "JKH.N0000",
    "COMB.N0000",
    "CTC.N0000",
  ]);

  const addCompany = (symbol: string) => {
    if (!selectedSymbols.includes(symbol) && selectedSymbols.length < 4) {
      setSelectedSymbols([...selectedSymbols, symbol]);
    }
  };

  const removeCompany = (symbol: string) => {
    setSelectedSymbols(selectedSymbols.filter((s) => s !== symbol));
  };

  const selectedCompanies = selectedSymbols
    .map((s) => MOCK_COMPANIES.find((c) => c.symbol === s))
    .filter(Boolean) as CompanyProfile[];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <PageHeader
        title="Side-by-Side Financial Comparison"
        subtitle="Compare financial fundamentals, ratios, health scores, and growth metrics across multiple CSE entities"
        category="Company Comparison Workspace"
        breadcrumbs={[{ label: "Compare", href: "/compare" }]}
      />

      {/* Selector bar */}
      <div className="p-4 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300 font-encode uppercase">
            Comparing ({selectedCompanies.length}/4 Companies)
          </span>

          {selectedCompanies.length < 4 && (
            <select
              onChange={(e) => {
                if (e.target.value) addCompany(e.target.value);
                e.target.value = "";
              }}
              className="bg-[#182847] border border-[#306B99]/40 text-white rounded-xl px-3 py-1.5 text-xs font-bold focus:outline-none"
            >
              <option value="">+ Add Company to Compare...</option>
              {MOCK_COMPANIES.filter((c) => !selectedSymbols.includes(c.symbol)).map((c) => (
                <option key={c.symbol} value={c.symbol}>
                  {c.name} ({c.symbol})
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Selected chips */}
        <div className="flex flex-wrap gap-2">
          {selectedCompanies.map((c) => (
            <div
              key={c.symbol}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#182847] border border-[#306B99]/40 text-xs font-bold text-white"
            >
              <span>{c.name}</span>
              <span className="text-[10px] text-[#E9D37E]">[{c.symbol}]</span>
              <button
                onClick={() => removeCompany(c.symbol)}
                className="hover:text-rose-400 text-slate-400 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <WidgetContainer
        title="Financial Matrix Comparison"
        subtitle="Side-by-side metric evaluation"
        icon={<GitCompare size={20} />}
      >
        <div className="overflow-x-auto rounded-xl border border-[#306B99]/30 bg-[#0D131A]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#306B99]/30 bg-[#182847]/60 text-slate-200 uppercase font-bold font-encode">
                <th className="p-4 w-1/4">Financial Metric / Indicator</th>
                {selectedCompanies.map((c) => (
                  <th key={c.symbol} className="p-4 text-center">
                    <span className="block text-white font-inter text-sm">{c.name}</span>
                    <span className="text-[10px] font-mono text-[#E9D37E]">{c.symbol}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-[#306B99]/20 font-inter">
              <tr>
                <td className="p-4 font-bold text-slate-300">Sector Category</td>
                {selectedCompanies.map((c) => (
                  <td key={c.symbol} className="p-4 text-center font-medium text-slate-300">
                    {c.sector}
                  </td>
                ))}
              </tr>

              <tr className="bg-[#182847]/30">
                <td className="p-4 font-bold text-slate-300">Financial Health Score</td>
                {selectedCompanies.map((c) => (
                  <td key={c.symbol} className="p-4 text-center font-bold text-emerald-400 font-mono text-sm">
                    {c.financialHealthScore}/100
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-300">Total Revenue (LKR)</td>
                {selectedCompanies.map((c) => (
                  <td key={c.symbol} className="p-4 text-center font-bold text-[#38BDF8] font-mono">
                    LKR {(c.revenue / 1000).toFixed(1)}B
                  </td>
                ))}
              </tr>

              <tr className="bg-[#182847]/30">
                <td className="p-4 font-bold text-slate-300">Net Profit After Tax</td>
                {selectedCompanies.map((c) => (
                  <td key={c.symbol} className="p-4 text-center font-bold text-emerald-400 font-mono">
                    LKR {(c.netProfit / 1000).toFixed(1)}B
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-300">Return on Equity (ROE)</td>
                {selectedCompanies.map((c) => (
                  <td key={c.symbol} className="p-4 text-center font-bold text-[#FACC15] font-mono">
                    {c.roe}%
                  </td>
                ))}
              </tr>

              <tr className="bg-[#182847]/30">
                <td className="p-4 font-bold text-slate-300">Operating Profit Margin</td>
                {selectedCompanies.map((c) => (
                  <td key={c.symbol} className="p-4 text-center font-bold text-white font-mono">
                    {c.operatingMargin}%
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-bold text-slate-300">Debt to Equity Ratio</td>
                {selectedCompanies.map((c) => (
                  <td key={c.symbol} className="p-4 text-center font-bold text-white font-mono">
                    {c.debtToEquity}x
                  </td>
                ))}
              </tr>

              <tr className="bg-[#182847]/30">
                <td className="p-4 font-bold text-slate-300">Dividend Yield</td>
                {selectedCompanies.map((c) => (
                  <td key={c.symbol} className="p-4 text-center font-bold text-[#E9D37E] font-mono">
                    {c.dividendYield}%
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </WidgetContainer>
    </div>
  );
}
