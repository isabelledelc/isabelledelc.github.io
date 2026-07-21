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
          onClick={() => onTabChange('Transaction')}
          className={`pb-1 transition cursor-pointer relative ${
            activeTab === 'Transaction'
              ? 'text-slate-900 font-extrabold border-b-2 border-slate-900'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Transaction
        </button>

        <button
          onClick={() => onTabChange('Statement')}
          className={`pb-1 transition cursor-pointer relative ${
            activeTab === 'Statement'
              ? 'text-slate-900 font-extrabold border-b-2 border-slate-900'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Statement
        </button>
      </div>

      {/* White Filter Pills Container */}
      <div className="rounded-2xl border border-white/80 p-2.5 flex items-center justify-around gap-2 bg-white/10 backdrop-blur-xs">
        {filterOptions.map((filter) => {
          const isSelected = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition shadow-xs cursor-pointer ${
                isSelected
                  ? 'bg-[#22C55E] text-white shadow-md'
                  : 'bg-white text-slate-800 hover:bg-slate-100'
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