"use client";

import MainNav from "@/components/Ui/Stocks/MainNav";
import SecondaryNav from "@/components/Ui/Stocks/SecondaryNav";
import IncomeST from "@/components/Pages/Stocks/IncomeST";
import FinancialPosition from "@/components/Pages/Stocks/financial_position";


export default function IncomeStatementPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8 space-y-8">

        {/* TOP NAV */}
        <MainNav />

        {/* SECONDARY NAV */}
        <SecondaryNav />

        {/* CONTENT */}
        <FinancialPosition/>

      </div>
    </main>
  );
}
