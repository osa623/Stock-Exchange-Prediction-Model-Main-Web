"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import CompanyCard from "@/components/Ui/Cards/CompanyCard";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SavedCompaniesPage() {
  const saved = MOCK_COMPANIES.slice(0, 4);

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#0B0F16] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <PageHeader
            title="Saved Companies & Watchlist"
            subtitle="Bookmarked CSE listed corporate entities and saved comparison sets"
            category="User Workspace"
            breadcrumbs={[{ label: "Saved Companies", href: "/saved" }]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saved.map((c) => (
              <CompanyCard key={c.symbol} company={c} />
            ))}
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
