"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import SearchBar from "@/components/Common/SearchBar";
import MarketStatusWidget from "./widgets/MarketStatusWidget";
import LatestAnnouncementsWidget from "./widgets/LatestAnnouncementsWidget";
import SectorSummaryWidget from "./widgets/SectorSummaryWidget";
import FinancialRankingsWidget from "./widgets/FinancialRankingsWidget";
import AIInsightsWidget from "./widgets/AIInsightsWidget";
import FeaturedCompaniesWidget from "./widgets/FeaturedCompaniesWidget";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <PageHeader
        title="CSE Financial Intelligence Platform"
        subtitle="Corporate fundamental analysis, financial health diagnostics, sector metrics & disclosures"
        category="Executive Intelligence Hub"
      />

      {/* Global Search Bar */}
      <div className="max-w-3xl mx-auto -mt-4">
        <SearchBar placeholder="Search CSE listed companies, disclosures, or sectors..." />
      </div>

      {/* Market Status Overview */}
      <MarketStatusWidget />

      {/* Grid Section 1: AI Insights + Financial Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AIInsightsWidget />
        <FinancialRankingsWidget />
      </div>

      {/* Featured Companies */}
      <FeaturedCompaniesWidget />

      {/* Sector Summary Overview */}
      <SectorSummaryWidget />

      {/* Latest Corporate Announcements */}
      <LatestAnnouncementsWidget />
    </div>
  );
}
