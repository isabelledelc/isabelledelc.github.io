import React from 'react';

export default function PortfolioCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#316854]/80 p-6 backdrop-blur-md border border-white/10 shadow-lg">
      <h2 className="mb-2 text-xl font-medium text-white/90">Total Portfolio</h2>
      <p className="mb-1 text-3xl font-semibold tracking-wide text-white">
        MYR XX,XXX.XX
      </p>
      <p className="mb-6 text-sm font-medium text-emerald-300">
        +MYR X.XX Monthly return
      </p>

      {/* Line Chart Graphic */}
      <div className="relative h-28 w-full">
        <svg viewBox="0 0 400 120" className="h-full w-full preserve-3d" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Dashed background grid lines */}
          <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255, 255, 255, 0.15)" strokeDasharray="4 4" />
          <line x1="0" y1="70" x2="400" y2="70" stroke="rgba(255, 255, 255, 0.15)" strokeDasharray="4 4" />

          {/* Fill path */}
          <path
            d="M 0 95 Q 60 85, 120 70 T 240 45 T 320 85 T 400 10 L 400 120 L 0 120 Z"
            fill="url(#chartGradient)"
          />
          {/* Main curve line */}
          <path
            d="M 0 95 Q 60 85, 120 70 T 240 45 T 320 85 T 400 10"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}