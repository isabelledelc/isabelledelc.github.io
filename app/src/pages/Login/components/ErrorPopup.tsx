interface ErrorPopupProps {
	isOpen: boolean;
	onClose: () => void;
	errors: string[];
}

export default function ErrorPopup({ isOpen, onClose, errors }: ErrorPopupProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
			{/* Modal Box */}
			<div className="relative w-full max-w-105 rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
				{/* Top-right 'X' close button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors focus:outline-none"
					aria-label="Close error popup"
				>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>

				{/* Title */}
				<h2 className="text-center text-2xl font-bold text-[#1b1f24] mb-6">Error</h2>

				{/* Big Green Circle with White X */}
				<div className="flex justify-center mb-6">
					<div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#3d7a34] text-white shadow-sm">
						<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</div>
				</div>

				{/* Messages */}
				<div className="text-left text-[#1b1f24]">
					<p className="text-[19px] font-semibold leading-tight mb-4">
						Please ensure the following information is provided:
					</p>
					<ul className="space-y-2 text-base font-semibold text-[#1b1f24] list-disc list-inside pl-1 mb-8">
						{errors.map((error, idx) => (
							<li key={idx} className="leading-snug">
								{error}
							</li>
						))}
					</ul>
				</div>

				{/* Bottom Close Button */}
				<div className="flex justify-center">
					<button
						onClick={onClose}
						className="w-full max-w-45 rounded-full bg-[#1db954] hover:bg-[#1aa34a] text-white font-semibold py-3 text-base transition-colors shadow-sm text-center"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}
