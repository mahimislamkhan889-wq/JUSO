import React, { useState } from 'react';
import { ProductPackage, DeliveryZone, PaymentMethod, CustomerOrder } from '../types.ts';
import { PRODUCT_PACKAGES } from '../data/products.ts';
import {
  calculateOrderSummary,
  validateBdPhone,
  normalizeBdPhone,
  formatTaka,
  generateOrderId,
} from '../utils/orderCalculator.ts';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  AlertCircle,
  ShoppingBag,
  CreditCard,
  Gift,
  Tag,
  ArrowRight,
  Lock,
} from 'lucide-react';

interface CheckoutSectionProps {
  selectedPack: ProductPackage;
  onSelectPack: (pack: ProductPackage) => void;
  quantity: number;
  onQuantityChange: (q: number) => void;
  onOrderSuccess: (order: CustomerOrder) => void;
}

export const CheckoutSection: React.FC<CheckoutSectionProps> = ({
  selectedPack,
  onSelectPack,
  quantity,
  onQuantityChange,
  onOrderSuccess,
}) => {
  // Form fields
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryZone, setDeliveryZone] = useState<DeliveryZone>('dhaka');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [couponError, setCouponError] = useState('');
  const [notes, setNotes] = useState('');

  // bKash / Nagad fields if chosen
  const [trxId, setTrxId] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculation summary
  const summary = calculateOrderSummary(selectedPack, quantity, deliveryZone, appliedCoupon);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'JUSO50' || code === 'HEALTH100') {
      setAppliedCoupon(code);
    } else {
      setCouponError('দুঃখিত! কুপন কোডটি সঠিক নয়। ট্রাই করুন: JUSO50');
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!customerName.trim()) {
      newErrors.name = 'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন';
    }

    if (!phone.trim()) {
      newErrors.phone = 'মোবাইল নম্বরটি আবশ্যক';
    } else if (!validateBdPhone(phone)) {
      newErrors.phone = 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 01712345678)';
    }

    if (!address.trim() || address.trim().length < 8) {
      newErrors.address = 'অনুগ্রহ করে আপনার বিস্তারিত ঠিকানা লিখুন (রোড, এলাকা, জেলা)';
    }

    if (paymentMethod !== 'cod' && !trxId.trim()) {
      newErrors.trxId = 'বিকাশ বা নগদ ট্রানজেকশন আইডি (TrxID) দিন';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const newOrder: CustomerOrder = {
      id: generateOrderId(),
      customerName: customerName.trim(),
      phone: normalizeBdPhone(phone),
      address: address.trim(),
      deliveryZone,
      deliveryFee: summary.deliveryFee,
      paymentMethod,
      item: {
        packageId: selectedPack.id,
        packageName: selectedPack.bengaliName,
        quantity,
        unitPrice: selectedPack.discountedPrice,
        totalPrice: summary.subtotal,
      },
      subtotal: summary.subtotal,
      discount: summary.discount,
      total: summary.total,
      status: 'pending',
      createdAt: new Date().toISOString(),
      notes: notes.trim() || undefined,
    };

    // Save to localStorage persistence
    try {
      const existing = localStorage.getItem('juso_orders');
      const orderList = existing ? JSON.parse(existing) : [];
      orderList.unshift(newOrder);
      localStorage.setItem('juso_orders', JSON.stringify(orderList));
    } catch {
      // Fallback if storage blocked
    }

    setTimeout(() => {
      setIsSubmitting(false);
      onOrderSuccess(newOrder);
    }, 600);
  };

  return (
    <section id="checkout" className="py-16 bg-white border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300">
            এক ক্লিকে অর্ডার ফর্ম
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 mt-3 mb-2 tracking-tight">
            অর্ডার কনফার্ম করতে নিচের তথ্যগুলো দিন
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            পণ্য হাতে পেয়ে চেক করে সম্পূর্ণ ক্যাশ অন ডেলিভারিতে মূল্য পরিশোধ করুন।
          </p>
        </div>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form Fields */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Package */}
            <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200">
              <label className="block text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-bold">
                  ১
                </span>
                <span>প্যাকেজ নির্বাচন করুন:</span>
              </label>

              <div className="space-y-2.5">
                {PRODUCT_PACKAGES.map((pkg) => {
                  const active = pkg.id === selectedPack.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => onSelectPack(pkg)}
                      className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        active
                          ? 'bg-emerald-50/80 border-emerald-600 shadow-xs'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="packageRadio"
                          checked={active}
                          onChange={() => onSelectPack(pkg)}
                          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                              {pkg.bengaliName}
                            </h4>
                            {pkg.isPopular && (
                              <span className="text-[10px] bg-amber-400 text-stone-900 font-extrabold px-1.5 py-0.2 rounded">
                                বেস্টসেলার
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-stone-500">
                            {pkg.freeDelivery ? '🚚 ফ্রি ডেলিভারি' : 'ডেলিভারি চার্জ প্রযোজ্য'}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs text-stone-400 line-through mr-1 font-mono">
                          {formatTaka(pkg.originalPrice)}
                        </span>
                        <span className="text-sm sm:text-base font-black text-emerald-900 font-mono">
                          {formatTaka(pkg.discountedPrice)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quantity Picker */}
              <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700">পরিমাণ (Quantity):</span>
                <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-xl border border-stone-300">
                  <button
                    type="button"
                    onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm font-mono w-6 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => onQuantityChange(quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Customer Delivery Details */}
            <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 space-y-4">
              <label className="block text-sm font-bold text-stone-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-bold">
                  ২
                </span>
                <span>আপনার ডেলিভারি তথ্য দিন:</span>
              </label>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  আপনার নাম <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  placeholder="যেমন: তানভীর আহমেদ"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-rose-400 focus:ring-rose-200'
                      : 'border-stone-300 focus:ring-emerald-200 focus:border-emerald-600'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Mobile Phone */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  মোবাইল নম্বর <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                  }}
                  placeholder="01XXXXXXXXX (১১ ডিজিট)"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white font-mono focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? 'border-rose-400 focus:ring-rose-200'
                      : 'border-stone-300 focus:ring-emerald-200 focus:border-emerald-600'
                  }`}
                />
                {errors.phone ? (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                  </p>
                ) : (
                  <p className="text-[11px] text-stone-500 mt-1">
                    অর্ডার কনফার্মেশনের জন্য এই নম্বরে কল দেওয়া হতে পারে।
                  </p>
                )}
              </div>

              {/* Full Address */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  পূর্ণ ঠিকানা <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (errors.address) setErrors((prev) => ({ ...prev, address: '' }));
                  }}
                  placeholder="বাসা/হোল্ডিং নম্বর, রোড, এলাকা, থানা ও জেলার নাম"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 ${
                    errors.address
                      ? 'border-rose-400 focus:ring-rose-200'
                      : 'border-stone-300 focus:ring-emerald-200 focus:border-emerald-600'
                  }`}
                />
                {errors.address && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.address}
                  </p>
                )}
              </div>

              {/* Delivery Zone Radio */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  ডেলিভারি এরিয়া বেছে নিন:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition-colors ${
                      deliveryZone === 'dhaka'
                        ? 'bg-emerald-50 border-emerald-600 font-bold'
                        : 'bg-white border-stone-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="zone"
                        checked={deliveryZone === 'dhaka'}
                        onChange={() => setDeliveryZone('dhaka')}
                        className="text-emerald-600"
                      />
                      <span>ঢাকার ভেতরে</span>
                    </div>
                    <span className="font-mono text-emerald-800">
                      {selectedPack.freeDelivery || quantity >= 2 ? '৳০ (ফ্রি)' : '৳৬০'}
                    </span>
                  </label>

                  <label
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition-colors ${
                      deliveryZone === 'outside_dhaka'
                        ? 'bg-emerald-50 border-emerald-600 font-bold'
                        : 'bg-white border-stone-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="zone"
                        checked={deliveryZone === 'outside_dhaka'}
                        onChange={() => setDeliveryZone('outside_dhaka')}
                        className="text-emerald-600"
                      />
                      <span>ঢাকার বাইরে</span>
                    </div>
                    <span className="font-mono text-emerald-800">
                      {selectedPack.freeDelivery || quantity >= 2 ? '৳০ (ফ্রি)' : '৳১২০'}
                    </span>
                  </label>
                </div>
              </div>

            </div>

            {/* Step 3: Payment Method */}
            <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 space-y-3">
              <label className="block text-sm font-bold text-stone-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-bold">
                  ৩
                </span>
                <span>পেমেন্ট পদ্ধতি নির্বাচন করুন:</span>
              </label>

              <div className="space-y-2">
                {/* Cash On Delivery */}
                <label
                  className={`p-3.5 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-colors ${
                    paymentMethod === 'cod'
                      ? 'bg-emerald-50 border-emerald-600 font-bold'
                      : 'bg-white border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-emerald-600"
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-stone-900">
                        ক্যাশ অন ডেলিভারি (Cash on Delivery)
                      </p>
                      <p className="text-[11px] text-stone-500 font-normal">
                        পণ্য হাতে পেয়ে দেখে টাকা পরিশোধ করবেন (সবচেয়ে নিরাপদ)
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">
                    জনপ্রিয়
                  </span>
                </label>

                {/* bKash / Nagad */}
                <label
                  className={`p-3.5 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-colors ${
                    paymentMethod === 'bkash'
                      ? 'bg-pink-50 border-pink-600 font-bold'
                      : 'bg-white border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'bkash'}
                      onChange={() => setPaymentMethod('bkash')}
                      className="text-pink-600"
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-stone-900">বিকাশ / নগদ পেমেন্ট</p>
                      <p className="text-[11px] text-stone-500 font-normal">
                        বিকাশ বা নগদ সেন্ড মানি বা মার্চেন্ট পে
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-pink-100 text-pink-900 font-bold px-2 py-0.5 rounded font-mono">
                    bKash / Nagad
                  </span>
                </label>
              </div>

              {/* bKash Instructions if active */}
              {paymentMethod === 'bkash' && (
                <div className="p-3 bg-pink-50 rounded-xl border border-pink-200 text-xs space-y-2">
                  <p className="font-semibold text-pink-900">
                    বিকাশ/নগদ পার্সোনাল নম্বর: <strong className="font-mono text-sm">01700-123456</strong>
                  </p>
                  <p className="text-stone-600 text-[11px]">
                    উপরের নম্বরে মোট <strong>{formatTaka(summary.total)}</strong> টাকা সেন্ড মানি করে নিচের বক্সে TrxID দিন:
                  </p>
                  <input
                    type="text"
                    placeholder="Transaction ID (TrxID) যেমন: 9J37KX9L"
                    value={trxId}
                    onChange={(e) => setTrxId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-pink-300 bg-white font-mono text-xs uppercase"
                  />
                  {errors.trxId && <p className="text-rose-600 text-[11px]">{errors.trxId}</p>}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Order Summary & Confirm Button */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Summary Box */}
            <div className="bg-stone-50 rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-md space-y-4 sticky top-24">
              <h3 className="text-base font-extrabold text-stone-900 pb-3 border-b border-stone-200 flex items-center justify-between">
                <span>অর্ডার সামারি</span>
                <span className="text-xs font-normal text-stone-500 font-mono">
                  {selectedPack.sachetsCount * quantity} Sachets
                </span>
              </h3>

              {/* Product preview line */}
              <div className="flex items-center gap-3 py-2">
                <img
                  src={selectedPack.image}
                  alt={selectedPack.bengaliName}
                  className="w-14 h-14 rounded-xl object-cover border border-stone-200"
                />
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-stone-900 leading-snug">
                    {selectedPack.bengaliName}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-mono">
                    {formatTaka(selectedPack.discountedPrice)} × {quantity}
                  </p>
                </div>
                <span className="text-sm font-black text-stone-900 font-mono">
                  {formatTaka(summary.subtotal)}
                </span>
              </div>

              {/* Coupon Code input */}
              <div className="pt-2 border-t border-stone-200">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="কুপন কোড (e.g. JUSO50)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 rounded-xl border border-stone-300 text-xs font-mono uppercase bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    প্রয়োগ
                  </button>
                </div>
                {appliedCoupon && (
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    কুপন '{appliedCoupon}' সফলভাবে প্রযোজ্য হয়েছে!
                  </p>
                )}
                {couponError && <p className="text-[11px] text-rose-500 mt-1">{couponError}</p>}
              </div>

              {/* Price Calculation rows */}
              <div className="space-y-2 text-xs pt-2 border-t border-stone-200">
                <div className="flex justify-between text-stone-600">
                  <span>সাবটোটাল</span>
                  <span className="font-mono">{formatTaka(summary.subtotal)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>ডেলিভারি চার্জ</span>
                  <span className="font-mono">
                    {summary.deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-bold">ফ্রি (৳০)</span>
                    ) : (
                      formatTaka(summary.deliveryFee)
                    )}
                  </span>
                </div>
                {summary.discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>কুপন ডিসকাউন্ট</span>
                    <span className="font-mono">-{formatTaka(summary.discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-amber-800 font-medium">
                  <span>মোট সাশ্রয়</span>
                  <span className="font-mono">{formatTaka(summary.savingsTotal)}</span>
                </div>

                <div className="flex justify-between items-baseline pt-3 border-t border-stone-300 text-stone-900">
                  <span className="text-sm font-black">সর্বমোট প্রদেয়</span>
                  <span className="text-2xl font-black text-emerald-900 font-mono">
                    {formatTaka(summary.total)}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-black text-base shadow-xl shadow-emerald-800/30 hover:shadow-2xl transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>অর্ডার প্রসেস হচ্ছে...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>অর্ডার কনফার্ম করুন ({formatTaka(summary.total)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Security & Guarantee Notes */}
              <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200/60 text-[11px] text-emerald-950 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>১০০% নিরাপদ ডেলিভারি ও মান নিশ্চয়তা</span>
                </div>
                <p className="text-stone-600">
                  ডেলিভারি ম্যানের সামনে প্যাকেট খুলে চেক করতে পারবেন। কোনো ত্রুটি থাকলে সরাসরি ফেরত দিতে পারবেন।
                </p>
              </div>

            </div>

          </div>

        </form>

      </div>
    </section>
  );
};
