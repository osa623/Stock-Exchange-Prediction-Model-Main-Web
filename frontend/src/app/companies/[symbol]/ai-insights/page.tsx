"use client";

import React from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import InsightCard from "@/components/Ui/Cards/InsightCard";
import { MOCK_INSIGHTS } from "@/lib/mock-data/insights";
import { Sparkles } from "lucide-react";

export default function CompanyAIInsightsPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);

  const companyInsights = MOCK_INSIGHTS.filter(
    (i) => i.symbol.toUpperCase() === symbol.toUpperCase()
  );

  const items = companyInsights.length > 0 ? companyInsights : MOCK_INSIGHTS.slice(0, 2);

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="AI Financial Diagnostics & Intelligence Reports"
        subtitle={`Automated qualitative & quantitative insights generated for ${symbol}`}
        icon={<Sparkles size={20} className="text-[#FACC15]" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </WidgetContainer>
    </div>
  );
}
