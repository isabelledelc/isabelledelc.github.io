import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';

interface ViewMarketCommentaryProps {
  isOpen: boolean;
  onClose: () => void;
}

// Sample data with routes/IDs
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
    onClose(); // Close the modal
    navigate(`/market-commentary/${id}`); // Navigate to the detailed page
  };

  return (
    /* Backdrop Overlay with Backdrop Blur */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-colors duration-300">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-2xl overflow-hidden transition-colors duration-300 bg-white/95 dark:bg-[#1f3a2d] dark:text-white">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 p-6 shrink-0 bg-slate-50/50 dark:bg-[#162e24]">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Market Commentary</h3>
            <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">Select a report to read full analysis</p>
          </div>
          
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-200/60 dark:hover:bg-white/10 dark:text-white/70 hover:text-slate-700 dark:hover:text-white transition cursor-pointer"
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
              /* Styled exactly like MarketCommentary.tsx */
              className="group flex items-center justify-between rounded-2xl border border-slate-200/80 dark:border-white/15 bg-white dark:bg-[#48695e]/70 p-4 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="pr-4">
                <span className="text-xs font-bold text-[#2f8f79] dark:text-emerald-400 uppercase tracking-wider">
                  {item.date}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white mt-1 group-hover:text-[#2f8f79] dark:group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                  {item.summary}
                </p>
              </div>

              {/* Click Indicator Arrow Pill */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-white/70 shrink-0 group-hover:bg-[#2f8f79] dark:group-hover:bg-emerald-400 group-hover:text-white dark:group-hover:text-slate-900 transition-all duration-200">
                <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-200/80 dark:border-white/10 p-4 shrink-0 flex justify-end bg-slate-50/50 dark:bg-[#162e24]">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-200 dark:bg-white/10 px-5 py-2 text-sm font-semibold text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}