import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, ArrowRight } from 'lucide-react';
import ViewMarketCommentary from './ViewMarketCommentary';

interface MarketIndicator {
  indicator: string;
  value: string;
  trend: 'up' | 'down' | 'flat';
}

const marketData: MarketIndicator[] = [
  { indicator: 'OPR Rate', value: 'X.xx%', trend: 'up' },
  { indicator: 'Msia government bonds', value: 'X.xx%', trend: 'down' },
  { indicator: 'US Treasury', value: 'X.xx%', trend: 'flat' },
  { indicator: 'Inflation', value: 'X.xx%', trend: 'up' },
  { indicator: 'USD/MYR', value: 'X.xx%', trend: 'up' },
];

export default function MarketCommentary() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-slate-800 dark:text-white">Market Commentary</h2>
      
      <div className="rounded-3xl p-6 backdrop-blur-md shadow-lg transition-colors border bg-white/80 border-slate-200/80 dark:bg-[#5d8b7b]/60 dark:border-white/10">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-white/20 text-left text-sm text-slate-500 dark:text-white/70">
              <th className="pb-3 font-normal">Indicator</th>
              <th className="pb-3 font-normal">Value</th>
              <th className="pb-3 font-normal">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/10 text-sm text-slate-800 dark:text-white">
            {marketData.map((item, index) => (
              <tr key={index}>
                <td className={`py-3.5 ${index === 0 ? 'font-bold' : 'font-normal text-slate-700 dark:text-white/80'}`}>
                  {item.indicator}
                </td>
                <td className="py-3.5 font-medium">{item.value}</td>
                <td className="py-3.5">
                  {item.trend === 'up' && <ArrowUpRight className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />}
                  {item.trend === 'down' && <ArrowDownRight className="h-5 w-5 text-rose-500 dark:text-rose-300" />}
                  {item.trend === 'flat' && <ArrowRight className="h-5 w-5 text-slate-400 dark:text-white/70" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 text-center">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-xs text-sky-600 dark:text-sky-300/80 hover:underline bg-transparent border-0 cursor-pointer"
        >
          View All Market Commentary
        </button>
      </div>

      <ViewMarketCommentary
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}