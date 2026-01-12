

"use client";

//Ui imports
import BlurText from "@/components/Ui/BlurText";
import ScrollVelocity from "@/components/Ui/ScrollVelocity";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  peRatio: number;
  dcf: number;
  nav: number;
  pvRatio: number;
  target: number;
}




const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


const sampleStocks: Stock[] = [
  { symbol: "JKH.N0000", name: "John Keells Holdings", price: 150, peRatio: 28.5, dcf: 165, nav: 154, pvRatio: 1.2, target: 170 },
  { symbol: "CALT.N0000", name: "Ceylon Agro Industries", price: 302, peRatio: 33.2, dcf: 320, nav: 305, pvRatio: 1.5, target: 330 },
  { symbol: "JINS.N0000", name: "Janashakthi Insurance", price: 302, peRatio: 33.2, dcf: 320, nav: 305, pvRatio: 1.3, target: 315 },
  { symbol: "JKP.N0000", name: "John Keells Properties", price: 302, peRatio: 33.2, dcf: 320, nav: 305, pvRatio: 1.4, target: 325 },
  { symbol: "HAYL.N0000", name: "Hayleys PLC", price: 302, peRatio: 33.2, dcf: 320, nav: 305, pvRatio: 1.6, target: 335 },
  { symbol: "HAYC.N0000", name: "Haycarb PLC", price: 302, peRatio: 33.2, dcf: 320, nav: 305, pvRatio: 1.1, target: 310 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", price: 302, peRatio: 33.2, dcf: 320, nav: 305, pvRatio: 1.7, target: 340 },
  { symbol: "SAMP.N0000", name: "Sampath Bank", price: 302, peRatio: 33.2, dcf: 320, nav: 305, pvRatio: 1.8, target: 345 },
  { symbol: "CCS.N0000", name: "CCS Holdings", price: 302, peRatio: 33.2, dcf: 320, nav: 305, pvRatio: 1.2, target: 318 },
  { symbol: "CDB.N0000", name: "Citizens Development Business", price: 302, peRatio: 33.2, dcf: 320, nav: 305, pvRatio: 1.9, target: 350 },
  { symbol: "COMB.N0000", name: "Commercial Bank of Ceylon", price: 302, peRatio: 33.2, dcf: 320, nav: 305, pvRatio: 2.0, target: 355 },

];

const currency = "LKR - ";


/**
 * AllStocksSection Component
 * 
 * @description
 * A dashboard section component that displays a comprehensive stock listing interface with a split-panel layout.
 * The left panel (60% width) contains a searchable, scrollable table of stocks with their key metrics including
 * price, P/E ratio, DCF, NAV, P/V ratio, and target values. The right panel (40% width) is reserved for
 * additional stock-related information or visualizations.
 * 
 * Features:
 * - Real-time stock search functionality
 * - Scrollable stock list with fixed header
 * - Animated text banner using ScrollVelocity component
 * - Responsive grid layout with custom column widths
 * - Hover effects and smooth transitions
 * - Custom styling with Tailwind CSS
 * 
 * Layout Structure:
 * - Left Section: Stock listing with search bar, header, and scrollable content
 * - Right Section: Reserved panel for future content
 * 
 * @returns {JSX.Element} A section containing the complete stocks dashboard interface
 * 
 * @example
 * ```tsx
 * <AllStocksSection />
 * ```
 */
export default function AllStocksSection() {
  return (
    <section className="relative flex w-full">

      <div className="relative h-screen w-[60%]">

          <div className="max-w-7xl mx-auto">
                   {/* UPPER SECTION*/}
            <div  className="relative px-1 py-1">
                <div className="w-full relative flex flex-col bg-[#090C1A] h-[20vh]">
                  
                     {/* upper upper Section */}
                  <div className="abslolute top-0 flex">
                    <h2 className="relative p-3 text-4xl font-bowlby font-normal">
                      STOCKS
                    </h2>
                     <h2 className="relative p-3 text-[0.9rem] font-poppins font-thin">
                     A dashboard section component that displays a comprehensive stock listing interface with a split-panel layout. The left panel (60% width) contains a searchable.
                    </h2>
                  </div>

                    {/* Search Bar Section */}
                    <div className="flex w-full bg-black h-[8vh] bottom-0 right-0 overflow-hidden">
                      <div className='relative w-full h-8 bg-transparent border-t-2 overflow-hidden top-0 flex items-center px-4'>
                        <input
                          type="text"
                          placeholder="Search stocks..."
                          className="w-full h-full bg-transparent text-white font-encode text-[15px] font-thin outline-none placeholder:text-gray-500"
                        />
                        <svg 
                          className="w-5 h-5 text-gray-400" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Scroll-Velocity branch Section */}
                    <div className="flex w-full bg-black h-[5vh] bottom-0 right-0 overflow-hidden">
                                      <div className='relative w-[100%] h-[2rem] bg-transparent border-t-2 overflow-hidden top-0 flex items-center justify-center'>
                                          <ScrollVelocity
                                               texts={['Developer  |  Designer  |  Developer  |  Designer  |  Developer  |  Designer']} 
                                                velocity={12} 
                                                className="custom-scroll-text h-full text-white font-thin font-encode text-[12px]"
                                            />
                    
                                       
                                     </div>
                    </div>

                </div>
            </div>

          {/* HEADER (NON-SCROLLING) */}
          <div className=" 
             px-2
            max-w-6xl mx-auto">
            <table className="w-full text-sm border-b-0 table-fixed ">
              <thead className="bg-[#090C1A] border border-black">
                <tr className="flex bg-[#BBC0C7] text-sm rounded-t-xl  justify-evenly items-center font-poppins">
                  <th className="p-3  text-left text-black px-5 font-semibold w-[30%] ">Stock</th>
                  <th className="p-3  text-left text-black px-5 font-semibold w-[17.5%]">Price</th>
                  <th className="p-3  text-left text-black px-5 font-semibold w-[17.5%]">P/E</th>
                  <th className="p-3  text-left text-black px-5 font-semibold w-[17.5%]">DCF</th>
                  <th className="p-3  text-left text-black px-5 font-semibold w-[22%]">NAV</th>
                  <th className="p-3  text-left text-black px-5 font-semibold w-[22%]">P/V</th>
                  <th className="p-3  text-left text-black px-5  font-semibold w-[22%]">Target</th>
                  
                </tr>
              </thead>

            </table>
            

            {/* SCROLLABLE BODY */}
              <div className="h-[450px] justify-evenly flex flex-col overflow-y-auto hide-scrollbar space-y-4 mt-4">
                {sampleStocks.map((stock) => (
                  <div
                    key={stock.symbol}
                    className="
                      flex items-center
                      bg-[#121C33] rounded-lg px-2 py-2
                      hover:bg-gray-800/70 text-xs transition
                    "
                  >
                    <div className="w-[30%] flex flex-col font-encode text-gray-200">
                      <h2 className="text-md">{stock.symbol}</h2>
                      <div className="text-[0.6rem] font-thin">
                        {stock.name}
                       </div> 
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
                    <div className="w-[19%] text-gray-200">
                      {stock.pvRatio}
                    </div>
                    <div className="w-[19%] text-gray-200">
                      {stock.target}
                    </div>
                  </div>
                ))}
              </div>

          </div>

          </div>

      </div>


      <div className="relative h-screen w-[40%]">

          <div className="max-w-7xl mx-auto">
            <div  className="px-1 py-1">
                <div className="w-full bg-[#ffd000] h-[20vh]">
                  
                </div>
            </div>


          {/* HEADER (NON-SCROLLING) */}
          <div className="py-1 px-1 w-full mx-auto">

            <div className="flex h-[75vh] w-full border-t-2 border-l-2 bg-[#090C1A]">

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
