
import React from 'react';

export default function PortfolioCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl p-6 backdrop-blur-md shadow-lg transition-colors border bg-app-card border-app-border">
      <h2 className="mb-2 text-xl font-medium text-app-muted">Total Portfolio</h2>
      <p className="mb-1 text-3xl font-semibold tracking-wide text-app-main">
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
              <stop offset="0%" stopColor="var(--color-chart-stroke)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-chart-stroke)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="30" x2="400" y2="30" stroke="var(--color-chart-grid)" strokeDasharray="4 4" />
          <line x1="0" y1="70" x2="400" y2="70" stroke="var(--color-chart-grid)" strokeDasharray="4 4" />

          <path
            d="M 0 95 Q 60 85, 120 70 T 240 45 T 320 85 T 400 10 L 400 120 L 0 120 Z"
            fill="url(#chartGradient)"
          />
          <path
            d="M 0 95 Q 60 85, 120 70 T 240 45 T 320 85 T 400 10"
            fill="none"
            stroke="var(--color-chart-stroke)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}