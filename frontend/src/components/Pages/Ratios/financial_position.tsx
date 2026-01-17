"use client";

const mockIncomeData = [
  { label: "1. P/E Ratio ", value: 532, rating: "Bad" },
  { label: "2. P/B Ratio", value: 43, rating: "Bad" },
  { label: "3. P/S Ratio", value: 34, rating: "Excellent" },
  { label: "4. Earnings Yield", value: 78, rating: "Very Bad" },
  { label: "5. EV / EBITDA", value: 63, rating: "Good" },
  { label: "6. EV / EBIT", value: 90, rating: "Bad" },
  { label: "7. EV / Sales", value: 64, rating: "Bad" },
  { label: "8. Roe", value: 90, rating: "Good" },
];

const colWidths = {
  label: "w-[50%]",
  value: "w-[25%]",
  rating: "w-[25%]",
};

export default function FinancialPosition() {
  return (
    <section className="relative flex flex-col w-full p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039]">
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col mb-8 p-2">
          <h2 className="text-xs sm:text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest mb-1">Financial Analysis</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#c7cbd0] tracking-tight leading-tight">
            FINANCIAL POSITION RATIOS
          </h3>
        </div>

        {/* TABLE SECTION */}
        <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden shadow-2xl shadow-black/40">
          {/* Table Header */}
          <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 items-center bg-[#0F1729]/50">
            <div className={`${colWidths.label} text-left text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider`}>Metric</div>
            <div className={`${colWidths.value} text-left text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider`}>Value</div>
            <div className={`${colWidths.rating} text-left text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider`}>Rating</div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {mockIncomeData.map((row) => (
              <div
                key={row.label}
                className="flex w-full items-center px-4 sm:px-6 py-4 hover:bg-gray-800/40 transition-colors border-b border-white/[0.03] last:border-0 group"
              >
                {/* Label */}
                <div className={`${colWidths.label} flex flex-col`}>
                  <span className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-white transition-colors">
                    {row.label}
                  </span>
                </div>

                {/* Value */}
                <div className={`${colWidths.value} text-gray-300 font-mono text-sm sm:text-base`}>
                  {row.value.toLocaleString()}
                </div>

                {/* Rating */}
                <div className={`${colWidths.rating}`}>
                  <span className={`
                                px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-bold uppercase tracking-wide
                                ${row.rating === 'Good' || row.rating === 'Excellent' || row.rating === 'Exellent' ? 'bg-green-900/30 text-green-400 border border-green-800/50' : ''}
                                ${row.rating === 'Bad' || row.rating === 'Very Bad' ? 'bg-red-900/30 text-red-400 border border-red-800/50' : ''}
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
