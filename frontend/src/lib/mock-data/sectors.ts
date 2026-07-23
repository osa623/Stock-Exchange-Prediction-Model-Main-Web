export interface SectorSummary {
  name: string;
  code: string;
  companyCount: number;
  avgRoe: number; // %
  avgRoa: number; // %
  totalRevenue: number; // In LKR Millions
  totalNetProfit: number; // In LKR Millions
  avgHealthScore: number;
  topPerformerSymbol: string;
  topPerformerName: string;
}

export const MOCK_SECTORS: SectorSummary[] = [
  {
    name: "Banks",
    code: "BNK",
    companyCount: 16,
    avgRoe: 17.4,
    avgRoa: 1.7,
    totalRevenue: 1250000,
    totalNetProfit: 142000,
    avgHealthScore: 89,
    topPerformerSymbol: "COMB.N0000",
    topPerformerName: "Commercial Bank of Ceylon PLC",
  },
  {
    name: "Capital Goods",
    code: "CGD",
    companyCount: 24,
    avgRoe: 15.1,
    avgRoa: 6.8,
    totalRevenue: 980000,
    totalNetProfit: 68000,
    avgHealthScore: 85,
    topPerformerSymbol: "JKH.N0000",
    topPerformerName: "John Keells Holdings PLC",
  },
  {
    name: "Food, Beverage & Tobacco",
    code: "FBT",
    companyCount: 25,
    avgRoe: 22.8,
    avgRoa: 12.4,
    totalRevenue: 640000,
    totalNetProfit: 74000,
    avgHealthScore: 88,
    topPerformerSymbol: "CTC.N0000",
    topPerformerName: "Ceylon Tobacco Company PLC",
  },
  {
    name: "Telecommunication Services",
    code: "TEL",
    companyCount: 2,
    avgRoe: 13.5,
    avgRoa: 6.6,
    totalRevenue: 297000,
    totalNetProfit: 26300,
    avgHealthScore: 83,
    topPerformerSymbol: "DIAL.N0000",
    topPerformerName: "Dialog Axiata PLC",
  },
  {
    name: "Materials",
    code: "MAT",
    companyCount: 23,
    avgRoe: 18.2,
    avgRoa: 10.1,
    totalRevenue: 410000,
    totalNetProfit: 39000,
    avgHealthScore: 86,
    topPerformerSymbol: "LLUB.N0000",
    topPerformerName: "Chevron Lubricants Lanka PLC",
  },
  {
    name: "Energy",
    code: "NRG",
    companyCount: 3,
    avgRoe: 21.0,
    avgRoa: 11.5,
    totalRevenue: 480000,
    totalNetProfit: 31000,
    avgHealthScore: 87,
    topPerformerSymbol: "LIOC.N0000",
    topPerformerName: "Lanka IOC PLC",
  },
];
