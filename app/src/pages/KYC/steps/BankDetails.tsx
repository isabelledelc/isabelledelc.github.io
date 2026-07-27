import type { KYCFormData } from "../KYConboarding";

interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

export default function BankDetails({ formData, updateFormData, onNext }: Props) {
  // Check if all required bank details are filled in
  const isFormValid =
    Boolean(formData.distributionInstruction) &&
    Boolean(formData.bankName) &&
    Boolean(formData.accountNumber?.trim()) &&
    Boolean(formData.payeeName?.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 px-4 sm:px-0">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#1F5C2E]">Bank Details</h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Setup distribution payouts and registered bank account details.
        </p>
      </div>

      <div className="bg-[#E9F7E5]/50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-emerald-100 space-y-6">
        {/* Distribution Instruction Toggle */}
        <div className="text-center">
          <p className="font-bold text-slate-900 text-sm sm:text-base mb-3 sm:mb-4">
            Distribution Instruction *
          </p>
          <div className="grid grid-cols-2 max-w-xs mx-auto gap-3 sm:flex sm:justify-center sm:max-w-none">
            <button
              type="button"
              onClick={() => updateFormData({ distributionInstruction: "Reinvest" })}
              className={`w-full sm:w-auto sm:px-12 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer text-center ${
                formData.distributionInstruction === "Reinvest"
                  ? "bg-[#22C55E] text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
              }`}
            >
              Reinvest
            </button>
            <button
              type="button"
              onClick={() => updateFormData({ distributionInstruction: "Payout" })}
              className={`w-full sm:w-auto sm:px-12 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer text-center ${
                formData.distributionInstruction === "Payout"
                  ? "bg-[#22C55E] text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
              }`}
            >
              Payout
            </button>
          </div>
        </div>

        {/* Input Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
          {/* Name of Bank */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Name of Bank *</label>
            <select
              value={formData.bankName || ""}
              onChange={(e) => updateFormData({ bankName: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              required
            >
              <option value="" disabled hidden>
                Please Select
              </option>
              <option value="Maybank">Maybank</option>
              <option value="CIMB Bank">CIMB Bank</option>
              <option value="Public Bank">Public Bank</option>
              <option value="RHB Bank">RHB Bank</option>
            </select>
          </div>

          {/* Bank Account Number */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Bank Account Number *</label>
            <input
              type="text"
              value={formData.accountNumber || ""}
              placeholder="Bank acc number..."
              onChange={(e) => updateFormData({ accountNumber: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <p className="text-[10px] sm:text-xs text-slate-500 mt-1">
              (Please ensure the bank account number is correct)
            </p>
          </div>

          {/* Payee Name */}
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-bold text-slate-700">Payee Name *</label>
            <input
              type="text"
              value={formData.payeeName || ""}
              placeholder="Payee name..."
              onChange={(e) => updateFormData({ payeeName: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <p className="text-[10px] sm:text-xs text-slate-500 mt-1">
              (Must be a bank account under the Client's name <span className="underline font-bold">only</span>. No joint accounts)
            </p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-2 sm:pt-4">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full sm:w-auto font-bold px-12 py-3.5 sm:py-3 rounded-xl transition text-center ${
            isFormValid
              ? "bg-[#22C55E] hover:bg-emerald-600 text-white cursor-pointer shadow-sm"
              : "bg-slate-300 text-slate-500 cursor-not-allowed opacity-70"
          }`}
        >
          Next
        </button>
      </div>
    </form>
  );
}