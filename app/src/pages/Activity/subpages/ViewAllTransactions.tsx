import React from 'react';
import { ChevronLeft, X, PlusCircle, ArrowLeftRight, ArrowDownRight } from 'lucide-react';
import type { Transaction } from '../components/TransactionView';

interface ViewAllTransactionsProps {
  transactions: Transaction[];
  onClose: () => void;
}

export default function ViewAllTransactions({
  transactions,
  onClose,
}: ViewAllTransactionsProps) {
  const getIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'Top Up':
        return <PlusCircle className="w-5 h-5 text-emerald-600" />;
      case 'Switch':
        return <ArrowLeftRight className="w-5 h-5 text-blue-600" />;
      case 'Redemption':
        return <ArrowDownRight className="w-5 h-5 text-rose-600" />;
    }
  };

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
            <h2 className="text-xl font-bold text-app-heading">All Transactions</h2>
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
          {transactions.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-app-pill border border-app-border flex items-center justify-between hover:border-app-border-interactive transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-10 bg-app-primary rounded-full" />
                <div>
                  <div className="flex items-center gap-1.5">
                    {getIcon(item.type)}
                    <h4 className="text-sm font-bold text-app-heading">{item.type}</h4>
                  </div>
                  <p className="text-xs text-app-muted mt-0.5">{item.subtitle}</p>
                  <p className="text-[10px] text-app-muted opacity-80 mt-1">
                    {item.date} | {item.time}
                  </p>
                </div>
              </div>

              <span
                className={`text-sm font-extrabold ${
                  item.amount.startsWith('-') ? 'text-rose-500' : 'text-app-heading'
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