"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Calculator,
  PieChart,
  TrendingUp,
} from "lucide-react";

const navItems = [
  { name: "Stock Details", path: "/stocks", icon: BarChart3 },
  { name: "Report Data", path: "/report_data/income", icon: FileText },
  { name: "Calculations", path: "/calculations/income", icon: Calculator },
  { name: "Ratios", path: "/ratios/income", icon: PieChart },
  { name: "Valuations", path: "/valuations", icon: TrendingUp },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center w-full mb-10 sm:mb-14 relative z-30">
      <div className="w-full max-w-[95vw] overflow-x-auto hide-scrollbar">
        <div
          className="flex items-center justify-center gap-1 px-3 py-2 rounded-2xl mx-auto min-w-max"
          style={{
            background: "linear-gradient(135deg, rgba(13,19,33,0.75) 0%, rgba(11,15,25,0.85) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.path === "/stocks"
                ? pathname === "/stocks"
                : pathname.startsWith(item.path.split("/").slice(0, 2).join("/"));

            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 group"
              >
                {/* Active bottom accent */}
                {isActive && (
                  <motion.div
                    layoutId="main-nav-indicator"
                    className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #F5C56E, #D4A44B, transparent)",
                      boxShadow: "0 0 12px rgba(245,197,110,0.35)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                {/* Active subtle bg glow */}
                {isActive && (
                  <motion.div
                    layoutId="main-nav-bg"
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(245,197,110,0.06) 0%, rgba(245,197,110,0.02) 100%)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <Icon
                  size={15}
                  className={`transition-colors duration-300 ${isActive
                      ? "text-[#F5C56E]"
                      : "text-gray-500 group-hover:text-gray-300"
                    }`}
                />
                <span
                  className={`text-xs sm:text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors duration-300 font-inter ${isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-200"
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
