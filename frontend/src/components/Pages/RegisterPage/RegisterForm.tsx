"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, User, ShieldCheck, ArrowRight, Hash } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { setPin } from "@/lib/api";

//interface

interface registerProp {
    onComplete: () => void;
}



export default function RegisterForm({ onComplete }: registerProp) {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        pin: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { signUp, registerBackendUser } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null); // Clear error on input change
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validate form
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (formData.pin.length !== 6 || !/^\d{6}$/.test(formData.pin)) {
            setError("PIN must be exactly 6 digits");
            return;
        }

        if (!formData.username || formData.username.length < 3) {
            setError("Username must be at least 3 characters");
            return;
        }

        setIsLoading(true);

        try {
            // Step 1: Create Firebase user
            await signUp(formData.email, formData.password);

            // Step 2: Register user in backend database
            await registerBackendUser({
                first_name: formData.firstName,
                last_name: formData.lastName,
                username: formData.username,
                email: formData.email,
                phone_number: formData.phone || undefined,
            });

            // Step 3: Set the security PIN
            await setPin(formData.pin);

            // Step 4: Notify parent component that registration is complete
            if (onComplete) {
                onComplete();
            }
        } catch (err: any) {
            console.error("Registration error:", err);
            setError(err.message || "Failed to create account. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-5xl p-10 rounded-3xl bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039]/90 backdrop-blur-2xl border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#926F34]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#DFBD69]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-3 tracking-tight font-encode">
                        Create Access
                    </h2>
                    <p className="text-zinc-500 text-sm tracking-wide uppercase font-medium">
                        Initialize your portfolio analytics journey
                    </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm"
                        >
                            {error}
                        </motion.div>
                    )}

                    {/* Section: Identity */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFBD69]/30 to-transparent"></div>
                            <h3 className="text-[#DFBD69] text-xs font-bold uppercase tracking-[0.2em] px-2 font-inter">Identity Profile</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFBD69]/30 to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <InputField
                                label="First Name"
                                name="firstName"
                                icon={User}
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Jared"
                                delay={0.1}
                                disabled={isLoading}
                            />
                            <InputField
                                label="Last Name"
                                name="lastName"
                                icon={User}
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Dunn"
                                delay={0.15}
                                disabled={isLoading}
                            />
                            <div className="md:col-span-2">
                                <InputField
                                    label="Username"
                                    name="username"
                                    icon={User}
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="jareddunn"
                                    delay={0.2}
                                    disabled={isLoading}
                                    className="md:w-1/2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section: Contact & Security */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFBD69]/30 to-transparent"></div>
                            <h3 className="text-[#DFBD69] text-xs font-bold uppercase tracking-[0.2em] px-2 font-inter">Secure Access</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFBD69]/30 to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <InputField
                                label="Email Address"
                                name="email"
                                type="email"
                                icon={Mail}
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jared@piedpiper.com"
                                delay={0.2}
                                disabled={isLoading}
                            />
                            <InputField
                                label="Phone Number"
                                name="phone"
                                type="tel"
                                icon={Hash}
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                                delay={0.25}
                                disabled={isLoading}
                            />
                            <InputField
                                label="Password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                icon={Lock}
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                isPassword
                                showPassword={showPassword}
                                togglePassword={() => setShowPassword(!showPassword)}
                                delay={0.3}
                                disabled={isLoading}
                            />
                            <InputField
                                label="Confirm Password"
                                name="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                icon={Lock}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                isPassword
                                showPassword={showPassword} // Synced toggle for better UX
                                delay={0.35}
                                disabled={isLoading}
                            />
                            <div className="md:col-span-2">
                                <InputField
                                    label="Security Pin (6-Digits)"
                                    name="pin"
                                    type="text"
                                    icon={ShieldCheck}
                                    value={formData.pin}
                                    onChange={handleChange}
                                    placeholder="000000"
                                    maxLength={6}
                                    delay={0.4}
                                    disabled={isLoading}
                                    className="md:w-1/2" // Half width on desktop to look nice centered or aligned
                                />
                            </div>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: isLoading ? 1 : 1.01, boxShadow: isLoading ? "" : "0 0 20px rgba(146, 111, 52, 0.3)" }}
                        whileTap={{ scale: isLoading ? 1 : 0.99 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        type="submit"
                        disabled={isLoading}
                        className="group w-full relative overflow-hidden bg-gradient-to-r from-[#926F34] to-[#DFBD69] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#926F34]/20 font-encode tracking-wide uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center justify-center gap-2">
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Complete Registration <ArrowRight size={18} />
                                </>
                            )}
                        </span>
                    </motion.button>
                </form>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-8 text-center"
                >
                    <p className="text-zinc-500 text-sm">
                        Already have access?{" "}
                        <Link
                            href="/welcome-page/login-page"
                            className="text-[#DFBD69] hover:text-[#FFD700] font-medium transition-colors border-b border-transparent hover:border-[#DFBD69]"
                        >
                            Sign in securely
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

// Reusable Input Component for cleaner code
const InputField = ({
    label,
    name,
    type = "text",
    icon: Icon,
    value,
    onChange,
    placeholder,
    delay,
    isPassword = false,
    showPassword = false,
    togglePassword,
    className = "",
    maxLength,
    disabled = false
}: any) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.4 }}
        className={`relative ${className}`}
    >
        <label className="block text-[10px] font-bold text-zinc-400 mb-1.5 uppercase tracking-wider font-inter">
            {label}
        </label>
        <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-[#DFBD69] transition-colors duration-300">
                <Icon size={18} strokeWidth={1.5} />
            </div>
            <input
                type={type}
                name={name}
                required
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                disabled={disabled}
                className="w-full bg-[#0A0E1A]/60 text-white pl-12 pr-4 py-3.5 rounded-xl border border-white/5 focus:border-[#DFBD69]/50 focus:bg-[#0A0E1A] focus:ring-1 focus:ring-[#DFBD69]/20 outline-none transition-all duration-300 placeholder:text-zinc-700 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder={placeholder}
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-600 hover:text-[#DFBD69] transition-colors cursor-pointer"
                >
                    {showPassword ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
                </button>
            )}
        </div>
    </motion.div>
);
