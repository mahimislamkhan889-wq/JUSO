import React from 'react';
import { PRODUCT_PACKAGES } from '../data/products.ts';
import { ProductPackage } from '../types.ts';
import { formatTaka } from '../utils/orderCalculator.ts';
import { Check, Sparkles, Truck, Gift, ShoppingBag, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  selectedPack: ProductPackage;
  onSelectPack: (pack: ProductPackage) => void;
  onScrollToCheckout: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  selectedPack,
  onSelectPack,
  onScrollToCheckout,
}) => {
  const handleChoosePack = (pack: ProductPackage) => {
    onSelectPack(pack);
    onScrollToCheckout();
  };

  return (
    <section id="packages" className="py-16 bg-[#FAF9F5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300">
            প্যাকেজ ও স্পেশাল অফার
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-3 mb-4 tracking-tight">
            আপনার পছন্দের JUSO প্যাকটি বেছে নিন
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            সীমিত সময়ের জন্য বিশেষ ডিসকাউন্ট চলছে। ফ্যামিলি ও মেগা সেভার প্যাকে পাচ্ছেন <strong>ফ্রি হোম ডেলিভারি</strong> এবং আকর্ষণীয় উপহার!
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_PACKAGES.map((pack) => {
            const isSelected = selectedPack.id === pack.id;
            return (
              <div
                key={pack.id}
                className={`relative bg-white rounded-3xl p-6 border-2 transition-all duration-300 flex flex-col justify-between ${
                  pack.isPopular
                    ? 'border-emerald-600 shadow-xl ring-4 ring-emerald-500/10'
                    : isSelected
                    ? 'border-amber-500 shadow-lg'
                    : 'border-stone-200/80 shadow-xs hover:shadow-md hover:border-stone-300'
                }`}
              >
                {/* Popular Ribbon */}
                {pack.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-700 to-teal-800 text-white text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    সবচেয়ে বেশি বিক্রিত
                  </div>
                )}

                {/* Tag for other packs */}
                {!pack.isPopular && pack.tag && (
                  <div className="absolute -top-3 left-6 bg-stone-800 text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow-xs">
                    {pack.tag}
                  </div>
                )}

                <div>
                  {/* Image */}
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 bg-stone-100 border border-stone-100">
                    <img
                      src={pack.image}
                      alt={pack.bengaliName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-stone-900 leading-snug mb-1">
                    {pack.bengaliName}
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">{pack.description}</p>

                  {/* Pricing Display */}
                  <div className="bg-stone-50 rounded-2xl p-3 border border-stone-100 mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-emerald-900 font-mono">
                        {formatTaka(pack.discountedPrice)}
                      </span>
                      <span className="text-xs text-stone-400 line-through font-mono">
                        {formatTaka(pack.originalPrice)}
                      </span>
                      <span className="ml-auto text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                        {pack.discountPercent}% ছাড়
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                      মোট সাশ্রয়: {formatTaka(pack.savingsAmount)}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 text-xs text-stone-600 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{pack.sachetsCount} টি আলাদা স্যাশে প্যাক</span>
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        {pack.freeDelivery ? (
                          <strong className="text-emerald-800">সারাদেশে ডেলিভারি চার্জ ফ্রি!</strong>
                        ) : (
                          'ঢাকার ভেতরে ৳৬০ / বাইরে ৳১২০'
                        )}
                      </span>
                    </li>
                    {pack.freeGift && (
                      <li className="flex items-center gap-2 font-bold text-amber-900 bg-amber-50 p-1.5 rounded-lg border border-amber-200">
                        <Gift className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{pack.freeGift}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* CTA Order Button */}
                <button
                  onClick={() => handleChoosePack(pack)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer ${
                    pack.isPopular
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-800/20'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>এই প্যাকটি অর্ডার করুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
