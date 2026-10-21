import React from 'react';
import { ProductPackage } from '../types.ts';
import { formatTaka } from '../utils/orderCalculator.ts';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface StickyMobileBarProps {
  selectedPack: ProductPackage;
  quantity: number;
  onScrollToCheckout: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  selectedPack,
  quantity,
  onScrollToCheckout,
}) => {
  const totalPrice = selectedPack.discountedPrice * quantity;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200/90 p-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[11px] text-stone-500 font-medium truncate max-w-[140px]">
            {selectedPack.bengaliName}
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-emerald-900 font-mono">
              {formatTaka(totalPrice)}
            </span>
            <span className="text-[10px] text-stone-400 line-through font-mono">
              {formatTaka(selectedPack.originalPrice * quantity)}
            </span>
          </div>
        </div>

        <button
          onClick={onScrollToCheckout}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-800/20 active:scale-95 transition-all cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>অর্ডার করুন (ক্যাশ অন ডেলিভারি)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
