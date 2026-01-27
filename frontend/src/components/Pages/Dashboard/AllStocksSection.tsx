"use client";

// Ui imports
import ScrollVelocity from "@/components/Ui/ScrollVelocity";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number; 
  peRatio: number;
  dcf: number;
  nav: number;
  pvRatio: number;
  target: string;
  volume: string;
  marketCap: string;
  sector: string;
}

interface MarketData {
symbol: string;
  name: string;
  price: string;
  change: string;
  percentage: number;

}



const sampleStocks: Stock[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 185.92, change: 1.2, peRatio: 28.5, dcf: 190.00, nav: 45.2, pvRatio: 4.1, target: 'BUY', volume: '52M', marketCap: '2.8T', sector: 'Technology' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 240.50, change: -2.5, peRatio: 72.1, dcf: 210.00, nav: 35.8, pvRatio: 8.5, target: 'HOLD', volume: '105M', marketCap: '750B', sector: 'Automotive' },
  { symbol: 'NVDA', name: 'Nvidia Corp.', price: 460.15, change: 3.4, peRatio: 95.0, dcf: 480.00, nav: 60.5, pvRatio: 12.2, target: 'BUY', volume: '48M', marketCap: '1.1T', sector: 'Semiconductors' },
  { symbol: 'JPM', name: 'JPMorgan Chase', price: 145.20, change: 0.5, peRatio: 10.5, dcf: 160.00, nav: 95.0, pvRatio: 1.5, target: 'STRONG BUY', volume: '12M', marketCap: '420B', sector: 'Finance' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 378.85, change: 2.1, peRatio: 34.2, dcf: 395.00, nav: 52.3, pvRatio: 7.2, target: 'BUY', volume: '28M', marketCap: '2.8T', sector: 'Technology' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 140.25, change: -0.8, peRatio: 26.8, dcf: 150.00, nav: 48.7, pvRatio: 2.9, target: 'BUY', volume: '32M', marketCap: '1.7T', sector: 'Technology' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 152.30, change: 1.8, peRatio: 58.4, dcf: 165.00, nav: 38.2, pvRatio: 4.0, target: 'BUY', volume: '45M', marketCap: '1.5T', sector: 'E-commerce' },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: 485.60, change: 3.2, peRatio: 29.5, dcf: 510.00, nav: 55.8, pvRatio: 8.7, target: 'STRONG BUY', volume: '18M', marketCap: '1.2T', sector: 'Social Media' },
  { symbol: 'BAC', name: 'Bank of America', price: 32.75, change: -0.3, peRatio: 9.8, dcf: 35.00, nav: 28.5, pvRatio: 1.1, target: 'HOLD', volume: '38M', marketCap: '250B', sector: 'Finance' },
  { symbol: 'WMT', name: 'Walmart Inc.', price: 165.40, change: 0.9, peRatio: 24.3, dcf: 170.00, nav: 42.0, pvRatio: 3.9, target: 'BUY', volume: '8M', marketCap: '450B', sector: 'Retail' },
  { symbol: 'DIS', name: 'The Walt Disney Co.', price: 92.15, change: -1.2, peRatio: 45.2, dcf: 105.00, nav: 32.8, pvRatio: 2.8, target: 'HOLD', volume: '11M', marketCap: '168B', sector: 'Entertainment' },
  { symbol: 'AMD', name: 'Advanced Micro Devices', price: 165.80, change: 4.5, peRatio: 68.5, dcf: 180.00, nav: 25.3, pvRatio: 6.5, target: 'BUY', volume: '65M', marketCap: '268B', sector: 'Semiconductors' },
  { symbol: 'NFLX', name: 'Netflix Inc.', price: 485.20, change: 2.7, peRatio: 42.8, dcf: 510.00, nav: 68.5, pvRatio: 7.1, target: 'BUY', volume: '5M', marketCap: '210B', sector: 'Entertainment' },
  { symbol: 'PFE', name: 'Pfizer Inc.', price: 28.65, change: -0.5, peRatio: 12.4, dcf: 32.00, nav: 18.2, pvRatio: 1.6, target: 'HOLD', volume: '24M', marketCap: '162B', sector: 'Pharmaceuticals' },
  { symbol: 'INTC', name: 'Intel Corporation', price: 43.90, change: 1.1, peRatio: 38.2, dcf: 48.00, nav: 22.5, pvRatio: 2.0, target: 'HOLD', volume: '42M', marketCap: '180B', sector: 'Semiconductors' },
  { symbol: 'V', name: 'Visa Inc.', price: 252.35, change: 1.5, peRatio: 31.6, dcf: 265.00, nav: 48.9, pvRatio: 5.2, target: 'BUY', volume: '7M', marketCap: '520B', sector: 'Finance' },
];



