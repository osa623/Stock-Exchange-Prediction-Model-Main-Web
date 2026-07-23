"use client";

import React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  change?: number; // percentage
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  accentColor?: string;
}

export default function MetricCard({
  label,
  value,
  subValue,
  change,
  trend,
  icon,
  accentColor = "#38BDF8",
}: MetricCardProps) {
  const isPositive = trend === "up" || (change && change > 0);
  const isNegative = trend === "down" || (change && change < 0);

  return (
    <div
      className="group relative rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: "linear-gradient(135deg, rgba(13,19,26,0.95) 0%, rgba(17,24,39,0.95) 100%)",
        border: "1px solid rgba(56,189,248,0.12)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-encode">
          {label}
        </span>
        {icon && (
          <div
            className="p-2 rounded-xl"
            style={{
              backgroundColor: `${accentColor}15`,
              color: accentColor,
            }}
          >
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-inter">
          {value}
        </div>

        {(change !== undefined || trend) && (
          <div
            className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
              isPositive
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : isNegative
                ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                : "bg-slate-500/10 text-slate-400 border border-slate-500/20"
            }`}
          >
            {isPositive ? (
              <TrendingUp size={12} />
            ) : isNegative ? (
              <TrendingDown size={12} />
            ) : (
              <Minus size={12} />
            )}
            <span>{change !== undefined ? `${change > 0 ? "+" : ""}${change}%` : ""}</span>
          </div>
        )}
      </div>

      {subValue && (
        <p className="text-xs text-slate-400 mt-2 font-inter">{subValue}</p>
      )}
    </div>
  );
}
