"use client";

import React from "react";
import { useParams } from "next/navigation";
import WidgetContainer from "@/components/Ui/Widgets/WidgetContainer";
import { getCompanyBySymbol } from "@/lib/mock-data/companies";
import { Users, Briefcase, MapPin, Award } from "lucide-react";

export default function CorporatePage() {
  const params = useParams();
  const rawSymbol = typeof params?.symbol === "string" ? params.symbol : "JKH.N0000";
  const symbol = decodeURIComponent(rawSymbol);
  const company = getCompanyBySymbol(symbol);

  const boardOfDirectors = [
    { name: "Deshabandu H. Jayawardena", role: "Non-Executive Chairman" },
    { name: "K. Wickramanayake", role: "Group Chief Executive Officer" },
    { name: "Dr. A. Senanayake", role: "Independent Non-Executive Director" },
    { name: "M. Fernando", role: "Executive Director / CFO" },
    { name: "S. Rajapakse", role: "Independent Non-Executive Director" },
  ];

  return (
    <div className="space-y-6">
      <WidgetContainer
        title="Corporate Information & Executive Governance"
        subtitle="Board of Directors, Auditors, Registered Office & Incorporation Details"
        icon={<Users size={20} />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Board of Directors */}
          <div>
            <h4 className="text-sm font-bold text-[#38BDF8] uppercase tracking-wider font-encode mb-3 flex items-center gap-2">
              <Briefcase size={16} />
              <span>Board of Directors</span>
            </h4>

            <div className="space-y-2">
              {boardOfDirectors.map((person, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#0D131A] border border-[#306B99]/20 flex items-center justify-between"
                >
                  <span className="text-sm font-bold text-white font-inter">{person.name}</span>
                  <span className="text-xs text-slate-400 font-encode">{person.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Secretarial & Registration */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#E9D37E] uppercase tracking-wider font-encode mb-3 flex items-center gap-2">
              <Award size={16} />
              <span>Entity Particulars</span>
            </h4>

            <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/20 space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-[#306B99]/20">
                <span className="text-slate-400 font-encode">Company Name</span>
                <span className="font-bold text-white font-inter">{company?.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#306B99]/20">
                <span className="text-slate-400 font-encode">Stock Symbol</span>
                <span className="font-bold text-[#E9D37E] font-inter">{company?.symbol}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#306B99]/20">
                <span className="text-slate-400 font-encode">Legal Form</span>
                <span className="font-bold text-white font-inter">Public Limited Liability Company</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#306B99]/20">
                <span className="text-slate-400 font-encode">External Auditors</span>
                <span className="font-bold text-slate-200 font-inter">KPMG Sri Lanka</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400 font-encode">Secretaries</span>
                <span className="font-bold text-slate-200 font-inter">Corporate Services (Pvt) Ltd</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0D131A] border border-[#306B99]/20 flex items-start gap-3">
              <MapPin size={18} className="text-[#38BDF8] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white font-inter block">Registered Office</span>
                <p className="text-xs text-slate-400 font-encode mt-0.5">
                  No. 117 Sir Chittampalam A. Gardiner Mawatha, Colombo 02, Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </WidgetContainer>
    </div>
  );
}
