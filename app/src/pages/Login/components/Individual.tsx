import React from 'react';

type IndividualProps = {
  onClick: () => void;
};

export default function Individual({ onClick }: IndividualProps) {
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>

        <span className="bg-[#1e7b57] text-white text-xs font-medium px-6 py-1.5 rounded-full mb-3">
          Individual
        </span>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
          For a single owner
        </p>
      </div>
    </div>
  );
}