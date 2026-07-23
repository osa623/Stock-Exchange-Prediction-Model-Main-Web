"use client";

import React from "react";
import MetricCard from "@/components/Ui/Cards/MetricCard";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import EChartsLineChart from "@/components/Ui/Charts/EChartsLineChart";
import { getCompanyBySymbol } from "@/lib/mock-data/companies";
import { DollarSign, TrendingUp, PieChart, ShieldCheck, Activity, Award } from "lucide-react";

interface CompanyOverviewProps {
  symbol: string;
}

export default function CompanyOverview({ symbol }: CompanyOverviewProps) {
  const company = getCompanyBySymbol(symbol) || {
    symbol,
    name: symbol.split('.')[0] + " PLC",
    sector: "Capital Goods",
    description: "Listed Company on the Colombo Stock Exchange",
    revenue: 284500,
    netProfit: 19800,
    roe: 14.2,
    roa: 7.8,
    operatingMargin: 11.5,
    debtToEquity: 0.45,
    currentRatio: 1.6,
    cashFlow: 32100,
    dividendYield: 4.2,
    financialHealthScore: 88,
    updatedDate: "2026-07-15",
  };

  const revenueHistory = [
    { year: "2021", value: company.revenue * 0.65 },
    { year: "2022", value: company.revenue * 0.78 },
    { year: "2023", value: company.revenue * 0.88 },
    { year: "2024", value: company.revenue * 0.94 },
    { year: "2025", value: company.revenue },
  ];

  const profitHistory = [
    { year: "2021", value: company.netProfit * 0.6 },
    { year: "2022", value: company.netProfit * 0.72 },
    { year: "2023", value: company.netProfit * 0.85 },
    { year: "2024", value: company.netProfit * 0.92 },
    { year: "2025", value: company.netProfit },
  ];

  return (
    <div className="space-y-8">
      {/* Key Financial Metrics Scorecard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Total Revenue (FY25)"
          value={`LKR ${(company.revenue / 1000).toFixed(1)}B`}
          change={12.4}
          trend="up"
          subValue="YoY Growth: +12.4%"
          icon={<DollarSign size={18} />}
          accentColor="#38BDF8"
        />
        <MetricCard
          label="Net Profit After Tax"
          value={`LKR ${(company.netProfit / 1000).toFixed(1)}B`}
          change={15.2}
          trend="up"
          subValue="Net Profit Margin: 7.0%"
          icon={<TrendingUp size={18} />}
          accentColor="#4ADE80"
        />
        <MetricCard
          label="Return on Equity (ROE)"
          value={`${company.roe}%`}
          change={2.1}
          trend="up"
          subValue="Sector Avg: 15.1%"
          icon={<Award size={18} />}
          accentColor="#FACC15"
        />
        <MetricCard
          label="Operating Cash Flow"
          value={`LKR ${(company.cashFlow / 1000).toFixed(1)}B`}
          change={8.5}
          trend="up"
          subValue="Cash Conversion: Strong"
          icon={<Activity size={18} />}
          accentColor="#E9D37E"
        />
      </div>

      {/* Financial Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WidgetContainer
          title="Revenue Growth Trajectory (LKR Millions)"
          subtitle="5-year historical revenue trend analysis"
          icon={<DollarSign size={18} />}
        >
          <EChartsLineChart data={revenueHistory} color="#38BDF8" height={280} yAxisSuffix="M" />
        </WidgetContainer>

        <WidgetContainer
          title="Net Profit After Tax (LKR Millions)"
          subtitle="5-year net profit performance trajectory"
          icon={<TrendingUp size={18} />}
        >
          <EChartsLineChart data={profitHistory} color="#4ADE80" height={280} yAxisSuffix="M" />
        </WidgetContainer>
      </div>

      {/* Financial Health & Liquidity Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 space-y-3">
          <div className="flex items-center gap-2 text-[#38BDF8]">
            <ShieldCheck size={18} />
            <h4 className="font-bold text-sm text-white font-inter">Solvency & Debt Profile</h4>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-[#306B99]/20">
              <span className="text-slate-400 font-encode">Debt to Equity Ratio</span>
              <span className="font-bold text-white font-inter">{company.debtToEquity}x</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#306B99]/20">
              <span className="text-slate-400 font-encode">Interest Coverage</span>
              <span className="font-bold text-emerald-400 font-inter">6.8x</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400 font-encode">Financial Leverage</span>
              <span className="font-bold text-slate-200 font-inter">Conservative</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 space-y-3">
          <div className="flex items-center gap-2 text-[#FACC15]">
            <PieChart size={18} />
            <h4 className="font-bold text-sm text-white font-inter">Liquidity & Working Capital</h4>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-[#306B99]/20">
              <span className="text-slate-400 font-encode">Current Ratio</span>
              <span className="font-bold text-white font-inter">{company.currentRatio}x</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#306B99]/20">
              <span className="text-slate-400 font-encode">Quick Ratio</span>
              <span className="font-bold text-white font-inter">1.1x</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400 font-encode">Cash Ratio</span>
              <span className="font-bold text-emerald-400 font-inter">0.65x</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0D131A] border border-[#306B99]/30 space-y-3">
          <div className="flex items-center gap-2 text-[#E9D37E]">
            <Award size={18} />
            <h4 className="font-bold text-sm text-white font-inter">Profitability Diagnostics</h4>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-[#306B99]/20">
              <span className="text-slate-400 font-encode">Return on Assets (ROA)</span>
              <span className="font-bold text-emerald-400 font-inter">{company.roa}%</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#306B99]/20">
              <span className="text-slate-400 font-encode">Operating Margin</span>
              <span className="font-bold text-white font-inter">{company.operatingMargin}%</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400 font-encode">Dividend Yield</span>
              <span className="font-bold text-[#E9D37E] font-inter">{company.dividendYield}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
