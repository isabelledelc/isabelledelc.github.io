import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, CreditCard, Filter, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Header from "../../../components/shared/header";

const sampleFunds = [
  { id: "1", name: "OPUS INCOME PLUS", code: "OPUS IPF", account: "00108048", type: "Investment" },
  { id: "2", name: "OPUS GROWTH FUND", code: "OPUS OGF", account: "00108049", type: "Investment" },
  { id: "3", name: "OPUS CASH EXTRA", code: "OPUS CEF", account: "00108050", type: "Cash" },
];

export default function FundDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const fund = sampleFunds.find((f) => f.id === id) || sampleFunds[0];
  const [activeTab, setActiveTab] = useState<"History" | "Performance" | "Value" | "Account">("Value");
  const [valueToggle, setValueToggle] = useState<"current" | "inception">("current");

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/portfolio");
    }
  };

  const handleAction = (actionPath: string) => {
    navigate(`/transactions/${actionPath}?fundId=${fund.id}`);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 [background:var(--bg-page)] text-[var(--text-main)]">
      <Header />

      <main className="mx-auto max-w-6xl p-4 sm:p-6 pb-20">
        <div className="overflow-hidden rounded-3xl bg-[var(--bg-card)] shadow-xl border border-[var(--border-app)] backdrop-blur-md">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[var(--border-app)] p-6 gap-4">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-btn-sec)] text-[var(--text-main)] hover:bg-[var(--bg-btn-sec-hover)] transition cursor-pointer"
                aria-label="Go Back"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-bold text-[var(--text-heading)]">Funds Details</h1>
            </div>

            {/* Fund Info Badge */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[var(--border-app)] bg-[var(--bg-pill)] px-4 py-2 text-xs font-semibold text-[var(--text-main)] shadow-xs">
              <CreditCard className="h-4 w-4 text-[var(--text-muted)]" />
              <span>{fund.account}</span>
              <span className="text-[var(--border-app)]">|</span>
              <span className="font-bold text-[var(--text-heading)]">{fund.code}</span>
              <span className="text-[var(--border-app)]">|</span>
              <span className="text-[var(--text-muted)]">{fund.type}</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* SWIPEABLE TAB CONTAINER ON MOBILE */}
            <div className="flex justify-center mb-8 w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="inline-flex items-center rounded-full bg-[var(--bg-btn-sec)] p-1.5 shadow-inner max-w-full overflow-x-auto whitespace-nowrap">
                {(["History", "Performance", "Value", "Account"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap rounded-full px-5 sm:px-6 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeTab === tab
                        ? "bg-[var(--color-primary)] text-white shadow-sm"
                        : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Content Body */}
            <div className="min-h-[380px]">
              
              {/* PERFORMANCE TAB */}
              {activeTab === "Performance" && (
                <div className="space-y-6">
                  <div className="flex justify-end">
                    <div className="flex items-center gap-4 rounded-xl border border-[var(--border-app)] bg-[var(--bg-container)] px-4 py-2 text-xs font-semibold text-[var(--text-main)]">
                      <div>
                        <span className="text-[var(--text-muted)] block text-[10px]">Period</span>
                        <span className="font-bold text-[var(--text-heading)]">All</span>
                      </div>
                      <div className="h-6 w-[1px] bg-[var(--border-app)]" />
                      <div>
                        <span className="text-[var(--text-muted)] block text-[10px]">From</span>
                        <span className="font-bold text-[var(--text-heading)]">02/07/2026</span>
                      </div>
                      <div className="h-6 w-[1px] bg-[var(--border-app)]" />
                      <div>
                        <span className="text-[var(--text-muted)] block text-[10px]">To</span>
                        <span className="font-bold text-[var(--text-heading)]">10/07/2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    <div className="md:col-span-7 flex min-h-[260px] items-center justify-center rounded-2xl border border-[var(--border-app)] bg-[var(--bg-container)] p-6 text-[var(--text-muted)] font-semibold">
                      Performance Chart Placeholder
                    </div>

                    <div className="md:col-span-5 flex flex-col gap-4">
                      <div className="rounded-2xl border border-[var(--border-app)] bg-[var(--bg-container)] p-5">
                        <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Cumulative</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[11px] text-[var(--text-muted)] font-medium">Fund TWRR</p>
                            <p className="text-lg font-bold text-[var(--text-heading)]">0.08%</p>
                          </div>
                          <div>
                            <p className="text-[11px] text-[var(--text-muted)] font-medium">Benchmarks TWRR</p>
                            <p className="text-lg font-bold text-[var(--text-heading)]">0.03%</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[var(--border-app)] bg-[var(--bg-container)] p-5">
                        <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Annualized</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[11px] text-[var(--text-muted)] font-medium">Fund TWRR</p>
                            <p className="text-lg font-bold text-[var(--text-heading)]">0.08%</p>
                          </div>
                          <div>
                            <p className="text-[11px] text-[var(--text-muted)] font-medium">Benchmarks TWRR</p>
                            <p className="text-lg font-bold text-[var(--text-heading)]">0.03%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VALUE TAB */}
              {activeTab === "Value" && (
                <div className="space-y-6">
                  
                  {/* High-Contrast Toggle Switch Bar */}
                  <div className="flex items-center gap-3 select-none">
                    <span 
                      onClick={() => setValueToggle("inception")}
                      className={`text-xs sm:text-sm font-bold cursor-pointer transition-colors ${
                        valueToggle === "inception" ? "text-[var(--text-heading)]" : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                      }`}
                    >
                      Since Inception
                    </span>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={valueToggle === "current"}
                      onClick={() => setValueToggle(valueToggle === "current" ? "inception" : "current")}
                      className={`relative inline-flex h-6 w-12 cursor-pointer items-center rounded-full border-2 border-slate-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                        valueToggle === "current" ? "bg-[var(--color-primary)] border-[var(--color-primary)]" : "bg-slate-300 dark:bg-slate-700"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform ${
                          valueToggle === "current" ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>

                    <span 
                      onClick={() => setValueToggle("current")}
                      className={`text-xs sm:text-sm font-bold cursor-pointer transition-colors ${
                        valueToggle === "current" ? "text-[var(--text-heading)]" : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                      }`}
                    >
                      Current Investment
                    </span>
                  </div>

                  {/* CURRENT INVESTMENT VIEW */}
                  {valueToggle === "current" ? (
                    <div className="rounded-2xl border border-[var(--border-app)] bg-[var(--bg-container)] p-6 shadow-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6">
                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Unit Holdings</p>
                          <p className="text-sm sm:text-base font-bold text-[var(--text-heading)] mt-1 font-mono-data">90.5089</p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Unit Price (03/08/2026)</p>
                          <p className="text-sm sm:text-base font-bold text-[var(--text-heading)] mt-1 font-mono-data">MYR 1.1057</p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Average Cost Per Unit</p>
                          <p className="text-sm sm:text-base font-bold text-[var(--text-heading)] mt-1 font-mono-data">MYR 1.1049</p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Invested Amount</p>
                          <p className="text-sm sm:text-base font-bold text-[var(--text-heading)] mt-1 font-mono-data">MYR 100.00</p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Market Value [MV]</p>
                          <p className="text-sm sm:text-base font-bold text-[var(--text-heading)] mt-1 font-mono-data">MYR 100.08</p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Profit/(Loss)</p>
                          <p className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 mt-1 font-mono-data">MYR 0.08</p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Pending Transaction</p>
                          <p className="text-sm sm:text-base font-bold text-[var(--text-heading)] mt-1 font-mono-data">MYR 0.00</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* SINCE INCEPTION VIEW */
                    <div className="rounded-2xl border border-[var(--border-app)] bg-[var(--bg-container)] p-6 shadow-xs space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6">
                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Total Investment [I]</p>
                          <p className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 mt-1 font-mono-data flex items-center gap-1.5">
                            <span className="text-xs rounded-full bg-emerald-100 dark:bg-emerald-950 px-1">⊕</span> MYR 100.00
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Total Withdrawal [W]</p>
                          <p className="text-sm sm:text-base font-bold text-rose-600 dark:text-rose-400 mt-1 font-mono-data flex items-center gap-1.5">
                            <span className="text-xs rounded-full bg-rose-100 dark:bg-rose-950 px-1">⊖</span> MYR 0.00
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Distribution (Payout) [P]</p>
                          <p className="text-sm sm:text-base font-bold text-rose-600 dark:text-rose-400 mt-1 font-mono-data flex items-center gap-1.5">
                            <span className="text-xs rounded-full bg-rose-100 dark:bg-rose-950 px-1">⊖</span> MYR (0.31)
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Distribution (Reinvested) [R]</p>
                          <p className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 mt-1 font-mono-data flex items-center gap-1.5">
                            <span className="text-xs rounded-full bg-emerald-100 dark:bg-emerald-950 px-1">⊕</span> MYR 0.31
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Total Net Investment [NI]</p>
                          <p className="text-sm sm:text-base font-bold text-[var(--text-heading)] mt-1 font-mono-data">MYR 100.00</p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Current Market Value [MV]</p>
                          <p className="text-sm sm:text-base font-bold text-[var(--text-heading)] mt-1 font-mono-data">MYR 100.08</p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[var(--text-muted)]">Total Return [RTN]</p>
                          <p className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 mt-1 font-mono-data">MYR 0.08</p>
                        </div>
                      </div>

                      {/* Formula / Legend Notes */}
                      <div className="pt-5 border-t border-[var(--border-app)] text-xs text-[var(--text-muted)] grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-[var(--text-heading)] mb-1">Notes:</p>
                          <p className="text-[11px]">Total Net Investment</p>
                          <p className="font-bold text-[var(--text-heading)] text-[11px] font-mono-data">[NI] = [I] - [W] - [P] + [R]</p>
                        </div>
                        <div className="md:pt-5">
                          <p className="text-[11px]">Total Return</p>
                          <p className="font-bold text-[var(--text-heading)] text-[11px] font-mono-data">[RTN] = [MV] - [NI]</p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* HISTORY TAB */}
              {activeTab === "History" && (
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <button 
                      type="button" 
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-app)] bg-[var(--bg-btn-sec)] px-4 py-2 text-xs font-semibold text-[var(--text-main)] hover:bg-[var(--bg-btn-sec-hover)] transition cursor-pointer"
                    >
                      <Filter className="h-3.5 w-3.5" />
                      <span>Filter by type and duration</span>
                    </button>
                  </div>

                  <div className="rounded-2xl border border-[var(--border-app)] bg-[var(--bg-container)] p-6 min-h-[260px]">
                    <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">July 2026</p>
                    
                    <div className="max-w-sm rounded-2xl border border-[var(--border-app)] bg-[var(--bg-card)] p-4 shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--bg-pill)] text-[var(--color-primary)]">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[var(--text-heading)]">Top Up</p>
                          <div className="flex items-center gap-1 text-[10px] font-bold text-[var(--color-primary)]">
                            <CheckCircle2 className="h-3 w-3" /> APPROVED
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[var(--text-muted)] font-mono-data">03/07 | 09:33:50 AM</p>
                        <p className="text-sm font-bold text-[var(--text-heading)] font-mono-data">100.00 MYR</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ACCOUNT TAB */}
              {activeTab === "Account" && (
                <div className="rounded-2xl border border-[var(--border-app)] bg-[var(--bg-container)] p-6 sm:p-8">
                  <div className="mb-6">
                    <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Name</p>
                    <p className="text-2xl font-extrabold text-[var(--text-heading)] mt-1">NAME OF ACC USER</p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-6 border-t border-[var(--border-app)]">
                    <div>
                      <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Email</p>
                      <p className="text-base font-bold text-[var(--text-main)] mt-1">email@email.com</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Contact Number</p>
                      <p className="text-base font-bold text-[var(--text-main)] mt-1">+60123456789</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Action Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-[var(--border-app)] pt-6">
              <button 
                type="button"
                onClick={() => handleAction("cooling-off")}
                className="cursor-pointer rounded-xl bg-[var(--bg-btn-sec)] px-5 py-3 text-xs font-bold text-[var(--text-main)] hover:bg-[var(--bg-btn-sec-hover)] transition"
              >
                Cooling Off
              </button>
              <button 
                type="button"
                onClick={() => handleAction("switching")}
                className="cursor-pointer rounded-xl bg-[var(--bg-btn-sec)] px-5 py-3 text-xs font-bold text-[var(--text-main)] hover:bg-[var(--bg-btn-sec-hover)] transition"
              >
                Switch
              </button>
              <button 
                type="button"
                onClick={() => handleAction("redemption")}
                className="cursor-pointer rounded-xl bg-[var(--bg-btn-sec)] px-5 py-3 text-xs font-bold text-[var(--text-main)] hover:bg-[var(--bg-btn-sec-hover)] transition"
              >
                Redeem
              </button>
              <button 
                type="button"
                onClick={() => handleAction("top-up")}
                className="cursor-pointer rounded-xl bg-[var(--color-primary)] px-8 py-3 text-xs font-bold text-white shadow-md hover:bg-[var(--color-primary-hover)] transition"
              >
                Top Up
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}