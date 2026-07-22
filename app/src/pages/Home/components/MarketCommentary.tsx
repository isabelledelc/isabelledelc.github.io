import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ViewMarketCommentary from './ViewMarketCommentary';

const FEATURED_COMMENTARIES = [
  {
    id: 'fed-rate-decision-july-2026',
    date: 'Jul 22, 2026',
    title: 'Global Markets React to Fed Rate Decisions',
    summary: 'Equities rallied following signals of steady monetary policy, with tech leading the charge.',
  },
  {
    id: 'q3-tech-earnings-overview',
    date: 'Jul 18, 2026',
    title: 'Q3 Tech Earnings Overview',
    summary: 'Major cloud and enterprise software providers report higher-than-expected margin growth.',
  },
  {
    id: 'energy-sector-commodities-shift',
    date: 'Jul 12, 2026',
    title: 'Energy Sector Outlook & Commodities Shift',
    summary: 'Oil prices stabilized while renewable infrastructure investments hit a record high this quarter.',
  },
];

export default function MarketCommentary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (id: string) => {
    navigate(`/market-commentary/${id}`);
  };

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-slate-800 dark:text-white">
        Market Commentary
      </h2>
      
      {/* Outer Glass Container */}
      <div className="rounded-3xl p-6 backdrop-blur-md shadow-lg transition-colors border bg-white/60 border-slate-200/80 dark:bg-[#284f40]/40 dark:border-white/10 space-y-4">
        {FEATURED_COMMENTARIES.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            /* Solid high-contrast background with pop-out shadow */
            className="group flex items-center justify-between rounded-2xl border border-slate-200/80 dark:border-white/15 bg-white dark:bg-[#48695e]/70 p-4 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="pr-4">
              <span className="text-xs font-bold text-[#2f8f79] dark:text-emerald-400 uppercase tracking-wider">
                {item.date}
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white mt-1 group-hover:text-[#2f8f79] dark:group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                {item.summary}
              </p>
            </div>

            {/* Click Indicator Arrow in a subtle pill */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-white/70 shrink-0 group-hover:bg-[#2f8f79] dark:group-hover:bg-emerald-400 group-hover:text-white dark:group-hover:text-slate-900 transition-all duration-200">
              <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Link to View All */}
      <div className="mt-3 text-center">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-[14px] text-sky-600 dark:text-sky-300/80 hover:underline bg-transparent border-0 cursor-pointer"
        >
          View All Market Commentary
        </button>
      </div>

      {/* Full List Modal */}
      <ViewMarketCommentary
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}