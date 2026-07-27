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
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto px-4 sm:px-0">
      {/* Header Section */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#1F5C2E]">
          Setting up your investor profile
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Please review your information below before submitting.
        </p>
      </div>

      {/* Summary Container */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 md:p-8 shadow-xs space-y-6">
        <div className="space-y-3 sm:space-y-4 divide-y divide-slate-100 text-sm">
          {/* Age */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2 gap-1 sm:gap-4">
            <span className="text-slate-500 sm:text-slate-600 font-medium text-xs sm:text-sm">
              Age
            </span>
            <span className="font-bold text-slate-900 text-sm sm:text-base">
              {formData.age || "Below 30"}
            </span>
          </div>

          {/* Investment Objective */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-3 gap-1 sm:gap-4">
            <span className="text-slate-500 sm:text-slate-600 font-medium text-xs sm:text-sm">
              Investment objective
            </span>
            <span className="font-bold text-slate-900 text-sm sm:text-base">
              {formData.investmentObjective || "Capital Preservation"}
            </span>
          </div>

          {/* Intends to invest for */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-3 gap-1 sm:gap-4">
            <span className="text-slate-500 sm:text-slate-600 font-medium text-xs sm:text-sm">
              Intends to invest for
            </span>
            <span className="font-bold text-slate-900 text-sm sm:text-base">
              {formData.investmentHorizon || "Less than 1 year"}
            </span>
          </div>

          {/* Annual income */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-3 gap-1 sm:gap-4">
            <span className="text-slate-500 sm:text-slate-600 font-medium text-xs sm:text-sm">
              Annual income
            </span>
            <span className="font-bold text-slate-900 text-sm sm:text-base">
              {formData.income || "RM 20,001 to RM 50,000"}
            </span>
          </div>

          {/* Risk profile */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-3 gap-1 sm:gap-4">
            <span className="text-slate-500 sm:text-slate-600 font-medium text-xs sm:text-sm">
              Risk profile
            </span>
            <span className="font-bold text-slate-900 text-sm sm:text-base">
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
          <div className="grid grid-cols-3 text-center py-3.5 text-sm sm:text-base font-bold text-slate-900 divide-x divide-slate-200 bg-white">
            <div>{returnRange.low}</div>
            <div>{returnRange.avg}</div>
            <div>{returnRange.high}</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end pt-2 sm:pt-4">
        <button
          type="button"
          onClick={onComplete}
          className="w-full sm:w-auto bg-[#22C55E] hover:bg-emerald-600 text-white font-bold px-8 sm:px-12 py-3.5 sm:py-3 rounded-xl transition cursor-pointer shadow-sm text-center"
        >
          Complete
        </button>
      </div>
    </div>
  );
}