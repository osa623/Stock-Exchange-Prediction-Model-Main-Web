"use client";

import BlurText from "@/components/Ui/BlurText";

interface PortfolioStock {
  symbol: string;
  name: string;
  industry: string;
  valuation: number;
  growth: number;
  target: number;
}

const currency = "LKR - ";
const percentage = "%";


const samplePortfolio: PortfolioStock[] = [
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", valuation: 20, growth: 5,target: 80 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", valuation: 12, growth: 23,target: 500 },  
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", valuation: 20, growth: 5,target: 80 }, 
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", valuation: 20, growth: 5,target: 80 }, 
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", valuation: 20, growth: 5,target: 80 },  
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", valuation: 20, growth: 5,target: 80 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", valuation: 20, growth: 5,target: 80 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", valuation: 12, growth: 23,target: 500 },  
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", valuation: 20, growth: 5,target: 80 }, 
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", valuation: 20, growth: 5,target: 80 }, 
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", valuation: 20, growth: 5,target: 80 },  
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", valuation: 20, growth: 5,target: 80 },
];

export default function StockList() {
  return (
    <section className="relative w-full h-auto">

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
              <th className="p-3 text-left w-[24%]">Ticker</th>
              <th className="p-3 text-left w-[28%]">Name</th>
              <th className="p-3 text-left w-[15%]">Industry</th>
              <th className="p-3 text-left w-[14%]">Valuation</th>
              <th className="p-3 text-left w-[19%]">Growth</th>
              <th className="p-3 text-left w-[21%]">Target</th>
            </tr>
          </thead>
        </table>

        {/* SCROLLABLE BODY */}
          <div className="h-[550px] overflow-y-auto hide-scrollbar space-y-4 p-4 bg-black">
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

                <div className="w-[30%] text-gray-200">
                  {currency}{stock.name}
                </div>

                <div className="w-[18%] text-gray-200">
                  {stock.industry}
                </div>

                <div className="w-[15%] text-gray-200">
                  {currency}{stock.valuation}
                </div>

                <div className="w-[19%] text-gray-200">
                  {stock.growth}{percentage}
                </div>

                <div className="w-[19%] text-gray-200">
                  {currency}{stock.target}
                </div>
              </div>
            ))}
          </div>


      </div>
      </div>
    </section>
  );
}
