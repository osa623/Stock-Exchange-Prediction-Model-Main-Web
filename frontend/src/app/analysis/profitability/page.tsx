"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import MetricCard from "@/components/Ui/Cards/MetricCard";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";
import { Award } from "lucide-react";
import Link from "next/link";

export default function ProfitabilityAnalysisModule() {
  const topRoe = [...MOCK_COMPANIES].sort((a, b) => b.roe - a.roe);

  return (
    <main className="min-h-screen bg-[#0B0F16] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <PageHeader
          title="Market Profitability & Return on Equity (ROE) Analytics"
          subtitle="Evaluation of capital allocation efficiency, margin quality, and return profiles"
          category="Analysis Module"
          breadcrumbs={[
            { label: "Analysis", href: "/analysis" },
            { label: "Profitability Analysis" },
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard label="Market Avg ROE" value="18.2%" trend="up" change={1.8} />
          <MetricCard label="Market Avg ROA" value="7.4%" trend="up" />
          <MetricCard label="Top ROE Entity" value="Ceylon Tobacco (48.5%)" />
          <MetricCard label="Avg Operating Margin" value="15.8%" trend="up" />
        </div>

        <WidgetContainer
          title="Return on Equity & Profit Margin Leaderboard"
          subtitle="Top companies ranked by Return on Equity (ROE) and Return on Assets (ROA)"
          icon={<Award size={20} />}
        >
          <div className="overflow-x-auto rounded-xl border border-[#306B99]/30 bg-[#0D131A]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#306B99]/30 bg-[#182847]/60 text-slate-200 uppercase font-bold font-encode">
                  <th className="p-4">Rank & Entity</th>
                  <th className="p-4">Sector</th>
                  <th className="p-4 text-center">ROE (%)</th>
                  <th className="p-4 text-center">ROA (%)</th>
                  <th className="p-4 text-center">Operating Margin</th>
                  <th className="p-4 text-right">Workspace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#306B99]/20 font-inter">
                {topRoe.map((company, idx) => (
                  <tr key={company.symbol} className="hover:bg-[#306B99]/10">
                    <td className="p-4 font-bold text-white">
                      #{idx + 1} {company.name}{" "}
                      <span className="text-[10px] text-[#E9D37E] font-mono">[{company.symbol}]</span>
                    </td>
                    <td className="p-4 text-slate-300">{company.sector}</td>
                    <td className="p-4 text-center font-bold text-[#FACC15] font-mono text-sm">
                      {company.roe}%
                    </td>
                    <td className="p-4 text-center font-bold text-emerald-400 font-mono">
                      {company.roa}%
                    </td>
                    <td className="p-4 text-center font-mono text-slate-200">
                      {company.operatingMargin}%
                    </td>
                    <td className="p-4 text-right">
                      <Link
                        href={`/companies/${company.symbol}/profitability`}
                        className="px-3 py-1 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] hover:bg-[#38BDF8]/20 font-bold transition-all"
                      >
                        Profitability
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
