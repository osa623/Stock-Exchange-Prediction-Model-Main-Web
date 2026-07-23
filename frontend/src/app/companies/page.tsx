import React from "react";
import CompanyDirectory from "@/components/Pages/Companies/CompanyDirectory";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CompaniesPage() {
  return (
    <ProtectedRoute>
      <main className="relative min-h-screen text-white w-full bg-[#0B0F16]">
        <CompanyDirectory />
      </main>
    </ProtectedRoute>
  );
}
