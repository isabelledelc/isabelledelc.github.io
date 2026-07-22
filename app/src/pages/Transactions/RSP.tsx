
import Header from "../../components/shared/header";
import Navbar from "../../components/shared/navbar";

export default function RSP() {
  return (
    <div className="min-h-screen w-full bg-[#9ED382]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header Bar */}
          <div className="p-6 border-b border-gray-200 flex items-center space-x-4">
            <button className="text-xl font-bold text-gray-700 hover:text-black">&lt;</button>
            <h1 className="text-2xl font-bold text-black">Regular Saving Plan</h1>
          </div>

          {/* Form Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Account Number</label>
                <select className="border-2 border-emerald-500 rounded-lg p-2.5 outline-none bg-white text-gray-700">
                  <option>XXXXXXXXX</option>
                </select>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Current Savings</label>
                <span className="text-gray-800">XXX.XX</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">New Savings</label>
                <span className="text-gray-800">XXX.XX</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 items-start">
                <label className="font-semibold text-gray-600 pt-2 col-span-1">Funds Name</label>
                <div className="col-span-2 border-2 border-emerald-500 rounded-xl p-4 space-y-3 bg-white">
                  <div className="flex justify-end items-center text-emerald-600 text-xs font-semibold cursor-pointer mb-1">
                    <span className="mr-1 text-sm">+</span> Add Fund
                  </div>
                  
                  {/* Item 1 */}
                  <div className="flex items-center justify-between border-l-4 border-emerald-500 pl-2 bg-gray-50 p-2 rounded shadow-sm">
                    <select className="bg-transparent text-xs text-gray-700 outline-none">
                      <option>OPUS Income Plus Fund (IPF)</option>
                    </select>
                    <span className="text-xs underline font-medium">XXX.XX</span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center justify-between border-l-4 border-emerald-500 pl-2 bg-gray-50 p-2 rounded shadow-sm">
                    <select className="bg-transparent text-xs text-gray-700 outline-none">
                      <option>OPUS Income Plus Fund (IPF)</option>
                    </select>
                    <span className="text-xs border-b border-gray-400 min-w-[40px] text-right">———</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-8 flex justify-center">
            <button className="bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3 px-16 rounded-xl text-lg transition-colors">
              Start My Savings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}