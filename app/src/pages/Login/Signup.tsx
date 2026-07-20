import { Link } from 'react-router-dom';

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

export default function Signup() {
	return (
		<div
			className="min-h-screen w-full bg-cover bg-center px-3 py-3"
			// style={{ backgroundImage: `url(${heroImage})` }}
		>
			<div className="mx-auto flex max-w-350 flex-col">
				<header className="flex items-center justify-between bg-white px-6 py-4">
					<Brand />
					<Link
						to="/#login"
						className="rounded-full border-2 border-[#2f8f79] bg-white px-7 py-2 text-sm text-[#1b1f24] no-underline"
					>
						Login
					</Link>
				</header>

				<main className="flex min-h-[calc(100vh-110px)] items-center justify-center py-10">
					<section className="w-full max-w-235 rounded-3xl border border-white/35 bg-white/28 px-8 py-14 backdrop-blur-sm">
						<h1 className="text-center text-6xl font-bold leading-tight text-[#464b59]">Hello! 👋</h1>
						<p className="mt-3 text-center text-3xl font-semibold text-[#5b6072]">Register with us</p>

						<div className="mx-auto mt-12 flex w-full max-w-130 flex-col gap-4">
							<button
								type="button"
								className="rounded-full bg-[#1d9878] px-6 py-3 text-base font-semibold text-white"
							>
								Sign up with Google
							</button>
							<button
								type="button"
								className="rounded-full bg-[#1d9878] px-6 py-3 text-base font-semibold text-white"
							>
								Sign up with other email provider
							</button>
						</div>

						<div className="mt-10 flex items-center justify-center gap-12 text-base">
							<Link to="/faq" className="text-[#6e727b] underline no-underline">FAQ</Link>
							<Link to="/terms-and-conditions" className="text-[#6e727b] underline no-underline">
								Terms and Conditions
							</Link>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
