import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';
import { Link } from 'react-router-dom';

export default function Security() {
  return (
    <div className="min-h-screen w-full bg-[#E9F7E5]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(30,63,40,0.08)]">
          <div className="mb-6 flex items-center gap-3 text-xl font-semibold text-slate-900">
            <Link
              to="/settings"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-[#528c68] hover:text-[#528c68]"
            >
              ←
            </Link>
            <span>Security</span>
            <span className="ml-3 inline-flex items-center justify-center rounded-full bg-slate-100 px-2 py-1 text-sm text-slate-600">🔒</span>
          </div>

          <div className="divide-y">
            <Link
              to="/settings/change-password"
              className="flex items-center justify-between py-4 text-sm text-slate-700"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#F3F7F3] text-[#2E7D4F]">🔐</span>
                <span>Change Password</span>
              </div>
              <span className="text-slate-400">→</span>
            </Link>

            <Link
              to="/settings/secret-phrase"
              className="flex items-center justify-between py-4 text-sm text-slate-700"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#F3F7F3] text-[#2E7D4F]">🔑</span>
                <span>Secret Phrase</span>
              </div>
              <span className="text-slate-400">→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}