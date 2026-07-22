import { Camera } from "lucide-react";
import type { KYCFormData } from "../KYConboarding";


interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

export default function ORCIC({ formData, updateFormData, onNext }: Props) {
  const handleFileUpload = (field: "frontIdImage" | "backIdImage", file: File | null) => {
    if (file) {
      const url = URL.createObjectURL(file);
      updateFormData({ [field]: url });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1F5C2E]">Proof of identity</h2>
        <p className="text-sm text-slate-600 mt-1">
          To complete the profile, please upload a copy of your identity document.
        </p>
      </div>

      <div className="bg-[#E9F7E5]/50 p-6 rounded-3xl border border-emerald-100 text-center space-y-6">
        <p className="font-bold text-slate-800 text-base">Pick your identity type:</p>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => updateFormData({ idType: "IC" })}
            className={`px-10 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer ${
              formData.idType === "IC" ? "bg-[#22C55E] text-white shadow-md" : "bg-slate-400 text-white hover:bg-slate-500"
            }`}
          >
            IC
          </button>
          <button
            type="button"
            onClick={() => updateFormData({ idType: "Passport" })}
            className={`px-10 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer ${
              formData.idType === "Passport" ? "bg-[#22C55E] text-white shadow-md" : "bg-slate-400 text-white hover:bg-slate-500"
            }`}
          >
            Passport
          </button>
        </div>

        <p className="text-xs text-slate-600 font-medium">
          Please upload the <strong>front and back</strong> of the identity type selected.
        </p>

        {/* File Upload Dropzones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Front Image Dropzone */}
          <label className="relative flex flex-col items-center justify-center h-48 bg-white border-2 border-dashed border-emerald-500 rounded-3xl cursor-pointer hover:bg-slate-50 transition overflow-hidden">
            {formData.frontIdImage ? (
              <img src={formData.frontIdImage} alt="Front ID" className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center text-slate-400">
                <Camera className="w-10 h-10 mb-2 stroke-[1.5]" />
                <span className="font-extrabold text-lg text-slate-500">FRONT</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileUpload("frontIdImage", e.target.files?.[0] || null)}
            />
          </label>

          {/* Back Image Dropzone */}
          <label className="relative flex flex-col items-center justify-center h-48 bg-white border-2 border-dashed border-emerald-500 rounded-3xl cursor-pointer hover:bg-slate-50 transition overflow-hidden">
            {formData.backIdImage ? (
              <img src={formData.backIdImage} alt="Back ID" className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center text-slate-400">
                <Camera className="w-10 h-10 mb-2 stroke-[1.5]" />
                <span className="font-extrabold text-lg text-slate-500">BACK</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileUpload("backIdImage", e.target.files?.[0] || null)}
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