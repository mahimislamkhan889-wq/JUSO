import React from 'react';
import { INGREDIENTS } from '../data/ingredients.ts';
import { Sparkles, Shield, Heart, Zap, Leaf, Check } from 'lucide-react';

export const IngredientsSection: React.FC = () => {
  return (
    <section id="ingredients" className="py-16 bg-[#FAF9F5] border-t border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300/50">
            🌿 ১০০% খাঁটি উপাদান
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-3 mb-4 tracking-tight">
            প্রকৃতির সেরা ৫টি উপাদানের অপূর্ব মেলবন্ধন
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            কোনো কৃত্রিম সুগন্ধি, বিষাক্ত রাসায়নিক বা পরিশোধিত সাদা চিনি নেই। প্রতিদিনের স্বাস্থ্য সুরক্ষায় নির্ভরযোগ্য প্রাকৃতিক সমাধান।
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INGREDIENTS.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header inside card */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800 text-xl font-black shadow-xs group-hover:scale-110 transition-transform">
                    {idx === 0 && '🌾'}
                    {idx === 1 && '🌱'}
                    {idx === 2 && '🍃'}
                    {idx === 3 && '🍯'}
                    {idx === 4 && '🍋'}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                    {item.badge}
                  </span>
                </div>

                {/* Names */}
                <h3 className="text-lg font-bold text-stone-900 mb-1 group-hover:text-emerald-800 transition-colors">
                  {item.nameBn}
                </h3>
                <p className="text-xs text-stone-600 font-mono mb-3">{item.nameEn}</p>

                {/* Main Benefit Box */}
                <div className="bg-amber-50/70 border-l-3 border-amber-500 p-2.5 rounded-r-xl mb-3">
                  <p className="text-xs font-semibold text-amber-900">{item.benefitBn}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-stone-600 leading-relaxed">{item.descriptionBn}</p>
              </div>

              {/* Bottom verified check */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>ল্যাব পরীক্ষিত ও ফুড-গ্রেড স্ট্যান্ডার্ড</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Health Promise */}
          <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between border border-emerald-600/40">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 text-2xl mb-4">
                ✨
              </div>
              <h3 className="text-xl font-bold mb-2">আমাদের স্বাস্থ্য অঙ্গীকার</h3>
              <p className="text-xs text-emerald-100 leading-relaxed mb-4">
                dhok.bd এর ধারণায় অনুপ্রাণিত হয়ে আমরা প্রতিটি উপাদানের সর্বোচ্চ বিশুদ্ধতা নিশ্চিত করি। আমাদের শরবতে শূন্য প্রিজারভেটিভ ব্যবহার করা হয়।
              </p>
              <ul className="space-y-2 text-xs text-emerald-50">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span> কোনো ক্ষতিকর সাদা চিনি নেই
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span> কোনো রাসায়নিক রঙ বা এসেন্স নেই
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span> পরিবারের ছোট-বড় সবার জন্য নিরাপদ
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/10 text-[11px] text-emerald-200">
              ১০০% ক্যাশ অন ডেলিভারি সুবিধা
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
