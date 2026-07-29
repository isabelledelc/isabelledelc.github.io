import React from 'react';

type JoinProps = {
  onClick?: () => void;
};

export default function Join({ onClick }: JoinProps) {
  return (
    <div
      onClick={onClick}
      className="w-48 h-64 p-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1b3226] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col items-center justify-between hover:border-[#1e7b57] group"
    >
      <div className="flex-1 flex flex-col items-center justify-center pt-2">
        <svg
          className="w-10 h-10 text-slate-700 dark:text-slate-200 mb-4 group-hover:scale-105 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        <span className="bg-[#1e7b57] text-white text-xs font-medium px-8 py-1.5 rounded-full mb-3">
          Joint
        </span>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-tight">
          Shared ownership<br />between 2 people
        </p>
      </div>
    </div>
  );
}