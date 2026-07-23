"use client";

import React from "react";
import PageHeader from "@/components/Common/PageHeader";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { Bell, FileText, Sparkles, ShieldCheck } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Commercial Bank (COMB) Q2 Interim Financial Statements Published",
      date: "2026-07-22 14:30",
      type: "Disclosure",
      icon: FileText,
      color: "#38BDF8",
    },
    {
      id: 2,
      title: "AI Insight Generated: Ceylon Tobacco (CTC) Margin Expansion",
      date: "2026-07-21 09:15",
      type: "AI Intelligence",
      icon: Sparkles,
      color: "#FACC15",
    },
    {
      id: 3,
      title: "John Keells Holdings (JKH) Dividend Approved by Board",
      date: "2026-07-20 16:45",
      type: "Corporate Action",
      icon: ShieldCheck,
      color: "#4ADE80",
    },
  ];

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#0B0F16] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <PageHeader
            title="Notifications & Disclosure Alerts"
            subtitle="Real-time alerts on corporate disclosures, AI insights, and financial statement releases"
            category="User Center"
            breadcrumbs={[{ label: "Notifications", href: "/notifications" }]}
          />

          <WidgetContainer
            title="Recent Activity & Financial Alerts"
            subtitle="Alerts for bookmarked entities"
            icon={<Bell size={20} />}
          >
            <div className="space-y-3">
              {notifications.map((n) => {
                const Icon = n.icon;
                return (
                  <div
                    key={n.id}
                    className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 flex items-start gap-4 hover:border-[#38BDF8]/40 transition-all"
                  >
                    <div
                      className="p-2.5 rounded-xl flex-shrink-0"
                      style={{ backgroundColor: `${n.color}15`, color: n.color }}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#182847] text-[#38BDF8]">
                          {n.type}
                        </span>
                        <span className="text-[11px] text-slate-400 font-encode">{n.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white font-inter">{n.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </WidgetContainer>
        </div>
      </main>
    </ProtectedRoute>
  );
}
