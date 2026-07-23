"use client";

import React from "react";
import { useParams } from "next/navigation";
import CompanyOverview from "@/components/Pages/CompanyWorkspace/CompanyOverview";

export default function CompanyOverviewPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);

  return <CompanyOverview symbol={symbol} />;
}
