"use client";

import React from "react";
import Link from "next/link";
import { Building2, ArrowUpRight, ShieldCheck } from "lucide-react";
import { CompanyProfile } from "@/lib/mock-data/companies";

interface CompanyCardProps {
  company: CompanyProfile;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div
      className="group relative rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
      style={{
        background: "linear-gradient(135deg, rgba(13,19,26,0.95) 0%, rgba(17,24,39,0.95) 100%)",
        border: "1px solid rgba(56,189,248,0.12)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#38BDF8]/30" />

      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#182847] border border-[#306B99]/30 flex items-center justify-center text-[#38BDF8] flex-shrink-0">
              <Building2 size={20} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#182847] text-[#E9D37E] border border-[#306B99]/30">
                {company.symbol}
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors mt-1 line-clamp-1 font-inter">
                {company.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck size={12} />
            <span>{company.financialHealthScore}/100</span>
          </div>
        </div>

        <p className="text-xs text-slate-400 line-clamp-2 mb-4 font-inter">
          {company.description}
        </p>
      </div>

      <div className="border-t border-[#306B99]/20 pt-3 mt-2 grid grid-cols-3 gap-2 text-center">
        <div>
          <span className="text-[10px] uppercase text-slate-400 block font-encode">Revenue</span>
          <span className="text-xs font-bold text-white font-inter">LKR {(company.revenue / 1000).toFixed(1)}B</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-slate-400 block font-encode">ROE</span>
          <span className="text-xs font-bold text-emerald-400 font-inter">{company.roe}%</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-slate-400 block font-encode">Div Yield</span>
          <span className="text-xs font-bold text-[#E9D37E] font-inter">{company.dividendYield}%</span>
        </div>
      </div>

      <Link
        href={`/companies/${company.symbol}`}
        className="mt-4 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-white py-2 rounded-xl bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 transition-all font-inter"
      >
        <span>Open Workspace</span>
        <ArrowUpRight size={14} />
      </Link>
    </div>
  );
}
