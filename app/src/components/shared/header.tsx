import { useState, useEffect, useRef, type ComponentType } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Navbar from '../shared/navbar';
import logo from '../../assets/logo.png';

const NavbarComponent = Navbar as ComponentType<{ variant: 'landing' | 'app' }>;

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

function LogoutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

type HeaderProps = {
  variant?: 'landing' | 'app';
};

export default function Header({ variant = 'app' }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // Dropdown state and ref for closing on outside click
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const appRoutePrefixes = ['/home', '/portfolio', '/invest', '/activity', '/settings', '/market-commentary', '/transactions', '/fund-fact-sheet', '/funds' , '/top-up'];
  const isInAppPage = appRoutePrefixes.some(
    (routePrefix) => location.pathname === routePrefix || location.pathname.startsWith(`${routePrefix}/`)
  );
  const useLandingHeaderStyle = !isInAppPage;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setDropdownOpen(false);
    navigate('/'); // Redirect to landing page
  };

  const handleLandingLoginClick = () => {
    if (location.pathname === '/') {
      const loginSection = document.getElementById('login-hero');
      if (loginSection) {
        loginSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    navigate('/');
    setTimeout(() => {
      const loginSection = document.getElementById('login-hero');
      if (loginSection) {
        loginSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <>
      {/* TOP HEADER BAR (STICKY) */}
      <header className="sticky top-0 z-50 w-full bg-transparent px-4 md:px-6 py-4 backdrop-blur-xs transition-colors">
        <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-end gap-4">
          
          {/* Brand Logo (Always Top Left) */}
          <div className="flex items-center justify-start">
            <Brand />
          </div>

          {/* Center Navbar (Desktop View) */}
          <div className="hidden md:flex items-center justify-center">
            <NavbarComponent variant={useLandingHeaderStyle ? 'landing' : 'app'} />
          </div>

          {/* Control Pills (Theme, Notifications, Profile) */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            {useLandingHeaderStyle ? (
              <button
                type="button"
                onClick={handleLandingLoginClick}
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-white/75 dark:bg-[#416651]/65 px-6 text-sm font-semibold text-slate-800 dark:text-slate-100 no-underline backdrop-blur-md border border-white/40 dark:border-white/15 shadow-md transition-all hover:bg-white/90 dark:hover:bg-[#2b4737]/90 active:scale-95 shrink-0 cursor-pointer"
              >
                Login
              </button>
            ) : (
              <>
                {/* Theme Toggle (Desktop Only) */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 dark:bg-[#416651]/60 text-slate-700 dark:text-slate-100 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-md transition-all hover:bg-white/90 dark:hover:bg-[#2b4737]/90 active:scale-95 cursor-pointer shrink-0"
                >
                  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>

                {/* Notifications (Desktop Only) */}
                <button
                  type="button"
                  aria-label="Notifications"
                  className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 dark:bg-[#416651]/60 text-slate-700 dark:text-slate-100 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-md transition-all hover:bg-white/90 dark:hover:bg-[#2b4737]/90 active:scale-95 cursor-pointer shrink-0"
                >
                  <BellIcon />
                </button>

                {/* Profile Badge & Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="inline-flex h-12 items-center gap-2.5 rounded-2xl bg-white/70 dark:bg-[#416651]/60 px-3.5 sm:px-4 text-sm font-medium text-slate-800 dark:text-slate-100 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-md transition-colors duration-200 cursor-pointer hover:bg-white/90 dark:hover:bg-[#2b4737]/90 shrink-0"
                  >
                    <span className="h-7 w-7 shrink-0 rounded-full bg-[#9aa0a6]" aria-hidden="true" />
                    <span className="whitespace-nowrap">Name</span>
                    <ChevronDownIcon />
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white dark:bg-[#22382c] border border-slate-200 dark:border-white/10 shadow-xl py-2 z-50 animate-fade-in text-slate-800 dark:text-slate-100">
                      
                      {/* Mobile-Only Items (Theme & Notifications) */}
                      <div className="md:hidden border-b border-slate-100 dark:border-white/10 pb-1.5 mb-1.5 px-1">
                        <button
                          type="button"
                          onClick={() => toggleTheme()}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left hover:bg-slate-100 dark:hover:bg-[#2b4737] rounded-lg transition-colors cursor-pointer"
                        >
                          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                          <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>

                        <button
                          type="button"
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left hover:bg-slate-100 dark:hover:bg-[#2b4737] rounded-lg transition-colors cursor-pointer"
                        >
                          <BellIcon />
                          <span>Notifications</span>
                        </button>
                      </div>

                      {/* Log Out Option */}
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left hover:bg-slate-100 dark:hover:bg-[#2b4737] transition-colors cursor-pointer text-red-600 dark:text-red-400 font-medium"
                      >
                        <LogoutIcon />
                        <span>Log Out</span>
                      </button>

                    </div>
                  )}
                </div>
              </>
            )}
          </div>

        </div>
      </header>

      {/* MOBILE FLOATING BOTTOM NAVBAR */}
      <div className="md:hidden">
        <NavbarComponent variant={useLandingHeaderStyle ? 'landing' : 'app'} />
      </div>
    </>
  );
}