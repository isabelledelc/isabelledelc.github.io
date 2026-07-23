import React, { useState } from 'react';
import Header from '../../components/shared/header';
import Navbar from '../../components/shared/navbar';

// Modular Components
import ActivitySummary from './components/ActivitySummary';
import ActivityTab, { type MainTab, type FilterType } from './components/ActivityTab';
import TransactionView, { type Transaction } from './components/TransactionView';
import StatementView, { type Statement } from './components/StatementView';

// Subpage Modals
import ViewAllTransactions from './subpages/ViewAllTransactions';
import ViewAllStatements from './subpages/ViewAllStatements';

// Mock Data
const months = ['MAY', 'JUN', 'JULY'];

const sampleTransactions: Transaction[] = [
  {
    id: 'tx-1',
    type: 'Top Up',
    subtitle: 'Top Up to Bank Account (XXXX)',
    date: '03/07',
    time: '09:33:50 AM',
    amount: '100.00',
  },
  {
    id: 'tx-2',
    type: 'Switch',
    subtitle: 'Switch to Bank Account (XXXX)',
    date: '03/07',
    time: '09:33:50 AM',
    amount: '100.00',
  },
  {
    id: 'tx-3',
    type: 'Redemption',
    subtitle: 'Redeem to Bank Account (XXXX)',
    date: '03/07',
    time: '09:33:50 AM',
    amount: '-100.00',
  },
  {
    id: 'tx-4',
    type: 'Top Up',
    subtitle: 'Top Up to Investment Goal',
    date: '01/07',
    time: '02:15:20 PM',
    amount: '500.00',
  },
];

const sampleStatements: Statement[] = [
  { id: 'st-1', title: 'Monthly Statement - July 2026', period: '01 Jul 2026 - 31 Jul 2026', fileSize: '1.2 MB' },
  { id: 'st-[#st-2]', title: 'Monthly Statement - June 2026', period: '01 Jun 2026 - 30 Jun 2026', fileSize: '1.1 MB' },
  { id: 'st-3', title: 'Quarterly Report Q2 2026', period: '01 Apr 2026 - 30 Jun 2026', fileSize: '2.4 MB' },
];

export default function Activity() {
  const [monthIndex, setMonthIndex] = useState(1); // Defaults to JUN
  const [activeTab, setActiveTab] = useState<MainTab>('Transaction');
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  // Modals
  const [showAllTx, setShowAllTx] = useState(false);
  const [showAllStatements, setShowAllStatements] = useState(false);

  const handleMonthChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && monthIndex > 0) {
      setMonthIndex((prev) => prev - 1);
    } else if (direction === 'next' && monthIndex < months.length - 1) {
      setMonthIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#9ED382]">
      <Header />

      <main className="mx-auto max-w-6xl p-4 md:p-8 space-y-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
          
          {/* Left Column: Month Selector + Ring Summary */}
          <div className="h-full">
            <ActivitySummary
              selectedMonth={months[monthIndex]}
              onMonthChange={handleMonthChange}
              totalAmount="RM 12,450.00"
              progressPercentage={72}
            />
          </div>

          {/* Right Column: Tab Selectors & Main Content Card */}
          <div className="space-y-4">
            <ActivityTab
              activeTab={activeTab}
              onTabChange={setActiveTab}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            {activeTab === 'Transaction' ? (
              <TransactionView
                transactions={sampleTransactions}
                activeFilter={activeFilter}
                onViewMore={() => setShowAllTx(true)}
                selectedMonth={months[monthIndex]}
              />
            ) : (
              <StatementView
                statements={sampleStatements}
                onViewMore={() => setShowAllStatements(true)}
                selectedMonth={months[monthIndex]}
              />
            )}
          </div>
        </div>
      </main>

      {/* Subpage Overlay Modals */}
      {showAllTx && (
        <ViewAllTransactions
          transactions={sampleTransactions}
          onClose={() => setShowAllTx(false)}
        />
      )}

      {showAllStatements && (
        <ViewAllStatements
          statements={sampleStatements}
          onClose={() => setShowAllStatements(false)}
        />
      )}
    </div>
  );
}