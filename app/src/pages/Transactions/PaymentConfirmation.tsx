import React from 'react';
import Header from "../../components/shared/header";
import Navbar from "../../components/shared/navbar";

export default function PaymentConfirmation() {
  return (
    <div className="min-h-screen w-full bg-[#9ED382]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header Bar */}
          <div className="p-6 border-b border-gray-200 flex items-center space-x-4">
            <button className="text-xl font-bold text-gray-700 hover:text-black">&lt;</button>
            <h1 className="text-2xl font-bold text-black">Payment Confirmation</h1>
          </div>

          <div className="p-8 space-y-6">
            <h2 className="text-xl font-bold text-black mb-6">Payment Details</h2>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
              <div className="grid grid-cols-2">
                <span className="font-semibold text-gray-600">Master Account</span>
                <span className="text-gray-800">KYC</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="font-semibold text-gray-600">Fund Name</span>
                <span className="text-gray-800 uppercase font-medium">OPUS INCOME PLUS FUND</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold text-gray-600">Account Holder(s)</span>
                <span className="text-gray-800">Holders Name</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="font-semibold text-gray-600">Payment Amount</span>
                <span className="text-gray-800 font-medium">MYR 200</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold text-gray-600">Purpose</span>
                <span className="text-gray-800 uppercase">INVESTMENT</span>
              </div>
              <div className="grid grid-cols-2 items-center">
                <span className="font-semibold text-gray-600">Payment Method</span>
                <div className="border border-red-300 rounded px-3 py-1 w-24 text-center text-red-500 font-bold text-sm bg-red-50">
                  Boost
                </div>
              </div>
            </div>

            {/* Note Box */}
            <div className="bg-[#EAF5E8] border border-emerald-100 rounded-2xl p-6 mt-8 space-y-3 text-xs text-gray-700 leading-relaxed">
              <h3 className="font-bold text-sm text-black mb-2">Note :</h3>
              <p>Any transactions made after 4:00 PM will be processed on the next business day.</p>
              <p>Kindly ensure that your Boost account is linked with the same phone number registered in Opus Touch.</p>
              <p>Please take note that we do not allow 3rd party payment to make investment. We reserve the right to reject any 3rd party payment at our sole discretion.</p>
            </div>

            {/* Action Button */}
            <div className="flex justify-center pt-6">
              <button className="bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3 px-24 rounded-xl text-lg transition-colors">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}