import React, { useState } from 'react';
import { FAQS } from '../data/faqs.ts';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-[#FAF9F5] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300">
            সাধারণ জিজ্ঞাসা
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 mt-3 mb-3 tracking-tight">
            সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তর
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            JUSO সম্পর্কে যেকোনো প্রশ্ন থাকলে নিচের উত্তরগুলো দেখতে পারেন অথবা সরাসরি কল করতে পারেন আমাদের কাস্টমার সাপোর্টে।
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-stone-900 text-sm hover:text-emerald-800 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Customer Support Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-emerald-950">আরও কোনো কিছু জানতে চান?</h4>
            <p className="text-xs text-stone-600">আমাদের কাস্টমার কেয়ার টিম প্রতিদিন সকাল ৯টা থেকে রাত ১০টা পর্যন্ত সক্রিয়।</p>
          </div>
          <a
            href="tel:01700123456"
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-colors shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>সরাসরি কথা বলুন (01700-123456)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
