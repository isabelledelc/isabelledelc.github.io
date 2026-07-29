import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

import Individual from '../components/Individual';
import Join from '../components/Join';

import grassBg from '../../../assets/grass.jpg';
import logoImg from '../../../assets/logo.png';

type AccountTypeProps = {
  onSelectIndividual?: () => void;
};

export default function AccountType({ onSelectIndividual }: AccountTypeProps) {
  const navigate = useNavigate();

  const handleSelectIndividual = () => {
    if (onSelectIndividual) {
      onSelectIndividual();
    } else {
      // Navigates to /signup when Individual is clicked
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-white dark:bg-[#122219] transition-colors">
      {/* TOP HEADER: Seamless header with logo */}
      <header className="w-full px-6 py-5 sm:px-10 sm:py-6 bg-white dark:bg-[#122219] z-20 shrink-0">
        <img src={logoImg} alt="TOUCH Logo" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
      </header>

      {/* MAIN SPLIT CONTENT */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* LEFT SIDE: Grass Background Banner */}
        <div 
          className="relative w-full md:w-[42%] lg:w-[40%] min-h-[300px] md:min-h-0 bg-cover bg-center flex flex-col justify-between p-6 sm:p-10 shrink-0"
          style={{ backgroundImage: `url(${grassBg})` }}
        >
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/10 z-0" />

          {/* Back Arrow Button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="relative z-10 w-11 h-11 text-white flex items-center justify-center rounded-full bg-black/15 hover:bg-black/30 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-white/20 shadow-md"
            aria-label="Go back"
          >
            <ChevronLeft className="w-8 h-8 stroke-[2.5]" />
          </button>

          {/* Overlay Watermark/Centered Logo */}
          <div className="relative z-10 my-auto flex justify-center items-center px-4 animate-fade-in">
            <img 
              src={logoImg} 
              alt="TOUCH Logo Watermark" 
              className="w-full max-w-[240px] sm:max-w-[280px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300" 
            />
          </div>

          {/* Bottom Spacer */}
          <div className="hidden md:block" />
        </div>

        {/* RIGHT SIDE: Account Type Selection */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 text-center animate-fade-in-up overflow-y-auto">
          <div className="max-w-xl w-full flex flex-col items-center my-auto">
            
            {/* Waving Hand Emoji (Same as Signup page) */}
            <div className="mb-4 text-4xl sm:text-5xl">
              <span className="inline-block hover:rotate-12 hover:scale-125 transition-transform duration-200 origin-bottom-right">
                👋
              </span>
            </div>

            {/* Heading and Subtitle */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight mb-3">
              Create your account
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg mb-10 sm:mb-12">
              Choose an account type to get started
            </p>

            {/* Account Selection Cards Container */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full">
              <Individual onClick={handleSelectIndividual} />
              <Join />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}