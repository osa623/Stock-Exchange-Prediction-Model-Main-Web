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
    { id: 1, symbol: "AAPL", name: "Apple Inc.", sector: "Technology", price: 185.92, change: 1.25, marketCap: "2.8T", pe: 28.5, pb: 4.1, dcf: 190.00, nav: 74 },
    { id: 2, symbol: "MSFT", name: "Microsoft Corp.", sector: "Technology", price: 402.56, change: 0.89, marketCap: "3.1T", pe: 35.2, pb: 7.1, dcf: 415.0, nav: 82 },
    { id: 3, symbol: "JPM", name: "JPMorgan Chase & Co.", sector: "Finance", price: 172.45, change: -0.45, marketCap: "495B", pe: 11.2, pb: 1.5, dcf: 185.0, nav: 110 },
    { id: 4, symbol: "GS", name: "Goldman Sachs Group", sector: "Finance", price: 385.12, change: 1.12, marketCap: "125B", pe: 14.8, pb: 1.2, dcf: 410.0, nav: 320 },
    { id: 5, symbol: "XOM", name: "Exxon Mobil Corp.", sector: "Energy", price: 102.34, change: 2.34, marketCap: "410B", pe: 12.5, pb: 2.1, dcf: 115.0, nav: 65 },
    { id: 6, symbol: "CVX", name: "Chevron Corp.", sector: "Energy", price: 148.76, change: -1.21, marketCap: "280B", pe: 13.8, pb: 1.8, dcf: 160.0, nav: 95 },
    { id: 7, symbol: "JNJ", name: "Johnson & Johnson", sector: "Healthcare", price: 158.45, change: 0.54, marketCap: "380B", pe: 15.4, pb: 5.2, dcf: 175.0, nav: 45 },
    { id: 8, symbol: "PFE", name: "Pfizer Inc.", sector: "Healthcare", price: 27.89, change: -0.87, marketCap: "157B", pe: 9.8, pb: 1.6, dcf: 35.0, nav: 22 },
    { id: 9, symbol: "CAT", name: "Caterpillar Inc.", sector: "Manufacturing", price: 325.67, change: 3.12, marketCap: "165B", pe: 17.2, pb: 8.4, dcf: 340.0, nav: 115 },
    { id: 10, symbol: "BA", name: "Boeing Co.", sector: "Manufacturing", price: 205.34, change: -2.45, marketCap: "125B", pe: 45.1, pb: 12.5, dcf: 220.0, nav: 15 },
    { id: 11, symbol: "NVDA", name: "NVIDIA Corp.", sector: "Technology", price: 726.13, change: 4.5, marketCap: "1.8T", pe: 95.4, pb: 45.2, dcf: 750.0, nav: 120 },
    { id: 12, symbol: "BAC", name: "Bank of America Corp.", sector: "Finance", price: 33.92, change: -0.2, marketCap: "268B", pe: 10.5, pb: 1.1, dcf: 38.0, nav: 32 },
    { id: 13, symbol: "UNH", name: "UnitedHealth Group Inc.", sector: "Healthcare", price: 525.40, change: 1.1, marketCap: "485B", pe: 22.1, pb: 5.8, dcf: 550.0, nav: 180 },
    { id: 14, symbol: "GE", name: "General Electric Co.", sector: "Manufacturing", price: 145.21, change: 0.75, marketCap: "158B", pe: 16.2, pb: 2.5, dcf: 170.0, nav: 55 },
];

const SORT_OPTIONS = [
    { id: "pe", label: "P/E Ratio" },
    { id: "pb", label: "P/B Ratio" },
    { id: "nav", label: "NAV" },
    { id: "dcf", label: "DCF Value" },
];

