// maybe need to have 3 different transactions pages 
// boost 
// FPX 
// offline 

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/shared/header';

// Import Gateway Logos from assets
import boostLogo from '../../assets/Boost.png';
import fpxLogo from '../../assets/FPX.png';
import offlineLogo from '../../assets/offline.png';

export default function TransactionConfirm() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state or fallback to default values
  const amount = location.state?.amount || '100.00';
  const rawMethod = location.state?.paymentMethod || 'Boost';

  // Normalize method string for strict checking
  const paymentMethod = ['Boost', 'FPX', 'Offline'].includes(rawMethod) 
    ? rawMethod 
    : 'Boost';

  // Form states for FPX
  const [selectedBank, setSelectedBank] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [receiveEmail, setReceiveEmail] = useState(true);
  const [userEmail, setUserEmail] = useState('0903xinci@gmail.com');

  // Handle submit action
  const handleProceed = () => {
    if (paymentMethod === 'FPX' && !agreedTerms) {
      alert('Please agree to FPX Terms and Conditions before proceeding.');
      return;
    }
    if (paymentMethod === 'FPX' && !selectedBank) {
      alert('Please select a bank to proceed.');
      return;
    }

    alert(`Processing ${paymentMethod} payment of MYR ${amount}`);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div 
      className="min-h-screen w-full transition-colors duration-300 text-app-main font-sans"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />

      <main className="mx-auto max-w-4xl p-4 md:p-8 animate-fade-in">
        {/* Main Gateway Outer Card Container */}
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800">
          
          {/* Header Bar with Back Button */}
          <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center space-x-4 bg-slate-50/50">
            <button 
              onClick={() => navigate(-1)}
              className="text-xl font-bold text-slate-700 hover:bg-slate-200/80 rounded-full w-9 h-9 flex items-center justify-center transition-colors cursor-pointer"
              title="Go Back"
              type="button"
            >
              &lt;
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              Transaction Confirmation ({paymentMethod})
            </h1>
          </div>

          {/* ==================== BOOST PAYMENT GATEWAY ==================== */}
          {paymentMethod === 'Boost' && (
            <div>
              {/* Header Logo Image (Larger Size) */}
              <div className="py-8 flex justify-center border-b border-slate-100 bg-white">
                <img 
                  src={boostLogo} 
                  alt="Boost Gateway Logo" 
                  className="h-20 sm:h-24 md:h-28 object-contain max-w-xs" 
                />
              </div>

              {/* Section Header: Summary of Transaction */}
              <div 
                className="text-white px-6 py-2.5 font-bold text-sm tracking-wide"
                style={{ backgroundColor: 'var(--bg-boost-primary)' }}
              >
                Summary of Transaction
              </div>

              {/* Summary Details - 2 Column Side-by-Side Grid Layout */}
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  
                  {/* Fund Name & Investment Goal Side-by-Side */}
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Fund Name</span>
                    <span className="font-bold text-slate-900 sm:text-right">OPUS INCOME PLUS FUND</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Investment Goal</span>
                    <span className="font-bold text-slate-900 sm:text-right">INVESTMENT</span>
                  </div>

                  {/* Total Net Amount & Pay To Side-by-Side */}
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Total Net Amount</span>
                    <span className="font-bold text-slate-900 sm:text-right">MYR {amount}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Pay to</span>
                    <span className="font-bold text-slate-900 sm:text-right">OPUS ASSET MANAGEMENT</span>
                  </div>

                  {/* Order No & Phone No Side-by-Side */}
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Order No</span>
                    <span className="font-bold text-slate-900 sm:text-right">BS2026072700228330</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-slate-500 font-medium">Phone No</span>
                    <span className="font-bold text-slate-900 sm:text-right">+6017 235 7880</span>
                  </div>

                </div>
              </div>

              {/* Section Header: Important Notice */}
              <div 
                className="text-white px-6 py-2.5 font-bold text-sm tracking-wide"
                style={{ backgroundColor: 'var(--bg-boost-primary)' }}
              >
                Important notice
              </div>

              {/* Notice Content */}
              <div className="p-6 space-y-3 text-xs leading-relaxed text-slate-500 bg-white border-b border-slate-100">
                <div>
                  <p className="font-bold text-slate-700 uppercase mb-1">MOBILE NUMBER</p>
                  <p>Note: Please use the same handphone number for transactions using Boost.</p>
                </div>
                <p>
                  Should your transaction status display as “failed” but your Boost e-wallet has already been deducted, kindly wait for at least 1 hour as the system verifies the transaction.
                </p>
                <p>
                  You may check the status in <strong className="text-slate-800">Account Summary -&gt; History</strong>
                </p>
                <p>
                  For assistance, you may contact our Client Services team at{' '}
                  <a href="mailto:clientservices@opusasset.com" className="text-blue-600 underline hover:text-blue-800">
                    clientservices@opusasset.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+60322888833" className="text-blue-600 underline hover:text-blue-800">
                    +603-2288 8833
                  </a>
                </p>
              </div>

              {/* Action Controls */}
              <div className="p-6 flex justify-center items-center gap-4 bg-white">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-32 py-2 rounded-md text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
                  style={{ backgroundColor: 'var(--bg-boost-cancel)' }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleProceed}
                  className="w-32 py-2 rounded-md text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
                  style={{ backgroundColor: 'var(--bg-boost-primary)' }}
                >
                  &gt;&gt; Proceed
                </button>
              </div>
            </div>
          )}


          {/* ==================== FPX PAYMENT GATEWAY ==================== */}
          {paymentMethod === 'FPX' && (
            <div>
              {/* Header Logo Image (Larger Size) */}
              <div className="py-8 flex justify-center border-b border-slate-100 bg-white">
                <img 
                  src={fpxLogo} 
                  alt="FPX Gateway Logo" 
                  className="h-20 sm:h-24 md:h-28 object-contain max-w-xs" 
                />
              </div>

              {/* Section 1 Header */}
              <div 
                className="text-white px-6 py-2.5 font-bold text-sm tracking-wide"
                style={{ backgroundColor: 'var(--bg-fpx-primary)' }}
              >
                1. Summary of Transaction
              </div>

              {/* Section 1 Content - 2 Column Side-by-Side Grid Layout */}
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  
                  {/* Fund Name & Purpose Side-by-Side */}
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Fund Name</span>
                    <span className="font-bold text-slate-900 sm:text-right">OPUS INCOME PLUS FUND</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Purpose</span>
                    <span className="font-bold text-slate-900 sm:text-right">INVESTMENT</span>
                  </div>

                  {/* Total Net Amount & Pay To Side-by-Side */}
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Total Net Amount</span>
                    <span className="font-bold text-slate-900 sm:text-right">MYR {amount}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Pay to</span>
                    <span className="font-bold text-slate-900 sm:text-right">OPUS ASSET MANAGEMENT</span>
                  </div>

                  {/* Order No */}
                  <div className="flex flex-col sm:flex-row sm:justify-between md:col-span-2">
                    <span className="text-slate-500 font-medium">Order No</span>
                    <span className="font-bold text-slate-900 sm:text-right">NS2026072700011823</span>
                  </div>

                </div>
              </div>

              {/* Section 2 Header */}
              <div 
                className="text-white px-6 py-2.5 font-bold text-sm tracking-wide"
                style={{ backgroundColor: 'var(--bg-fpx-primary)' }}
              >
                2. Select FPX supported bank
              </div>

              {/* Section 2 Content */}
              <div className="p-6 bg-white">
                <select
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2.5 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0e1b6b]"
                >
                  <option value="">Please Select</option>
                  <option value="maybank">Maybank2u</option>
                  <option value="cimb">CIMB Clicks</option>
                  <option value="public">Public Bank Online</option>
                  <option value="rhb">RHB Now</option>
                  <option value="hongleong">Hong Leong Connect</option>
                  <option value="ambank">AmOnline</option>
                </select>
              </div>

              {/* Section 3 Header */}
              <div 
                className="text-white px-6 py-2.5 font-bold text-sm tracking-wide"
                style={{ backgroundColor: 'var(--bg-fpx-primary)' }}
              >
                3. I agree to the term and condition
              </div>

              {/* Section 3 Content */}
              <div className="p-6 space-y-4 bg-white border-b border-slate-100 text-xs text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="rounded border-slate-300 text-[#0e1b6b] focus:ring-[#0e1b6b]"
                  />
                  <span>
                    I Agree to FPX's{' '}
                    <a href="#" className="text-blue-600 underline hover:text-blue-800">
                      Term and Condition
                    </a>
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={receiveEmail}
                    onChange={(e) => setReceiveEmail(e.target.checked)}
                    className="rounded border-slate-300 text-[#0e1b6b] focus:ring-[#0e1b6b]"
                  />
                  <span>I would like to receive a transaction notification via email</span>
                </label>

                {receiveEmail && (
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full border border-slate-300 rounded-md p-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0e1b6b]"
                  />
                )}
              </div>

              {/* Action Controls */}
              <div className="p-6 flex flex-col items-center gap-4 bg-white">
                <div className="flex justify-center items-center gap-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="w-32 py-2 rounded-md text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
                    style={{ backgroundColor: 'var(--bg-fpx-cancel)' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleProceed}
                    className="w-32 py-2 rounded-md text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
                    style={{ backgroundColor: 'var(--bg-fpx-btn)' }}
                  >
                    &gt;&gt; Proceed
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  For more information about FPX, visit{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">
                    FPX Website
                  </a>
                  . FPX is available 24 hours
                </p>
              </div>
            </div>
          )}


          {/* ==================== OFFLINE PAYMENT GATEWAY ==================== */}
          {paymentMethod === 'Offline' && (
            <div>
              {/* Header Logo Image (Larger Size) */}
              <div className="py-8 flex justify-center border-b border-slate-100 bg-white">
                <img 
                  src={offlineLogo} 
                  alt="Offline Gateway Logo" 
                  className="h-20 sm:h-24 md:h-28 object-contain max-w-xs" 
                />
              </div>

              {/* Section 1 Header */}
              <div 
                className="text-white px-6 py-2.5 font-bold text-sm tracking-wide"
                style={{ backgroundColor: 'var(--bg-offline-primary)' }}
              >
                1. Summary of Transaction
              </div>

              {/* Section 1 Content - 2 Column Side-by-Side Grid Layout */}
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  
                  {/* Fund Name & Investment Goal Side-by-Side */}
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Fund Name</span>
                    <span className="font-bold text-slate-900 sm:text-right">OPUS INCOME PLUS FUND</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Investment Goal</span>
                    <span className="font-bold text-slate-900 sm:text-right">INVESTMENT</span>
                  </div>

                  {/* Sales Charge & Net Investment Amount Side-by-Side */}
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Sales Charge (0.0000%)</span>
                    <span className="font-bold text-slate-900 sm:text-right">MYR 0.00</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Net Investment Amount</span>
                    <span className="font-bold text-slate-900 sm:text-right">MYR {amount}</span>
                  </div>

                  {/* Total Remittance & Order No Side-by-Side */}
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Total Remittance Amount</span>
                    <span className="font-bold text-slate-900 sm:text-right">MYR {amount}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-slate-500 font-medium">Order No</span>
                    <span className="font-bold text-slate-900 sm:text-right">OS2026072700000164</span>
                  </div>

                </div>
              </div>

              {/* Section 2 Header */}
              <div 
                className="text-white px-6 py-2.5 font-bold text-sm tracking-wide"
                style={{ backgroundColor: 'var(--bg-offline-primary)' }}
              >
                2. Payment to the fund's collection account
              </div>

              {/* Section 2 Content */}
              <div className="p-6 bg-white">
                <p className="text-xs text-slate-600 mb-4">
                  Kindly remit your investment to the fund's collection account as stated below and attach the receipt.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">A/C Payee</span>
                    <span className="font-bold text-slate-900 sm:text-right">
                      OPUS AM TRUST AC CLIENT OPUS IPF
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Bank Name</span>
                    <span className="font-bold text-slate-900 sm:text-right">MAYBANK BERHAD</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between border-b md:border-b-0 pb-2 md:pb-0 border-slate-100">
                    <span className="text-slate-500 font-medium">Account No</span>
                    <span className="font-bold text-slate-900 sm:text-right">514012113372</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="text-slate-500 font-medium">BIC Code</span>
                    <span className="font-bold text-slate-900 sm:text-right">MBBEMYKLXXX</span>
                  </div>
                </div>
              </div>

              {/* Note Header */}
              <div 
                className="text-white px-6 py-2.5 font-bold text-sm tracking-wide"
                style={{ backgroundColor: 'var(--bg-offline-primary)' }}
              >
                Note
              </div>

              {/* Note Content */}
              <div className="p-6 space-y-2 text-xs text-slate-500 bg-white border-b border-slate-100">
                <p>
                  Note: You may check the status in <strong className="text-slate-800">Account Summary -&gt; History</strong>
                </p>
                <p>
                  For assistance, you may contact our Client Services team at{' '}
                  <a href="mailto:clientservices@opusasset.com" className="text-blue-600 underline hover:text-blue-800">
                    clientservices@opusasset.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+60322888833" className="text-blue-600 underline hover:text-blue-800">
                    +603-2288 8833
                  </a>
                </p>
              </div>

              {/* Action Controls */}
              <div className="p-6 flex justify-center items-center gap-4 bg-white">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-32 py-2 rounded-md text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
                  style={{ backgroundColor: 'var(--bg-offline-cancel)' }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleProceed}
                  className="w-32 py-2 rounded-md text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
                  style={{ backgroundColor: 'var(--bg-offline-btn)' }}
                >
                  &gt;&gt; Proceed
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}