import React, { useState } from 'react';
import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';
import { Link } from 'react-router-dom';

import bagImg from '../../../assets/secretphrasePic/bag.png';
import clockImg from '../../../assets/secretphrasePic/clock.png';
import mouseImg from '../../../assets/secretphrasePic/mouse.png';
import sunflowerImg from '../../../assets/secretphrasePic/flower.png';
import appleImg from '../../../assets/secretphrasePic/apple.png';
import chairImg from '../../../assets/secretphrasePic/chair.png';
import headphoneImg from '../../../assets/secretphrasePic/earphone.png';
import mugImg from '../../../assets/secretphrasePic/cup.png';
import towersImg from '../../../assets/secretphrasePic/klcc.png';
import catImg from '../../../assets/secretphrasePic/cat.png';

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phrase.trim()) return;
    setShowSuccess(true);
  }

  const selected = images.find((item) => item.id === selectedImage)!;

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
            <span>Secret Phrase</span>
            <span className="ml-3 text-sm text-slate-500">🔑</span>
          </div>

          <div className="mb-8 space-y-3 text-center">
            <h2 className="text-lg font-semibold text-slate-900">Setting Up Your Security Secret Phrase</h2>
            <p className="text-sm text-slate-600">Please make sure that the following details are correct.</p>
          </div>

          <div className="mb-8 rounded-[24px] border border-[#D9F2D9] bg-[#F5FBF5] p-6 text-center">
            <div className="mx-auto mb-4 flex h-[156px] w-[156px] items-center justify-center rounded-3xl border border-slate-200 bg-white">
              <img src={selected.src} alt={selected.label} className="h-28 w-28 object-contain" />
            </div>
            <div className="text-sm font-semibold text-slate-900">{selected.label}</div>
            <div className="text-xs text-slate-500">Selected secret phrase image</div>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {images.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedImage(item.id)}
                  className={`rounded-3xl border p-3 transition ${selectedImage === item.id ? 'border-[#2ECC71] bg-[#ECF9EE]' : 'border-slate-200 bg-slate-50 hover:border-[#8ACB8A]'}`}
                >
                  <img src={item.src} alt={item.label} className="mx-auto h-14 w-14 object-contain" />
                  <div className="mt-2 text-xs text-slate-600">{item.label}</div>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-center">
              <p className="text-sm text-slate-600">Please enter your secret phrase</p>
            </div>
            <div className="relative mx-auto max-w-2xl">
              <input
                type={showPassword ? 'text' : 'password'}
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
                className="w-full rounded-full border border-[#8ACB8A] px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#2ECC71]"
                placeholder="Enter secret phrase"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <div className="text-center">
              <button className="rounded-full bg-green-600 px-10 py-3 text-sm font-semibold text-white transition hover:bg-green-700">
                Next
              </button>
            </div>
          </form>
        </div>
      </main>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="relative w-[420px] rounded-md border-2 border-[#2ECC71] bg-white p-6 text-center shadow-xl">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2ECC71] text-white">✓</div>
            </div>
            <h3 className="mb-2 text-2xl font-bold">Success !</h3>
            <p className="text-sm text-slate-700">Your secret phrase successfully updated!</p>
          </div>
        </div>
      )}
    </div>
  );
}