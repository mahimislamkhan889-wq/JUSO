import React from 'react';
import { Check, X, ShieldAlert, Sparkles, Heart } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'প্রাকৃতিক ফাইবার (ইসবগুল ও চিয়া)',
      juso: 'উচ্চমাত্রায় বিদ্যমান (হজমের বন্ধু)',
      marketDrink: 'একদমই নেই',
      streetJuice: 'অনিশ্চিত মান ও কম ফাইবার',
    },
    {
      feature: 'মিষ্টির উৎস',
      juso: '১০০% অর্গানিক আখের গুড়',
      marketDrink: 'উচ্চ মাত্রার পরিশোধিত চিনি / কর্ন সিরাপ',
      streetJuice: 'অপরিষ্কার সাদা চিনি ও স্যাকারিন',
    },
    {
      feature: 'গ্যাস্ট্রিক ও এসিডিটি প্রভাব',
      juso: 'এসিডিটি ও বুকজ্বালা দূর করে',
      marketDrink: 'গ্যাস্ট্রিক বহুগুণ বাড়িয়ে দেয়',
      streetJuice: 'পেটে অস্বস্তি হতে পারে',
    },
    {
      feature: 'বানানোর সময় ও ঝামেলা',
      juso: 'মাত্র ৩০ সেকেন্ডে তৈরি (রেডি-মিক্স)',
      marketDrink: 'রেডি কিন্তু বিষাক্ত কেমিক্যালযুক্ত',
      streetJuice: 'আলাদা চিয়া-তোকমা ভেজাতে হয়',
    },
    {
      feature: 'সংরক্ষণ ও প্রিজারভেটিভ',
      juso: 'জিরো প্রিজারভেটিভ ও ফ্রেশ',
      marketDrink: 'সোডিয়াম বেনজয়েট ও কৃত্রিম রঙ',
      streetJuice: 'খোলা ও ধুলাবালির ঝুঁকি',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            কেন JUSO বেছে নেবেন?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 mt-3 mb-4 tracking-tight">
            সাধারণ ড্রিংকস বনাম প্রাকৃতিক 'JUSO' শরবত
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            আপনার ও আপনার পরিবারের স্বাস্থ্য সুরক্ষায় জেনে নিন বাজারের কৃত্রিম ড্রিংকস আর প্রাকৃতিক জুসোর আসল পার্থক্য।
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-stone-200 shadow-md">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="py-4 px-6 text-sm font-bold text-stone-700 w-1/4">বৈশিষ্ট্য</th>
                <th className="py-4 px-6 text-sm font-black text-emerald-900 bg-emerald-100/70 border-x border-emerald-300 w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white flex items-center justify-center text-xs">J</span>
                    <span>JUSO প্রাকৃতিক শরবত</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-sm font-bold text-rose-900 w-1/5">সাধারণ কোল্ড ড্রিংকস</th>
                <th className="py-4 px-6 text-sm font-bold text-stone-700 w-1/5">বাজারের সাধারণ শরবত</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                  <td className="py-4 px-6 font-semibold text-stone-900">{row.feature}</td>
                  
                  {/* JUSO Column */}
                  <td className="py-4 px-6 font-bold text-emerald-950 bg-emerald-50/60 border-x border-emerald-200/60">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{row.juso}</span>
                    </div>
                  </td>

                  {/* Soft drinks */}
                  <td className="py-4 px-6 text-rose-700">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span>{row.marketDrink}</span>
                    </div>
                  </td>

                  {/* Street juice */}
                  <td className="py-4 px-6 text-stone-600">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center shrink-0">
                        <ShieldAlert className="w-3.5 h-3.5" />
                      </div>
                      <span>{row.streetJuice}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
