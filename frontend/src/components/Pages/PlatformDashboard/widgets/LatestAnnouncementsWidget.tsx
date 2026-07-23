"use client";

import React from "react";
import { Bell } from "lucide-react";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import AnnouncementCard from "@/components/Ui/Cards/AnnouncementCard";
import { MOCK_ANNOUNCEMENTS } from "@/lib/mock-data/announcements";

export default function LatestAnnouncementsWidget() {
  return (
    <WidgetContainer
      title="Latest Corporate Announcements"
      subtitle="Official disclosures, financials, dividends & regulatory filings"
      actionText="View All Disclosures"
      actionHref="/announcements"
      icon={<Bell size={20} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_ANNOUNCEMENTS.slice(0, 3).map((item) => (
          <AnnouncementCard key={item.id} announcement={item} />
        ))}
      </div>
    </WidgetContainer>
  );
}
