"use client";

import React from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { getCompanyBySymbol } from "@/lib/mock-data/companies";
import { Coins } from "lucide-react";

export default function DividendsPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);
  const company = getCompanyBySymbol(symbol);

  const dividendHistory = [
    { year: "2025 (Interim)", amount: "LKR 1.75", date: "2025-08-12", yield: "4.2%" },
    { year: "2024 (Final)", amount: "LKR 2.50", date: "2024-11-20", yield: "4.5%" },
    { year: "2024 (Interim)", amount: "LKR 1.50", date: "2024-06-15", yield: "4.0%" },
    { year: "2023 (Final)", amount: "LKR 2.00", date: "2023-11-10", yield: "4.1%" },
  ];

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="Dividend History & Yield Analysis"
        subtitle="Distribution record, payout ratio, and historical dividend yield"
        icon={<Coins size={20} />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-encode block">Dividend Yield</span>
            <span className="text-2xl font-bold text-[#E9D37E] font-inter">{company?.dividendYield || 4.2}%</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-encode block">Payout Ratio</span>
            <span className="text-2xl font-bold text-[#38BDF8] font-inter">42.5%</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/30 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-encode block">Consistency Score</span>
            <span className="text-2xl font-bold text-emerald-400 font-inter">94/100</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#306B99]/30 bg-[#0D131A]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#306B99]/30 bg-[#182847]/60 text-slate-200 uppercase font-bold font-encode">
                <th className="p-3">Event / Year</th>
                <th className="p-3">Dividend per Share</th>
                <th className="p-3">Payment Date</th>
                <th className="p-3 text-right">Yield</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#306B99]/20 font-inter">
              {dividendHistory.map((div, idx) => (
                <tr key={idx} className="hover:bg-[#306B99]/10">
                  <td className="p-3 font-semibold text-white">{div.year}</td>
                  <td className="p-3 font-bold text-[#E9D37E]">{div.amount}</td>
                  <td className="p-3 text-slate-400">{div.date}</td>
                  <td className="p-3 text-right font-bold text-emerald-400">{div.yield}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </WidgetContainer>
    </div>
  );
}
