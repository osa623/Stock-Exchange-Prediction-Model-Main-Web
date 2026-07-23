export interface AIInsightItem {
  id: string;
  symbol: string;
  companyName: string;
  title: string;
  type: "Bullish Signal" | "Health Warning" | "Efficiency Gain" | "Dividend Trend" | "Solvency Risk";
  confidence: number; // Percentage
  summary: string;
  impactMetrics: { name: string; value: string; trend: "up" | "down" | "neutral" }[];
  date: string;
}

export const MOCK_INSIGHTS: AIInsightItem[] = [
  {
    id: "ins-1",
    symbol: "COMB.N0000",
    companyName: "Commercial Bank of Ceylon PLC",
    title: "Strong Tier-1 Capital Buffer Drives Financial Resilience",
    type: "Bullish Signal",
    confidence: 94,
    summary: "Commercial Bank exhibits robust liquidity coverage (165%) and ROE expansion (18.5%), outperforming sector averages during macro recovery.",
    impactMetrics: [
      { name: "ROE", value: "18.5%", trend: "up" },
      { name: "NPL Ratio", value: "3.2%", trend: "down" },
      { name: "CAR", value: "16.8%", trend: "up" },
    ],
    date: "2026-07-22",
  },
  {
    id: "ins-2",
    symbol: "CTC.N0000",
    companyName: "Ceylon Tobacco Company PLC",
    title: "Unrivaled Profit Margin & Near-Zero Debt Profile",
    type: "Dividend Trend",
    confidence: 98,
    summary: "Operating margin at 38.2% paired with 48.5% ROE supports sustainable high dividend payout policy (>90% payout ratio).",
    impactMetrics: [
      { name: "Dividend Yield", value: "8.5%", trend: "up" },
      { name: "Debt to Equity", value: "0.05", trend: "neutral" },
      { name: "Net Margin", value: "16.2%", trend: "up" },
    ],
    date: "2026-07-21",
  },
  {
    id: "ins-3",
    symbol: "JKH.N0000",
    companyName: "John Keells Holdings PLC",
    title: "West Container Terminal Capital Deployment Phase Nearing Completion",
    type: "Efficiency Gain",
    confidence: 91,
    summary: "Capital expenditure on port infrastructure is projected to unlock significant operating cash flow from FY 2027 onwards.",
    impactMetrics: [
      { name: "Asset Turnover", value: "0.45x", trend: "up" },
      { name: "Free Cash Flow", value: "LKR 32.1B", trend: "up" },
    ],
    date: "2026-07-19",
  },
  {
    id: "ins-4",
    symbol: "SLTL.N0000",
    companyName: "Sri Lanka Telecom PLC",
    title: "Leverage Monitoring Recommended Amid Infrastructure Upgrades",
    type: "Solvency Risk",
    confidence: 85,
    summary: "High capital expenditure in 5G expansion has raised Debt/Equity ratio to 0.62. Interest coverage ratio remains healthy at 4.2x.",
    impactMetrics: [
      { name: "Interest Coverage", value: "4.2x", trend: "down" },
      { name: "Debt / EBITDA", value: "2.1x", trend: "up" },
    ],
    date: "2026-07-17",
  }
];
