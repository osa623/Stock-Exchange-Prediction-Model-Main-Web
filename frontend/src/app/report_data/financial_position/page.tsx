"use client";

import MainNav from "@/components/Ui/Stocks/MainNav";
import SecondaryNav from "@/components/Ui/Stocks/Report_DataNav";
import IncomeST from "@/components/Pages/Stocks/IncomeST";
import FinancialPosition from "@/components/Pages/Stocks/financial_position";
import Particles from '@/components/Ui/Particles';


export default function IncomeStatementPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
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
