"use client";

import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
    onBack: () => void;
}

// Using DiceBear API for the animal avatars
const AVATAR_OPTIONS = [
    { id: 'lion', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Lion' },
    { id: 'fox', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Fox' },
    { id: 'bear', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Bear' },
    { id: 'owl', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Owl' },
    { id: 'cat', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Felix' },
    { id: 'dog', url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Scooby' },
];



export default function IdentitySection({ onBack }: Props) {
    const [formData, setFormData] = useState({
        username: '',
        avatar: AVATAR_OPTIONS[0].url // Default to the first avatar
    });

    const handleUpdate = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const isComplete = formData.username.trim().length >= 3;

    return (
        <section className="flex flex-col items-center w-full justify-center p-6 text-white font-sans">
            <div className="w-full max-w-xl">
                <div className="bg-[#121C33] border border-white/10 rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex justify-between w-full items-center mb-2">
                        <h2 className="text-sm font-bold text-[#B28D41] uppercase tracking-widest">Final Step</h2>
                        <button onClick={onBack} className="text-[#B28D41] flex items-center gap-2 cursor-pointer hover:text-[#9a7835]  text-sm transition-colors">
                            <ArrowLeftIcon className="w-4 h-4" /> Previous Step</button>
                    </div>
                    <h1 className="text-3xl font-extrabold mb-4 tracking-tight">Set your identity</h1>

                    {/* AVATAR PREVIEW */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full border-2 border-[#B28D41] p-1 mb-2 bg-[#090C1A] shadow-[0_0_15px_rgba(178,141,65,0.3)] transition-transform group-hover:scale-105">
                                <img
                                    src={formData.avatar}
                                    alt="Selected Avatar"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">Choose your animal spirit</p>
                    </div>

                    <div className="space-y-6">
                        {/* USERNAME INPUT */}
                        <div>
                            <label className="text-gray-400 text-xs font-bold uppercase mb-2 block">Username</label>
                            <input
                                type="text"
                                placeholder="e.g. BullishTrader"
                                value={formData.username}
                                onChange={(e) => handleUpdate('username', e.target.value)}
                                className="w-full bg-[#090C1A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#B28D41] transition-all text-white placeholder:text-gray-600"
                            />
                            {formData.username && formData.username.length < 3 && (
                                <p className="text-[10px] text-red-400 mt-1 ml-1">Minimum 3 characters required</p>
                            )}
                        </div>

                        {/* AVATAR GRID */}
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase mb-4">Select an Avatar</p>
                            <div className="grid grid-cols-6 gap-3">
                                {AVATAR_OPTIONS.map((avatar) => (
                                    <button
                                        key={avatar.id}
                                        type="button"
                                        onClick={() => handleUpdate('avatar', avatar.url)}
                                        className={`rounded-xl p-1 border-2 transition-all duration-200 ${formData.avatar === avatar.url
                                            ? 'border-[#B28D41] bg-[#B28D41]/20 scale-110 shadow-[0_0_10px_rgba(178,141,65,0.2)]'
                                            : 'border-transparent bg-white/5 hover:bg-white/10 hover:scale-105'
                                            }`}
                                    >
                                        <img src={avatar.url} alt={avatar.id} className="w-full h-full" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <button
                            disabled={!isComplete}
                            onClick={() => 'done'}
                            className={`w-full py-4 rounded-xl font-bold transition-all duration-300 mt-4 ${isComplete
                                ? 'bg-[#B28D41] hover:bg-[#9a7835] text-white shadow-[0_0_20px_rgba(178,141,65,0.4)]'
                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            Complete Setup
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}