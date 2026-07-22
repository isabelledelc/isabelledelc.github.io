import type { KYCFormData } from "../KYConboarding";

interface Props {
  formData: KYCFormData;
  onComplete: () => void;
}

export default function Summary({ formData, onComplete }: Props) {
  // Map return range percentages based on chosen risk profile
  const getReturnRange = () => {
    switch (formData.riskProfile) {
      case "Conservative":
        return { low: "0%", avg: "5%", high: "10%" };
      case "Moderate":
        return { low: "-5%", avg: "7%", high: "20%" };
      case "High":
      default:
        return { low: "-15%", avg: "12%", high: "40%" };
    }
  };

  const returnRange = getReturnRange();

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-[#1F5C2E]">
          Setting up your investor profile
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Please review your information below before submitting.
        </p>
      </div>

      {/* Summary Container */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="space-y-4 divide-y divide-slate-100 text-sm">
          {/* Age */}
          <div className="flex justify-between items-center pt-2">
            <span className="text-slate-600 font-medium">Age</span>
            <span className="font-bold text-slate-900">
              {formData.age || "Below 30"}
            </span>
          </div>

          {/* Investment Objective */}
          <div className="flex justify-between items-center pt-3">
            <span className="text-slate-600 font-medium">
              Investment objective
            </span>
            <span className="font-bold text-slate-900">
              {formData.investmentObjective || "Capital Preservation"}
            </span>
          </div>

          {/* Intends to invest for */}
          <div className="flex justify-between items-center pt-3">
            <span className="text-slate-600 font-medium">
              Intends to invest for
            </span>
            <span className="font-bold text-slate-900">
              {formData.investmentHorizon || "Less than 1 year"}
            </span>
          </div>

          {/* Annual income */}
          <div className="flex justify-between items-center pt-3">
            <span className="text-slate-600 font-medium">Annual income</span>
            <span className="font-bold text-slate-900">
              {formData.income || "RM 20,001 to RM 50,000"}
            </span>
          </div>

          {/* Risk profile */}
          <div className="flex justify-between items-center pt-3">
            <span className="text-slate-600 font-medium">Risk profile</span>
            <span className="font-bold text-slate-900">
              {formData.riskProfile === "High"
                ? "Aggressive"
                : formData.riskProfile || "Aggressive"}
            </span>
          </div>
        </div>

        {/* Expected Return Range Table */}
        <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-50/50">
          <div className="grid grid-cols-3 bg-slate-100 text-center py-2.5 text-xs font-bold text-slate-700 divide-x divide-slate-200">
            <div>Low</div>
            <div>Average</div>
            <div>High</div>
          </div>
          <div className="grid grid-cols-3 text-center py-3.5 text-sm font-bold text-slate-900 divide-x divide-slate-200 bg-white">
            <div>{returnRange.low}</div>
            <div>{returnRange.avg}</div>
            <div>{returnRange.high}</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={onComplete}
          className="bg-[#22C55E] hover:bg-emerald-600 text-white font-bold px-12 py-3 rounded-xl transition cursor-pointer shadow-sm"
        >
          Complete
        </button>
      </div>
    </div>
  );
}