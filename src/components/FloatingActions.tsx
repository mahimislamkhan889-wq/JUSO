import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 z-30 flex flex-col items-end gap-2.5">
      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/8801700123456?text=Hello%20JUSO,%20I%20want%20to%20order%20natural%20sherbet"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2.5 rounded-full shadow-lg shadow-emerald-900/20 hover:scale-105 transition-all text-xs font-bold"
        title="হোয়াটসঅ্যাপে চ্যাট করুন"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">WhatsApp চ্যাট</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:01700123456"
        className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white p-2.5 sm:px-3.5 sm:py-2.5 rounded-full shadow-lg hover:scale-105 transition-all text-xs font-bold"
        title="সরাসরি কল করুন"
      >
        <Phone className="w-4 h-4 text-emerald-400" />
        <span className="hidden sm:inline">01700-123456</span>
      </a>
    </div>
  );
};
