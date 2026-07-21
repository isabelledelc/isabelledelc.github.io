import React from 'react';
import { FileText, Download } from 'lucide-react';

export interface Statement {
  id: string;
  title: string;
  period: string;
  fileSize: string;
}

interface StatementViewProps {
  statements: Statement[];
  onViewMore: () => void;
  selectedMonth: string;
}

export default function StatementView({
  statements,
  onViewMore,
  selectedMonth,
}: StatementViewProps) {
  return (
    <div className="rounded-3xl bg-[#EAF7E6] p-6 shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-base font-bold italic text-slate-800">
          Statements - {selectedMonth} 2026
        </h3>
        <button
          onClick={onViewMore}
          className="text-xs font-bold text-indigo-600 italic hover:underline cursor-pointer"
        >
          View More
        </button>
      </div>

      <div className="space-y-3">
        {statements.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-between hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{item.period}</p>
              </div>
            </div>

            <button
              onClick={() => alert(`Downloading ${item.title}`)}
              className="p-2 rounded-xl hover:bg-slate-100 transition text-slate-600 cursor-pointer flex items-center gap-1 text-xs font-bold"
            >
              <Download className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">PDF</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}