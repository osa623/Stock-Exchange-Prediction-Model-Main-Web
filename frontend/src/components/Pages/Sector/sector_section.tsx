"use client";

import React, { useState } from "react";
import { Search, Filter, SortAsc, ArrowUpRight, ArrowDownRight, TrendingUp, Zap, Server, Activity, Briefcase, Landmark } from "lucide-react";
import { motion } from "framer-motion";

// --- Mock Data ---

const SECTORS = [
    { id: "all", name: "All Sectors", icon: Activity },
    { id: "tech", name: "Technology", icon: Server },
    { id: "finance", name: "Finance", icon: Landmark },
    { id: "energy", name: "Energy", icon: Zap },
    { id: "health", name: "Healthcare", icon: TrendingUp },
    { id: "manufacturing", name: "Manufacturing", icon: Briefcase },
];

const STOCKS = [
    { id: 1, symbol: "AAPL", name: "Apple Inc.", sector: "Technology", price: 185.92, change: 1.25, marketCap: "2.8T" },
    { id: 2, symbol: "MSFT", name: "Microsoft Corp.", sector: "Technology", price: 402.56, change: 0.89, marketCap: "3.1T" },
    { id: 3, symbol: "JPM", name: "JPMorgan Chase", sector: "Finance", price: 172.45, change: -0.45, marketCap: "500B" },
    { id: 4, symbol: "XOM", name: "Exxon Mobil", sector: "Energy", price: 102.30, change: 0.12, marketCap: "410B" },
    { id: 5, symbol: "JNJ", name: "Johnson & Johnson", sector: "Healthcare", price: 158.20, change: -0.10, marketCap: "380B" },
    { id: 6, symbol: "TSLA", name: "Tesla Inc.", sector: "Manufacturing", price: 215.10, change: -2.30, marketCap: "680B" },
    { id: 7, symbol: "NVDA", name: "NVIDIA Corp.", sector: "Technology", price: 596.54, change: 3.10, marketCap: "1.5T" },
    { id: 8, symbol: "BAC", name: "Bank of America", sector: "Finance", price: 32.80, change: 0.50, marketCap: "260B" },
    { id: 9, symbol: "CVX", name: "Chevron Corp.", sector: "Energy", price: 145.60, change: -0.20, marketCap: "270B" },
    { id: 10, symbol: "PFE", name: "Pfizer Inc.", sector: "Healthcare", price: 28.50, change: 0.05, marketCap: "160B" },
    { id: 11, symbol: "BA", name: "Boeing Co.", sector: "Manufacturing", price: 210.40, change: -1.50, marketCap: "130B" },
    { id: 12, symbol: "AMD", name: "Advanced Micro Devices", sector: "Technology", price: 162.70, change: 2.50, marketCap: "260B" },
];

export default function SectorSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSector, setSelectedSector] = useState("all");
    const [sortAsc, setSortAsc] = useState(false);

    // Filter & Sort Logic
    const filteredStocks = STOCKS.filter((stock) => {
        const matchesSearch =
            stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            stock.symbol.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesSector =
            selectedSector === "all" || stock.sector.toLowerCase() === SECTORS.find(s => s.id === selectedSector)?.name.toLowerCase();

        return matchesSearch && matchesSector;
    }).sort((a, b) => {
        return sortAsc ? a.price - b.price : b.price - a.price;
    });

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039] text-gray-100 p-6 sm:p-10 font-sans">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* --- Header Section: Title & Search --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DFBD69] to-[#ffffff] mb-2 font-encode">
                            Market Dashboard
                        </h1>
                        <p className="text-gray-400">Real-time sector performance & analytics</p>
                    </div>

                    <div className="flex w-full md:w-auto gap-4 items-center">
                        {/* Search Input */}
                        <div className="relative group w-full md:w-80">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#DFBD69] transition-colors" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-[#DFBD69]/50 focus:ring-1 focus:ring-[#DFBD69]/50 transition-all backdrop-blur-sm"
                                placeholder="Search stocks or companies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Sort Toggle */}
                        <button
                            onClick={() => setSortAsc(!sortAsc)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl hover:bg-white/5 transition-all group backdrop-blur-sm"
                        >
                            <SortAsc className={`h-5 w-5 text-gray-400 group-hover:text-[#DFBD69] transition-transform ${sortAsc ? 'rotate-180' : ''}`} />
                            <span className="hidden sm:inline text-sm font-medium text-gray-300">Sort</span>
                        </button>
                    </div>
                </div>


                {/* --- Middle Section: Sector Tabs --- */}
                <div className="w-full overflow-x-auto hide-scrollbar pb-4">
                    <div className="flex gap-3 min-w-max">
                        {SECTORS.map((sector) => {
                            const Icon = sector.icon;
                            const isActive = selectedSector === sector.id;
                            return (
                                <button
                                    key={sector.id}
                                    onClick={() => setSelectedSector(sector.id)}
                                    className={`
                     relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border
                     ${isActive
                                            ? "bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 border-[#DFBD69] text-[#DFBD69]"
                                            : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
                                        }
                   `}
                                >
                                    <Icon className={`h-4 w-4 ${isActive ? 'text-[#DFBD69]' : 'text-gray-500'}`} />
                                    {sector.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSectorPill"
                                            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#DFBD69]/10 to-[#926F34]/10 -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* --- Main Content: Stock Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredStocks.map((stock) => (
                        <motion.div
                            key={stock.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="group relative p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 hover:border-[#DFBD69]/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(223,189,105,0.15)] overflow-hidden"
                        >
                            {/* Card Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-[#DFBD69]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex justify-between items-start mb-4">
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-white group-hover:text-[#DFBD69] transition-colors">{stock.symbol}</span>
                                    <span className="text-xs text-gray-500 truncate max-w-[120px]">{stock.name}</span>
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${stock.change >= 0 ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"}`}>
                                    {stock.change >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                                    {Math.abs(stock.change)}%
                                </div>
                            </div>

                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-xs text-gray-400 mb-1">Price</p>
                                    <p className="text-2xl font-semibold text-white tracking-wide">${stock.price.toFixed(2)}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 mb-1">Mkt Cap</p>
                                    <p className="text-sm font-medium text-gray-200">{stock.marketCap}</p>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-xs">
                                <span className="px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">{stock.sector}</span>
                                <button className="text-[#DFBD69] hover:text-white transition-colors font-medium">Analytics &rarr;</button>
                            </div>

                        </motion.div>
                    ))}

                    {filteredStocks.length === 0 && (
                        <div className="col-span-full py-20 text-center text-gray-500">
                            <p className="text-lg">No stocks found matching "{searchQuery}"</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
