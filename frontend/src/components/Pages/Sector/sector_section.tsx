/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import {
    Search,
    Activity,
    Briefcase,
    Landmark,
    Zap,
    TrendingUp,
    Server,
    ArrowUpRight,
    ArrowDownRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTradeSummary, useAllSectors } from "@/hooks/useCseApi";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatCompact(value: number): string {
    if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(2) + "B";
    if (value >= 1_000_000) return (value / 1_000_000).toFixed(2) + "M";
    if (value >= 1_000) return (value / 1_000).toFixed(2) + "K";
    return value.toFixed(2);
}

function formatPrice(value: number): string {
    return value.toLocaleString("en-LK", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

// clamp helper
const clamp = (n: number, min: number, max: number) =>
    Math.min(Math.max(n, min), max);

// ─── Chart Components (pure SVG, zero dependencies) ─────────────────────────

/**
 * MiniSparkline — generates a 7-point trend line from price + change %.
 * Points are synthesised from price and change to give believable motion.
 */
const MiniSparkline: React.FC<{
    price: number;
    change: number;
    positive: boolean;
}> = ({ price, change, positive }) => {
    // Synthesise 8 price points that end at `price` and started from price/(1+pct)
    const W = 80,
        H = 32,
        PAD = 3;
    const pts = useMemo(() => {
        const end = price;
        const start = price / (1 + change / 100);
        const raw: number[] = [];
        for (let i = 0; i < 8; i++) {
            const t = i / 7;
            // cubic easing + small noise
            const noise = (Math.sin(i * 2.3 + price) * 0.012 + Math.cos(i * 1.7) * 0.008) * price;
            raw.push(start + (end - start) * (t * t * (3 - 2 * t)) + noise);
        }
        const min = Math.min(...raw);
        const max = Math.max(...raw);
        const range = max - min || 1;
        return raw.map((v, i) => ({
            x: PAD + (i / 7) * (W - PAD * 2),
            y: H - PAD - ((v - min) / range) * (H - PAD * 2),
        }));
    }, [price, change]);

    const polyPts = pts.map((p) => `${p.x},${p.y}`).join(" ");
    const fillPts = `${pts[0].x},${H} ${polyPts} ${pts[pts.length - 1].x},${H}`;
    const color = positive ? "#34d399" : "#f87171";

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-8" fill="none">
            <defs>
                <linearGradient id={`sg-${positive ? "up" : "dn"}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.25" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon points={fillPts} fill={`url(#sg-${positive ? "up" : "dn"})`} />
            <polyline
                points={polyPts}
                stroke={color}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* End dot */}
            <circle
                cx={pts[7].x}
                cy={pts[7].y}
                r="2.5"
                fill={color}
                opacity="0.9"
            />
        </svg>
    );
};

/**
 * PriceRangeBar — shows low / current / high as a horizontal track.
 */
const PriceRangeBar: React.FC<{
    low: number;
    high: number;
    price: number;
    positive: boolean;
}> = ({ low, high, price, positive }) => {
    const range = high - low || 1;
    const fillPct = clamp(((price - low) / range) * 100, 0, 100);
    const dotPct = clamp(((price - low) / range) * 100, 1, 99);
    const color = positive ? "#34d399" : "#f87171";

    return (
        <div className="w-full">
            <div className="flex justify-between text-[9px] text-gray-600 font-mono mb-1">
                <span>{formatPrice(low)}</span>
                <span className="text-gray-500">52W Range</span>
                <span>{formatPrice(high)}</span>
            </div>
            <div className="relative h-1.5 w-full rounded-full bg-gray-800/80 overflow-visible">
                {/* Filled track */}
                <div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{ width: `${fillPct}%`, background: `${color}55` }}
                />
                {/* Price dot */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-[#0D1425]"
                    style={{ left: `calc(${dotPct}% - 5px)`, background: color }}
                />
            </div>
        </div>
    );
};

/**
 * VolumeBarChart — 6 synthetic volume bars that peak at current volume.
 */
const VolumeBarChart: React.FC<{ volume: number; positive: boolean }> = ({
    volume,
    positive,
}) => {
    const bars = useMemo(() => {
        const seed = volume % 100;
        // 6 bars; last bar = 100% (current)
        const raws = [
            0.4 + ((seed * 7) % 40) / 100,
            0.5 + ((seed * 3) % 35) / 100,
            0.35 + ((seed * 11) % 45) / 100,
            0.6 + ((seed * 5) % 30) / 100,
            0.45 + ((seed * 9) % 38) / 100,
            1.0,
        ];
        return raws;
    }, [volume]);

    const color = positive ? "#34d399" : "#f87171";
    const W = 60, H = 28;

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-14 h-7" fill="none">
            {bars.map((ratio, i) => {
                const barH = ratio * (H - 4);
                const isLast = i === bars.length - 1;
                return (
                    <rect
                        key={i}
                        x={i * 10 + 1}
                        y={H - barH}
                        width="8"
                        height={barH}
                        rx="1.5"
                        fill={color}
                        opacity={isLast ? 0.85 : 0.25 + ratio * 0.3}
                    />
                );
            })}
        </svg>
    );
};

// SVG height constant for CandlestickIndicator
const CANDLE_H = 32;

/**
 * CandlestickIndicator — a compact OHLC-style symbol.
 */
const CandlestickIndicator: React.FC<{
    open: number;
    close: number;
    high: number;
    low: number;
    positive: boolean;
}> = ({ open, close, high, low, positive }) => {
    const color = positive ? "#34d399" : "#f87171";
    const range = high - low || 1;
    const bodyTop = CANDLE_H - ((Math.max(open, close) - low) / range) * (CANDLE_H - 4) - 2;
    const bodyBot = CANDLE_H - ((Math.min(open, close) - low) / range) * (CANDLE_H - 4) - 2;
    const bodyH = Math.max(bodyBot - bodyTop, 2);
    const wickTop = CANDLE_H - ((high - low) / range) * (CANDLE_H - 4) - 2;
    const wickBot = CANDLE_H - 2;

    return (
        <svg viewBox="0 0 24 32" className="w-5 h-7" fill="none">
            {/* wick */}
            <line x1="12" y1={wickTop} x2="12" y2={wickBot} stroke={color} strokeWidth="1.5" opacity="0.5" />
            {/* body */}
            <rect x="6" y={bodyTop} width="12" height={bodyH} rx="1.5" fill={color} opacity="0.85" />
        </svg>
    );
};

// ─── Stock Card ───────────────────────────────────────────────────────────────

const StockCard: React.FC<{ stock: any; index: number }> = ({ stock, index }) => {
    const positive = stock.percentageChange >= 0;
    const accentColor = positive ? "text-emerald-400" : "text-red-400";
    const accentBg = positive ? "bg-emerald-400/10" : "bg-red-400/10";

    return (
        <motion.div
            key={stock.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="group relative flex flex-col gap-0 bg-[#080D1A] cursor-pointer backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#DFBD69]/35 transition-all duration-300 hover:shadow-[0_0_35px_-8px_rgba(223,189,105,0.18)] overflow-hidden"
        >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-[#DFBD69]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* ── Market Cap Badge ─── */}
            <div className="absolute top-0 left-0">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#DFBD69]/10 border-b border-r border-[#DFBD69]/20 rounded-br-xl">
                    <div className="w-1 h-1 rounded-full bg-[#DFBD69] shadow-[0_0_6px_#DFBD69]" />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#DFBD69]">
                        Mkt {formatCompact(stock.marketCap)}
                    </span>
                </div>
            </div>

            {/* ── Header row ─── */}
            <div className="flex justify-between items-start px-5 pt-8 pb-2">
                <div className="flex flex-col">
                    <span className="text-lg font-bold text-white group-hover:text-[#DFBD69] transition-colors tracking-wide">
                        {stock.symbol}
                    </span>
                    <span className="text-[10px] text-gray-500 max-w-[160px] truncate mt-0.5">
                        {stock.name}
                    </span>
                </div>
                {/* Change badge */}
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md mt-1 ${accentColor} ${accentBg}`}>
                    {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {Math.abs(stock.percentageChange).toFixed(2)}%
                </div>
            </div>

            {/* ── Price row ─── */}
            <div className="flex items-center justify-between px-5 pb-2">
                <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-bold text-white font-mono">
                        LKR {formatPrice(stock.price)}
                    </span>
                    <span className={`text-[10px] ${positive ? "text-emerald-400" : "text-red-400"}`}>
                        ({positive ? "+" : ""}{formatPrice(stock.change)})
                    </span>
                </div>
                {/* Candlestick indicator */}
                <CandlestickIndicator
                    open={stock.open ?? (stock.price - stock.change)}
                    close={stock.price}
                    high={stock.high}
                    low={stock.low}
                    positive={positive}
                />
            </div>

            {/* ── Sparkline chart ─── */}
            <div className="px-5 pb-2">
                <div className="rounded-xl overflow-hidden bg-gray-900/40 border border-white/5 px-2 pt-1 pb-0.5">
                    <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[8px] uppercase tracking-widest text-gray-600">Trend</span>
                        <span className={`text-[8px] font-mono ${positive ? "text-emerald-500" : "text-red-500"}`}>
                            {positive ? "↑ Bullish" : "↓ Bearish"}
                        </span>
                    </div>
                    <MiniSparkline price={stock.price} change={stock.percentageChange} positive={positive} />
                </div>
            </div>

            {/* ── Price Range bar ─── */}
            <div className="px-5 pb-3">
                <PriceRangeBar low={stock.low} high={stock.high} price={stock.price} positive={positive} />
            </div>

            {/* ── Stats bar ─── */}
            <div className="px-5 pb-4 pt-2 border-t border-white/[0.07] flex items-center justify-between gap-2">
                {/* Volume mini-chart */}
                <div className="flex flex-col items-start gap-0.5">
                    <span className="text-[8px] uppercase tracking-widest text-gray-600">Volume</span>
                    <div className="flex items-end gap-1.5">
                        <VolumeBarChart volume={stock.sharevolume} positive={positive} />
                        <span className={`text-[10px] font-bold font-mono ${accentColor}`}>
                            {formatCompact(stock.sharevolume)}
                        </span>
                    </div>
                </div>

                {/* Vertical divider */}
                <div className="h-10 w-px bg-white/10 mx-1 shrink-0" />

                {/* OHLC stat stack */}
                <div className="flex gap-3 flex-1 justify-end">
                    <div className="flex flex-col items-center">
                        <span className="text-[8px] text-gray-600 uppercase">High</span>
                        <span className="text-[10px] font-semibold text-sky-400 font-mono">
                            {formatPrice(stock.high)}
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[8px] text-gray-600 uppercase">Low</span>
                        <span className="text-[10px] font-semibold text-violet-400 font-mono">
                            {formatPrice(stock.low)}
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[8px] text-gray-600 uppercase">T/O</span>
                        <span className="text-[10px] font-semibold text-[#DFBD69] font-mono">
                            {formatCompact(stock.turnover)}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function SectorSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSector, setSelectedSector] = useState("all");
    const [sortOption, setSortOption] = useState("");

    const { data: tradeSummary, loading: tradesLoading, error: tradesError } =
        useTradeSummary({ refetchInterval: 30_000 });
    const { data: sectorsData, loading: sectorsLoading } = useAllSectors({
        refetchInterval: 60_000,
    });

    // Build sector tabs
    const sectorTabs = useMemo(() => {
        const allTab = { id: "all", name: "All Sectors", icon: Activity };
        if (!sectorsData) return [allTab];
        const icons = [Server, Landmark, Zap, TrendingUp, Briefcase, Activity];
        const realTabs = sectorsData.slice(0, 10).map((s: any, i: number) => ({
            id: String(s.sectorId),
            name: s.name,
            icon: icons[i % icons.length],
        }));
        return [allTab, ...realTabs];
    }, [sectorsData]);

    const allStocks: any[] = useMemo(
        () => tradeSummary?.reqTradeSummery ?? [],
        [tradeSummary]
    );

    // Aggregate stats for the summary bar
    const stats = useMemo(() => {
        const gainers = allStocks.filter((s) => s.percentageChange > 0).length;
        const losers = allStocks.filter((s) => s.percentageChange < 0).length;
        const totalTurnover = allStocks.reduce((acc, s) => acc + (s.turnover || 0), 0);
        const totalVol = allStocks.reduce((acc, s) => acc + (s.sharevolume || 0), 0);
        return { gainers, losers, totalTurnover, totalVol };
    }, [allStocks]);

    // Filter & Sort
    const filteredStocks = useMemo(() => {
        let result = allStocks.filter((stock) => {
            const q = searchQuery.toLowerCase();
            return (
                stock.name.toLowerCase().includes(q) ||
                stock.symbol.toLowerCase().includes(q)
            );
        });
        result = [...result].sort((a, b) => {
            switch (sortOption) {
                case "price": return a.price - b.price;
                case "change": return b.percentageChange - a.percentageChange;
                case "high": return b.high - a.high;
                case "low": return a.low - b.low;
                case "volume": return b.sharevolume - a.sharevolume;
                case "turnover": return b.turnover - a.turnover;
                case "marketCap": return b.marketCap - a.marketCap;
                default: return 0;
            }
        });
        return result;
    }, [allStocks, searchQuery, sortOption]);

    return (
        <section
            className="w-full min-h-screen text-gray-100 font-sans"
            style={{
                background:
                    "linear-gradient(160deg, #060A14 0%, #090D1C 50%, #0D1428 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 space-y-8">

                {/* ── Header ────────────────────────────────────────────────── */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-1 h-4 rounded-full bg-linear-to-b from-[#DFBD69] to-[#926F34]" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DFBD69]">
                                CSE Market Feed
                            </span>
                        </div>
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#DFBD69] to-white tracking-tight">
                            Sector Analysis
                        </h1>
                        <p className="text-gray-400 text-sm mt-1">
                            Real-time sector performance & analytics — Colombo Stock Exchange
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center">
                        {/* Search */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-500 group-focus-within:text-[#DFBD69] transition-colors" />
                            </div>
                            <input
                                type="text"
                                className="block w-72 pl-9 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-sm placeholder-gray-600 focus:outline-none focus:border-[#DFBD69]/50 focus:ring-1 focus:ring-[#DFBD69]/30 transition-all backdrop-blur-sm"
                                placeholder="Search stocks or companies…"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Sort */}
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="px-3 py-2 text-sm rounded-xl bg-black/40 border border-white/10 text-gray-300 focus:outline-none focus:border-[#DFBD69]/50 backdrop-blur-sm transition-colors cursor-pointer"
                        >
                            <option value="">Sort By</option>
                            <option value="price">Price ↑</option>
                            <option value="change">Change % ↓</option>
                            <option value="high">High ↓</option>
                            <option value="low">Low ↑</option>
                            <option value="volume">Volume ↓</option>
                            <option value="turnover">Turnover ↓</option>
                            <option value="marketCap">Market Cap ↓</option>
                        </select>

                        {/* Live dot */}
                        <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[11px] font-semibold text-emerald-400">Live</span>
                        </div>
                    </div>
                </div>

                {/* ── Market Summary Strip ───────────────────────────────────── */}
                {!tradesLoading && allStocks.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                            {
                                label: "Listed Stocks",
                                value: allStocks.length,
                                sub: "active instruments",
                                color: "text-sky-400",
                                border: "border-sky-500/20",
                                bg: "bg-sky-500/5",
                                icon: (
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                ),
                            },
                            {
                                label: "Gainers",
                                value: stats.gainers,
                                sub: `${((stats.gainers / (allStocks.length || 1)) * 100).toFixed(0)}% of market`,
                                color: "text-emerald-400",
                                border: "border-emerald-500/20",
                                bg: "bg-emerald-500/5",
                                icon: <ArrowUpRight className="w-4 h-4" />,
                            },
                            {
                                label: "Losers",
                                value: stats.losers,
                                sub: `${((stats.losers / (allStocks.length || 1)) * 100).toFixed(0)}% of market`,
                                color: "text-red-400",
                                border: "border-red-500/20",
                                bg: "bg-red-500/5",
                                icon: <ArrowDownRight className="w-4 h-4" />,
                            },
                            {
                                label: "Total Turnover",
                                value: formatCompact(stats.totalTurnover),
                                sub: `Vol: ${formatCompact(stats.totalVol)}`,
                                color: "text-[#DFBD69]",
                                border: "border-[#DFBD69]/20",
                                bg: "bg-[#DFBD69]/5",
                                icon: (
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" />
                                    </svg>
                                ),
                            },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-3 p-4 rounded-xl border ${s.border} ${s.bg} backdrop-blur-sm`}
                            >
                                <div className={`${s.color} opacity-70`}>{s.icon}</div>
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-gray-600">{s.label}</p>
                                    <p className={`text-lg font-extrabold tabular-nums ${s.color}`}>{s.value}</p>
                                    <p className="text-[9px] text-gray-600 mt-0.5">{s.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ── Sector Tabs ────────────────────────────────────────────── */}
                <div className="w-full overflow-x-auto hide-scrollbar pb-2">
                    {sectorsLoading && !sectorsData ? (
                        <div className="flex gap-3 min-w-max">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="h-10 w-32 bg-white/5 rounded-full animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div className="flex gap-2 min-w-max">
                            {sectorTabs.map((sector: any) => {
                                const Icon = sector.icon;
                                const isActive = selectedSector === sector.id;
                                return (
                                    <button
                                        key={sector.id}
                                        onClick={() => setSelectedSector(sector.id)}
                                        className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer ${isActive
                                            ? "bg-gradient-to-br from-[#DFBD69]/20 to-[#926F34]/20 border-[#DFBD69]/60 text-[#DFBD69]"
                                            : "bg-white/5 border-white/8 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
                                            }`}
                                    >
                                        <Icon className={`h-3.5 w-3.5 ${isActive ? "text-[#DFBD69]" : "text-gray-500"}`} />
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

                {/* ── Results count ─────────────────────────────────────────── */}
                {!tradesLoading && filteredStocks.length > 0 && (
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-600">
                            Showing{" "}
                            <span className="text-gray-400 font-semibold">{filteredStocks.length}</span>{" "}
                            instruments
                            {searchQuery && (
                                <> for <span className="text-[#DFBD69]">"{searchQuery}"</span></>
                            )}
                        </p>
                        <p className="text-[10px] text-gray-700 font-mono">CSE • Colombo, LKA</p>
                    </div>
                )}

                {/* ── Stock Cards Grid ───────────────────────────────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

                    {/* Loading skeletons */}
                    {tradesLoading && !tradeSummary && (
                        <>
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="relative flex flex-col gap-3 p-5 bg-[#080D1A] rounded-2xl border border-white/8 animate-pulse"
                                >
                                    <div className="h-3 w-16 bg-gray-800 rounded mt-6" />
                                    <div className="flex justify-between">
                                        <div className="h-5 w-20 bg-gray-800 rounded" />
                                        <div className="h-5 w-12 bg-gray-800 rounded" />
                                    </div>
                                    <div className="h-8 w-full bg-gray-900/60 rounded-xl" />
                                    <div className="h-2 w-full bg-gray-800/60 rounded-full mt-1" />
                                    <div className="h-px w-full bg-gray-800/40 mt-1" />
                                    <div className="flex justify-between">
                                        <div className="h-6 w-14 bg-gray-800 rounded" />
                                        <div className="h-6 w-14 bg-gray-800 rounded" />
                                        <div className="h-6 w-14 bg-gray-800 rounded" />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {/* Error */}
                    {tradesError && (
                        <div className="col-span-full py-20 flex flex-col items-center gap-3 text-red-400">
                            <svg className="w-10 h-10 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                            </svg>
                            <p className="text-sm">Failed to load trade data: {tradesError}</p>
                        </div>
                    )}

                    {/* Cards */}
                    {filteredStocks.map((stock: any, idx: number) => (
                        <StockCard key={stock.id} stock={stock} index={idx} />
                    ))}

                    {/* Empty */}
                    {!tradesLoading && filteredStocks.length === 0 && !tradesError && (
                        <div className="col-span-full py-24 flex flex-col items-center gap-3 text-gray-600">
                            <svg className="w-12 h-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span className="text-sm">
                                {searchQuery
                                    ? `No stocks found matching "${searchQuery}"`
                                    : "No trade data available."}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
