"use client";

import MainNav from "@/components/Ui/Stocks/MainNav";
import SecondaryNav from "@/components/Ui/Stocks/RatioNav";
import CashFlow from "@/components/Pages/Ratios/cash_flow";

export default function IncomeStatementPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="absolute inset-0 -z-10">
      </div>
      <div className="container mx-auto px-6 py-8 space-y-8">

        {/* TOP NAV */}
        <MainNav />

        {/* SECONDARY NAV */}
        <SecondaryNav />

        {/* CONTENT */}
        <CashFlow />

      </div>
    </main>
  );
}
