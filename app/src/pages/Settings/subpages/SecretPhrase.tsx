
import React, { useState, useEffect } from 'react';
import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Key, Eye, EyeOff, Check, X } from 'lucide-react';

import bagImg from '../../../assets/secretPhrasePic/bag.png';
import clockImg from '../../../assets/secretPhrasePic/clock.png';
import mouseImg from '../../../assets/secretPhrasePic/mouse.png';
import sunflowerImg from '../../../assets/secretPhrasePic/flower.png';
import appleImg from '../../../assets/secretPhrasePic/apple.png';
import chairImg from '../../../assets/secretPhrasePic/chair.png';
import headphoneImg from '../../../assets/secretPhrasePic/earphone.png';
import mugImg from '../../../assets/secretPhrasePic/cup.png';
import towersImg from '../../../assets/secretPhrasePic/klcc.png';
import catImg from '../../../assets/secretPhrasePic/cat.png';

const images = [
  { id: 'bag', src: bagImg, label: 'Bag' },
  { id: 'clock', src: clockImg, label: 'Clock' },
  { id: 'mouse', src: mouseImg, label: 'Mouse' },
  { id: 'sunflower', src: sunflowerImg, label: 'Sunflower' },
  { id: 'apple', src: appleImg, label: 'Apple' },
  { id: 'chair', src: chairImg, label: 'Chair' },
  { id: 'headphone', src: headphoneImg, label: 'Headphone' },
  { id: 'mug', src: mugImg, label: 'Mug' },
  { id: 'towers', src: towersImg, label: 'Towers' },
  { id: 'cat', src: catImg, label: 'Cat' },
];

export default function SecretPhrase() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(images[0].id);
  const [phrase, setPhrase] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [step, setStep] = useState(1);

  const selectedItem = images.find((item) => item.id === selectedImage)!;
  const confirmationPhrase = phrase.trim() || 'No secret phrase entered';

  // Automatically navigate back to /settings after showing the success modal
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        navigate('/settings');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess, navigate]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phrase.trim()) return;
    setStep(2);
  }

  function handleConfirm() {
    setShowSuccess(true);
  }

  return (
    <div
      className="min-h-screen w-full transition-colors duration-300 text-app-main"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 pb-16 pt-8">
        <div className="overflow-hidden rounded-[32px] bg-app-card border border-app-border shadow-xl transition-colors duration-300">
          
          {/* Top Header Row */}
          <div className="border-b border-app-border p-6">
            <div className="flex items-center gap-3 text-xl font-bold text-app-heading">
              <Link
                to="/settings/security"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-app-border-interactive bg-app-pill text-app-muted transition hover:border-app-primary hover:text-app-primary"
                aria-label="Back to security"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <span>Secret Phrase</span>
              <Key className="h-5 w-5 text-app-primary" />
            </div>
          </div>

          {/* Step Instructions & Grid */}
          <div className="px-6 pb-8 pt-8 text-center">
            <h2 className="text-xl font-bold text-app-heading">
              Setting Up Your Security Secret Phrase
            </h2>
            <p className="mt-4 text-sm font-medium text-app-muted">
              {step === 1
                ? 'Please Select One Of The Pictures As Your Secret Phrase Picture'
                : 'Please Make Sure That The Following Details Are Correct'}
            </p>

            {step === 1 && (
              <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 sm:grid-cols-5 gap-4">
                {images.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedImage(item.id)}
                    className={`flex items-center justify-center rounded-2xl p-3 border transition-all ${
                      selectedImage === item.id
                        ? 'border-app-primary bg-app-pill ring-2 ring-app-primary/30 scale-105'
                        : 'border-app-border bg-app-card/50 hover:border-app-border-interactive hover:scale-105'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="h-14 w-14 object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Form Step 1 / Review Step 2 */}
          <div className="bg-app-pill/60 border-t border-app-border px-6 py-10 text-center">
            {step === 1 ? (
              <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
                <p className="text-sm font-semibold text-app-heading">
                  Please Enter Your Secret Phrase
                </p>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={phrase}
                    onChange={(e) => setPhrase(e.target.value)}
                    placeholder="Enter secret phrase..."
                    className="w-full rounded-xl border border-app-border-interactive bg-app-card px-4 py-2.5 pr-10 text-sm text-app-main outline-none focus:border-app-primary transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-app-muted hover:text-app-main transition"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-48 rounded-full bg-app-primary py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                  >
                    Next
                  </button>
                </div>
              </form>
            ) : (
              <div className="mx-auto max-w-md space-y-6">
                <div className="mx-auto flex w-64 flex-col items-center justify-center rounded-2xl border border-app-border bg-app-card p-6 shadow-sm">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.label}
                    className="h-24 w-24 object-contain"
                  />
                  <span className="mt-3 text-base font-bold text-app-heading capitalize">
                    {selectedItem.label}
                  </span>
                </div>

                <div className="rounded-2xl border border-app-border bg-app-card p-4 text-left shadow-sm">
                  <p className="text-xs font-semibold text-app-muted uppercase tracking-wider">Secret Phrase</p>
                  <p className="mt-1 break-all text-sm font-semibold text-app-heading">
                    {confirmationPhrase}
                  </p>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-32 rounded-full border border-app-border-interactive bg-app-card py-2.5 text-sm font-semibold text-app-main shadow-sm transition hover:bg-app-pill"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="w-48 rounded-full bg-app-primary py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-[400px] rounded-3xl border border-app-border bg-app-card p-6 text-center shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => {
                setShowSuccess(false);
                navigate('/settings');
              }}
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

            <h3 className="mb-1 text-2xl font-bold text-app-heading">Success !</h3>
            <p className="text-sm text-app-muted">
              Your secret phrase was successfully updated!
            </p>
            <p className="mt-2 text-xs text-app-muted/70">Redirecting to settings...</p>
          </div>
        </div>
      )}
    </div>
  );
}

