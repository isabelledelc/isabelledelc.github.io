import { useState } from 'react';
import Header from "../../components/shared/header";
import { ArrowLeft, Wallet } from "lucide-react";

export default function Redemption() {
  const [accountNum, setAccountNum] = useState('7721092384');
  const [selectedFund, setSelectedFund] = useState('OPUS Income Plus Fund');

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div 
      className="min-h-screen w-full transition-colors duration-300 font-sans"
      style={{ background: "var(--bg-page)" }}
    >
      <Header />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <div 
          className="rounded-2xl shadow-lg border overflow-hidden backdrop-blur-md transition-all duration-300"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-app)",
            color: "var(--text-main)",
          }}
        >
          {/* Header Bar */}
          <div 
            className="p-5 sm:p-6 border-b flex items-center gap-4 transition-colors"
            style={{
              backgroundColor: "var(--bg-container)",
              borderColor: "var(--border-app)",
            }}
          >
            <button 
              onClick={handleBack}
              className="p-2 rounded-xl transition-colors cursor-pointer"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg-btn-secondary)";
                e.currentTarget.style.color = "var(--text-main)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
              title="Go Back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2.5">
              <Wallet 
                className="h-5 w-5" 
                style={{ color: "var(--color-primary)" }} 
              />
              <h1 
                className="text-xl font-bold font-heading"
                style={{ color: "var(--text-heading)" }}
              >
                Redemption
              </h1>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
            
            {/* Left Column */}
            <div className="space-y-4">
              <div 
                className="flex flex-col gap-1.5 pb-3 border-b"
                style={{ borderColor: "var(--border-app)" }}
              >
                <label 
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "var(--text-muted)" }}
                >
                  Account Number
                </label>
                <select 
                  value={accountNum} 
                  onChange={(e) => setAccountNum(e.target.value)}
                  className="w-full border rounded-xl px-3 py-2.5 font-medium outline-none transition-colors cursor-pointer text-sm"
                  style={{
                    backgroundColor: "var(--bg-container)",
                    borderColor: "var(--border-interactive)",
                    color: "var(--text-main)",
                  }}
                >
                  <option value="7721092384">7721-0923-84</option>
                  <option value="3322110099">3322-1100-99</option>
                </select>
              </div>

              <div 
                className="flex justify-between items-center py-2.5 border-b"
                style={{ borderColor: "var(--border-app)" }}
              >
                <span className="font-medium" style={{ color: "var(--text-muted)" }}>
                  Account Name
                </span>
                <span className="font-semibold" style={{ color: "var(--text-heading)" }}>
                  David Miller
                </span>
              </div>

              <div 
                className="flex flex-col gap-1.5 pb-3 border-b"
                style={{ borderColor: "var(--border-app)" }}
              >
                <label 
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "var(--text-muted)" }}
                >
                  Fund
                </label>
                <select 
                  value={selectedFund} 
                  onChange={(e) => setSelectedFund(e.target.value)}
                  className="w-full border rounded-xl px-3 py-2.5 font-medium outline-none transition-colors cursor-pointer text-sm"
                  style={{
                    backgroundColor: "var(--bg-container)",
                    borderColor: "var(--border-interactive)",
                    color: "var(--text-main)",
                  }}
                >
                  <option>OPUS Income Plus Fund</option>
                  <option>OPUS Cash Extra Fund</option>
                </select>
              </div>

              <div 
                className="flex flex-col gap-1 py-2.5 border-b"
                style={{ borderColor: "var(--border-app)" }}
              >
                <span className="font-medium" style={{ color: "var(--text-muted)" }}>
                  Unit Price Date
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  T Days (Before 4pm every business day)
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div 
                className="flex justify-between items-center py-2.5 border-b"
                style={{ borderColor: "var(--border-app)" }}
              >
                <span className="font-medium" style={{ color: "var(--text-muted)" }}>
                  Goal
                </span>
                <span className="uppercase font-semibold" style={{ color: "var(--text-heading)" }}>
                  EDUCATION FUND
                </span>
              </div>

              <div 
                className="flex justify-between items-center py-2.5 border-b"
                style={{ borderColor: "var(--border-app)" }}
              >
                <span className="font-medium" style={{ color: "var(--text-muted)" }}>
                  Available Unit
                </span>
                <span 
                  className="font-bold text-base font-mono-data"
                  style={{ color: "var(--color-primary)" }}
                >
                  12,450.8800
                </span>
              </div>

              <div 
                className="flex justify-between items-center py-2.5 border-b"
                style={{ borderColor: "var(--border-app)" }}
              >
                <div>
                  <span className="font-medium block" style={{ color: "var(--text-muted)" }}>
                    Unit Price as at
                  </span>
                  <span className="text-xs font-mono-data" style={{ color: "var(--text-muted)" }}>
                    22/07/2026
                  </span>
                </div>
                <span className="font-semibold font-mono-data" style={{ color: "var(--text-heading)" }}>
                  MYR 1.0520
                </span>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div 
            className="p-6 border-t flex justify-center transition-colors"
            style={{
              backgroundColor: "var(--bg-container)",
              borderColor: "var(--border-app)",
            }}
          >
            <button 
              className="w-full sm:w-auto text-white font-semibold py-3 px-16 rounded-xl text-base transition-all shadow-md active:scale-95 cursor-pointer"
              style={{ backgroundColor: "var(--color-primary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-primary-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-primary)";
              }}
            >
              Redeem Units
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}