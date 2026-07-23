"use client";

import React from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { getCompanyBySymbol } from "@/lib/mock-data/companies";
import { Droplets } from "lucide-react";

export default function LiquidityPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);
  const company = getCompanyBySymbol(symbol);

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="Liquidity & Working Capital Health"
        subtitle="Current ratio, quick ratio, cash ratio & working capital management"
        icon={<Droplets size={20} />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 text-center space-y-2">
            <span className="text-xs text-slate-400 font-encode uppercase">Current Ratio</span>
            <div className="text-3xl font-bold text-[#38BDF8] font-inter">{company?.currentRatio || 1.6}x</div>
            <p className="text-xs text-slate-400">Benchmark &ge; 1.5x (Healthy working capital buffer)</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 text-center space-y-2">
            <span className="text-xs text-slate-400 font-encode uppercase">Quick Ratio</span>
            <div className="text-3xl font-bold text-emerald-400 font-inter">1.15x</div>
            <p className="text-xs text-slate-400">Excludes inventory (Immediate liquidity)</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 text-center space-y-2">
            <span className="text-xs text-slate-400 font-encode uppercase">Cash Conversion Cycle</span>
            <div className="text-3xl font-bold text-[#E9D37E] font-inter">42 Days</div>
            <p className="text-xs text-slate-400">Days sales outstanding + Inventory - Payables</p>
          </div>
        </div>
      </WidgetContainer>
    </div>
  );
}
