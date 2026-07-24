import { Calendar } from "lucide-react";
import type { KYCFormData } from "../KYConboarding";
import { useState } from "react";

interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

type IdentityFormData = KYCFormData & {
  idType?: string;
  idNumber?: string;
  passportNumber?: string;
};

export default function IdentityDetails({ formData, updateFormData, onNext }: Props) {
  const [error, setError] = useState("");
  const data = formData as IdentityFormData;

  const handleNext = () => {
    if (!data.idType) {
      setError("Please select an ID type.");
      return;
    }

    if (data.idType === "Passport") {
      if (!data.passportNumber?.trim()) {
        setError("Please enter your passport number.");
        return;
      }
    } else {
      if (!data.idNumber?.trim()) {
        setError("Please enter your NRIC number.");
        return;
      }
    }

    setError("");
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#1F5C2E]">Identity Details</h2>
        <p className="text-sm text-slate-600 mt-1">Please choose your ID type and enter the details.</p>
      </div>

      <div className="rounded-3xl border border-emerald-100 bg-[#E9F7E5]/50 p-6 space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">ID Type</label>
          <select
            value={data.idType ?? ""}
            onChange={(e) => {
              updateFormData({ idType: e.target.value } as Partial<KYCFormData>);
              setError("");
            }}
            className="w-full bg-white border border-emerald-500 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="">Select ID Type</option>
            <option value="NRIC">NRIC</option>
            <option value="Passport">Passport</option>
          </select>
        </div>

        {data.idType === "Passport" ? (
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Passport Number</label>
            <input
              value={data.passportNumber ?? ""}
              onChange={(e) => updateFormData({ passportNumber: e.target.value } as Partial<KYCFormData>)}
              className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none"
              placeholder="Enter passport number"
            />
          </div>
        ) : (
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">NRIC Number</label>
            <input
              value={data.idNumber ?? ""}
              onChange={(e) => updateFormData({ idNumber: e.target.value } as Partial<KYCFormData>)}
              className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none"
              placeholder="Enter NRIC number"
            />
          </div>
        )}

        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          className="bg-[#22C55E] hover:bg-emerald-600 text-white font-bold px-12 py-3 rounded-xl transition cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}