//mock data for the ASPI and S&P SL20

const MOCK_GAINERS: MarketData[] = [
  { symbol: 'NVDA', name: 'NVIDIA Corp', price: '485.09', change: '+4.2%', percentage: 4.2 },
  { symbol: 'AMD', name: 'Adv. Micro Devices', price: '120.50', change: '+3.5%', percentage: 3.5 },
  { symbol: 'COIN', name: 'Coinbase Global', price: '152.10', change: '+2.8%', percentage: 2.8 },
  { symbol: 'PLTR', name: 'Palantir Tech', price: '17.40', change: '+2.1%', percentage: 2.1 },
  { symbol: 'MARA', name: 'Marathon Digital', price: '23.65', change: '+1.9%', percentage: 1.9 },
  { symbol: 'RIOT', name: 'Riot Platforms', price: '15.80', change: '+1.5%', percentage: 1.5 },
  { symbol: 'MSTR', name: 'MicroStrategy', price: '590.20', change: '+1.2%', percentage: 1.2 },
  { symbol: 'TSLA', name: 'Tesla Inc', price: '245.30', change: '+0.9%', percentage: 0.9 },
  { symbol: 'META', name: 'Meta Platforms', price: '350.15', change: '+0.8%', percentage: 0.8 },
  { symbol: 'MSFT', name: 'Microsoft', price: '375.00', change: '+0.5%', percentage: 0.5 },
];

const MOCK_LOSERS: MarketData[] = [
  { symbol: 'PYPL', name: 'PayPal Holdings', price: '58.20', change: '-3.4%', percentage: -3.4 },
  { symbol: 'ZM', name: 'Zoom Video', price: '68.50', change: '-2.8%', percentage: -2.8 },
  { symbol: 'BABA', name: 'Alibaba Group', price: '72.10', change: '-2.1%', percentage: -2.1 },
  { symbol: 'JD', name: 'JD.com Inc', price: '25.30', change: '-1.9%', percentage: -1.9 },
  { symbol: 'DIS', name: 'Walt Disney', price: '90.50', change: '-1.5%', percentage: -1.5 },
  { symbol: 'PFE', name: 'Pfizer Inc', price: '28.40', change: '-1.2%', percentage: -1.2 },
  { symbol: 'KO', name: 'Coca-Cola', price: '58.10', change: '-0.9%', percentage: -0.9 },
  { symbol: 'VZ', name: 'Verizon', price: '37.80', change: '-0.8%', percentage: -0.8 },
  { symbol: 'T', name: 'AT&T Inc', price: '16.50', change: '-0.6%', percentage: -0.6 },
  { symbol: 'INTC', name: 'Intel Corp', price: '45.20', change: '-0.5%', percentage: -0.5 },
];

// icons

// --- Inline Icons (No Dependencies) ---
const Icons = {
  TrendingUp: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
  ),
  TrendingDown: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
  ),
  ArrowUp: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
  ),
  ArrowDown: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m7 7 10 10"/><path d="M17 7v10H7"/></svg>
  )
};



const currency = "LKR - ";

// Define shared column widths to ensure Header and Body align perfectly
const colWidths = {
  stock: "w-[28%]",
  price: "w-[15%]",
  pe: "w-[12%]",
  dcf: "w-[12%]",
  nav: "w-[12%]",
  pv: "w-[10%]",
  target: "w-[11%]",
};

