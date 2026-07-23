"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { AIInsightItem } from "@/lib/mock-data/insights";

interface InsightCardProps {
  insight: AIInsightItem;
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <div
      className="group relative rounded-2xl p-5 transition-all duration-300 hover:scale-[1.01]"
      style={{
        background: "linear-gradient(135deg, rgba(20,28,48,0.9) 0%, rgba(13,19,26,0.95) 100%)",
        border: "1px solid rgba(250,204,21,0.2)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4), 0 0 15px rgba(250,204,21,0.05)",
      }}
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#FACC15]/10 text-[#FACC15]">
            <Sparkles size={16} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#FACC15] font-encode">
            AI Financial Insight
          </span>
        </div>

        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
          {insight.confidence}% Confidence
        </span>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-mono font-bold text-[#E9D37E] bg-[#182847] px-2 py-0.5 rounded border border-[#306B99]/30">
          {insight.symbol}
        </span>
        <span className="text-xs text-slate-300 font-semibold">{insight.companyName}</span>
      </div>

      <h3 className="text-base font-bold text-white group-hover:text-[#FACC15] transition-colors mb-2 font-inter">
        {insight.title}
      </h3>

      <p className="text-xs text-slate-300 leading-relaxed mb-4 font-inter">
        {insight.summary}
      </p>

      {/* Impact Metrics */}
      <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#0D131A]/80 border border-[#306B99]/20 mb-4">
        {insight.impactMetrics.map((m, idx) => (
          <div key={idx} className="text-center">
            <span className="text-[10px] text-slate-400 block font-encode">{m.name}</span>
            <div className="flex items-center justify-center gap-1 mt-0.5">
              <span className="text-xs font-bold text-white font-inter">{m.value}</span>
              {m.trend === "up" ? (
                <TrendingUp size={12} className="text-emerald-400" />
              ) : m.trend === "down" ? (
                <TrendingDown size={12} className="text-rose-400" />
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <Link
        href={`/companies/${insight.symbol}/ai-insights`}
        className="flex items-center justify-between text-xs font-bold text-[#FACC15] hover:text-white transition-colors pt-2 border-t border-[#306B99]/20"
      >
        <span>Deep AI Analysis</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
