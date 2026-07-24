import { useState } from "react";
import { Info } from "lucide-react";
import type { KYCFormData } from "../KYConboarding";

interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

const nationalityOptions = [
  "Malaysian",
  "Singaporean",
  "Indonesian",
  "Chinese",
  "Indian",
  "British",
  "Australian",
  "American",
  "Japanese",
  "Korean",
  "Filipino",
  "Thai",
  "Vietnamese",
  "Other",
];

export default function PersonalDetails({ formData, updateFormData, onNext }: Props) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.nationality || !formData.gender || !formData.race || !formData.isRelatedToOpus) {
      setError("Please complete all fields before moving to the next step.");
      return;
    }

    setError("");
    onNext();
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1F5C2E]">Personal Details</h2>
        <p className="text-sm text-slate-600 mt-1">
          Please provide your general personal profile information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#E9F7E5]/50 p-6 rounded-3xl border border-emerald-100">
        {/* Nationality */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Nationality</label>
          <select
            value={formData.nationality}
            onChange={(e) => {
              updateFormData({ nationality: e.target.value });
              setError("");
            }}
            className="w-full bg-white border border-emerald-500 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="">Select nationality</option>
            {nationalityOptions.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Gender */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Gender</label>
          <select
            value={formData.gender}
            onChange={(e) => {
              updateFormData({ gender: e.target.value });
              setError("");
            }}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Rather not say">Rather not say</option>
          </select>
        </div>

        {/* Race */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Race</label>
          <select
            value={formData.race}
            onChange={(e) => {
              updateFormData({ race: e.target.value });
              setError("");
            }}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="">Select race</option>
            <option value="Malay">Malay (Bumiputera)</option>
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Related Party Check */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
            Are you related party to Opus <Info className="w-3.5 h-3.5 text-slate-400" />
          </label>
          <select
            value={formData.isRelatedToOpus}
            onChange={(e) => {
              updateFormData({ isRelatedToOpus: e.target.value });
              setError("");
            }}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
      </div>

      {error && (
        <p className="text-sm font-medium text-red-600">{error}</p>
      )}

      <div className="flex items-center justify-between pt-4">
        <p className="text-xs text-slate-500">
          Click <a href="#" className="underline font-bold text-emerald-600">here</a> to view Information Notice
        </p>
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