import React, { useState } from 'react';
import Header from '../../../components/shared/header';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Check, X } from 'lucide-react';

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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
    }, 700);
  }

  // Common styling for input elements to keep dark/light mode consistent
  const inputStyles =
    'w-full rounded-xl border border-app-border-interactive bg-app-card/80 px-3.5 py-2 text-sm text-app-main focus:border-app-primary focus:outline-none transition';

  return (
    <div
      className="min-h-screen w-full transition-colors duration-300 text-app-main"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] bg-app-card border border-app-border backdrop-blur-md p-6 shadow-xl transition-colors duration-300"
        >
          {/* Top Header Row */}
          <div className="mb-8 flex items-center gap-3 text-xl font-semibold text-app-heading">
            <Link
              to="/settings/view-profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-app-border-interactive bg-app-pill text-app-muted transition hover:border-app-primary hover:text-app-primary"
              aria-label="Back to view profile"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <span>Edit Profile</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
            {/* Avatar Upload Container */}
            <div className="flex items-start justify-center lg:justify-start">
              <div className="relative">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-app-pill text-app-muted border border-app-border">
                  <span className="text-4xl font-bold text-app-heading">
                    {form.displayName.charAt(0)}
                  </span>
                </div>
                <button
                  type="button"
                  className="absolute bottom-0 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-app-card border border-app-border-interactive text-app-main shadow-md transition hover:scale-105 hover:border-app-primary hover:text-app-primary"
                  aria-label="Upload avatar"
                >
                  <Camera className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid gap-2">
              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted">Salutation</label>
                <select
                  name="salutation"
                  value={form.salutation}
                  onChange={handleChange}
                  className={inputStyles}
                >
                  <option value="MISS">MISS</option>
                  <option value="MRS">MRS</option>
                  <option value="MR">MR</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted">Display Name</label>
                <input
                  name="displayName"
                  value={form.displayName}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted">Employment Type</label>
                <select
                  name="employmentType"
                  value={form.employmentType}
                  onChange={handleChange}
                  className={inputStyles}
                >
                  <option value="STUDENT">STUDENT</option>
                  <option value="EMPLOYED">EMPLOYED</option>
                  <option value="SELF-EMPLOYED">SELF-EMPLOYED</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted">Occupation</label>
                <input
                  name="occupation"
                  value={form.occupation}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted">
                  University / Company Name
                </label>
                <input
                  name="university"
                  value={form.university}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted">Industry</label>
                <select
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  className={inputStyles}
                >
                  <option value="COMPUTER /INFORMATION TECHNOLOGY">
                    COMPUTER /INFORMATION TECHNOLOGY
                  </option>
                  <option value="FINANCE">FINANCE</option>
                  <option value="HEALTHCARE">HEALTHCARE</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted">Source of Wealth</label>
                <select
                  name="sourceOfWealth"
                  value={form.sourceOfWealth}
                  onChange={handleChange}
                  className={inputStyles}
                >
                  <option value="SAVINGS / INHERITANCE">SAVINGS / INHERITANCE</option>
                  <option value="SALARY">SALARY</option>
                  <option value="BUSINESS">BUSINESS</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-start gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted pt-2">Company Address</label>
                <textarea
                  name="companyAddress"
                  value={form.companyAddress}
                  onChange={handleChange}
                  className={inputStyles}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted">Postcode</label>
                <input
                  name="postcode"
                  value={form.postcode}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted">Town</label>
                <input
                  name="town"
                  value={form.town}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3">
                <label className="text-sm font-medium text-app-muted">State</label>
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className={inputStyles}
                >
                  <option value="Kuala Lumpur">Kuala Lumpur</option>
                  <option value="Selangor">Selangor</option>
                  <option value="Penang">Penang</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[200px_minmax(0,1fr)] items-center gap-2 sm:gap-4 py-3">
                <label className="text-sm font-medium text-app-muted">Country</label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={inputStyles}
                >
                  <option value="Malaysia">Malaysia</option>
                  <option value="Singapore">Singapore</option>
                </select>
              </div>

              {/* Submit Action */}
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-app-primary px-10 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? 'Saving...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-[400px] rounded-3xl border border-app-border bg-app-card p-6 text-center shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-app-pill text-app-muted hover:text-app-main transition"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-app-primary text-white shadow-lg">
                <Check className="h-8 w-8" />
              </div>
            </div>

            <h3 className="mb-1 text-2xl font-bold text-app-heading">Success!</h3>
            <p className="text-sm text-app-muted">Your profile has been updated successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}