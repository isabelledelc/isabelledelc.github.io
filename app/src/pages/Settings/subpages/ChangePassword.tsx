import React, { useState } from 'react';
import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';
import { Link } from 'react-router-dom';

function validatePasswordPolicy(pw: string) {
  const lengthOk = pw.length >= 8 && pw.length <= 20;
  const upper = /[A-Z]/.test(pw);
  const lower = /[a-z]/.test(pw);
  const number = /[0-9]/.test(pw);
  const special = /[!@#\$%\^&\*\(\)\-\_\+\=\[\]\{\};:'",.<>\/?\\|`~]/.test(pw);
  return lengthOk && upper && lower && number && special;
}

export default function ChangePassword() {
  const [step, setStep] = useState<'current' | 'new'>('current');
  const [current, setCurrent] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [modal, setModal] = useState<{ open: boolean; type: 'success' | 'error'; message: string }>({
    open: false,
    type: 'success',
    message: '',
  });

  function handleNextFromCurrent(e?: React.FormEvent) {
    e?.preventDefault();
    // For demo: accept any current password (in real app verify server-side)
    setStep('new');
  }

  function handleSubmitNew(e: React.FormEvent) {
    e.preventDefault();

    if (newPw !== confirmPw) {
      setModal({ open: true, type: 'error', message: 'Passwords do not match.' });
      return;
    }

    if (!validatePasswordPolicy(newPw)) {
      setModal({
        open: true,
        type: 'error',
        message:
          'Password must be 8-20 chars, include upper & lower case letters, numbers and at least one special character.',
      });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setModal({ open: true, type: 'success', message: 'Your password has been changed!' });
      // reset form for demo
      setCurrent('');
      setNewPw('');
      setConfirmPw('');
      setStep('current');
    }, 800);
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
            <span className="ml-3 text-sm text-slate-500">/ Change Password</span>
          </div>

          <div className="border-b pb-6">
            {step === 'current' && (
              <form onSubmit={handleNextFromCurrent} className="text-center">
                <h3 className="mb-4 text-lg font-semibold text-slate-800">CHANGE PASSWORD</h3>
                <p className="mb-4 text-sm text-slate-600">Please Enter Your Current Password</p>

                <div className="mx-auto mb-4 max-w-md">
                  <input
                    type="password"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                    className="w-full rounded border px-3 py-2 text-sm"
                    placeholder="Current password"
                  />
                </div>

                <button className="mx-auto block rounded-full bg-green-600 px-8 py-2 text-sm font-semibold text-white">Next</button>
              </form>
            )}

            {step === 'new' && (
              <form onSubmit={handleSubmitNew} className="text-center">
                <h3 className="mb-4 text-lg font-semibold text-slate-800">CHANGE PASSWORD</h3>
                <p className="mb-4 text-sm text-slate-600">Please Enter Your New Password</p>

                <div className="mx-auto mb-3 max-w-md">
                  <input
                    type="password"
                    value={newPw}
                    onChange={(e) => setNewPw(e.target.value)}
                    name="new"
                    className="w-full rounded border px-3 py-2 text-sm"
                    placeholder="New password"
                  />
                </div>

                <div className="mx-auto mb-4 max-w-md">
                  <input
                    type="password"
                    value={confirmPw}
                    onChange={(e) => setConfirmPw(e.target.value)}
                    name="confirm"
                    className="w-full rounded border px-3 py-2 text-sm"
                    placeholder="Confirm new password"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mx-auto block rounded-full bg-green-600 px-8 py-2 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {submitting ? 'Saving...' : 'Next'}
                </button>
              </form>
            )}
          </div>

          <div className="mt-6 bg-[#F3F9F3] p-4">
            <div className="mx-auto max-w-md text-left text-sm text-slate-600">
              <strong>Your new password should follow this password policy:</strong>
              <ul className="mt-2 list-disc pl-5">
                <li>Not same as current password</li>
                <li>8-20 characters</li>
                <li>Upper & lower case letters</li>
                <li>Numbers</li>
                <li>At least one special character</li>
                <li>Both passwords must match</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className={`relative w-[420px] rounded-md border-2 ${modal.type === 'success' ? 'border-[#2ECC71]' : 'border-[#F06565]'} bg-white p-6 text-center`}>
            <button onClick={() => setModal((m) => ({ ...m, open: false }))} className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-1 text-slate-600">
              ✕
            </button>

            <div className="mb-4 flex items-center justify-center">
              <div className={`flex h-20 w-20 items-center justify-center rounded-full ${modal.type === 'success' ? 'bg-[#2ECC71] text-white' : 'bg-[#F06565] text-white'}`}>
                {modal.type === 'success' ? '✓' : '!' }
              </div>
            </div>

            <h3 className="mb-2 text-2xl font-bold">{modal.type === 'success' ? 'Success !' : 'Error'}</h3>
            <p className="text-sm text-slate-700">{modal.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}