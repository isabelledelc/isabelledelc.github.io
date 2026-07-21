
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, CreditCard, Filter, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Header from "../../../components/shared/header";
import Navbar from "../../../components/shared/navbar";

const sampleFunds = [
  { id: "1", name: "OPUS INCOME PLUS", code: "OPUS IPF", account: "00108048", type: "Investment" },
  { id: "2", name: "OPUS GROWTH FUND", code: "OPUS OGF", account: "00108049", type: "Investment" },
  { id: "3", name: "OPUS CASH EXTRA", code: "OPUS CEF", account: "00108050", type: "Cash" },
];

export default function FundDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const fund = sampleFunds.find((f) => f.id === id) || sampleFunds[0];
  const [activeTab, setActiveTab] = useState<"History" | "Performance" | "Value" | "Account">("Performance");

  // State for Value Tab Toggle (Current Investment vs Since Inception)
  const [valueToggle, setValueToggle] = useState<"current" | "inception">("current");

  // Navigation handler routing to the /transactions folder pages
  const handleAction = (actionPath: string) => {
    navigate(`/transactions/${actionPath}?fundId=${fund.id}`);
  };

  return (
    <div className="min-h-screen bg-[#E9F7E5]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-6xl p-4 sm:p-6 text-slate-800 pb-20">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-100">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 p-6 gap-4">
            <div className="flex items-center gap-4">
              <Link
                to="/portfolio"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
              >
                <ChevronLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-2xl font-bold text-slate-900">Funds Details</h1>
            </div>

            {/* Fund Info Badge */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs">
              <CreditCard className="h-4 w-4 text-slate-400" />
              <span>{fund.account}</span>
              <span className="text-slate-300">|</span>
              <span className="font-bold text-slate-900">{fund.code}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">{fund.type}</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Tab Switching */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-full bg-slate-100 p-1.5 shadow-inner">
                {(["History", "Performance", "Value", "Account"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full px-6 py-2 text-sm font-bold transition-all cursor-pointer ${
                      activeTab === tab
                        ? "bg-[#D8F3D8] text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
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
                  {/* Top Control Bar: Date Range Filter */}
                  <div className="flex justify-end">
                    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Period</span>
                        <span className="font-bold text-slate-800">All</span>
                      </div>
                      <div className="h-6 w-[1px] bg-slate-200" />
                      <div>
                        <span className="text-slate-400 block text-[10px]">From</span>
                        <span className="font-bold text-slate-800">02/07/2026</span>
                      </div>
                      <div className="h-6 w-[1px] bg-slate-200" />
                      <div>
                        <span className="text-slate-400 block text-[10px]">To</span>
                        <span className="font-bold text-slate-800">10/07/2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    {/* Chart Area */}
                    <div className="md:col-span-7 flex min-h-[260px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/50 p-6 text-slate-400 font-semibold">
                      TWCC Performance Chart Placeholder
                    </div>

                    {/* Performance Indicators */}
                    <div className="md:col-span-5 flex flex-col gap-4">
                      {/* Cumulative */}
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Cumulative</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[11px] text-slate-400 font-medium">Fund TWRR</p>
                            <p className="text-lg font-bold text-slate-900">0.08%</p>
                          </div>
                          <div>
                            <p className="text-[11px] text-slate-400 font-medium">Benchmarks TWRR</p>
                            <p className="text-lg font-bold text-slate-900">0.03%</p>
                          </div>
                        </div>
                      </div>

                      {/* Annualized */}
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
                        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Annualized</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[11px] text-slate-400 font-medium">Fund TWRR</p>
                            <p className="text-lg font-bold text-slate-900">0.08%</p>
                          </div>
                          <div>
                            <p className="text-[11px] text-slate-400 font-medium">Benchmarks TWRR</p>
                            <p className="text-lg font-bold text-slate-900">0.03%</p>
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
                  {/* View Mode Toggle Switch */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-700">
                      {valueToggle === "current" ? "Current Investment" : "Since Inception"}
                    </span>
                    <button
                      onClick={() => setValueToggle(valueToggle === "current" ? "inception" : "current")}
                      className={`relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors ${
                        valueToggle === "inception" ? "bg-emerald-500" : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          valueToggle === "inception" ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {valueToggle === "current" ? (
                    /* Current Investment View */
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 space-y-6">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Value [MV]</p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-3xl font-extrabold text-slate-900">MYR 100.15</span>
                            <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                              +MYR 0.15 (+0.15%)
                            </span>
                          </div>
                        </div>

                        {/* Pending Box */}
                        <div className="rounded-xl border border-red-200 bg-red-50/80 p-3 min-w-[200px]">
                          <p className="text-xs font-bold text-red-800">Pending Transactions</p>
                          <p className="text-lg font-extrabold text-red-900">MYR 00.00</p>
                          <p className="text-[10px] text-red-600 font-medium">No Pending Transactions</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200/60 md:grid-cols-4">
                        <div>
                          <p className="text-xs font-semibold text-slate-400">Invested Amount</p>
                          <p className="text-base font-bold text-slate-900 mt-0.5">MYR 100.100</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-400">Unit Holdings</p>
                          <p className="text-base font-bold text-slate-900 mt-0.5">MYR 100.100</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-400">Unit Price as of 16/07/2026</p>
                          <p className="text-base font-bold text-slate-900 mt-0.5">MYR 100.100</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-400">Average Cost of Unit</p>
                          <p className="text-base font-bold text-slate-900 mt-0.5">MYR 100.100</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Since Inception View */
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Net Investment</p>
                          <p className="text-3xl font-extrabold text-slate-900 mt-1">MYR 100.15</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Return</p>
                          <p className="text-3xl font-extrabold text-slate-900 mt-1">MYR 100.15</p>
                        </div>
                      </div>

                      <div className="rounded-xl bg-white p-4 border border-slate-200/80 text-xs text-slate-600 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 font-medium">
                          <span>Total Investment [I]: <strong>MYR 100.100</strong></span>
                          <span>-</span>
                          <span>Total Withdrawal [W]: <strong>MYR 100.100</strong></span>
                          <span>-</span>
                          <span>Distribution (Payout) [P]: <strong>MYR 100.100</strong></span>
                          <span>+</span>
                          <span>Distribution (Reinvested) [R]: <strong>MYR 100.100</strong></span>
                          <span>=</span>
                          <span className="font-bold text-slate-900">Total Net Investment [NI]</span>
                        </div>
                        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 font-medium">
                          <span>Current Market Value [MV]: <strong>MYR 100.100</strong></span>
                          <span>-</span>
                          <span>Total Net Investment [NI]: <strong>MYR 100.100</strong></span>
                          <span>=</span>
                          <span className="font-bold text-slate-900">Total Return [RTN]</span>
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
                    <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer">
                      <Filter className="h-3.5 w-3.5" />
                      <span>Filter by type and duration</span>
                    </button>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 min-h-[260px]">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">July 2026</p>
                    
                    <div className="max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">Top Up</p>
                          <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                            <CheckCircle2 className="h-3 w-3" /> APPROVED
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-400">03/07 | 09:33:50 AM</p>
                        <p className="text-sm font-bold text-slate-900">100.00 MYR</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ACCOUNT TAB */}
              {activeTab === "Account" && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
                  <div className="mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Name</p>
                    <p className="text-2xl font-extrabold text-slate-900 mt-1">NAME OF ACC USER</p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-6 border-t border-slate-200">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                      <p className="text-base font-bold text-slate-800 mt-1">email@email.com</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Number</p>
                      <p className="text-base font-bold text-slate-800 mt-1">+60123456789</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Distribution Instruction</p>
                      <p className="text-base font-bold text-slate-800 mt-1">Investment</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Operation Instruction</p>
                      <p className="text-base font-bold text-slate-800 mt-1">Principle Only</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Action Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100 pt-6">
              <button 
                onClick={() => handleAction("cooling-off")}
                className="cursor-pointer rounded-xl bg-slate-200/70 px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-300 transition active:scale-95"
              >
                Cooling Off
              </button>
              <button 
                onClick={() => handleAction("switching")}
                className="cursor-pointer rounded-xl bg-slate-200/70 px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-300 transition active:scale-95"
              >
                Switch
              </button>
              <button 
                onClick={() => handleAction("redemption")}
                className="cursor-pointer rounded-xl bg-slate-200/70 px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-300 transition active:scale-95"
              >
                Redeem
              </button>
              <button 
                onClick={() => handleAction("top-up")}
                className="cursor-pointer rounded-xl bg-[#22C55E] px-8 py-3 text-xs font-bold text-white shadow-md hover:bg-[#1ea850] transition active:scale-95"
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
