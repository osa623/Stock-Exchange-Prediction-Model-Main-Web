"use client";

import React from "react";
import Link from "next/link";
import { FileText, ArrowRight, Bell } from "lucide-react";
import { AnnouncementItem } from "@/lib/mock-data/announcements";

interface AnnouncementCardProps {
  announcement: AnnouncementItem;
}

export default function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  return (
    <div
      className="group relative rounded-xl p-4 transition-all duration-200 hover:bg-[#182847]/40 border border-[rgba(56,189,248,0.08)] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#182847] text-[#E9D37E] font-semibold border border-[#306B99]/30">
              {announcement.symbol}
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#38BDF8] px-2 py-0.5 rounded-full bg-[#38BDF8]/10">
              {announcement.category}
            </span>
          </div>

          <span className="text-[11px] text-slate-400 font-encode">
            {announcement.date}
          </span>
        </div>

        <h4 className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors line-clamp-2 font-inter mb-1.5">
          {announcement.title}
        </h4>

        <p className="text-xs text-slate-400 line-clamp-2 font-inter mb-3">
          {announcement.summary}
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#306B99]/20 text-xs">
        <span className="text-slate-400 font-encode truncate max-w-[200px]">
          {announcement.companyName}
        </span>
        <Link
          href={`/announcements?id=${announcement.id}`}
          className="flex items-center gap-1 text-[#38BDF8] hover:text-white font-semibold transition-colors"
        >
          <span>Read Notice</span>
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
