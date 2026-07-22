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
				<nav
					aria-label="Landing"
					className="inline-flex w-full max-w-215 flex-wrap items-center justify-center gap-1.5 rounded-full bg-[#5d8b7b]/50 p-1.5 backdrop-blur-md border border-white/10 shadow-lg"
				>
					{landingItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-full px-5 py-2 text-sm font-medium text-white no-underline transition hover:bg-white/20"
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
			{/* Translucent pill bar with subtle glassmorphism */}
			<nav
				aria-label="Primary"
				className="inline-flex flex-wrap items-center gap-1.5 rounded-full bg-[#6a9e8e]/65 p-1.5 backdrop-blur-md border border-white/15 shadow-md"
			>
				{appNavItems.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						className={({ isActive }) =>
							`rounded-full px-5 py-2 text-sm font-medium no-underline transition-all duration-200 ${
								isActive
									? 'bg-[#e2ede9]/90 text-slate-800 shadow-sm font-semibold'
									: 'text-white hover:bg-white/20 hover:text-white'
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