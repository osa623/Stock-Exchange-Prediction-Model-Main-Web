"use client";

import React, { useState } from "react";
import { Camera, Lock, Mail, Shield, Eye, EyeOff } from "lucide-react";

type EditMode = "avatar" | "email" | "password" | "pin" | null;



export default function Profile() {
  const [editMode, setEditMode] = useState<EditMode>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPin, setShowPin] = useState(false);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#0D1425] to-[#182039] text-white p-6 sm:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-1 bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <div className="flex flex-col items-center text-center">

            {/* Avatar */}
            <div className="relative">
              <img
                src="/avatar.png"
                alt="Profile Avatar"
                className="w-28 h-28 rounded-full border-2 border-[#DFBD69]"
              />
            </div>

            {/* Username */}
            <h2 className="mt-4 text-xl font-bold text-[#DFBD69]">@henuka</h2>

            {/* User Info */}
            <div className="w-full mt-6 space-y-4 text-sm">
              <ProfileRow label="Status" value="FREE USER" /> {/* colors will change for premium and free, function is made for this*/}
              <ProfileRow label="First Name" value="Henuka" />
              <ProfileRow label="Last Name" value="Perera" />
              <ProfileRow label="Email" value="henuka@email.com" />
              <ProfileRow label="Phone" value="+94 7X XXX XXXX" />

              {/* Password */}
              <SensitiveRow
                label="Password"
                value="Ai_balanne"
                visible={showPassword}
                toggle={() => setShowPassword(!showPassword)}
              />

              {/* Security PIN */}
              <SensitiveRow
                label="Security PIN"
                value="4829"
                visible={showPin}
                toggle={() => setShowPin(!showPin)}
              />
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:col-span-2 space-y-6">

          {/* Change Avatar */}
          <ActionCard
            icon={<Camera className="text-blue-400" />}
            title="Change Avatar"
            active={editMode === "avatar"}
            onEdit={() => setEditMode("avatar")}
            onCancel={() => setEditMode(null)}
          >
            <input type="file" className="text-sm text-gray-300" />
          </ActionCard>

          {/* Change Email */}
          <ActionCard
            icon={<Mail className="text-emerald-400" />}
            title="Change Email"
            active={editMode === "email"}
            onEdit={() => setEditMode("email")}
            onCancel={() => setEditMode(null)}
          >
            <input
              type="email"
              placeholder="New email"
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/20 text-white"
            />
          </ActionCard>

          {/* Change Password */}
          <ActionCard
            icon={<Lock className="text-purple-400" />}
            title="Change Password"
            active={editMode === "password"}
            onEdit={() => setEditMode("password")}
            onCancel={() => setEditMode(null)}
          >
            <input
              type="password"
              placeholder="New password"
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/20 text-white"
            />
          </ActionCard>

          {/* Change Security PIN */}
          <ActionCard
            icon={<Shield className="text-rose-400" />}
            title="Change Security PIN"
            active={editMode === "pin"}
            onEdit={() => setEditMode("pin")}
            onCancel={() => setEditMode(null)}
          >
            <input
              type="password"
              placeholder="New PIN"
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/20 text-white"
            />
          </ActionCard>

        </div>
      </div>
    </section>
  );
}

/* ================= SMALL COMPONENTS ================= */

function ProfileRow({ label, value }: { label: string; value: string }) {
  // Conditional color for "PREMIUM" or "FREE"
  const valueColor =
    value.toUpperCase() === "PREMIUM USER"
      ? "text-emerald-400" // green
      : value.toUpperCase() === "FREE USER"
      ? "text-blue-400"    // blue
      : "text-gray-200";   // default

  return (
    <div className="flex justify-between border-b border-white/10 pb-2">
      <span className="text-gray-400">{label}</span>
      <span className={valueColor}>{value}</span>
    </div>
  );
}

function SensitiveRow({
  label,
  value,
  toggle,
  visible,
}: {
  label: string;
  value: string;
  toggle: () => void;
  visible: boolean;
}) {
  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-2">
      <span className="text-gray-400">{label}</span>
      <div className="flex items-center gap-2">
        <span>{visible ? value : "****"}</span>
        <button onClick={toggle}>
          {visible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}

type ActionCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  active: boolean;
  onEdit: () => void;
  onCancel: () => void;
};

function ActionCard({ icon, title, children, active, onEdit, onCancel }: ActionCardProps) {
  return (
    <div className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-white/5">{icon}</div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        {!active && (
          <button
            onClick={onEdit}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#DFBD69] to-[#926F34] text-black font-semibold"
          >
            Edit
          </button>
        )}
      </div>

      {active && (
        <div className="mt-4 space-y-2">
          {children}
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-[#DFBD69] text-black font-semibold">
              Save
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-xl border border-white/20 rounded-xl text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
