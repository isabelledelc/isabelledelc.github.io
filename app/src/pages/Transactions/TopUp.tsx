import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../../components/shared/header";

export default function TopUp() {
  const navigate = useNavigate();
  const location = useLocation();

  const passedFund = location.state?.selectedFund;
  const fundName = passedFund ? passedFund.name : 'OPUS Income Plus Fund';

  const [accountNum, setAccountNum] = useState('1234567890');
  const [amount, setAmount] = useState('250.00');
  const [paymentMethod, setPaymentMethod] = useState<'Boost' | 'Offline' | 'FPX'>('Boost');

  const handleNext = () => {
    navigate('/transactions/payment-confirmation', {
      state: { accountNum, amount, paymentMethod, fundName }
    });
  };

  return (
    <div 
      className="min-h-screen w-full transition-colors duration-300 text-app-main font-sans"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />

      <main className="mx-auto max-w-5xl p-4 md:p-8">
        <div className="bg-app-card backdrop-blur-md rounded-2xl shadow-xl border border-app-border overflow-hidden transition-colors duration-300">
          
          {/* Header Bar */}
          <div className="p-6 border-b border-app-border flex items-center space-x-4">
            <button 
              onClick={() => navigate(-1)}
              className="text-xl font-bold text-app-heading hover:bg-app-pill rounded-full w-9 h-9 flex items-center justify-center transition-colors cursor-pointer"
              title="Go Back"
            >
              &lt;
            </button>
            <h1 className="text-2xl font-bold text-app-heading font-heading">Deposit To Your Account</h1>
          </div>

          {/* Form Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            
            {/* Left Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-app-muted">Account Number</label>
                <select 
                  value={accountNum} 
                  onChange={(e) => setAccountNum(e.target.value)}
                  className="border-2 border-app-primary rounded-xl p-2.5 outline-none bg-app-card text-app-main font-medium cursor-pointer focus:ring-2 focus:ring-app-primary/50"
                >
                  <option value="1234567890">1234-5678-90</option>
                  <option value="9876543210">9876-5432-10</option>
                </select>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-app-muted">Account Name</label>
                <span className="text-app-heading font-medium">Alex Tan Jin Wei</span>
              </div>

              <div className="grid grid-cols-2 items-start">
                <label className="font-semibold text-app-muted pt-2">Deposit Amount</label>
                <div>
                  <div className="border-2 border-app-primary rounded-xl p-2.5 flex items-center bg-app-card">
                    <span className="text-app-muted font-mono-data mr-2">RM</span>
                    <input 
                      type="number" 
                      value={amount} 
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full font-medium text-app-heading bg-transparent outline-none font-mono-data"
                    />
                  </div>
                  <p className="text-xs text-app-muted mt-1.5 italic">(Minimum of RM100 Deposit)</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-app-muted">Goal</label>
                <span className="text-app-heading uppercase tracking-wide font-semibold">RETIREMENT FUND</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-app-muted">Fund Name</label>
                <span className="text-app-heading font-medium">{fundName}</span>
              </div>

              <div className="grid grid-cols-2 items-start">
                <label className="font-semibold text-app-muted pt-2">Payment Method</label>
                <div className="border-2 border-app-primary rounded-2xl p-4 space-y-3 bg-app-container flex flex-col items-center">
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('Boost')}
                    className={`border rounded-xl p-2.5 w-32 text-center font-bold text-base transition-all cursor-pointer ${
                      paymentMethod === 'Boost' 
                        ? 'border-red-500 bg-red-500/10 text-red-500 ring-2 ring-red-400' 
                        : 'border-app-border text-app-muted hover:border-red-400/50'
                    }`}
                  >
                    Boost
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('Offline')}
                    className={`border rounded-xl p-2.5 w-32 text-center font-semibold transition-all cursor-pointer ${
                      paymentMethod === 'Offline' 
                        ? 'border-amber-500 bg-amber-500/10 text-amber-500 ring-2 ring-amber-400' 
                        : 'border-app-border text-app-muted hover:border-amber-400/50'
                    }`}
                  >
                    Offline
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('FPX')}
                    className={`border rounded-xl p-2.5 w-32 text-center font-semibold transition-all cursor-pointer ${
                      paymentMethod === 'FPX' 
                        ? 'border-sky-500 bg-sky-500/10 text-sky-500 ring-2 ring-sky-400' 
                        : 'border-app-border text-app-muted hover:border-sky-400/50'
                    }`}
                  >
                    FPX
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-8 flex justify-center pt-2 border-t border-app-border/50">
            <button 
              onClick={handleNext}
              className="bg-app-primary hover:bg-app-primary-hover text-white font-semibold py-3.5 px-24 rounded-xl text-lg transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Next
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}