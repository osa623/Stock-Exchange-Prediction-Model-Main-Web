import React from "react";
import Watchlist from "@/components/Pages/Watchlist/page"; 



export default function DashboardPage() {
  return (
    <main className="min-h-screen text-white">
     
      <div className="container mx-auto px-6 py-8 space-y-8">

        <Watchlist />
      </div>
    </main>
  );
}



