"use client";

import React from "react";
import LoginForm from "@/components/Pages/LoginPage/LoginFrom";

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-black">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full flex justify-center">
                <LoginForm />
            </div>
        </div>
    );
}
