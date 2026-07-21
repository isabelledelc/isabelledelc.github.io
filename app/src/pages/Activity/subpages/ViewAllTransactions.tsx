import React from 'react';
import { ChevronLeft, X } from 'lucide-react';
import type { Transaction } from '../components/TransactionView';

interface ViewAllTransactionsProps {
  transactions: Transaction[];
  onClose: () => void;
}

export default function ViewAllTransactions({
  transactions,
  onClose,
}: ViewAllTransactionsProps) {
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
            <h2 className="text-xl font-bold text-slate-900">All Transactions</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {transactions.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between"
            >
              <div>
                <h4 className="text-sm font-bold text-slate-900">{item.type}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>
                <p className="text-[10px] text-slate-400 mt-1">
                  {item.date} | {item.time}
                </p>
              </div>
              <span
                className={`text-sm font-extrabold ${
                  item.amount.startsWith('-') ? 'text-rose-600' : 'text-slate-900'
                }`}
              >
                {item.amount} MYR
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}