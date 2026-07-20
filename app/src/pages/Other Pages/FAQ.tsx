import { Link } from 'react-router-dom';
import Header from '../../components/shared/header';

const faqItems = [
	'What is Opus Touch - Individual?',
	'Register for Opus Touch - Individual',
	'What is Opus Touch - Individual?',
	'Register for Opus Touch - Individual',
	'What is Opus Touch - Individual?',
	'Register for Opus Touch - Individual',
	'What is Opus Touch - Individual?',
	'Register for Opus Touch - Individual',
	'What is Opus Touch - Individual?',
	'Register for Opus Touch - Individual',
];

function ChevronDown() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default function FAQ() {
	return (
		<div className="h-screen overflow-hidden bg-[#e9e9e9]">
			<div className="flex h-full w-full flex-col overflow-hidden bg-[#e9e9e9]">
				<Header />

				<div className="flex min-h-0 flex-1 flex-col px-6 py-6">
					<div className="mb-5 flex items-center gap-5 text-[#404046]">
						<Link to="/signup" className="text-4xl leading-none no-underline">‹</Link>
						<h1 className="text-4xl font-semibold">FAQ</h1>
					</div>

					<div className="min-h-0 flex-1 overflow-y-auto pr-2">
						<div className="flex flex-col gap-4 pb-2">
							{faqItems.map((item, index) => (
								<button
									key={`${item}-${index}`}
									type="button"
									className={
										'flex w-full items-center justify-between rounded-lg border px-5 py-5 text-left text-[19px] font-medium text-[#373740] ' +
										(index === 0 ? 'border-[#59cd85] bg-white' : 'border-[#9a9aa1] bg-transparent')
									}
								>
									<span>{item}</span>
									<ChevronDown />
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
