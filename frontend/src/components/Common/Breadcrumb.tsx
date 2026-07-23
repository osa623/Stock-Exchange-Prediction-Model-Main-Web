"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-xs font-encode text-slate-400 py-3">
      <Link
        href="/dashboard"
        className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors"
      >
        <Home size={14} />
        <span>Platform</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <div key={idx} className="flex items-center space-x-2">
            <ChevronRight size={12} className="text-slate-600" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-[#38BDF8] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#E9D37E] font-medium">{item.label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
