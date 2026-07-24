import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/shared/header';

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

  const [step, setStep] = useState<1 | 2>(1);

  const [accountNumber, setAccountNumber] = useState('A-883920194');
  const accountName = 'RYAN TEH RAY KHANG';
  const idNumber = '980412-10-5431';
  const mobileNumber = '+60 12-345 6789';
  const email = 'ryan.teh@gmail.com';
  const currentSavings = 1500.00;

  const [selectedFunds, setSelectedFunds] = useState<SelectedFundItem[]>([
    { id: '1', name: 'OPUS Income Plus Fund (IPF)', amount: '300.00' },
    { id: '2', name: 'OPUS Shariah Income Plus Fund (SIPF)', amount: '200.00' },
  ]);

  const [chosenBank, setChosenBank] = useState('');
  const [referenceNo] = useState(() => `REF-${Math.floor(100000000 + Math.random() * 900000000)}`);

  const totalNewSavings = selectedFunds.reduce((sum, item) => {
    const val = parseFloat(item.amount) || 0;
    return sum + val;
  }, 0);

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

  const handleProceedToSummary = () => {
    if (totalNewSavings <= 0) {
      alert('Please enter a valid investment amount.');
      return;
    }
    setStep(2);
  };

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
      className="min-h-screen w-full transition-colors duration-300 text-app-main font-sans"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-app-card backdrop-blur-md rounded-2xl shadow-xl border border-app-border overflow-hidden transition-colors duration-300 w-full">
          
          {/* Header Bar */}
          <div className="p-4 sm:p-6 border-b border-app-border flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => (step === 2 ? setStep(1) : navigate(-1))}
              className="text-xl font-bold text-app-heading hover:bg-app-pill rounded-full w-9 h-9 flex items-center justify-center transition-colors cursor-pointer"
              title="Go Back"
            >
              &lt;
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-app-heading font-heading">Regular Saving Plan</h1>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="p-4 sm:p-6 md:p-8 space-y-6 text-sm w-full">
                
                {/* Account Overview (Horizontal Header Banner) */}
                <div className="bg-app-container p-5 sm:p-6 rounded-xl border border-app-border space-y-4 w-full">
                  <h2 className="text-base font-bold text-app-heading border-b border-app-border pb-2 font-heading">
                    Account Overview
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Account Number Select */}
                    <div className="flex flex-col space-y-2">
                      <label className="font-semibold text-app-muted text-xs sm:text-sm">Account Number</label>
                      <select
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        className="w-full border-2 border-app-primary rounded-xl p-2.5 outline-none bg-app-card text-app-main font-semibold cursor-pointer text-xs sm:text-sm focus:ring-2 focus:ring-app-primary/50"
                      >
                        <option value="A-883920194">A-883920194 (Main Account)</option>
                        <option value="A-109238472">A-109238472 (Secondary Account)</option>
                      </select>
                    </div>

                    {/* Current Monthly RSP */}
                    <div className="flex flex-col space-y-1.5 md:border-l md:border-app-border md:pl-6">
                      <label className="font-semibold text-app-muted text-xs sm:text-sm">Current Monthly RSP</label>
                      <span className="text-app-heading font-bold text-base sm:text-lg font-mono-data">
                        MYR {currentSavings.toFixed(2)}
                      </span>
                    </div>

                    {/* New Total Monthly RSP */}
                    <div className="flex flex-col space-y-1.5 md:border-l md:border-app-border md:pl-6">
                      <label className="font-semibold text-app-primary text-xs sm:text-sm">New Total Monthly RSP</label>
                      <span className="text-app-primary font-extrabold text-xl font-mono-data">
                        MYR {totalNewSavings.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fund Allocation List (Wide View) */}
                <div className="space-y-4 w-full">
                  <div className="flex justify-between items-center border-b border-app-border pb-2">
                    <label className="font-bold text-app-heading text-sm sm:text-base font-heading">
                      Selected Funds & Allocations
                    </label>
                    <button
                      type="button"
                      onClick={handleAddFund}
                      className="flex items-center text-app-primary hover:text-app-primary-hover text-xs sm:text-sm font-bold bg-app-pill px-4 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      <span className="mr-1.5 text-base font-bold">+</span> Add Fund
                    </button>
                  </div>

                  <div className="border-2 border-app-primary rounded-xl p-4 space-y-3 bg-app-container max-h-[450px] overflow-y-auto w-full">
                    {selectedFunds.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 border-app-primary pl-4 bg-app-card p-4 rounded-xl shadow-sm border-y border-r border-app-border/40 w-full"
                      >
                        {/* Fund Selector */}
                        <div className="w-full md:flex-1">
                          <select
                            value={item.name}
                            onChange={(e) => handleFundChange(item.id, e.target.value)}
                            className="w-full bg-app-card border border-app-border rounded-xl p-2.5 text-xs sm:text-sm text-app-main font-medium outline-none focus:border-app-primary cursor-pointer"
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

                        {/* Amount & Delete Action */}
                        <div className="flex items-center justify-between md:justify-end space-x-4 pt-2 md:pt-0 border-t md:border-t-0 border-app-border/40">
                          <span className="text-xs text-app-muted font-semibold md:hidden">Amount:</span>
                          <div className="flex items-center space-x-3">
                            <span className="text-xs sm:text-sm text-app-muted font-semibold font-mono-data">MYR</span>
                            <input
                              type="number"
                              value={item.amount}
                              onChange={(e) => handleAmountChange(item.id, e.target.value)}
                              placeholder="0.00"
                              className="w-36 sm:w-44 border border-app-border rounded-xl p-2 text-xs sm:text-sm text-right font-bold text-app-heading bg-app-card outline-none focus:border-app-primary font-mono-data"
                            />
                            <button
                              type="button"
                              onClick={() => handleDeleteFund(item.id)}
                              className="text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-500/10 transition-colors text-lg"
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

              {/* Action Button */}
              <div className="p-4 sm:p-6 flex justify-end bg-app-container/50 border-t border-app-border px-6 md:px-8">
                <button
                  onClick={handleProceedToSummary}
                  className="w-full sm:w-auto bg-app-primary hover:bg-app-primary-hover text-white font-semibold py-3.5 px-12 sm:px-16 rounded-xl text-base sm:text-lg transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Start My Savings
                </button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="p-6 sm:p-10 space-y-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
                
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-app-muted">Account Number</label>
                    <select
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="border-2 border-app-primary rounded-xl p-2 px-3 outline-none bg-app-card font-medium text-app-heading text-xs sm:text-sm cursor-pointer"
                    >
                      <option value="A-883920194">A-883920194</option>
                      <option value="A-109238472">A-109238472</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-app-muted">Account Name</label>
                    <span className="text-app-heading font-medium">{accountName}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-app-muted">ID Number</label>
                    <span className="text-app-heading font-medium font-mono-data">{idNumber}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-app-muted">Mobile Number</label>
                    <span className="text-app-heading font-medium font-mono-data">{mobileNumber}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-app-muted">Email</label>
                    <span className="text-app-heading font-medium">{email}</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-app-muted">Reference No</label>
                    <span className="text-app-heading font-medium font-mono-data">{referenceNo}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-app-muted">Deduction Amount</label>
                    <span className="text-app-primary font-bold text-base font-mono-data">
                      MYR {totalNewSavings.toFixed(2)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-2">
                    <label className="font-semibold text-app-muted">Effective Date</label>
                    <span className="text-app-heading font-medium leading-snug">
                      Every 3rd of the month starting 03/09/2026
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-app-muted">Payment Method</label>
                    <span className="text-app-heading font-medium">Direct Debit</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                    <label className="font-semibold text-app-muted">Choose Your Bank</label>
                    <select
                      value={chosenBank}
                      onChange={(e) => setChosenBank(e.target.value)}
                      className="border-2 border-app-primary rounded-xl p-2 px-3 outline-none bg-app-card text-app-heading font-medium text-xs sm:text-sm cursor-pointer"
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
              <div className="flex justify-end pt-6 border-t border-app-border">
                <button
                  onClick={handleFinalSubmit}
                  className="w-full sm:w-auto bg-app-primary hover:bg-app-primary-hover text-white font-semibold py-3.5 px-16 rounded-xl text-base sm:text-lg transition-all shadow-md active:scale-95 cursor-pointer"
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