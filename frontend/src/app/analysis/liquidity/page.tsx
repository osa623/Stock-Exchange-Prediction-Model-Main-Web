"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import MetricCard from "@/components/Ui/Cards/MetricCard";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";
import { Droplets } from "lucide-react";
import Link from "next/link";

export default function LiquidityAnalysisModule() {
  const sortedLiquidity = [...MOCK_COMPANIES].sort((a, b) => b.currentRatio - a.currentRatio);

  return (
    <main className="min-h-screen bg-[#0B0F16] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <PageHeader
          title="Working Capital & Liquidity Diagnostics"
          subtitle="Short-term solvency ratios, current ratio coverage, and working capital buffers"
          category="Analysis Module"
          breadcrumbs={[
            { label: "Analysis", href: "/analysis" },
            { label: "Liquidity Analysis" },
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard label="Avg Market Current Ratio" value="1.65x" trend="up" />
          <MetricCard label="Entities with CR &ge; 1.5" value="82%" trend="up" />
          <MetricCard label="Highest Current Ratio" value="Chevron (2.8x)" />
          <MetricCard label="Cash Buffer Status" value="Healthy" />
        </div>

        <WidgetContainer
          title="Liquidity Ratios & Working Capital Matrix"
          subtitle="Entities evaluated by current ratio and cash flow strength"
          icon={<Droplets size={20} />}
        >
          <div className="overflow-x-auto rounded-xl border border-[#306B99]/30 bg-[#0D131A]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#306B99]/30 bg-[#182847]/60 text-slate-200 uppercase font-bold font-encode">
                  <th className="p-4">Company</th>
                  <th className="p-4">Sector</th>
                  <th className="p-4 text-center">Current Ratio</th>
                  <th className="p-4 text-center">Cash Flow</th>
                  <th className="p-4 text-center">Status</th>
                  <th className="p-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#306B99]/20 font-inter">
                {sortedLiquidity.map((company) => (
                  <tr key={company.symbol} className="hover:bg-[#306B99]/10">
                    <td className="p-4 font-bold text-white">
                      {company.name}{" "}
                      <span className="text-[10px] text-[#E9D37E] font-mono">[{company.symbol}]</span>
                    </td>
                    <td className="p-4 text-slate-300">{company.sector}</td>
                    <td className="p-4 text-center font-bold text-[#38BDF8] font-mono text-sm">
                      {company.currentRatio}x
                    </td>
                    <td className="p-4 text-center font-mono text-emerald-400">
                      LKR {(company.cashFlow / 1000).toFixed(1)}B
                    </td>
                    <td className="p-4 text-center">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Liquid
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Link
                        href={`/companies/${company.symbol}/liquidity`}
                        className="px-3 py-1 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] hover:bg-[#38BDF8]/20 font-bold transition-all"
                      >
                        Liquidity
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
