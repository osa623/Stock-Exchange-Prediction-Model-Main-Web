import React from "react";
import AllStocksSection from "@/components/Pages/Dashboard/AllStocksSection";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white w-full">
      <div className="container mx-auto p-6">
        {/* ALL STOCKS SECTION */}
        <AllStocksSection />

        {/* FUTURE SECTIONS WILL GO HERE */}
      </div>
    </main>
  );
}
