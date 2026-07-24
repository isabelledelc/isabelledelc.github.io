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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-app-card border border-app-border w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col transition-colors duration-300">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-app-border flex items-center justify-between bg-app-pill">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-app-card transition cursor-pointer text-app-heading"
              aria-label="Back"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold text-app-heading">All Statements</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-app-card text-app-muted hover:text-app-heading transition cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {statements.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-app-pill border border-app-border flex items-center justify-between hover:border-app-border-interactive transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-app-card text-app-primary border border-app-border">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-app-heading">{item.title}</h4>
                  <p className="text-xs text-app-muted mt-0.5">{item.period}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => alert(`Downloading ${item.title}`)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-app-card border border-app-border text-xs font-bold text-app-primary hover:bg-app-pill transition cursor-pointer"
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