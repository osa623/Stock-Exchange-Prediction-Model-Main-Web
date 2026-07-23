"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Building,
  Users,
  FileSpreadsheet,
  PieChart,
  TrendingUp,
  Award,
  Droplets,
  ShieldAlert,
  Coins,
  Bell,
  Sparkles,
} from "lucide-react";

interface CompanyNavProps {
  symbol: string;
}

export default function CompanyNav({ symbol }: CompanyNavProps) {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: `/companies/${symbol}`, icon: LayoutDashboard },
    { name: "Business", href: `/companies/${symbol}/business`, icon: Building },
    { name: "Corporate", href: `/companies/${symbol}/corporate`, icon: Users },
    { name: "Financials", href: `/companies/${symbol}/financials`, icon: FileSpreadsheet },
    { name: "Ratios", href: `/companies/${symbol}/ratios`, icon: PieChart },
    { name: "Growth", href: `/companies/${symbol}/growth`, icon: TrendingUp },
    { name: "Profitability", href: `/companies/${symbol}/profitability`, icon: Award },
    { name: "Liquidity", href: `/companies/${symbol}/liquidity`, icon: Droplets },
    { name: "Risk Diagnostics", href: `/companies/${symbol}/risk`, icon: ShieldAlert },
    { name: "Dividends", href: `/companies/${symbol}/dividends`, icon: Coins },
    { name: "Disclosures", href: `/companies/${symbol}/announcements`, icon: Bell },
    { name: "AI Insights", href: `/companies/${symbol}/ai-insights`, icon: Sparkles },
  ];

  return (
    <nav className="flex justify-center w-full mb-8 relative z-30">
      <div className="w-full overflow-x-auto hide-scrollbar border border-[#306B99]/30 rounded-xl bg-[#0B0F16]">
        <div className="flex items-center justify-start sm:justify-center gap-0 px-0 py-0 mx-auto min-w-max">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive =
              item.name === "Overview"
                ? pathname === `/companies/${symbol}`
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex items-center gap-2 px-4 py-3 transition-all duration-150 group border-r border-[#306B99]/20 last:border-r-0"
              >
                {isActive && (
                  <motion.div
                    layoutId="company-nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{
                      background: "#38BDF8",
                      boxShadow: "0 0 12px rgba(56,189,248,0.6), 0 0 4px rgba(56,189,248,0.9)",
                    }}
                    transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="company-nav-bg"
                    className="absolute inset-0 -z-10"
                    style={{
                      background: "rgba(56,189,248,0.08)",
                    }}
                    transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
                  />
                )}
                <Icon
                  size={14}
                  className={`transition-colors duration-150 ${
                    isActive ? "text-[#38BDF8]" : "text-[#475569] group-hover:text-[#94A3B8]"
                  }`}
                />
                <span
                  className={`text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors duration-150 font-inter ${
                    isActive ? "text-[#F1F5F9]" : "text-[#64748B] group-hover:text-[#94A3B8]"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
