"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import Link from "next/link";
import { ShieldCheck, TrendingUp, Award, Droplets, Coins, Trophy, ArrowRight } from "lucide-react";

export default function FinancialAnalysisHub() {
  const analysisModules = [
    {
      title: "Financial Health & Solvency",
      href: "/analysis/financial-health",
      icon: ShieldCheck,
      color: "#38BDF8",
      description: "Evaluate balance sheet resilience, debt service capacity, interest coverage, and bankruptcy risk across all listed entities.",
    },
    {
      title: "Growth & CAGR Analytics",
      href: "/analysis/growth",
      icon: TrendingUp,
      color: "#4ADE80",
      description: "Analyze 3-year and 5-year revenue compounding, net income acceleration, and asset growth trajectories.",
    },
    {
      title: "Profitability & Margin Suite",
      href: "/analysis/profitability",
      icon: Award,
      color: "#FACC15",
      description: "Compare Gross, Operating, and Net Profit Margins, Return on Equity (ROE), and Return on Capital Employed (ROCE).",
    },
    {
      title: "Liquidity & Working Capital",
      href: "/analysis/liquidity",
      icon: Droplets,
      color: "#22D3EE",
      description: "Assess current ratios, quick ratios, cash conversion cycles, and short-term liquidity buffers.",
    },
    {
      title: "Dividend Yield & Sustainability",
      href: "/analysis/dividends",
      icon: Coins,
      color: "#E9D37E",
      description: "Explore corporate dividend yields, payout ratios, distribution consistency, and dividend safety scores.",
    },
    {
      title: "Market Financial Leaderboard",
      href: "/analysis/rankings",
      icon: Trophy,
      color: "#F87171",
      description: "Rank top performing CSE entities by revenue, profit, ROE, dividend yield, and financial health diagnostics.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0F16] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <PageHeader
          title="Market-Wide Financial Analysis Hub"
          subtitle="Deep fundamental analytics across all listed Colombo Stock Exchange sectors and corporate entities"
          category="Financial Diagnostics"
          breadcrumbs={[{ label: "Analysis", href: "/analysis" }]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisModules.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.href}
                href={m.href}
                className="group p-6 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 hover:border-[#38BDF8]/50 transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${m.color}15`, color: m.color }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors font-inter mb-2">
                    {m.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-inter leading-relaxed mb-6">
                    {m.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#306B99]/20 text-xs font-bold text-[#38BDF8] group-hover:text-white transition-colors font-inter">
                  <span>Open Analysis Module</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
