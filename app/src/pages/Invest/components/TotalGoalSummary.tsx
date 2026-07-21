import React from 'react';

export default function TotalGoalSummary() {
  return (
    <div className="rounded-3xl bg-[#EAF7E6] p-6 shadow-md flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="space-y-4 flex-1">
        <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
          Total Saved Towards Goals
        </p>
        <h2 className="text-3xl font-extrabold text-slate-900">RM 35,500</h2>

        {/* Progress Bar */}
        <div className="w-full bg-slate-300 rounded-full h-3 max-w-md">
          <div className="bg-[#22C55E] h-3 rounded-full w-[45%]" />
        </div>

        <p className="text-xs font-semibold text-slate-600">
          45% of RM 78,800 across 3 goals
        </p>
      </div>

      {/* Ring Chart Badge */}
      <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center justify-center min-w-[200px]">
        <div className="relative w-28 h-28 rounded-full border-8 border-slate-100 border-t-[#22C55E] border-r-[#22C55E] flex items-center justify-center">
          <span className="font-extrabold text-slate-900 text-lg">45%</span>
        </div>
        <p className="text-xs font-bold text-slate-700 mt-2">Goals</p>
      </div>
    </div>
  );
}