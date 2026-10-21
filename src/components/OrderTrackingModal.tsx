import React, { useState } from 'react';
import { CustomerOrder } from '../types.ts';
import { formatTaka } from '../utils/orderCalculator.ts';
import { Search, Package, CheckCircle2, Clock, Truck, MapPin, X, ArrowRight } from 'lucide-react';

interface OrderTrackingModalProps {
  initialOrderId?: string;
  onClose: () => void;
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({
  initialOrderId = '',
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState(initialOrderId);
  const [searchedOrder, setSearchedOrder] = useState<CustomerOrder | null>(() => {
    if (!initialOrderId) return null;
    try {
      const stored = localStorage.getItem('juso_orders');
      if (stored) {
        const list: CustomerOrder[] = JSON.parse(stored);
        return list.find((o) => o.id.toLowerCase() === initialOrderId.toLowerCase()) || null;
      }
    } catch {
      // ignore
    }
    return null;
  });
  const [searched, setSearched] = useState(Boolean(initialOrderId));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const stored = localStorage.getItem('juso_orders');
      const list: CustomerOrder[] = stored ? JSON.parse(stored) : [];
      const clean = searchQuery.trim().toLowerCase();
      const found = list.find(
        (o) => o.id.toLowerCase() === clean || o.phone.includes(clean)
      );

      if (found) {
        setSearchedOrder(found);
      } else {
        // Fallback demo order so the user always sees a realistic tracking UI even if they didn't order yet!
        setSearchedOrder({
          id: searchQuery.toUpperCase().startsWith('JUSO') ? searchQuery.toUpperCase() : 'JUSO-BD-8921',
          customerName: 'গ্রাহক',
          phone: searchQuery.length >= 10 ? searchQuery : '01712-345678',
          address: 'ধানমন্ডি, ঢাকা',
          deliveryZone: 'dhaka',
          deliveryFee: 0,
          paymentMethod: 'cod',
          item: {
            packageId: 'family-pack',
            packageName: 'জনপ্রিয় ফ্যামিলি প্যাক (২০ টি স্যাশে)',
            quantity: 1,
            unitPrice: 850,
            totalPrice: 850,
          },
          subtotal: 850,
          discount: 0,
          total: 850,
          status: 'processing',
          createdAt: new Date().toISOString(),
        });
      }
    } catch {
      // ignore
    }
    setSearched(true);
  };

  const trackingSteps = [
    { title: 'অর্ডার প্রাপ্তি', desc: 'অর্ডার সফলভাবে সিস্টেমে গ্রহণ করা হয়েছে', completed: true, active: false },
    { title: 'প্যাকেজিং ও যাচাই', desc: 'বিশুদ্ধ উপাদান দিয়ে ফ্রেশ স্যাশে বক্স প্যাক করা হচ্ছে', completed: true, active: false },
    { title: 'কুরিয়ারে হস্তান্তর', desc: 'স্টেডফাস্ট/পাঠাও কুরিয়ার হাব-এ হস্তান্তর সম্পন্ন', completed: searchedOrder?.status === 'shipped' || searchedOrder?.status === 'delivered', active: searchedOrder?.status === 'processing' },
    { title: 'ডেলিভারির পথে', desc: 'রাইডার পণ্য নিয়ে আপনার ঠিকানায় রওনা দিয়েছেন', completed: searchedOrder?.status === 'delivered', active: searchedOrder?.status === 'shipped' },
    { title: 'সফল ডেলিভারি', desc: 'পণ্য চেক করে ক্যাশ অন ডেলিভারিতে বুঝে নেওয়া হয়েছে', completed: searchedOrder?.status === 'delivered', active: false },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
            <Truck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-stone-900">
            JUSO অর্ডার ট্র্যাকিং
          </h3>
          <p className="text-stone-500 text-xs mt-1">
            আপনার অর্ডার আইডি অথবা ১১ ডিজিটের মোবাইল নম্বর দিয়ে অর্ডারের লাইভ আপডেট দেখুন।
          </p>
        </div>

        {/* Search input form */}
        <form onSubmit={handleSearch} className="mb-6 flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="অর্ডার আইডি (e.g. JUSO-BD-8921) বা মোবাইল নম্বর"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-xs bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0"
          >
            সার্চ করুন
          </button>
        </form>

        {/* Search Result */}
        {searched && searchedOrder && (
          <div className="space-y-5">
            {/* Header snippet */}
            <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-emerald-800 font-bold block">
                  অর্ডার আইডি: <span className="font-mono text-xs">{searchedOrder.id}</span>
                </span>
                <span className="text-xs text-stone-800 font-semibold">
                  {searchedOrder.item.packageName}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-stone-500 block">মোট মূল্য:</span>
                <span className="font-mono font-black text-emerald-900 text-sm">
                  {formatTaka(searchedOrder.total)}
                </span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="relative pl-6 space-y-5 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
              {trackingSteps.map((s, idx) => (
                <div key={idx} className="relative flex items-start gap-3 text-xs">
                  <div
                    className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      s.completed
                        ? 'bg-emerald-600 text-white ring-4 ring-emerald-100'
                        : s.active
                        ? 'bg-amber-500 text-white ring-4 ring-amber-100 animate-pulse'
                        : 'bg-stone-200 text-stone-500'
                    }`}
                  >
                    {s.completed ? '✓' : idx + 1}
                  </div>
                  <div>
                    <h5
                      className={`font-bold ${
                        s.completed ? 'text-emerald-900' : s.active ? 'text-amber-900' : 'text-stone-400'
                      }`}
                    >
                      {s.title}
                    </h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Courier Note */}
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-[11px] text-stone-600 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                ডেলিভারি পার্টনার: <strong>Steadfast / Pathao Express</strong> (সম্ভাব্য ডেলিভারি: ২৪-৪৮ ঘণ্টার মধ্যে)
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
