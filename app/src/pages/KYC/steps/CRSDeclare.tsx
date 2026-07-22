import { useState } from "react";
import { X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { KYCFormData } from "../KYConboarding";

interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext?: () => void;
}

export default function CRSDeclare({ formData, updateFormData }: Props) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

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

  const handleComplete = () => {
    if (!formData.crsStatus) return;
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Navigate to home or dashboard after completing account creation
    navigate("/");
  };

  return (
    <div className="relative space-y-8 min-h-[420px] flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-[#1F5C2E] mb-6">CRS Declaration</h2>

        {/* Card Options Container */}
        <div className="bg-[#EAF6EC] rounded-2xl p-8 sm:p-12 space-y-6">
          <p className="text-center font-bold text-slate-900 text-base sm:text-lg mb-8">
            I declare i am :
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

      {/* Complete Button */}
      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={handleComplete}
          disabled={!formData.crsStatus}
          className={`font-bold px-12 py-3 rounded-xl transition ${
            formData.crsStatus
              ? "bg-[#22C55E] hover:bg-emerald-600 text-white cursor-pointer shadow-md"
              : "bg-slate-300 text-slate-500 cursor-not-allowed"
          }`}
        >
          Complete
        </button>
      </div>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="relative bg-white rounded-xl border-2 border-[#22C55E] p-8 sm:p-12 max-w-md w-full shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 transition p-1 cursor-pointer"
            >
              <X className="w-7 h-7 stroke-[2.5]" />
            </button>

            {/* Checkmark Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-[#22C55E] rounded-full flex items-center justify-center text-white shadow-lg">
                <Check className="w-12 h-12 stroke-[3]" />
              </div>
            </div>

            {/* Success Text */}
            <div className="space-y-2 pt-2">
              <h3 className="text-2xl font-black text-slate-900">Success !</h3>
              <p className="text-slate-700 font-medium text-base sm:text-lg">
                Your account has been created
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}