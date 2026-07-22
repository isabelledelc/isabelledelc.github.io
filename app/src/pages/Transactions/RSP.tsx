
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/shared/header';
import Navbar from '../../components/shared/navbar';

const AVAILABLE_FUNDS = [
  'OPUS Income Plus Fund (IPF)',
  'OPUS Shariah Income Plus Fund (SIPF)',
  'OPUS Money Market Fund (MPF)',
  'OPUS Cash Extra Fund',
  'OPUS Global Balanced Fund',
];

interface SelectedFundItem {
  id: string;
  name: string;
  amount: string;
}

export default function RSP() {
  const navigate = useNavigate();

  // Multi-step Flow State (1 = Configure Funds, 2 = Confirmation Summary)
  const [step, setStep] = useState<1 | 2>(1);

  // Mock User Account Details
  const [accountNumber, setAccountNumber] = useState('A-883920194');
  const accountName = 'RYAN TEH RAY KHANG';
  const idNumber = '980412-10-5431';
  const mobileNumber = '+60 12-345 6789';
  const email = 'ryan.teh@gmail.com';
  const currentSavings = 1500.00;

  // Selected Funds State
  const [selectedFunds, setSelectedFunds] = useState<SelectedFundItem[]>([
    { id: '1', name: 'OPUS Income Plus Fund (IPF)', amount: '300.00' },
    { id: '2', name: 'OPUS Shariah Income Plus Fund (SIPF)', amount: '200.00' },
  ]);

  // Step 2 Form State
  const [chosenBank, setChosenBank] = useState('');
  const [referenceNo] = useState(() => `REF-${Math.floor(100000000 + Math.random() * 900000000)}`);

  // Calculate dynamic Total New Savings
  const totalNewSavings = selectedFunds.reduce((sum, item) => {
    const val = parseFloat(item.amount) || 0;
    return sum + val;
  }, 0);

  // Handlers for Step 1
  const handleAddFund = () => {
    const unselected = AVAILABLE_FUNDS.find(
      (fund) => !selectedFunds.some((sf) => sf.name === fund)
    );

    if (!unselected) {
      alert('All available funds have already been selected!');
      return;
    }

    setSelectedFunds([
      ...selectedFunds,
      { id: Date.now().toString(), name: unselected, amount: '100.00' },
    ]);
  };

  const handleDeleteFund = (id: string) => {
    if (selectedFunds.length <= 1) {
      alert('You must have at least one fund selected for your RSP.');
      return;
    }
    setSelectedFunds(selectedFunds.filter((item) => item.id !== id));
  };

  const handleFundChange = (id: string, newName: string) => {
    setSelectedFunds(
      selectedFunds.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  const handleAmountChange = (id: string, newAmount: string) => {
    setSelectedFunds(
      selectedFunds.map((item) => (item.id === id ? { ...item, amount: newAmount } : item))
    );
  };

  // Step 1 -> Step 2
  const handleProceedToSummary = () => {
    if (totalNewSavings <= 0) {
      alert('Please enter a valid investment amount.');
      return;
    }
    setStep(2);
  };

  // Final Submission
  const handleFinalSubmit = () => {
    if (!chosenBank) {
      alert('Please select your bank to proceed.');
      return;
    }

    navigate('/transactions/payment-confirmation', {
      state: {
        accountNumber,
        accountName,
        idNumber,
        mobileNumber,
        email,
        referenceNo,
        deductionAmount: `MYR ${totalNewSavings.toFixed(2)}`,
        effectiveDate: 'Every 3rd of the month starting 03/09/2026',
        paymentMethod: 'Direct Debit',
        chosenBank,
        funds: selectedFunds,
      },
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#9ED382]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-4xl p-3 sm:p-6 md:p-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => (step === 2 ? setStep(1) : navigate(-1))}
              className="text-xl font-bold text-gray-700 hover:text-black hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer"
              title="Go Back"
            >
              &lt;
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-black">Regular Saving Plan</h1>
          </div>

          {/* STEP 1: Fund Allocation Form */}
          {step === 1 && (
            <>
              <div className="p-4 sm:p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 text-sm">
                
                {/* Account Details */}
                <div className="md:col-span-5 space-y-5 bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-100">
                  <h2 className="text-base font-bold text-gray-800 border-b pb-2">Account Overview</h2>

                  <div className="flex flex-col space-y-1.5">
                    <label className="font-semibold text-gray-600 text-xs sm:text-sm">Account Number</label>
                    <select
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="border-2 border-emerald-500 rounded-lg p-2.5 outline-none bg-white text-gray-700 font-semibold cursor-pointer text-xs sm:text-sm"
                    >
                      <option value="A-883920194">A-883920194 (Main Account)</option>
                      <option value="A-109238472">A-109238472 (Secondary Account)</option>
                    </select>
                  </div>

                  <div className="flex justify-between items-center pt-1">
                    <label className="font-semibold text-gray-600 text-xs sm:text-sm">Current Monthly RSP</label>
                    <span className="text-gray-800 font-bold text-sm sm:text-base">
                      MYR {currentSavings.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <label className="font-semibold text-emerald-700 text-xs sm:text-sm">New Total Monthly RSP</label>
                    <span className="text-emerald-600 font-extrabold text-base sm:text-lg">
                      MYR {totalNewSavings.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Fund Allocation List */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <label className="font-bold text-gray-800 text-sm sm:text-base">Selected Funds & Allocations</label>
                    <button
                      type="button"
                      onClick={handleAddFund}
                      className="flex items-center text-emerald-600 hover:text-emerald-700 text-xs font-bold bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <span className="mr-1 text-sm font-bold">+</span> Add Fund
                    </button>
                  </div>

                  <div className="border-2 border-emerald-500 rounded-xl p-3 sm:p-4 space-y-3 bg-white max-h-[380px] overflow-y-auto">
                    {selectedFunds.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-l-4 border-emerald-500 pl-3 bg-gray-50 p-3 rounded-lg shadow-sm"
                      >
                        <div className="w-full sm:flex-1">
                          <select
                            value={item.name}
                            onChange={(e) => handleFundChange(item.id, e.target.value)}
                            className="w-full bg-white border border-gray-300 rounded p-2 text-xs text-gray-800 font-medium outline-none focus:border-emerald-500 cursor-pointer"
                          >
                            {AVAILABLE_FUNDS.map((fund) => {
                              const isAlreadySelected = selectedFunds.some(
                                (sf) => sf.name === fund && sf.id !== item.id
                              );
                              return (
                                <option key={fund} value={fund} disabled={isAlreadySelected}>
                                  {fund} {isAlreadySelected ? '(Selected)' : ''}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end space-x-2 pt-1 sm:pt-0 border-t sm:border-t-0 border-gray-200">
                          <span className="text-xs text-gray-500 font-semibold sm:hidden">Amount:</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500 font-semibold">MYR</span>
                            <input
                              type="number"
                              value={item.amount}
                              onChange={(e) => handleAmountChange(item.id, e.target.value)}
                              placeholder="0.00"
                              className="w-24 border border-gray-300 rounded p-1.5 text-xs text-right font-bold text-gray-800 outline-none focus:border-emerald-500 bg-white"
                            />
                            <button
                              type="button"
                              onClick={() => handleDeleteFund(item.id)}
                              className="text-red-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition-colors"
                              title="Remove Fund"
                            >
                              &#215;
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-8 flex justify-center bg-gray-50 border-t border-gray-100">
                <button
                  onClick={handleProceedToSummary}
                  className="w-full sm:w-auto bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3 sm:px-16 rounded-xl text-base sm:text-lg transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Start My Savings
                </button>
              </div>
            </>
          )}

          {/* STEP 2: Summary / Confirmation View (Matching your mockup) */}
          {step === 2 && (
            <div className="p-6 sm:p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm text-gray-700">
                
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-gray-700">Account Number</label>
                    <select
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="border-2 border-emerald-500 rounded-xl p-2 px-3 outline-none bg-white font-medium text-gray-800 text-xs sm:text-sm cursor-pointer"
                    >
                      <option value="A-883920194">A-883920194</option>
                      <option value="A-109238472">A-109238472</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-gray-700">Account Name</label>
                    <span className="text-gray-900 font-medium">{accountName}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-gray-700">ID Number</label>
                    <span className="text-gray-900 font-medium">{idNumber}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-gray-700">Mobile Number</label>
                    <span className="text-gray-900 font-medium">{mobileNumber}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-gray-700">Email</label>
                    <span className="text-gray-900 font-medium">{email}</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-gray-700">Reference No</label>
                    <span className="text-gray-900 font-medium">{referenceNo}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-gray-700">Deduction Amount</label>
                    <span className="text-gray-900 font-bold text-base">
                      MYR {totalNewSavings.toFixed(2)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-2">
                    <label className="font-semibold text-gray-700">Effective Date</label>
                    <span className="text-gray-900 font-medium leading-snug">
                      Every 3rd of the month starting 03/09/2026
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-gray-700">Payment Method</label>
                    <span className="text-gray-900 font-medium">Direct Debit</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-gray-700">Choose Your Bank</label>
                    <select
                      value={chosenBank}
                      onChange={(e) => setChosenBank(e.target.value)}
                      className="border-2 border-emerald-500 rounded-xl p-2 px-3 outline-none bg-white text-gray-400 font-medium text-xs sm:text-sm cursor-pointer focus:text-gray-800"
                    >
                      <option value="" disabled>Bank Choice</option>
                      <option value="MAYBANK BERHAD">MAYBANK BERHAD</option>
                      <option value="CIMB BANK BERHAD">CIMB BANK BERHAD</option>
                      <option value="PUBLIC BANK BERHAD">PUBLIC BANK BERHAD</option>
                      <option value="RHB BANK BERHAD">RHB BANK BERHAD</option>
                      <option value="HONG LEONG BANK">HONG LEONG BANK</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-center pt-6 border-t border-gray-100">
                <button
                  onClick={handleFinalSubmit}
                  className="w-full sm:w-auto bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3.5 px-16 rounded-xl text-base sm:text-lg transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Start My Savings
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

