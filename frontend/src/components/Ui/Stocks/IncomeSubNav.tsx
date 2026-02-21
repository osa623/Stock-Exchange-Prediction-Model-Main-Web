"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function IncomeSubNav() {
  const pathname = usePathname() || "";

  const items = [
    { name: "Financials", path: "/report_data/income" },
    { name: "Graphs", path: "/report_data/income/graphs" },
  ];

  return (
    <nav className="flex justify-center w-full mb-4">
      <div className="w-full max-w-[95vw] sm:max-w-fit overflow-x-auto hide-scrollbar px-2">
        <div className="flex items-center p-1.5 bg-black/30 backdrop-blur-xl border border-white/8 rounded-full shadow-sm mx-auto min-w-max">
          {items.map((item) => {
            const isActive = pathname === item.path || (item.path === "/report_data/income" && pathname === "/report_data/income");

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-5 py-2 rounded-full transition-all duration-200 ${isActive ? "bg-[#DFBD69] text-black" : "text-gray-300 hover:text-white"}`}
              >
                <span className="text-sm font-semibold tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
}
