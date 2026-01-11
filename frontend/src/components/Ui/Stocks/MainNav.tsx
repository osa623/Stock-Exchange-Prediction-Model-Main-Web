"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
  const cleanPathname = pathname.replace(/\/$/, "");
  const cleanPath = path.replace(/\/$/, "");
  return cleanPathname === cleanPath || cleanPathname.startsWith(cleanPath + "/");
};



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

          <Link href="/stocks">
            <span className={itemClass("/stocks")}>
              Stock Details
            </span>
          </Link>

          <Link href="/report_data/income">
            <span className={itemClass("/report_data")}>
              Report Data
            </span>
          </Link>


          

          <Link href="/calculations">
            <span className={itemClass("/calculations")}>
              Stock Calculations
            </span>
          </Link>

          <Link href="/ratios">
            <span className={itemClass("/ratios")}>
              Stock Ratios
            </span>
          </Link>

          <Link href="/valuations">
            <span className={itemClass("/valuations")}>
              Stock Valuations
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}
