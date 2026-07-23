"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import MetricCard from "@/components/Ui/Cards/MetricCard";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";
import { Coins } from "lucide-react";
import Link from "next/link";

export default function DividendAnalysisModule() {
  const topDividends = [...MOCK_COMPANIES].sort((a, b) => b.dividendYield - a.dividendYield);

  return (
    <main className="min-h-screen bg-[#0B0F16] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <PageHeader
          title="Corporate Dividend Performance & Yield Diagnostics"
          subtitle="Evaluation of dividend yields, payout sustainability, and distribution history"
          category="Analysis Module"
          breadcrumbs={[
            { label: "Analysis", href: "/analysis" },
            { label: "Dividend Analysis" },
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard label="Market Avg Dividend Yield" value="5.8%" trend="up" change={0.4} />
          <MetricCard label="Top Dividend Yield" value="Ceylon Tobacco (8.5%)" />
          <MetricCard label="Avg Payout Ratio" value="44.2%" trend="neutral" />
          <MetricCard label="High Yield Entities" value="62%" trend="up" />
        </div>

        <WidgetContainer
          title="Dividend Yield & Consistency Leaderboard"
          subtitle="Top entities ranked by dividend yield percentage"
          icon={<Coins size={20} />}
        >
          <div className="overflow-x-auto rounded-xl border border-[#306B99]/30 bg-[#0D131A]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#306B99]/30 bg-[#182847]/60 text-slate-200 uppercase font-bold font-encode">
                  <th className="p-4">Rank & Company</th>
                  <th className="p-4">Sector</th>
                  <th className="p-4 text-center">Dividend Yield (%)</th>
                  <th className="p-4 text-center">ROE (%)</th>
                  <th className="p-4 text-center">Health Score</th>
                  <th className="p-4 text-right">Workspace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#306B99]/20 font-inter">
                {topDividends.map((company, idx) => (
                  <tr key={company.symbol} className="hover:bg-[#306B99]/10">
                    <td className="p-4 font-bold text-white">
                      #{idx + 1} {company.name}{" "}
                      <span className="text-[10px] text-[#E9D37E] font-mono">[{company.symbol}]</span>
                    </td>
                    <td className="p-4 text-slate-300">{company.sector}</td>
                    <td className="p-4 text-center font-bold text-[#E9D37E] font-mono text-sm">
                      {company.dividendYield}%
                    </td>
                    <td className="p-4 text-center font-bold text-[#FACC15] font-mono">
                      {company.roe}%
                    </td>
                    <td className="p-4 text-center font-mono text-emerald-400 font-bold">
                      {company.financialHealthScore}/100
                    </td>
                    <td className="p-4 text-right">
                      <Link
                        href={`/companies/${company.symbol}/dividends`}
                        className="px-3 py-1 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] hover:bg-[#38BDF8]/20 font-bold transition-all"
                      >
                        Dividends
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </WidgetContainer>
      </div>
    </main>
  );
}
