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

      <div className="flex flex-col items-end mr-20">
        <BlurText
          text="Sectors"
          delay={80}
          animateBy="words"
          direction="top"
          className="text-[50px] font-semibold mb-2 text-white text-right "
        />

        <BlurText
          text="Choose stocks sector-wise and start investing."
          delay={20}
          animateBy="words"
          direction="bottom"
          className="text-gray-300 mb-12 text-right "
        />
      </div>


      {/* GLOWING BOX */}
      <div className="border border-white/30 rounded-[1.8rem]
        shadow-[0_0_35px_rgba(255,255,255,0.25)]
        bg-black/80 p-8
        max-w-7xl mx-auto">

        {/* 3x3 GRID */}
        <div className="grid grid-cols-3 gap-6 ">
        {sectors.map((sector, index) => (
          <button
            key={index}
            className="
              h-[90px]
              rounded-4xl
              border border-white/30
              text-white
              text-lg
              font-medium
              bg-gray-900/60
              transition-all
              duration-300
              hover:bg-gray-900/40 transition
              hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
              hover:-translate-y-1
              active:scale-95
              flex items-center justify-center gap-2
            "
          >
            <span>{sector}</span>
            <span
              className="
                flex items-center justify-center
                w-6 h-6
                border-2 border-white/20
                rounded-full
                bg-white/20
                text-white/70
                text-xs
              "
            >
              {count[index]}
            </span>

          </button>
        ))}
      </div>


      </div>
    </section>
  );
}
