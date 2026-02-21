"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, SortAsc, ArrowUpRight, ArrowDownRight, TrendingUp, Zap, Server, Activity, Briefcase, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { useTradeSummary, useAllSectors } from "@/hooks/useCseApi";

// --- Helpers ---

function formatCompact(value: number): string {
    if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(2) + "B";
    if (value >= 1_000_000) return (value / 1_000_000).toFixed(2) + "M";
    if (value >= 1_000) return (value / 1_000).toFixed(2) + "K";
    return value.toFixed(2);
}

function formatPrice(value: number): string {
    return value.toLocaleString("en-LK", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function SectorSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSector, setSelectedSector] = useState("all");
    const [sortOption, setSortOption] = useState("");

    // ─── Real CSE API data (auto-refresh every 30s) ─────────────────
    const { data: tradeSummary, loading: tradesLoading, error: tradesError } = useTradeSummary({ refetchInterval: 30_000 });
    const { data: sectorsData, loading: sectorsLoading } = useAllSectors({ refetchInterval: 60_000 });

    // Build sector tabs from real API data
    const sectorTabs = useMemo(() => {
        const allTab = { id: "all", name: "All Sectors", icon: Activity };
        if (!sectorsData) return [allTab];
        // Use first 10 real sectors and assign rotating icons
        const icons = [Server, Landmark, Zap, TrendingUp, Briefcase, Activity];
        const realTabs = sectorsData.slice(0, 10).map((s, i) => ({
            id: String(s.sectorId),
            name: s.name,
            icon: icons[i % icons.length],
        }));
        return [allTab, ...realTabs];
    }, [sectorsData]);

    // Get all stocks from trade summary
    const allStocks = useMemo(() => tradeSummary?.reqTradeSummery ?? [], [tradeSummary]);

    // Filter & Sort Logic
    const filteredStocks = useMemo(() => {
        let result = allStocks.filter((stock) => {
            const q = searchQuery.toLowerCase();
            return (
                stock.name.toLowerCase().includes(q) ||
                stock.symbol.toLowerCase().includes(q)
            );
        });

        // Sort
        result = [...result].sort((a, b) => {
            switch (sortOption) {
                case "price":
                    return a.price - b.price;
                case "change":
                    return b.percentageChange - a.percentageChange;
                case "high":
                    return b.high - a.high;
                case "low":
                    return a.low - b.low;
                case "volume":
                    return b.sharevolume - a.sharevolume;
                case "turnover":
                    return b.turnover - a.turnover;
                case "marketCap":
                    return b.marketCap - a.marketCap;
                default:
                    return 0;
            }
        });

        return result;
    }, [allStocks, searchQuery, sortOption]);




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
                            <option value="change">Change % - (High → Low)</option>
                            <option value="high">High - (High → Low)</option>
                            <option value="low">Low - (Low → High)</option>
                            <option value="volume">Volume - (High → Low)</option>
                            <option value="turnover">Turnover - (High → Low)</option>
                            <option value="marketCap">Market Cap - (High → Low)</option>
                        </select>
                        </div>




                    </div>
                </div>


                {/* --- Middle Section: Sector Tabs --- */}
                <div className="w-full overflow-x-auto hide-scrollbar pb-4">
                    {sectorsLoading && !sectorsData ? (
                        <div className="flex gap-3 min-w-max">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="h-10 w-32 bg-white/5 rounded-full animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div className="flex gap-3 min-w-max">
                            {sectorTabs.map((sector) => {
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
                    )}
                </div>


                {/* --- Main Content: Stock Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">

                    {/* Loading skeleton */}
                    {tradesLoading && !tradeSummary && (
                        <>
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div key={i} className="relative p-6 bg-black/40 rounded-2xl border border-white/10 animate-pulse">
                                    <div className="h-4 w-16 bg-gray-700 rounded mb-6" />
                                    <div className="flex justify-between mb-4">
                                        <div className="h-6 w-20 bg-gray-700 rounded" />
                                        <div className="h-5 w-14 bg-gray-700 rounded" />
                                    </div>
                                    <div className="h-3 w-32 bg-gray-800 rounded mb-4" />
                                    <div className="border-t border-white/10 pt-4 flex justify-between">
                                        <div className="h-8 w-14 bg-gray-800 rounded" />
                                        <div className="h-8 w-14 bg-gray-800 rounded" />
                                        <div className="h-8 w-14 bg-gray-800 rounded" />
                                        <div className="h-8 w-14 bg-gray-800 rounded" />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {/* Error state */}
                    {tradesError && (
                        <div className="col-span-full py-20 text-center text-red-400">
                            <p className="text-lg">Failed to load stock data: {tradesError}</p>
                        </div>
                    )}

                    {/* Live data cards */}
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
                                        Mkt Cap: {formatCompact(stock.marketCap)}
                                    </span>
                                </div>
                            </div>
                            {/* Card Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-[#DFBD69]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex justify-between items-start mb-4">
                                <div className="flex flex-col mt-4">
                                    <span className="text-xl font-bold text-white group-hover:text-[#DFBD69] transition-colors">{stock.symbol}</span>
                                    
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${stock.percentageChange >= 0 ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"}`}>
                                    {stock.percentageChange >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                                    {Math.abs(stock.percentageChange).toFixed(2)}%
                                </div>
                            </div>

                            <div className="flex items-end justify-right">
                                <span className="text-xs text-gray-500 truncate max-w-[180px]">{stock.name}</span>
                                
                            </div>

                            <div className="flex items-baseline gap-1 mt-1">
                                <span className="text-lg font-bold text-white font-mono">LKR {formatPrice(stock.price)}</span>
                                <span className={`text-[10px] ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    ({stock.change >= 0 ? '+' : ''}{formatPrice(stock.change)})
                                </span>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/40 flex justify-between items-center text-xs">

                                <div className="flex flex-col items-center">
                                    <p className="text-[12px] text-gray-200 uppercase mb-1">High</p>
                                    <span className="font-semibold text-blue-400">{formatPrice(stock.high)}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-[12px] text-gray-200 uppercase mb-1">Low</p>
                                    <span className="font-semibold text-purple-400">{formatPrice(stock.low)}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-[12px] text-gray-200 uppercase mb-1">Volume</p>
                                    <span className="font-semibold text-emerald-400">{formatCompact(stock.sharevolume)}</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 mb-1">Turnover</p>
                                    <p className="text-md font-medium text-[#DFBD69]">{formatCompact(stock.turnover)}</p>
                                </div>

                            </div>

                        </motion.div>
                    ))}

                    {!tradesLoading && filteredStocks.length === 0 && !tradesError && (
                        <div className="col-span-full py-20 text-center text-gray-500">
                            <p className="text-lg">{searchQuery ? `No stocks found matching "${searchQuery}"` : "No trade data available."}</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
