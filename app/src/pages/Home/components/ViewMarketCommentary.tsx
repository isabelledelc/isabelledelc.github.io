
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';

interface ViewMarketCommentaryProps {
  isOpen: boolean;
  onClose: () => void;
}

const MOCK_COMMENTARIES = [
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
  {
    id: 'malaysian-ringgit-strength-q3',
    date: 'Jul 05, 2026',
    title: 'MYR Strengthening Against Regional Currencies',
    summary: 'Stronger export numbers and foreign direct investment continue to bolster domestic performance.',
  },
  {
    id: 'global-supply-chain-recovery',
    date: 'Jun 28, 2026',
    title: 'Supply Chain Bottlenecks Easing Across Asia',
    summary: 'Freight rates normalize as port efficiency improvements take effect across major trade hubs.',
  },
];

export default function ViewMarketCommentary({ isOpen, onClose }: ViewMarketCommentaryProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleItemClick = (id: string) => {
    onClose();
    navigate(`/market-commentary/${id}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-colors duration-300">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl border border-app-border shadow-2xl overflow-hidden transition-colors duration-300 bg-app-modal text-app-main">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-app-border p-6 shrink-0 bg-app-container">
          <div>
            <h3 className="text-xl font-bold text-app-heading">Market Commentary</h3>
            <p className="text-xs text-app-muted mt-0.5">Select a report to read full analysis</p>
          </div>
          
          <button
            onClick={onClose}
            className="rounded-full p-2 text-app-muted hover:bg-app-pill transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {MOCK_COMMENTARIES.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="group flex items-center justify-between rounded-2xl border border-app-border-interactive bg-app-card p-4 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="pr-4">
                <span className="text-xs font-bold text-app-primary uppercase tracking-wider">
                  {item.date}
                </span>
                <h4 className="font-bold text-app-heading mt-1 group-hover:text-app-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-app-muted mt-1 line-clamp-2">
                  {item.summary}
                </p>
              </div>

              {/* Indicator Arrow Pill */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-app-pill text-app-muted shrink-0 group-hover:bg-app-primary group-hover:text-white transition-all duration-200">
                <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-app-border p-4 shrink-0 flex justify-end bg-app-container">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-app-btn-sec hover:bg-app-btn-sec-hover px-5 py-2 text-sm font-semibold text-app-main transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}