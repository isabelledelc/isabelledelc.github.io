import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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

export default function AvailableFunds({ retailFunds, wholesaleFunds, onViewAllClick }: AvailableFundsProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'Retail' | 'Wholesale'>('Retail');

  const funds = activeTab === 'Retail' ? retailFunds : wholesaleFunds;

  const handleInvestNow = (e: React.MouseEvent, fund: Fund) => {
    // Prevent event bubbling if container div has a separate click handler
    e.stopPropagation(); 
    navigate('/top-up', { state: { selectedFund: fund } });
  };

  return (
    <div className="rounded-3xl bg-[#8BC670] p-6 shadow-md flex flex-col justify-between space-y-4 text-white">
      <div>
        <h3 className="text-xl font-bold text-white mb-4 text-center">Available Funds</h3>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            onClick={() => setActiveTab('Retail')}
            className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'Retail' ? 'bg-[#22C55E] text-white shadow-md' : 'bg-slate-700/30 text-white/80 hover:bg-slate-700/50'
            }`}
          >
            Retail
          </button>
          <button
            onClick={() => setActiveTab('Wholesale')}
            className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'Wholesale' ? 'bg-[#22C55E] text-white shadow-md' : 'bg-slate-700/30 text-white/80 hover:bg-slate-700/50'
            }`}
          >
            Wholesale
          </button>
        </div>

        {/* Funds List */}
        <div className="space-y-3">
          {funds.slice(0, 2).map((fund) => (
            <div
              key={fund.id}
              onClick={() => navigate(`/invest/subpages/view-fund-details?fundId=${fund.id}`)}
              className="p-4 rounded-2xl bg-white text-slate-800 shadow-xs hover:shadow-md transition cursor-pointer flex justify-between items-center"
            >
              <div>
                <h4 className="text-xs font-bold uppercase">{fund.name}</h4>
                <p className="text-xs font-bold text-slate-400 mt-2">{fund.code}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <ChevronRight className="w-4 h-4 text-slate-400" />
                <button
                  type="button"
                  onClick={(e) => handleInvestNow(e, fund)}
                  className="text-xs font-bold text-emerald-600 hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                  Invest Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-right">
        <button
          onClick={onViewAllClick}
          className="text-sm font-bold text-slate-900 italic hover:underline cursor-pointer"
        >
          View All
        </button>
      </div>
    </div>
  );
}