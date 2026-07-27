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
            {/* ========================================================= */}
            {/* 1. MOBILE NAVBAR (< md)                                   */}
            {/* ========================================================= */}
            <div className="mt-4 flex justify-center px-2 md:hidden">
                <nav
                    aria-label={isLanding ? "Landing Mobile" : "Primary Mobile"}
                    className={`inline-flex flex-nowrap items-center gap-0.5 rounded-full bg-white/35 p-1 backdrop-blur-xl border border-white/50 shadow-lg transition-colors duration-200`}
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
                                        `whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium no-underline transition-all duration-200 ${
                                            isActive
                                                ? 'bg-white/90 text-slate-900 shadow-md font-semibold'
                                                : 'text-slate-800 hover:bg-white/30'
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
                                className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-800 no-underline transition hover:bg-white/40"
                            >
                                {label}
                            </a>
                        );
                    })}
                </nav>
            </div>

            {/* ========================================================= */}
            {/* 2. DESKTOP NAVBAR (>= md)                                 */}
            {/* ========================================================= */}
            <div className="mt-5 hidden md:flex justify-center px-6">
                <nav
                    aria-label={isLanding ? "Landing Desktop" : "Primary Desktop"}
                    className={`inline-flex flex-wrap items-center gap-1.5 rounded-full bg-white/35 p-1.5 backdrop-blur-xl border border-white/50 shadow-lg transition-colors duration-200`}
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
                                                ? 'bg-white/90 text-slate-900 shadow-md font-semibold'
                                                : 'text-slate-800 hover:bg-white/30'
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
                                className="rounded-full px-5 py-2 text-sm font-medium text-slate-800 no-underline transition hover:bg-white/40"
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