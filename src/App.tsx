import React, { useRef } from 'react';
import { JusoHeader } from './components/JusoHeader.tsx';
import { JusoHero } from './components/JusoHero.tsx';
import { JusoMarquee } from './components/JusoMarquee.tsx';
import { JusoJarShowcase } from './components/JusoJarShowcase.tsx';
import { JusoInquiryDraft } from './components/JusoInquiryDraft.tsx';
import { JusoGoodToKnow } from './components/JusoGoodToKnow.tsx';
import { JusoFooter } from './components/JusoFooter.tsx';

export default function App() {
  React.useEffect(() => {
    // Handle initial hash on page load
    const hash = window.location.hash;
    if (hash && hash !== '#') {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
      }
    }
  }, []);

  const scrollToStory = () => {
    window.history.replaceState(null, '', '#story');
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProduct = () => {
    window.history.replaceState(null, '', '#introducing');
    const el = document.getElementById('introducing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToInquiry = () => {
    window.history.replaceState(null, '', '#inquiry');
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFaq = () => {
    window.history.replaceState(null, '', '#faq');
    const el = document.getElementById('faq');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-orange-200 selection:text-orange-950">
      {/* Top Header: "A LITTLE PAUSE. A LITTLE JUSO." */}
      <JusoHeader
        onScrollToStory={scrollToStory}
        onScrollToProduct={scrollToProduct}
        onScrollToInquiry={scrollToInquiry}
        onScrollToFaq={scrollToFaq}
      />

      {/* Main Experience */}
      <main className="flex-1">
        {/* Hero Section:
            MEET YOUR EVERYDAY REFRESHMENT
            ব্যস্ততার মাঝে, এক চুমুক নিজের জন্য। */}
        <JusoHero
          onScrollToStory={scrollToStory}
          onScrollToProduct={scrollToProduct}
        />

        {/* Editorial Marquee Ticker:
            Sip. Smile. Repeat. THE JUSO EDIT / 01 ✳ এক চুমুক সতেজতা ✳ একটু বিরতি, সঙ্গে JUSO ✳ */}
        <JusoMarquee />

        {/* Brand Narrative, Orange & Green Jar Visual, and Introducing JUSO:
            - JUSO · Natural Refreshment
            - কমলা ও সবুজ লেবেলে JUSO পানীয়ের জার
            - THE LITTLE THINGS (বড় আনন্দের জন্য ছোট্ট একটা বিরতি...)
            - INTRODUCING JUSO (তোমার পরের বিরতির সঙ্গী, প্যাকেজিং: জার, দাম ও প্যাক সাইজ...) */}
        <JusoJarShowcase onScrollToInquiry={scrollToInquiry} />

        {/* YOUR NEXT SIP (Interactive Inquiry Draft Generator):
            JUSO নিতে আগ্রহী?
            অনলাইন অর্ডার শিগগিরই চালু হবে। আপাতত নিচের ফর্মে একটি অনুসন্ধান বার্তার খসড়া তৈরি করে রাখতে পারো... */}
        <JusoInquiryDraft />

        {/* GOOD TO KNOW (FAQ Accordion):
            কিছু কথা, আগে থেকেই।
            কীভাবে অর্ডার করব?
            দাম, উপাদান ও প্যাক সাইজ কত?
            ডেলিভারি কোথায় পাওয়া যাবে? */}
        <JusoGoodToKnow />
      </main>

      {/* Footer:
          JUSO
          ছোট্ট বিরতি। রঙিন মুহূর্ত।
          © 2026 JUSO. All rights reserved.
          উপরে ↑ */}
      <JusoFooter />
    </div>
  );
}
