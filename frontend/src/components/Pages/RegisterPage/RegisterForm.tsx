"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, User, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Register submitted:", formData);
        // Add registration logic here
    };

    return (
        <div className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Decorative gradient orb */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#926F34]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#DFBD69]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                        Create Account
                    </h2>
                    <p className="text-zinc-400 text-sm">
                        Join the future of stock analytics
                    </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase tracking-wider">
                            Full Name
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-[#DFBD69] transition-colors">
                                <User size={18} />
                            </div>
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full bg-zinc-900/50 text-white pl-10 pr-4 py-3 rounded-xl border border-white/10 focus:border-[#DFBD69]/50 focus:ring-1 focus:ring-[#DFBD69]/50 outline-none transition-all placeholder:text-zinc-600"
                                placeholder="John Doe"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                    >
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase tracking-wider">
                            Email Address
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-[#DFBD69] transition-colors">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-zinc-900/50 text-white pl-10 pr-4 py-3 rounded-xl border border-white/10 focus:border-[#DFBD69]/50 focus:ring-1 focus:ring-[#DFBD69]/50 outline-none transition-all placeholder:text-zinc-600"
                                placeholder="name@example.com"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase tracking-wider">
                            Password
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-[#DFBD69] transition-colors">
                                <Lock size={18} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-zinc-900/50 text-white pl-10 pr-10 py-3 rounded-xl border border-white/10 focus:border-[#DFBD69]/50 focus:ring-1 focus:ring-[#DFBD69]/50 outline-none transition-all placeholder:text-zinc-600"
                                placeholder="Create a password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                    >
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase tracking-wider">
                            Confirm Password
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-[#DFBD69] transition-colors">
                                <ShieldCheck size={18} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full bg-zinc-900/50 text-white pl-10 pr-10 py-3 rounded-xl border border-white/10 focus:border-[#DFBD69]/50 focus:ring-1 focus:ring-[#DFBD69]/50 outline-none transition-all placeholder:text-zinc-600"
                                placeholder="Confirm your password"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex items-center gap-2 pt-1"
                    >
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            id="terms"
                            required
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            className="w-4 h-4 rounded border-zinc-600 bg-zinc-900 text-[#DFBD69] focus:ring-[#DFBD69]/50 accent-[#926F34]"
                        />
                        <label htmlFor="terms" className="text-xs text-zinc-400">
                            I agree to the <a href="#" className="text-[#DFBD69] hover:text-[#926F34]">Terms of Service</a> and <a href="#" className="text-[#DFBD69] hover:text-[#926F34]">Privacy Policy</a>
                        </label>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.5 }}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-[#926F34] hover:bg-[#7e5e2b] text-white font-semibold py-3.5 rounded-xl shadows-lg shadow-[#926F34]/20 transition-all mt-2 font-encode"
                    >
                        Create Account
                        <ArrowRight size={18} />
                    </motion.button>
                </form>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-8 text-center"
                >
                    <p className="text-zinc-400 text-sm">
                        Already have an account?{" "}
                        <Link
                            href="/welcome-page/login-page"
                            className="text-[#DFBD69] hover:text-[#926F34] font-medium transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
