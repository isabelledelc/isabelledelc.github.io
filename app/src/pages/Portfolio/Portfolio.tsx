import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/shared/header";
import Navbar from "../../components/shared/navbar";
import { Eye, EyeOff, ChevronRight, ChevronDown, X } from "lucide-react";

// Sample Data
const sampleFunds = [
  { id: "1", name: "OPUS INCOME PLUS", code: "IPF", amount: "MYR 1,250.00", returnVal: "+0.2450", goal: "Retirement", account: "Current Account" },
  { id: "2", name: "OPUS INCOME PLUS", code: "IPF", amount: "MYR 3,100.50", returnVal: "+0.1820", goal: "Education", account: "Current Account" },
  { id: "3", name: "OPUS INCOME PLUS", code: "IPF", amount: "MYR 850.00", returnVal: "+0.0910", goal: "Emergency Fund", account: "Savings Account" },
  { id: "4", name: "OPUS INCOME PLUS", code: "IPF", amount: "MYR 4,620.10", returnVal: "+0.3120", goal: "Retirement", account: "Investment Account" },
  { id: "5", name: "OPUS CASH EXTRA", code: "CEF", amount: "MYR 2,100.00", returnVal: "+0.1050", goal: "Wealth Growth", account: "Savings Account" },
];

// Data Breakdown Mock Data mapped by Analysis Tab Type
const breakdownData = {
  Fund: [
    { id: "f1", name: "OPUS INCOME PLUS", code: "IPF", value: "MYR 1,250.00", percentage: "40%" },
    { id: "f2", name: "OPUS INCOME PLUS", code: "IPF", value: "MYR 3,100.50", percentage: "30%" },
    { id: "f3", name: "OPUS INCOME PLUS", code: "IPF", value: "MYR 850.00", percentage: "20%" },
    { id: "f4", name: "OPUS CASH EXTRA", code: "CEF", value: "MYR 2,100.00", percentage: "10%" },
  ],
  Goal: [
    { id: "g1", name: "RETIREMENT FUND", code: "GOAL", value: "MYR 5,870.10", percentage: "48%" },
    { id: "g2", name: "EDUCATION FUND", code: "GOAL", value: "MYR 3,100.50", percentage: "25%" },
    { id: "g3", name: "WEALTH GROWTH", code: "GOAL", value: "MYR 2,100.00", percentage: "17%" },
    { id: "g4", name: "EMERGENCY FUND", code: "GOAL", value: "MYR 850.00", percentage: "10%" },
  ],
  Account: [
    { id: "a1", name: "CURRENT ACCOUNT", code: "00108048", value: "MYR 4,350.50", percentage: "35%" },
    { id: "a2", name: "INVESTMENT ACCOUNT", code: "00108049", value: "MYR 4,620.10", percentage: "37%" },
    { id: "a3", name: "SAVINGS ACCOUNT", code: "00108050", value: "MYR 2,950.00", percentage: "24%" },
    { id: "a4", name: "TAX SAVINGS ACCOUNT", code: "00108051", value: "MYR 500.00", percentage: "4%" },
  ],
};

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"Holdings" | "Analysis">("Holdings");
  const [analysisFilter, setAnalysisFilter] = useState<"Fund" | "Goal" | "Account">("Fund");
  const [showModal, setShowModal] = useState(false);
  const [showBalance, setShowBalance] = useState(true);

  function handleFundClick(fundId: string) {
    navigate(`/funds/${fundId}`);
  }

  return (
    <div className="min-h-screen w-full bg-[#E9F7E5]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 text-slate-800">
        
        {/* Main Tab Navigation */}
        <div className="mb-6 flex gap-8 border-b border-slate-300/80 pb-2 text-lg font-bold">
          <button
            onClick={() => setActiveTab("Holdings")}
            className={`pb-2 transition cursor-pointer ${
              activeTab === "Holdings"
                ? "border-b-2 border-slate-900 text-slate-900"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Holdings
          </button>
          <button
            onClick={() => setActiveTab("Analysis")}
            className={`pb-2 transition cursor-pointer ${
              activeTab === "Analysis"
                ? "border-b-2 border-slate-900 text-slate-900"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Analysis
          </button>
        </div>

        {/* HOLDINGS TAB VIEW */}
        {activeTab === "Holdings" ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <aside className="md:col-span-4">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
                <div className="relative mb-4">
                  <select className="w-full appearance-none rounded-xl bg-slate-100 px-4 py-3 pr-8 text-sm font-semibold text-slate-700 outline-none cursor-pointer">
                    <option>Current Account</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-3.5 h-4 w-4 rotate-90 text-slate-500" />
                </div>

                <div className="my-6 flex flex-col items-center justify-center gap-4 text-center">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-2xl font-bold tracking-tight text-slate-900">
                      {showBalance ? "MYR 12,450.00" : "MYR ••••••••"}
                    </span>
                    <button
                      onClick={() => setShowBalance(!showBalance)}
                      className="text-slate-500 transition hover:text-slate-800 cursor-pointer"
                    >
                      {showBalance ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-[#EBF7EA] px-3 py-1.5 text-xs font-semibold text-emerald-600">
                      + 0.2340
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Last update</span>
                    <span className="font-medium text-slate-800">10 Jul 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Account no</span>
                    <span className="font-medium text-slate-800">00108048</span>
                  </div>
                </div>
              </div>
            </aside>

            <section className="md:col-span-8">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-800">My Funds</h2>
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-sm font-semibold text-emerald-700 cursor-pointer"
                  >
                    View All
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  {sampleFunds.map((fund) => (
                    <article
                      key={fund.id}
                      onClick={() => handleFundClick(fund.id)}
                      className="group cursor-pointer rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                      role="button"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-slate-700">{fund.name}</div>
                          <div className="text-[12px] text-slate-400">{fund.code}</div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-emerald-600" />
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-sm font-semibold text-slate-800">{fund.amount}</div>
                          <div className="text-xs text-emerald-600">{fund.returnVal}</div>
                        </div>
                        <div className="text-right text-xs text-slate-400">Units: —</div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* ANALYSIS TAB VIEW */
          <div className="space-y-6">
            
            {/* Top Analysis Section */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              
              {/* Account Dropdown Card */}
              <div className="md:col-span-5 flex flex-col justify-between rounded-3xl bg-white/60 p-6 backdrop-blur-md shadow-xs border border-white/50">
                <div className="relative">
                  <select className="w-full appearance-none rounded-2xl bg-white px-5 py-3.5 pr-10 text-sm font-bold text-slate-700 shadow-xs outline-none cursor-pointer">
                    <option>Current Account</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 h-4 w-4 text-slate-500 pointer-events-none" />
                </div>

                <div className="my-8 text-center">
                  <h3 className="text-2xl font-extrabold text-slate-900">Account Name</h3>
                  <p className="mt-2 text-base font-semibold text-slate-500">Account Number</p>
                </div>
                <div></div>
              </div>

              {/* Allocation Donut Chart Card */}
              <div className="md:col-span-7 rounded-3xl bg-white/60 p-6 backdrop-blur-md shadow-xs border border-white/50 space-y-4">
                
                {/* Filter Tabs */}
                <div className="flex justify-around border-b border-slate-200/60 pb-3 text-sm font-bold">
                  {(["Fund", "Goal", "Account"] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setAnalysisFilter(filter)}
                      className={`relative pb-1 transition cursor-pointer ${
                        analysisFilter === filter
                          ? "text-slate-900 after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:w-full after:bg-slate-900"
                          : "text-slate-400 hover:text-slate-700"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                {/* Donut Chart & Legend Display */}
                <div className="pt-2">
                  <p className="text-center text-xs font-bold text-slate-600 mb-4">Allocation</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
                    {/* CSS Conic Donut Chart */}
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[conic-gradient(#A855F7_0%_40%,#00FF66_40%_65%,#8B5CF6_65%_85%,#A855F7_85%_100%)] p-5 shadow-sm">
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#EBF7EA] text-center">
                        <span className="text-[10px] font-bold text-slate-600 leading-tight">
                          Total Amount<br />by {analysisFilter}
                        </span>
                      </div>
                    </div>

                    {/* Dynamic Legend */}
                    <div className="w-full sm:w-auto rounded-2xl bg-white/90 p-4 shadow-xs border border-slate-100/80 space-y-2.5 min-w-[200px]">
                      {breakdownData[analysisFilter].map((item, idx) => {
                        const colors = ["bg-purple-500", "bg-emerald-400", "bg-violet-600", "bg-fuchsia-500"];
                        return (
                          <div key={item.id} className="flex items-center justify-between text-xs font-bold gap-6">
                            <div className="flex items-center gap-2">
                              <span className={`h-2.5 w-2.5 rounded-full ${colors[idx % colors.length]}`} />
                              <span className="text-slate-700">{item.code}</span>
                            </div>
                            <span className="text-slate-800">{item.percentage}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Account Breakdown List Section */}
            <div className="rounded-3xl bg-white/60 p-6 backdrop-blur-md shadow-xs border border-white/50 space-y-6">
              
              <div className="rounded-2xl bg-white py-3.5 text-center shadow-xs">
                <h3 className="text-lg font-bold text-slate-800">
                  {analysisFilter} Breakdown
                </h3>
              </div>

              {/* Grid Cards based on selected Filter */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {breakdownData[analysisFilter].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-xs border border-slate-100 transition hover:shadow-md"
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{item.name}</p>
                      <p className="mt-2 text-lg font-extrabold text-slate-900">{item.value}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
                        {item.code}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        )}

        {/* Modal: All funds */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-slate-900">All Available Funds</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-full p-1 text-slate-400 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex max-h-[60vh] flex-col gap-3 overflow-y-auto pr-1">
                {sampleFunds.map((fund) => (
                  <div
                    key={fund.id}
                    onClick={() => {
                      setShowModal(false);
                      handleFundClick(fund.id);
                    }}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{fund.name}</h4>
                      <span className="text-xs font-semibold text-slate-500">{fund.code}</span>
                    </div>
                    <div className="flex items-center gap-3 text-right">
                      <div>
                        <p className="text-sm font-bold text-slate-900">{fund.amount}</p>
                        <p className="text-xs font-semibold text-emerald-600">{fund.returnVal}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}