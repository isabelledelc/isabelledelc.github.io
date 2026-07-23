
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
      <h2 className="mb-4 text-2xl font-semibold text-app-heading">
        Market Commentary
      </h2>
      
      {/* Outer Glass Container */}
      <div className="rounded-3xl p-6 backdrop-blur-md shadow-lg transition-colors border bg-app-container border-app-border space-y-4">
        {FEATURED_COMMENTARIES.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className="group flex items-center justify-between rounded-2xl border border-app-border-interactive bg-app-card p-4 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="pr-4">
              <span className="text-xs font-bold text-app-primary uppercase tracking-wider">
                {item.date}
              </span>
              <h3 className="font-bold text-app-main mt-1 group-hover:text-app-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-app-muted mt-1 line-clamp-2">
                {item.summary}
              </p>
            </div>

            {/* Indicator Arrow */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-app-pill text-app-muted shrink-0 group-hover:bg-app-primary group-hover:text-white transition-all duration-200">
              <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-center">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-[14px] text-app-accent hover:underline bg-transparent border-0 cursor-pointer"
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