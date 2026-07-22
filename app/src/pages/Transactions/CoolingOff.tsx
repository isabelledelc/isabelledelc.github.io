
import Header from "../../components/shared/header";
import Navbar from "../../components/shared/navbar";
import { useState } from 'react';

export default function CoolingOff() {
  const [accountNum, setAccountNum] = useState('9900112233');
  const [chosenBank, setChosenBank] = useState('MAYBANK BERHAD');

  const handleBack = () => {
    window.history.back();
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
              onClick={handleBack}
              className="text-xl font-bold text-gray-700 hover:text-black hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              title="Go Back"
            >
              &lt;
            </button>
            <h1 className="text-2xl font-bold text-black">Cooling Off</h1>
          </div>

          {/* Form Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Account Number</label>
                <select 
                  value={accountNum} 
                  onChange={(e) => setAccountNum(e.target.value)}
                  className="border-2 border-emerald-500 rounded-lg p-2.5 outline-none bg-white text-gray-700 font-medium cursor-pointer"
                >
                  <option value="9900112233">9900-1122-33</option>
                  <option value="4455667788">4455-6677-88</option>
                </select>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Payment To</label>
                <span className="text-gray-800 font-medium">Chong Wei Lee</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Transaction To Reverse</label>
                <span className="text-gray-800 font-mono text-xs">TXN-2026-0722-0041</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Fund Name</label>
                <span className="text-gray-800 font-medium">OPUS INCOME PLUS FUND</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Reversal Units</label>
                <span className="text-gray-800 font-semibold">1,500.000</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Bank Name</label>
                <span className="text-gray-800 uppercase font-medium">MAYBANK BERHAD</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Choose Your Bank</label>
                <select 
                  value={chosenBank} 
                  onChange={(e) => setChosenBank(e.target.value)}
                  className="border-2 border-emerald-500 rounded-lg p-2 outline-none bg-white text-gray-700 text-xs font-medium cursor-pointer"
                >
                  <option value="MAYBANK BERHAD">MAYBANK BERHAD</option>
                  <option value="CIMB BANK">CIMB BANK BERHAD</option>
                  <option value="PUBLIC BANK">PUBLIC BANK BERHAD</option>
                  <option value="RHB BANK">RHB BANK BERHAD</option>
                </select>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Bank Account No.</label>
                <span className="text-gray-800 font-mono">114012948102</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Goal</label>
                <span className="text-gray-800 uppercase font-medium">WEALTH BUILDER</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-8 flex justify-center">
            <button className="bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3 px-24 rounded-xl text-lg transition-colors shadow-sm active:scale-95">
              Cool Off
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}