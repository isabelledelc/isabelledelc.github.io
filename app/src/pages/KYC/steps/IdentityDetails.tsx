import { Calendar } from "lucide-react";
import type { KYCFormData } from "../KYConboarding";


interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

export default function IdentityDetails({ formData, updateFormData, onNext }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1F5C2E]">Identity Details</h2>
        <p className="text-sm text-slate-600 mt-1">
          Confirm or enter your identification details as displayed on your ID card.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#E9F7E5]/50 p-6 rounded-3xl border border-emerald-100">
        {/* Title Selection */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Title</label>
          <select
            value={formData.title}
            onChange={(e) => updateFormData({ title: e.target.value })}
            className="w-full bg-white border border-emerald-500 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
        </div>

        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Name as per NRIC / Passport</label>
          <input
            type="text"
            value={formData.fullName}
            placeholder="Name"
            onChange={(e) => updateFormData({ fullName: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* ID Type */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">ID Type</label>
          <select
            value={formData.idNumberType}
            onChange={(e) => updateFormData({ idNumberType: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="NRIC/Passport">NRIC / Passport</option>
          </select>
        </div>

        {/* ID Number */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">ID Number</label>
          <input
            type="text"
            value={formData.idNumber}
            placeholder="ID number ..."
            onChange={(e) => updateFormData({ idNumber: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Date of Birth */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Date of Birth</label>
          <div className="relative">
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
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