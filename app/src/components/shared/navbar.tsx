import { NavLink } from 'react-router-dom';

type NavbarVariant = 'app' | 'landing';

type NavbarProps = {
    variant?: NavbarVariant;
};

// Kept intact: exactly your 5 items
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
    if (variant === 'landing') {
        return (
            <div className="mt-4 flex justify-center px-6">
                {/* Changed to inline-flex without max-w-215 so width dynamically shrinks to content */}
                <nav
                    aria-label="Landing"
                    className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full bg-white/30 dark:bg-white/10 p-1.5 backdrop-blur-xl border border-white/40 dark:border-white/20 shadow-lg transition-colors duration-200"
                >
                    {landingItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="rounded-full px-5 py-2 text-sm font-medium text-slate-800 dark:text-white no-underline transition hover:bg-white/40 dark:hover:bg-white/20"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        );
    }

    return (
        <div className="mt-5 flex justify-center px-6">
            {/* Translucent pill bar that adjusts for light & dark themes */}
            <nav
                aria-label="Primary"
                className="inline-flex flex-wrap items-center gap-1.5 rounded-full bg-white/35 dark:bg-white/12 p-1.5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg transition-colors duration-200"
            >
                {appNavItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `rounded-full px-5 py-2 text-sm font-medium no-underline transition-all duration-200 ${
                                isActive
                                    ? 'bg-white/90 dark:bg-white/90 text-slate-900 dark:text-slate-900 shadow-md font-semibold'
                                    : 'text-slate-800 hover:bg-white/30 dark:text-white dark:hover:bg-white/20 dark:hover:text-white'
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}