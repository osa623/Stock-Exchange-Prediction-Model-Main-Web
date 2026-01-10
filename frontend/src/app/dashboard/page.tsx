import React from "react";
import AllStocksSection from "@/components/Pages/Dashboard/AllStocksSection";
import SectorSection from "@/components/Pages/Dashboard/SectorSection";
import PortfolioSection from "@/components/Pages/Dashboard/PortfolioSection"; 
import Particles from '@/components/Ui/Particles';


export default function DashboardPage() {
  return (
    <main className="relative min-h-screen text-white w-full">
      {/* BACKGROUND PARTICLES */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* DASHBOARD CONTENT */}
      <div className="container mx-auto p-6 relative z-10">
        <AllStocksSection />
        <SectorSection />
        <PortfolioSection />
      </div>
    </main>
  );
}

