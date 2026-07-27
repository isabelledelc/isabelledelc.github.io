import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/shared/header';
import { ArrowLeft, Plus, Trash2, PiggyBank } from 'lucide-react';

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
    <div 
      className="min-h-screen w-full transition-colors duration-300 font-sans flex flex-col"
      style={{ background: "var(--bg-page)" }}
    >
      <Header />

      {/* Expanded Container Width */}
      <main className="w-full px-4 sm:px-8 lg:px-12 py-8 flex-1">
        <div 
          className="w-full rounded-2xl shadow-lg border overflow-hidden backdrop-blur-md transition-all duration-300"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-app)",
            color: "var(--text-main)",
          }}
        >
          {/* Header Bar */}
          <div 
            className="p-5 sm:p-6 border-b flex items-center gap-4 transition-colors"
            style={{
              backgroundColor: "var(--bg-container)",
              borderColor: "var(--border-app)",
            }}
          >
            <button
              onClick={() => (step === 2 ? setStep(1) : navigate(-1))}
              className="p-2 rounded-xl transition-colors cursor-pointer"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg-btn-secondary)";
                e.currentTarget.style.color = "var(--text-main)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
              title="Go Back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2.5">
              <PiggyBank 
                className="h-5 w-5" 
                style={{ color: "var(--color-primary)" }} 
              />
              <h1 
                className="text-xl font-bold font-heading"
                style={{ color: "var(--text-heading)" }}
              >
                Regular Savings Plan
              </h1>
            </div>
          </div>

          {/* STEP 1: Fund Allocation Form */}
          {step === 1 && (
            <>
              {/* Full Width Grid Layout */}
              <div className="p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start text-sm">
                
                {/* Left Column: Account Overview */}
                <div className="w-full lg:w-1/3 space-y-4">
                  <div 
                    className="flex flex-col gap-1.5 pb-3 border-b"
                    style={{ borderColor: "var(--border-app)" }}
                  >
                    <label 
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Account Number
                    </label>
                    <select
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="w-full border rounded-xl px-3 py-2.5 font-medium outline-none transition-colors cursor-pointer text-sm"
                      style={{
                        backgroundColor: "var(--bg-container)",
                        borderColor: "var(--border-interactive)",
                        color: "var(--text-main)",
                      }}
                    >
                      <option value="A-883920194">A-883920194 (Main Account)</option>
                      <option value="A-109238472">A-109238472 (Secondary Account)</option>
                    </select>
                  </div>

                  <div 
                    className="flex justify-between items-center py-2.5 border-b"
                    style={{ borderColor: "var(--border-app)" }}
                  >
                    <span className="font-medium" style={{ color: "var(--text-muted)" }}>
                      Current Monthly RSP
                    </span>
                    <span className="font-semibold" style={{ color: "var(--text-heading)" }}>
                      MYR {currentSavings.toFixed(2)}
                    </span>
                  </div>

                  <div 
                    className="flex justify-between items-center py-2.5 border-b"
                    style={{ borderColor: "var(--border-app)" }}
                  >
                    <span className="font-medium" style={{ color: "var(--text-muted)" }}>
                      New Total Monthly RSP
                    </span>
                    <span 
                      className="font-bold text-base font-mono-data"
                      style={{ color: "var(--color-primary)" }}
                    >
                      MYR {totalNewSavings.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Right Column: Fund Allocation List */}
                <div className="w-full lg:w-2/3 space-y-5 pt-6 lg:pt-0 border-t lg:border-t-0" style={{ borderColor: "var(--border-app)" }}>
                  <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: "var(--border-app)" }}>
                    <label className="font-bold text-sm sm:text-base" style={{ color: "var(--text-heading)" }}>
                      Selected Funds & Allocations
                    </label>
                    <button
                      type="button"
                      onClick={handleAddFund}
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer border"
                      style={{
                        backgroundColor: "var(--bg-pill)",
                        borderColor: "var(--border-app)",
                        color: "var(--color-primary)",
                      }}
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Add Fund
                    </button>
                  </div>

                  <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                    {selectedFunds.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border transition-all"
                        style={{
                          backgroundColor: "var(--bg-container)",
                          borderColor: "var(--border-app)",
                        }}
                      >
                        <div className="w-full sm:flex-1">
                          <select
                            value={item.name}
                            onChange={(e) => handleFundChange(item.id, e.target.value)}
                            className="w-full border rounded-lg p-2.5 text-xs font-medium outline-none cursor-pointer"
                            style={{
                              backgroundColor: "var(--bg-card)",
                              borderColor: "var(--border-interactive)",
                              color: "var(--text-main)",
                            }}
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

                        <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0" style={{ borderColor: "var(--border-app)" }}>
                          <span className="text-xs font-semibold sm:hidden" style={{ color: "var(--text-muted)" }}>Amount:</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>MYR</span>
                            <input
                              type="number"
                              value={item.amount}
                              onChange={(e) => handleAmountChange(item.id, e.target.value)}
                              placeholder="0.00"
                              className="w-28 border rounded-lg p-2 text-xs text-right font-bold outline-none font-mono-data"
                              style={{
                                backgroundColor: "var(--bg-card)",
                                borderColor: "var(--border-interactive)",
                                color: "var(--text-main)",
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => handleDeleteFund(item.id)}
                              className="p-2 rounded-lg transition-colors text-red-500 hover:bg-red-500/10 cursor-pointer"
                              title="Remove Fund"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div 
                className="p-6 border-t flex justify-center transition-colors"
                style={{
                  backgroundColor: "var(--bg-container)",
                  borderColor: "var(--border-app)",
                }}
              >
                <button
                  onClick={handleProceedToSummary}
                  className="w-full sm:w-auto text-white font-semibold py-3 px-20 rounded-xl text-base transition-all shadow-md active:scale-95 cursor-pointer"
                  style={{ backgroundColor: "var(--color-primary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-primary-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-primary)";
                  }}
                >
                  Start My Savings
                </button>
              </div>
            </>
          )}

          {/* STEP 2: Summary / Confirmation View */}
          {step === 2 && (
            <div>
              {/* Full Width Grid Layout */}
              <div className="p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start text-sm">
                
                {/* Left Column: Account & Transaction Details */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div 
                    className="flex flex-col gap-1.5 pb-3 border-b"
                    style={{ borderColor: "var(--border-app)" }}
                  >
                    <label 
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Account Number
                    </label>
                    <select
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="w-full border rounded-xl px-3 py-2.5 font-medium outline-none transition-colors cursor-pointer text-sm"
                      style={{
                        backgroundColor: "var(--bg-container)",
                        borderColor: "var(--border-interactive)",
                        color: "var(--text-main)",
                      }}
                    >
                      <option value="A-883920194">A-883920194</option>
                      <option value="A-109238472">A-109238472</option>
                    </select>
                  </div>

                  <div 
                    className="flex justify-between items-center py-2.5 border-b"
                    style={{ borderColor: "var(--border-app)" }}
                  >
                    <span className="font-medium" style={{ color: "var(--text-muted)" }}>
                      Account Name
                    </span>
                    <span className="font-semibold" style={{ color: "var(--text-heading)" }}>
                      {accountName}
                    </span>
                  </div>

                  <div 
                    className="flex justify-between items-center py-2.5 border-b"
                    style={{ borderColor: "var(--border-app)" }}
                  >
                    <span className="font-medium" style={{ color: "var(--text-muted)" }}>
                      Reference No
                    </span>
                    <span 
                      className="font-mono-data text-xs font-semibold px-2.5 py-1 rounded-md border"
                      style={{
                        backgroundColor: "var(--bg-pill)",
                        borderColor: "var(--border-app)",
                        color: "var(--text-main)",
                      }}
                    >
                      {referenceNo}
                    </span>
                  </div>

                  <div 
                    className="flex justify-between items-center py-2.5 border-b"
                    style={{ borderColor: "var(--border-app)" }}
                  >
                    <span className="font-medium" style={{ color: "var(--text-muted)" }}>
                      Deduction Amount
                    </span>
                    <span 
                      className="font-bold text-base font-mono-data"
                      style={{ color: "var(--color-primary)" }}
                    >
                      MYR {totalNewSavings.toFixed(2)}
                    </span>
                  </div>

                  <div 
                    className="flex justify-between items-start py-2.5 border-b"
                    style={{ borderColor: "var(--border-app)" }}
                  >
                    <span className="font-medium" style={{ color: "var(--text-muted)" }}>
                      Effective Date
                    </span>
                    <span className="font-medium text-right leading-tight max-w-[220px]" style={{ color: "var(--text-main)" }}>
                      Every 3rd of the month starting 03/09/2026
                    </span>
                  </div>

                  <div 
                    className="flex flex-col gap-1.5 pb-3 border-b"
                    style={{ borderColor: "var(--border-app)" }}
                  >
                    <label 
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Choose Your Bank
                    </label>
                    <select
                      value={chosenBank}
                      onChange={(e) => setChosenBank(e.target.value)}
                      className="w-full border rounded-xl px-3 py-2.5 font-medium outline-none transition-colors cursor-pointer text-sm"
                      style={{
                        backgroundColor: "var(--bg-container)",
                        borderColor: "var(--border-interactive)",
                        color: "var(--text-main)",
                      }}
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

                {/* Right Column: Selected Funds Summary */}
                <div className="w-full lg:w-1/2 space-y-4 pt-6 lg:pt-0 border-t lg:border-t-0" style={{ borderColor: "var(--border-app)" }}>
                  <label className="font-bold text-sm sm:text-base block pb-2 border-b" style={{ color: "var(--text-heading)", borderColor: "var(--border-app)" }}>
                    Selected Funds Summary
                  </label>
                  <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
                    {selectedFunds.map((fund) => (
                      <div 
                        key={fund.id}
                        className="flex justify-between items-center p-4 rounded-xl border"
                        style={{
                          backgroundColor: "var(--bg-container)",
                          borderColor: "var(--border-app)",
                        }}
                      >
                        <span className="font-semibold text-xs sm:text-sm" style={{ color: "var(--text-heading)" }}>
                          {fund.name}
                        </span>
                        <span className="font-mono-data font-bold text-xs sm:text-sm" style={{ color: "var(--color-primary)" }}>
                          MYR {parseFloat(fund.amount || '0').toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Footer */}
              <div 
                className="p-6 border-t flex justify-center transition-colors"
                style={{
                  backgroundColor: "var(--bg-container)",
                  borderColor: "var(--border-app)",
                }}
              >
                <button
                  onClick={handleFinalSubmit}
                  className="w-full sm:w-auto text-white font-semibold py-3 px-20 rounded-xl text-base transition-all shadow-md active:scale-95 cursor-pointer"
                  style={{ backgroundColor: "var(--color-primary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-primary-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-primary)";
                  }}
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