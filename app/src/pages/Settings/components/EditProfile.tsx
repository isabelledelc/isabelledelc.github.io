import React, { useState } from 'react';
import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';
import { Link } from 'react-router-dom';

type FormState = {
  salutation: string;
  displayName: string;
  employmentType: string;
  occupation: string;
  university: string;
  industry: string;
  sourceOfWealth: string;
  companyAddress: string;
  postcode: string;
  town: string;
  state: string;
  country: string;
  phone: string;
};

const initialData: FormState = {
  salutation: 'MISS',
  displayName: 'EMMA LXC',
  employmentType: 'STUDENT',
  occupation: 'STUDENT',
  university: 'APU',
  industry: 'COMPUTER /INFORMATION TECHNOLOGY',
  sourceOfWealth: 'SAVINGS / INHERITANCE',
  companyAddress: 'No. 12 Jalan Example',
  postcode: '50000',
  town: 'Kuala Lumpur',
  state: 'Kuala Lumpur',
  country: 'Malaysia',
  phone: '+60 123456789',
};

export default function EditProfile() {
  const [form, setForm] = useState<FormState>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // simulate API save
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
    }, 700);
  }

  return (
    <div className="min-h-screen w-full bg-[#E9F7E5]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <form onSubmit={handleSubmit} className="rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(30,63,40,0.08)]">
          <div className="mb-6 flex items-center gap-3 text-xl font-semibold text-slate-900">
            <Link
              to="/settings"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-[#528c68] hover:text-[#528c68]"
            >
              ←
            </Link>
            <span>Edit Profile</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
            <div className="flex items-start lg:justify-start">
              <div className="relative">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-slate-100">
                  <svg viewBox="0 0 80 80" className="h-20 w-20 text-slate-500" fill="currentColor">
                    <path d="M40 40c7.18 0 13-5.82 13-13S47.18 14 40 14 27 19.82 27 27s5.82 13 13 13zm0 6c-9.94 0-30 5-30 15v5h60v-5c0-10-20.06-15-30-15z" />
                  </svg>
                </div>
                <button
                  type="button"
                  className="absolute -bottom-1 -right-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 shadow"
                  aria-label="Upload avatar"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M5 20h14v-2H5v2zM8 7l3-3h2l3 3h3v11H5V7h3zm3 0h2V4L11 7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">Salutation</label>
                <select name="salutation" value={form.salutation} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm">
                  <option>MISS</option>
                  <option>MRS</option>
                  <option>MR</option>
                </select>
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">Display Name</label>
                <input name="displayName" value={form.displayName} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm" />
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">Employment Type</label>
                <select name="employmentType" value={form.employmentType} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm">
                  <option>STUDENT</option>
                  <option>EMPLOYED</option>
                  <option>SELF-EMPLOYED</option>
                </select>
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">Occupation</label>
                <input name="occupation" value={form.occupation} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm" />
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-start gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">University / Company Name</label>
                <input name="university" value={form.university} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm" />
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">Industry</label>
                <select name="industry" value={form.industry} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm">
                  <option>COMPUTER /INFORMATION TECHNOLOGY</option>
                  <option>FINANCE</option>
                  <option>HEALTHCARE</option>
                </select>
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">Source of Wealth</label>
                <select name="sourceOfWealth" value={form.sourceOfWealth} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm">
                  <option>SAVINGS / INHERITANCE</option>
                  <option>SALARY</option>
                  <option>BUSINESS</option>
                </select>
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-start gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">Company Address</label>
                <textarea name="companyAddress" value={form.companyAddress} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm" rows={3} />
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">Postcode</label>
                <input name="postcode" value={form.postcode} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm" />
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">Town</label>
                <input name="town" value={form.town} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm" />
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3">
                <label className="text-sm font-medium text-slate-500">State</label>
                <select name="state" value={form.state} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm">
                  <option>Kuala Lumpur</option>
                  <option>Selangor</option>
                  <option>Penang</option>
                </select>
              </div>

              <div className="grid grid-cols-[200px_minmax(0,1fr)] items-center gap-4 py-3">
                <label className="text-sm font-medium text-slate-500">Country</label>
                <select name="country" value={form.country} onChange={handleChange} className="w-full rounded border px-3 py-2 text-sm">
                  <option>Malaysia</option>
                  <option>Singapore</option>
                </select>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="mx-auto block rounded-full bg-green-600 px-8 py-2 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {submitting ? 'Saving...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="relative w-[420px] rounded-md border-2 border-[#2ECC71] bg-white p-6 text-center">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-1 text-slate-600"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2ECC71] text-white">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <h3 className="mb-2 text-2xl font-bold">Success !</h3>
            <p className="text-sm text-slate-700">Your profile has been updated</p>
          </div>
        </div>
      )}
    </div>
  );
}