export default function AllStocksSection() {
  return (
    <section className="relative flex flex-col lg:flex-row w-full p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039]">
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* LEFT PANEL - Main Stocks Table (65%) */}
      <div className="relative min-h-screen h-auto w-full lg:w-[65%] border-r overflow-hidden border-white/5">
        <div className="h-full w-full flex flex-col">
          
          {/* UPPER SECTION */}
          <div className="relative px-1 py-1">
            <div className="w-full relative flex flex-col bg-[#090C1A] min-h-[140px] sm:h-[10vh] md:h-[20vh] lg:h-[20vh]">
              
              {/* Title Section */}
              <div className="flex top-0 flex-col p-2 sm:p-3 ">
                <div className="max-w-2xl">
                          <h2 className="text-xs sm:text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest mb-1">Market Segments</h2>
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#c7cbd0] tracking-tight leading-tight">
                            STOCKS SECTIONS<br/>

                          </h3>
                </div>
              </div>

                {/* Search Bar Section */}
                <div className="flex w-full h-[60px] sm:h-[8vh] py-2 left-0 overflow-hidden">
                <div className='relative w-full h-10 sm:h-12 bg-transparent border-t-2 border-gray-800 overflow-hidden top-0 flex items-center px-2 sm:px-4 gap-2'>
                  <input
                  type="text"
                  placeholder="Search stocks..."
                  className="flex-1 h-full bg-transparent text-white font-encode text-sm sm:text-[15px] font-thin outline-none placeholder:text-gray-500"
                  />
                  <button
                  className="flex items-center cursor-pointer font-encode font-medium bg-gradient-to-r from-[#B28D41] to-[#E9D37E] text-[#0D1325] rounded-lg hover:shadow-lg hover:shadow-[#B28D41]/30 transition-all duration-300 hover:scale-105 gap-1 sm:gap-2 px-4 sm:px-8 lg:px-12 py-1.5 "
                  >
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="hidden sm:inline">Search Stocks</span>
                  <span className="sm:hidden">Search</span>
                  </button>
                </div>
                </div>



            </div>
          </div>

          {/* TABLE SECTION */}
          <div className="px-1 sm:px-2 w-full mx-auto mt-2 sm:mt-4">
            
          {/* TABLE HEADER - OPTION 1: Minimalist Dark with Actions */}
          <div className="overflow-x-auto">
          <div className="relative flex w-full min-w-[600px] sm:min-w-0 border-b border-gray-800/60 px-2 sm:px-4 py-2 sm:py-3 mb-2 items-center">
            
            {/* Column Headers */}
            <div className={`${colWidths.stock} text-left text-[10px] sm:text-xs font-medium text-gray-300 uppercase tracking-wider`}>Stock</div>
            <div className={`${colWidths.price} text-left text-[10px] sm:text-xs font-medium text-gray-300 uppercase tracking-wider`}>Price</div>
            <div className={`${colWidths.pe} text-left text-[10px] sm:text-xs font-medium text-gray-300 uppercase tracking-wider`}>P/E</div>
            <div className={`${colWidths.dcf} text-left text-[10px] sm:text-xs font-medium text-gray-300 uppercase tracking-wider`}>DCF</div>
            <div className={`${colWidths.nav} text-left text-[10px] sm:text-xs font-medium text-gray-300 uppercase tracking-wider`}>NAV</div>
            <div className={`${colWidths.pv} text-left text-[10px] sm:text-xs font-medium text-gray-300 uppercase tracking-wider`}>P/V</div>
            <div className={`${colWidths.target} text-left text-[10px] sm:text-xs font-medium text-gray-300 uppercase tracking-wider`}>Target</div>

   

          </div>
          </div>

            {/* SCROLLABLE BODY */}
            <div className="overflow-x-auto mb-12">
            <div className="sm:h-[400px] md:h-[450px] overflow-y-auto hide-scrollbar flex flex-col gap-1 sm:gap-2 mt-2 min-w-[600px] sm:min-w-0">
              {sampleStocks.map((stock) => (
                <div
                  key={stock.symbol}
                  className="flex w-full items-center bg-[#121C33] rounded-lg px-2 sm:px-4 py-2 sm:py-3 hover:bg-gray-800/70 text-[10px] sm:text-xs transition border border-transparent hover:border-gray-600"
                >
                  {/* Stock Symbol/Name */}
                  <div className={`${colWidths.stock} flex flex-col font-encode text-gray-200`}>
                    <span className="text-xs sm:text-sm font-bold">{stock.symbol}</span>
                    <span className="text-[0.6rem] sm:text-[0.65rem] text-gray-400 font-thin truncate pr-1 sm:pr-2">{stock.name}</span>
                  </div>

                  {/* Price */}
                  <div className={`${colWidths.price} text-gray-200 font-mono`}>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-xs">{stock.price}</span>
                      <span className={`text-[8px] sm:text-[10px] ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {stock.change > 0 ? '+' : ''}{stock.change}%
                      </span>
                    </div>
                  </div>

                  {/* P/E */}
                  <div className={`${colWidths.pe} text-gray-300 text-[10px] sm:text-xs`}>
                    {stock.peRatio}
                  </div>

                  {/* DCF */}
                  <div className={`${colWidths.dcf} text-gray-300 text-[10px] sm:text-xs`}>
                    {stock.dcf}
                  </div>

                  {/* NAV */}
                  <div className={`${colWidths.nav} text-gray-300 text-[10px] sm:text-xs`}>
                    {stock.nav}
                  </div>

                  {/* P/V */}
                  <div className={`${colWidths.pv} text-gray-300 text-[10px] sm:text-xs`}>
                    {stock.pvRatio}
                  </div>

                  {/* Target Badge */}
                  <div className={`${colWidths.target}`}>
                    <span className={`
                      px-1 sm:px-2 py-0.5 sm:py-1 rounded text-[8px] sm:text-[10px] font-bold
                      ${stock.target.includes('BUY') ? 'bg-green-900/40 text-green-400 border border-green-800' : ''}
                      ${stock.target.includes('HOLD') ? 'bg-yellow-900/40 text-yellow-400 border border-yellow-800' : ''}
                    `}>
                      {stock.target}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            </div>

          </div>

        </div>
      </div>

      {/* RIGHT PANEL - Market Movers (35%) */}
      <div className="relative min-h-screen h-auto w-full lg:mt-0 md:mt-0 sm:mt-18 lg:w-[35%] overflow-hidden">
           {/* Market Indices Cards */}
           <div className="flex flex-col p-2 sm:p-3 md:p-4 gap-3 sm:gap-4">
          <div className="grid bg-gradient-to-br from-[#0F1729] to-[#1a2642] rounded-xl border border-white/10 grid-cols-2 gap-2 sm:gap-3 px-2">
            {/* ASPI Card */}
            <div className=" rounded-xl p-2 sm:p-3 md:p-4 transition-all">
              <div className="flex flex-col gap-1">
                <span className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider font-encode">ASPI</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white font-mono">23,500.00</span>
                <div className="flex items-center gap-1 mt-1">
                  <Icons.ArrowDown className="w-2 h-2 sm:w-3 sm:h-3 text-red-400" />
                  <span className="text-[10px] sm:text-xs font-semibold text-red-400">-0.71%</span>
                </div>
              </div>
            </div>

            {/* S&P SL20 Card */}
            <div className=" p-2 sm:p-3 md:p-4 hover:border-white/20 transition-all">
              <div className="flex flex-col gap-1">
                <span className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider font-encode">S&P SL20</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white font-mono">23,500.00</span>
                <div className="flex items-center gap-1 mt-1">
                  <Icons.ArrowUp className="w-2 h-2 sm:w-3 sm:h-3 text-green-400" />
                  <span className="text-[10px] sm:text-xs font-semibold text-green-400">+0.45%</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        <div className="h-auto lg:h-[75%] flex flex-col lg:flex-row p-2 sm:p-3 md:p-4 gap-3 sm:gap-4">

           {/* Top Gainers Section */}
          <div className="flex-1 min-h-[300px] lg:min-h-0">
            <div className="h-full flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <div className="p-1 sm:p-1.5 rounded-lg bg-green-500/10">
                  <Icons.TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-100 uppercase tracking-wide font-encode">Top Gainers</h3>
              </div>
              
              <div className="flex-1 bg-gradient-to-br from-[#0F1729] to-[#0a1120] rounded-xl border border-white/5 overflow-hidden">
                <div className="h-full overflow-y-auto hide-scrollbar">
                  {MOCK_GAINERS.slice(0, 10).map((item, index) => (
                    <div 
                      key={item.symbol}
                      className="flex items-center justify-between px-2 sm:px-3 md:px-4 py-2 sm:py-3 hover:bg-green-500/5 transition-all border-b border-white/[0.03] last:border-0 group"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-green-400 transition-colors">{item.symbol}</span>
                          <span className="text-[8px] sm:text-[9px] text-gray-500 truncate max-w-[80px] sm:max-w-[100px]">{item.name}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-0.5">
                        <span className="text-[10px] sm:text-xs font-mono text-gray-300">${item.price}</span>
                        <div className="flex items-center gap-1">
                          <Icons.ArrowUp className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-green-400" />
                          <span className="text-[8px] sm:text-[10px] font-bold text-green-400">{item.change}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Losers Section */}
          <div className="flex-1 min-h-[300px] lg:min-h-0">
            <div className="h-full flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <div className="p-1 sm:p-1.5 rounded-lg bg-red-500/10">
                  <Icons.TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-100 uppercase tracking-wide font-encode">Top Losers</h3>
              </div>
              
              <div className="flex-1 bg-gradient-to-br from-[#0F1729] to-[#0a1120] rounded-xl border border-white/5 overflow-hidden">
                <div className="h-full overflow-y-auto hide-scrollbar">
                  {MOCK_LOSERS.slice(0, 10).map((item, index) => (
                    <div 
                      key={item.symbol}
                      className="flex items-center justify-between px-2 sm:px-3 md:px-4 py-2 sm:py-3 hover:bg-red-500/5 transition-all border-b border-white/[0.03] last:border-0 group"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-red-400 transition-colors">{item.symbol}</span>
                          <span className="text-[8px] sm:text-[9px] text-gray-500 truncate max-w-[80px] sm:max-w-[100px]">{item.name}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-0.5">
                        <span className="text-[10px] sm:text-xs font-mono text-gray-300">${item.price}</span>
                        <div className="flex items-center gap-1">
                          <Icons.ArrowDown className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-red-400" />
                          <span className="text-[8px] sm:text-[10px] font-bold text-red-400">{item.change}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}