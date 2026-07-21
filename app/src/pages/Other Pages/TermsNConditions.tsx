import { Link } from 'react-router-dom';
import Header from '../../components/shared/header';

const rows = [
	'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas',
	'Molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et',
	'Dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque',
	'Nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus',
	'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet',
	'Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum',
	'Rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias',
	'Consequatur aut perferendis doloribus asperiores repellat',
	'Rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias',
	'Consequatur aut perferendis doloribus asperiores repellat',
	'Rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias',
	'Consequatur aut perferendis doloribus asperiores repellat',
	'Rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias',
];

export default function TermsNConditions() {
	return (
		<div className="h-screen overflow-hidden bg-[#e9e9e9]">
			<div className="flex h-full w-full flex-col overflow-hidden bg-[#e9e9e9]">
				<Header />

				<div className="flex min-h-0 flex-1 flex-col px-6 py-6">
					<div className="mb-5 flex items-center gap-5 text-[#404046]">
						<Link to="/signup" className="text-4xl leading-none no-underline">‹</Link>
						<h1 className="text-5xl font-semibold">Terms and conditions</h1>
					</div>

					<div className="min-h-0 flex-1 rounded-lg border border-[#59cd85] p-6">
						<div className="h-full overflow-y-auto pr-3">
							<h2 className="mb-5 text-[36px] font-semibold text-[#34343a]">1. Introduction and Acceptance</h2>
							<ol className="space-y-3 pl-6 text-[18px] leading-normal text-[#3b3b42]">
								{rows.map((row, index) => (
									<li key={`row-${index}`}>{row}</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
