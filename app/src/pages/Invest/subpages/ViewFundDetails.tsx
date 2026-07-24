import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ArrowUpRight, X, Search } from 'lucide-react';

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
  const [searchQuery, setSearchQuery] = useState('');

  // Filter funds based on active tab AND search query
  const filteredFunds = useMemo(() => {
    const currentFunds = activeTab === 'Retail' ? retailFunds : wholesaleFunds;
    
    if (!searchQuery.trim()) {
      return currentFunds;
    }

    const query = searchQuery.toLowerCase();
    return currentFunds.filter(
      (fund) =>
        fund.name.toLowerCase().includes(query) ||
        fund.code.toLowerCase().includes(query)
    );
  }, [activeTab, retailFunds, wholesaleFunds, searchQuery]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-app-card border border-app-border w-full max-w-3xl rounded-[32px] shadow-2xl overflow-hidden max-h-[85vh] flex flex-col transition-colors duration-300">
        
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
              <h2 className="text-xl font-bold text-app-heading">Available Funds</h2>
              <p className="text-xs font-semibold text-app-muted mt-0.5">Explore and select investment funds</p>
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

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-5 overflow-hidden flex flex-col flex-1">
          
          {/* Controls Bar: Tabs + Search Input */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="inline-flex rounded-2xl bg-app-pill border border-app-border p-1.5 gap-1.5 self-start">
              {(['Retail', 'Wholesale'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setActiveTab(type)}
                  className={`rounded-xl px-5 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === type
                      ? 'bg-app-primary text-white shadow-md scale-[1.02]'
                      : 'text-app-muted hover:text-app-heading hover:bg-app-card/40'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative flex-1 max-w-xs">
              <Search className="w-4 h-4 text-app-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search fund name or code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-app-pill border border-app-border focus:border-app-border-interactive text-xs text-app-heading placeholder-app-muted font-medium outline-none transition-all duration-200"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-app-muted hover:text-app-heading cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Fund List Container */}
          <div className="grid gap-3 overflow-y-auto pr-1 flex-1 max-h-[48vh]">
            {filteredFunds.length > 0 ? (
              filteredFunds.map((fund) => (
                <div
                  key={fund.id}
                  onClick={() => {
                    onClose();
                    navigate(`/invest/subpages/view-fund-details?fundId=${fund.id}`);
                  }}
                  className="p-4 md:p-5 rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive transition-all duration-200 cursor-pointer flex justify-between items-center group hover:shadow-md"
                >
                  <div>
                    <p className="text-sm font-bold text-app-heading group-hover:text-app-primary transition-colors">
                      {fund.name}
                    </p>
                    <p className="text-xs font-semibold text-app-muted mt-1">{fund.code}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-app-primary shrink-0">
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 border border-dashed border-app-border rounded-2xl text-center">
                <p className="text-sm font-bold text-app-heading">No funds found</p>
                <p className="text-xs font-medium text-app-muted mt-1">
                  Try adjusting your search query or switching tabs.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}