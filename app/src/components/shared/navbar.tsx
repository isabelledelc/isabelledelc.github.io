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
            {/* Mobile Floating Pill Navbar */}
            <div className="md:hidden">
                <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-2">
                    <nav
                        aria-label={isLanding ? "Landing Mobile" : "Primary Mobile"}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-900 p-1.5 border border-slate-700 shadow-xl"
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
                                            `whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all outline-none focus:outline-none focus-visible:ring-0 active:outline-none ${
                                                isActive
                                                    ? 'bg-white text-slate-900 font-semibold'
                                                    : 'text-slate-300 hover:text-white'
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
                                    className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition outline-none focus:outline-none focus-visible:ring-0 active:outline-none"
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </nav>
                </div>

                {/* spacer so page content is not hidden behind the fixed nav */}
                <div className="h-20" />
            </div>

            {/* Desktop Navbar */}
            <div className="mt-5 hidden md:flex justify-center px-6">
                <nav
                    aria-label={isLanding ? "Landing Desktop" : "Primary Desktop"}
                    className="inline-flex flex-wrap items-center gap-1.5 rounded-full bg-white/35 p-1.5 backdrop-blur-xl border border-white/50 shadow-lg transition-colors duration-200"
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