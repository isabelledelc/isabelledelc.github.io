import React, { useState } from 'react';
import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';
import { Link } from 'react-router-dom';

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
  const [selectedImage, setSelectedImage] = useState(images[0].id);
  const [phrase, setPhrase] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [step, setStep] = useState(1);

  const selectedItem = images.find((item) => item.id === selectedImage)!;
  const confirmationPhrase = phrase.trim() || 'No secret phrase entered';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phrase.trim()) return;
    setStep(2);
  }

  function handleConfirm() {
    setShowSuccess(true);
  }

  return (
    <div className="min-h-screen w-full bg-[#A8E090]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 pb-16 pt-8">
        <div className="overflow-hidden rounded-[24px] bg-white shadow-lg">
          <div className="border-b border-slate-200 p-6">
            <div className="flex items-center gap-4 text-xl font-bold text-slate-900">
              <Link
                to="/settings/security"
                className="text-slate-700 transition hover:text-[#2ECC71]"
                aria-label="Back"
              >
                &lt;
              </Link>
              <span>Secret Phrase</span>
              <span className="text-xl">🔑</span>
            </div>
          </div>

          <div className="px-6 pb-10 pt-8 text-center">
            <h2 className="text-xl font-bold text-slate-800">
              Setting Up Your Security Secret Phrase
            </h2>
            <p className="mt-6 text-sm font-medium text-slate-600">
              {step === 1
                ? 'Please Select One Of The Picture As Your Secret Phase Picture'
                : 'Please Make Sure That The Following Details Are Correct'}
            </p>

            {step === 1 && (
              <div className="mx-auto mt-8 grid max-w-xl grid-cols-5 gap-6">
                {images.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedImage(item.id)}
                    className={`flex items-center justify-center rounded-2xl p-2 transition ${
                      selectedImage === item.id
                        ? 'scale-110 border-2 border-[#2ECC71] bg-[#ECF9EE]'
                        : 'hover:scale-105'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="h-16 w-16 object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#EAF6EA] px-6 py-12 text-center">
            {step === 1 ? (
              <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
                <p className="text-sm font-semibold text-slate-700">
                  Please Enter Your Secret Phase
                </p>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={phrase}
                    onChange={(e) => setPhrase(e.target.value)}
                    className="w-full rounded-lg border border-[#2ECC71] bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#2ECC71]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-48 rounded-full bg-[#2ECC71] py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#27ae60]"
                  >
                    Next
                  </button>
                </div>
              </form>
            ) : (
              <div className="mx-auto max-w-md space-y-8">
                <div className="mx-auto flex w-64 flex-col items-center justify-center rounded-2xl border-2 border-[#8ACB8A] bg-white p-8 shadow-sm">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.label}
                    className="h-28 w-28 object-contain"
                  />
                  <span className="mt-4 text-base font-bold text-slate-900 capitalize">
                    {selectedItem.label}
                  </span>
                </div>

                <div className="rounded-2xl border border-[#8ACB8A] bg-white p-4 text-left shadow-sm">
                  <p className="text-sm font-semibold text-slate-700">Secret Phrase</p>
                  <p className="mt-2 break-all text-sm text-slate-900">
                    {confirmationPhrase}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="w-48 rounded-full bg-[#2ECC71] py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#27ae60]"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="relative w-[420px] rounded-lg border-2 border-[#2ECC71] bg-white p-6 text-center shadow-xl">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2ECC71] text-2xl text-white">
                ✓
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900">Success !</h3>
            <p className="text-sm text-slate-700">
              Your secret phrase successfully updated!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

