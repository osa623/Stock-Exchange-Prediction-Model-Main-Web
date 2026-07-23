'use client'

import Link from 'next/link';
import Image from 'next/image';
import { navigationItems, routes } from '@/app/app.config';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import webicon_I from '../assets/Header/buyzonlabslogo.png';
import { MOCK_ANNOUNCEMENTS } from '@/lib/mock-data/announcements';
import { ChevronDown, Sparkles, Building2, TrendingUp, Search, Bell, Bookmark, Settings, User, LogOut } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { firebaseUser, backendUser, signOut, registrationInProgress } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowUserMenu(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const displayName = backendUser
    ? `${backendUser.first_name} ${backendUser.last_name}`
    : firebaseUser?.email?.split('@')[0] || '';

  const displayImage = backendUser?.avatar_url || null;  
  const displayEmail = backendUser?.email || firebaseUser?.email || '';
  const isAuthenticated = !!firebaseUser && !registrationInProgress;
  const userStatus = backendUser ? backendUser.subscription_status : 'Free Plan';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar with Corporate Announcement Ticker (No stock prices) */}
      <div className="bg-gradient-to-r from-[#0D1325] via-[#182847] to-[#0D1325] text-white border-b border-[#306B99]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            {/* Announcement Marquee Ticker */}
            <div className="flex-1 overflow-hidden">
              <div className="relative w-full h-10">
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden flex items-center">
                  <span className="bg-[#B28D41] text-[#0D1325] font-bold text-[10px] uppercase px-2 py-0.5 rounded mr-3 z-10 flex-shrink-0">
                    DISCLOSURES
                  </span>
                  <div
                    className="flex items-center h-full animate-horizontal-marquee whitespace-nowrap"
                    style={{ minWidth: '200%' }}
                  >
                    {MOCK_ANNOUNCEMENTS.map((item, index) => (
                      <Link
                        key={index}
                        href="/announcements"
                        className="flex items-center space-x-2 mx-6 hover:text-[#38BDF8] transition-colors"
                      >
                        <span className="font-mono text-[#E9D37E] font-bold">[{item.symbol}]</span>
                        <span className="text-gray-300 font-inter truncate max-w-md">{item.title}</span>
                        <span className="text-[10px] text-slate-400 font-encode">({item.date})</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <style jsx>{`
                  @keyframes horizontal-marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                  }
                  .animate-horizontal-marquee {
                    animation: horizontal-marquee 24s linear infinite;
                  }
                  .animate-horizontal-marquee:hover {
                    animation-play-state: paused;
                  }
                `}</style>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4 text-xs">
              {isAuthenticated ? (
                <span className="text-[#E9D37E] font-medium truncate max-w-[140px]">
                  {displayName}
                </span>
              ) : (
                <Link href={routes.login.path} className="text-gray-300 hover:text-[#E9D37E] transition-colors font-encode">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F16]/95 backdrop-blur-xl shadow-lg shadow-[#306B99]/20 border-b border-[#306B99]/20'
            : 'bg-[#0B0F16] border-b border-[#306B99]/20'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center pr-6">
              <Link href="/dashboard" className="group flex items-center gap-3">
                <div className="relative">
                  <Image src={webicon_I} alt="Buyzonlabs Logo" className="w-12 h-auto object-contain" />
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-lg font-bowlby text-white group-hover:text-[#E9D37E] transition-colors tracking-wide">
                    BUYZONLABS
                  </span>
                  <span className="text-[10px] font-encode text-[#38BDF8] tracking-widest uppercase -mt-1 font-semibold">
                    Financial Intelligence
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation with Mega-Menus */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const hasSub = item.subItems && item.subItems.length > 0;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasSub && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="relative flex items-center gap-1.5 px-3 py-2 text-sm font-encode font-semibold text-slate-200 hover:text-[#38BDF8] transition-colors group"
                    >
                      <span>{item.label}</span>
                      {hasSub && <ChevronDown size={14} className="text-slate-400 group-hover:text-[#38BDF8]" />}
                    </Link>

                    {/* Sub-menu dropdown */}
                    {hasSub && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-[#0D131A] border border-[#306B99]/40 rounded-xl shadow-2xl overflow-hidden p-2 z-50 backdrop-blur-xl">
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block p-2.5 rounded-lg hover:bg-[#182847]/60 transition-all group/sub"
                          >
                            <span className="block text-xs font-bold text-white group-hover/sub:text-[#38BDF8] font-inter">
                              {sub.label}
                            </span>
                            {sub.description && (
                              <span className="block text-[11px] text-slate-400 font-encode mt-0.5">
                                {sub.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Buttons & Profile Dropdown */}
            <div className="hidden lg:flex items-center space-x-3">
              {isAuthenticated ? (
                /* === Authenticated User Menu === */
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-3 px-3 py-1.5 rounded-xl border border-[#306B99]/30 text-gray-300 hover:text-white hover:bg-[#182847]/50 hover:border-[#38BDF8] transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#B28D41] to-[#E9D37E] flex-shrink-0 overflow-hidden flex items-center justify-center font-bold text-[#0D1325] text-xs">
                      {displayImage ? (
                        <img alt="avatar" className="w-full h-full object-cover" src={displayImage} />
                      ) : (
                        displayName.charAt(0).toUpperCase()
                      )}
                    </div>

                    <div className="hidden sm:flex flex-col justify-center items-start text-left">
                      <span className="text-xs font-encode font-medium text-white max-w-[100px] truncate">{displayName}</span>
                      <span className="text-[10px] font-encode text-[#38BDF8] uppercase tracking-wider">{userStatus}</span>
                    </div>

                    <ChevronDown size={14} className={`transition-transform text-slate-400 ${showUserMenu ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-72 bg-[#0D131A] backdrop-blur-xl border border-[#306B99]/40 rounded-xl shadow-2xl overflow-hidden z-50">
                      <div className="p-4 border-b border-[#306B99]/30 bg-gradient-to-r from-[#182847]/50 to-transparent">
                        <p className="text-sm font-semibold text-white truncate">{displayName}</p>
                        <p className="text-xs text-slate-400 truncate">{displayEmail}</p>
                        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#38BDF8]/20 text-[#38BDF8]">
                          {userStatus}
                        </span>
                      </div>

                      <div className="p-2 space-y-1">
                        <Link
                          href="/profile"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#182847] rounded-lg transition-all"
                        >
                          <User size={14} className="text-[#38BDF8]" />
                          <span>Profile & Settings</span>
                        </Link>
                        <Link
                          href="/saved"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#182847] rounded-lg transition-all"
                        >
                          <Bookmark size={14} className="text-[#E9D37E]" />
                          <span>Saved Companies & Watchlist</span>
                        </Link>
                        <Link
                          href="/notifications"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#182847] rounded-lg transition-all"
                        >
                          <Bell size={14} className="text-emerald-400" />
                          <span>Notifications</span>
                        </Link>
                      </div>

                      <div className="p-2 border-t border-[#306B99]/30">
                        <button
                          type="button"
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-3 px-3 py-2 text-xs font-semibold text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all"
                        >
                          <LogOut size={14} />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    href={routes.register.path}
                    className="px-4 py-2 text-xs font-encode font-bold bg-gradient-to-r from-[#B28D41] to-[#E9D37E] text-[#0D1325] rounded-xl hover:shadow-lg hover:shadow-[#B28D41]/30 transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    href={routes.login.path}
                    className="px-3 py-2 rounded-xl border border-[#306B99]/40 text-slate-300 hover:text-white hover:border-[#38BDF8] text-xs font-bold transition-all"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-[#182847] transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#306B99]/30 bg-[#0D131A] px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <Link
                  href={item.href}
                  className="block text-sm font-bold text-white hover:text-[#38BDF8]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="pl-4 space-y-1 border-l border-[#306B99]/20">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block text-xs text-slate-400 hover:text-[#38BDF8] py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
