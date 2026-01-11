"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname.startsWith(path);

  const itemClass = (path: string) =>
    `px-5 py-2 rounded-full transition ${
      isActive(path)
        ? "bg-gray-200 text-black font-medium"
        : "text-gray-300 hover:bg-gray-700/60 hover:text-white"
    }`;

  return (
    <nav className="flex justify-center mb-10">
      <div className="bg-gray-900/60 border border-white/20 rounded-full px-7 py-4 " >
        <div className="flex gap-5 text-sm">

          <Link href="/calculations/income">
            <span className={itemClass("/calculations/income")}>
              Income Statement
            </span>
          </Link>

          <Link href="/calculations/financial_position">
            <span className={itemClass("/calculations/financial_position")}>
              Financial Position
            </span>
          </Link>

          <Link href="/calculations/cash_flow">
            <span className={itemClass("/calculations/cash_flow")}>
              Cash Flow
            </span>
          </Link>

          
        </div>
      </div>
    </nav>
  );
}
