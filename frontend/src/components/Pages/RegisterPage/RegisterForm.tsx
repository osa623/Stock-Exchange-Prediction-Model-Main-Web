"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, User, ShieldCheck, ArrowRight, Hash } from "lucide-react";
import Link from "next/link";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        pin: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Register submitted:", formData);
        // Add registration logic here
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
                            />
                            <InputField
                                label="Last Name"
                                name="lastName"
                                icon={User}
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Dunn"
                                delay={0.15}
                            />
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
                                    className="md:w-1/2" // Half width on desktop to look nice centered or aligned
                                />
                            </div>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(146, 111, 52, 0.3)" }}
                        whileTap={{ scale: 0.99 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        type="submit"
                        className="group w-full relative overflow-hidden bg-gradient-to-r from-[#926F34] to-[#DFBD69] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#926F34]/20 font-encode tracking-wide uppercase text-sm"
                    >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center justify-center gap-2">
                            Complete Registration <ArrowRight size={18} />
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
    maxLength
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
                className="w-full bg-[#0A0E1A]/60 text-white pl-12 pr-4 py-3.5 rounded-xl border border-white/5 focus:border-[#DFBD69]/50 focus:bg-[#0A0E1A] focus:ring-1 focus:ring-[#DFBD69]/20 outline-none transition-all duration-300 placeholder:text-zinc-700 font-medium text-sm"
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
