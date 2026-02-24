"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { Table, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function IncomeSubNav() {
  const pathname = usePathname() || "";
  const params = useParams();
  const symbol = typeof params?.symbol === "string" ? params.symbol : "";
  const suffix = symbol ? `/${symbol}` : "";

  const items = [
    { name: "Financials", path: `/report_data/income${suffix}`, icon: Table },
    { name: "Graphs", path: `/report_data/income${suffix}/graphs`, icon: BarChart3 },
  ];

  return (
    <nav className="flex justify-center w-full mb-4">
      <div
        className="inline-flex items-center gap-0.5 p-0.5 rounded-lg"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path || pathname.startsWith(item.path + "/graphs");

          return (
            <Link
              key={item.name}
              href={item.path}
              className="relative flex items-center gap-1.5 px-4 py-1.5 rounded-md transition-all duration-200"
            >
              {isActive && (
                <motion.div
                  layoutId="income-sub-toggle"
                  className="absolute inset-0 rounded-md -z-10"
                  style={{
                    background: "rgba(59,130,246,0.12)",
                    border: "1px solid rgba(59,130,246,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
              <Icon
                size={13}
                className={`transition-colors duration-200 ${isActive ? "text-blue-400" : "text-gray-600"}`}
              />
              <span
                className={`text-xs font-semibold tracking-wide transition-colors duration-200 font-inter ${isActive ? "text-blue-400" : "text-gray-500 hover:text-gray-300"
                  }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
