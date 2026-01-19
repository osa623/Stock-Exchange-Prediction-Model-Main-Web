"use client";

import React from "react";
import RegisterForm from "@/components/Pages/RegisterPage/RegisterForm";
import PreVerification from "@/components/Pages/RegisterPage/PreVerification";

export default function RegisterPage() {
    const [step, setStep] = React.useState<"register" | "verify">("register");

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-black">
            {/* Background Ambience - Purple tinted for variety, or keep consistent? keeping consistent but slightly different accent for context */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039]" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full flex justify-center">
                {step === "register" ? (
                    <RegisterForm onComplete={() => setStep("verify")} />
                ) : (
                    <PreVerification />
                )}
            </div>
        </div>
    );
}
