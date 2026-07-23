"use client";

import React, { useState } from "react";
import PageHeader from "@/components/Common/PageHeader";
import CompanyCard from "@/components/Ui/Cards/CompanyCard";
import { MOCK_COMPANIES, CompanyProfile } from "@/lib/mock-data/companies";
import { Compass, TrendingUp, DollarSign, Award, ShieldCheck, Coins } from "lucide-react";

type PresetFilter = "all" | "growth" | "health" | "roe" | "dividends" | "cashflow";

export default function DiscoverPage() {
  const [activeFilter, setActiveFilter] = useState<PresetFilter>("all");

  const getFilteredCompanies = (): CompanyProfile[] => {
    switch (activeFilter) {
      case "growth":
        return [...MOCK_COMPANIES].sort((a, b) => b.revenue - a.revenue);
      case "health":
        return MOCK_COMPANIES.filter((c) => c.financialHealthScore >= 88);
      case "roe":
        return [...MOCK_COMPANIES].sort((a, b) => b.roe - a.roe);
      case "dividends":
        return [...MOCK_COMPANIES].sort((a, b) => b.dividendYield - a.dividendYield);
      case "cashflow":
        return [...MOCK_COMPANIES].sort((a, b) => b.cashFlow - a.cashFlow);
      default:
        return MOCK_COMPANIES;
    }
  };

  const filtered = getFilteredCompanies();

  const presets = [
    { id: "all", label: "All Intelligence Signals", icon: Compass },
    { id: "growth", label: "Highest Revenue Growth", icon: TrendingUp },
    { id: "health", label: "Strongest Financial Health", icon: ShieldCheck },
    { id: "roe", label: "Highest ROE & ROA", icon: Award },
    { id: "dividends", label: "Best Dividend Yield", icon: Coins },
    { id: "cashflow", label: "Strongest Free Cash Flow", icon: DollarSign },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <PageHeader
        title="Financial Discovery Engine"
        subtitle="Discover top-performing CSE entities ranked by financial metrics, profitability, solvency, and cash flows"
        category="Intelligent Discovery"
        breadcrumbs={[{ label: "Discover", href: "/discover" }]}
      />

      {/* Preset Screeners Bar */}
      <div className="flex flex-wrap gap-3 p-4 rounded-2xl bg-[#0D131A] border border-[#306B99]/30">
        {presets.map((p) => {
          const Icon = p.icon;
          const isActive = activeFilter === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveFilter(p.id as PresetFilter)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all font-inter ${
                isActive
                  ? "bg-[#38BDF8] text-[#0D131A] shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "bg-[#182847]/50 text-slate-300 hover:text-white hover:bg-[#182847] border border-[#306B99]/20"
              }`}
            >
              <Icon size={16} />
              <span>{p.label}</span>
            </button>
          );
        })}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-encode border-b border-[#306B99]/20 pb-2">
        <span>Showing {filtered.length} Discovered Companies</span>
        <span className="text-[#38BDF8]">Filtered by: {presets.find(p => p.id === activeFilter)?.label}</span>
      </div>

      {/* Company Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((company) => (
          <CompanyCard key={company.symbol} company={company} />
        ))}
      </div>
    </div>
  );
}
