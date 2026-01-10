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

      {/* HEADING */}
      <BlurText
        text="Portfolio"
        delay={80}
        animateBy="words"
        direction="top"
        className="text-[50px] font-semibold mb-2 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
      />

      {/* DESCRIPTION */}
      <BlurText
        text="Track your invested stocks, holdings, and profits or losses in real time."
        delay={20}
        animateBy="words"
        direction="bottom"
        className="text-gray-300 mb-12 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
      />

      {/* TABLE CONTAINER */}
      <div className="border-2 border-white rounded-[1.5vw] overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.5)]">

        {/* HEADER */}
        <table className="w-full text-sm border-b border-gray-100/40 table-fixed">
          <thead className="bg-black">
            <tr className="text-gray-100/40">
              <th className="p-3 text-left w-[22%]">Stock</th>
              <th className="p-3 text-left w-[13%]">Price</th>
              <th className="p-3 text-left w-[13%]">Shares</th>
              <th className="p-3 text-left w-[13%]">Quantity</th>
              <th className="p-3 text-left w-[19%]">Value</th>
              <th className="p-3 text-left w-[20%]">P/L</th>
            </tr>
          </thead>
        </table>

        {/* SCROLLABLE BODY */}
        <div className="h-[300px] overflow-y-auto hide-scrollbar">
          <table className="w-full text-sm table-fixed">
            <tbody>
              {samplePortfolio.map((stock) => (
                <tr
                  key={stock.symbol}
                  className="hover:bg-gray-100/10 transition"
                >
                  <td className="p-3 w-[22%] border-b border-gray-100/20 text-gray-200">
                    {stock.symbol}
                  </td>

                  <td className="p-3 w-[13%] border-b border-gray-100/20 text-gray-200">
                    {currency}{stock.price}
                  </td>

                  <td className="p-3 w-[13%] border-b border-gray-100/20 text-gray-200">
                    {stock.shares}
                  </td>

                  <td className="p-3 w-[13%] border-b border-gray-100/20 text-gray-200">
                    {stock.quantity}
                  </td>

                  <td className="p-3 w-[19%] border-b border-gray-100/20 text-gray-200">
                    {currency}{stock.value}
                  </td>

                  <td
                    className={`p-3 w-[20%] border-b border-gray-100/20 font-medium ${
                      stock.pnl >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {stock.pnl >= 0 ? "+" : "-"}
                    {currency}{Math.abs(stock.pnl)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
