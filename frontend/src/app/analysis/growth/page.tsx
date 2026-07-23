"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import MetricCard from "@/components/Ui/Cards/MetricCard";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export default function GrowthAnalysisModule() {
  const topGrowth = [...MOCK_COMPANIES].sort((a, b) => b.revenue - a.revenue);

  return (
    <main className="min-h-screen bg-[#0B0F16] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <PageHeader
          title="Market-Wide Growth & Revenue Analysis"
          subtitle="Top compounding CSE entities ranked by revenue volume, net profit growth, and cash flow expansion"
          category="Analysis Module"
          breadcrumbs={[
            { label: "Analysis", href: "/analysis" },
            { label: "Growth Analysis" },
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard label="Average Market Growth" value="+11.4%" trend="up" change={2.8} />
          <MetricCard label="Top Revenue Sector" value="Energy" />
          <MetricCard label="Top Profit Expansion" value="Banks (+18.2%)" trend="up" />
          <MetricCard label="Entities with >10% Growth" value="78%" trend="up" />
        </div>

        <WidgetContainer
          title="Top Corporate Entities by Revenue & Earnings Volume"
          subtitle="Annual financial volume comparison"
          icon={<TrendingUp size={20} />}
        >
          <div className="overflow-x-auto rounded-xl border border-[#306B99]/30 bg-[#0D131A]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#306B99]/30 bg-[#182847]/60 text-slate-200 uppercase font-bold font-encode">
                  <th className="p-4">Rank & Entity</th>
                  <th className="p-4">Sector</th>
                  <th className="p-4 text-right">Revenue (LKR)</th>
                  <th className="p-4 text-right">Net Profit (LKR)</th>
                  <th className="p-4 text-center">Cash Flow</th>
                  <th className="p-4 text-right font-encode">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#306B99]/20 font-inter">
                {topGrowth.map((company, idx) => (
                  <tr key={company.symbol} className="hover:bg-[#306B99]/10">
                    <td className="p-4 font-bold text-white">
                      #{idx + 1} {company.name}{" "}
                      <span className="text-[10px] text-[#E9D37E] font-mono">[{company.symbol}]</span>
                    </td>
                    <td className="p-4 text-slate-300">{company.sector}</td>
                    <td className="p-4 text-right font-bold text-[#38BDF8] font-mono">
                      LKR {(company.revenue / 1000).toFixed(1)}B
                    </td>
                    <td className="p-4 text-right font-bold text-emerald-400 font-mono">
                      LKR {(company.netProfit / 1000).toFixed(1)}B
                    </td>
                    <td className="p-4 text-center font-mono text-slate-300">
                      LKR {(company.cashFlow / 1000).toFixed(1)}B
                    </td>
                    <td className="p-4 text-right">
                      <Link
                        href={`/companies/${company.symbol}/growth`}
                        className="px-3 py-1 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] hover:bg-[#38BDF8]/20 font-bold transition-all"
                      >
                        View Growth
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
