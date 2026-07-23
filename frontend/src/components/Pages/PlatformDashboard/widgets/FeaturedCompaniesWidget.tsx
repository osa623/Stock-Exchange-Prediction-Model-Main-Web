"use client";

import React from "react";
import { Building2 } from "lucide-react";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import CompanyCard from "@/components/Ui/Cards/CompanyCard";
import { MOCK_COMPANIES } from "@/lib/mock-data/companies";

export default function FeaturedCompaniesWidget() {
  return (
    <WidgetContainer
      title="Featured Corporate Profiles"
      subtitle="Highlighted CSE entities with strong fundamental metrics"
      actionText="Company Directory"
      actionHref="/companies"
      icon={<Building2 size={20} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_COMPANIES.slice(0, 3).map((company) => (
          <CompanyCard key={company.symbol} company={company} />
        ))}
      </div>
    </WidgetContainer>
  );
}
