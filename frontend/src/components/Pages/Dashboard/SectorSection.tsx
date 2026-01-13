"use client";

import BlurText from "@/components/Ui/BlurText";

const sectors = [
  "Banking",
  "Finance",
  "Insurance",
  "Capital Goods",
  "Consumer Services",
  "Diversified Holdings",
  "Food & Beverage",
  "Healthcare",
  
  "Manufacturing",
  
];

const count = [
  "10",
  "8",
  "6",
  "12",
  "15",
  "5",
  "9",
  "7", 
  "11",
];

export default function AllSectorsSection() {
  return (
    <section className="mb-10 p-10 rounded-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          <BlurText
            text="Sectors"
            delay={80}
            animateBy="words"
            direction="top"
            className="text-[50px] font-semibold mb-2 text-white"
          />

          <BlurText
            text="Choose stocks sector-wise and start investing."
            delay={20}
            animateBy="words"
            direction="bottom"
            className="text-gray-300 mb-12"
          />
        </div>


      {/* SECTOR CONTAINER */}
      <div className="bg-[#090C1A] rounded-lg p-8 border border-gray-800/50">

        {/* 3x3 GRID */}
        <div className="grid grid-cols-3 gap-5">
        {sectors.slice(0,6).map((sector, index) => (
          <button
            key={index}
            className="
              group
              h-[110px]
              rounded-lg
              text-white
              font-encode
              bg-[#0D1325]
              border border-gray-800/50
              transition-all
              duration-300
              hover:bg-gray-800/70
              hover:border-gray-700/70
              hover:-translate-y-1
              hover:shadow-lg
              active:scale-95
              flex flex-col items-center justify-center gap-3
              relative
              overflow-hidden
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/0 to-gray-800/0 group-hover:from-gray-700/10 group-hover:to-gray-800/20 transition-all duration-300" />
            
            <div className="relative flex items-center gap-3">
              <span className="text-lg font-medium">{sector}</span>
              <span
                className="
                  flex items-center justify-center
                  min-w-[28px] h-[28px]
                  px-2
                  rounded-full
                  bg-[#090C1A]
                  border border-gray-700/50
                  text-gray-300
                  text-sm
                  font-semibold
                  group-hover:bg-gray-700/50
                  group-hover:text-white
                  transition-all
                  duration-300
                "
              >
                {count[index]}
              </span>
            </div>
            
            <div className="relative text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              Available Stocks
            </div>
          </button>
        ))}
      </div>


      </div>
      </div>
    </section>
  );
}
