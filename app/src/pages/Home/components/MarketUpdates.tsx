import React from 'react';
import { ArrowUpRight, ArrowDownRight, ArrowRight } from 'lucide-react';

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

export default function MarketUpdates() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-white">Market Updates</h2>
      <div className="rounded-3xl bg-[#5d8b7b]/60 p-6 backdrop-blur-md border border-white/10 shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/20 text-left text-sm text-white/70">
              <th className="pb-3 font-normal">Indicator</th>
              <th className="pb-3 font-normal">Value</th>
              <th className="pb-3 font-normal">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-sm text-white">
            {marketData.map((item, index) => (
              <tr key={index}>
                <td className={`py-3.5 ${index === 0 ? 'font-bold' : 'font-normal text-white/80'}`}>
                  {item.indicator}
                </td>
                <td className="py-3.5 font-medium">{item.value}</td>
                <td className="py-3.5">
                  {item.trend === 'up' && <ArrowUpRight className="h-5 w-5 text-emerald-300" />}
                  {item.trend === 'down' && <ArrowDownRight className="h-5 w-5 text-rose-300" />}
                  {item.trend === 'flat' && <ArrowRight className="h-5 w-5 text-white/70" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-center">
        <a href="#" className="text-xs text-sky-300/80 hover:underline">
          View the full report
        </a>
      </div>
    </section>
  );
}