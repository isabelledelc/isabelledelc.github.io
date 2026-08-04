import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Target, Wallet, Calendar, PiggyBank, CreditCard, Building2 } from 'lucide-react';
import Header from '../../../components/shared/header';


export default function CreateGoal() {
  const navigate = useNavigate();

  // Form State
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
    <div className="min-h-screen w-full bg-app-card transition-colors duration-300">
      <Header />
  

      <main className="mx-auto max-w-5xl p-4 md:p-10">
        <div className="rounded-[32px] bg-app-card border border-app-border shadow-xl backdrop-blur-md overflow-hidden transition-colors duration-300">
          
          {/* Header Bar */}
          <div className="p-6 md:p-8 border-b border-app-border flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive flex items-center justify-center text-app-heading hover:text-app-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              title="Go Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-app-heading">Create New Goal</h1>
              <p className="text-xs font-semibold text-app-muted mt-1">Set up your target investment roadmap</p>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 text-sm">
            
            {/* Left Column Section */}
            <div className="space-y-8">
              
              {/* Goal Name */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-app-muted uppercase tracking-wider flex items-center gap-2">
                  <Target className="w-4 h-4 text-app-primary" />
                  Goal Name
                </label>
                <select
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                  className="w-full rounded-2xl bg-app-pill border border-app-border focus:border-app-border-interactive px-4 py-3.5 text-app-heading font-medium outline-none cursor-pointer transition-all duration-200"
                >
                  <option className="bg-app-card text-app-heading" value="RETIREMENT FUND">Retirement Fund</option>
                  <option className="bg-app-card text-app-heading" value="EDUCATION FUND">Education Fund</option>
                  <option className="bg-app-card text-app-heading" value="HOUSE DEPOSIT">House Deposit</option>
                  <option className="bg-app-card text-app-heading" value="WEALTH BUILDER">Wealth Builder</option>
                </select>
              </div>

              {/* Account Name */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-app-muted uppercase tracking-wider flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-app-primary" />
                  Account Name
                </label>
                <div className="px-4 py-3.5 rounded-2xl bg-app-pill/60 border border-app-border text-app-heading font-bold uppercase tracking-wide">
                  {accountName}
                </div>
              </div>

              {/* Target Amount */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-app-muted uppercase tracking-wider flex items-center gap-2">
                  <PiggyBank className="w-4 h-4 text-app-primary" />
                  Target Amount
                </label>
                <div className="rounded-2xl bg-app-pill border border-app-border focus-within:border-app-border-interactive px-4 py-3 flex items-center gap-2.5 transition-all duration-200">
                  <span className="text-xs font-bold text-app-muted">MYR</span>
                  <input
                    type="text"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    className="w-full bg-transparent font-bold text-app-heading outline-none text-base"
                  />
                </div>
              </div>

              {/* Goal Achievement Date */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-app-muted uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-app-primary" />
                  Goal Achievement Date
                </label>
                <input
                  type="date"
                  value={achievementDate}
                  onChange={(e) => setAchievementDate(e.target.value)}
                  className="w-full rounded-2xl bg-app-pill border border-app-border focus:border-app-border-interactive px-4 py-3.5 text-app-heading font-medium outline-none cursor-pointer transition-all duration-200"
                />
              </div>

              {/* Select Fund */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-app-muted uppercase tracking-wider">Select Fund</label>
                <select
                  value={selectedFund}
                  onChange={(e) => setSelectedFund(e.target.value)}
                  className="w-full rounded-2xl bg-app-pill border border-app-border focus:border-app-border-interactive px-4 py-3.5 text-app-heading font-medium outline-none cursor-pointer transition-all duration-200"
                >
                  <option className="bg-app-card text-app-heading" value="OPUS Income Plus Fund (IPF)">
                    Auto (IPF, SIPF, MPF)
                  </option>
                  <option className="bg-app-card text-app-heading" value="OPUS Cash Extra Fund">
                    IPF
                  </option>
                  <option className="bg-app-card text-app-heading" value="OPUS Shariah Income Fund">
                    SIPF
                  </option>
                  <option className="bg-app-card text-app-heading" value="OPUS Shariah Income Fund MPF">
                    MPF
                  </option>
                </select>
              </div>

            </div>

            {/* Right Column Section */}
            <div className="space-y-8">
              
              {/* Initial Investment Amount */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-app-muted uppercase tracking-wider">Initial Investment Amount</label>
                <div className="rounded-2xl bg-app-pill border border-app-border focus-within:border-app-border-interactive px-4 py-3 flex items-center gap-2.5 transition-all duration-200">
                  <span className="text-xs font-bold text-app-muted">MYR</span>
                  <input
                    type="text"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className="w-full bg-transparent font-bold text-app-heading outline-none text-base"
                  />
                </div>
              </div>

              {/* Enable RSP Switcher */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-app-muted uppercase tracking-wider">Enable RSP (Regular Savings Plan)</label>
                <div className="grid grid-cols-2 p-1.5 rounded-2xl bg-app-pill border border-app-border gap-2">
                  {(['Yes', 'No'] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setEnableRSP(option)}
                      className={`py-2.5 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                        enableRSP === option
                          ? 'bg-app-primary text-white shadow-md scale-[1.02]'
                          : 'text-app-muted hover:text-app-heading hover:bg-app-card/40'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Investment Amount (RSP Conditional) */}
              {enableRSP === 'Yes' && (
                <div className="space-y-2.5 animate-fadeIn">
                  <label className="text-xs font-bold text-app-muted uppercase tracking-wider">Monthly Investment Amount</label>
                  <div className="rounded-2xl bg-app-pill border border-app-border focus-within:border-app-border-interactive px-4 py-3 flex items-center gap-2.5 transition-all duration-200">
                    <span className="text-xs font-bold text-app-muted">MYR</span>
                    <input
                      type="text"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(e.target.value)}
                      className="w-full bg-transparent font-bold text-app-heading outline-none text-base"
                    />
                  </div>
                </div>
              )}

              {/* Payment Method Selector */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-app-muted uppercase tracking-wider flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-app-primary" />
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['FPX', 'Boost', 'Offline'] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      className={`py-3 px-3 rounded-2xl border text-xs font-bold transition-all duration-200 cursor-pointer text-center ${
                        paymentMethod === method
                          ? 'bg-app-primary text-white border-app-primary shadow-md scale-[1.02]'
                          : 'bg-app-pill border-app-border text-app-muted hover:text-app-heading hover:border-app-border-interactive'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Choose Your Bank */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-app-muted uppercase tracking-wider flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-app-primary" />
                  Choose Your Bank
                </label>
                <select
                  value={chosenBank}
                  onChange={(e) => setChosenBank(e.target.value)}
                  className="w-full rounded-2xl bg-app-pill border border-app-border focus:border-app-border-interactive px-4 py-3.5 text-app-heading font-medium outline-none cursor-pointer transition-all duration-200"
                >
                  <option className="bg-app-card text-app-heading" value="MAYBANK BERHAD">MAYBANK BERHAD</option>
                  <option className="bg-app-card text-app-heading" value="CIMB BANK">CIMB BANK BERHAD</option>
                  <option className="bg-app-card text-app-heading" value="PUBLIC BANK">PUBLIC BANK BERHAD</option>
                  <option className="bg-app-card text-app-heading" value="RHB BANK">RHB BANK BERHAD</option>
                  <option className="bg-app-card text-app-heading" value="HONG LEONG BANK">HONG LEONG BANK</option>
                </select>
              </div>

            </div>
          </div>

          {/* Action Button Footer */}
          <div className="p-8 md:p-10 border-t border-app-border flex justify-center bg-app-card/40">
            <button
              type="button"
              onClick={handleProceed}
              className="w-full md:w-auto px-16 py-4 bg-app-primary text-white font-bold text-base rounded-2xl hover:opacity-90 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              Proceed to Payment
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}