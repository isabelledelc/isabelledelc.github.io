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
	if (variant === 'landing') {
		return (
			<div className="mt-4 flex justify-center px-6">
				<nav
					aria-label="Landing"
					className="inline-flex w-full max-w-215 flex-wrap items-center justify-center gap-2 rounded-full bg-[#4f726f]/85 p-2"
				>
					{landingItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-full px-6 py-2 text-[15px] font-medium text-[#0f2020] no-underline transition hover:bg-white/25"
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
			<nav
				aria-label="Primary"
				className="inline-flex flex-wrap items-center gap-1 rounded-full bg-[#8fc879] p-2"
			>
				{appNavItems.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						className={({ isActive }) =>
							`rounded-full px-5 py-2 text-[15px] leading-none font-medium tracking-[-0.01em] text-[#122222] no-underline transition ${
								isActive ? 'bg-[#b9dcab]' : 'hover:bg-[#a8d495]'
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