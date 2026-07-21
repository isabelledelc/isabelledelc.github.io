import React from 'react';
import { PlusCircle, ArrowLeftRight, ArrowDownRight } from 'lucide-react';

export type FilterType = 'All' | 'Top Up' | 'Switch' | 'Redemption';

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
  activeFilter: FilterType;
  onViewMore: () => void;
  selectedMonth: string;
}

export default function TransactionView({
  transactions,
  activeFilter,
  onViewMore,
  selectedMonth,
}: TransactionViewProps) {
  // Filter logic
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
    <div className="rounded-3xl bg-[#EAF7E6] p-6 shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-base font-bold italic text-slate-800">
          {selectedMonth} 2026
        </h3>
        <button
          onClick={onViewMore}
          className="text-xs font-bold text-indigo-600 italic hover:underline cursor-pointer"
        >
          View More
        </button>
      </div>

      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-between gap-3 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-10 bg-[#22C55E] rounded-full" />
                <div>
                  <div className="flex items-center gap-1.5">
                    {getIcon(item.type)}
                    <h4 className="text-sm font-bold text-slate-900">{item.type}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.subtitle}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-slate-400">
                  {item.date} | {item.time}
                </p>
                <p
                  className={`text-xs font-extrabold mt-1 ${
                    item.amount.startsWith('-') ? 'text-rose-600' : 'text-slate-900'
                  }`}
                >
                  {item.amount} MYR
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="py-12 text-center text-xs font-semibold text-slate-500">
            No transactions found for "{activeFilter}".
          </div>
        )}
      </div>
    </div>
  );
}