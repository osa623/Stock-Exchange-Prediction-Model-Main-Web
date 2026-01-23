"use client";

import React from "react";
import { User, Mail, Phone, Calendar, TrendingUp, TrendingDown } from "lucide-react";

// Mock data (replace with real portfolio data later)
const user = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+94 77 123 4567",
  dob: "2005-07-08",
  avatar: "https://i.pravatar.cc/150?img=32",
  bio: "Trader & investor. Passionate about stocks, financial analytics, and building apps.",
};

const portfolioStats = {
  tradesCompleted: 124,
  portfolioValue: 15450,
  winRate: 68,
  gainers: 8,
  losers: 3,
};

export default function Profile() {
  return (
    <div className="space-y-10">

      {/* --- Header --- */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-[#DFBD69]/50"
        />
        <div>
          <h1 className="text-3xl font-bold text-[#DFBD69]">{user.name}</h1>
          <p className="text-gray-300 mt-1">{user.bio}</p>
        </div>
      </div>

      {/* --- Contact Info --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-black/20 p-6 rounded-2xl border border-white/20">
        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-[#DFBD69]" />
          <span className="text-gray-200 font-medium">Username: {user.name.replace(" ", "").toLowerCase()}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-[#DFBD69]" />
          <span className="text-gray-200 font-medium">{user.email}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-[#DFBD69]" />
          <span className="text-gray-200 font-medium">{user.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-[#DFBD69]" />
          <span className="text-gray-200 font-medium">DOB: {user.dob}</span>
        </div>
      </div>

      {/* --- Portfolio Stats --- */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="bg-black/20 p-4 rounded-2xl border border-white/20 text-center">
          <p className="text-gray-400 text-sm">Trades Completed</p>
          <p className="text-white text-2xl font-bold">{portfolioStats.tradesCompleted}</p>
        </div>
        <div className="bg-black/20 p-4 rounded-2xl border border-white/20 text-center">
          <p className="text-gray-400 text-sm">Portfolio Value</p>
          <p className="text-white text-2xl font-bold">${portfolioStats.portfolioValue.toLocaleString()}</p>
        </div>
        <div className="bg-black/20 p-4 rounded-2xl border border-white/20 text-center">
          <p className="text-gray-400 text-sm">Win Rate</p>
          <p className="text-white text-2xl font-bold">{portfolioStats.winRate}%</p>
        </div>
        <div className="bg-black/20 p-4 rounded-2xl border border-white/20 text-center">
          <p className="text-gray-400 text-sm">Gainers / Losers</p>
          <p className="text-white text-2xl font-bold">
            <span className="text-green-400">{portfolioStats.gainers}</span> /{" "}
            <span className="text-red-400">{portfolioStats.losers}</span>
          </p>
        </div>
      </div>

    </div>
  );
}
