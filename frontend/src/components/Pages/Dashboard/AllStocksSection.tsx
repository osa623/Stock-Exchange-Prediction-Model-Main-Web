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
  // add MANY rows to test
];

export default function AllStocksSection() {
  return (
    <section className="mb-10 bg-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-1">All Stocks</h2>
      <p className="text-gray-400 mb-4">
        Choose a stock to explore its calculations, ratios, valuations, and key financial details.
      </p>

        {/* HEADER TABLE */}
        <table className="w-full text-sm border-collapse">
            <thead className="bg-black">
            <tr>
                <th className="p-3 text-left w-1/5">Stock</th>
                <th className="p-3 text-left w-1/5">Price</th>
                <th className="p-3 text-left w-1/5">P/E</th>
                <th className="p-3 text-left w-1/5">DCF</th>
                <th className="p-3 text-left w-1/5">NAV</th>
            </tr>
            </thead>
        </table>
      {/* THIS DIV CONTROLS SCROLL */}
      <div className="h-[400px] overflow-y-auto border border-gray-500 rounded-lg shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-black">
            
          </thead>

          <tbody>
            {sampleStocks.map((stock) => (
              <tr key={stock.symbol} className="hover:bg-gray-400">
                <td className="p-3">{stock.symbol}</td>
                <td className="p-3">${stock.price}</td>
                <td className="p-3">{stock.peRatio}</td>
                <td className="p-3">${stock.dcf}</td>
                <td className="p-3">${stock.nav}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
