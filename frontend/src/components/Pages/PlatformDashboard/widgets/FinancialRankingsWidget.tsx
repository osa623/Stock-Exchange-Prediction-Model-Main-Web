"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Trophy, ArrowUpRight } from "lucide-react";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";

type RankTab = "roe" | "revenue" | "netProfit" | "dividendYield";

export default function FinancialRankingsWidget() {
  const [activeTab, setActiveTab] = useState<RankTab>("roe");

  const sortedCompanies = [...MOCK_COMPANIES].sort((a, b) => {
    if (activeTab === "roe") return b.roe - a.roe;
    if (activeTab === "revenue") return b.revenue - a.revenue;
    if (activeTab === "netProfit") return b.netProfit - a.netProfit;
    return b.dividendYield - a.dividendYield;
  });

  return (
    <WidgetContainer
      title="CSE Financial Leaderboard"
      subtitle="Top performing companies ranked by key financial metrics"
      actionText="Full Analysis Rankings"
      actionHref="/analysis/rankings"
      icon={<Trophy size={20} />}
    >
      {/* Metric Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 border-b border-[#306B99]/20 pb-3">
        {[
          { id: "roe", label: "Return on Equity (ROE)" },
          { id: "netProfit", label: "Net Profit" },
          { id: "revenue", label: "Revenue" },
          { id: "dividendYield", label: "Dividend Yield" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as RankTab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all font-inter ${
              activeTab === tab.id
                ? "bg-[#38BDF8] text-[#0D131A] shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                : "bg-[#0D131A] text-slate-400 hover:text-white border border-[#306B99]/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {sortedCompanies.slice(0, 5).map((company, index) => {
          let val = "";
          if (activeTab === "roe") val = `${company.roe}%`;
          if (activeTab === "revenue") val = `LKR ${(company.revenue / 1000).toFixed(1)}B`;
          if (activeTab === "netProfit") val = `LKR ${(company.netProfit / 1000).toFixed(1)}B`;
          if (activeTab === "dividendYield") val = `${company.dividendYield}%`;

          return (
            <div
              key={company.symbol}
              className="flex items-center justify-between p-3 rounded-xl bg-[#0D131A] border border-[#306B99]/20 hover:border-[#38BDF8]/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                    index === 0
                      ? "bg-[#FACC15] text-[#0D131A]"
                      : index === 1
                      ? "bg-slate-300 text-[#0D131A]"
                      : index === 2
                      ? "bg-amber-700 text-white"
                      : "bg-[#182847] text-slate-400"
                  }`}
                >
                  #{index + 1}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white font-inter">{company.name}</span>
                    <span className="text-[10px] font-mono px-1.5 rounded bg-[#182847] text-[#E9D37E]">
                      {company.symbol}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-encode">{company.sector}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-sm font-bold text-[#38BDF8] font-inter block">{val}</span>
                  <span className="text-[10px] text-slate-400 font-encode">Score: {company.financialHealthScore}/100</span>
                </div>

                <Link
                  href={`/companies/${company.symbol}`}
                  className="p-1.5 rounded-lg bg-[#182847] text-slate-400 hover:text-white hover:bg-[#38BDF8]/20 transition-all"
                >
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </WidgetContainer>
  );
}
