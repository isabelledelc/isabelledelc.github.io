// Header.tsx
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Navbar from '../shared/navbar'; // Adjust path if needed
import logo from '../../assets/logo.png';

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function Brand() {
  return (
    <Link 
      to="/" 
      className="inline-flex h-12 items-center justify-center no-underline rounded-2xl bg-white/70 dark:bg-white/65 px-4 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-md transition-all hover:bg-white/80 dark:hover:bg-[#2b4737]/80 active:scale-95 shrink-0"
    >
      <img src={logo} alt="OpusTouch logo" className="h-8 w-auto" />
    </Link>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path   
        d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5m6 0a3 3 0 1 1-6 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const appRoutePrefixes = ['/home', '/portfolio', '/invest', '/activity', '/settings', '/market-commentary'];
  const isInAppPage = appRoutePrefixes.some(
    (routePrefix) => location.pathname === routePrefix || location.pathname.startsWith(`${routePrefix}/`)
  );
  const useLandingHeaderStyle = !isInAppPage;

  return (
    <header className="w-full bg-transparent px-6 py-4">
      {/* 
        Change 'items-end' below to 'items-start' if you prefer aligning to the TOP instead of the BOTTOM 
      */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-4">
        
        {/* Left Column: Brand (Height: h-12) */}
        <div className="flex items-center justify-start">
          <Brand />
        </div>

        {/* Center Column: Navbar (Height: h-12) */}
        <div className="flex items-center justify-center">
          <Navbar variant={useLandingHeaderStyle ? 'landing' : 'app'} />
        </div>

        {/* Right Column: Control Pills (Height: h-12 each) */}
        <div className="flex items-center justify-end gap-3">
          {useLandingHeaderStyle ? (
            <Link
              to="/#login"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-white/70 px-6 text-sm font-semibold text-slate-800 no-underline backdrop-blur-md border border-white/40 shadow-md transition-all hover:bg-white/90 active:scale-95 shrink-0"
            >
              Login
            </Link>
          ) : (
            <>
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 dark:bg-[#416651]/60 text-slate-700 dark:text-slate-100 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-md transition-all hover:bg-white/90 dark:hover:bg-[#2b4737]/90 active:scale-95 cursor-pointer shrink-0"
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>

              {/* Notifications */}
              <button
                type="button"
                aria-label="Notifications"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 dark:bg-[#416651]/60 text-slate-700 dark:text-slate-100 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-md transition-all hover:bg-white/90 dark:hover:bg-[#2b4737]/90 active:scale-95 cursor-pointer shrink-0"
              >
                <BellIcon />
              </button>

              {/* Profile Badge */}
              <div className="inline-flex h-12 items-center gap-2.5 rounded-2xl bg-white/70 dark:bg-[#416651]/60 px-4 text-sm font-medium text-slate-800 dark:text-slate-100 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-md transition-colors duration-200 cursor-pointer hover:bg-white/90 dark:hover:bg-[#2b4737]/90 shrink-0">
                <span className="h-7 w-7 shrink-0 rounded-full bg-[#9aa0a6]" aria-hidden="true" />
                <span className="whitespace-nowrap">Name</span>
                <ChevronDownIcon />
              </div>
            </>
          )}
        </div>

      </div>
    </header>
  );
}