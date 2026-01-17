"use client";

import MainNav from "@/components/Ui/Stocks/MainNav";
import SecondaryNav from "@/components/Ui/Stocks/Report_DataNav";
import IncomeST from "@/components/Pages/ReportData/IncomeST";
import CashFlow from "@/components/Pages/ReportData/cash_flow";


export default function IncomeStatementPage() {
  return (
    <main className="min-h-screen text-white">

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
