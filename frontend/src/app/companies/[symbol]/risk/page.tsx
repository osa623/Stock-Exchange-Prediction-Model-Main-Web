"use client";

import React from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { getCompanyBySymbol } from "@/lib/mock-data/companies";
import { ShieldAlert, CheckCircle2, AlertTriangle } from "lucide-react";

export default function RiskPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);
  const company = getCompanyBySymbol(symbol);

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="Financial Risk Diagnostics & Solvency Analysis"
        subtitle="Bankruptcy risk scoring, debt service capacity & leverage evaluation"
        icon={<ShieldAlert size={20} />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 space-y-4">
            <h4 className="font-bold text-sm text-[#38BDF8] font-inter uppercase tracking-wider">
              Solvency & Financial Health Breakdown
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#182847]">
                <span className="text-slate-300">Altman Z-Score Diagnostic</span>
                <span className="font-bold text-emerald-400 font-inter">3.45 (Safe Zone)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#182847]">
                <span className="text-slate-300">Debt to Equity Ratio</span>
                <span className="font-bold text-white font-inter">{company?.debtToEquity || 0.45}x</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#182847]">
                <span className="text-slate-300">Interest Coverage Ratio</span>
                <span className="font-bold text-emerald-400 font-inter">6.8x (Low Risk)</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 space-y-3">
            <h4 className="font-bold text-sm text-[#E9D37E] font-inter uppercase tracking-wider">
              Risk Summary Signals
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-emerald-400">
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Low leverage profile ensures strong debt service resilience.</span>
              </div>
              <div className="flex items-start gap-2 text-emerald-400">
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Positive operating cash flow covers debt maturity obligations.</span>
              </div>
              <div className="flex items-start gap-2 text-amber-400">
                <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Foreign exchange exposure monitored for international raw materials.</span>
              </div>
            </div>
          </div>
        </div>
      </WidgetContainer>
    </div>
  );
}
