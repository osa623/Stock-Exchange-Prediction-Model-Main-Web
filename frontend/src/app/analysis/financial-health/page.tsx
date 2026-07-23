"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import MetricCard from "@/components/Ui/Cards/MetricCard";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function FinancialHealthAnalysis() {
  const healthyCompanies = [...MOCK_COMPANIES].sort(
    (a, b) => b.financialHealthScore - a.financialHealthScore
  );

  return (
    <main className="min-h-screen bg-[#0B0F16] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <PageHeader
          title="Market-Wide Financial Health Diagnostics"
          subtitle="Comprehensive evaluation of balance sheet strength, debt coverage, and bankruptcy risk"
          category="Analysis Module"
          breadcrumbs={[
            { label: "Analysis", href: "/analysis" },
            { label: "Financial Health" },
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard label="Market Avg Health Score" value="87 / 100" trend="up" change={3.1} />
          <MetricCard label="Solvent Entities" value="94.2%" trend="up" />
          <MetricCard label="Avg Debt to Equity" value="0.48x" trend="down" change={-4.5} />
          <MetricCard label="Low Risk Ratio" value="88.5%" trend="up" />
        </div>

        <WidgetContainer
          title="Corporate Financial Health Rankings"
          subtitle="Entities evaluated by debt ratios, current ratio, and operating margin stability"
          icon={<ShieldCheck size={20} />}
        >
          <div className="overflow-x-auto rounded-xl border border-[#306B99]/30 bg-[#0D131A]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#306B99]/30 bg-[#182847]/60 text-slate-200 uppercase font-bold font-encode">
                  <th className="p-4">Rank & Company</th>
                  <th className="p-4">Sector</th>
                  <th className="p-4 text-center">Health Score</th>
                  <th className="p-4 text-center">Debt / Equity</th>
                  <th className="p-4 text-center">Current Ratio</th>
                  <th className="p-4 text-right">Workspace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#306B99]/20 font-inter">
                {healthyCompanies.map((company, index) => (
                  <tr key={company.symbol} className="hover:bg-[#306B99]/10">
                    <td className="p-4 font-bold text-white">
                      #{index + 1} {company.name}{" "}
                      <span className="text-[10px] text-[#E9D37E] font-mono">[{company.symbol}]</span>
                    </td>
                    <td className="p-4 text-slate-300">{company.sector}</td>
                    <td className="p-4 text-center font-bold text-emerald-400 font-mono text-sm">
                      {company.financialHealthScore}/100
                    </td>
                    <td className="p-4 text-center font-mono text-slate-200">{company.debtToEquity}x</td>
                    <td className="p-4 text-center font-mono text-slate-200">{company.currentRatio}x</td>
                    <td className="p-4 text-right">
                      <Link
                        href={`/companies/${company.symbol}/risk`}
                        className="px-3 py-1 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] hover:bg-[#38BDF8]/20 font-bold transition-all"
                      >
                        Diagnostics
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
