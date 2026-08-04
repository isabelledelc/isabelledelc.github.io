import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

import grassBg from '../../assets/grass.jpg';
import logoImg from '../../assets/logo.png';

export default function Signup() {
  return (
    <div 
      className="min-h-screen w-full flex flex-col font-sans transition-colors"
      style={{ backgroundColor: 'var(--bg-signup-page)' }}
    >
      {/* TOP HEADER: Seamless header with larger logo (border line removed) */}
      <header className="w-full px-6 py-5 sm:px-10 sm:py-6 bg-white dark:bg-gray-900 z-20 shrink-0">
        <img src={logoImg} alt="TOUCH Logo" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
      </header>

      {/* MAIN SPLIT CONTENT */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* LEFT SIDE: Grass Background Banner */}
        <div 
          className="relative w-full md:w-[42%] lg:w-[40%] min-h-[300px] md:min-h-0 bg-cover bg-center flex flex-col justify-between p-6 sm:p-10 shrink-0"
          style={{ backgroundImage: `url(${grassBg})` }}
        >
          <div className="absolute inset-0 bg-black/10 z-0" />

          <Link
            to="/"
            className="relative z-10 w-11 h-11 text-white flex items-center justify-center rounded-full bg-black/15 hover:bg-black/30 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer border border-white/20 shadow-md"
            aria-label="Go back to landing page"
          >
            <ChevronLeft className="w-8 h-8 stroke-[2.5]" />
          </Link>

          <div className="relative z-10 my-auto flex justify-center items-center px-4 animate-fade-in">
            <img 
              src={logoImg} 
              alt="Opus Touch Logo Watermark" 
              className="w-full max-w-[260px] sm:max-w-[300px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300" 
            />
          </div>

          <div className="hidden md:block" />
        </div>

        {/* RIGHT SIDE: Signup Options */}
        <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 bg-white dark:bg-gray-900 transition-colors overflow-y-auto">
          <div className="max-w-md mx-auto w-full my-auto flex flex-col items-center text-center animate-fade-in-up">
            
            <h1 
              className="text-5xl sm:text-6xl font-bold tracking-tight flex items-center justify-center gap-3"
              style={{ color: 'var(--text-signup-title)' }}
            >
              Hello! <span className="inline-block hover:rotate-12 hover:scale-125 transition-transform duration-200 origin-bottom-right">👋</span>
            </h1>
            
            <p 
              className="mt-4 text-xl sm:text-2xl font-semibold tracking-wide"
              style={{ color: 'var(--text-signup-subtitle)' }}
            >
              Register with us
            </p>

            <div className="mt-12 sm:mt-14 w-full flex flex-col items-start gap-4">
              <label 
                className="text-base sm:text-lg font-semibold tracking-wide"
                style={{ color: 'var(--text-signup-label)' }}
              >
                Select sign up with :
              </label>

              {/* Google Pill Button */}
              <button
                type="button"
                className="w-full flex items-center rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-98 cursor-pointer group"
                style={{ backgroundColor: 'var(--bg-signup-btn)' }}
              >
                <div className="bg-white px-5 sm:px-6 py-3.5 flex items-center justify-center border-r border-slate-200/50 group-hover:bg-slate-50 transition-colors">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>

                <span className="flex-1 text-center pr-10 sm:pr-12 text-base sm:text-lg font-semibold text-white tracking-wide">
                  Sign in with google
                </span>
              </button>

              {/* Email Provider Link Button */}
              <Link
                to="/signup/email"
                className="w-full rounded-full py-4 px-6 text-base sm:text-lg font-semibold text-white text-center no-underline transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-98 cursor-pointer mt-2 tracking-wide"
                style={{ backgroundColor: 'var(--bg-signup-btn)' }}
              >
                Sign up with other email provider
              </Link>
            </div>
          </div>

          {/* Footer Navigation Links */}
          <div className="mt-12 flex justify-center gap-10 text-sm sm:text-base font-semibold">
            <Link 
              to="/faq" 
              className="hover:underline hover:scale-105 transition-all duration-200"
              style={{ color: 'var(--text-signup-subtitle)' }}
            >
              FAQ
            </Link>
            <Link 
              to="/terms-and-conditions" 
              className="hover:underline hover:scale-105 transition-all duration-200"
              style={{ color: 'var(--text-signup-subtitle)' }}
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}