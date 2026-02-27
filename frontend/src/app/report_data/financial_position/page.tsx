"use client";

import MainNav from "@/components/Ui/Stocks/MainNav";
import SecondaryNav from "@/components/Ui/Stocks/Report_DataNav";
import FinancialPositionSubNav from "@/components/Ui/Stocks/FinancialPositionSubNav";
import FinancialPosition from "@/components/Pages/ReportData/financial_position";
import Particles from '@/components/Ui/Particles';


export default function IncomeStatementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039] text-white">

      <div className="container mx-auto px-6 py-8 space-y-8">

        {/* TOP NAV */}
        <MainNav />

        {/* SECONDARY NAV */}
        <SecondaryNav />

        {/* SUB NAV: Financials / Graphs */}
        <FinancialPositionSubNav />

        {/* CONTENT */}
        <FinancialPosition />

      </div>
    </main>
  );
}
