"use client";

const mockIncomeData = [
  { label: "1.	P/E Ratio ", value: 532, rating: "Bad" },
  { label: "2.	P/B Ratio", value: 43, rating: "Bad" },
  { label: "3.	P/S Ratio", value: 34, rating: "Exellent" },
  { label: "4.	Earnings Yield", value: 78, rating: "Very Bad" },
  { label: "5.	EV / EBITDA", value: 63, rating: "Good" },
  { label: "6.	EV / EBIT", value: 90, rating: "Bad" },
  { label: "7.	EV / Sales", value: 64, rating: "Bad" },
  { label: "8.	Roe", value: 90, rating: "Good" },
];

export default function CashFlow() {
  return (
    <section
        className="border border-white/30 rounded-[1.8rem]
        shadow-[0_0_35px_rgba(255,255,255,0.25)]
        bg-black/80 p-8
        max-w-7xl mx-auto"
>


      <h2 className="text-xl font-semibold mb-6 text-gray-100 text-[35px]">
        Satement of Cash Flow
      </h2>

      <div className="space-y-4 max-h-[420px]  overflow-y-auto hide-scrollbar">
        {mockIncomeData.map((row) => (
          <div
            key={row.label}
            className="flex justify-between items-center 
            bg-gray-900/60 rounded-lg px-5 py-3
            hover:bg-gray-800/70 transition"
          >
          
            <div className="w-[30%] text-gray-200">
                  {row.label}
                </div>

                <div className="w-[17.5%] text-gray-200">
                  {row.value.toLocaleString()}
                </div>

                <div className="w-[17.5%] text-gray-200">
                  {row.rating}
                </div>

          </div>
        ))}
      </div>
    </section>
  );
}
