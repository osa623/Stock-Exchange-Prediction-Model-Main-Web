"use client";

import React from 'react';

// --- Data ---
const sectorsData = [
  {
    id: 1,
    title: 'Banking',
    subtitle: 'High Liquidity',
    count: 10,
    color: 'blue',
    icon: (className: string) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="21" width="18" height="2" /><rect x="2" y="10" width="20" height="2" /><path d="M5 21V10" /><path d="M19 21V10" /><path d="M10 21V10" /><path d="M14 21V10" /><rect x="2" y="6" width="20" height="4" /><path d="M12 2L2 6h20L12 2z" /></svg>
  },
  {
    id: 2,
    title: 'Finance',
    subtitle: 'Market Leaders',
    count: 8,
    color: 'emerald',
    icon: (className: string) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  },
  {
    id: 3,
    title: 'Insurance',
    subtitle: 'Risk Mgmt',
    count: 6,
    color: 'purple',
    icon: (className: string) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  },
  {
    id: 4,
    title: 'Capital Goods',
    subtitle: 'Industrial Core',
    count: 12,
    color: 'orange',
    icon: (className: string) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
  },
  {
    id: 5,
    title: 'Consumer',
    subtitle: 'High Demand',
    count: 15,
    color: 'pink',
    icon: (className: string) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
  },
  {
    id: 6,
    title: 'Diversified',
    subtitle: 'Mixed Portfolio',
    count: 5,
    color: 'cyan',
    icon: (className: string) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
  },
];

// --- Styles Helper ---
const getColorClasses = (color: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colors: Record<string, any> = {
    blue: {
      bg: 'bg-blue-500/5',
      border: 'group-hover:border-blue-500/30',
      icon: 'text-blue-500',
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      glow: 'shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)]',
    },
    emerald: {
      bg: 'bg-emerald-500/5',
      border: 'group-hover:border-emerald-500/30',
      icon: 'text-emerald-500',
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      glow: 'shadow-[0_0_20px_-5px_rgba(16,185,129,0.15)]',
    },
    purple: {
      bg: 'bg-purple-500/5',
      border: 'group-hover:border-purple-500/30',
      icon: 'text-purple-500',
      badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      glow: 'shadow-[0_0_20px_-5px_rgba(168,85,247,0.15)]',
    },
    orange: {
      bg: 'bg-orange-500/5',
      border: 'group-hover:border-orange-500/30',
      icon: 'text-orange-500',
      badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      glow: 'shadow-[0_0_20px_-5px_rgba(249,115,22,0.15)]',
    },
    pink: {
      bg: 'bg-pink-500/5',
      border: 'group-hover:border-pink-500/30',
      icon: 'text-pink-500',
      badge: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      glow: 'shadow-[0_0_20px_-5px_rgba(236,72,153,0.15)]',
    },
    cyan: {
      bg: 'bg-cyan-500/5',
      border: 'group-hover:border-cyan-500/30',
      icon: 'text-cyan-500',
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      glow: 'shadow-[0_0_20px_-5px_rgba(6,182,212,0.15)]',
    },
  };
  return colors[color] || colors.blue;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SectorCard = ({ data }: { data: any }) => {
  const theme = getColorClasses(data.color);
  const Icon = data.icon;

  return (
    <div className={`
      group relative flex flex-col justify-between p-6 h-[300px] rounded-2xl border border-gray-800/60 
      transition-all duration-300 hover:-translate-y-1 cursor-pointer
      bg-[#0D121F] ${theme.border} hover:bg-[#131825] ${theme.glow}
    `}>
      {/* Top Row: Icon & Count */}
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${theme.bg}`}>
           <Icon className={`w-7 h-7 ${theme.icon}`} />
        </div>
        <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${theme.badge}`}>
          {data.count} ASSETS
        </span>
      </div>

      {/* Bottom Row: Text Info */}
      <div className="mt-auto relative z-10">
        <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
          {data.title}
        </h3>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
          {data.subtitle}
        </p>
      </div>

      {/* Subtle Gradient overlay on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr from-${data.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
    </div>
  );
};

export default function SectorsFullSection() {
  return (
    <section className="w-full  bg-gradient-to-br py-20 from-[#0A0E1A] via-[#0D1425] to-[#182039] p-10 relative overflow-hidden border-y border-gray-800/50">
    
      {/* Radial Glow 
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" /> */}

      {/* --- Main Content Container --- */}
      <div className="relative w-full mx-auto ">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
          <div className="max-w-2xl">
             <h2 className="text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest mb-1">Market Segments</h2>
                 <h3 className="text-3xl md:text-4xl font-extrabold text-[#c7cbd0] tracking-tight leading-tight">
                 EXPLORE SECTORS<br/>

             </h3>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-3">
             <p className="text-gray-400 text-sm max-w-xs md:text-right">
                Diversify your portfolio by analyzing performance across varied high-growth sectors.
             </p>
             <button className="text-sm font-semibold text-white bg-gray-800 hover:bg-gray-700 px-5 py-2.5 rounded-lg border border-gray-700 transition flex items-center gap-2 group">
                Full Market Report 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </button>
          </div>
        </div>

        {/* Responsive Grid: 1 col (mobile), 2 col (tablet), 3 col (laptop), 6 col (wide) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {sectorsData.map((sector) => (
            <SectorCard key={sector.id} data={sector} />
          ))}
        </div>

      </div>
    </section>
  );
}