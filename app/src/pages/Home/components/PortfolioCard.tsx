import React from 'react';

export default function PortfolioCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl p-6 backdrop-blur-md shadow-lg transition-colors border bg-white/80 border-slate-200/80 dark:bg-[#316854]/80 dark:border-white/10">
      <h2 className="mb-2 text-xl font-medium text-slate-600 dark:text-white/90">Total Portfolio</h2>
      <p className="mb-1 text-3xl font-semibold tracking-wide text-slate-900 dark:text-white">
        MYR XX,XXX.XX
      </p>
      <p className="mb-6 text-sm font-medium text-emerald-600 dark:text-emerald-300">
        +MYR X.XX Monthly return
      </p>

      {/* Line Chart Graphic */}
      <div className="relative h-28 w-full">
        <svg viewBox="0 0 400 120" className="h-full w-full preserve-3d" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="30" x2="400" y2="30" className="stroke-slate-200 dark:stroke-white/15" strokeDasharray="4 4" />
          <line x1="0" y1="70" x2="400" y2="70" className="stroke-slate-200 dark:stroke-white/15" strokeDasharray="4 4" />

          <path
            d="M 0 95 Q 60 85, 120 70 T 240 45 T 320 85 T 400 10 L 400 120 L 0 120 Z"
            fill="url(#chartGradient)"
          />
          <path
            d="M 0 95 Q 60 85, 120 70 T 240 45 T 320 85 T 400 10"
            fill="none"
            className="stroke-sky-600 dark:stroke-sky-400"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}