export default function SectorSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSector, setSelectedSector] = useState("all");
    const [sortBy, setSortBy] = useState(null); // "pe" | "pb" | "nav" | "dcf"
    const [sortOption, setSortOption] = useState("");






    // Filter & Sort Logic
    let filteredStocks = STOCKS.filter((stock) => {
        const matchesSearch =
            stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            stock.symbol.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesSector =
            selectedSector === "all" || stock.sector.toLowerCase() === SECTORS.find(s => s.id === selectedSector)?.name.toLowerCase();

        return matchesSearch && matchesSector;
    });

    // --- SORT LOGIC ---
    filteredStocks.sort((a, b) => {
        switch (sortOption) {
            case "price":
                return a.price - b.price;
            case "pe":
                return a.pe - b.pe;
            case "pb":
                return a.pb - b.pb;
            case "nav":
                return a.nav - b.nav;
            case "dcf":
                return a.dcf - b.dcf;
            case "peValue":
                return (a.pe / a.price) - (b.pe / b.price);
            case "navDiscount":
                return (a.price / a.nav) - (b.price / b.nav);
            case "dcfDiscount":
                return (a.price / a.dcf) - (b.price / b.dcf);
            default:
                return 0; // no sorting
        }
    });




    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039] text-gray-100 p-6 sm:p-10 font-sans">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* --- Header Section: Title & Search --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DFBD69] to-[#ffffff] mb-2 font-encode">
                            Sector Section
                        </h1>
                        <p className="text-gray-400">Real-time sector performance & analytics</p>
                    </div>

                    <div className="flex sm:flex-col lg:flex-row  w-full md:w-auto gap-4 items-center">
                        {/* Search Input */}
                        <div className="relative group w-full md:w-80">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#DFBD69] transition-colors" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-4 py-2.5 bg-black/40 border rounded-3xl border-white/10 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-[#DFBD69]/50 focus:ring-1 focus:ring-[#DFBD69]/50 transition-all backdrop-blur-sm"
                                placeholder="Search stocks or companies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Sort Toggle */}
                        <div className="flex items-center gap-2 sm:gap-3">
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-lg bg-[#040F1F] border border-white/20 text-white cursor-pointer placeholder-gray-400 focus:outline-none focus:border-[#DFBD69]/50 focus:ring-1 focus:ring-[#DFBD69]/50 backdrop-blur-sm transition-colors duration-200"
                        >
                            <option value="">Sort By</option>
                            <option value="price">Price - (Low → High)</option>
                            <option value="pe">PE - (Low → High)</option>
                            <option value="pb">PB - (Low → High)</option>
                            <option value="nav">NAV - (Low → High)</option>
                            <option value="dcf">DCF - (Low → High)</option>
                            <option value="peValue">PE / Price - (Best Value)</option>
                            <option value="navDiscount">Price / NAV - (Lowest)</option>
                            <option value="dcfDiscount">Price / DCF - (Lowest)</option>
                        </select>
                        </div>




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
                                    relative flex items-center cursor-pointer gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {filteredStocks.map((stock) => (
                        <motion.div
                            key={stock.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="group relative p-6 bg-black/40 cursor-pointer backdrop-blur-md rounded-2xl border border-white/20 hover:border-[#DFBD69]/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(223,189,105,0.15)] overflow-hidden"
                        >
                            <div className="absolute top-0 left-0">
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#DFBD69]/10 border-b border-r border-[#DFBD69]/20 rounded-br-xl backdrop-blur-md">
                                    <div className="w-1 h-1 rounded-full bg-[#DFBD69] shadow-[0_0_8px_#DFBD69]" />
                                    <span className="text-[10px] font-normal uppercase tracking-widest text-[#DFBD69]">
                                        {stock.sector}
                                    </span>
                                </div>
                            </div>
                            {/* Card Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-[#DFBD69]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex justify-between items-start mb-4">
                                <div className="flex flex-col mt-4">
                                    <span className="text-xl font-bold text-white group-hover:text-[#DFBD69] transition-colors">{stock.symbol}</span>
                                    
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${stock.change >= 0 ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"}`}>
                                    {stock.change >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                                    {Math.abs(stock.change)}%
                                </div>
                            </div>

                            <div className="flex items-end justify-right">
                                <span className="text-xs text-gray-500 truncate max-w-[120px]">{stock.name}</span>
                                
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/40 flex justify-between items-center text-xs">

                                <div className="flex flex-col items-center">
                                    <p className="text-[12px] text-gray-200 uppercase mb-1">P/E</p>
                                    <span className="font-semibold text-blue-400">{stock.pe}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-[12px] text-gray-200 uppercase mb-1">P/B</p>
                                    <span className="font-semibold text-purple-400">{stock.pb}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-[12px] text-gray-200 uppercase mb-1">NAV</p>
                                    <span className="font-semibold text-emerald-400">{stock.nav}</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 mb-1">DCF</p>
                                    <p className="text-md font-medium text-[#DFBD69]">{stock.dcf}</p>
                                </div>

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
