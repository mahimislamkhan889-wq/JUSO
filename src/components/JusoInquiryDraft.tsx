import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { generateInquiryDraft, getWhatsAppInquiryUrl } from '../utils/inquiryHelper.ts';

export const JusoInquiryDraft: React.FC = () => {
  const [name, setName] = useState('');
  const [jarCount, setJarCount] = useState<number>(1);
  const [phone, setPhone] = useState('');
  const [generatedDraft, setGeneratedDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const draft = generateInquiryDraft({
      name: name.trim(),
      jarCount,
      phone: phone.trim() || undefined,
    });
    setGeneratedDraft(draft);
    setCopied(false);
  };

  const handleCopy = () => {
    if (!generatedDraft) return;
    navigator.clipboard?.writeText(generatedDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="inquiry" className="py-16 bg-[#FAF8F5] border-t border-stone-200 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title:
            YOUR NEXT SIP
            JUSO নিতে আগ্রহী? */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-900 bg-orange-100 px-3.5 py-1.5 rounded-full border border-orange-200 font-bold">
            YOUR NEXT SIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            JUSO নিতে আগ্রহী?
          </h2>
          {/* Subtitle:
              অনলাইন অর্ডার শিগগিরই চালু হবে। আপাতত নিচের ফর্মে একটি অনুসন্ধান বার্তার খসড়া তৈরি করে রাখতে পারো। */}
          <p className="text-stone-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            অনলাইন অর্ডার শিগগিরই চালু হবে। আপাতত নিচের ফর্মে একটি অনুসন্ধান বার্তার খসড়া তৈরি করে রাখতে পারো।
          </p>
          
          {/* Notice:
              এখানে কোনো অর্ডার জমা হবে না বা তথ্য পাঠানো হবে না। */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-100 text-stone-600 text-xs font-medium border border-stone-200">
            <AlertCircle className="w-3.5 h-3.5 text-stone-500" />
            <span>এখানে কোনো অর্ডার জমা হবে না বা তথ্য পাঠানো হবে না।</span>
          </div>
        </div>

        {/* The Inquiry Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl max-w-xl mx-auto space-y-6">
          <form onSubmit={handleGenerate} className="space-y-5">
            
            {/* Field 1: তোমার নাম (নাম লিখুন) */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wide mb-1.5 font-mono">
                তোমার নাম
              </label>
              <input
                type="text"
                required
                placeholder="নাম লিখুন"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-stone-300 text-sm bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-sans"
              />
            </div>

            {/* Field 2: কতটি জার নিতে চাও? (1) */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wide mb-1.5 font-mono">
                কতটি জার নিতে চাও?
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setJarCount(Math.max(1, jarCount - 1))}
                  className="w-11 h-11 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-base flex items-center justify-center transition-colors cursor-pointer"
                >
                  -
                </button>
                <div className="flex-1 bg-stone-50 border border-stone-300 rounded-2xl py-2.5 text-center font-mono font-bold text-lg text-stone-900">
                  {jarCount}
                </div>
                <button
                  type="button"
                  onClick={() => setJarCount(jarCount + 1)}
                  className="w-11 h-11 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-base flex items-center justify-center transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Optional Phone / Contact info */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wide mb-1.5 font-mono">
                মোবাইল নম্বর (ঐচ্ছিক)
              </label>
              <input
                type="text"
                placeholder="01XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-stone-300 text-sm bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-mono"
              />
            </div>

            {/* Submit CTA:
                অনুসন্ধান বার্তা তৈরি করুন ↗ */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center gap-2 active:scale-98 cursor-pointer group"
            >
              <span>অনুসন্ধান বার্তা তৈরি করুন</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>

          {/* Generated Message Draft Output Box */}
          {generatedDraft && (
            <div className="pt-6 border-t border-stone-200 space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700 uppercase font-mono flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                  <span>তৈরিকৃত খসড়া বার্তা:</span>
                </span>
                <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  রেডি খসড়া
                </span>
              </div>

              <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 text-xs text-stone-800 font-sans whitespace-pre-line leading-relaxed selection:bg-orange-200">
                {generatedDraft}
              </div>

              {/* Action Buttons: Copy & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="py-2.5 px-4 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>কপি হয়েছে!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>খসড়া কপি করুন</span>
                    </>
                  )}
                </button>

                <a
                  href={getWhatsAppInquiryUrl(generatedDraft)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp-এ পাঠান</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
