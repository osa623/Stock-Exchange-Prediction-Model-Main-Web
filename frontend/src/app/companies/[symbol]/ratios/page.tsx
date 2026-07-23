"use client";

import React from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import MetricCard from "@/components/Ui/Cards/MetricCard";
import { getCompanyBySymbol } from "@/lib/mock-data/companies";
import { PieChart } from "lucide-react";

export default function RatiosPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);
  const company = getCompanyBySymbol(symbol);

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="Comprehensive Financial Ratio Suite"
        subtitle="Profitability, Solvency, Efficiency, & Valuation ratios"
        icon={<PieChart size={20} />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard label="Return on Equity (ROE)" value={`${company?.roe || 16.5}%`} trend="up" change={2.1} />
          <MetricCard label="Return on Assets (ROA)" value={`${company?.roa || 8.2}%`} trend="up" change={1.4} />
          <MetricCard label="Current Ratio" value={`${company?.currentRatio || 1.5}x`} trend="neutral" />
          <MetricCard label="Debt to Equity" value={`${company?.debtToEquity || 0.45}x`} trend="down" change={-5.2} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 space-y-3 text-xs">
            <h4 className="font-bold text-sm text-[#38BDF8] font-inter">Profitability Ratios</h4>
            <div className="flex justify-between py-1.5 border-b border-[#306B99]/20">
              <span className="text-slate-400">Gross Profit Margin</span>
              <span className="font-bold text-white font-mono">18.5%</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#306B99]/20">
              <span className="text-slate-400">Operating Profit Margin</span>
              <span className="font-bold text-white font-mono">{company?.operatingMargin || 11.5}%</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#306B99]/20">
              <span className="text-slate-400">Net Profit Margin</span>
              <span className="font-bold text-emerald-400 font-mono">7.0%</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-400">Return on Capital Employed (ROCE)</span>
              <span className="font-bold text-emerald-400 font-mono">14.8%</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 space-y-3 text-xs">
            <h4 className="font-bold text-sm text-[#E9D37E] font-inter">Solvency & Efficiency</h4>
            <div className="flex justify-between py-1.5 border-b border-[#306B99]/20">
              <span className="text-slate-400">Debt to Equity Ratio</span>
              <span className="font-bold text-white font-mono">{company?.debtToEquity || 0.45}x</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#306B99]/20">
              <span className="text-slate-400">Interest Coverage Ratio</span>
              <span className="font-bold text-emerald-400 font-mono">6.8x</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#306B99]/20">
              <span className="text-slate-400">Asset Turnover Ratio</span>
              <span className="font-bold text-white font-mono">0.55x</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-400">Inventory Turnover</span>
              <span className="font-bold text-slate-200 font-mono">4.2x</span>
            </div>
          </div>
        </div>
      </WidgetContainer>
    </div>
  );
}
