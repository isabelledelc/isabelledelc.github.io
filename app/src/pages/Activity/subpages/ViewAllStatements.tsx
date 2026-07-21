import React from 'react';
import { ChevronLeft, X, FileText, Download } from 'lucide-react';
import type { Statement } from '../components/StatementView';

interface ViewAllStatementsProps {
  statements: Statement[];
  onClose: () => void;
}

export default function ViewAllStatements({
  statements,
  onClose,
}: ViewAllStatementsProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-slate-200 transition cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-slate-800" />
            </button>
            <h2 className="text-xl font-bold text-slate-900">All Statements</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {statements.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-emerald-600" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.period}</p>
                </div>
              </div>
              <button
                onClick={() => alert(`Downloading ${item.title}`)}
                className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}