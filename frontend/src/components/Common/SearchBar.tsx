"use client";

import React, { useState } from "react";
import { Search, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search CSE companies by name or symbol...",
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filtered = query.trim()
    ? MOCK_COMPANIES.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.symbol.toLowerCase().includes(query.toLowerCase()) ||
          c.sector.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder={placeholder}
          className="w-full bg-[#182847]/60 border border-[#306B99]/40 text-white placeholder-slate-400 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50 focus:border-[#38BDF8] transition-all font-inter shadow-inner"
        />
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#0D131A] border border-[#306B99]/40 rounded-xl shadow-2xl overflow-hidden z-50 divide-y divide-[#306B99]/20">
          {filtered.slice(0, 6).map((company) => (
            <Link
              key={company.symbol}
              href={`/companies/${company.symbol}`}
              className="flex items-center justify-between p-3.5 hover:bg-[#306B99]/20 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#182847] border border-[#306B99]/30 flex items-center justify-center text-[#38BDF8]">
                  <Building2 size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white group-hover:text-[#38BDF8]">
                      {company.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#182847] text-[#E9D37E]">
                      {company.symbol}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{company.sector}</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-slate-500 group-hover:text-[#38BDF8]" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
