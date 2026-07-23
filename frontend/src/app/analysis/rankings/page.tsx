"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import FinancialRankingsWidget from "@/components/Pages/PlatformDashboard/widgets/FinancialRankingsWidget";

export default function RankingsAnalysisModule() {
  return (
    <main className="min-h-screen bg-[#0B0F16] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <PageHeader
          title="Market-Wide Financial Rankings & Leaderboard"
          subtitle="Interactive company rankings across ROE, Revenue, Net Income, and Dividend Yield"
          category="Analysis Module"
          breadcrumbs={[
            { label: "Analysis", href: "/analysis" },
            { label: "Rankings" },
          ]}
        />

        <FinancialRankingsWidget />
      </div>
    </main>
  );
}
