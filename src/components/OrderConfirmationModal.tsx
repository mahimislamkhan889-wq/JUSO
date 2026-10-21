import React, { useEffect } from 'react';
import { CustomerOrder } from '../types.ts';
import { formatTaka } from '../utils/orderCalculator.ts';
import confetti from 'canvas-confetti';
import {
  CheckCircle,
  Printer,
  Copy,
  ExternalLink,
  Package,
  Calendar,
  MapPin,
  Phone,
  X,
  Share2,
} from 'lucide-react';

interface OrderConfirmationModalProps {
  order: CustomerOrder;
  onClose: () => void;
  onTrackOrder: (orderId: string) => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose,
  onTrackOrder,
}) => {
  useEffect(() => {
    // Fire festive celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const handleCopyOrderId = () => {
    navigator.clipboard?.writeText(order.id);
  };

  const handlePrint = () => {
    window.print();
  };

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

        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <CheckCircle className="w-9 h-9" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            অর্ডার সফল হয়েছে!
          </span>
          <h2 className="text-2xl font-black text-stone-900 mt-2">
            ধন্যবাদ, {order.customerName}!
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            আপনার JUSO শরবতের অর্ডারটি গ্রহণ করা হয়েছে। দ্রুততম সময়ে ডেলিভারি টিম আপনার সাথে যোগাযোগ করবে।
          </p>
        </div>

        {/* Invoice Card */}
        <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 space-y-3.5 mb-6 text-xs print:m-0">
          
          {/* Order ID & Status */}
          <div className="flex items-center justify-between pb-3 border-b border-stone-200">
            <div>
              <span className="text-stone-500 text-[11px] block">অর্ডার আইডি (Tracking ID):</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="font-mono font-extrabold text-sm text-stone-900 bg-white px-2 py-0.5 rounded border border-stone-300">
                  {order.id}
                </span>
                <button
                  type="button"
                  onClick={handleCopyOrderId}
                  className="p-1 hover:bg-stone-200 rounded text-stone-600 transition-colors"
                  title="কপি করুন"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="text-right">
              <span className="text-stone-500 text-[11px] block">অর্ডার স্ট্যাটাস:</span>
              <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-[11px]">
                প্রসেসিং চলছে
              </span>
            </div>
          </div>

          {/* Product details */}
          <div className="flex justify-between items-center py-1">
            <div>
              <p className="font-bold text-stone-900 text-xs">{order.item.packageName}</p>
              <p className="text-stone-500 text-[11px]">পরিমাণ: {order.item.quantity} বক্স</p>
            </div>
            <span className="font-mono font-bold text-stone-900">
              {formatTaka(order.item.totalPrice)}
            </span>
          </div>

          {/* Delivery & Payment details */}
          <div className="space-y-1 text-stone-600 text-[11px] pt-2 border-t border-stone-200">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-stone-400" />
              <span>মোবাইল: {order.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-stone-400" />
              <span>ঠিকানা: {order.address} ({order.deliveryZone === 'dhaka' ? 'ঢাকা' : 'ঢাকার বাইরে'})</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-emerald-800">
              <span>পেমেন্ট মেথড:</span>
              <span>{order.paymentMethod === 'cod' ? 'ক্যাশ অন ডেলিভারি (পণ্য দেখে টাকা দিন)' : 'বিকাশ / নগদ'}</span>
            </div>
          </div>

          {/* Grand Total */}
          <div className="flex justify-between items-center pt-3 border-t border-stone-200 text-stone-900">
            <span className="font-bold text-xs">সর্বমোট প্রদেয় বিল:</span>
            <span className="font-mono text-lg font-black text-emerald-800">
              {formatTaka(order.total)}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => {
              onClose();
              onTrackOrder(order.id);
            }}
            className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <Package className="w-4 h-4" />
            <span>অর্ডারের বর্তমান অবস্থা ট্র্যাক করুন</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handlePrint}
              className="py-2.5 px-3 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>রসিদ প্রিন্ট করুন</span>
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs flex items-center justify-center transition-colors cursor-pointer"
            >
              ঠিক আছে, বন্ধ করুন
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
