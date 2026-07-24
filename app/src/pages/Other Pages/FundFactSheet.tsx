import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, FileText, Download } from "lucide-react";
import Header from "../../components/shared/header";

export default function FundFactSheet() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"Objective" | "Fees" | "Documents">("Objective");

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/portfolio");
    }
  };

  const handleConfirm = () => {
    
    navigate("/funds/1");
  };

  return (
    <div className="min-h-screen w-full transition-colors duration-300 [background:var(--bg-page)] text-[var(--text-main)]">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        {/* Top Header Section */}
        <div className="mb-8 flex items-start gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-card)] text-[var(--text-heading)] border border-[var(--border-app)] hover:bg-[var(--bg-card-hover)] transition cursor-pointer shadow-xs"
            aria-label="Go Back"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-heading)] sm:text-4xl">
              Fund Factsheet
            </h1>
            <p className="mt-1 text-sm font-semibold text-[var(--text-muted)] tracking-wide">
              OPUS INCOME PLUS FUND / OPUS IPF
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* Left Column: Performance Chart Card */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-[var(--border-app)] bg-[var(--bg-container)] p-6 shadow-sm backdrop-blur-md">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[var(--text-heading)]">Performance</h2>
              
              {/* Chart Visual Container */}
              <div className="flex min-h-[320px] w-full flex-col items-center justify-center rounded-2xl border border-[var(--border-app)] bg-[var(--bg-card)] p-6 shadow-xs">
                {/* Title inside graph */}
                <div className="text-center mb-4">
                  <h3 className="text-sm font-extrabold text-[var(--text-heading)]">OPUS IPF</h3>
                  <p className="text-xs text-[var(--text-muted)] font-bold">vs</p>
                  <h3 className="text-sm font-extrabold text-[var(--text-heading)]">
                    Maybank 12-Month Fixed Deposit Rate
                  </h3>
                  <p className="mt-1 text-[10px] text-[var(--text-muted)]">Source: Bloomberg, Opus Asset Management Sdn Bhd</p>
                </div>

                {/* Simulated Chart View */}
                <div className="relative w-full h-48 flex items-end justify-between px-4 pb-4 border-b border-l border-[var(--border-app)]">
                  {/* SVG Lines for Graph */}
                  <svg className="absolute inset-0 h-full w-full overflow-visible p-4" viewBox="0 0 300 120" preserveAspectRatio="none">
                    {/* FD Benchmark Line (Red) */}
                    <path
                      d="M 0 100 Q 150 70 300 45"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="2.5"
                    />
                    {/* Fund Return Line (Green) */}
                    <path
                      d="M 0 100 Q 50 60, 100 70 T 200 30 T 300 15"
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="2.5"
                    />
                  </svg>

                  {/* Percentage Markers */}
                  <span className="absolute right-2 top-2 text-[10px] font-bold text-emerald-500">33.50%</span>
                  <span className="absolute right-2 top-10 text-[10px] font-bold text-red-500">20.60%</span>
                </div>

                {/* Chart Axis Labels */}
                <div className="mt-3 flex w-full justify-between text-[9px] font-semibold text-[var(--text-muted)] px-2">
                  <span>01 Jan 19</span>
                  <span>01 Jan 20</span>
                  <span>01 Jan 21</span>
                  <span>01 Jan 22</span>
                  <span>01 Jan 23</span>
                  <span>01 Jan 24</span>
                  <span>01 Jan 25</span>
                  <span>01 Jan 26</span>
                </div>

                {/* Legend */}
                <div className="mt-4 flex items-center gap-6 text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[var(--text-main)]">OPUS IPF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span className="text-[var(--text-main)]">Maybank 12-Month Fixed Deposit Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[var(--border-app)] bg-[var(--bg-container)] p-6 shadow-sm backdrop-blur-md">
            <div>
              {/* Tabs Navigation */}
              <div className="mb-6 flex border-b border-[var(--border-app)]">
                {(["Objective", "Fees", "Documents"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 pb-3 text-center text-sm font-bold transition cursor-pointer ${
                      activeTab === tab
                        ? "border-b-2 border-[var(--color-primary)] text-[var(--text-heading)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Dynamic Tab Contents */}
              <div className="min-h-[280px] rounded-2xl border border-[var(--border-app)] bg-[var(--bg-card)] p-5 shadow-xs">
                {activeTab === "Objective" && (
                  <div className="space-y-4 text-xs leading-relaxed text-[var(--text-main)]">
                    <p>
                      The fund seeks to achieve higher returns than Maybank 12-month fixed deposit rate over the medium to long term, while preserving capital* and providing an opportunity for income.
                    </p>
                    
                    <div className="pt-2">
                      <p className="font-bold text-[var(--text-heading)]">Note:</p>
                      <p className="mt-1 text-[var(--text-muted)]">
                        * Opus IPF is neither a capital guaranteed fund nor a capital protected fund.
                      </p>
                    </div>

                    <p className="pt-2 text-[var(--text-muted)]">
                      Any material change to the investment objective of the Fund will require Unit Holders approval.
                    </p>
                  </div>
                )}

                {activeTab === "Fees" && (
                  <div className="space-y-3 text-xs text-[var(--text-main)]">
                    <div className="flex justify-between border-b border-[var(--border-app)] pb-2">
                      <span className="font-semibold text-[var(--text-muted)]">Annual Management Fee</span>
                      <span className="font-bold text-[var(--text-heading)]">Up to 0.85% p.a.</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--border-app)] pb-2">
                      <span className="font-semibold text-[var(--text-muted)]">Annual Trustee Fee</span>
                      <span className="font-bold text-[var(--text-heading)]">0.025% p.a.</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--border-app)] pb-2">
                      <span className="font-semibold text-[var(--text-muted)]">Sales Charge</span>
                      <span className="font-bold text-[var(--text-heading)]">Nil</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="font-semibold text-[var(--text-muted)]">Redemption Fee</span>
                      <span className="font-bold text-[var(--text-heading)]">Nil</span>
                    </div>
                  </div>
                )}

                {activeTab === "Documents" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl border border-[var(--border-app)] bg-[var(--bg-container)] p-3 transition hover:border-[var(--color-primary)]">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-[var(--color-primary)]" />
                        <div>
                          <p className="text-xs font-bold text-[var(--text-heading)]">Product Highlights Sheet</p>
                          <p className="text-[10px] text-[var(--text-muted)]">PDF • 1.2 MB</p>
                        </div>
                      </div>
                      <button type="button" className="text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-[var(--border-app)] bg-[var(--bg-container)] p-3 transition hover:border-[var(--color-primary)]">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-[var(--color-primary)]" />
                        <div>
                          <p className="text-xs font-bold text-[var(--text-heading)]">Prospectus Document</p>
                          <p className="text-[10px] text-[var(--text-muted)]">PDF • 3.4 MB</p>
                        </div>
                      </div>
                      <button type="button" className="text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Confirm Action Button */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full max-w-sm cursor-pointer rounded-2xl bg-[var(--color-primary)] py-3.5 text-base font-bold text-white shadow-md hover:bg-[var(--color-primary-hover)] transition active:scale-[0.99]"
          >
            Confirm
          </button>
        </div>

      </main>
    </div>
  );
}