import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, TrendingUp } from 'lucide-react';

interface Fund {
  id: string;
  name: string;
  code: string;
}

interface AvailableFundsProps {
  retailFunds: Fund[];
  wholesaleFunds: Fund[];
  onViewAllClick: () => void;
}

export default function AvailableFunds({
  retailFunds,
  wholesaleFunds,
  onViewAllClick,
}: AvailableFundsProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'Retail' | 'Wholesale'>('Retail');

  const funds = activeTab === 'Retail' ? retailFunds : wholesaleFunds;

  const handleInvestNow = (e: React.MouseEvent, fund: Fund) => {
    e.stopPropagation();
    navigate('/top-up', { state: { selectedFund: fund } });
  };

  return (
    <div className="rounded-[32px] bg-app-card border border-app-border p-6 shadow-xl backdrop-blur-md flex flex-col justify-between space-y-6 transition-colors duration-300">
      <div>
        {/* Card Header & Action */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-app-heading">Available Funds</h3>
          <button
            onClick={onViewAllClick}
            className="text-xs font-bold text-app-primary hover:underline cursor-pointer transition-opacity hover:opacity-80"
          >
            View All Funds
          </button>
        </div>

        {/* Tab Toggle Switcher */}
        <div className="grid grid-cols-2 p-1.5 mb-4 rounded-2xl bg-app-pill border border-app-border">
          {(['Retail', 'Wholesale'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-app-primary text-white shadow-md scale-[1.02]'
                  : 'text-app-muted hover:text-app-heading hover:bg-app-card/40'
              }`}
            >
              {tab} Funds
            </button>
          ))}
        </div>

        {/* Funds List */}
        <div className="space-y-3">
          {funds.slice(0, 3).map((fund) => (
            <div
              key={fund.id}
              onClick={() =>
                navigate(`/invest/subpages/view-fund-details?fundId=${fund.id}`)
              }
              className="p-4 rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive hover:bg-app-card/60 transition-all duration-200 cursor-pointer flex items-center justify-between group shadow-sm hover:shadow-md"
            >
              {/* Left Side: Icon & Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl border border-app-border bg-app-card flex items-center justify-center text-app-primary group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-5 h-5 text-app-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-app-heading uppercase group-hover:text-app-primary transition-colors">
                    {fund.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-app-muted mt-1">
                    Code: {fund.code}
                  </p>
                </div>
              </div>

              {/* Right Side: Tab-Specific Actions */}
              {activeTab === 'Retail' ? (
                <button
                  type="button"
                  onClick={(e) => handleInvestNow(e, fund)}
                  className="px-3.5 py-1.5 bg-app-primary text-white text-xs font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-sm"
                >
                  Invest Now
                </button>
              ) : (
                <div className="p-1 rounded-lg text-app-muted group-hover:text-app-primary transition-colors">
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}