import React from "react";
import StockList from "@/components/Pages/StockPage/stocklist"; 
import Particles from '@/components/Ui/Particles';


export default function DashboardPage() {
  return (
    <main className="min-h-screen text-white">
     
      <div className="container mx-auto px-6 py-8 space-y-8">

        <StockList />
      </div>
    </main>
  );
}




