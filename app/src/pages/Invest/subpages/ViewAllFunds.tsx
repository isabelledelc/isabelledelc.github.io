import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight, X } from 'lucide-react';

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

  const handleFundClick = (fundId: string) => {
    onClose();
    navigate(`/invest/subpages/view-fund-details?fundId=${fundId}`);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-slate-100 transition cursor-pointer">
              <ChevronLeft className="w-6 h-6 text-slate-800" />
            </button>
            <h2 className="text-xl font-bold text-slate-900">View Available Funds</h2>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {/* Retail */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Retail</h3>
            <div className="space-y-3">
              {retailFunds.map((fund) => (
                <div
                  key={fund.id}
                  onClick={() => handleFundClick(fund.id)}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition cursor-pointer flex justify-between items-end"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-800">{fund.name}</p>
                    <p className="text-xs text-slate-400 font-medium mt-2">{fund.code}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                    <span>Invest Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wholesale */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Wholesale</h3>
            <div className="space-y-3">
              {wholesaleFunds.map((fund) => (
                <div
                  key={fund.id}
                  onClick={() => handleFundClick(fund.id)}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition cursor-pointer flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-800">{fund.name}</p>
                    <p className="text-xs text-slate-400 font-medium mt-2">{fund.code}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}