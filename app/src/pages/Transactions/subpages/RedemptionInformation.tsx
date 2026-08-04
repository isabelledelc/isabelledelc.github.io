import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/shared/header";
import { ArrowLeft, Wallet } from "lucide-react";

export default function RedemptionInformation() {
  const navigate = useNavigate();

  const [redemptionType, setRedemptionType] = useState<"Full" | "Partial">("Partial");
  const [amountToRedeem, setAmountToRedeem] = useState("100.00");

  const handleBack = () => {
    navigate(-1);
  };

  const handleRedeemSubmit = () => {
    // Navigate to confirmation or handle API submit logic
    // navigate("/transactions/transaction-confirmation");
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
              type="button"
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
                Redemption Information
              </h1>
            </div>
          </div>

          {/* Form / Information Content */}
          <div className="p-6 sm:p-8 space-y-6 text-sm">
            
            {/* Top Grid: Redemption Type & Amount Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-start">
              
              {/* Left Side: Redemption Type */}
              <div className="space-y-2">
                <label
                  className="block font-medium"
                  style={{ color: "var(--text-heading)" }}
                >
                  Redemption Type
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setRedemptionType("Full")}
                    className={`px-6 py-2 rounded-full font-semibold border text-xs sm:text-sm transition-all cursor-pointer ${
                      redemptionType === "Full"
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold"
                        : "border-slate-300 text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    Full
                  </button>
                  <button
                    type="button"
                    onClick={() => setRedemptionType("Partial")}
                    className={`px-6 py-2 rounded-full font-semibold border text-xs sm:text-sm transition-all cursor-pointer ${
                      redemptionType === "Partial"
                        ? "border-emerald-600 bg-emerald-600 text-white font-bold"
                        : "border-slate-300 text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    Partial
                  </button>
                </div>
              </div>

              {/* Right Side: Amount to Redeem */}
              <div className="space-y-1.5">
                <label
                  className="block font-semibold"
                  style={{ color: "var(--text-heading)" }}
                >
                  Amount to redeem
                </label>
                <div className="relative">
                  <input
                    type="number"
                    disabled={redemptionType === "Full"}
                    value={redemptionType === "Full" ? "4729.45" : amountToRedeem}
                    onChange={(e) => setAmountToRedeem(e.target.value)}
                    className="w-full border-2 border-emerald-500 rounded-2xl px-4 py-2 font-medium outline-none transition-colors text-sm shadow-xs disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "var(--bg-container)",
                      color: "var(--text-main)",
                    }}
                  />
                </div>
                <p className="text-xs text-red-500 font-medium pt-0.5">
                  Minimum Redemption Unit is 100.0000
                </p>
              </div>

            </div>

            {/* Middle Grid: Indicative & Balance Info */}
            <div className="space-y-4 pt-2">
              <div
                className="flex justify-between items-start py-3 border-b"
                style={{ borderColor: "var(--border-app)" }}
              >
                <div className="max-w-md pr-4">
                  <span
                    className="font-semibold block text-sm"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Indicative switching amount based on 22/07/2026 unit price
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    (indicative switching amount may vary with daily price changes)
                  </span>
                </div>
                <span
                  className="font-bold text-base font-mono-data shrink-0"
                  style={{ color: "var(--text-heading)" }}
                >
                  MYR 105.59
                </span>
              </div>

              <div
                className="flex justify-between items-center py-3 border-b"
                style={{ borderColor: "var(--border-app)" }}
              >
                <span
                  className="font-semibold text-sm"
                  style={{ color: "var(--text-heading)" }}
                >
                  Unit Balance
                </span>
                <span
                  className="font-bold text-base font-mono-data"
                  style={{ color: "var(--text-heading)" }}
                >
                  4,729.4507
                </span>
              </div>
            </div>

            {/* Note Box */}
            <div
              className="rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed border transition-colors"
              style={{
                backgroundColor: "var(--bg-container)",
                borderColor: "var(--border-app)",
                color: "var(--text-main)",
              }}
            >
              <p className="font-bold mb-1" style={{ color: "var(--text-heading)" }}>
                Note:
              </p>
              <p style={{ color: "var(--text-muted)" }}>
                Any redemption equivalent to or more than RM100,000 (
                <span className="italic">based on latest price</span>), kindly
                expect a call back redemption from Opus Asset Management Sdn Bhd.
              </p>
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
              type="button"
              onClick={handleRedeemSubmit}
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