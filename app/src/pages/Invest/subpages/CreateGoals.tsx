// import { useNavigate } from 'react-router-dom';

// export default function CreateGoals() {
//   const navigate = useNavigate();
//   return (
//     <div className="p-8 max-w-xl mx-auto bg-white rounded-2xl mt-10 shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Create New Goal</h1>
//       <p className="text-slate-600 mb-6">Setup your new target investment goal here.</p>
//       <button onClick={() => navigate(-1)} className="px-4 py-2 bg-slate-200 rounded-lg text-sm font-semibold">
//         Go Back
//       </button>
//     </div>
//   );
// }



import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';

export default function CreateGoal() {
  const navigate = useNavigate();

  // Mock Form State
  const [goalName, setGoalName] = useState('RETIREMENT FUND');
  const [accountName] = useState('RYAN TEH RAY KHANG');
  const [targetAmount, setTargetAmount] = useState('100,000');
  const [achievementDate, setAchievementDate] = useState('2030-12-31');
  const [selectedFund, setSelectedFund] = useState('OPUS Income Plus Fund (IPF)');
  const [investmentAmount, setInvestmentAmount] = useState('1,000.00');
  const [enableRSP, setEnableRSP] = useState<'Yes' | 'No'>('Yes');
  const [monthlyAmount, setMonthlyAmount] = useState('500.00');
  const [paymentMethod, setPaymentMethod] = useState<'Boost' | 'Offline' | 'FPX' | 'Direct Debit'>('FPX');
  const [chosenBank, setChosenBank] = useState('MAYBANK BERHAD');

  const handleProceed = () => {
    // Navigates to Payment Confirmation with the created goal state data
    navigate('/transactions/payment-confirmation', {
      state: {
        goalName,
        accountName,
        targetAmount,
        amount: investmentAmount,
        paymentMethod,
        chosenBank,
      },
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
            <h1 className="text-2xl font-bold text-black">Create Goal</h1>
          </div>

          {/* Form Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Goal Name</label>
                <select
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                  className="border-2 border-emerald-500 rounded-lg p-2.5 outline-none bg-white font-medium text-gray-700 cursor-pointer"
                >
                  <option value="RETIREMENT FUND">Retirement Fund</option>
                  <option value="EDUCATION FUND">Education Fund</option>
                  <option value="HOUSE DEPOSIT">House Deposit</option>
                  <option value="WEALTH BUILDER">Wealth Builder</option>
                </select>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Account Name</label>
                <span className="text-gray-800 font-bold uppercase">{accountName}</span>
              </div>

              <div className="grid grid-cols-2 items-start">
                <label className="font-semibold text-gray-600 pt-2">Target Amount</label>
                <div className="border-2 border-emerald-500 rounded-lg p-2.5 flex items-center bg-white">
                  <span className="text-gray-400 mr-2 font-medium">MYR</span>
                  <input
                    type="text"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    className="w-full font-medium text-gray-800 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Goal Achievement Date</label>
                <input
                  type="date"
                  value={achievementDate}
                  onChange={(e) => setAchievementDate(e.target.value)}
                  className="border-2 border-emerald-500 rounded-lg p-2 outline-none bg-white font-medium text-gray-700 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Select Fund</label>
                <select
                  value={selectedFund}
                  onChange={(e) => setSelectedFund(e.target.value)}
                  className="border-2 border-emerald-500 rounded-lg p-2 text-xs outline-none bg-white font-medium text-gray-700 cursor-pointer"
                >
                  <option value="OPUS Income Plus Fund (IPF)">Auto (IPF, SIPF, MPF)</option>
                  <option value="OPUS Cash Extra Fund">IPF</option>
                  <option value="OPUS Shariah Income Fund">SIPF</option>
                   <option value="OPUS Shariah Income Fund">MPF</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-start">
                <label className="font-semibold text-gray-600 pt-2">Initial Investment Amount</label>
                <div className="border-2 border-emerald-500 rounded-lg p-2.5 flex items-center bg-white">
                  <span className="text-gray-400 mr-2 font-medium">MYR</span>
                  <input
                    type="text"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className="w-full font-medium text-gray-800 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Enable RSP</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setEnableRSP('Yes')}
                    className={`px-4 py-1.5 rounded-lg border font-semibold transition-all ${
                      enableRSP === 'Yes'
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'border-gray-300 text-gray-600 hover:border-emerald-400'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEnableRSP('No')}
                    className={`px-4 py-1.5 rounded-lg border font-semibold transition-all ${
                      enableRSP === 'No'
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'border-gray-300 text-gray-600 hover:border-emerald-400'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {enableRSP === 'Yes' && (
                <div className="grid grid-cols-2 items-start">
                  <label className="font-semibold text-gray-600 pt-2">Monthly Investment Amount</label>
                  <div className="border-2 border-emerald-500 rounded-lg p-2.5 flex items-center bg-white">
                    <span className="text-gray-400 mr-2 font-medium">MYR</span>
                    <input
                      type="text"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(e.target.value)}
                      className="w-full font-medium text-gray-800 outline-none"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 items-start">
                <label className="font-semibold text-gray-600 pt-2">Payment Method</label>
                <div className="border-2 border-emerald-500 rounded-xl p-3 space-y-2 bg-white flex flex-col items-center">
                  {(['FPX', 'Boost', 'Offline'] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      className={`border rounded-lg py-1.5 w-32 text-center font-bold transition-all ${
                        paymentMethod === method
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-400'
                          : 'border-gray-200 text-gray-400 hover:border-emerald-300'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Choose Your Bank</label>
                <select
                  value={chosenBank}
                  onChange={(e) => setChosenBank(e.target.value)}
                  className="border-2 border-emerald-500 rounded-lg p-2 outline-none bg-white text-xs font-medium text-gray-700 cursor-pointer"
                >
                  <option value="MAYBANK BERHAD">MAYBANK BERHAD</option>
                  <option value="CIMB BANK">CIMB BANK BERHAD</option>
                  <option value="PUBLIC BANK">PUBLIC BANK BERHAD</option>
                  <option value="RHB BANK">RHB BANK BERHAD</option>
                  <option value="HONG LEONG BANK">HONG LEONG BANK</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-8 flex justify-center pt-2">
            <button
              onClick={handleProceed}
              className="bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3 px-16 rounded-xl text-lg transition-colors shadow-sm active:scale-95"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}