import React from 'react';
import Header from "../../components/shared/header";
import Navbar from "../../components/shared/navbar";

export default function TopUp() {
  return (
    <div className="min-h-screen w-full bg-[#9ED382]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header Bar */}
          <div className="p-6 border-b border-gray-200 flex items-center space-x-4">
            <button className="text-xl font-bold text-gray-700 hover:text-black">&lt;</button>
            <h1 className="text-2xl font-bold text-black">Deposit To Your Account</h1>
          </div>

          {/* Form Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Account Number</label>
                <select className="border-2 border-emerald-500 rounded-lg p-2.5 outline-none bg-white font-medium text-gray-700">
                  <option>XXXXXXXXX</option>
                </select>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Account Name</label>
                <span className="text-gray-800">XXX XXX XXX</span>
              </div>

              <div className="grid grid-cols-2 items-start">
                <label className="font-semibold text-gray-600 pt-2">Deposit Amount</label>
                <div>
                  <div className="border-2 border-emerald-500 rounded-lg p-3">
                    <span className="text-gray-500">XXX XXX XXX</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 italic">(Minimum of RM100 Deposit)</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Goal</label>
                <span className="text-gray-800 uppercase tracking-wide">INVESTMENT</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Fund Name</label>
                <span className="text-gray-800">XXX XXX XXX</span>
              </div>

              <div className="grid grid-cols-2 items-start">
                <label className="font-semibold text-gray-600 pt-2">Payment Method</label>
                <div className="border-2 border-emerald-500 rounded-xl p-4 space-y-4 bg-white flex flex-col items-center">
                  <div className="border rounded p-2 w-28 text-center text-red-500 font-bold text-lg">Boost</div>
                  <div className="border rounded p-2 w-28 text-center text-orange-500 font-medium">Offline</div>
                  <div className="border rounded p-2 w-28 text-center text-blue-800 font-semibold">FPX</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-8 flex justify-center pt-2">
            <button className="bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3 px-24 rounded-xl text-lg transition-colors">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}