import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-24 lg:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                J
              </div>
              <span className="text-2xl font-black text-white tracking-tight font-display">
                JUSO
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              dhok.bd এর অনুপ্রেরণায় খাঁটি দেশি উপাদান দিয়ে প্রস্তুতকৃত প্রিমিয়াম রেডি-মিক্স শরবত। মাত্র ৩০ সেকেন্ডে গ্যাস্ট্রিকমুক্ত সতেজ পানীয়।
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>BSTI মানসম্মত ও ফুড-গ্রেড প্যাকেজিং</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">হোমপেজ</a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-emerald-400 transition-colors">উপাদান ও গুণাগুণ</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-emerald-400 transition-colors">প্যাকেজ ও মূল্য তালিকা</a>
              </li>
              <li>
                <a href="#how-to-use" className="hover:text-emerald-400 transition-colors">বানানোর নিয়মাবলী</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">গ্রাহক রিভিউ</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">সাধারণ জিজ্ঞাসা (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">যোগাযোগ ও অফিস</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>প্লট ১৮, রোড ১১, ব্লক-এফ, বনানী, ঢাকা-১২১৩, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:01700123456" className="hover:text-emerald-400 font-mono">
                  +880 1700-123456
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-mono">support@juso.bd</span>
              </li>
            </ul>
          </div>

          {/* Trust and Delivery Partners */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">ডেলিভারি ও পেমেন্ট</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              সারাদেশে বিশ্বস্ত কুরিয়ার সার্ভিসের মাধ্যমে হোম ডেলিভারি ও পণ্য হাতে পেয়ে টাকা পরিশোধের নিশ্চয়তা।
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-bold">
              <span className="px-2.5 py-1 bg-stone-800 text-stone-200 rounded border border-stone-700">
                ক্যাশ অন ডেলিভারি
              </span>
              <span className="px-2.5 py-1 bg-stone-800 text-pink-400 rounded border border-stone-700 font-mono">
                bKash
              </span>
              <span className="px-2.5 py-1 bg-stone-800 text-orange-400 rounded border border-stone-700 font-mono">
                Nagad
              </span>
              <span className="px-2.5 py-1 bg-stone-800 text-emerald-400 rounded border border-stone-700">
                Steadfast Courier
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} JUSO Bangladesh. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for healthy Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};
