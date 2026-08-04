import React from 'react';
import { PlusCircle, ArrowLeftRight, ArrowDownRight } from 'lucide-react';
import type { TransactionFilterType } from './ActivityTab';

export interface Transaction {
  id: string;
  type: 'Top Up' | 'Switch' | 'Redemption';
  subtitle: string;
  date: string;
  time: string;
  amount: string;
}

interface TransactionViewProps {
  transactions: Transaction[];
  activeFilter: TransactionFilterType;
  onViewMore: () => void;
  selectedMonth: string;
}

export default function TransactionView({
  transactions,
  activeFilter,
  onViewMore,
  selectedMonth,
}: TransactionViewProps) {
  const filtered = transactions.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.type === activeFilter;
  });

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
    <div className="rounded-3xl bg-app-card border border-app-border p-6 shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-base font-bold italic text-app-heading">
          {selectedMonth} 2026
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
        {filtered.length > 0 ? (
          filtered.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-app-pill border border-app-border shadow-xs flex items-center justify-between gap-3 hover:border-app-border-interactive transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-10 bg-app-primary rounded-full" />
                <div>
                  <div className="flex items-center gap-1.5">
                    {getIcon(item.type)}
                    <h4 className="text-sm font-bold text-app-heading">{item.type}</h4>
                  </div>
                  <p className="text-[11px] text-app-muted mt-0.5">{item.subtitle}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-app-muted">
                  {item.date} | {item.time}
                </p>
                <p
                  className={`text-xs font-extrabold mt-1 ${
                    item.amount.startsWith('-') ? 'text-rose-500' : 'text-app-heading'
                  }`}
                >
                  {item.amount} MYR
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="py-12 text-center text-xs font-semibold text-app-muted">
            No transactions found for "{activeFilter}".
          </div>
        )}
      </div>
    </div>
  );
}