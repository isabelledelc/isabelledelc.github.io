import { Link, useLocation } from 'react-router-dom';

function Brand() {
	return (
		<Link to="/" className="inline-flex items-center gap-2.5 text-[#2f8f79] no-underline">
			<span className="relative box-border h-8.5 w-8.5 rounded-xl border-[3px] border-[#2f8f79]">
				<span className="absolute left-1.25 top-1.25 h-1.25 w-1.25 rounded-full bg-[#2f8f79]" />
				<span className="absolute top-2 left-2 box-border h-4 w-4 rounded-[10px] border-[3px] border-[#2f8f79] border-t-transparent" />
			</span>
			<span className="origin-left scale-y-[0.72] text-[44px] leading-none font-bold tracking-[0.02em]">TOUCH</span>
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
	const isLandingPage = location.pathname === '/';

	return (
		<header className="bg-white px-6 py-4">
			<div className="flex items-center justify-between border-b border-[#e7ecea] pb-4">
				<Brand />

				{isLandingPage ? (
					<Link
						to="/login"
						className="rounded-full border-2 border-[#2f8f79] bg-white px-5 py-1.75 text-sm leading-none text-[#1b1f24] no-underline"
					>
						Login
					</Link>
				) : (
					<div className="flex items-center gap-3.5 text-sm text-[#30363d]">
						<button
							type="button"
							aria-label="Notifications"
							className="inline-flex h-5 w-5 items-center justify-center border-0 bg-transparent p-0"
						>
							<BellIcon />
						</button>
						<span className="inline-flex items-center gap-2">
							<span className="h-6.5 w-6.5 shrink-0 rounded-full bg-[#9aa0a6]" aria-hidden="true" />
							<span>Name</span>
							<ChevronDownIcon />
						</span>
					</div>
				)}
			</div>
		</header>
	);
}
