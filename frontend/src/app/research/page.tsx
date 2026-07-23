"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import InsightCard from "@/components/Ui/Cards/InsightCard";
import { MOCK_INSIGHTS } from "@/lib/mock-data/insights";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ResearchHubPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#0B0F16] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <PageHeader
            title="Financial Research & AI Market Intelligence"
            subtitle="In-depth corporate analysis, sector studies, AI insights, and macro financial intelligence reports"
            category="Research & Insights"
            breadcrumbs={[{ label: "Research", href: "/research" }]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_INSIGHTS.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
