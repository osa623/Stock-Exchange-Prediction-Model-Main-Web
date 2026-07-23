"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface WidgetContainerProps {
  title: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function WidgetContainer({
  title,
  subtitle,
  actionText,
  actionHref,
  icon,
  children,
  className = "",
}: WidgetContainerProps) {
  return (
    <div
      className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(13,19,26,0.95) 0%, rgba(17,24,39,0.95) 100%)",
        border: "1px solid rgba(56,189,248,0.12)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center justify-between gap-4 mb-5 border-b border-[#306B99]/20 pb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="p-2.5 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 flex-shrink-0">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-white font-inter tracking-wide">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-slate-400 font-encode mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>

        {actionText && actionHref && (
          <Link
            href={actionHref}
            className="flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 font-inter flex-shrink-0"
          >
            <span>{actionText}</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>

      <div>{children}</div>
    </div>
  );
}
