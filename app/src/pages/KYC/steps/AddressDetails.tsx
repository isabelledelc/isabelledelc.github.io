import type { KYCFormData } from "../KYConboarding";

interface Props {
  formData: KYCFormData;
  updateFormData: (data: Partial<KYCFormData>) => void;
  onNext: () => void;
}

export default function AddressDetails({ formData, updateFormData, onNext }: Props) {
  // Check if all fields are filled in
  const isFormValid =
    Boolean(formData.address?.trim()) &&
    Boolean(formData.postcode?.trim()) &&
    Boolean(formData.town?.trim()) &&
    Boolean(formData.state) &&
    Boolean(formData.country);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1F5C2E]">Address Details</h2>
        <p className="text-sm text-slate-600 mt-1">
          Provide your current residential address details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#E9F7E5]/50 p-6 rounded-3xl border border-emerald-100">
        {/* Address textarea */}
        <div className="md:col-span-2 space-y-1">
          <label className="text-xs font-bold text-slate-700">Address *</label>
          <textarea
            rows={2}
            value={formData.address || ""}
            onChange={(e) => updateFormData({ address: e.target.value })}
            placeholder="Enter your address"
            className="w-full bg-white border border-emerald-500 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            required
          />
        </div>

        {/* Postcode */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Postcode *</label>
          <input
            type="text"
            value={formData.postcode || ""}
            onChange={(e) => updateFormData({ postcode: e.target.value })}
            placeholder="e.g. 50480"
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        {/* Town */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Town *</label>
          <input
            type="text"
            value={formData.town || ""}
            onChange={(e) => updateFormData({ town: e.target.value })}
            placeholder="e.g. Kuala Lumpur"
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        {/* State */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">State *</label>
          <select
            value={formData.state || ""}
            onChange={(e) => updateFormData({ state: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            required
          >
            <option value="" disabled hidden>
              Please Select
            </option>
            <option value="Kuala Lumpur">Kuala Lumpur</option>
            <option value="Selangor">Selangor</option>
            <option value="Penang">Penang</option>
            <option value="Johor">Johor</option>
          </select>
        </div>

        {/* Country */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">Country *</label>
          <select
            value={formData.country || ""}
            onChange={(e) => updateFormData({ country: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            required
          >
            <option value="" disabled hidden>
              Please Select
            </option>
            <option value="Malaysia">Malaysia</option>
            <option value="Singapore">Singapore</option>
          </select>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`font-bold px-12 py-3 rounded-xl transition ${
            isFormValid
              ? "bg-[#22C55E] hover:bg-emerald-600 text-white cursor-pointer"
              : "bg-slate-300 text-slate-500 cursor-not-allowed opacity-70"
          }`}
        >
          Next
        </button>
      </div>
    </form>
  );
}