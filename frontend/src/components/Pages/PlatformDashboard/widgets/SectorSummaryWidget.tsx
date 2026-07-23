"use client";

import React from "react";
import Link from "next/link";
import { PieChart, ArrowUpRight } from "lucide-react";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { MOCK_SECTORS } from "@/lib/mock-data/sectors";

export default function SectorSummaryWidget() {
  return (
    <WidgetContainer
      title="Sector Financial Health Overview"
      subtitle="Average return on equity, profitability, and health scores by sector"
      actionText="Explore Sectors"
      actionHref="/sector_page"
      icon={<PieChart size={20} />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_SECTORS.map((sector) => (
          <Link
            key={sector.code}
            href={`/sector_page`}
            className="group p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/20 hover:border-[#38BDF8]/40 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#E9D37E] bg-[#182847] px-2 py-0.5 rounded">
                {sector.code}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                Health: {sector.avgHealthScore}/100
              </span>
            </div>

            <h4 className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-3 font-inter">
              {sector.name}
            </h4>

            <div className="grid grid-cols-2 gap-2 text-xs border-t border-[#306B99]/20 pt-2">
              <div>
                <span className="text-[10px] text-slate-400 block font-encode">Avg ROE</span>
                <span className="font-bold text-white font-inter">{sector.avgRoe}%</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-encode">Entities</span>
                <span className="font-bold text-slate-300 font-inter">{sector.companyCount}</span>
              </div>
            </div>

            <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
              <span className="truncate">Top: {sector.topPerformerName}</span>
              <ArrowUpRight size={12} className="text-[#38BDF8] flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </WidgetContainer>
  );
}
