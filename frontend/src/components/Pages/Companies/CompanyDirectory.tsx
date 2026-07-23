"use client";

import React, { useState } from "react";
import PageHeader from "@/components/Common/PageHeader";
import SearchBar from "@/components/Common/SearchBar";
import CompanyCard from "@/components/Ui/Cards/CompanyCard";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";
import { MOCK_SECTORS } from "@/lib/mock-data/sectors";
import { Filter, Building2 } from "lucide-react";

export default function CompanyDirectory() {
  const [selectedSector, setSelectedSector] = useState<string>("All");
  const [minHealthScore, setMinHealthScore] = useState<number>(0);

  const filteredCompanies = MOCK_COMPANIES.filter((company) => {
    const matchSector = selectedSector === "All" || company.sector.toLowerCase() === selectedSector.toLowerCase();
    const matchHealth = company.financialHealthScore >= minHealthScore;
    return matchSector && matchHealth;
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <PageHeader
        title="Colombo Stock Exchange Company Directory"
        subtitle="Explore all CSE listed corporate entities, financial health diagnostics, metrics, and workspaces"
        category="Corporate Entities"
        breadcrumbs={[{ label: "Companies", href: "/companies" }]}
      />

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#0D131A] p-4 rounded-2xl border border-[#306B99]/30">
        <div className="w-full md:w-1/2">
          <SearchBar placeholder="Filter companies by name, ticker symbol, or sector..." />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 font-encode">
            <Filter size={14} className="text-[#38BDF8]" />
            <span>Sector:</span>
          </div>

          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="bg-[#182847] border border-[#306B99]/40 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#38BDF8]"
          >
            <option value="All">All Sectors ({MOCK_COMPANIES.length})</option>
            {MOCK_SECTORS.map((sec) => (
              <option key={sec.code} value={sec.name}>
                {sec.name}
              </option>
            ))}
          </select>

          <select
            value={minHealthScore}
            onChange={(e) => setMinHealthScore(Number(e.target.value))}
            className="bg-[#182847] border border-[#306B99]/40 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#38BDF8]"
          >
            <option value={0}>All Health Scores</option>
            <option value={85}>Health Score &ge; 85</option>
            <option value={90}>Health Score &ge; 90</option>
          </select>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-encode border-b border-[#306B99]/20 pb-2">
        <span>Showing {filteredCompanies.length} Corporate Entities</span>
        <span>Sorted by Financial Health Score</span>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <CompanyCard key={company.symbol} company={company} />
        ))}
      </div>
    </div>
  );
}
