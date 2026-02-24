"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function CalculationsNav() {
  const pathname = usePathname();
  const params = useParams();
  const symbol = typeof params?.symbol === "string" ? params.symbol : "";

  const navItems = [
    { name: "Income Statement", base: "/calculations/income" },
    { name: "Financial Position", base: "/calculations/financial_position" },
    { name: "Cash Flow", base: "/calculations/cash_flow" },
  ];

  return (
    <nav className="flex justify-center w-full mb-8 sm:mb-10 relative z-20">
      <div className="w-full max-w-[95vw] sm:max-w-fit overflow-x-auto hide-scrollbar px-2">
        <div
          className="flex items-center p-1 rounded-xl mx-auto min-w-max"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {navItems.map((item) => {
            const href = symbol ? `${item.base}/${symbol}` : item.base;
            const isActive = pathname.includes(item.base);

            return (
              <Link
                key={item.base}
                href={href}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-200"
              >
                {isActive && (
                  <motion.div
                    layoutId="calc-nav-segment"
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      boxShadow:
                        "0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="calc-nav-accent"
                    className="absolute left-1 top-2 bottom-2 w-[2px] rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #F5C56E, #D4A44B)",
                      boxShadow: "0 0 8px rgba(245,197,110,0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`text-[11px] sm:text-xs font-semibold uppercase tracking-widest whitespace-nowrap transition-colors duration-200 font-inter ${isActive ? "text-white ml-1.5" : "text-gray-500 hover:text-gray-300"
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
