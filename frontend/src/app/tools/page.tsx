"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import Link from "next/link";
import { Filter, Calculator, FileText, Download, ArrowRight } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ToolsHubPage() {
  const tools = [
    {
      title: "Financial Screener",
      href: "/tools/screener",
      icon: Filter,
      color: "#38BDF8",
      description: "Screen CSE companies using multi-criteria filters including ROE, Margin, Debt/Equity, and Dividend Yield.",
    },
    {
      title: "Ratio & Health Calculator",
      href: "/tools/calculator",
      icon: Calculator,
      color: "#FACC15",
      description: "Interactively calculate financial ratios, Altman Z-Score, and return metrics for custom inputs.",
    },
    {
      title: "Report Generator & Export",
      href: "/tools/screener",
      icon: FileText,
      color: "#4ADE80",
      description: "Generate comprehensive corporate financial reports and export metrics into CSV or PDF format.",
    },
  ];

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#0B0F16] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <PageHeader
            title="Investor Productivity & Analytics Tools"
            subtitle="Financial screener, ratio calculator, custom report generator, and data export"
            category="Tools & Calculators"
            breadcrumbs={[{ label: "Tools", href: "/tools" }]}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((t) => {
              const Icon = t.icon;
              return (
                <Link
                  key={t.title}
                  href={t.href}
                  className="group p-6 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 hover:border-[#38BDF8]/50 transition-all hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${t.color}15`, color: t.color }}
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors font-inter mb-2">
                      {t.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-inter leading-relaxed mb-6">
                      {t.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#306B99]/20 text-xs font-bold text-[#38BDF8] group-hover:text-white transition-colors font-inter">
                    <span>Launch Tool</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
