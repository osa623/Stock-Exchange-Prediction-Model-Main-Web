import React from "react";
import AllStocksSection from "@/components/Pages/Dashboard/AllStocksSection";
import SectorSection from "@/components/Pages/Dashboard/SectorSection";
import { Section } from "lucide-react";
import PortfolioSection from "@/components/Pages/Dashboard/PortfolioSection"; 

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white w-full">
      <div className="container mx-auto p-6">
        {/* ALL STOCKS SECTION */}
        <AllStocksSection />

        <SectorSection/>

        <PortfolioSection/>
      </div>
    </main>
  );
}
