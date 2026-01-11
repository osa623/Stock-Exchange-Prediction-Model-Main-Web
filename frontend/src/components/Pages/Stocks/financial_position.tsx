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

export default function FinancialPosition() {
  return (
    <section
        className="border border-white/30 rounded-[1.8rem]
        shadow-[0_0_35px_rgba(255,255,255,0.25)]
        bg-black/80 p-8
        max-w-7xl mx-auto"
>


      <h2 className="text-xl font-semibold mb-6 text-gray-100 text-[35px]">
        Statement of Financial Position
      </h2>

      <div className="space-y-4 max-h-[420px]  overflow-y-auto hide-scrollbar">
        {mockIncomeData.map((row) => (
          <div
            key={row.label}
            className="flex justify-between items-center 
            bg-gray-900/60 rounded-lg px-5 py-3
            hover:bg-gray-800/70 transition"
          >
            <span className="text-gray-300">{row.label}</span>
            <span className="text-gray-100 font-medium">
              LKR {row.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
