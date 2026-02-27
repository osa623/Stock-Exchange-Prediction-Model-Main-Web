"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import {
  dataApi,
  type ExtractedDataRecord,
} from "@/lib/api";

import {
  FolderTree,
  Calendar,
  Loader2,
  AlertCircle,
  Database
} from "lucide-react";

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function extractSymbolBase(symbol: string): string {
  if (!symbol) return "";
  return symbol.split(".")[0].trim().toUpperCase();
}

const FINANCIAL_POSITION_KEYS = [
  "balance_sheet",
  "balance_sheet_statement",
  "financial_position",
  "statement_of_financial_position",
  "assets",
  "liabilities",
  "equity",
];

function filterFinancialPositionData(
  data: Record<string, unknown>
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const [key, val] of Object.entries(data)) {
    const k = key.toLowerCase().replace(/\s+/g, "_");
    if (FINANCIAL_POSITION_KEYS.some((kw) => k.includes(kw))) {
      result[key] = val;
    }
  }

  return Object.keys(result).length > 0 ? result : data;
}

// ─────────────────────────────────────────────
// Value Renderer
// ─────────────────────────────────────────────

function renderValue(val: unknown): React.ReactNode {
  if (val === null || val === undefined) {
    return <span className="text-gray-600 italic">null</span>;
  }

  if (typeof val === "number") {
    return (
      <span className="font-mono text-white">
        {val < 1 && val > -1 && val !== 0
          ? `${(val * 100).toFixed(1)}%`
          : val.toLocaleString()}
      </span>
    );
  }

  if (typeof val === "string") {
    return <span className="text-white">{val}</span>;
  }

  if (Array.isArray(val)) {
    if (val.length === 0)
      return <span className="text-gray-600 italic">[]</span>;

    if (typeof val[0] === "object") {
      const keys = Object.keys(val[0] as Record<string, unknown>);
      return (
        <div className="overflow-x-auto rounded-lg border border-gray-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800/50">
                {keys.map((k) => (
                  <th key={k} className="px-3 py-2 text-left text-gray-400">
                    {k.replace(/_/g, " ")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {val.map((item, i) => (
                <tr key={i} className="border-t border-gray-800/50">
                  {keys.map((k) => (
                    <td key={k} className="px-3 py-1.5 text-white">
                      {renderValue(
                        (item as Record<string, unknown>)[k]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <span className="text-white font-mono text-xs">
        {val.map(String).join(", ")}
      </span>
    );
  }

  if (typeof val === "object") {
    const entries = Object.entries(val as Record<string, unknown>);
    return (
      <div className="overflow-hidden rounded-lg border border-gray-800">
        <table className="w-full text-sm">
          <tbody>
            {entries.map(([k, v]) => (
              <tr
                key={k}
                className="border-t border-gray-800/50 first:border-0"
              >
                <td className="px-3 py-2 text-gray-400 font-medium">
                  {k.replace(/_/g, " ")}
                </td>
                <td className="px-3 py-2">
                  {renderValue(v)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <span className="text-white">{String(val)}</span>;
}

export default function ReportsPage() {
  const params = useParams<{ symbol?: string }>();

  const rawSymbol = params?.symbol
    ? decodeURIComponent(params.symbol)
    : null;

  // API only needs base symbol
  const symbolParam = rawSymbol
    ? extractSymbolBase(rawSymbol)
    : null;

  const [records, setRecords] = useState<ExtractedDataRecord[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedRecord, setSelectedRecord] =
    useState<ExtractedDataRecord | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load data
  useEffect(() => {
    const load = async () => {
      if (!symbolParam) return;

      try {
        setLoading(true);
        setError(null);

        const res = await dataApi.getCompanyDataByName(symbolParam);
        const fetched = res.data || [];

        setRecords(fetched);

        const uniqueYears = Array.from(
          new Set(fetched.map((r) => r.year))
        ).sort((a, b) => Number(b) - Number(a));

        setYears(uniqueYears);
      } catch (err: unknown) {
        const msg =
          err instanceof Error
            ? err.message
            : "Failed to load company data";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [symbolParam]);

  const currentYearRecords = useMemo(() => {
    if (!selectedYear) return [];
    return records.filter((r) => r.year === selectedYear);
  }, [records, selectedYear]);

  return (
    <div className="flex flex-col h-full gap-6">

      {/* Sidebar */}
      <aside className="hidden w-full shrink-0 flex-col overflow-y-auto rounded-xl border border-gray-800 bg-gray-900/30 lg:flex">
        <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
          <FolderTree className="h-5 w-5 text-cyan-400" />
          <h2 className="font-semibold text-white">Years</h2>
        </div>

        <div className="flex w-full p-2 ">
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-gray-600" />
            </div>
          ) : years.length === 0 ? (
            <p className="px-3 py-4 text-sm text-gray-600">
              No years found
            </p>
          ) : (
            years.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setSelectedYear(year);

                  const yearRecords = records.filter(
                    (r) => r.year === year
                  );

                  // 🔥 Auto-open annual_report_ocr
                  const annual = yearRecords.find(
                    (r) =>
                      r.type?.toLowerCase() ===
                      "annual_report_ocr"
                  );

                  setSelectedRecord(
                    annual ?? yearRecords[0] ?? null
                  );
                }}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                  selectedYear === year
                    ? "bg-cyan-500/10 text-cyan-300"
                    : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                }`}
              >
                <Calendar className="h-4 w-4" />
                {year}
              </button>
            ))
          )}
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col gap-4 overflow-hidden">

        {error && (
          <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        {loading && (
          <div className="flex flex-1 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
          </div>
        )}

        {!loading && selectedRecord && (
          <div className="flex-1 overflow-y-auto rounded-xl border border-gray-800 bg-gray-900/30 p-6">
            <h2 className="text-xl font-semibold text-white">
              {selectedRecord.company}
            </h2>

            <div className="mt-4 space-y-4">
              {Object.entries(
                filterFinancialPositionData(
                  selectedRecord.data as Record<string, unknown>
                )
              ).map(([key, val]) => (
                <div
                  key={key}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-4"
                >
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                    {key.replace(/_/g, " ")}
                  </h3>
                  {renderValue(val)}
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && !selectedYear && (
          <div className="flex flex-1 flex-col items-center justify-center text-gray-600">
            <Database className="mb-3 h-12 w-12" />
            <p className="text-lg font-medium text-gray-400">
              {rawSymbol} — Financial Reports
            </p>
            <p className="mt-1 text-sm">
              Select a year from the sidebar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}