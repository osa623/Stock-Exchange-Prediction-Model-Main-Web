

"use client";

interface Stock {
  symbol: string;
  price: number;
  peRatio: number;
  dcf: number;
  nav: number;
}


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
    <section className="mb-10 bg-black p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-1 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] ">All Stocks</h2>
      <p className="text-gray-300 mb-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] ">
        Choose a stock to explore its calculations, ratios, valuations, and key financial details.
      </p>

      {/* HEADER (NON-SCROLLING) */}
      <div className="border-2 border-white rounded-[1.5vw] overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.5)]">
        <table className="w-full text-sm border border-gray-600 border-b-0 table-fixed ">
          <thead className="bg-black ">
            <tr className="text-gray-500 ">
              <th className="p-3 text-left w-[30%] ">Stock</th>
              <th className="p-3 text-left w-[17.5%]">Price</th>
              <th className="p-3 text-left w-[17.5%]">P/E</th>
              <th className="p-3 text-left w-[17.5%]">DCF</th>
              <th className="p-3 text-left w-[19%]">NAV</th>
            </tr>
          </thead>

        </table>

        {/* SCROLLABLE BODY */}
        <div className="h-[400px] overflow-y-auto hide-scrollbar">
          <table className="w-full text-sm table-fixed">
            <tbody>
              {sampleStocks.map((stock) => (
                <tr
                  key={stock.symbol}
                  className="hover:bg-gray-100/10  transition "
                >
                  <td className="p-3 w-[30%] border-b border-gray-800 text-gray-200">
                    {stock.symbol}
                  </td>
                  <td className="p-3 w-[17.5%] border-b border-gray-800 text-gray-200">
                    {currency} {stock.price}
                  </td>
                  <td className="p-3 w-[17.5%] border-b border-gray-800 text-gray-200">
                    {currency} {stock.peRatio}
                  </td>
                  <td className="p-3 w-[17.5%] border-b border-gray-800 text-gray-200">
                    {currency} {stock.dcf}
                  </td>
                  <td className="p-3 w-[19%] border-b border-gray-800 text-gray-200">
                    {currency} {stock.nav}
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
