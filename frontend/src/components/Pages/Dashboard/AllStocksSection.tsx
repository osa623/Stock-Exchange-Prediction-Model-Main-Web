

"use client";

import BlurText from "@/components/Ui/BlurText";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  peRatio: number;
  dcf: number;
  nav: number;
}




const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



const sampleStocks: Stock[] = [
  { symbol: "JKH.N0000", name: "John Keells Holdings", price: 150, peRatio: 28.5, dcf: 165, nav: 154 },
  { symbol: "CALT.N0000", name: "Ceylon Agro Industries", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "JINS.N0000", name: "Janashakthi Insurance", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "JKP.N0000", name: "John Keells Properties", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "HAYL.N0000", name: "Hayleys PLC", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "HAYC.N0000", name: "Haycarb PLC", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "SAMP.N0000", name: "Sampath Bank", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "CCS.N0000", name: "CCS Holdings", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "CDB.N0000", name: "Citizens Development Business", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
  { symbol: "COMB.N0000", name: "Commercial Bank of Ceylon", price: 302, peRatio: 33.2, dcf: 320, nav: 305 },
];

const currency = "LKR - ";


export default function AllStocksSection() {
  return (
    <section className="relative flex w-full">

      <div className="relative h-screen w-[70%]">

          <div className="max-w-7xl mx-auto">
            <div  className="px-8 py-16">
                <div className="w-full bg-[#090C1A] h-full">
                  
                </div>
            </div>

          {/* HEADER (NON-SCROLLING) */}
          <div className=" p-4
             px-2
            max-w-6xl mx-auto">
            <table className="w-full text-sm border-b-0 table-fixed ">
              <thead className="bg-[#090C1A] border border-black">
                <tr className="text-white font-encode">
                  <th className="p-3 text-left w-[30%] ">Stock</th>
                  <th className="p-3 text-left w-[17.5%]">Price</th>
                  <th className="p-3 text-left w-[17.5%]">P/E</th>
                  <th className="p-3 text-left w-[17.5%]">DCF</th>
                  <th className="p-3 text-left w-[22%]">NAV</th>
                </tr>
              </thead>

            </table>

            {/* SCROLLABLE BODY */}
              <div className="h-[400px] overflow-y-auto hide-scrollbar space-y-4 mt-4">
                {sampleStocks.map((stock) => (
                  <div
                    key={stock.symbol}
                    className="
                      flex items-center
                      bg-[#0D1325] rounded-lg px-5 py-3
                      hover:bg-gray-800/70 text-xs transition
                    "
                  >
                    <div className="w-[30%] flex flex-col font-encode text-gray-200">
                      <h2 className="text-xl">{stock.symbol}</h2>
                      <div className="text-[0.6rem] font-thin">
                        {stock.name}
                       </div> 
                    </div>

                    <div className="w-[17.5%] text-xl text-gray-200">
                      {currency}{stock.price}
                    </div>

                    <div className="w-[17.5%] text-xl text-gray-200">
                      {stock.peRatio}
                    </div>

                    <div className="w-[17.5%] text-gray-200">
                      {stock.dcf}
                    </div>

                    <div className="w-[19%] text-gray-200">
                      {stock.nav}
                    </div>
                  </div>
                ))}
              </div>

          </div>

          </div>

      </div>


      <div className="relative h-screen w-[30%]">

          <div className="max-w-7xl mx-auto">
            <div  className="px-2 py-16">

            </div>

          {/* HEADER (NON-SCROLLING) */}
          <div className="py-4 w-full mx-auto">

            <div className="flex h-[75vh] w-full rounded-4xl bg-[#090C1A]">

            </div>


            {/* SCROLLABLE BODY 
              <div className="h-[400px] overflow-y-auto hide-scrollbar space-y-4 mt-4">
                {sampleStocks.map((stock) => (
                  <div
                    key={stock.symbol}
                    className="
                      flex items-center
                      bg-[#0D1325] rounded-lg px-5 py-3
                      hover:bg-gray-800/70 text-xs transition
                    "
                  >
                    <div className="w-[30%] text-gray-200">
                      {stock.symbol}
                    </div>

                    <div className="w-[17.5%] text-gray-200">
                      {currency}{stock.price}
                    </div>

                    <div className="w-[17.5%] text-gray-200">
                      {stock.peRatio}
                    </div>

                    <div className="w-[17.5%] text-gray-200">
                      {stock.dcf}
                    </div>

                    <div className="w-[19%] text-gray-200">
                      {stock.nav}
                    </div>
                  </div>
                ))}
              </div>  */}

          </div>
          
          </div>
        
      </div>

    </section>

    
    
  );
}
