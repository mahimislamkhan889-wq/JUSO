import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

export const JusoGoodToKnow: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'কীভাবে অর্ডার করব?',
      answer:
        'JUSO-এর অফিসিয়াল অনলাইন অর্ডার শিগগিরই চালু হবে। তখন সরাসরি ওয়েবসাইট থেকেই পছন্দের জার অর্ডার করা যাবে। আপাতত উপরের "অনুসন্ধান বার্তা" ফর্ম পূরণ করে তোমার আগ্রহ ও পছন্দের জারের সংখ্যা জানিয়ে রাখতে পারো। আমাদের টিম খুব দ্রুত যোগাযোগের লিংক প্রদান করবে।',
    },
    {
      question: 'দাম, উপাদান ও প্যাক সাইজ কত?',
      answer:
        'প্রাকৃতিক ও পুষ্টিকর উপাদানে তৈরি আমাদের প্রতিটি সিগনেচার জারের বিস্তারিত দাম, প্যাক সাইজ এবং সম্পূর্ণ উপাদান তালিকা অফিসিয়াল লঞ্চের সাথে সাথে উন্মুক্ত করা হবে। গ্রাহকদের জন্য সাশ্রয়ী ও প্রিমিয়াম মূল্যের সমন্বয়ে এটি প্রস্তুত করা হচ্ছে।',
    },
    {
      question: 'ডেলিভারি কোথায় পাওয়া যাবে?',
      answer:
        'লঞ্চের প্রথম দিন থেকেই রাজধানী ঢাকা সহ সারা বাংলাদেশের ৬৪টি জেলাতেই বিশ্বস্ত হোম ডেলিভারি সার্ভিসের মাধ্যমে JUSO পৌঁছে দেওয়ার প্রস্তুতি সম্পন্ন করা হচ্ছে। পণ্য হাতে পেয়ে চেক করে নেওয়ার সুবিধা থাকবে।',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-white border-t border-stone-200 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header:
            GOOD TO KNOW
            কিছু কথা, আগে থেকেই। */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-900 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200 font-bold">
            GOOD TO KNOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            কিছু কথা, আগে থেকেই।
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            JUSO পানীয় এবং আমাদের প্রস্তুতি সম্পর্কিত প্রাথমিক তথ্যগুলো জেনে নাও।
          </p>
        </div>

        {/* 3 Questions Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-2xl border border-stone-200/90 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-stone-900 text-sm sm:text-base hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-600">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-200/60 bg-white/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
