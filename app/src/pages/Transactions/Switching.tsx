import Header from "../../components/shared/header";
import Navbar from "../../components/shared/navbar";
import { useState } from 'react';

export default function Switching() {
  const [accountNum, setAccountNum] = useState('5566778899');
  const [selectedFund, setSelectedFund] = useState('OPUS Income Plus Fund');

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen w-full bg-[#9ED382]">
      <Header />

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
            <h1 className="text-2xl font-bold text-black">Switching Out</h1>
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
                  <option value="5566778899">5566-7788-99</option>
                  <option value="1102938475">1102-9384-75</option>
                </select>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Account Name</label>
                <span className="text-gray-800 font-medium">Siti Nurhaliza</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Fund</label>
                <select 
                  value={selectedFund} 
                  onChange={(e) => setSelectedFund(e.target.value)}
                  className="border-2 border-emerald-500 rounded-lg p-2.5 outline-none bg-white text-gray-700 font-medium cursor-pointer"
                >
                  <option>OPUS Income Plus Fund</option>
                  <option>OPUS Shariah Income Fund</option>
                </select>
              </div>

              <div className="grid grid-cols-2 items-start">
                <label className="font-semibold text-gray-600">Unit Price Date</label>
                <span className="text-gray-700 text-xs">T Days (Before 4pm every business day)</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Goal</label>
                <span className="text-gray-800 uppercase font-medium">HOUSE DEPOSIT</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Available Unit</label>
                <span className="text-emerald-700 font-semibold">8,320.5000</span>
              </div>

              <div className="grid grid-cols-2 items-start">
                <div>
                  <label className="font-semibold text-gray-600 block">Unit Price as at</label>
                  <span className="text-xs text-gray-500">22/07/2026</span>
                </div>
                <span className="text-gray-800 pt-1 font-medium">MYR 1.2140</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-8 flex justify-center">
            <button className="bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3 px-20 rounded-xl text-lg transition-colors shadow-sm active:scale-95">
              Switch Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}