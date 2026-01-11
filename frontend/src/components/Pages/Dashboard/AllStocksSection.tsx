

"use client";

import BlurText from "@/components/Ui/BlurText";

interface Stock {
  symbol: string;
  price: number;
  peRatio: number;
  dcf: number;
  nav: number;
}




const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



const sampleStocks: Stock[] = [
  { symbol: "JKH.N0000", price: 150, peRatio: 28.5, dcf: 165, nav: 154 },
  { symbol: "CALT.N0000", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "JINS.N0000", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "JKP.N0000", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "HAYL.N0000", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "HAYC.N0000", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "HNB.N0000", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "SAMP.N0000", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "CCS.N0000", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "CDB.N0000", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "COMB.N0000", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
];

const currency = "LKR - ";


export default function AllStocksSection() {
  return (
    <section className="mb-10 p-10 rounded-lg">
      <div className="max-w-7xl mx-auto">
      {/* ANIMATED HEADING */}
      <BlurText
        text="Stocks"
        delay={80}
        animateBy="words"
        direction="top"
        className="text-[50px] font-semibold mb-2 text-white text-left w-[30%] "
      />

      {/* ANIMATED DESCRIPTION */}
      <BlurText
        text="Choose a stock to explore its calculations, ratios, valuations, and key financial details."
        delay={20}
        animateBy="words"
        direction="bottom"
        className="text-gray-300 mb-12 "
      />


      {/* HEADER (NON-SCROLLING) */}
      <div className="border border-white/30 rounded-[1.8rem]
        shadow-[0_0_35px_rgba(255,255,255,0.25)]
        bg-black/80 p-8
        max-w-7xl mx-auto">
        <table className="w-full text-sm border border-black border-b-0 table-fixed ">
          <thead className="bg-black border border-black">
            <tr className="text-white ">
              <th className="p-3 text-left w-[30%] ">Stock</th>
              <th className="p-3 text-left w-[17.5%]">Price</th>
              <th className="p-3 text-left w-[17.5%]">P/E</th>
              <th className="p-3 text-left w-[17.5%]">DCF</th>
              <th className="p-3 text-left w-[22%]">NAV</th>
            </tr>
          </thead>

        </table>

        {/* SCROLLABLE BODY */}
          <div className="h-[400px] overflow-y-auto hide-scrollbar space-y-4 mt-4">
            {sampleStocks.map((stock) => (
              <div
                key={stock.symbol}
                className="
                  flex items-center
                  bg-gray-900/60 rounded-lg px-5 py-3
                  hover:bg-gray-800/70 transition
                "
              >
                <div className="w-[30%] text-gray-200">
                  {stock.symbol}
                </div>

                <div className="w-[17.5%] text-gray-200">
                  {currency}{stock.price}
                </div>

                <div className="w-[17.5%] text-gray-200">
                  {stock.peRatio}
                </div>

                <div className="w-[17.5%] text-gray-200">
                  {stock.dcf}
                </div>

                <div className="w-[19%] text-gray-200">
                  {stock.nav}
                </div>
              </div>
            ))}
          </div>

      </div>
      </div>
    </section>
  );
}
