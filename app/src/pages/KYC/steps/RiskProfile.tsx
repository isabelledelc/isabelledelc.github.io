import type { KYCFormData } from "../KYConboarding";

interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

export default function RiskProfile({ formData, updateFormData, onNext }: Props) {
  const isFormValid = Boolean(formData.riskProfile);

  const profiles = [
    {
      type: "Conservative" as const,
      desc: "I have a low risk appetite and this is the range of returns that I am willing to tolerate:",
      min: "0%",
      avg: "5%",
      max: "10%",
    },
    {
      type: "Moderate" as const,
      desc: "I have an average risk appetite and this is the range of returns that I am willing to tolerate:",
      min: "-5%",
      avg: "7%",
      max: "20%",
    },
    {
      type: "High" as const,
      desc: "I have a high risk appetite and this is the range of returns that I am willing to tolerate:",
      min: "-15%",
      avg: "12%",
      max: "40%",
    },
  ];

  const handleNext = () => {
    if (isFormValid) {
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1F5C2E]">What is your risk profile? *</h2>
        <p className="text-sm text-slate-600 mt-1">
          Tap a level to see the return range that comes with it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#E9F7E5]/50 p-6 rounded-3xl border border-emerald-100 min-h-[300px]">
        {profiles.map((p) => {
          const isSelected = formData.riskProfile === p.type;
          return (
            <div
              key={p.type}
              onClick={() => updateFormData({ riskProfile: p.type })}
              className={`p-6 rounded-2xl bg-white border cursor-pointer transition shadow-xs flex flex-col justify-between ${
                isSelected
                  ? "border-emerald-500 ring-2 ring-emerald-500/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-base">{p.type}</h3>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? "border-emerald-500 bg-emerald-500" : "border-slate-300"
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{p.desc}</p>
              </div>

              {isSelected && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-[10px] font-bold text-slate-600 mb-3">Expected return range</p>
                  <div className="relative w-full h-2 bg-emerald-200 rounded-full mb-2">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-xs" />
                  </div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-700">
                    <span>
                      {p.min}{" "}
                      <span className="block text-[9px] font-normal text-slate-400">Low</span>
                    </span>
                    <span className="text-emerald-600">
                      {p.avg}{" "}
                      <span className="block text-[9px] font-normal text-slate-400">Average</span>
                    </span>
                    <span>
                      {p.max}{" "}
                      <span className="block text-[9px] font-normal text-slate-400">High</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-4">
        <button
          type="button"
          disabled={!isFormValid}
          onClick={handleNext}
          className={`font-bold px-12 py-3 rounded-xl transition ${
            isFormValid
              ? "bg-[#22C55E] hover:bg-emerald-600 text-white cursor-pointer"
              : "bg-slate-300 text-slate-500 cursor-not-allowed opacity-70"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}