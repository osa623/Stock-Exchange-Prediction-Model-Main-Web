export type PositionRow = {
  label: string;
  value: number;
};

export type Year = "2020" | "2021" | "2022" | "2023" | "2024";

export const financialPositionDataByYear: Record<Year, PositionRow[]> = {
  2020: [
    { label: "Total Assets", value: 18500000000 },
    { label: "Total Liabilities", value: 12200000000 },
    { label: "Total Equity", value: 6300000000 },
    { label: "Net Asset Value", value: 6300000000 },
  ],
  2021: [
    { label: "Total Assets", value: 19500000000 },
    { label: "Total Liabilities", value: 13000000000 },
    { label: "Total Equity", value: 6500000000 },
    { label: "Net Asset Value", value: 6500000000 },
  ],
  2022: [
    { label: "Total Assets", value: 20500000000 },
    { label: "Total Liabilities", value: 13800000000 },
    { label: "Total Equity", value: 6700000000 },
    { label: "Net Asset Value", value: 6700000000 },
  ],
  2023: [
    { label: "Total Assets", value: 21800000000 },
    { label: "Total Liabilities", value: 14500000000 },
    { label: "Total Equity", value: 7300000000 },
    { label: "Net Asset Value", value: 7300000000 },
  ],
  2024: [
    { label: "Total Assets", value: 23000000000 },
    { label: "Total Liabilities", value: 15200000000 },
    { label: "Total Equity", value: 7800000000 },
    { label: "Net Asset Value", value: 7800000000 },
  ],
};

export const years: Year[] = ["2020", "2021", "2022", "2023", "2024"];
