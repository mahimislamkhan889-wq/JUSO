import React from 'react';

export const JusoMarquee: React.FC = () => {
  const items = [
    'Sip. Smile. Repeat.',
    'THE JUSO EDIT / 01',
    'এক চুমুক সতেজতা',
    'একটু বিরতি, সঙ্গে JUSO',
  ];

  return (
    <div className="py-4 bg-stone-900 text-stone-100 border-y border-stone-800 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] gap-8 text-xs sm:text-sm font-bold tracking-wider uppercase font-mono">
        {/* Repeat 4 times for continuous seamless scrolling */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className={idx === 0 ? 'text-orange-400 font-extrabold' : ''}>{item}</span>
                <span className="text-emerald-400 text-base">✳</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
