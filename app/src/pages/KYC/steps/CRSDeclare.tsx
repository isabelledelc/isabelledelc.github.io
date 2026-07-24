import type { KYCFormData } from "../KYConboarding";

interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

export default function CRSDeclare({ formData, updateFormData, onNext }: Props) {
  const isFormValid = Boolean(formData.crsStatus);

  const crsOptions = [
    {
      id: "Malaysia tax resident only",
      label: "Malaysia tax resident only",
    },
    {
      id: "Malaysia and Non-Malaysia tax resident",
      label: "Malaysia and Non-Malaysia tax resident",
    },
    {
      id: "Non-Malaysia tax resident",
      label: "Non-Malaysia tax resident",
    },
  ];

  const handleNext = () => {
    if (isFormValid) {
      onNext(); // Advances to Step 11: Summary
    }
  };

  return (
    <div className="relative space-y-8 min-h-[420px] flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-[#1F5C2E] mb-6">CRS Declaration *</h2>

        {/* Card Options Container */}
        <div className="bg-[#EAF6EC] rounded-2xl p-8 sm:p-12 space-y-6">
          <p className="text-center font-bold text-slate-900 text-base sm:text-lg mb-8">
            I declare I am:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {crsOptions.map((option) => {
              const isSelected = formData.crsStatus === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => updateFormData({ crsStatus: option.id })}
                  className={`p-6 rounded-xl border transition text-center font-semibold text-xs sm:text-sm cursor-pointer shadow-xs bg-white ${
                    isSelected
                      ? "border-2 border-[#22C55E] text-slate-900 shadow-md ring-1 ring-emerald-500/20"
                      : "border-slate-300 text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={handleNext}
          disabled={!isFormValid}
          className={`font-bold px-12 py-3 rounded-xl transition ${
            isFormValid
              ? "bg-[#22C55E] hover:bg-emerald-600 text-white cursor-pointer shadow-md"
              : "bg-slate-300 text-slate-500 cursor-not-allowed opacity-70"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}