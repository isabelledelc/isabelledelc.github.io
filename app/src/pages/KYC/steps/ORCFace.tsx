import { UserCheck } from "lucide-react";
import type { KYCFormData } from "../KYConboarding";


interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

export default function ORCFace({ formData, updateFormData, onNext }: Props) {
  const handleSelfieUpload = (file: File | null) => {
    if (file) {
      const url = URL.createObjectURL(file);
      updateFormData({ faceImage: url });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1F5C2E]">Proof of identity</h2>
        <p className="text-sm text-slate-600 mt-1">
          To complete the profile, please upload a clear selfie photo to verify identity ownership.
        </p>
      </div>

      <div className="bg-[#E9F7E5]/50 p-6 rounded-3xl border border-emerald-100 text-center space-y-6">
        <p className="font-bold text-slate-800 text-base">
          Please make sure your face is clearly in the frame.
        </p>

        <div className="flex justify-center">
          <label className="relative flex flex-col items-center justify-center w-full max-w-lg h-64 bg-white border-2 border-dashed border-emerald-500 rounded-3xl cursor-pointer hover:bg-slate-50 transition overflow-hidden">
            {formData.faceImage ? (
              <img src={formData.faceImage} alt="Face Selfie" className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center text-slate-400">
                <UserCheck className="w-16 h-16 mb-2 stroke-[1.2]" />
                <span className="text-sm font-semibold text-slate-500">Click to capture selfie</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              capture="user"
              className="hidden"
              onChange={(e) => handleSelfieUpload(e.target.files?.[0] || null)}
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={onNext}
          className="bg-[#22C55E] hover:bg-emerald-600 text-white font-bold px-12 py-3 rounded-xl transition cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}