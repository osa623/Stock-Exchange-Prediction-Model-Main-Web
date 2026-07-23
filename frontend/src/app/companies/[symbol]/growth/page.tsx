"use client";

import React from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import EChartsLineChart from "@/components/Ui/Charts/EChartsLineChart";
import { getCompanyBySymbol } from "@/lib/mock-data/companies";
import { TrendingUp } from "lucide-react";

export default function GrowthPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);
  const company = getCompanyBySymbol(symbol);

  const cagrData = [
    { year: "2021", value: 100 },
    { year: "2022", value: 115 },
    { year: "2023", value: 132 },
    { year: "2024", value: 148 },
    { year: "2025", value: 165 },
  ];

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="Historical Growth & CAGR Analytics"
        subtitle="Revenue, net profit, assets, and equity compounding rates over 5 years"
        icon={<TrendingUp size={20} />}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-encode block">3-Yr Revenue CAGR</span>
            <span className="text-xl font-bold text-[#38BDF8] font-inter">+12.8%</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-encode block">3-Yr Net Profit CAGR</span>
            <span className="text-xl font-bold text-emerald-400 font-inter">+15.4%</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-encode block">Asset Base Growth</span>
            <span className="text-xl font-bold text-[#E9D37E] font-inter">+10.2%</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-encode block">Equity Base Growth</span>
            <span className="text-xl font-bold text-purple-400 font-inter">+14.1%</span>
          </div>
        </div>

        <EChartsLineChart data={cagrData} color="#4ADE80" height={300} title="Normalized Compounded Growth Index (Base=100)" />
      </WidgetContainer>
    </div>
  );
}
