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
    <div className="rounded-3xl bg-app-card border border-app-border p-6 shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-base font-bold italic text-app-heading">
          Statements - {selectedMonth} 2026
        </h3>
        <button
          type="button"
          onClick={onViewMore}
          className="text-xs font-bold text-app-primary italic hover:underline cursor-pointer"
        >
          View More
        </button>
      </div>

      <div className="space-y-3">
        {statements.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl bg-app-pill border border-app-border shadow-xs flex items-center justify-between hover:border-app-border-interactive transition"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-app-card text-app-primary border border-app-border">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-app-heading">{item.title}</h4>
                <p className="text-[11px] text-app-muted mt-0.5">{item.period}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => alert(`Downloading ${item.title}`)}
              className="p-2 rounded-xl hover:bg-app-card transition text-app-heading cursor-pointer flex items-center gap-1 text-xs font-bold border border-app-border"
            >
              <Download className="w-4 h-4 text-app-primary" />
              <span className="hidden sm:inline">PDF</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}