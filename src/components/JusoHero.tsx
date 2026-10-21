import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';

interface JusoHeroProps {
  onScrollToStory: () => void;
  onScrollToProduct: () => void;
}

export const JusoHero: React.FC<JusoHeroProps> = ({ onScrollToStory, onScrollToProduct }) => {
  return (
    <section id="home" className="pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden relative">
      {/* Background soft ambient accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Eyebrow Label: MEET YOUR EVERYDAY REFRESHMENT */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 text-stone-100 text-[11px] sm:text-xs font-mono tracking-widest uppercase shadow-md border border-stone-800">
            <img
              src="/assets/aistudio/JUSO_Logo-01_1af84505.png"
              alt="JUSO Emblem"
              className="w-4 h-4 object-contain inline"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span>MEET YOUR EVERYDAY REFRESHMENT</span>
          </div>

          {/* Headline:
              ব্যস্ততার মাঝে,
              এক চুমুক
              নিজের জন্য। */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-stone-900 tracking-tight leading-[1.12]">
            ব্যস্ততার মাঝে, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-700">
              এক চুমুক
            </span> <br />
            নিজের জন্য।
          </h1>

          {/* Subtitle:
              একটু বিরতি, একটু আড্ডা, আর সঙ্গে JUSO। প্রতিদিনের ছোট্ট মুহূর্তগুলো হোক আরও রঙিন। */}
          <p className="text-stone-700 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            একটু বিরতি, একটু আড্ডা, আর সঙ্গে <strong className="text-stone-950 font-bold">JUSO</strong>। প্রতিদিনের ছোট্ট মুহূর্তগুলো হোক আরও রঙিন।
          </p>

          {/* Action CTAs:
              JUSO দেখুন ↗
              ব্র্যান্ডের গল্প ↓ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={onScrollToProduct}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-extrabold text-base transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer group"
            >
              <span>JUSO দেখুন</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onScrollToStory}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-stone-50 text-stone-900 border-2 border-stone-300 font-bold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>ব্র্যান্ডের গল্প</span>
              <ArrowDown className="w-4 h-4 text-stone-500" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
