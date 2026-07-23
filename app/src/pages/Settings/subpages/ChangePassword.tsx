
import React, { useState, useEffect } from 'react';
import Header from '../../../components/shared/header';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X, AlertTriangle, Eye, EyeOff } from 'lucide-react';

function validatePasswordPolicy(pw: string) {
  const lengthOk = pw.length >= 8 && pw.length <= 20;
  const upper = /[A-Z]/.test(pw);
  const lower = /[a-z]/.test(pw);
  const number = /[0-9]/.test(pw);
  const special = /[!@#\$%\^&\*\(\)\-\_\+\=\[\]\{\};:'",.<>\/?\\|`~]/.test(pw);
  return lengthOk && upper && lower && number && special;
}

export default function ChangePassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'current' | 'new'>('current');
  const [current, setCurrent] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [modal, setModal] = useState<{ open: boolean; type: 'success' | 'error'; message: string }>({
    open: false,
    type: 'success',
    message: '',
  });

  // Automatically navigate back to /settings after showing the success modal
  useEffect(() => {
    if (modal.open && modal.type === 'success') {
      const timer = setTimeout(() => {
        navigate('/settings');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [modal, navigate]);

  function handleNextFromCurrent(e?: React.FormEvent) {
    e?.preventDefault();
    if (!current) return;
    setStep('new');
  }

  function handleSubmitNew(e: React.FormEvent) {
    e.preventDefault();

    if (newPw === current) {
      setModal({
        open: true,
        type: 'error',
        message: 'New password cannot be the same as your current password.',
      });
      return;
    }

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
      // Reset form
      setCurrent('');
      setNewPw('');
      setConfirmPw('');
      setStep('current');
    }, 800);
  }

  return (
    <div
      className="min-h-screen w-full transition-colors duration-300 text-app-main"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="rounded-[32px] bg-app-card border border-app-border backdrop-blur-md p-6 shadow-xl transition-colors duration-300">
          
          {/* Header Row */}
          <div className="mb-6 flex items-center gap-3 text-xl font-semibold text-app-heading">
            <Link
              to="/settings/security"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-app-border-interactive bg-app-pill text-app-muted transition hover:border-app-primary hover:text-app-primary"
              aria-label="Back to security"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <span>Security</span>
            <span className="text-sm font-medium text-app-muted">/ Change Password</span>
          </div>

          {/* Form Content */}
          <div className="border-b border-app-border pb-8">
            {step === 'current' && (
              <form onSubmit={handleNextFromCurrent} className="text-center">
                <h3 className="mb-2 text-lg font-bold text-app-heading uppercase tracking-wide">
                  Change Password
                </h3>
                <p className="mb-6 text-sm font-medium text-app-muted">
                  Please Enter Your Current Password
                </p>

                <div className="relative mx-auto mb-6 max-w-md">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                    className="w-full rounded-xl border border-app-border-interactive bg-app-card px-4 py-2.5 pr-10 text-sm text-app-main outline-none focus:border-app-primary transition"
                    placeholder="Current password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-app-muted hover:text-app-main transition"
                  >
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                <button
                  type="submit"
                  className="mx-auto block w-48 rounded-full bg-app-primary py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                >
                  Next
                </button>
              </form>
            )}

            {step === 'new' && (
              <form onSubmit={handleSubmitNew} className="text-center">
                <h3 className="mb-2 text-lg font-bold text-app-heading uppercase tracking-wide">
                  Change Password
                </h3>
                <p className="mb-6 text-sm font-medium text-app-muted">
                  Please Enter Your New Password
                </p>

                <div className="relative mx-auto mb-4 max-w-md">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPw}
                    onChange={(e) => setNewPw(e.target.value)}
                    className="w-full rounded-xl border border-app-border-interactive bg-app-card px-4 py-2.5 pr-10 text-sm text-app-main outline-none focus:border-app-primary transition"
                    placeholder="New password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-app-muted hover:text-app-main transition"
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                <div className="relative mx-auto mb-6 max-w-md">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPw}
                    onChange={(e) => setConfirmPw(e.target.value)}
                    className="w-full rounded-xl border border-app-border-interactive bg-app-card px-4 py-2.5 pr-10 text-sm text-app-main outline-none focus:border-app-primary transition"
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-app-muted hover:text-app-main transition"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('current')}
                    className="w-32 rounded-full border border-app-border-interactive bg-app-card py-2.5 text-sm font-semibold text-app-main shadow-sm transition hover:bg-app-pill"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-48 rounded-full bg-app-primary py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:opacity-60"
                  >
                    {submitting ? 'Saving...' : 'Update'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Policy Info Card */}
          <div className="mt-6 rounded-2xl bg-app-pill border border-app-border p-5">
            <div className="mx-auto max-w-md text-left text-sm text-app-main">
              <strong className="text-app-heading">
                Your new password should follow this password policy:
              </strong>
              <ul className="mt-3 space-y-1.5 list-disc pl-5 text-app-muted font-medium">
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

      {/* Modal Notification */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-[400px] rounded-3xl border border-app-border bg-app-card p-6 text-center shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => {
                setModal((m) => ({ ...m, open: false }));
                if (modal.type === 'success') {
                  navigate('/settings');
                }
              }}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-app-pill text-app-muted hover:text-app-main transition"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-4 flex items-center justify-center">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg ${
                  modal.type === 'success' ? 'bg-app-primary' : 'bg-red-500'
                }`}
              >
                {modal.type === 'success' ? (
                  <Check className="h-8 w-8" />
                ) : (
                  <AlertTriangle className="h-8 w-8" />
                )}
              </div>
            </div>

            <h3 className="mb-1 text-2xl font-bold text-app-heading">
              {modal.type === 'success' ? 'Success !' : 'Error'}
            </h3>
            <p className="text-sm text-app-muted">{modal.message}</p>
            {modal.type === 'success' && (
              <p className="mt-2 text-xs text-app-muted/70">Redirecting to settings...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

