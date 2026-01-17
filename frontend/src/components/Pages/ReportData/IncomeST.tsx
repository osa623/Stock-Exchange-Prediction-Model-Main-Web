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

export default function IncomeST() {
  return (
    <section className="relative flex flex-col w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 h-full">

      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xs sm:text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest font-encode">Financial Data</h2>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#c7cbd0] tracking-tight leading-tight font-encode">
              INCOME STATEMENT
            </h3>
            <div className="hidden sm:block h-[2px] w-20 bg-gradient-to-r from-[#B28D41] to-transparent mb-2"></div>
          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          {/* Table Header */}
          <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 items-center bg-[#0F1729]/80">
            <div className={`${colWidths.label} text-left text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Item</div>
            <div className={`${colWidths.value} text-right text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest font-encode`}>Amount (LKR)</div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col max-h-[600px] overflow-y-auto hide-scrollbar">
            {mockIncomeData.map((row) => (
              <div
                key={row.label}
                className="flex w-full items-center px-4 sm:px-6 py-4 hover:bg-white/[0.02] transition-colors border-b border-white/[0.03] last:border-0 group cursor-default"
              >
                <div className={`${colWidths.label} flex flex-col pr-4`}>
                  <span className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-white transition-colors font-encode leading-tight">
                    {row.label}
                  </span>
                </div>
                <div className={`${colWidths.value} text-right text-gray-300 font-mono text-sm sm:text-base group-hover:text-[#B28D41] transition-colors`}>
                  <span className="text-gray-600 mr-2 text-xs">LKR</span>
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
