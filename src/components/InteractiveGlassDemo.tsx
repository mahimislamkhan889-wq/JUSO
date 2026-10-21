import React, { useState } from 'react';
import { Droplet, Sparkles, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

interface InteractiveGlassDemoProps {
  onOrderNow: () => void;
}

export const InteractiveGlassDemo: React.FC<InteractiveGlassDemoProps> = ({ onOrderNow }) => {
  // Demo step: 0 = empty, 1 = water, 2 = sachet added, 3 = stirred & ready!
  const [step, setStep] = useState<number>(3);
  const [isStirring, setIsStirring] = useState<boolean>(false);

  const handleNextStep = () => {
    if (step < 3) {
      if (step === 2) {
        setIsStirring(true);
        setTimeout(() => {
          setIsStirring(false);
          setStep(3);
        }, 1200);
      } else {
        setStep(step + 1);
      }
    } else {
      setStep(0);
    }
  };

  return (
    <section id="how-to-use" className="py-14 bg-stone-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-black text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            ইন্টারেক্টিভ ড্রিংক টেস্ট
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 mb-4 tracking-tight">
            মাত্র ৩০ সেকেন্ডে যেভাবে তৈরি করবেন JUSO শরবত
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            কোনো ধরনের ঝুটঝামেলা ছাড়াই অফিস, বাসা কিংবা ট্রাভেলে ঠান্ডা পানি দিয়ে এক নিমিষেই বানিয়ে নিন খাঁটি চিয়া-তোকমার প্রাকৃতিক শরবত।
          </p>
        </div>

        {/* Interactive Glass Visualizer & Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto bg-stone-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-stone-700/70 shadow-2xl">
          
          {/* Left: The Virtual Glass Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-4">
            <div className="relative w-48 sm:w-56 h-80 sm:h-92 bg-gradient-to-b from-white/10 to-white/5 rounded-b-[40px] rounded-t-lg border-x-4 border-b-4 border-white/20 p-2 shadow-2xl flex flex-col justify-end overflow-hidden">
              
              {/* Glass Top Rim highlight */}
              <div className="absolute top-2 left-2 right-2 h-3 border-2 border-white/30 rounded-full bg-white/5" />

              {/* Water Layer */}
              <div
                className={`w-full transition-all duration-700 rounded-b-[32px] relative overflow-hidden ${
                  step === 0
                    ? 'h-0 opacity-0'
                    : step === 1
                    ? 'h-3/4 bg-cyan-500/30'
                    : step === 2
                    ? 'h-3/4 bg-amber-600/50'
                    : 'h-3/4 bg-gradient-to-t from-amber-700/80 via-emerald-800/70 to-amber-600/70'
                }`}
              >
                {/* Surface Wave effect */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-white/20 animate-pulse" />

                {/* Floating Chia and Basil seeds particles */}
                {step >= 2 && (
                  <div className={`absolute inset-0 p-3 pointer-events-none ${isStirring ? 'animate-spin' : ''}`}>
                    {/* Floating simulated seeds */}
                    {[
                      { top: '20%', left: '30%', size: 'w-2 h-2', bg: 'bg-stone-900', delay: '0s' },
                      { top: '35%', left: '70%', size: 'w-2.5 h-2.5', bg: 'bg-stone-900 border border-white/40', delay: '0.2s' },
                      { top: '50%', left: '25%', size: 'w-2 h-2', bg: 'bg-emerald-950', delay: '0.4s' },
                      { top: '65%', left: '60%', size: 'w-2 h-2', bg: 'bg-stone-900', delay: '0.1s' },
                      { top: '40%', left: '45%', size: 'w-3 h-3', bg: 'bg-stone-950 rounded-full border border-emerald-400/40', delay: '0.3s' },
                      { top: '75%', left: '35%', size: 'w-2 h-2', bg: 'bg-stone-900', delay: '0.5s' },
                      { top: '80%', left: '75%', size: 'w-2.5 h-2.5', bg: 'bg-emerald-950', delay: '0.2s' },
                      { top: '25%', left: '80%', size: 'w-2 h-2', bg: 'bg-stone-900', delay: '0.6s' },
                    ].map((seed, idx) => (
                      <div
                        key={idx}
                        className={`absolute rounded-full shadow-xs ${seed.size} ${seed.bg}`}
                        style={{
                          top: seed.top,
                          left: seed.left,
                          animation: `pulseGlow 2s infinite ease-in-out ${seed.delay}`,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Ice cubes effect if ready */}
                {step === 3 && (
                  <div className="absolute top-4 left-6 w-8 h-8 rounded-lg bg-white/25 border border-white/40 backdrop-blur-xs transform -rotate-12 shadow-inner" />
                )}
                {step === 3 && (
                  <div className="absolute top-8 right-6 w-7 h-7 rounded-lg bg-white/20 border border-white/40 backdrop-blur-xs transform rotate-12 shadow-inner" />
                )}
              </div>

              {/* Status overlay on glass */}
              <div className="absolute top-6 left-0 right-0 text-center pointer-events-none">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
                  {step === 0 && 'গ্লাস খালি (১ম ধাপ)'}
                  {step === 1 && 'পানি ঢালা হয়েছে'}
                  {step === 2 && 'JUSO পাউডার যোগ করা হয়েছে'}
                  {step === 3 && '✨ ঠান্ডা প্রাণবন্ত শরবত প্রস্তুত!'}
                </span>
              </div>
            </div>

            {/* Quick interactive glass controls */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={handleNextStep}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                {step === 3 ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5" /> পুনরায় শুরু করুন
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" /> পরবর্তী ধাপ দেখুন
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Step-by-Step Interactive Guide */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              বানানোর সহজ ৩টি ধাপ:
            </h3>

            <div className="space-y-3">
              {/* Step 1 */}
              <div
                onClick={() => setStep(1)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  step === 1
                    ? 'bg-emerald-950/70 border-emerald-500 shadow-lg'
                    : 'bg-stone-800/50 border-stone-700 hover:border-stone-600'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center shrink-0 ${
                    step >= 1 ? 'bg-emerald-500 text-stone-950' : 'bg-stone-700 text-stone-300'
                  }`}
                >
                  ১
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">১ গ্লাস পানি নিন</h4>
                  <p className="text-xs text-stone-300 mt-0.5">
                    ২৫০-৩০০ মিলি সাধারণ কিংবা ফ্রিজের ঠান্ডা পানি গ্লাসে অথবা শেকারে নিন।
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                onClick={() => setStep(2)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  step === 2
                    ? 'bg-emerald-950/70 border-emerald-500 shadow-lg'
                    : 'bg-stone-800/50 border-stone-700 hover:border-stone-600'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center shrink-0 ${
                    step >= 2 ? 'bg-emerald-500 text-stone-950' : 'bg-stone-700 text-stone-300'
                  }`}
                >
                  ২
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">১ স্যাশে JUSO মিক্স ঢালুন</h4>
                  <p className="text-xs text-stone-300 mt-0.5">
                    সহজেই প্যাকটি ছিঁড়ে পুরো পাউডারটি পানিতে ঢেলে দিন। আলাদা চিনি বা লবণ মেশানোর প্রয়োজন নেই।
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                onClick={() => {
                  setIsStirring(true);
                  setTimeout(() => {
                    setIsStirring(false);
                    setStep(3);
                  }, 800);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  step === 3
                    ? 'bg-emerald-950/70 border-emerald-500 shadow-lg'
                    : 'bg-stone-800/50 border-stone-700 hover:border-stone-600'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center shrink-0 ${
                    step === 3 ? 'bg-amber-400 text-stone-950' : 'bg-stone-700 text-stone-300'
                  }`}
                >
                  ৩
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">৩০ সেকেন্ড নেড়ে উপভোগ করুন</h4>
                  <p className="text-xs text-stone-300 mt-0.5">
                    চামচ দিয়ে ৩০-৪৫ সেকেন্ড নাড়লে চিয়া সিড ও তোকমা দানা ফুলে উঠবে। বরফ কুচি মিশিয়ে এক চুমুকেই প্রাণ জুড়িয়ে নিন!
                  </p>
                </div>
              </div>
            </div>

            {/* Direct action button */}
            <div className="pt-2">
              <button
                onClick={onOrderNow}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98 cursor-pointer"
              >
                <span>এই সুস্বাদু শরবত পেতে এখনই অর্ডার করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
