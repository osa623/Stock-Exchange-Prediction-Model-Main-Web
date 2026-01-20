"use client";
import { useState } from "react";

/* ---------------- MOCK DATA ---------------- */
const mockStockData = [
  { symbol: "JKH.N0000", name: "John Keells Holdings", industry: "Diversified", price: 210, qty: 100, avgPrice: 180, totalCost: 18000, sales: 21000, unrealizedGL: 3000, glToday: 250 },
  { symbol: "JKH.N0000", name: "John Keells Holdings", industry: "Diversified", price: 210, qty: 80, avgPrice: 195, totalCost: 15600, sales: 16800, unrealizedGL: 1200, glToday: 90 },
  { symbol: "JKH.N0000", name: "John Keells Holdings", industry: "Diversified", price: 210, qty: 60, avgPrice: 205, totalCost: 12300, sales: 12600, unrealizedGL: 300, glToday: 40 },
  { symbol: "HNB.N0000", name: "Hatton National Bank", industry: "Bank", price: 285, qty: 40, avgPrice: 270, totalCost: 10800, sales: 11400, unrealizedGL: 600, glToday: 60 },
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
  const [portfolios, setPortfolios] = useState<string[]>(["Default Portfolio"]);
  const [selectedPortfolio, setSelectedPortfolio] = useState("Default Portfolio");
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

  const addPortfolio = () => {
    if (!portfolioName) return;
    setPortfolios((prev) => [...prev, portfolioName]);
    setSelectedPortfolio(portfolioName);
    setPortfolioName("");
    setMode(null);
    setShowCreate(false);
  };

  return (
    <section className="relative flex flex-col w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10 h-full">
      {/* HEADER */}
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-xs font-bold text-[#B28D41] uppercase tracking-widest">
          Financial Analysis
        </h2>
        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-extrabold text-[#c7cbd0]">{selectedPortfolio}</h3>

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

      {/* TABLE */}
      <div className="bg-[#121C33] rounded-xl border border-white/5 overflow-hidden">
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

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mb-6">
        {/* Industry pie */}
        <div className="bg-[#0F1729]/80 p-4 rounded border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-gray-200">Industry Distribution</div>
            <div className="text-xs text-gray-400">by invested amount</div>
          </div>
          {Object.keys(industryAgg).length === 0 ? (
            <div className="text-gray-400">No data</div>
          ) : (
            <div className="flex gap-4 items-center">
              <div
                className="w-40 h-40 rounded-full"
                style={{
                  background: makeGradient(
                    Object.entries(industryAgg).map(([k, v], i) => ({ label: k, value: v, color: palette(i) }))
                  ),
                }}
              />
              <div className="flex-1">
                <ul className="space-y-2">
                  {Object.entries(industryAgg).map(([k, v], i) => (
                    <li key={k} className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded" style={{ background: palette(i) }} />
                      <span className="text-sm text-gray-200 flex-1">{k}</span>
                      <span className="text-sm text-gray-200">{v.toLocaleString()}</span>
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
            <div className="text-sm font-semibold text-gray-200">Invested Amounts</div>
            <div className="text-xs text-gray-400">per stock (total cost)</div>
          </div>
          {Object.keys(stockAgg).length === 0 ? (
            <div className="text-gray-400">No data</div>
          ) : (
            <div className="flex gap-4 items-center">
              <div
                className="w-40 h-40 rounded-full"
                style={{
                  background: makeGradient(
                    Object.values(stockAgg).map((s, i) => ({ label: s.name, value: s.value, color: palette(i) }))
                  ),
                }}
              />
              <div className="flex-1">
                <ul className="space-y-2 max-h-40 overflow-auto">
                  {Object.entries(stockAgg).map(([k, s], i) => (
                    <li key={k} className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded" style={{ background: palette(i) }} />
                      <span className="text-sm text-gray-200 flex-1">{s.name} ({k})</span>
                      <span className="text-sm text-gray-200">{s.value.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
    <div className="bg-[#0F1729]/10 p-4 rounded border border-white/5">
      <div className="text-xs text-gray-400 uppercase">{title}</div>
      <div className={`mt-2 text-lg font-extrabold ${color}`}>{value}</div>
    </div>
  );
}
