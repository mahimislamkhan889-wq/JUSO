import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Droplets, Info, Eye, ShieldCheck, Heart } from 'lucide-react';

interface JusoJarShowcaseProps {
  onScrollToInquiry: () => void;
}

export const JusoJarShowcase: React.FC<JusoJarShowcaseProps> = ({ onScrollToInquiry }) => {
  const [activeView, setActiveView] = useState<'front' | 'label' | 'ingredients'>('front');

  return (
    <div id="story" className="space-y-20 py-16 scroll-mt-24">
      
      {/* ========================================================
          Part 1: THE LITTLE THINGS & Brand Story
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag: THE LITTLE THINGS */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 border border-orange-200 text-xs font-mono font-bold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>THE LITTLE THINGS</span>
            </div>

            {/* Sub-badge: JUSO · Natural Refreshment */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 font-mono">
              <img
                src="/assets/aistudio/JUSO_Logo-01_1af84505.png"
                alt="JUSO Emblem"
                className="w-4 h-4 object-contain inline"
              />
              <span>JUSO · Natural Refreshment</span>
            </div>

            {/* Headline:
                বড় আনন্দের জন্য
                ছোট্ট একটা বিরতি। */}
            <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
              বড় আনন্দের জন্য <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-700">
                ছোট্ট একটা বিরতি।
              </span>
            </h2>

            {/* Paragraph 1:
                দিনের কাজের ফাঁকে কিংবা প্রিয় মানুষের সঙ্গে গল্পে—নিজের জন্য একটু সময় থাকুক। সেই ছোট্ট বিরতির সঙ্গী হয়ে আসছে JUSO। */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
              দিনের কাজের ফাঁকে কিংবা প্রিয় মানুষের সঙ্গে গল্পে—নিজের জন্য একটু সময় থাকুক। সেই ছোট্ট বিরতির সঙ্গী হয়ে আসছে <strong className="text-stone-900 font-bold">JUSO</strong>।
            </p>

            {/* Paragraph 2:
                রঙে প্রাণবন্ত, পরিচয়ে সহজ। তোমার প্রতিদিনের গল্পে আমাদেরও একটু জায়গা হোক। */}
            <div className="text-stone-700 text-sm sm:text-base leading-relaxed bg-[#F8F5EE] p-5 rounded-2xl border-l-4 border-emerald-600 shadow-xs space-y-2">
              <p className="font-medium">
                রঙে প্রাণবন্ত, পরিচয়ে সহজ। তোমার প্রতিদিনের গল্পে আমাদেরও একটু জায়গা হোক।
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-stone-600 font-mono">
                <span className="inline-flex items-center gap-1 text-orange-700 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Sip.
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                  <Heart className="w-3.5 h-3.5" />
                  Smile.
                </span>
                <span className="inline-flex items-center gap-1 text-stone-800 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Repeat.
                </span>
              </div>
            </div>

            {/* Quick interactive packaging switcher */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block mb-2 font-bold">
                JUSO জারের সম্পূর্ণ প্যাকেজিং ডিজাইন:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveView('front')}
                  className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeView === 'front'
                      ? 'bg-stone-900 text-white shadow-md'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>কমলা ও সবুজ লেবেল</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView('label')}
                  className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeView === 'label'
                      ? 'bg-stone-900 text-white shadow-md'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>লেবেল ও স্লোগান</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView('ingredients')}
                  className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeView === 'ingredients'
                      ? 'bg-stone-900 text-white shadow-md'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <Droplets className="w-3.5 h-3.5" />
                  <span>প্রাকৃতিক ফর্মুলা</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Visual Jar Presentation with real photo */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F0] to-[#EFEBE0] rounded-3xl p-6 sm:p-8 border-2 border-stone-200 shadow-2xl overflow-hidden group">
              
              {/* Background Decorative Rings */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-400/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

              {/* Jar Presentation Frame */}
              <div className="relative flex flex-col items-center">
                
                {/* Floating Badge */}
                <div className="w-full flex items-center justify-between mb-3 px-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase font-bold text-stone-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-stone-200 shadow-xs flex items-center gap-1.5">
                    <img
                      src="/assets/aistudio/JUSO_Logo-01_1af84505.png"
                      alt="JUSO Emblem"
                      className="w-3.5 h-3.5 object-contain"
                    />
                    <span>ORIGINAL JUSO JAR</span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-bold">
                    ১০০% প্রাকৃতিক
                  </span>
                </div>

                {/* Actual Real Uploaded Jar Image */}
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-inner bg-gradient-to-b from-stone-100/50 to-stone-200/50 p-2">
                  <div className="relative overflow-hidden rounded-xl bg-white aspect-[4/5] flex items-center justify-center">
                    <img
                      src="/assets/aistudio/JUSO_Natural_Refreshment_Jar_Label_29f45cfc.png"
                      alt="কমলা ও সবুজ লেবেলে JUSO পানীয়ের জার"
                      className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 ${
                        activeView === 'label'
                          ? 'scale-110'
                          : activeView === 'ingredients'
                          ? 'scale-105 contrast-105'
                          : 'scale-100'
                      }`}
                    />

                    {/* Interactive Spotlight Callouts based on activeView */}
                    {activeView === 'front' && (
                      <div className="absolute bottom-4 inset-x-4 bg-stone-900/85 backdrop-blur-md text-white rounded-xl p-3 shadow-lg border border-stone-700 transition-all text-center">
                        <p className="text-xs font-bold text-orange-300 mb-0.5">
                          কমলা ও সবুজ সিগনেচার লেবেল
                        </p>
                        <p className="text-[11px] text-stone-300">
                          মিনিমালিস্ট ও প্রাণবন্ত উপস্থাপনা যা প্রতিদিনের সতেজতাকে ফুটিয়ে তোলে।
                        </p>
                      </div>
                    )}

                    {activeView === 'label' && (
                      <div className="absolute top-4 inset-x-4 bg-white/95 backdrop-blur-md text-stone-900 rounded-xl p-3 shadow-xl border border-orange-200 transition-all text-center animate-fadeIn">
                        <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-stone-800">
                          <span className="text-orange-600">Sip.</span>
                          <span className="text-emerald-700">Smile.</span>
                          <span className="text-stone-900">Repeat.</span>
                        </div>
                        <p className="text-[11px] text-stone-600 mt-1">
                          THE JUSO EDIT / 01 · এক চুমুক সতেজতা
                        </p>
                      </div>
                    )}

                    {activeView === 'ingredients' && (
                      <div className="absolute bottom-4 inset-x-4 bg-emerald-950/90 backdrop-blur-md text-white rounded-xl p-3 shadow-xl border border-emerald-600/50 transition-all">
                        <p className="text-xs font-bold text-emerald-300 mb-1 flex items-center gap-1 justify-center">
                          <Droplets className="w-3.5 h-3.5" />
                          <span>খাঁটি প্রাকৃতিক ফর্মুলা</span>
                        </p>
                        <div className="flex flex-wrap justify-center gap-1.5 text-[10px] font-medium text-emerald-100">
                          <span className="bg-emerald-800/80 px-2 py-0.5 rounded-full">চিঁয়া সিড</span>
                          <span className="bg-emerald-800/80 px-2 py-0.5 rounded-full">ইসবগুলের ভুসি</span>
                          <span className="bg-emerald-800/80 px-2 py-0.5 rounded-full">তোকমা দানা</span>
                          <span className="bg-emerald-800/80 px-2 py-0.5 rounded-full">লেবুর নির্যাস</span>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Caption exactly matching user text:
                    "কমলা ও সবুজ লেবেলে JUSO পানীয়ের জার"
                    "Sip. Smile. Repeat." */}
                <div className="mt-4 text-center space-y-1">
                  <p className="text-sm font-bold text-stone-900 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span>কমলা ও সবুজ লেবেলে JUSO পানীয়ের জার</span>
                  </p>
                  <p className="text-xs font-mono font-semibold tracking-wider text-emerald-800">
                    Sip. Smile. Repeat.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          Part 2: INTRODUCING JUSO & Launch Status Cards
          ======================================================== */}
      <section id="introducing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 scroll-mt-24">
        <div className="bg-stone-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden border border-stone-800 shadow-2xl">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            
            {/* Header:
                INTRODUCING JUSO
                তোমার পরের
                বিরতির সঙ্গী। */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-400 font-bold bg-orange-400/10 px-4 py-1.5 rounded-full border border-orange-400/20">
                <img
                  src="/assets/aistudio/JUSO_Logo-01_1af84505.png"
                  alt="JUSO Emblem"
                  className="w-4 h-4 object-contain inline"
                />
                <span>INTRODUCING JUSO</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                তোমার পরের <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-400">
                  বিরতির সঙ্গী।
                </span>
              </h2>
            </div>

            {/* First Look banner:
                প্রথম ঝলক
                JUSO Natural Refreshment
                চেনা মুহূর্তে নতুন রঙ। */}
            <div className="bg-stone-800/90 rounded-2xl p-6 border border-stone-700/80 text-center max-w-xl mx-auto shadow-xl relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>প্রথম ঝলক</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                <span>JUSO Natural Refreshment</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-300">
                চেনা মুহূর্তে নতুন রঙ।
              </p>
            </div>

            {/* 3 Status Cards exactly as requested:
                প্যাকেজিং -> জার
                দাম ও প্যাক সাইজ -> শিগগিরই জানানো হবে
                অর্ডার -> এখনো চালু হয়নি (অর্ডারের তথ্য →) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              
              {/* Card 1: প্যাকেজিং -> জার */}
              <div className="bg-stone-800/60 rounded-2xl p-5 border border-stone-700 text-center flex flex-col justify-between hover:border-stone-600 transition-colors">
                <span className="text-xs text-stone-400 font-mono uppercase font-semibold">
                  প্যাকেজিং
                </span>
                <p className="text-2xl font-black text-white my-2">
                  জার
                </p>
                <span className="text-[11px] text-stone-400">
                  সিগনেচার গ্লাস জার
                </span>
              </div>

              {/* Card 2: দাম ও প্যাক সাইজ -> শিগগিরই জানানো হবে */}
              <div className="bg-stone-800/60 rounded-2xl p-5 border border-stone-700 text-center flex flex-col justify-between hover:border-orange-500/30 transition-colors">
                <span className="text-xs text-stone-400 font-mono uppercase font-semibold">
                  দাম ও প্যাক সাইজ
                </span>
                <p className="text-lg sm:text-xl font-bold text-orange-400 my-2">
                  শিগগিরই জানানো হবে
                </p>
                <span className="text-[11px] text-stone-400">
                  অফিসিয়াল লঞ্চিং ঘোষণা
                </span>
              </div>

              {/* Card 3: অর্ডার -> এখনো চালু হয়নি (অর্ডারের তথ্য →) */}
              <div className="bg-stone-800/60 rounded-2xl p-5 border border-stone-700 text-center flex flex-col justify-between hover:border-emerald-500/30 transition-colors">
                <span className="text-xs text-stone-400 font-mono uppercase font-semibold">
                  অর্ডার
                </span>
                <p className="text-lg sm:text-xl font-bold text-emerald-400 my-2">
                  এখনো চালু হয়নি
                </p>
                <button
                  type="button"
                  onClick={onScrollToInquiry}
                  className="text-xs text-orange-300 hover:text-orange-200 font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer group"
                >
                  <span>অর্ডারের তথ্য</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

