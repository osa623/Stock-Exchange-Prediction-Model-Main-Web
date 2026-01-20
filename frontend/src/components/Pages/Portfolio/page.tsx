"use client";
import { useState } from "react";

/* ---------------- MOCK DATA ---------------- */
const mockStockData = [
  { symbol: "JKH.N0000", name: "John Keells Holdings", industry: "Diversified", price: 210, qty: 100, avgPrice: 180, totalCost: 18000, sales: 21000, unrealizedGL: 3000, glToday: 250 },
  { symbol: "AAIC.N0000", name: "Softlogic Life Insuarance", industry: "Finance", price: 210, qty: 80, avgPrice: 195, totalCost: 15600, sales: 16800, unrealizedGL: 1200, glToday: 90 },
  { symbol: "APLA.N0000", name: "ACL Plastic", industry: "Materials", price: 210, qty: 60, avgPrice: 205, totalCost: 12300, sales: 12600, unrealizedGL: 300, glToday: 40 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", price: 285, qty: 40, avgPrice: 270, totalCost: 10800, sales: 11400, unrealizedGL: -600, glToday: -60 },
  { symbol: "HAYC.N0000", name: "Haycarb", industry: "Manufacturing", price: 210, qty: 120, avgPrice: 175, totalCost: 21000, sales: 25200, unrealizedGL: 4200, glToday: 310 },
];

/* ---------------- COLUMN WIDTHS ---------------- */
const colWidths = {
  symbol: "w-[8%]",
  name: "w-[18%]",
  industry: "w-[10%]",
  price: "w-[8%]",
  qty: "w-[8%]",
  avgPrice: "w-[8%]",
  totalCost: "w-[10%]",
  sales: "w-[10%]",
  unrealizedGL: "w-[10%]",
  glToday: "w-[10%]",
};

/* ---------------- COMPONENT ---------------- */
export default function Portfolio() {
  const [portfolios, setPortfolios] = useState<string[]>(["Sample Portfolio"]);
  const [selectedPortfolio, setSelectedPortfolio] = useState("Sample Portfolio");
  const [showCreate, setShowCreate] = useState(false);
  const [portfolioName, setPortfolioName] = useState("");
  const [mode, setMode] = useState<"manual" | "excel" | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  


  const totals = mockStockData.reduce(
    (acc, r) => {
      acc.unrealizedGL += r.unrealizedGL;
      acc.totalGLToday += r.glToday;
      acc.totalCost += r.totalCost;
      acc.sales += r.sales;
      return acc;
    },
    { unrealizedGL: 0, totalGLToday: 0, totalCost: 0, sales: 0 }
  );

  // Aggregations for charts
  const industryAgg = mockStockData.reduce((acc: Record<string, number>, r) => {
    acc[r.industry] = (acc[r.industry] || 0) + r.totalCost;
    return acc;
  }, {});

  const stockAgg = mockStockData.reduce((acc: Record<string, { name: string; value: number }>, r) => {
    const key = r.symbol;
    if (!acc[key]) acc[key] = { name: r.name, value: 0 };
    acc[key].value += r.totalCost;
    return acc;
  }, {});

  const palette = (i: number) => `hsl(${(i * 57) % 360} 70% 55%)`;

  const makeGradient = (items: { label: string; value: number; color: string }[]) => {
    const total = items.reduce((s, i) => s + i.value, 0);
    if (total === 0) return "gray";
    let start = 0;
    const stops = items.map((it) => {
      const pct = (it.value / total) * 100;
      const from = start;
      start += pct;
      return `${it.color} ${from.toFixed(2)}% ${start.toFixed(2)}%`;
    });
    return `conic-gradient(${stops.join(", ")})`;
  };

  // 3D-looking pie: stacked layers of the same conic-gradient, each darkened
  function Pie3D({
    items,
    size = 170,
    depth = 14,
  }: {
    items: { label: string; value: number; color: string }[];
    size?: number;
    depth?: number;
  }) {
    const total = items.reduce((s, i) => s + i.value, 0);
    if (total === 0) return <div className="text-gray-400">No data</div>;

    const gradient = `conic-gradient(${items
      .map((it, i) => {
        const from = items.slice(0, i).reduce((s, v) => s + v.value, 0);
        const start = (from / total) * 100;
        const end = ((from + it.value) / total) * 100;
        return `${it.color} ${start}% ${end}%`;
      })
      .join(", ")})`;

    return (
      <div style={{ width: size, height: size + depth }}>
        <div
          style={{
            position: "relative",
            width: size,
            height: size,
            transform: "rotateX(58deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {Array.from({ length: depth }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: i,
                width: size,
                height: size,
                borderRadius: "50%",
                background: gradient,
                filter: "brightness(0.9)",
              }}
            />
          ))}

          {/* top face */}
          <div
            style={{
              position: "absolute",
              top: 0,
              width: size,
              height: size,
              borderRadius: "50%",
              background: gradient,
              boxShadow: "0 18px 40px rgba(0,0,0,0.7)",
            }}
          />

          {/* glossy highlight */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.12), transparent 45%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    );
  }


  // generate N dark colors (HSL with low lightness)
  const generateDynamicPalette = (n: number) => {
    if (n <= 0) return [];

    return Array.from({ length: n }).map((_, i) => {
      const hue = Math.round((360 / n) * i);
      const saturation = 65;
      const lightness = i % 2 === 0 ? 44 : 54; // alternating for clarity

      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
  };






  // build chart items with dark colors (used by Pie3D and legend)
  const industryItems = (() => {
    const entries = Object.entries(industryAgg);
    const colors = generateDynamicPalette(entries.length);

    return entries.map(([k, v], i) => ({
      label: k,
      value: v,
      color: colors[i],
    }));
  })();


  const stockItems = (() => {
    const entries = Object.values(stockAgg);
    const colors = generateDynamicPalette(entries.length);

    return entries.map((s, i) => ({
      label: s.name,
      value: s.value,
      color: colors[i],
    }));
  })();




  const addPortfolio = () => {
    if (!portfolioName) return;
    setPortfolios((prev) => [...prev, portfolioName]);
    setSelectedPortfolio(portfolioName);
    setPortfolioName("");
    setMode(null);
    setShowCreate(false);
  };

  // aggregate per-symbol unrealized and today values for bar charts
  const perSymbol = Object.values(
    mockStockData.reduce((acc: Record<string, any>, r) => {
      const key = r.symbol;
      if (!acc[key]) acc[key] = { symbol: key, name: r.name, unrealizedGL: 0, glToday: 0 };
      acc[key].unrealizedGL += r.unrealizedGL;
      acc[key].glToday += r.glToday;
      return acc;
    }, {})
  );

  const unrealizedItems = perSymbol.map((s: any) => ({
    label: `(${s.symbol})`,
    value: s.unrealizedGL,
  }));

  const glTodayItems = perSymbol.map((s: any) => ({
    label: s.symbol,
    value: s.glToday,
  }));


  function BarChart({ items, maxWidth = 320 }: { items: { label: string; value: number }[]; maxWidth?: number }) {
    const maxAbs = Math.max(1, ...items.map((i) => Math.abs(i.value)));
    return (
      <div>
        <ul className="space-y-3">
          {items.map((it) => {
            const pct = Math.round((Math.abs(it.value) / maxAbs) * 100);
            const positive = it.value >= 0;
            return (
              <li key={it.label} className="flex items-center gap-3">
                <div className="text-sm text-gray-200 w-48">{it.label}</div>
                <div className="flex-1">
                  <div className="bg-white/5 h-4 rounded overflow-hidden">
                    <div
                      className={`h-4 rounded ${positive ? 'bg-green-500' : 'bg-red-500'}`}
                      style={{ width: `${pct}%`, maxWidth }}
                    />
                  </div>
                </div>
                <div className={`ml-3 text-sm font-mono ${positive ? 'text-green-300' : 'text-red-300'}`}>{it.value}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  // build a quick lookup of first occurrence per symbol for base metrics
  const symbolBase: Record<string, any> = {};
  for (const r of mockStockData) {
    if (!symbolBase[r.symbol]) symbolBase[r.symbol] = r;
  }
  // mocked dataset for metrics (P/E, P/B, NAV, DCF, TARGET, avgPrice)
  const metricsDataset: Record<string, { pe: number; pb: number; nav: number; dcf: number; target: number; avgPrice?: number }> = {
    'JKH.N0000': { pe: 12.4, pb: 1.8, nav: 150.0, dcf: 220.0, target: 250.0, avgPrice: 190 },
    'HNB.N0000': { pe: 9.6, pb: 0.95, nav: 260.0, dcf: 300.0, target: 330.0, avgPrice: 272 },
    'HAYC.N0000': { pe: 15.2, pb: 2.1, nav: 120.0, dcf: 230.0, target: 260.0, avgPrice: 178 },
  };

  const portfolioStocks = Object.keys(stockAgg).map((symbolKey) => {
    const s = stockAgg[symbolKey];
    const base = symbolBase[symbolKey] || Object.values(symbolBase)[0];
    const price = base?.price ?? 0;
    const dataset = metricsDataset[symbolKey];
    const avgPrice = dataset?.avgPrice ?? base?.avgPrice ?? (base?.totalCost && base?.qty ? base.totalCost / base.qty : 0);
    const pe = dataset?.pe ?? +(price / Math.max(0.01, avgPrice / 10)).toFixed(2);
    const pb = dataset?.pb ?? +(price / Math.max(0.01, avgPrice)).toFixed(2);
    const nav = dataset?.nav ?? +avgPrice.toFixed(2);
    const dcf = dataset?.dcf ?? +(price * 1.05).toFixed(2);
    const target = dataset?.target ?? +(price * 1.15).toFixed(2);
    return { symbol: base?.symbol ?? symbolKey, name: base?.name ?? s.name, avgPrice, pe, pb, nav, dcf, target };
  });

  // WIN RATE CALCULATION
  const winRate = Math.round(
    (mockStockData.filter((s) => s.unrealizedGL > 0).length / mockStockData.length) * 100
  );

  // GAINERS & LOSERS
  const gainers = mockStockData
    .filter((s) => s.unrealizedGL > 0)
    .sort((a, b) => b.unrealizedGL - a.unrealizedGL)
    .slice(0, 5);

  const losers = mockStockData
    .filter((s) => s.unrealizedGL < 0)
    .sort((a, b) => a.unrealizedGL - b.unrealizedGL)
    .slice(0, 5);

  // Speedometer needle calculations
  const radius = 60;
  const cx = 75;
  const cy = 100;

  // Clamp winRate
  const value = Math.max(0, Math.min(100, winRate));

  // Convert value (0–100) to angle (-180° to 0°)
  const angle = (-180 + (value / 100) * 180) * (Math.PI / 180);

  // Needle end
  const needleX = cx + radius * Math.cos(angle);
  const needleY = cy + radius * Math.sin(angle);



  return (
    <section className="relative flex flex-col w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 h-full">
      {/* HEADER */}
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-xs sm:text-sm font-bold px-1 text-[#B28D41] uppercase tracking-widest font-encode">
          BUYZONLABS
        </h2>
        <div className="flex items-end justify-between">
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DFBD69] to-[#ffffff] mb-2 font-encode">{selectedPortfolio}</h3>

          <div className="flex items-center gap-3">
            {/* DROPDOWN */}
            <select
              value={selectedPortfolio}
              onChange={(e) => setSelectedPortfolio(e.target.value)}
              className="bg-[#121C33] border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-200"
            >
              {portfolios.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </select>

            {/* CREATE BUTTON */}
            <button
              onClick={() => setShowCreate(true)}
              className="bg-[#B28D41] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90"
            >
              + Create Portfolio
            </button>
          </div>
        </div>
      </div>
      

      {/* SUMMARY BOXES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Summary title="Unrealized G/L" value={totals.unrealizedGL} colored />
        <Summary title="Total G/L Today" value={totals.totalGLToday} colored />
        <Summary title="Total Cost" value={totals.totalCost} />
        <Summary title="Total Sales" value={totals.sales} />
      </div>

      {/* Gainers / Losers + Win Rate Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left: Gainers & Losers */}
          <div className="bg-[#0F1729]/80 p-4 rounded border border-white/5">
            <h3 className="text-sm font-semibold text-gray-200 mb-3">Gainers & Losers</h3>
            <div className="grid grid-cols-2 gap-10">
              {/* Gainers */}
              <div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Gainers</div>
                <ul className="space-y-1 max-h-32 overflow-auto">
                  {gainers.length === 0 ? (
                    <li className="text-gray-400">No gainers</li>
                  ) : (
                    gainers.map((s) => (
                      <li key={s.symbol} className="text-sm text-green-500 flex justify-between">
                        <span>{s.symbol}</span>
                        <span>{s.unrealizedGL}</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>

              {/* Losers */}
              <div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Losers</div>
                <ul className="space-y-1 max-h-32 overflow-auto">
                  {losers.length === 0 ? (
                    <li className="text-gray-400">No losers</li>
                  ) : (
                    losers.map((s) => (
                      <li key={s.symbol} className="text-sm text-red-500 flex justify-between">
                        <span>{s.symbol}</span>
                        <span>{s.unrealizedGL}</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>

    {/* Win Rate Speedometer */}
    <div className="bg-[#0F1729]/80 p-4 rounded border border-white/5 flex flex-col items-center justify-center">
      <div className="text-sm font-semibold text-gray-200 mb-3">My Win Rate</div>

      <svg width="150" height="100" viewBox="0 0 150 105">
        {/* Background arc */}
        <path
          d="M15,100 A60,60 0 0 1 135,100"
          fill="none"
          stroke="#ffffff22"
          strokeWidth="12"
          pathLength="100"
        />

        {/* Red zone (0–40) */}
        <path
          d="M15,100 A60,60 0 0 1 135,100"
          fill="none"
          stroke="#e21919"
          strokeWidth="12"
          pathLength="100"
          strokeDasharray="40 60"
        />

        {/* Yellow zone (40–70) */}
        <path
          d="M15,100 A60,60 0 0 1 135,100"
          fill="none"
          stroke="#ffcc00"
          strokeWidth="12"
          pathLength="100"
          strokeDasharray="30 70"
          strokeDashoffset="-40"
        />

        {/* Green zone (70–100) */}
        <path
          d="M15,100 A60,60 0 0 1 135,100"
          fill="none"
          stroke="#00d688"
          strokeWidth="12"
          pathLength="100"
          strokeDasharray="30 70"
          strokeDashoffset="-70"
        />

        {/* Needle */}
        <line
          x1={cx}
          y1={cy}
          x2={needleX}
          y2={needleY}
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Center dot */}
        <circle cx={cx} cy={cy} r="4" fill="#ffffff" />

        {/* Percentage */}
        <text
          x="75"
          y="85"
          fill="#e5e7eb"
          fontSize="18"
          fontWeight="bold"
          textAnchor="middle"
        >
          {value}%
        </text>
      </svg>
    </div>




  </div>


      {/* TABLE */}
      <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden ">
        {/* TABLE HEADER */}
        <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 bg-[#0F1729]/80">
          <div className={`${colWidths.symbol} text-xs font-semibold text-gray-400 uppercase`}>Symbol</div>
          <div className={`${colWidths.name} text-xs font-semibold text-gray-400 uppercase`}>Company</div>
          <div className={`${colWidths.industry} text-xs font-semibold text-gray-400 uppercase`}>Industry</div>
          <div className={`${colWidths.price} text-xs font-semibold text-gray-400 uppercase`}>Price</div>
          <div className={`${colWidths.qty} text-xs font-semibold text-gray-400 uppercase`}>Qty</div>
          <div className={`${colWidths.avgPrice} text-xs font-semibold text-gray-400 uppercase`}>Avg Price</div>
          <div className={`${colWidths.totalCost} text-xs font-semibold text-gray-400 uppercase`}>Total Cost</div>
          <div className={`${colWidths.sales} text-xs font-semibold text-gray-400 uppercase`}>Sales</div>
          <div className={`${colWidths.unrealizedGL} text-xs font-semibold text-gray-400 uppercase`}>Unrealized G/L</div>
          <div className={`${colWidths.glToday} text-xs font-semibold text-gray-400 uppercase`}>G/L Today</div>
        </div>

        {/* TABLE BODY */}
        <div className="flex flex-col max-h-[600px] overflow-y-auto hide-scrollbar">
          {mockStockData.map((row, idx) => (
            <div key={idx} className="flex w-full items-center px-4 sm:px-6 py-4 border-b border-white/[0.03] hover:bg-white/[0.02]">
              <div className={`${colWidths.symbol} text-sm font-mono text-gray-300`}>{row.symbol}</div>
              <div className={`${colWidths.name} text-sm font-bold text-gray-200`}>{row.name}</div>
              <div className={`${colWidths.industry} text-sm text-gray-400`}>{row.industry}</div>
              <div className={`${colWidths.price} text-sm font-mono text-gray-300`}>{row.price}</div>
              <div className={`${colWidths.qty} text-sm font-mono text-gray-300`}>{row.qty}</div>
              <div className={`${colWidths.avgPrice} text-sm font-mono text-gray-300`}>{row.avgPrice}</div>
              <div className={`${colWidths.totalCost} text-sm font-mono text-gray-300`}>{row.totalCost}</div>
              <div className={`${colWidths.sales} text-sm font-mono text-gray-400`}>{row.sales}</div>
              <div className={`${colWidths.unrealizedGL} text-sm font-mono ${row.unrealizedGL >= 0 ? "text-green-400" : "text-red-400"}`}>
                {row.unrealizedGL}
              </div>
              <div className={`${colWidths.glToday} text-sm font-mono ${row.glToday >= 0 ? "text-green-400" : "text-red-400"}`}>
                {row.glToday}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Stock Valuations */}
      <div className="mt-10 mb-8">
        <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden">
          <div className="px-4 sm:px-6 py-3 bg-[#0F1729]/80 border-b border-gray-800/60 flex items-center">
            <h3 className="text-base font-semibold text-[#B28D41] uppercase tracking-wider">Valuations For Owned Stocks</h3>
          </div>

          <div className="flex w-full border-b border-gray-800/60 px-4 sm:px-6 py-4 bg-[#0F1729]/80">
            <div className="w-[10%] text-xs font-semibold text-gray-400 uppercase">Ticker</div>
            <div className="w-[28%] text-xs font-semibold text-gray-400 uppercase">Name</div>
            <div className="w-[10%] text-xs font-semibold text-gray-400 uppercase">Avg Price</div>
            <div className="w-[8%] text-xs font-semibold text-gray-400 uppercase">P/E</div>
            <div className="w-[8%] text-xs font-semibold text-gray-400 uppercase">P/B</div>
            <div className="w-[12%] text-xs font-semibold text-gray-400 uppercase">NAV</div>
            <div className="w-[12%] text-xs font-semibold text-gray-400 uppercase">DCF</div>
            <div className="w-[12%] text-xs font-semibold text-gray-400 uppercase">TARGET</div>
          </div>

          <div className="flex flex-col max-h-[400px] overflow-y-auto hide-scrollbar">
            {portfolioStocks.map((row: any, idx: number) => (
              <div key={idx} className="flex w-full items-center px-4 sm:px-6 py-3 border-b border-white/[0.03] hover:bg-white/[0.02]">
                <div className="w-[10%] text-sm font-mono text-gray-300">{row.symbol}</div>
                <div className="w-[28%] text-sm font-bold text-gray-200">{row.name}</div>
                <div className="w-[10%] text-sm font-mono text-gray-300">{row.avgPrice}</div>
                <div className="w-[8%] text-sm font-mono text-gray-300">{row.pe}</div>
                <div className="w-[8%] text-sm font-mono text-gray-300">{row.pb}</div>
                <div className="w-[12%] text-sm font-mono text-gray-300">{row.nav}</div>
                <div className="w-[12%] text-sm font-mono text-gray-300">{row.dcf}</div>
                <div className="w-[12%] text-sm font-mono text-gray-300">{row.target}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mb-6">
        {/* Industry pie */}
        <div className="bg-[#0F1729]/80 p-4 rounded border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-[#B28D41] uppercase tracking-wider">Industry Distribution</div>
            <div className="text-xs text-gray-400">by invested amount</div>
          </div>
          {industryItems.length === 0 ? (
            <div className="text-gray-400">No data</div>
          ) : (
            <div className="flex gap-4 items-center">
              <div>
                <Pie3D items={industryItems} size={160} depth={8} />
              </div>
              <div className="flex-1">
                <ul className="space-y-2">
                  {industryItems.map((it, i) => (
                    <li key={it.label} className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded" style={{ background: it.color }} />
                      <span className="text-sm text-gray-200 flex-1">{it.label}</span>
                      <span className="text-sm text-gray-200">{it.value.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Stock invested amounts pie */}
        <div className="bg-[#0F1729]/80 p-4 rounded border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-[#B28D41] uppercase tracking-wider">Invested Amounts</div>
            <div className="text-xs text-gray-400">per stock (total cost)</div>
          </div>
          {stockItems.length === 0 ? (
            <div className="text-gray-400">No data</div>
          ) : (
            <div className="flex gap-4 items-center">
              <div>
                <Pie3D items={stockItems} size={160} depth={8} />
              </div>
              <div className="flex-1">
                <ul className="space-y-2 max-h-40 overflow-auto">
                  {stockItems.map((s, i) => (
                    <li key={s.label + i} className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded" style={{ background: s.color }} />
                      <span className="text-sm text-gray-200 flex-1">{s.label}</span>
                      <span className="text-sm text-gray-200">{s.value.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BAR CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 mb-6">
        <div className="bg-[#0F1729]/80 p-4 rounded border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-[#B28D41] uppercase tracking-wider">Unrealized Gain / Loss</div>
            <div className="text-xs text-gray-400">total unrealized gain/loss</div>
          </div>
          {unrealizedItems.length === 0 ? (
            <div className="text-gray-400">No data</div>
          ) : (
            <BarChart items={unrealizedItems} />
          )}
        </div>

        <div className="bg-[#0F1729]/80 p-4 rounded border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-[#B28D41] uppercase tracking-wider">Unrealized Gain / Loss Today</div>
            <div className="text-xs text-gray-400">gain/loss for today</div>
          </div>
          {glTodayItems.length === 0 ? (
            <div className="text-gray-400">No data</div>
          ) : (
            <BarChart items={glTodayItems} />
          )}
        </div>
      </div>

      

      {/* CREATE PORTFOLIO MODAL */}
      {showCreate && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="w-full max-w-3xl bg-[#121C33] rounded-xl border border-white/10 p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Create Portfolio</h2>
              <button onClick={() => setShowCreate(false)}>✕</button>
            </div>

            <input
              value={portfolioName}
              onChange={(e) => setPortfolioName(e.target.value)}
              placeholder="Portfolio name"
              className="w-full mb-6 bg-[#0b1220] px-4 py-3 rounded border border-white/10"
            />

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => setMode("manual")}
                className={`p-6 rounded-xl border font-semibold ${mode === "manual" ? "bg-[#B28D41] text-black" : "border-white/10"}`}
              >
                Add Manually
              </button>
              <button
                onClick={() => setMode("excel")}
                className={`p-6 rounded-xl border font-semibold ${mode === "excel" ? "bg-[#B28D41] text-black" : "border-white/10"}`}
              >
                Add with Excel
              </button>
            </div>

            {mode === "manual" && (
            <div className="grid grid-cols-2 gap-4 mb-6">
                <input className="input" placeholder="Symbol" />
                <input className="input" placeholder="Company Name" />
                <input className="input" placeholder="Industry" />
                <input className="input" placeholder="Price" type="number" />
                <input className="input" placeholder="Quantity" type="number" />
                <input className="input" placeholder="Average Price" type="number" />
                <input className="input" placeholder="Total Cost" type="number" />
                <input className="input" placeholder="Sales" type="number" />
              
            </div>
            )}


            {mode === "excel" && (
            <div
                className="mb-6 relative border-2 border-dashed border-white/30 rounded-xl h-40 flex flex-col items-center justify-center text-center text-gray-400 hover:border-white/50 transition-colors cursor-pointer"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file && (file.name.endsWith(".xlsx") || file.name.endsWith(".xls"))) {
                    setSelectedFile(file); // save the file to state
                } else {
                    alert("Please drop a valid Excel file (.xlsx or .xls)");
                }
                }}
            >
                {selectedFile ? (
                <p className="text-gray-200">{selectedFile.name}</p>
                ) : (
                <>
                    <p className="text-gray-400 mb-2">Drag & drop your Excel file here</p>
                    <p className="text-gray-500 text-sm">or click to select a file</p>
                </>
                )}
                <input
                type="file"
                accept=".xlsx,.xls"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setSelectedFile(file);
                }}
                />
            </div>
            )}



            <button
              disabled={!portfolioName || !mode}
              onClick={addPortfolio}
              className="w-full bg-[#B28D41] text-black py-3 rounded font-semibold disabled:opacity-50"
            >
              Finish Creation
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- SUMMARY COMPONENT ---------------- */
function Summary({ title, value, colored = false }: any) {
  const color = colored ? (value >= 0 ? "text-green-400" : "text-red-400") : "text-gray-200";
  return (
    <div className="bg-[#0F1729]/80 p-4 rounded border border-white/5">
      <div className="text-xs text-gray-400 uppercase">{title}</div>
      <div className={`mt-2 text-lg font-extrabold ${color}`}>{value}</div>
    </div>
  );
}
