import { Link } from 'react-router-dom';

export default function LoginHeroSection() {
	return (
		<section id="login" className="mx-auto mt-10 w-full max-w-3xl px-6">
			<div className="rounded-2xl border border-[#d8e4dd] bg-white p-8 shadow-sm">
				<h2 className="text-center text-4xl font-bold leading-tight text-[#203330]">
					Bond Investments
					<br />
					Anytime, Anywhere!
				</h2>

				<p className="mx-auto mt-5 max-w-2xl text-center text-sm text-[#546864]">
					Opus Touch is a 24/7 online portal to meet your investment needs. Whether you are on-the-go
					or simply at home, never miss a beat to fixed income opportunities.
				</p>

				<form className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
					<button
						type="button"
						className="rounded-lg border border-[#b6cec0] bg-white px-4 py-2.5 text-sm font-medium text-[#1d2a27]"
					>
						Sign in with Google
					</button>

					<input
						type="email"
						placeholder="Email address"
						className="rounded-lg border border-[#b6cec0] px-4 py-2.5 text-sm text-[#1f2d2a] outline-none focus:border-[#2f8f79]"
					/>

					<input
						type="password"
						placeholder="Password"
						className="rounded-lg border border-[#b6cec0] px-4 py-2.5 text-sm text-[#1f2d2a] outline-none focus:border-[#2f8f79]"
					/>

					<Link
						to="/home"
						className="mt-2 rounded-lg bg-[#2f8f79] px-4 py-2.5 text-center text-sm font-semibold text-white no-underline"
					>
						Log In
					</Link>

					<Link
						to="/signup"
						className="rounded-lg border border-[#2f8f79] px-4 py-2.5 text-center text-sm font-semibold text-[#2f8f79] no-underline"
					>
						Don't have an account? Sign Up
					</Link>
				</form>
			</div>
		</section>
	);
}
