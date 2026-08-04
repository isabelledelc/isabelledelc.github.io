import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
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

const breakdownData: Record<AnalysisFilter, BreakdownItem[]> = {
  Fund: [
    { id: "f1", name: "OPUS INCOME PLUS", code: "IPF", value: "MYR 1,250.00", percentage: "40%" },
    { id: "f2", name: "OPUS INCOME PLUS", code: "IPF", value: "MYR 3,100.50", percentage: "30%" },
    { id: "f3", name: "OPUS INCOME PLUS", code: "IPF", value: "MYR 850.00", percentage: "20%" },
    { id: "f4", name: "OPUS CASH EXTRA", code: "CEF", value: "MYR 2,100.00", percentage: "10%" },
  ],
  Goal: [
    { id: "g1", name: "RETIREMENT FUND", code: "INVESTMENT", value: "MYR 5,870.10", percentage: "48%" },
    { id: "g2", name: "EDUCATION FUND", code: "GOAL", value: "MYR 3,100.50", percentage: "25%" },
    { id: "g3", name: "WEALTH GROWTH", code: "GOAL", value: "MYR 2,100.00", percentage: "17%" },
    { id: "g4", name: "EMERGENCY FUND", code: "GOAL", value: "MYR 850.00", percentage: "10%" },
  ],
  Account: [
    { id: "a1", name: "CURRENT ACCOUNT", code: "00108048", value: "MYR 4,350.50", percentage: "100%" },
    
  ],
};

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"Holdings" | "Analysis">("Holdings");
  const [analysisFilter, setAnalysisFilter] = useState<AnalysisFilter>("Fund");
  const [showBalance, setShowBalance] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState("Current Account");

  function handleFundClick(fundId: string) {
    navigate(`/funds/${fundId}`);
  }

  return (
    <div className="min-h-screen w-full transition-colors duration-300 [background:var(--bg-page)] text-[var(--text-main)]">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <div className="mb-6 flex gap-8 border-b border-[var(--border-app)] pb-2 text-lg font-bold">
          <button
            onClick={() => setActiveTab("Holdings")}
            className={`pb-2 transition cursor-pointer ${
              activeTab === "Holdings"
                ? "border-b-2 border-[var(--color-primary)] text-[var(--text-main)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            Holdings
          </button>
          <button
            onClick={() => setActiveTab("Analysis")}
            className={`pb-2 transition cursor-pointer ${
              activeTab === "Analysis"
                ? "border-b-2 border-[var(--color-primary)] text-[var(--text-main)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
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
              <div className="rounded-2xl border border-[var(--border-app)] bg-[var(--bg-card)] p-6 shadow-sm backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[var(--text-heading)]">My Funds</h2>
                  <button
                    onClick={() => navigate("/portfolio/view-all-my-funds")}
                    className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] cursor-pointer"
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
              {/* Account Dropdown Header Card (Matching Design Screenshot) */}
              <div className="md:col-span-5 flex flex-col rounded-2xl border border-emerald-200/60 bg-[#eaf6ec] shadow-sm overflow-hidden">
                {/* Top Floating White Dropdown Bar */}
                <div className="relative border-b border-emerald-100 bg-white p-3 shadow-xs">
                  <select
                    value={selectedAccount}
                    onChange={(e) => setSelectedAccount(e.target.value)}
                    className="w-full appearance-none cursor-pointer text-center text-base font-semibold text-gray-800 outline-none bg-transparent pr-6"
                  >
                    <option value="Current Account">Current Account</option>
                    
                  </select>
                  <ChevronRight className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-gray-600" />
                </div>

                {/* Card Content Area */}
                <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[160px]">
                  <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                    Account Name
                  </h3>
                  <p className="mt-3 text-base font-medium text-gray-600">
                    Account Number
                  </p>
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