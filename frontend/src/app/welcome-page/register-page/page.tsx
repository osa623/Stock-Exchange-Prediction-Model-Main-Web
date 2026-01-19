"use client";

import React from "react";
import RegisterForm from "@/components/Pages/RegisterPage/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-black">
            {/* Background Ambience - Purple tinted for variety, or keep consistent? keeping consistent but slightly different accent for context */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full flex justify-center">
                <RegisterForm />
            </div>
        </div>
    );
}
