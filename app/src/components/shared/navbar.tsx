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
  { label: 'Features', href: '#features' },
  { label: 'Get Started', href: '#get-started' },
  { label: 'Why Us?', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ variant = 'app' }: NavbarProps) {
  const isLanding = variant === 'landing';
  const items = isLanding ? landingItems : appNavItems;

  return (
    <>
      {/* Mobile Floating Pill Navbar (Matching Desktop Colors & Blur Effect) */}
      <div className="md:hidden">
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-2">
          <nav
            aria-label={isLanding ? "Landing Mobile" : "Primary Mobile"}
            className="inline-flex items-center gap-1 rounded-full bg-white/70 dark:bg-slate-900/80 p-1.5 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-xl transition-colors duration-200"
          >
            {items.map((item) => {
              const label = item.label;
              const key = 'to' in item ? item.to : item.href;

              if ('to' in item) {
                return (
                  <NavLink
                    key={key}
                    to={item.to}
                    className={({ isActive }) =>
                      `whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all no-underline ${
                        isActive
                          ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold shadow-sm'
                          : 'text-slate-800 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/10'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                );
              }

              return (
                <a
                  key={key}
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/10 transition no-underline"
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom spacing helper so content is not obscured on mobile */}
        <div className="h-20" />
      </div>

      {/* Desktop Sticky Navbar */}
      <div className="hidden md:flex justify-center px-6">
        <nav
          aria-label={isLanding ? "Landing Desktop" : "Primary Desktop"}
          className="inline-flex flex-wrap items-center gap-1.5 rounded-full bg-white/45 dark:bg-slate-900/45 p-1.5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-lg transition-colors duration-200"
        >
          {items.map((item) => {
            const label = item.label;
            const key = 'to' in item ? item.to : item.href;

            if ('to' in item) {
              return (
                <NavLink
                  key={key}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-sm font-medium no-underline transition-all duration-200 ${
                      isActive
                        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md font-semibold'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/10'
                    }`
                  }
                >
                  {label}
                </NavLink>
              );
            }

            return (
              <a
                key={key}
                href={item.href}
                className="rounded-full px-5 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 no-underline transition hover:bg-white/40 dark:hover:bg-white/10"
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}