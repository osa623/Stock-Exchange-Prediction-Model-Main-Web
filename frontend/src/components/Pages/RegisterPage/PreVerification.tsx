"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, RefreshCw, CheckCircle, Smartphone, ArrowRight, ArrowLeft } from "lucide-react";


//interface
interface PreVerificationProps {

    onComplete: () => void;
    onBack: () => void;

}

export default function PreVerification({ onComplete, onBack }: PreVerificationProps) {
    const [step, setStep] = useState<"method" | "code">("method");
    const [method, setMethod] = useState<"email" | "phone" | null>(null);

    const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(30);
    const [canResend, setCanResend] = useState(false);

    //interface


    const timerRef = useRef<NodeJS.Timeout | number | null>(null);

    useEffect(() => {
        if (step === "code") {
            startTimer();
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current as any);
        };
    }, [step]);

    const startTimer = () => {
        setCanResend(false);
        setTimeLeft(30);

        if (timerRef.current) clearInterval(timerRef.current as any);

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    if (timerRef.current) clearInterval(timerRef.current as any);
                    setCanResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleResend = () => {
        if (!canResend) return;
        console.log(`Resending verification code to ${method}...`);
        startTimer();
    };

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);

        if (value && index < 5) {
            const nextInput = document.getElementById(`code-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
            const prevInput = document.getElementById(`code-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const code = verificationCode.join("");
        console.log(`Verification submitted for ${method}:`, code);
    };

    const selectMethod = (selected: "email" | "phone") => {
        setMethod(selected);
        setStep("code");
    };

    return (
        <div className="w-full max-w-lg p-10 rounded-3xl bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039]/90 backdrop-blur-2xl border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#926F34]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#DFBD69]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
                {step === "method" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-6 tracking-tight font-encode">
                            Select Verification Method
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <button
                                onClick={() => selectMethod("email")}
                                className="group flex items-center justify-between p-5 rounded-2xl bg-[#0A0E1A]/60 border border-white/5 hover:border-[#DFBD69]/50 transition-all duration-300 hover:bg-[#0A0E1A]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#DFBD69]/10 flex items-center justify-center text-[#DFBD69]">
                                        <Mail size={24} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-white font-bold text-sm uppercase tracking-wide">Email Address</h3>
                                        <p className="text-zinc-500 text-xs">Send code to registered email</p>
                                    </div>
                                </div>
                                <ArrowRight className="text-zinc-600 group-hover:text-[#DFBD69] transition-colors" size={20} />
                            </button>

                            <button
                                onClick={() => selectMethod("phone")}
                                className="group flex items-center justify-between p-5 rounded-2xl bg-[#0A0E1A]/60 border border-white/5 hover:border-[#DFBD69]/50 transition-all duration-300 hover:bg-[#0A0E1A]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#DFBD69]/10 flex items-center justify-center text-[#DFBD69]">
                                        <Smartphone size={24} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-white font-bold text-sm uppercase tracking-wide">Phone Number</h3>
                                        <p className="text-zinc-500 text-xs">Send code to registered phone</p>
                                    </div>
                                </div>
                                <ArrowRight className="text-zinc-600 group-hover:text-[#DFBD69] transition-colors" size={20} />
                            </button>

                            <button
                                onClick={onBack}
                                className="group flex items-center justify-between p-2 rounded-2xl bg-transparent border border-white/5 hover:border-[#DFBD69]/50 transition-all duration-300 hover:bg-[#0A0E1A]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl 0 flex items-center justify-center text-[#DFBD69]">
                                        <ArrowLeft className="text-white" size={14} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-white font-bold text-xs uppercase tracking-wide">Back</h3>
                                        <p className="text-zinc-100 text-xs">Go back to previous step</p>
                                    </div>
                                </div>

                            </button>

                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-16 h-16 rounded-2xl bg-[#DFBD69]/10 flex items-center justify-center mx-auto mb-6 border border-[#DFBD69]/20"
                        >
                            {method === "email" ? <Mail className="text-[#DFBD69]" size={32} /> : <Smartphone className="text-[#DFBD69]" size={32} />}
                        </motion.div>

                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-3 tracking-tight font-encode">
                                Verify {method === "email" ? "Email" : "Phone"}
                            </h2>
                            <p className="text-zinc-500 text-sm tracking-wide font-medium">
                                Enter the 6-digit code sent to your {method}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="flex justify-center gap-3">
                                {verificationCode.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`code-${index}`}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className="w-12 h-14 bg-[#0A0E1A]/60 text-white text-center text-xl font-bold rounded-xl border border-white/5 focus:border-[#DFBD69]/50 focus:bg-[#0A0E1A] focus:ring-1 focus:ring-[#DFBD69]/20 outline-none transition-all duration-300 placeholder:text-zinc-700"
                                    />
                                ))}
                            </div>

                            <div className="flex items-center justify-center gap-2 text-sm">
                                <span className="text-zinc-500">Didn't receive code?</span>
                                <button
                                    type="button"
                                    onClick={handleResend}
                                    disabled={!canResend}
                                    className={`font-medium transition-colors flex items-center gap-1.5 ${canResend
                                        ? "text-[#DFBD69] hover:text-[#FFD700] cursor-pointer"
                                        : "text-zinc-600 cursor-not-allowed"
                                        }`}
                                >
                                    {canResend ? (
                                        <>
                                            Resend Code <RefreshCw size={14} />
                                        </>
                                    ) : (
                                        <span>Resend in {timeLeft}s</span>
                                    )}
                                </button>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(146, 111, 52, 0.3)" }}
                                whileTap={{ scale: 0.99 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                onClick={onComplete}
                                type="submit"
                                className="group w-full relative overflow-hidden bg-gradient-to-r from-[#926F34] to-[#DFBD69] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#926F34]/20 font-encode tracking-wide uppercase text-sm"
                            >
                                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative flex items-center justify-center gap-2">
                                    Verify Account <CheckCircle size={18} />
                                </span>
                            </motion.button>

                            <button
                                type="button"
                                onClick={() => setStep("method")}
                                className="text-zinc-500 hover:text-white text-xs uppercase tracking-wider font-bold transition-colors mt-4"
                            >
                                Change Method
                            </button>
                        </form>
                    </motion.div>
                )}
            </div>
        </div>
    );
}