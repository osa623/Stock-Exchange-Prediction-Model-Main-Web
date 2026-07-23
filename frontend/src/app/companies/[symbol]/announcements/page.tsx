"use client";

import React from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import AnnouncementCard from "@/components/Ui/Cards/AnnouncementCard";
import { MOCK_ANNOUNCEMENTS } from "@/lib/mock-data/announcements";
import { Bell } from "lucide-react";

export default function CompanyAnnouncementsPage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);

  const companyAnnouncements = MOCK_ANNOUNCEMENTS.filter(
    (a) => a.symbol.toUpperCase() === symbol.toUpperCase()
  );

  const items = companyAnnouncements.length > 0 ? companyAnnouncements : MOCK_ANNOUNCEMENTS.slice(0, 2);

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="Corporate Announcements & Official Disclosures"
        subtitle={`Filing and announcements published by ${symbol}`}
        icon={<Bell size={20} />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((ann) => (
            <AnnouncementCard key={ann.id} announcement={ann} />
          ))}
        </div>
      </WidgetContainer>
    </div>
  );
}
