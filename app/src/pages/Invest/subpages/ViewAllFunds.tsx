
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-app-card border border-app-border w-full max-w-4xl rounded-[32px] shadow-2xl overflow-hidden max-h-[85vh] flex flex-col transition-colors duration-300">
        
        {/* Modal Header */}
        <div className="p-5 md:p-6 border-b border-app-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive flex items-center justify-center text-app-heading hover:text-app-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              title="Go Back"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-xl font-bold text-app-heading">View Available Funds</h2>
              <p className="text-xs font-semibold text-app-muted mt-0.5">Explore retail and wholesale investment funds</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive flex items-center justify-center text-app-muted hover:text-app-heading transition-all duration-200 cursor-pointer active:scale-95"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two Column Grid */}
        <div className="p-6 md:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          
          {/* Retail Column */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-app-heading">Retail</h3>
              <span className="text-xs font-semibold text-app-muted bg-app-pill px-2.5 py-0.5 rounded-full border border-app-border">
                {retailFunds.length}
              </span>
            </div>
            <div className="space-y-3">
              {retailFunds.map((fund) => (
                <div
                  key={fund.id}
                  onClick={() => handleFundClick(fund.id)}
                  className="p-4 rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive transition-all duration-200 cursor-pointer flex justify-between items-end group hover:shadow-md"
                >
                  <div>
                    <p className="text-xs font-bold text-app-heading group-hover:text-app-primary transition-colors">
                      {fund.name}
                    </p>
                    <p className="text-xs text-app-muted font-medium mt-2">{fund.code}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-app-primary shrink-0">
                    <span>Invest Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wholesale Column */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-app-heading">Wholesale</h3>
              <span className="text-xs font-semibold text-app-muted bg-app-pill px-2.5 py-0.5 rounded-full border border-app-border">
                {wholesaleFunds.length}
              </span>
            </div>
            <div className="space-y-3">
              {wholesaleFunds.map((fund) => (
                <div
                  key={fund.id}
                  onClick={() => handleFundClick(fund.id)}
                  className="p-4 rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive transition-all duration-200 cursor-pointer flex justify-between items-center group hover:shadow-md"
                >
                  <div>
                    <p className="text-xs font-bold text-app-heading group-hover:text-app-primary transition-colors">
                      {fund.name}
                    </p>
                    <p className="text-xs text-app-muted font-medium mt-2">{fund.code}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-app-muted group-hover:text-app-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

