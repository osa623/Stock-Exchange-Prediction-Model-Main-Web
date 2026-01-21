
"use client";



const mockStockData = [
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, pe: 14.5, pb: 1.8, nav: 165, valuation: 20, growth: 5, target: 80 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", price: 285, pe: 9.2, pb: 1.1, nav: 260, valuation: 12, growth: 23, target: 500 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, pe: 14.5, pb: 1.8, nav: 165, valuation: 20, growth: 5, target: 80 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", price: 285, pe: 9.2, pb: 1.1, nav: 260, valuation: 12, growth: 23, target: 500 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, pe: 14.5, pb: 1.8, nav: 165, valuation: 20, growth: 5, target: 80 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, pe: 14.5, pb: 1.8, nav: 165, valuation: 20, growth: 5, target: 80 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", price: 285, pe: 9.2, pb: 1.1, nav: 260, valuation: 12, growth: 23, target: 500 },
  { symbol: "JKH.N0000", name: "John Keels Holdings", industry: "Diversified", price: 210, pe: 14.5, pb: 1.8, nav: 165, valuation: 20, growth: 5, target: 80 },
];



const colWidths = {
  symbol: "w-[10%]",
  name: "w-[20%]",
  industry: "w-[12%]",
  price: "w-[8%]",
  pe: "w-[7%]",
  pb: "w-[7%]",
  nav: "w-[8%]",
  valuation: "w-[10%]",
  growth: "w-[10%]",
  target: "w-[10%]"

};


export default function Watchlist() {
  return (
    <section className="relative flex flex-col not-only-of-type:w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 h-full">
      <div className="relative w-full  max-w-7xl mx-auto flex flex-col gap-6">

        {/* HEADER */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xs sm:text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest font-encode">
            BUYZONLABS
          </h2>
          <div className="flex items-end justify-between">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DFBD69] to-[#ffffff] mb-2 font-encode">
              WatchList
            </h1>

            <div className="flex items-center gap-4">
              <p className="hidden sm:block text-sm text-gray-300 max-w-xs text-right">
                Click any <span className="text-[#B28D41] font-bold">Stock</span> to view more Data, Calculations, Ratios and Valuations.
              </p>

              <div className="hidden sm:block h-[2px] w-20 bg-gradient-to-r from-[#B28D41] to-transparent mb-2" />
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

          {/* TABLE HEADER */}
          <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 bg-[#0F1729]/80">
            <div className={`${colWidths.symbol} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Symbol</div>
            <div className={`${colWidths.name} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Company</div>
            <div className={`${colWidths.industry} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Industry</div>
            <div className={`${colWidths.price} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Price</div>
            <div className={`${colWidths.pe} text-xs font-semibold text-gray-400 uppercase`}>PE</div>
            <div className={`${colWidths.pb} text-xs font-semibold text-gray-400 uppercase`}>PB</div>
            <div className={`${colWidths.nav} text-xs font-semibold text-gray-400 uppercase`}>NAV</div>
            <div className={`${colWidths.valuation} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Valuation</div>
            <div className={`${colWidths.growth} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Growth %</div>
            <div className={`${colWidths.target} text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Target</div>


          </div>

          {/* TABLE BODY */}
          <div className="flex flex-col max-h-[600px] overflow-y-auto hide-scrollbar">
            {mockStockData.map((row, idx) => (
              <div
                key={idx}
                className="flex w-full items-center px-4 sm:px-6 py-4 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
              >
                <div className={`${colWidths.symbol} text-sm font-mono text-gray-300`}>
                  {row.symbol}
                </div>

                <div className={`${colWidths.name} text-sm font-bold text-gray-200`}>
                  {row.name}
                </div>

                <div className={`${colWidths.industry} text-sm text-gray-400`}>
                  {row.industry}
                </div>

                <div className={`${colWidths.price} text-sm font-mono text-gray-300`}>
                  {row.price.toLocaleString()}
                </div>

                <div className={`${colWidths.pe} text-sm font-mono text-gray-300`}>
                  {row.pe}
                </div>

                <div className={`${colWidths.pb} text-sm font-mono text-gray-300`}>
                  {row.pb}
                </div>

                <div className={`${colWidths.nav} text-sm font-mono text-gray-300`}>
                  {row.nav.toLocaleString()}
                </div>


                <div className={`${colWidths.valuation} text-sm font-mono text-[#B28D41]`}>DCF :
                  {row.valuation}
                </div>

                <div className={`${colWidths.growth} text-sm font-mono ${row.growth >= 15 ? "text-green-400" : "text-red-400"
                  }`}>
                  {row.growth}%
                </div>

                <div className={`${colWidths.target} text-sm font-mono text-gray-300`}>
                  {row.target.toLocaleString()}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
