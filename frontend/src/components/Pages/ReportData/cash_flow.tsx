"use client";

const mockIncomeData = [
  { label: "Interest Income", value: 7567458657 },
  { label: "Interest Expense", value: 5325654667 },
  { label: "Net Interest Income", value: 2241803990 },
  { label: "Operating Income", value: 1874567890 },
  { label: "Operating Expenses", value: 945678900 },
  { label: "Profit Before Tax", value: 928888990 },
  { label: "Tax Expense", value: 275666000 },
  { label: "Net Profit", value: 653222990 },
];

const colWidths = {
  label: "w-[60%]",
  value: "w-[40%]",
};

export default function CashFlow() {
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
          <h2 className="text-xs sm:text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest mb-1">Financial Data</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#c7cbd0] tracking-tight leading-tight">
            STATEMENT OF CASH FLOW
          </h3>
        </div>

        {/* TABLE SECTION */}
        <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden shadow-2xl shadow-black/40">
          {/* Table Header */}
          <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 items-center bg-[#0F1729]/50">
            <div className={`${colWidths.label} text-left text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider`}>Item</div>
            <div className={`${colWidths.value} text-right text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider`}>Amount (LKR)</div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {mockIncomeData.map((row) => (
              <div
                key={row.label}
                className="flex w-full items-center px-4 sm:px-6 py-4 hover:bg-gray-800/40 transition-colors border-b border-white/[0.03] last:border-0 group"
              >
                <div className={`${colWidths.label} flex flex-col`}>
                  <span className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-white transition-colors">
                    {row.label}
                  </span>
                </div>
                <div className={`${colWidths.value} text-right text-gray-300 font-mono text-sm sm:text-base`}>
                  <span className="text-gray-500 mr-2">LKR</span>
                  {row.value.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
