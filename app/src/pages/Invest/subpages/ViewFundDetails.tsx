import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ArrowUpRight, ChevronRight, X } from 'lucide-react';

interface Fund {
  id: string;
  name: string;
  code: string;
}

interface ViewAllFundsProps {
  retailFunds: Fund[];
  wholesaleFunds: Fund[];
  onClose: () => void;
}

export default function ViewAllFunds({ retailFunds, wholesaleFunds, onClose }: ViewAllFundsProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'Retail' | 'Wholesale'>('Retail');

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-slate-100 transition cursor-pointer">
              <ChevronLeft className="w-6 h-6 text-slate-800" />
            </button>
            <h2 className="text-xl font-bold text-slate-900">Available Funds</h2>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="inline-flex rounded-full bg-slate-100 p-1 mb-4">
            {(['Retail', 'Wholesale'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition cursor-pointer ${
                  activeTab === type ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid gap-3 max-h-[50vh] overflow-y-auto">
            {(activeTab === 'Retail' ? retailFunds : wholesaleFunds).map((fund) => (
              <div
                key={fund.id}
                onClick={() => {
                  onClose();
                  navigate(`/invest/subpages/view-fund-details?fundId=${fund.id}`);
                }}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-500 transition cursor-pointer flex justify-between items-center"
              >
                <div>
                  <p className="text-sm font-bold text-slate-900">{fund.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{fund.code}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}