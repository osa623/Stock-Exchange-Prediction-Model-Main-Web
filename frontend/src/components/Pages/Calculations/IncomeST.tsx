"use client";

const mockIncomeData = [
    { label: "1.	Revenue Growth Rate ", value: 657, rating: "Good" },
  { label: "2.	Gross Profit", value: 667, rating: "Bad" },
  { label: "3.	Gross Profit Margin", value: 990, rating: "Exellent" },
  { label: "4.	Operating Profit (EBIT)", value: 890, rating: "Very Bad" },
  { label: "5.	Operating Margin", value: 900, rating: "Good" },
  { label: "6.	EBITDA", value: 990, rating: "Good" },
  { label: "7.	EBITDA Margin", value: 654, rating: "Bad" },
  { label: "8.	Net Profit Margin", value: 990, rating: "Exellent" },
];

export default function IncomeST() {
  return (
    <section
        className="border border-white/30 rounded-[1.8rem]
        shadow-[0_0_35px_rgba(255,255,255,0.25)]
        bg-black/80 p-8
        max-w-7xl mx-auto"
>


      <h2 className="text-xl font-semibold mb-6 text-gray-100 text-[35px]">
        Income Statement
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
