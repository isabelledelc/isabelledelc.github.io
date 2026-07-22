import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/shared/header";
import Navbar from "../../components/shared/navbar";
import FundCard, { type FundItem } from "./components/FundCard";
import AllocationChart, { type AnalysisFilter, type BreakdownItem } from "./components/AllocationChart";
import AccountBreakdown from "./components/AccountBreakdown";
import AccountSummary from "./components/AccountSummary";

// Sample Data
const sampleFunds: FundItem[] = [
  { id: "1", name: "OPUS INCOME PLUS", code: "IPF", amount: "MYR 1,250.00", returnVal: "+0.2450", goal: "Retirement", account: "Current Account" },
  { id: "2", name: "OPUS INCOME PLUS", code: "IPF", amount: "MYR 3,100.50", returnVal: "+0.1820", goal: "Education", account: "Current Account" },
  { id: "3", name: "OPUS INCOME PLUS", code: "IPF", amount: "MYR 850.00", returnVal: "+0.0910", goal: "Emergency Fund", account: "Savings Account" },
  { id: "4", name: "OPUS INCOME PLUS", code: "IPF", amount: "MYR 4,620.10", returnVal: "+0.3120", goal: "Retirement", account: "Investment Account" },
  { id: "5", name: "OPUS CASH EXTRA", code: "CEF", amount: "MYR 2,100.00", returnVal: "+0.1050", goal: "Wealth Growth", account: "Savings Account" },
];

// Data Breakdown Mock Data mapped by Analysis Tab Type
const breakdownData: Record<AnalysisFilter, BreakdownItem[]> = {
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
  const [analysisFilter, setAnalysisFilter] = useState<AnalysisFilter>("Fund");
  const [showBalance, setShowBalance] = useState(true);

  function handleFundClick(fundId: string) {
    navigate(`/funds/${fundId}`);
  }

  return (
    <div className="min-h-screen w-full bg-[#E9F7E5]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 text-slate-800">
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

        {activeTab === "Holdings" ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <aside className="md:col-span-4">
              <AccountSummary
                showBalance={showBalance}
                onToggleBalance={() => setShowBalance((prev) => !prev)}
              />
            </aside>

            <section className="md:col-span-8">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-800">My Funds</h2>
                  <button
                    onClick={() => navigate("/portfolio/view-all-my-funds")}
                    className="text-sm font-semibold text-emerald-700 cursor-pointer"
                  >
                    View All
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {sampleFunds.map((fund) => (
                    <FundCard key={fund.id} fund={fund} onClick={handleFundClick} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-5 flex flex-col justify-between rounded-3xl border border-white/50 bg-white/60 p-6 shadow-xs backdrop-blur-md">
                <div className="my-8 text-center">
                  <h3 className="text-2xl font-extrabold text-slate-900">Account Name</h3>
                  <p className="mt-2 text-base font-semibold text-slate-500">Account Number</p>
                </div>
              </div>

              <div className="md:col-span-7">
                <AllocationChart
                  analysisFilter={analysisFilter}
                  breakdownData={breakdownData}
                  onFilterChange={setAnalysisFilter}
                />
              </div>
            </div>

            <AccountBreakdown
              analysisFilter={analysisFilter}
              breakdownData={breakdownData}
            />
          </div>
        )}
      </main>
    </div>
  );
}