"use client";

import React from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { getCompanyBySymbol } from "@/lib/mock-data/companies";
import { Building, Target, Globe, Shield } from "lucide-react";

export default function BusinessPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);
  const company = getCompanyBySymbol(symbol);

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="Business Summary & Core Operations"
        subtitle="Operational footprint, sector position, and principal business activities"
        icon={<Building size={20} />}
      >
        <div className="space-y-4 text-slate-300 font-inter text-sm leading-relaxed">
          <p>
            {company?.name} ({company?.symbol}) operates as a leading corporate entity in the{" "}
            <span className="text-[#38BDF8] font-semibold">{company?.sector}</span> sector of Sri Lanka. The enterprise maintains strong operational capabilities across domestic and regional markets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#306B99]/20">
            <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/20">
              <Target className="text-[#38BDF8] mb-2" size={20} />
              <h4 className="font-bold text-white mb-1">Strategic Objective</h4>
              <p className="text-xs text-slate-400">
                To maximize shareholder value through efficient capital deployment, margin expansion, and market leadership.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/20">
              <Globe className="text-[#4ADE80] mb-2" size={20} />
              <h4 className="font-bold text-white mb-1">Market Reach</h4>
              <p className="text-xs text-slate-400">
                Extensive island-wide footprint across Sri Lanka with strategic export channels in South Asia and global markets.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/20">
              <Shield className="text-[#E9D37E] mb-2" size={20} />
              <h4 className="font-bold text-white mb-1">Competitive Moat</h4>
              <p className="text-xs text-slate-400">
                High brand equity, diversified revenue streams, robust governance, and scale-driven cost efficiencies.
              </p>
            </div>
          </div>
        </div>
      </WidgetContainer>
    </div>
  );
}
