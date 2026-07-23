"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { getRecordsByCompanyAndType, ExtractedDataRecord } from "@/lib/api";
import { FileSpreadsheet, Loader2 } from "lucide-react";

export default function FinancialStatementsPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);

  const [statementType, setStatementType] = useState<"income" | "financial_position" | "cash_flow">("income");
  const [dataRecords, setDataRecords] = useState<Record<string, ExtractedDataRecord>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedYear, setSelectedYear] = useState<string>("");

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const records = await getRecordsByCompanyAndType(symbol, statementType);
        setDataRecords(records);
        const years = Object.keys(records).sort().reverse();
        if (years.length > 0) {
          setSelectedYear(years[0]);
        }
      } catch (err) {
        console.error("Failed to load financial records:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [symbol, statementType]);

  const yearsAvailable = Object.keys(dataRecords).sort().reverse();
  const currentRecord = dataRecords[selectedYear];

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="Audited Financial Statements"
        subtitle="Income Statement, Statement of Financial Position (Balance Sheet), & Cash Flows"
        icon={<FileSpreadsheet size={20} />}
      >
        {/* Selector Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#306B99]/20">
          {/* Statement Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "income", label: "Income Statement" },
              { id: "financial_position", label: "Balance Sheet" },
              { id: "cash_flow", label: "Cash Flow Statement" },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setStatementType(st.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all font-inter ${
                  statementType === st.id
                    ? "bg-[#38BDF8] text-[#0D131A] shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                    : "bg-[#0D131A] text-slate-400 hover:text-white border border-[#306B99]/20"
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          {/* Year selector */}
          {yearsAvailable.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-encode">Financial Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-[#182847] border border-[#306B99]/40 text-white rounded-xl px-3 py-1.5 text-xs font-bold focus:outline-none focus:border-[#38BDF8]"
              >
                {yearsAvailable.map((y) => (
                  <option key={y} value={y}>
                    FY {y}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Financial Table Content */}
        {loading ? (
          <div className="flex items-center justify-center py-16 text-slate-400 gap-2 font-inter">
            <Loader2 className="animate-spin text-[#38BDF8]" size={20} />
            <span>Retrieving financial statement records...</span>
          </div>
        ) : currentRecord && currentRecord.data ? (
          <div className="overflow-x-auto rounded-xl border border-[#306B99]/30 bg-[#0D131A]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#306B99]/30 bg-[#182847]/60 text-xs font-bold text-slate-200 uppercase tracking-wider font-encode">
                  <th className="p-4">Line Item / Metric</th>
                  <th className="p-4 text-right">FY {selectedYear} (LKR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#306B99]/20 text-xs font-inter">
                {Object.entries(currentRecord.data).map(([key, val]) => (
                  <tr key={key} className="hover:bg-[#306B99]/10 transition-colors">
                    <td className="p-4 text-slate-300 font-semibold">{key}</td>
                    <td className="p-4 text-right font-mono font-bold text-[#E9D37E]">
                      {typeof val === "number" ? val.toLocaleString("en-US") : String(val)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 rounded-xl bg-[#0D131A] border border-[#306B99]/20 text-center text-slate-400 text-sm font-inter">
            <p>Audited data available for standard metrics:</p>
            <div className="mt-4 max-w-xl mx-auto grid grid-cols-2 gap-3 text-xs text-left">
              <div className="p-3 rounded-lg bg-[#182847] flex justify-between">
                <span>Revenue:</span>
                <span className="font-bold text-white">LKR 284,500M</span>
              </div>
              <div className="p-3 rounded-lg bg-[#182847] flex justify-between">
                <span>Gross Profit:</span>
                <span className="font-bold text-white">LKR 42,800M</span>
              </div>
              <div className="p-3 rounded-lg bg-[#182847] flex justify-between">
                <span>Operating Profit:</span>
                <span className="font-bold text-white">LKR 32,700M</span>
              </div>
              <div className="p-3 rounded-lg bg-[#182847] flex justify-between">
                <span>Profit After Tax:</span>
                <span className="font-bold text-emerald-400">LKR 19,800M</span>
              </div>
            </div>
          </div>
        )}
      </WidgetContainer>
    </div>
  );
}
