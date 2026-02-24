"use client";

interface Props { symbol?: string; }

const mockIncomeData = [
  { label: "1. Discounted Cash Flow ", value: 657, rating: "Good" },
  { label: "2. Free Cash Flow to Equity", value: 667, rating: "Bad" },
  { label: "3. Dividend Discount Model", value: 990, rating: "Excellent" },
  { label: "4. Residual Income Model", value: 890, rating: "Very Bad" },
  { label: "5. Earnings Power Value", value: 900, rating: "Good" },
  { label: "6. Adjusted Net Asset Value", value: 990, rating: "Good" },
  { label: "7. Liquidation Value", value: 654, rating: "Bad" },
  { label: "8. Replacement Cost Valuation", value: 990, rating: "Excellent" },
];

const colWidths = {
  label: "w-[50%]",
  value: "w-[25%]",
  rating: "w-[25%]",
};

export default function Value({ symbol }: Props) {
  return (
    <section className="relative flex flex-col w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 h-full">

      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xs sm:text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest font-encode">
            Financial Analysis{symbol ? ` — ${symbol}` : ""}
          </h2>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#c7cbd0] tracking-tight leading-tight font-encode">
              Valuations
            </h3>
            {/* Decorative line */}
            <div className="hidden sm:block h-[2px] w-20 bg-gradient-to-r from-[#B28D41] to-transparent mb-2"></div>
          </div>

        </div>

        {/* TABLE SECTION */}
        <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm">

          {/* Table Header */}
          <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 items-center bg-[#0F1729]/80">
            <div className={`${colWidths.label} text-left text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Metric</div>
            <div className={`${colWidths.value} text-left text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Value</div>
            <div className={`${colWidths.rating} text-left text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Rating</div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col max-h-[600px] overflow-y-auto hide-scrollbar">
            {mockIncomeData.map((row) => (
              <div
                key={row.label}
                className="flex w-full items-center px-4 sm:px-6 py-4 hover:bg-white/[0.02] transition-colors border-b border-white/[0.03] last:border-0 group cursor-default"
              >
                {/* Label */}
                <div className={`${colWidths.label} flex flex-col pr-4`}>
                  <span className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-white transition-colors font-encode leading-tight">
                    {row.label}
                  </span>
                </div>

                {/* Value */}
                <div className={`${colWidths.value} text-gray-300 font-mono text-sm sm:text-base group-hover:text-[#B28D41] transition-colors`}>
                  {row.value.toLocaleString()}
                </div>

                {/* Rating */}
                <div className={`${colWidths.rating} flex items-center`}>
                  <span className={`
                                px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider border
                                ${['Good', 'Excellent', 'Exellent'].includes(row.rating) ? 'bg-green-900/20 text-green-400 border-green-800/50 shadow-[0_0_10px_rgba(74,222,128,0.1)]' : ''}
                                ${['Bad', 'Very Bad'].includes(row.rating) ? 'bg-red-900/20 text-red-400 border-red-800/50 shadow-[0_0_10px_rgba(248,113,113,0.1)]' : ''}
                            `}>
                    {row.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
