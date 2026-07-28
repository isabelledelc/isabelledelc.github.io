import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loginHeroBg from '../../../assets/LoginHeroSectionPic.png';
import forgotPasswordPic from '../../../assets/forgotPasswordPic.jpg';

function useAnimatedCounter(endValue: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * endValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration]);

  return count;
}

function AnimatedStatsPill() {
  const aumCount = useAnimatedCounter(10, 2200);
  const yearCount = useAnimatedCounter(2005, 2200);

  return (
    <div className="absolute bottom-0 translate-y-1/2 z-20 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
      <div
        className="rounded-[50px] py-6 sm:py-8 px-6 sm:px-10 shadow-xl flex items-center justify-around text-center border-[3px] transition-colors"
        style={{
          backgroundColor: 'var(--bg-stats-pill)',
          borderColor: 'var(--border-stats-pill)',
        }}
      >
        <div className="flex flex-col items-center">
          <span
            className="text-3xl sm:text-4xl font-light tracking-tight min-w-[140px]"
            style={{ color: 'var(--text-stats-number)' }}
          >
            RM{aumCount}B+
          </span>
          <span
            className="text-xs sm:text-sm font-bold mt-2"
            style={{ color: 'var(--text-stats-label)' }}
          >
            Assets under management
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span
            className="text-3xl sm:text-4xl font-light tracking-tight min-w-[100px]"
            style={{ color: 'var(--text-stats-number)' }}
          >
            {yearCount}
          </span>
          <span
            className="text-xs sm:text-sm font-bold mt-2"
            style={{ color: 'var(--text-stats-label)' }}
          >
            Since
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LoginHeroSection() {
  const [accountType, setAccountType] = useState<'individual' | 'corporate'>('individual');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const handleForgotSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send reset email request
    setShowForgotModal(false);
  };

  return (
    <section id="login" className="relative w-full font-sans">
      <div
        className="relative min-h-[85vh] w-full bg-cover bg-center pt-36 sm:pt-44 pb-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${loginHeroBg})` }}
      >
        <div className="absolute inset-0 z-0" style={{ backgroundColor: 'var(--bg-hero-overlay)' }} />

        <div
          className="relative z-10 w-full max-w-xl rounded-3xl p-6 sm:p-10 text-white shadow-2xl backdrop-blur-md transition-all duration-300"
          style={{
            backgroundColor: 'var(--bg-glass-card)',
            borderColor: 'var(--border-glass-card)',
            borderWidth: '1px',
          }}
        >
          <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Bond Investments <br />
            <span style={{ color: 'var(--text-hero-accent)' }}>Anytime, Anywhere!</span>
          </h1>

          <p
            className="mx-auto mt-4 max-w-md text-center text-xs sm:text-sm opacity-90 leading-relaxed"
            style={{ color: 'var(--text-hero-subtext)' }}
          >
            Opus Touch is a 24/7 online portal to meet your investment needs. Whether you are on-the-go or simply at home, never miss a beat to fixed income opportunities!
          </p>

          <div className="mt-6 flex justify-center items-center gap-6 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setAccountType('individual')}
              className={`pb-1 transition-all cursor-pointer ${
                accountType === 'individual'
                  ? 'border-b-2 text-white font-bold scale-105'
                  : 'text-gray-200 hover:text-white'
              }`}
              style={{
                borderColor: accountType === 'individual' ? 'var(--text-hero-accent)' : 'transparent',
              }}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setAccountType('corporate')}
              className={`pb-1 transition-all cursor-pointer ${
                accountType === 'corporate'
                  ? 'border-b-2 text-white font-bold scale-105'
                  : 'text-gray-200 hover:text-white'
              }`}
              style={{
                borderColor: accountType === 'corporate' ? 'var(--text-hero-accent)' : 'transparent',
              }}
            >
              Corporate
            </button>
          </div>

          <form className="mt-6 flex flex-col gap-3.5" onSubmit={(e) => e.preventDefault()}>
            <button
              type="button"
              className="flex items-center justify-center gap-3 w-full rounded-full py-2.5 px-4 text-sm font-semibold transition-all hover:opacity-90 active:scale-98 cursor-pointer text-white"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <svg className="h-4 w-4 bg-white rounded-full p-0.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Sign in with Google
            </button>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-200 outline-none border transition-all"
              style={{
                backgroundColor: 'var(--bg-input-glass)',
                borderColor: 'var(--border-glass-card)',
              }}
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-200 outline-none border transition-all"
              style={{
                backgroundColor: 'var(--bg-input-glass)',
                borderColor: 'var(--border-glass-card)',
              }}
            />

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowForgotModal(true)}
                className="text-xs text-gray-200 hover:underline italic cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            <Link
              to="/home"
              className="w-full rounded-full py-2.5 text-center text-sm font-semibold text-white transition-all shadow-md active:scale-98 no-underline mt-1"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="w-full rounded-full py-2.5 text-center text-sm font-semibold text-white transition-all border hover:bg-white/10 active:scale-98 no-underline"
              style={{ borderColor: 'var(--border-glass-card)' }}
            >
              Don't have an account? Sign Up
            </Link>

            <div className="mt-2 flex justify-center gap-6 text-xs text-gray-200">
              <a href="#faq" className="hover:underline italic">FAQ</a>
              <a href="#terms" className="hover:underline italic">Terms and Conditions</a>
            </div>
          </form>
        </div>

        <AnimatedStatsPill />
      </div>

      {/* FORGOT PASSWORD MODAL */}
      {showForgotModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity"
          style={{ backgroundColor: 'var(--modal-overlay, rgba(15, 23, 42, 0.7))' }}
        >
          <div
            className="relative w-full max-w-md rounded-[32px] p-6 sm:p-8 shadow-2xl transition-all animate-in fade-in zoom-in-95"
            style={{
              backgroundColor: 'var(--modal-bg, #ffffff)',
              color: 'var(--modal-text-primary, #0f172a)',
              borderColor: 'var(--modal-border, transparent)',
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowForgotModal(false)}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-lg transition-colors cursor-pointer"
              style={{
                color: 'var(--modal-close-color, #64748b)',
                backgroundColor: 'var(--modal-close-bg, transparent)',
              }}
              title="Close"
            >
              ×
            </button>

            {/* Illustration/Image Section */}
            <div className="mb-4 sm:mb-6 flex justify-center">
              <img
                src={forgotPasswordPic}
                alt="Forgot password illustration"
                className="h-28 sm:h-36 w-auto max-w-full object-contain"
              />
            </div>

            {/* Header Text */}
            <h2 
              className="text-xl sm:text-2xl font-bold text-center tracking-tight"
              style={{ color: 'var(--modal-title-color, #1e293b)' }}
            >
              Forgot Password? Don’t Worry
            </h2>
            <p 
              className="mt-1.5 text-center text-xs sm:text-sm"
              style={{ color: 'var(--modal-subtitle-color, #64748b)' }}
            >
              Enter your registered email
            </p>

            {/* Form */}
            <form onSubmit={handleForgotSubmit} className="mt-6 space-y-4">
              <input
                type="email"
                required
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                placeholder="Enter your registered email"
                className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2"
                style={{
                  backgroundColor: 'var(--modal-input-bg, #ffffff)',
                  borderColor: 'var(--modal-input-border, #34d399)',
                  color: 'var(--modal-input-text, #0f172a)',
                }}
              />

              <button
                type="submit"
                className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-all shadow-md active:scale-98 cursor-pointer"
                style={{
                  backgroundColor: 'var(--modal-btn-bg, #334155)',
                  color: 'var(--modal-btn-text, #ffffff)',
                }}
              >
                Reset Password
              </button>
            </form>

            {/* Footer Navigation */}
            <p 
              className="mt-5 text-center text-xs"
              style={{ color: 'var(--modal-subtitle-color, #64748b)' }}
            >
              Remember your password?{' '}
              <button
                type="button"
                onClick={() => setShowForgotModal(false)}
                className="font-bold hover:underline cursor-pointer"
                style={{ color: 'var(--modal-link-color, #10b981)' }}
              >
                Login now
              </button>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}