import React from "react";
import CompareTool from "@/components/Pages/Compare/CompareTool";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CompareRoute() {
  return (
    <ProtectedRoute>
      <main className="relative min-h-screen text-white w-full bg-[#0B0F16]">
        <CompareTool />
      </main>
    </ProtectedRoute>
  );
}
