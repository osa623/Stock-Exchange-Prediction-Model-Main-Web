"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Table, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function CalculationsSubNav() {
  const pathname = usePathname() || "";

  const items = [
    { name: "Financials", path: "" },
    { name: "Graphs", path: "/graphs" },
  ];

  const getBasePath = () => {
    if (pathname.includes("/calculations/income")) return "/calculations/income";
    if (pathname.includes("/calculations/financial_position")) return "/calculations/financial_position";
    if (pathname.includes("/calculations/cash_flow")) return "/calculations/cash_flow";
    return "/calculations/income";
  };

  const basePath = getBasePath();

  const icons = [Table, BarChart3];

  return (
    <nav className="flex justify-center w-full mb-4">
      <div
        className="inline-flex items-center gap-0.5 p-0.5 rounded-lg"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {items.map((item, idx) => {
          const Icon = icons[idx];
          const fullPath = basePath + item.path;
          const isActive =
            item.path === "" ? pathname === basePath : pathname === fullPath;

          return (
            <Link
              key={item.path}
              href={fullPath}
              className="relative flex items-center gap-1.5 px-4 py-1.5 rounded-md transition-all duration-200"
            >
              {isActive && (
                <motion.div
                  layoutId="calc-sub-toggle"
                  className="absolute inset-0 rounded-md -z-10"
                  style={{
                    background: "rgba(59,130,246,0.12)",
                    border: "1px solid rgba(59,130,246,0.15)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 30,
                  }}
                />
              )}
              <Icon
                size={13}
                className={`transition-colors duration-200 ${isActive ? "text-blue-400" : "text-gray-600"
                  }`}
              />
              <span
                className={`text-xs font-semibold tracking-wide transition-colors duration-200 font-inter ${isActive
                    ? "text-blue-400"
                    : "text-gray-500 hover:text-gray-300"
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
