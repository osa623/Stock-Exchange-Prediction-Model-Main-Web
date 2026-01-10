import React from "react";
import AllStocksSection from "@/components/Pages/Stocks Fundamentals/AllStocksSection";
import SectorSection from "@/components/Pages/Stocks Fundamentals/SectorSection";
import { Section } from "lucide-react";
import PortfolioSection from "@/components/Pages/Stocks Fundamentals/PortfolioSection"; 

export default function StockFundamentals() {
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
