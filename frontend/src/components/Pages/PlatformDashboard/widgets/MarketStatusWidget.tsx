"use client";

import React from "react";
import { Clock, ShieldCheck, Activity, Calendar } from "lucide-react";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";

export default function MarketStatusWidget() {
  const isMarketOpen = true; // CSE Regular Trading Hours 09:30 - 14:30

  return (
    <WidgetContainer
      title="Colombo Stock Exchange Overview"
      subtitle="Market status & corporate reporting status"
      icon={<Activity size={20} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Status indicator */}
        <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 flex items-center gap-3">
          <div
            className={`w-4 h-4 rounded-full ${
              isMarketOpen ? "bg-emerald-400 animate-pulse shadow-[0_0_10px_#4ADE80]" : "bg-rose-400"
            }`}
          />
          <div>
            <span className="text-[10px] uppercase text-slate-400 block font-encode">
              CSE Status
            </span>
            <span className="text-sm font-bold text-white font-inter">
              {isMarketOpen ? "Regular Session Active" : "Market Closed"}
            </span>
          </div>
        </div>

        {/* Reporting Season */}
        <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 flex items-center gap-3">
          <Calendar className="text-[#38BDF8]" size={20} />
          <div>
            <span className="text-[10px] uppercase text-slate-400 block font-encode">
              Reporting Cycle
            </span>
            <span className="text-sm font-bold text-white font-inter">
              Q2 2026 Financial Release
            </span>
          </div>
        </div>

        {/* Coverage */}
        <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 flex items-center gap-3">
          <ShieldCheck className="text-[#E9D37E]" size={20} />
          <div>
            <span className="text-[10px] uppercase text-slate-400 block font-encode">
              Companies Analyzed
            </span>
            <span className="text-sm font-bold text-[#E9D37E] font-inter">
              285 Listed Entities
            </span>
          </div>
        </div>

        {/* Data Sync */}
        <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 flex items-center gap-3">
          <Clock className="text-purple-400" size={20} />
          <div>
            <span className="text-[10px] uppercase text-slate-400 block font-encode">
              Financial Sync
            </span>
            <span className="text-sm font-bold text-white font-inter">
              Updated 10m ago
            </span>
          </div>
        </div>
      </div>
    </WidgetContainer>
  );
}
