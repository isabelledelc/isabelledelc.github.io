import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ViewMarketCommentaryProps {
	isOpen: boolean;
	onClose: () => void;
}

// Sample data with routes/IDs
const MOCK_COMMENTARIES = [
	{
		id: 'fed-rate-decision-july-2026',
		date: 'Jul 22, 2026',
		title: 'Global Markets React to Fed Rate Decisions',
		summary: 'Equities rallied following signals of steady monetary policy, with tech leading the charge.',
	},
	{
		id: 'q3-tech-earnings-overview',
		date: 'Jul 18, 2026',
		title: 'Q3 Tech Earnings Overview',
		summary: 'Major cloud and enterprise software providers report higher-than-expected margin growth.',
	},
	{
		id: 'energy-sector-commodities-shift',
		date: 'Jul 12, 2026',
		title: 'Energy Sector Outlook & Commodities Shift',
		summary: 'Oil prices stabilized while renewable infrastructure investments hit a record high this quarter.',
	},
	{
		id: 'malaysian-ringgit-strength-q3',
		date: 'Jul 05, 2026',
		title: 'MYR Strengthening Against Regional Currencies',
		summary: 'Stronger export numbers and foreign direct investment continue to bolster domestic performance.',
	},
	{
		id: 'global-supply-chain-recovery',
		date: 'Jun 28, 2026',
		title: 'Supply Chain Bottlenecks Easing Across Asia',
		summary: 'Freight rates normalize as port efficiency improvements take effect across major trade hubs.',
	},
];

export default function ViewMarketCommentary({ isOpen, onClose }: ViewMarketCommentaryProps) {
	const navigate = useNavigate();

	if (!isOpen) return null;

	const handleItemClick = (id: string) => {
		onClose(); // Close the modal
		navigate(`/market-commentary/${id}`); // Navigate to the detailed page
	};

	return (
		/* Backdrop Overlay */
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
			
			{/* Modal Card with Fixed Height */}
			<div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-white shadow-2xl text-slate-800 overflow-hidden">
				
				{/* Modal Header (Fixed at Top) */}
				<div className="flex items-center justify-between border-b border-slate-100 p-6 shrink-0">
					<div>
						<h3 className="text-xl font-bold text-slate-900">Market Commentary</h3>
						<p className="text-xs text-slate-500 mt-0.5">Select a report to read full analysis</p>
					</div>
					
					<button
						onClick={onClose}
						className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
						aria-label="Close modal"
					>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				{/* Modal Body: Scrollable Area (`overflow-y-auto`) */}
				<div className="flex-1 overflow-y-auto p-6 space-y-3">
					{MOCK_COMMENTARIES.map((item) => (
						<div
							key={item.id}
							onClick={() => handleItemClick(item.id)}
							className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 p-4 cursor-pointer hover:bg-slate-100 hover:border-slate-300 transition-all duration-200"
						>
							<div className="pr-4">
								<span className="text-xs font-semibold text-[#2f8f79]">{item.date}</span>
								<h4 className="font-semibold text-slate-900 mt-1 group-hover:text-[#2f8f79] transition-colors">
									{item.title}
								</h4>
								<p className="text-sm text-slate-600 mt-1 line-clamp-2">{item.summary}</p>
							</div>

							{/* Arrow indicating clickability */}
							<ChevronRight className="h-5 w-5 text-slate-400 shrink-0 group-hover:translate-x-1 group-hover:text-[#2f8f79] transition-all" />
						</div>
					))}
				</div>

				{/* Modal Footer (Fixed at Bottom) */}
				<div className="border-t border-slate-100 p-4 shrink-0 flex justify-end bg-slate-50/50">
					<button
						type="button"
						onClick={onClose}
						className="rounded-lg bg-slate-200 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-300 transition"
					>
						Close
					</button>
				</div>

			</div>
		</div>
	);
}