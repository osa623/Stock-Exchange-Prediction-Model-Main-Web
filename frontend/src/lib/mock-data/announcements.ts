export interface AnnouncementItem {
  id: string;
  symbol: string;
  companyName: string;
  title: string;
  category: "Financial" | "Corporate Actions" | "Circulars" | "Board Changes" | "Compliance" | "New Listings" | "Regulatory";
  date: string;
  summary: string;
  documentUrl?: string;
  isImportant?: boolean;
}

export const MOCK_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: "ann-1",
    symbol: "COMB.N0000",
    companyName: "Commercial Bank of Ceylon PLC",
    title: "Interim Financial Statements for the Quarter Ended 30th June 2026",
    category: "Financial",
    date: "2026-07-22",
    summary: "Commercial Bank reports a 18.2% YoY growth in profit after tax to LKR 9.2 Billion for Q2 2026, driven by net interest margin expansion.",
    isImportant: true,
  },
  {
    id: "ann-2",
    symbol: "JKH.N0000",
    companyName: "John Keells Holdings PLC",
    title: "Declaration of First Interim Dividend for Financial Year 2026/27",
    category: "Corporate Actions",
    date: "2026-07-21",
    summary: "The Board of Directors has approved an interim dividend of LKR 1.75 per share payable on 12th August 2026.",
    isImportant: true,
  },
  {
    id: "ann-3",
    symbol: "HAYL.N0000",
    companyName: "Hayleys PLC",
    title: "Appointment of Independent Non-Executive Director",
    category: "Board Changes",
    date: "2026-07-20",
    summary: "Hayleys PLC announces the appointment of Dr. R. Perera as an Independent Non-Executive Director with effect from 1st August 2026.",
    isImportant: false,
  },
  {
    id: "ann-4",
    symbol: "SLTL.N0000",
    companyName: "Sri Lanka Telecom PLC",
    title: "Compliance Notice - Minimum Public Holding Requirement",
    category: "Compliance",
    date: "2026-07-19",
    summary: "Company confirms full compliance with CSE Rule 7.13.1 regarding minimum public float requirements as of June 30, 2026.",
    isImportant: false,
  },
  {
    id: "ann-5",
    symbol: "DIAL.N0000",
    companyName: "Dialog Axiata PLC",
    title: "Circular to Shareholders - Extraordinary General Meeting",
    category: "Circulars",
    date: "2026-07-18",
    summary: "Notice is hereby given for an EGM to be held on 15th August 2026 to approve strategic investment initiatives in fiber network infrastructure.",
    isImportant: false,
  },
  {
    id: "ann-6",
    symbol: "CTC.N0000",
    companyName: "Ceylon Tobacco Company PLC",
    title: "Un-audited Financial Results - Q2 2026",
    category: "Financial",
    date: "2026-07-17",
    summary: "Revenue reached LKR 41.5 Billion with net profit of LKR 6.8 Billion for the second quarter.",
    isImportant: true,
  },
  {
    id: "ann-7",
    symbol: "LIOC.N0000",
    companyName: "Lanka IOC PLC",
    title: "Update on Bunkering Operations Expansion",
    category: "Regulatory",
    date: "2026-07-15",
    summary: "Lanka IOC receives regulatory approval from Sri Lanka Ports Authority for deep-sea bunkering terminal expansion at Hambantota Port.",
    isImportant: true,
  }
];
