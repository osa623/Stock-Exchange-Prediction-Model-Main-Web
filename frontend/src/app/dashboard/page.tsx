import React from "react";
import DashboardPage from "@/components/Pages/PlatformDashboard/DashboardPage";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <main className="relative min-h-screen text-white w-full bg-[#0B0F16]">
        <DashboardPage />
      </main>
    </ProtectedRoute>
  );
}
