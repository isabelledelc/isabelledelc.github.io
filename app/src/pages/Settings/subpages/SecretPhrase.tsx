import React, { useState } from 'react';
import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';
import { Link } from 'react-router-dom';

export default function SecretPhrase() {
  const [phrase, setPhrase] = useState('my secret phrase for testing');
  const [showSaved, setShowSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 1200);
  }

  return (
    <div className="min-h-screen w-full bg-[#E9F7E5]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(30,63,40,0.08)]">
          <div className="mb-6 flex items-center gap-3 text-xl font-semibold text-slate-900">
            <Link
              to="/settings/security"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-[#528c68] hover:text-[#528c68]"
            >
              ←
            </Link>
            <span>Security</span>
            <span className="ml-3 text-sm text-slate-500">/ Secret Phrase</span>
          </div>

          <form onSubmit={handleSave} className="max-w-2xl">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-600">Secret Phrase</label>
              <textarea value={phrase} onChange={(e) => setPhrase(e.target.value)} className="w-full rounded border px-3 py-2 text-sm" rows={3} />
            </div>

            <button className="rounded-full bg-green-600 px-6 py-2 text-sm font-semibold text-white">Save</button>
          </form>
        </div>
      </main>

      {showSaved && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="rounded-md border-2 border-[#2ECC71] bg-white p-6 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2ECC71] text-white">✓</div>
            </div>
            <h3 className="mb-2 text-lg font-bold">Saved</h3>
            <p className="text-sm text-slate-700">Your secret phrase has been saved.</p>
          </div>
        </div>
      )}
    </div>
  );
}