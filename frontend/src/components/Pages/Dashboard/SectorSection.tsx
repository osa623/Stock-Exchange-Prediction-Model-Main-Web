"use client";

import BlurText from "@/components/Ui/BlurText";


export default function AllStocksSection() {
  return (
    <section className="mb-black p-10 rounded-lg">
    
      {/* ANIMATED HEADING */}
    
      <BlurText
        text="Sectors"
        delay={80}
        animateBy="words"
        direction="top"
        className="text-[50px] font-semibold mb-2 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
      />

      {/* ANIMATED DESCRIPTION */}
      <BlurText
        text="Analyze stocks across sectors to support informed investment decisions."
        delay={20}
        animateBy="words"
        direction="bottom"
        className="text-gray-300 mb-12 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
      />
      <div className="border-2 border-white rounded-[1.5vw] overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.5)]"></div>
        
      
    </section>
  );
}
