import { Link } from 'react-router-dom';
import Header from '../../components/shared/header';

export default function Signup() {
	return (
		<div className="min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'none' }}>
			<Header />

			<main className="flex items-center justify-center px-3 py-3">
				<div className="flex w-full max-w-235 flex-col items-center">
					<section className="w-full rounded-3xl border border-white/35 bg-white/28 px-8 py-14 backdrop-blur-sm">
						<h1 className="text-center text-6xl font-bold leading-tight text-[#464b59]">Hello! 👋</h1>
						<p className="mt-3 text-center text-3xl font-semibold text-[#5b6072]">Register with us</p>

						<div className="mx-auto mt-12 flex w-full max-w-130 flex-col gap-4">
							<button
								type="button"
								className="rounded-full bg-[#1d9878] px-6 py-3 text-base font-semibold text-white"
							>
								Sign up with Google
							</button>
							<Link
								to="/signup/email"
								className="rounded-full bg-[#1d9878] px-6 py-3 text-base font-semibold text-white no-underline text-center hover:bg-[#156e57] transition-colors"
							>
								Sign up with other email provider
							</Link>
						</div>

						<div className="mt-10 flex items-center justify-center gap-12 text-base">
							<Link to="/faq" className="text-[#6e727b]" style={{ textDecoration: 'none' }}>
								FAQ
							</Link>
							<Link to="/terms-and-conditions" className="text-[#6e727b]" style={{ textDecoration: 'none' }}>
								Terms and Conditions
							</Link>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}