import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, Menu, X, Sparkles } from 'lucide-react';

interface JusoHeaderProps {
  onScrollToStory: () => void;
  onScrollToProduct: () => void;
  onScrollToInquiry: () => void;
  onScrollToFaq: () => void;
}

export const JusoHeader: React.FC<JusoHeaderProps> = ({
  onScrollToStory,
  onScrollToProduct,
  onScrollToInquiry,
  onScrollToFaq,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80">
      {/* Top micro-bar: "A LITTLE PAUSE. A LITTLE JUSO." */}
      <div className="bg-stone-900 text-stone-200 text-[11px] sm:text-xs py-1.5 px-4 tracking-widest uppercase font-mono font-medium flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="flex items-center gap-2">
            <img
              src="/assets/aistudio/JUSO_Logo-01_1af84505.png"
              alt="JUSO Emblem"
              className="w-4 h-4 object-contain inline"
            />
            <span>A LITTLE PAUSE. A LITTLE JUSO.</span>
          </span>
          <button
            onClick={onScrollToProduct}
            className="hover:text-orange-300 transition-colors flex items-center gap-1 font-sans text-xs capitalize cursor-pointer text-stone-300"
          >
            <span>বিস্তারিত দেখুন</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo: JUSO */}
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img
              src="/assets/aistudio/JUSO_Juicy_Organic_Logo_68d588f6.png"
              alt="JUSO Natural Refreshment"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-xs"
            />
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-semibold text-stone-700">
            <button
              onClick={onScrollToStory}
              className="hover:text-emerald-800 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>ব্র্যান্ডের গল্প</span>
              <ArrowDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <button
              onClick={onScrollToProduct}
              className="hover:text-emerald-800 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>JUSO দেখুন</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </button>
            <button
              onClick={onScrollToInquiry}
              className="hover:text-emerald-800 transition-colors cursor-pointer"
            >
              <span>অনুসন্ধান খসড়া</span>
            </button>
            <button
              onClick={onScrollToFaq}
              className="hover:text-emerald-800 transition-colors cursor-pointer"
            >
              <span>GOOD TO KNOW</span>
            </button>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onScrollToProduct}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all hover:shadow-md cursor-pointer"
            >
              <span>বিস্তারিত দেখুন</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl text-stone-800 hover:bg-stone-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-5 space-y-3 shadow-lg">
          <button
            onClick={() => {
              setMobileOpen(false);
              onScrollToStory();
            }}
            className="w-full text-left px-3 py-2 text-stone-800 hover:bg-stone-50 rounded-lg text-sm font-semibold flex items-center justify-between"
          >
            <span>ব্র্যান্ডের গল্প</span>
            <ArrowDown className="w-4 h-4 text-stone-400" />
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onScrollToProduct();
            }}
            className="w-full text-left px-3 py-2 text-stone-800 hover:bg-stone-50 rounded-lg text-sm font-semibold flex items-center justify-between"
          >
            <span>JUSO দেখুন</span>
            <ArrowUpRight className="w-4 h-4 text-stone-400" />
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onScrollToInquiry();
            }}
            className="w-full text-left px-3 py-2 text-stone-800 hover:bg-stone-50 rounded-lg text-sm font-semibold flex items-center justify-between"
          >
            <span>অনুসন্ধান বার্তা খসড়া</span>
            <ArrowUpRight className="w-4 h-4 text-stone-400" />
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onScrollToFaq();
            }}
            className="w-full text-left px-3 py-2 text-stone-800 hover:bg-stone-50 rounded-lg text-sm font-semibold"
          >
            <span>GOOD TO KNOW (প্রশ্নোত্তর)</span>
          </button>
        </div>
      )}
    </header>
  );
};
