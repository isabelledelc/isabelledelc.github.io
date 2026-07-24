import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ActivitySummaryProps {
  selectedMonth: string;
  onMonthChange: (direction: 'prev' | 'next') => void;
  totalAmount: string;
  progressPercentage: number;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export default function ActivitySummary({
  selectedMonth,
  onMonthChange,
  totalAmount,
  progressPercentage,
  canGoPrev,
  canGoNext,
}: ActivitySummaryProps) {
  const strokeWidth = 16;
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="rounded-3xl bg-app-card border border-app-border shadow-md overflow-hidden flex flex-col justify-between h-full transition-colors duration-300">
      
      {/* Top Header Month Bar */}
      <div className="bg-app-pill px-5 py-4 flex items-center justify-between border-b border-app-border">
        <button
          type="button"
          onClick={() => onMonthChange('prev')}
          disabled={!canGoPrev}
          className="p-1 rounded-full hover:bg-app-card transition cursor-pointer text-app-heading disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous Month"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="font-extrabold text-lg tracking-wider text-app-heading uppercase">
          {selectedMonth}
        </span>

        <button
          type="button"
          onClick={() => onMonthChange('next')}
          disabled={!canGoNext}
          className="p-1 rounded-full hover:bg-app-card transition cursor-pointer text-app-heading disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next Month"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Monthly Chart Content */}
      <div className="p-8 flex flex-col items-center justify-center space-y-6 flex-1">
        <h3 className="text-base font-bold text-app-heading text-center">
          This Month’s Investment
        </h3>

        {/* Ring Chart */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
            {/* Background Track */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              className="stroke-app-border"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Progress Arc */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              className="stroke-app-primary"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Amount Badge inside Chart */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-2">
            <span className="font-extrabold text-app-heading text-sm md:text-base">
              {totalAmount}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}