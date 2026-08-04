import { NavLink } from 'react-router-dom';

type NavbarVariant = 'app' | 'landing';

type NavbarProps = {
  variant?: NavbarVariant;
};

const appNavItems = [
  { label: 'Dashboard', to: '/home' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Invest', to: '/invest' },
  { label: 'Activity', to: '/activity' },
  { label: 'Settings', to: '/settings' },
];

const landingItems = [
  { label: 'Features', to: '/#features' },
  { label: 'Get Started', to: '/#get-started' },
  { label: 'Why Us?', to: '/#why-us' },
  { label: 'Support', to: '/#faq' },
];

export default function Navbar({ variant = 'app' }: NavbarProps) {
  const isLanding = variant === 'landing';
  const items = isLanding ? landingItems : appNavItems;

  return (
    <>
      {/* Mobile Floating Pill Navbar */}
      <div className="md:hidden">
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-2">
          <nav
            aria-label={isLanding ? "Landing Mobile" : "Primary Mobile"}
            className="inline-flex items-center gap-1 rounded-full bg-white/70 dark:bg-slate-900/80 p-1.5 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-xl transition-colors duration-200"
          >
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-200 no-underline cursor-pointer"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom spacing helper */}
        <div className="h-20" />
      </div>

      {/* Desktop Sticky Navbar */}
      <div className="hidden md:flex justify-center px-6">
        <nav
          aria-label={isLanding ? "Landing Desktop" : "Primary Desktop"}
          className="inline-flex flex-wrap items-center gap-1.5 rounded-full bg-white/45 dark:bg-slate-900/45 p-1.5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-lg transition-colors duration-200"
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="rounded-full px-5 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-200 no-underline cursor-pointer"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}