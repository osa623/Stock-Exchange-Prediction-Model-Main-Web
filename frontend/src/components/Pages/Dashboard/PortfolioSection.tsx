"use client";

import BlurText from "@/components/Ui/BlurText";

interface PortfolioStock {
  symbol: string;
  price: number;
  shares: number;
  quantity: number;
  value: number;
  pnl: number;
}

const currency = "LKR - ";

const samplePortfolio: PortfolioStock[] = [
  { symbol: "JKH.N0000", price: 150, shares: 100, quantity: 100, value: 15000, pnl: 1200 },
  { symbol: "HNB.N0000", price: 302, shares: 50, quantity: 50, value: 15100, pnl: -800 },
  { symbol: "SAMP.N0000", price: 420, shares: 40, quantity: 40, value: 16800, pnl: 2300 },
  { symbol: "COMB.N0000", price: 98, shares: 200, quantity: 200, value: 19600, pnl: -450 },
  { symbol: "CDB.N0000", price: 115, shares: 120, quantity: 120, value: 13800, pnl: 980 },
  { symbol: "HAYL.N0000", price: 760, shares: 10, quantity: 10, value: 7600, pnl: 310 },
  { symbol: "CALT.N0000", price: 150, shares: 100, quantity: 100, value: 15000, pnl: 1200 },
  { symbol: "VONE.N0000", price: 302, shares: 50, quantity: 50, value: 15100, pnl: -800 },
  { symbol: "HAYC.N0000", price: 420, shares: 40, quantity: 40, value: 16800, pnl: 2300 },
  { symbol: "CNDB.N0000", price: 98, shares: 200, quantity: 200, value: 19600, pnl: -450 },
  { symbol: "NTB.N0000", price: 115, shares: 120, quantity: 120, value: 13800, pnl: 980 },
  { symbol: "WTH.N0000", price: 760, shares: 10, quantity: 10, value: 7600, pnl: 310 },
];

export default function PortfolioSection() {
  return (
    <section className="mb-10 p-10 rounded-lg">
    <div className="max-w-7xl mx-auto">
      {/* HEADING */}
      <BlurText
        text="Portfolio"
        delay={80}
        animateBy="words"
        direction="top"
        className="text-[50px] font-semibold mb-2 text-white "
      />

      {/* DESCRIPTION */}
      <BlurText
        text="Track your invested stocks, holdings, and profits or losses in real time."
        delay={20}
        animateBy="words"
        direction="bottom"
        className="text-gray-300 mb-12 "
      />

      {/* TABLE CONTAINER */}
      <div className="border border-white/30 rounded-[1.8rem]
        shadow-[0_0_35px_rgba(255,255,255,0.25)]
        bg-black/80 p-8
        max-w-7xl mx-auto">

        {/* HEADER */}
        <table className="w-full text-sm border-b border-gray-100/40 table-fixed">
          <thead className="bg-black">
            <tr className="text-white">
              <th className="p-3 text-left w-[23%]">Stock</th>
              <th className="p-3 text-left w-[18%]">Price</th>
              <th className="p-3 text-left w-[12%]">Shares</th>
              <th className="p-3 text-left w-[14%]">Quantity</th>
              <th className="p-3 text-left w-[19%]">Value</th>
              <th className="p-3 text-left w-[21%]">PnL</th>
            </tr>
          </thead>
        </table>

        {/* SCROLLABLE BODY */}
          <div className="h-[300px] overflow-y-auto hide-scrollbar space-y-4 p-4 bg-black">
            {samplePortfolio.map((stock) => (
              <div
                key={stock.symbol}
                className="
                  flex items-center
                  bg-gray-900/60 rounded-lg px-5 py-3
                  hover:bg-gray-800/70 transition
                "
              >
                <div className="w-[22%] text-gray-200">
                  {stock.symbol}
                </div>

                <div className="w-[20%] text-gray-200">
                  {currency}{stock.price}
                </div>

                <div className="w-[13%] text-gray-200">
                  {stock.shares}
                </div>

                <div className="w-[13%] text-gray-200">
                  {stock.quantity}
                </div>

                <div className="w-[19%] text-gray-200">
                  {currency}{stock.value}
                </div>

                <div
                  className={`w-[20%] font-medium ${
                    stock.pnl >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stock.pnl >= 0 ? "+" : "-"}
                  {currency}{Math.abs(stock.pnl)}
                </div>
              </div>
            ))}
          </div>


      </div>
      </div>
    </section>
  );
}
