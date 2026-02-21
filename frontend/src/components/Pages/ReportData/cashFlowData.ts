export type CashFlowRow = {
  label: string;
  value: number;
};

export type Year = "2020" | "2021" | "2022" | "2023" | "2024";

export const cashFlowDataByYear: Record<Year, CashFlowRow[]> = {
  2020: [
    { label: "Net Cash Flow", value: 1234567890 },
    { label: "Cash Flow From Operating Activities", value: 1567890123 },
    { label: "Cash Flow Used In Investing Activities", value: -456789012 },
  ],
  2021: [
    { label: "Net Cash Flow", value: 1345678901 },
    { label: "Cash Flow From Operating Activities", value: 1678901234 },
    { label: "Cash Flow Used In Investing Activities", value: -478901234 },
  ],
  2022: [
    { label: "Net Cash Flow", value: 1456789012 },
    { label: "Cash Flow From Operating Activities", value: 1789012345 },
    { label: "Cash Flow Used In Investing Activities", value: -501234567 },
  ],
  2023: [
    { label: "Net Cash Flow", value: 1567890123 },
    { label: "Cash Flow From Operating Activities", value: 1890123456 },
    { label: "Cash Flow Used In Investing Activities", value: -523456789 },
  ],
  2024: [
    { label: "Net Cash Flow", value: 1678901234 },
    { label: "Cash Flow From Operating Activities", value: 2001234567 },
    { label: "Cash Flow Used In Investing Activities", value: -545678901 },
  ],
};

export const years: Year[] = ["2020", "2021", "2022", "2023", "2024"];
