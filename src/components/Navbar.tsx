import React, { useState } from 'react';
import { ShoppingBag, Search, Phone, Menu, X, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { ProductPackage } from '../types.ts';
import { formatTaka } from '../utils/orderCalculator.ts';

interface NavbarProps {
  selectedPack: ProductPackage;
  quantity: number;
  onOpenTracking: () => void;
  onOpenAdmin: () => void;
  onScrollToCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedPack,
  quantity,
  onOpenTracking,
  onOpenAdmin,
  onScrollToCheckout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'হোম', href: '#home' },
    { label: 'উপাদানসমূহ', href: '#ingredients' },
    { label: 'প্যাকেজ ও মূল্য', href: '#packages' },
    { label: 'কীভাবে বানাবেন', href: '#how-to-use' },
    { label: 'গ্রাহক রিভিউ', href: '#reviews' },
    { label: 'প্রশ্নোত্তর', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/30 border border-emerald-300/30 text-emerald-100">
              অফার
            </span>
            <span className="font-medium">
              🌿 ধোক বিডি (dhok.bd) স্টাইলের আসল ন্যাচারাল শরবত JUSO | সারাদেশে ক্যাশ অন ডেলিভারি
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs shrink-0">
            <a
              href="tel:01700123456"
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              হটলাইন: 01700-123456
            </a>
            <span className="text-emerald-400/50">|</span>
            <button
              onClick={onOpenAdmin}
              className="hover:text-emerald-200 transition-colors text-[11px] underline opacity-80"
              title="শপ ম্যানেজার প্যানেল"
            >
              ম্যানেজার লগইন
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tighter">J</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-900 font-display">
                  JUSO
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300/60">
                  জুসো
                </span>
              </div>
              <span className="text-[10px] text-stone-500 font-medium -mt-1 hidden sm:block">
                এক চুমুকেই প্রাণ জুড়ায় • Natural Drink
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-700 hover:text-emerald-700 text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Track Order Button */}
            <button
              onClick={onOpenTracking}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 border border-stone-200 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              অর্ডার ট্র্যাক করুন
            </button>

            {/* Quick Order Cart Preview Button */}
            <button
              onClick={onScrollToCheckout}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-800/20 hover:shadow-lg transition-all text-xs sm:text-sm font-bold active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>অর্ডার করুন</span>
              <span className="hidden md:inline-block px-1.5 py-0.2 bg-emerald-900/40 rounded text-[11px] font-mono">
                {formatTaka(selectedPack.discountedPrice * quantity)}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 rounded-lg text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              অর্ডার ট্র্যাকিং দেখুন
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full text-center text-xs text-stone-500 py-1 underline"
            >
              ম্যানেজার লগইন (Admin)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
