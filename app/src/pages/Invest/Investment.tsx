import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';

import Header from '../../components/shared/header';
import Navbar from '../../components/shared/navbar';

// Custom components
import TotalGoalSummary from './components/TotalGoalSummary';
import YourGoals from './components/YourGoals';
import AvailableFunds from './components/AvailableFunds';

// Subpages / Modals
import ViewAllGoals from './subpages/ViewAllGoals';
import ViewAllFunds from './subpages/ViewAllFunds';
import ViewMarketCommentary from './subpages/ViewMarketCommentary';

// Shared Mock Data
const goals = [
  { id: 'goal-1', title: 'House Deposit', saved: 'MYR 12,800', target: 'MYR 120,000', progress: 11 },
  { id: 'goal-2', title: 'Holiday Fund', saved: 'MYR 4,500', target: 'MYR 20,000', progress: 23 },
  { id: 'goal-3', title: 'Emergency Fund', saved: 'MYR 8,200', target: 'MYR 50,000', progress: 16 },
];

const retailFunds = [
  { id: 'fund-1', name: 'OPUS INCOME PLUS', code: 'IPF' },
  { id: 'fund-2', name: 'OPUS CASH EXTRA', code: 'CEF' },
];

const wholesaleFunds = [
  { id: 'fund-3', name: 'OPUS GROWTH FUND', code: 'OGF' },
  { id: 'fund-4', name: 'OPUS GLOBAL VALUE', code: 'GVF' },
];

const marketCommentary = [
  { id: 'comm-1', title: 'OPUSAM Weekly', date: '6th July 2026' },
  { id: 'comm-2', title: 'Market Outlook', date: '1st July 2026' },
  { id: 'comm-3', title: 'Fixed Income Review', date: '28th June 2026' },
];

export default function Investment() {
  const navigate = useNavigate();

  const [showGoalsModal, setShowGoalsModal] = useState(false);
  const [showFundsModal, setShowFundsModal] = useState(false);
  const [showMarketModal, setShowMarketModal] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#9ED382]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-6xl p-4 md:p-8 space-y-6 pb-16">
        {/* 1. Summary Header Card */}
        <TotalGoalSummary />

        {/* 2. Goals & Funds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <YourGoals
            goals={goals}
            onViewAllClick={() => setShowGoalsModal(true)}
          />
          <AvailableFunds
            retailFunds={retailFunds}
            wholesaleFunds={wholesaleFunds}
            onViewAllClick={() => setShowFundsModal(true)}
          />
        </div>

        {/* 3. Market Commentary Summary */}
        <div className="rounded-3xl bg-[#EAF7E6] p-6 shadow-md space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-slate-700" />
              <h3 className="text-lg font-bold text-slate-900">View Market Commentary</h3>
            </div>
            <button
              onClick={() => setShowMarketModal(true)}
              className="text-sm font-bold text-emerald-700 hover:underline cursor-pointer"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {marketCommentary.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/invest/subpages/commentary-details?id=${item.id}`)}
                className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{item.date}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Pop-up Modals / Overlay Subpages */}
      {showGoalsModal && (
        <ViewAllGoals
          goals={goals}
          onClose={() => setShowGoalsModal(false)}
        />
      )}

      {showFundsModal && (
        <ViewAllFunds
          retailFunds={retailFunds}
          wholesaleFunds={wholesaleFunds}
          onClose={() => setShowFundsModal(false)}
        />
      )}

      {showMarketModal && (
        <ViewMarketCommentary
          commentaries={marketCommentary}
          onClose={() => setShowMarketModal(false)}
        />
      )}
    </div>
  );
}