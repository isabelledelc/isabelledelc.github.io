// filepath: c:\Users\emmalee\Documents\visual studio code\opustouch\app\src\pages\Settings\subpages\ViewProfile.tsx
import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';
import { Link } from 'react-router-dom';

const profile = {
  name: 'EMMA LXC',
  nationality: 'MALAYSIA',
  gender: 'FEMALE',
  race: 'CHINESE',
  phone: '+60 123456789',
};

const fields = [
  { label: 'Name As Per ID', value: profile.name },
  { label: 'Nationality', value: profile.nationality },
  { label: 'Gender', value: profile.gender },
  { label: 'Race', value: profile.race },
  { label: 'Phone Number', value: profile.phone },
];

export default function ViewProfile() {
  return (
    <div className="min-h-screen w-full bg-[#E9F7E5]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(30,63,40,0.08)]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xl font-semibold text-slate-900">
              <a
                href="/settings"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-[#528c68] hover:text-[#528c68]"
              >
                ←
              </a>
              <span>Profile</span>
            </div>

            <a
              href="/settings/edit-profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-[#528c68] hover:text-[#528c68]"
              aria-label="Edit Profile"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M4 17.25V21h3.75L17.81 10.94l-3.75-3.75L4 17.25zm18-11.5a1.25 1.25 0 0 0-1.77 0l-2.5 2.5 3.75 3.75 2.5-2.5a1.25 1.25 0 0 0 0-1.77l-1.98-1.98z" />
              </svg>
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-slate-100">
                <svg viewBox="0 0 80 80" className="h-20 w-20 text-slate-500" fill="currentColor">
                  <path d="M40 40c7.18 0 13-5.82 13-13S47.18 14 40 14 27 19.82 27 27s5.82 13 13 13zm0 6c-9.94 0-30 5-30 15v5h60v-5c0-10-20.06-15-30-15z" />
                </svg>
              </div>
            </div>

            <div className="grid gap-4">
              {fields.map((field) => (
                <div key={field.label} className="grid grid-cols-[180px_minmax(0,1fr)] items-center gap-4 border-b border-slate-200 py-3">
                  <span className="text-sm font-medium text-slate-500">{field.label}</span>
                  <span className="text-sm text-slate-900">{field.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-[#8ACB8A] bg-[#F5FBF5] p-5 text-sm text-slate-700">
            <h3 className="mb-3 font-semibold text-slate-900">Why i can only update some of my personal information?</h3>
            <p className="leading-6">
              We do not allow users to update some of the sensitive information like full name, ID number etc.
              through online platform to protect your account and identity. Please contact our Client Services on
              <span className="font-semibold text-slate-900"> 03-2288 8833</span> or email at
              <span className="font-semibold text-slate-900"> clientservices@opusasset.com</span> to update these information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

<Link
  to="/settings"
  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-[#528c68] hover:text-[#528c68]"
>
  ←
</Link>