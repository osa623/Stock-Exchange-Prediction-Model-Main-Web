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

export default function AllSectorsSection() {
  return (
    <section className="mb-10 bg-black p-10 rounded-lg">

      {/* ANIMATED HEADING */}
      <BlurText
        text="All Sectors"
        delay={80}
        animateBy="words"
        direction="top"
        className="text-[50px] font-semibold mb-2 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
      />

      {/* ANIMATED DESCRIPTION */}
      <BlurText
        text="Choose a sector to explore companies, valuations, ratios, and performance insights."
        delay={20}
        animateBy="words"
        direction="bottom"
        className="text-gray-300 mb-12 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
      />

      {/* GLOWING BOX */}
      <div className="border-2 border-white rounded-[1.5vw] p-8 shadow-[0_0_30px_rgba(255,255,255,0.5)]">

        {/* 3x3 GRID */}
        <div className="grid grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <button
              key={sector}
              className="
                h-[90px]
                rounded-4xl
                border border-white/30
                text-white
                text-lg
                font-medium
                bg-black
                transition-all
                duration-300
                hover:bg-white/10
                hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
                hover:-translate-y-1
                active:scale-95
              "
            >
              {sector}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
