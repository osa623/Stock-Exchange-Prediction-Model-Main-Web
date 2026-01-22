"use client";

import React from "react";
import RegisterForm from "@/components/Pages/RegisterPage/RegisterForm";
import PreVerification from "@/components/Pages/RegisterPage/PreVerification";
import GoTONextStep from "@/components/Pages/RegisterPage/GoToNextStep";
import OnboardingSection from "@/components/Pages/RegisterPage/onboardingSection";

export default function RegisterPage() {
    const [step, setStep] = React.useState<"register" | "verify">("register");
    const [step_1, setStep_1] = React.useState<"valid" | "verify">("verify");
    const [step_2, setStep_2] = React.useState<"personalize" | "done">("done");


    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            <div className="relative z-10 w-full flex justify-center">

                {step === "register" ? (
                    <RegisterForm
                        onComplete={() => setStep("verify")} />

                ) : step_1 === "verify" ? (
                    <PreVerification
                        onComplete={() => setStep_1("valid")}
                        onBack={() => setStep("register")} />
                ) : step_2 === "done" ? (
                    <GoTONextStep
                        onComplete={() => setStep_2("personalize")}
                        onBack={() => setStep_1("verify")} />
                ) : (
                    <OnboardingSection onBack={() => setStep_2("done")} />
                )}
            </div>
        </div>
    );
}