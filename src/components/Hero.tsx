import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, Flame, Droplets, CheckCircle, ArrowRight, HeartPulse, Clock, Star } from 'lucide-react';
import { formatTaka } from '../utils/orderCalculator.ts';
import { PRODUCT_PACKAGES } from '../data/products.ts';

interface HeroProps {
  onScrollToCheckout: () => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToCheckout, onScrollToDemo }) => {
  // Countdown timer for Bangladeshi flash sale urgency
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const popularPack = PRODUCT_PACKAGES[1] || PRODUCT_PACKAGES[0];

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-14 lg:pt-10 lg:pb-20 bg-gradient-to-b from-[#F2EFE9] via-[#FAF9F5] to-white">
      {/* Decorative Natural Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top viral tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300/80 text-emerald-900 text-xs sm:text-sm font-bold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>dhok.bd স্টাইলের প্রিমিয়াম শরবত ব্র্যান্ড</span>
              <span className="text-amber-800 font-extrabold flex items-center gap-1">
                • <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 inline" /> ৪.৯ রেটিং (৩,৫০০+ গ্রাহক)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.15]">
              ক্লান্তি ও গ্যাস্ট্রিক দূর করে <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-amber-700 underline decoration-amber-400 decoration-wavy decoration-2">
                এক ঢোকেই পান
              </span>{' '}
              প্রাণবন্ত প্রশান্তি!
            </h1>

            {/* Subtitle */}
            <p className="text-stone-700 text-base sm:text-lg sm:leading-relaxed max-w-2xl mx-auto lg:mx-0">
              ইসবগুলের ভুসি, অর্গানিক চিয়া সিডস, তোকমা দানা ও খাঁটি আখের গুড়ের সমন্বয়ে তৈরি রেডি-মিক্স শরবত{' '}
              <strong className="text-emerald-900 font-bold">"JUSO"</strong>। আলাদা করে ঘণ্টার পর ঘণ্টা ভেজানোর ঝামেলা নেই—মাত্র ৩০ সেকেন্ডে তৈরি!
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto lg:mx-0">
              <div className="bg-white p-3 rounded-xl border border-stone-200/80 shadow-xs flex flex-col items-center lg:items-start text-center lg:text-left">
                <Clock className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="text-xs font-bold text-stone-800">১ মিনিটে রেডি</span>
                <span className="text-[11px] text-stone-500">ঝামেলামুক্ত</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-stone-200/80 shadow-xs flex flex-col items-center lg:items-start text-center lg:text-left">
                <Sparkles className="w-5 h-5 text-amber-600 mb-1" />
                <span className="text-xs font-bold text-stone-800">১০০% প্রাকৃতিক</span>
                <span className="text-[11px] text-stone-500">চিনিমুক্ত আখের গুড়</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-stone-200/80 shadow-xs flex flex-col items-center lg:items-start text-center lg:text-left">
                <HeartPulse className="w-5 h-5 text-rose-600 mb-1" />
                <span className="text-xs font-bold text-stone-800">গ্যাস্ট্রিক মুক্ত</span>
                <span className="text-[11px] text-stone-500">পেট ঠান্ডা রাখে</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-stone-200/80 shadow-xs flex flex-col items-center lg:items-start text-center lg:text-left">
                <ShieldCheck className="w-5 h-5 text-teal-600 mb-1" />
                <span className="text-xs font-bold text-stone-800">ক্যাশ অন ডেলিভারি</span>
                <span className="text-[11px] text-stone-500">পণ্য দেখে পেমেন্ট</span>
              </div>
            </div>

            {/* Flash Sale Urgency Card */}
            <div className="bg-amber-50 border border-amber-300/80 rounded-2xl p-3.5 sm:p-4 max-w-xl mx-auto lg:mx-0 flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-600 fill-amber-500" /> আজকের স্পেশাল ডিসকাউন্ট অফার
                </span>
                <p className="text-xs text-amber-800 font-medium">ফ্যামিলি প্যাকে ফ্রি ডেলিভারি + আকর্ষণীয় উপহার!</p>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs font-extrabold text-amber-950 bg-white px-3 py-1.5 rounded-lg border border-amber-200 shadow-inner">
                <span className="px-1.5 py-0.5 bg-amber-100 rounded">{String(timeLeft.hours).padStart(2, '0')}h</span>
                <span>:</span>
                <span className="px-1.5 py-0.5 bg-amber-100 rounded">{String(timeLeft.minutes).padStart(2, '0')}m</span>
                <span>:</span>
                <span className="px-1.5 py-0.5 bg-amber-100 rounded">{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onScrollToCheckout}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-extrabold text-lg shadow-xl shadow-emerald-800/30 hover:shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95 group cursor-pointer"
              >
                <span>এখনই অর্ডার করুন</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToDemo}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-300 font-bold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Droplets className="w-5 h-5 text-emerald-600" />
                <span>কীভাবে তৈরি করবেন দেখুন</span>
              </button>
            </div>

            {/* Bottom mini trust statement */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-stone-500 font-medium pt-1">
              <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> সারাদেশে ফ্রি ডেলিভারি (কম্বো)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> ৭ দিনের ক্যাশব্যাক নিশ্চয়তা
              </span>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Product Highlight Frame */}
              <div className="relative bg-gradient-to-br from-emerald-900 to-stone-900 rounded-3xl p-6 shadow-2xl text-white overflow-hidden border border-emerald-700/50">
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

                {/* Popular Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-stone-950 text-xs font-black tracking-wide uppercase shadow-md mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  বেস্টসেলার প্যাক
                </div>

                {/* Imagery Box */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 bg-stone-800 border border-emerald-600/30 shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=80"
                    alt="JUSO Natural Drink with Chia and Basil Seeds"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Drink Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-stone-900/85 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        JUSO ন্যাচারাল রেডি-মিক্স
                        <span className="text-[10px] bg-emerald-600 px-1.5 py-0.2 rounded font-mono">20 Sachets</span>
                      </h4>
                      <p className="text-[11px] text-emerald-200">চিয়া সিড + তোকমা + ইসবগুল + খাঁটি গুড়</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-stone-400 line-through">৳১২০০</span>
                      <p className="text-lg font-black text-amber-400">{formatTaka(popularPack.discountedPrice)}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Points inside card */}
                <div className="space-y-2 text-xs text-stone-200 font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-800/80 flex items-center justify-center text-emerald-300">✓</div>
                    <span>প্রতিদিন মাত্র ১ গ্লাসে সারাদিনের পেট ঠান্ডা ও এনার্জি</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-800/80 flex items-center justify-center text-emerald-300">✓</div>
                    <span>গ্যাস্ট্রিক ও বুকজ্বালা থেকে স্থায়ী প্রাকৃতিক মুক্তি</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-800/80 flex items-center justify-center text-emerald-300">✓</div>
                    <span>ডেলিভারি ম্যানের সামনে প্যাকেট চেক করে টাকা পরিশোধের সুবিধা</span>
                  </div>
                </div>

                {/* Card Button */}
                <button
                  onClick={onScrollToCheckout}
                  className="mt-5 w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>জনপ্রিয় প্যাকটি এখনই অর্ডার করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Floating Social Proof Chip */}
              <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white rounded-2xl p-3 shadow-xl border border-stone-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
                  🍵
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">আজকে ৫৪+ অর্ডার বুকড</p>
                  <p className="text-[11px] text-stone-500">ঢাকা ও চট্টগ্রামে দ্রুত ডেলিভারি চলছে</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
