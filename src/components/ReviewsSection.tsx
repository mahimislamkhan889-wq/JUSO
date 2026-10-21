import React, { useState } from 'react';
import { REVIEWS } from '../data/reviews.ts';
import { ReviewItem } from '../types.ts';
import { Star, CheckCircle, ThumbsUp, MessageSquarePlus, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    comment: '',
    productPack: 'জনপ্রিয় ফ্যামিলি প্যাক',
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    const review: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name.trim(),
      location: newReview.location.trim() || 'ঢাকা',
      rating: newReview.rating,
      comment: newReview.comment.trim(),
      verified: true,
      date: 'আজকে',
      productPack: newReview.productPack,
      avatarBg: 'bg-emerald-600',
    };

    setReviewsList([review, ...reviewsList]);
    setShowAddModal(false);
    setNewReview({
      name: '',
      location: '',
      rating: 5,
      comment: '',
      productPack: 'জনপ্রিয় ফ্যামিলি প্যাক',
    });
  };

  return (
    <section id="reviews" className="py-16 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            গ্রাহক সন্তুষ্টি
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-3 mb-3 tracking-tight">
            সন্তুষ্ট গ্রাহকদের বাস্তব অভিজ্ঞতা
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            সারাদেশে ৩,৫০০+ পরিবার তাদের প্রতিদিনের এনার্জি ও পেটের সুস্থতায় বেছে নিয়েছেন প্রাকৃতিক JUSO শরবত।
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 mb-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Big Score */}
          <div className="text-center md:border-r border-stone-200 md:pr-6">
            <span className="text-5xl font-black text-emerald-900 font-mono">৪.৯</span>
            <div className="flex items-center justify-center gap-1 text-amber-400 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-stone-500 font-medium">৩,৫৮০+ গ্রাহকের ভেরিফাইড রিভিউ</p>
          </div>

          {/* Features trust stats */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-stone-700">
              <span className="font-semibold">স্বাদ ও রিফ্রেশমেন্ট মান</span>
              <span className="font-bold text-emerald-800">৯৮% পজিটিভ</span>
            </div>
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full w-[98%]" />
            </div>

            <div className="flex items-center justify-between text-xs text-stone-700">
              <span className="font-semibold">গ্যাস্ট্রিক ও পেটের আরামদায়ক প্রভাব</span>
              <span className="font-bold text-emerald-800">৯৫% পজিটিভ</span>
            </div>
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full w-[95%]" />
            </div>

            <div className="flex items-center justify-between text-xs text-stone-700">
              <span className="font-semibold">ডেলিভারি স্পিড ও প্যাকেজিং</span>
              <span className="font-bold text-emerald-800">৯৭% পজিটিভ</span>
            </div>
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full w-[97%]" />
            </div>
          </div>
        </div>

        {/* Add Review Button */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-stone-900">
            সাম্প্রতিক রিভিউসমূহ ({reviewsList.length})
          </h3>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>আপনার রিভিউ দিন</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header inside review card */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-full ${rev.avatarBg} text-white flex items-center justify-center font-bold text-xs`}
                    >
                      {rev.name[0]}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">{rev.name}</h4>
                      <p className="text-[10px] text-stone-500">{rev.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Pack badge */}
                <div className="mb-2.5">
                  <span className="text-[10px] font-semibold bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                    প্যাক: {rev.productPack}
                  </span>
                </div>

                {/* Comment text */}
                <p className="text-xs text-stone-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Bottom footer */}
              <div className="pt-3 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> ভেরিফাইড ক্রেতা
                </span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 animate-in fade-in">
            <h3 className="text-base font-bold text-stone-900 mb-3">আপনার মূল্যবান মতামত দিন</h3>
            <form onSubmit={handleAddReview} className="space-y-3 text-xs">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">আপনার নাম:</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="যেমন: সাকিব আল হাসান"
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-semibold mb-1">এলাকা / জেলা:</label>
                <input
                  type="text"
                  value={newReview.location}
                  onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                  placeholder="যেমন: গুলশান, ঢাকা"
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-semibold mb-1">রেটিং:</label>
                <div className="flex gap-2">
                  {[5, 4, 3].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: r })}
                      className={`px-3 py-1.5 rounded-lg border font-bold flex items-center gap-1 ${
                        newReview.rating === r
                          ? 'bg-amber-100 border-amber-400 text-amber-900'
                          : 'bg-stone-50 border-stone-200'
                      }`}
                    >
                      <span>{r}</span>
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-stone-700 font-semibold mb-1">আপনার অভিজ্ঞতা:</label>
                <textarea
                  rows={3}
                  required
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="JUSO শরবতের স্বাদ এবং স্বাস্থ্য উপকারিতা কেমন লেগেছে লিখুন..."
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-stone-100 text-stone-700 rounded-xl font-semibold"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold"
                >
                  সাবমিট করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
