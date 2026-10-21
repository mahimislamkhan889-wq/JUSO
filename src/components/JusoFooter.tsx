import React from 'react';

export const JusoFooter: React.FC = () => {
  const [showFloating, setShowFloating] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#d9decf] bg-[#fbf7e9] pt-12 pb-6 text-[#194d2b] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Info Bar: Brand Logo, Bengali Slogan & Copyright, and Scroll-to-Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-[#d9decf]/70 text-center sm:text-left">
          {/* Logo on Left */}
          <div className="flex items-center justify-center sm:justify-start">
            <a href="#" className="inline-block" aria-label="JUSO Home">
              <img
                src="/assets/aistudio/JUSO_Juicy_Organic_Logo_68d588f6.png"
                alt="JUSO Juicy Organic"
                className="h-12 sm:h-14 w-auto object-contain brightness-105"
              />
            </a>
          </div>

          {/* Slogan and Copyright in Center */}
          <div className="text-center text-xs leading-relaxed text-[#194d2b]/85 space-y-1">
            <p className="font-medium">ছোট্ট বিরতি। রঙিন মুহূর্ত।</p>
            <p>© 2026 JUSO. All rights reserved.</p>
          </div>

          {/* Scroll to top on Right - Modern Round Shape UX */}
          <button
            onClick={scrollToTop}
            aria-label="উপরে যান"
            className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-[#194d2b] bg-white/80 hover:bg-[#194d2b] text-[#194d2b] hover:text-[#fbf7e9] text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>উপরে</span>
            <span className="w-6 h-6 rounded-full bg-[#194d2b] text-[#fbf7e9] group-hover:bg-[#f18323] group-hover:text-white flex items-center justify-center text-xs font-black transition-all duration-300 group-hover:-translate-y-0.5 shadow-xs">
              ↑
            </span>
          </button>
        </div>

        {/* FOLLOW US Section (Red Mark Area above JUSO watermark) */}
        <div className="flex flex-col items-center justify-center pt-10 pb-4 text-center relative z-10">
          <h3 className="text-[#f18323] font-black text-xl sm:text-2xl tracking-[0.25em] uppercase mb-6 drop-shadow-xs">
            FOLLOW US
          </h3>
          
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* 1. Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-[#f18323] bg-white/60 hover:bg-white flex items-center justify-center text-[#f18323] hover:border-[#e07212] hover:-translate-y-1 active:scale-95 transition-all shadow-sm"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10.5" fill="#f18323"/>
                <path d="M14.6 12.2h-1.8v6.3h-2.6v-6.3H8.8v-2.2h1.4V8.5c0-1.2.6-3 3-3l2.2.01v2.1h-1.4c-.3 0-.6.1-.6.6v1.8h2.1l-.3 2.2z" fill="#ffffff"/>
              </svg>
            </a>

            {/* 2. Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-[#f18323] bg-white/60 hover:bg-white flex items-center justify-center text-[#f18323] hover:border-[#e07212] hover:-translate-y-1 active:scale-95 transition-all shadow-sm"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f18323" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" ry="5.5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            {/* 3. TikTok (Updated from Tumblr to TikTok as requested) */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-[#f18323] bg-white/60 hover:bg-white flex items-center justify-center text-[#f18323] hover:border-[#e07212] hover:-translate-y-1 active:scale-95 transition-all shadow-sm group"
            >
              <svg width="27" height="27" viewBox="0 0 24 24" fill="#f18323" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
            </a>

            {/* 4. YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-[#f18323] bg-white/60 hover:bg-white flex items-center justify-center text-[#f18323] hover:border-[#e07212] hover:-translate-y-1 active:scale-95 transition-all shadow-sm"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="4.5" width="21" height="15" rx="4" fill="#f18323"/>
                <polygon points="10 8.5 16 12 10 15.5" fill="#ffffff"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Giant Watermark: JUSO */}
        <div
          className="select-none pointer-events-none font-black text-[clamp(85px,23vw,290px)] leading-[0.85] tracking-[-0.08em] text-center text-[#194d2b]/[0.06] overflow-hidden uppercase mt-2 sm:mt-0 font-sans"
          aria-hidden="true"
        >
          JUSO
        </div>

      </div>

      {/* Floating Round Shape "উপরে যান" Button (Quick scroll anytime) */}
      <button
        onClick={scrollToTop}
        aria-label="উপরে যান"
        title="উপরে যান"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#194d2b] text-[#fbf7e9] hover:bg-[#f18323] shadow-xl hover:shadow-2xl border-2 border-[#fbf7e9] flex flex-col items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer group ${
          showFloating ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <span className="text-base sm:text-lg font-black transition-transform duration-300 group-hover:-translate-y-1 leading-none">
          ↑
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-tight -mt-0.5">
          উপরে
        </span>
      </button>
    </footer>
  );
};
