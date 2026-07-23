"use client";

import React from "react";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  category?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  category,
  breadcrumbs,
  actions,
}: PageHeaderProps) {
  return (
    <div className="relative border-b border-[#306B99]/20 pb-6 mb-8">
      {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
        <div>
          {category && (
            <span className="text-xs font-semibold tracking-wider text-[#B28D41] uppercase font-encode">
              {category}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bowlby text-white mt-1">
            {title}
          </h1>
          {subtitle && (
            <p className="text-slate-400 font-encode text-sm sm:text-base mt-1 max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>

        {actions && <div className="flex items-center gap-3 flex-shrink-0">{actions}</div>}
      </div>
    </div>
  );
}
