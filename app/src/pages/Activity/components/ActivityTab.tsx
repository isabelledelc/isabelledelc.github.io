import React from 'react';

export type MainTab = 'Transaction' | 'Statement';
export type FilterType = 'All' | 'Top Up' | 'Switch' | 'Redemption';

interface ActivityTabProps {
  activeTab: MainTab;
  onTabChange: (tab: MainTab) => void;
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filterOptions: FilterType[] = ['All', 'Top Up', 'Switch', 'Redemption'];

export default function ActivityTab({
  activeTab,
  onTabChange,
  activeFilter,
  onFilterChange,
}: ActivityTabProps) {
  return (
    <div className="space-y-4">
      {/* Top Main Tab Headers */}
      <div className="flex items-center justify-center gap-12 text-lg font-bold">
        <button
          type="button"
          onClick={() => onTabChange('Transaction')}
          className={`pb-1 transition cursor-pointer relative ${
            activeTab === 'Transaction'
              ? 'text-app-heading font-extrabold border-b-2 border-app-heading'
              : 'text-app-muted hover:text-app-heading'
          }`}
        >
          Transaction
        </button>

        <button
          type="button"
          onClick={() => onTabChange('Statement')}
          className={`pb-1 transition cursor-pointer relative ${
            activeTab === 'Statement'
              ? 'text-app-heading font-extrabold border-b-2 border-app-heading'
              : 'text-app-muted hover:text-app-heading'
          }`}
        >
          Statement
        </button>
      </div>

      {/* Filter Pills Container */}
      <div className="rounded-2xl border border-app-border p-2.5 flex items-center justify-around gap-2 bg-app-pill backdrop-blur-xs">
        {filterOptions.map((filter) => {
          const isSelected = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                isSelected
                  ? 'bg-app-primary text-white shadow-md'
                  : 'bg-app-card text-app-heading hover:border-app-border-interactive border border-app-border'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}