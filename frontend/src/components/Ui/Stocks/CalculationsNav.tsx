"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function MainNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Income Statement", path: "/calculations/income" },
    { name: "Financial Position", path: "/calculations/financial_position" },
    { name: "Cash Flow", path: "/calculations/cash_flow" },
  ];

  return (
    <nav className="flex justify-center w-full mb-10 sm:mb-14 relative z-30">
      <div className="w-full max-w-[95vw] sm:max-w-fit overflow-x-auto hide-scrollbar px-2">
        <div className="flex items-center p-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50 mx-auto min-w-max relative">
          {navItems.map((item) => {
            const isActive = pathname.includes(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-6 py-2.5 rounded-full transition-colors duration-300 isolate"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-calc-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[#DFBD69] to-[#926F34] rounded-full shadow-[0_0_15px_rgba(223,189,105,0.3)] -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <span
                  className={`text-xs sm:text-sm font-bold tracking-wider font-encode whitespace-nowrap transition-colors duration-200 ${isActive ? "text-black" : "text-gray-400 hover:text-white"
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
}
