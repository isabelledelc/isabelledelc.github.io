import type { KYCFormData } from "../KYConboarding";

interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

export default function InvestorProfile({ formData, updateFormData, onNext }: Props) {
  // Check if all dropdown selections are filled in
  const isFormValid =
    Boolean(formData.age) &&
    Boolean(formData.investmentObjective) &&
    Boolean(formData.investmentHorizon) &&
    Boolean(formData.income);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1F5C2E]">Investor Profile</h2>
        <p className="text-sm text-slate-600 mt-1">
          These questions will allow us to personalize funds based on your risk appetite.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#E9F7E5]/50 p-6 rounded-3xl border border-emerald-100">
        {/* Age Dropdown */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Age *</label>
          <select
            value={formData.age || ""}
            onChange={(e) => updateFormData({ age: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            required
          >
            <option value="" disabled hidden>
              My age is between...
            </option>
            <option value="18-25">18 - 25 years old</option>
            <option value="26-35">26 - 35 years old</option>
            <option value="36-50">36 - 50 years old</option>
            <option value="51+">51+ years old</option>
          </select>
        </div>

        {/* Investment Objective Dropdown */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Investment Objective *</label>
          <select
            value={formData.investmentObjective || ""}
            onChange={(e) => updateFormData({ investmentObjective: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            required
          >
            <option value="" disabled hidden>
              My primary investment objective is...
            </option>
            <option value="Capital Preservation">Capital Preservation</option>
            <option value="Income Generation">Income Generation</option>
            <option value="Capital Growth">Capital Growth</option>
          </select>
        </div>

        {/* Investment Time Period Dropdown */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Investment Time Period *</label>
          <select
            value={formData.investmentHorizon || ""}
            onChange={(e) => updateFormData({ investmentHorizon: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            required
          >
            <option value="" disabled hidden>
              I tend to invest for...
            </option>
            <option value="Short Term (< 1 Year)">Short Term (&lt; 1 Year)</option>
            <option value="Medium Term (1 - 3 Years)">Medium Term (1 - 3 Years)</option>
            <option value="Long Term (> 3 Years)">Long Term (&gt; 3 Years)</option>
          </select>
        </div>

        {/* Income Dropdown */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Income *</label>
          <select
            value={formData.income || ""}
            onChange={(e) => updateFormData({ income: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            required
          >
            <option value="" disabled hidden>
              My annual income from all sources is...
            </option>
            <option value="Below MYR 48,000">Below MYR 48,000</option>
            <option value="MYR 48,001 - MYR 100,000">MYR 48,001 - MYR 100,000</option>
            <option value="MYR 100,001 - MYR 250,000">MYR 100,001 - MYR 250,000</option>
            <option value="Above MYR 250,000">Above MYR 250,000</option>
          </select>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`font-bold px-12 py-3 rounded-xl transition ${
            isFormValid
              ? "bg-[#22C55E] hover:bg-emerald-600 text-white cursor-pointer"
              : "bg-slate-300 text-slate-500 cursor-not-allowed opacity-70"
          }`}
        >
          Next
        </button>
      </div>
    </form>
  );
}