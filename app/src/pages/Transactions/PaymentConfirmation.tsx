import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../../components/shared/header";
import Navbar from "../../components/shared/navbar";

export default function PaymentConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract form state values passed from TopUp (with defaults)
  const amount = location.state?.amount || '250.00';
  const paymentMethod = location.state?.paymentMethod || 'Boost';

  const handleProceed = () => {
    navigate('/transactions/transaction-confirmation', {
      state: { amount, paymentMethod }
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
              className="text-xl font-bold text-gray-700 hover:text-black hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              title="Go Back"
            >
              &lt;
            </button>
            <h1 className="text-2xl font-bold text-black">Payment Confirmation</h1>
          </div>

          <div className="p-8 space-y-6">
            <h2 className="text-xl font-bold text-black mb-6">Payment Details</h2>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
              <div className="grid grid-cols-2">
                <span className="font-semibold text-gray-600">Master Account</span>
                <span className="text-gray-800 font-medium">A-908123-KYC</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="font-semibold text-gray-600">Fund Name</span>
                <span className="text-gray-800 uppercase font-medium">OPUS INCOME PLUS FUND</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold text-gray-600">Account Holder(s)</span>
                <span className="text-gray-800 font-medium">Alex Tan Jin Wei</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="font-semibold text-gray-600">Payment Amount</span>
                <span className="text-emerald-600 font-bold text-base">MYR {amount}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold text-gray-600">Goal</span>
                <span className="text-gray-800 uppercase font-medium">RETIREMENT FUND</span>
              </div>
              <div className="grid grid-cols-2 items-center">
                <span className="font-semibold text-gray-600">Payment Method</span>
                <div className={`border rounded-lg px-3 py-1 w-24 text-center font-bold text-sm shadow-sm ${
                  paymentMethod === 'Boost' ? 'border-red-300 text-red-500 bg-red-50' : 
                  paymentMethod === 'Offline' ? 'border-orange-300 text-orange-500 bg-orange-50' : 
                  'border-blue-300 text-blue-800 bg-blue-50'
                }`}>
                  {paymentMethod}
                </div>
              </div>
            </div>

            {/* Note Box */}
            <div className="bg-[#EAF5E8] border border-emerald-100 rounded-2xl p-6 mt-8 space-y-3 text-xs text-gray-700 leading-relaxed">
              <h3 className="font-bold text-sm text-black mb-2">Note :</h3>
              <p>• Any transactions made after 4:00 PM will be processed on the next business day.</p>
              <p>• Kindly ensure that your payment details match your registered account name.</p>
              <p>• Please take note that we do not allow 3rd party payment to make investment. We reserve the right to reject any 3rd party payment at our sole discretion.</p>
            </div>

            {/* Action Button */}
            <div className="flex justify-center pt-6">
              <button 
                onClick={handleProceed}
                className="bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3 px-24 rounded-xl text-lg transition-colors shadow-sm active:scale-95"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}