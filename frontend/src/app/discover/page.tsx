import React from "react";
import DiscoverPage from "@/components/Pages/Discover/DiscoverPage";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DiscoverRoute() {
  return (
    <ProtectedRoute>
      <main className="relative min-h-screen text-white w-full bg-[#0B0F16]">
        <DiscoverPage />
      </main>
    </ProtectedRoute>
  );
}
