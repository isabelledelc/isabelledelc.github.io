import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';

const sampleFunds = [
	{ id: '1', name: 'OPUS INCOME PLUS', code: 'IPF', amount: 'MYR 1,250.00', returnVal: '+0.2450' },
	{ id: '2', name: 'OPUS INCOME PLUS', code: 'IPF', amount: 'MYR 3,100.50', returnVal: '+0.1820' },
	{ id: '3', name: 'OPUS INCOME PLUS', code: 'IPF', amount: 'MYR 850.00', returnVal: '+0.0910' },
	{ id: '4', name: 'OPUS INCOME PLUS', code: 'IPF', amount: 'MYR 4,620.10', returnVal: '+0.3120' },
	{ id: '5', name: 'OPUS CASH EXTRA', code: 'CEF', amount: 'MYR 2,100.00', returnVal: '+0.1050' },
];

export default function ViewAllMyFunds() {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen w-full bg-[#E9F7E5]">
			<Header />
			<Navbar />

			<main className="mx-auto max-w-6xl px-4 pb-16 pt-8 text-slate-800">
				<div className="mb-6 flex items-center justify-between">
					<h1 className="text-2xl font-bold text-slate-900">All My Funds</h1>
					<button
						onClick={() => navigate('/portfolio')}
						className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 cursor-pointer"
					>
						Back to Portfolio
					</button>
				</div>

				<div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
					<div className="flex flex-col gap-3">
						{sampleFunds.map((fund) => (
							<button
								key={fund.id}
								onClick={() => navigate(`/funds/${fund.id}`)}
								className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-4 text-left transition hover:border-emerald-500 hover:bg-emerald-50"
							>
								<div>
									<h2 className="text-sm font-bold text-slate-900">{fund.name}</h2>
									<span className="text-xs font-semibold text-slate-500">{fund.code}</span>
								</div>
								<div className="flex items-center gap-3 text-right">
									<div>
										<p className="text-sm font-bold text-slate-900">{fund.amount}</p>
										<p className="text-xs font-semibold text-emerald-600">{fund.returnVal}</p>
									</div>
									<ChevronRight className="h-5 w-5 text-slate-400" />
								</div>
							</button>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
