import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ActivitySummaryProps {
  selectedMonth: string;
  onMonthChange: (direction: 'prev' | 'next') => void;
  totalAmount: string;
  progressPercentage: number;
}

export default function ActivitySummary({
  selectedMonth,
  onMonthChange,
  totalAmount,
  progressPercentage,
}: ActivitySummaryProps) {
  const strokeWidth = 16;
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="rounded-3xl bg-[#EAF7E6] shadow-md overflow-hidden flex flex-col justify-between h-full">
      {/* Top Header Month Bar */}
      <div className="bg-white px-5 py-4 flex items-center justify-between border-b border-slate-100">
        <button
          onClick={() => onMonthChange('prev')}
          className="p-1 rounded-full hover:bg-slate-100 transition cursor-pointer text-slate-700"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="font-extrabold text-lg tracking-wider text-slate-900 uppercase">
          {selectedMonth}
        </span>

        <button
          onClick={() => onMonthChange('next')}
          className="p-1 rounded-full hover:bg-slate-100 transition cursor-pointer text-slate-700"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Monthly Chart Content */}
      <div className="p-8 flex flex-col items-center justify-center space-y-6 flex-1">
        <h3 className="text-base font-bold text-slate-800 text-center">
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
              stroke="#111111"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Progress Arc */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#22C55E"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Amount Badge inside Chart */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-2">
            <span className="font-extrabold text-slate-900 text-sm md:text-base">
              {totalAmount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}