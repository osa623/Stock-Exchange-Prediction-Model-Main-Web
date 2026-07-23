"use client";

import React, { useState } from "react";
import PageHeader from "@/components/Common/PageHeader";
import AnnouncementCard from "@/components/Ui/Cards/AnnouncementCard";
import { MOCK_ANNOUNCEMENTS } from "@/lib/mock-data/announcements";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AnnouncementsHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Financial",
    "Corporate Actions",
    "Board Changes",
    "Compliance",
    "Circulars",
    "Regulatory",
  ];

  const filtered = selectedCategory === "All"
    ? MOCK_ANNOUNCEMENTS
    : MOCK_ANNOUNCEMENTS.filter((a) => a.category === selectedCategory);

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#0B0F16] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <PageHeader
            title="CSE Corporate Announcements & Regulatory Disclosures"
            subtitle="Financial statements, interim dividend declarations, board changes, and regulatory notices"
            category="Disclosures & Filings"
            breadcrumbs={[{ label: "Announcements", href: "/announcements" }]}
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-[#0D131A] border border-[#306B99]/30">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all font-inter ${
                  selectedCategory === cat
                    ? "bg-[#38BDF8] text-[#0D131A] shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                    : "bg-[#182847]/50 text-slate-300 hover:text-white border border-[#306B99]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <AnnouncementCard key={item.id} announcement={item} />
            ))}
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
