"use client";

import React from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import EChartsLineChart from "@/components/Ui/Charts/EChartsLineChart";
import { getCompanyBySymbol } from "@/lib/mock-data/companies";
import { Award } from "lucide-react";

export default function ProfitabilityPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);
  const company = getCompanyBySymbol(symbol);

  const marginHistory = [
    { year: "2021", value: (company?.operatingMargin || 11.5) * 0.8 },
    { year: "2022", value: (company?.operatingMargin || 11.5) * 0.9 },
    { year: "2023", value: (company?.operatingMargin || 11.5) * 0.95 },
    { year: "2024", value: (company?.operatingMargin || 11.5) * 1.02 },
    { year: "2025", value: company?.operatingMargin || 11.5 },
  ];

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="Profitability & Margin Expansion Diagnostics"
        subtitle="Gross, operating, and net profit margins alongside capital efficiency metrics"
        icon={<Award size={20} />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-encode block">Operating Margin</span>
            <span className="text-2xl font-bold text-[#38BDF8] font-inter">{company?.operatingMargin || 11.5}%</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-encode block">Return on Equity (ROE)</span>
            <span className="text-2xl font-bold text-emerald-400 font-inter">{company?.roe || 14.2}%</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-encode block">Return on Assets (ROA)</span>
            <span className="text-2xl font-bold text-[#E9D37E] font-inter">{company?.roa || 7.8}%</span>
          </div>
        </div>

        <EChartsLineChart data={marginHistory} color="#FACC15" height={280} title="5-Year Operating Margin Trend (%)" yAxisSuffix="%" />
      </WidgetContainer>
    </div>
  );
}
