import type { KYCFormData } from "../KYConboarding";


interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

export default function EmploymentDetails({ formData, updateFormData, onNext }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1F5C2E]">Employment Details</h2>
        <p className="text-sm text-slate-600 mt-1">
          Tell us about your current employment background.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#E9F7E5]/50 p-6 rounded-3xl border border-emerald-100">
        {/* Employment Type */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Employment Type</label>
          <select
            value={formData.employmentType}
            onChange={(e) => updateFormData({ employmentType: e.target.value })}
            className="w-full bg-white border border-emerald-500 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="">Please Select</option>
            <option value="Employed">Employed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Student">Student</option>
            <option value="Retired">Retired</option>
          </select>
        </div>

        {/* Occupation */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Occupation</label>
          <select
            value={formData.occupation}
            onChange={(e) => updateFormData({ occupation: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="">Please Select</option>
            <option value="Executive / Manager">Executive / Manager</option>
            <option value="Professional">Professional</option>
            <option value="Business Owner">Business Owner</option>
          </select>
        </div>

        {/* Company Name */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Company/Organization/University Name</label>
          <input
            type="text"
            value={formData.companyName}
            placeholder="Company name"
            onChange={(e) => updateFormData({ companyName: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Industry */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Industry</label>
          <select
            value={formData.industry}
            onChange={(e) => updateFormData({ industry: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="">Please Select</option>
            <option value="Technology">Technology</option>
            <option value="Financial Services">Financial Services</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
          </select>
        </div>

        {/* Source of Wealth */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Source of Wealth</label>
          <select
            value={formData.sourceOfWealth}
            onChange={(e) => updateFormData({ sourceOfWealth: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none"
          >
            <option value="">Please Select</option>
            <option value="Salary">Salary</option>
            <option value="Savings / Investments">Savings / Investments</option>
            <option value="Business Profits">Business Profits</option>
            <option value="Inheritance">Inheritance</option>
          </select>
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