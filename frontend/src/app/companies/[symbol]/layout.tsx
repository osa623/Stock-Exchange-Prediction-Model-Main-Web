"use client";

import React from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import CompanyNav from "@/components/Pages/CompanyWorkspace/CompanyNav";
import { getCompanyBySymbol } from "@/lib/mock-data/companies";
import { Building2, ShieldCheck } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CompanyWorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);
  const company = getCompanyBySymbol(symbol) || {
    symbol,
    name: symbol.split('.')[0] + " PLC",
    sector: "Capital Goods",
    description: "Colombo Stock Exchange Listed Enterprise",
    revenue: 150000,
    netProfit: 12000,
    roe: 16.5,
    roa: 8.2,
    operatingMargin: 12.4,
    debtToEquity: 0.45,
    currentRatio: 1.5,
    cashFlow: 18000,
    dividendYield: 4.5,
    financialHealthScore: 88,
    updatedDate: "2026-07-20",
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#0B0F16] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { label: "Companies", href: "/companies" },
              { label: company.name },
            ]}
          />

          {/* Company Workspace Header Banner */}
          <div
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(13,19,26,0.95) 0%, rgba(24,40,71,0.8) 100%)",
              border: "1px solid rgba(56,189,248,0.2)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#182847] border border-[#306B99]/40 flex items-center justify-center text-[#38BDF8] flex-shrink-0">
                  <Building2 size={28} />
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#182847] text-[#E9D37E] border border-[#306B99]/30">
                      {company.symbol}
                    </span>
                    <span className="text-xs font-semibold px-3 py-0.5 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] uppercase tracking-wider">
                      {company.sector}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-bold text-white font-inter mt-1">
                    {company.name}
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-300 font-inter mt-1 max-w-3xl line-clamp-2">
                    {company.description}
                  </p>
                </div>
              </div>

              {/* Financial Health Score & Quick Indicators */}
              <div className="flex items-center gap-4 flex-shrink-0 bg-[#0D131A] p-4 rounded-xl border border-[#306B99]/30">
                <div className="text-center">
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold font-encode">
                    <ShieldCheck size={14} />
                    <span>Health Score</span>
                  </div>
                  <div className="text-2xl font-bold text-white font-inter mt-0.5">
                    {company.financialHealthScore}<span className="text-xs text-slate-400">/100</span>
                  </div>
                </div>

                <div className="h-8 w-px bg-[#306B99]/30" />

                <div className="text-center">
                  <span className="text-[10px] text-slate-400 uppercase block font-encode">ROE</span>
                  <span className="text-base font-bold text-emerald-400 font-inter">{company.roe}%</span>
                </div>

                <div className="h-8 w-px bg-[#306B99]/30" />

                <div className="text-center">
                  <span className="text-[10px] text-slate-400 uppercase block font-encode">Div Yield</span>
                  <span className="text-base font-bold text-[#E9D37E] font-inter">{company.dividendYield}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Tab Navigation Bar */}
          <CompanyNav symbol={symbol} />

          {/* Tab Content */}
          <div className="min-h-[400px]">{children}</div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
