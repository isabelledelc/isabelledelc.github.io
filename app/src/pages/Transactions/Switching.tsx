import Header from "../../components/shared/header";
import Navbar from "../../components/shared/navbar";

export default function Switching() {
  return (
    <div className="min-h-screen w-full bg-[#9ED382]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header Bar */}
          <div className="p-6 border-b border-gray-200 flex items-center space-x-4">
            <button className="text-xl font-bold text-gray-700 hover:text-black">&lt;</button>
            <h1 className="text-2xl font-bold text-black">Switching Out</h1>
          </div>

          {/* Form Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Account Number</label>
                <select className="border-2 border-emerald-500 rounded-lg p-2.5 outline-none bg-white text-gray-700">
                  <option>XXXXXXXXX</option>
                </select>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Account Name</label>
                <span className="text-gray-800">XXX XXX XXX</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Fund</label>
                <select className="border-2 border-emerald-500 rounded-lg p-2.5 outline-none bg-white text-gray-700">
                  <option>XXX XXX XXX</option>
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
                <span className="text-gray-800 uppercase">INVESTMENT</span>
              </div>

              <div className="grid grid-cols-2 items-center">
                <label className="font-semibold text-gray-600">Available Unit</label>
                <span className="text-gray-800">XX.XXXX</span>
              </div>

              <div className="grid grid-cols-2 items-start">
                <div>
                  <label className="font-semibold text-gray-600 block">Unit Price as at</label>
                  <span className="text-xs text-gray-500">XX/XX/XXXX</span>
                </div>
                <span className="text-gray-800 pt-1">XX.XXXX</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-8 flex justify-center">
            <button className="bg-[#28A745] hover:bg-[#218838] text-white font-semibold py-3 px-20 rounded-xl text-lg transition-colors">
              Switch Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}