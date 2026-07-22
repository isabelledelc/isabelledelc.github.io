import  { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../../components/shared/header";
import Navbar from "../../components/shared/navbar";

export default function TopUp() {
  const navigate = useNavigate();
  const location = useLocation();

  // Read fund details passed from navigation state (fallback if direct URL access)
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
    <div className="min-h-screen w-full bg-[#9ED382]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header Bar */}
          <div className="p-6 border-b border-gray-200 flex items-center space-x-4">
            <button 
              onClick={() => navigate(-1)}
              className="text-xl font-bold text-gray-700 hover:text-black hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer"
              title="Go Back"
            >
              &lt;
            </button>
            <h1 className="text-2xl font-bold text-black">Deposit To Your Account</h1>
          </div>

          {/* Form Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Account Number</label>
                <select 
                  value={accountNum} 
                  onChange={(e) => setAccountNum(e.target.value)}
                  className="border-2 border-emerald-500 rounded-lg p-2.5 outline-none bg-white font-medium text-gray-700 cursor-pointer"
                >
                  <option value="1234567890">1234-5678-90</option>
                  <option value="9876543210">9876-5432-10</option>
                </select>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Account Name</label>
                <span className="text-gray-800 font-medium">Alex Tan Jin Wei</span>
              </div>

              <div className="grid grid-cols-2 items-start">
                <label className="font-semibold text-gray-600 pt-2">Deposit Amount</label>
                <div>
                  <div className="border-2 border-emerald-500 rounded-lg p-2.5 flex items-center bg-white">
                    <span className="text-gray-400 mr-2">RM</span>
                    <input 
                      type="number" 
                      value={amount} 
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full font-medium text-gray-800 outline-none"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1 italic">(Minimum of RM100 Deposit)</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Goal</label>
                <span className="text-gray-800 uppercase tracking-wide font-medium">RETIREMENT FUND</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Fund Name</label>
                <span className="text-gray-800 font-medium">{fundName}</span>
              </div>

              <div className="grid grid-cols-2 items-start">
                <label className="font-semibold text-gray-600 pt-2">Payment Method</label>
                <div className="border-2 border-emerald-500 rounded-xl p-4 space-y-3 bg-white flex flex-col items-center">
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('Boost')}
                    className={`border rounded-lg p-2 w-32 text-center font-bold text-lg transition-all cursor-pointer ${paymentMethod === 'Boost' ? 'border-red-500 bg-red-50 text-red-600 ring-2 ring-red-400' : 'border-gray-200 text-gray-400 hover:border-red-300'}`}
                  >
                    Boost
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('Offline')}
                    className={`border rounded-lg p-2 w-32 text-center font-medium transition-all cursor-pointer ${paymentMethod === 'Offline' ? 'border-orange-500 bg-orange-50 text-orange-600 ring-2 ring-orange-400' : 'border-gray-200 text-gray-400 hover:border-orange-300'}`}
                  >
                    Offline
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod('FPX')}
                    className={`border rounded-lg p-2 w-32 text-center font-semibold transition-all cursor-pointer ${paymentMethod === 'FPX' ? 'border-blue-800 bg-blue-50 text-blue-800 ring-2 ring-blue-400' : 'border-gray-200 text-gray-400 hover:border-blue-300'}`}
                  >
                    FPX
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-8 flex justify-center pt-2">
            <button 
              onClick={handleNext}
              className="bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3 px-24 rounded-xl text-lg transition-colors shadow-sm active:scale-95 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}