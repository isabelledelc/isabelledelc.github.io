import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
// import Header from '../../components/shared/header';

const termsRows = [
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
  'Molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et.',
  'Dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque.',
  'Nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.',
  'Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.',
  'Rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.',
  'Consequatur aut perferendis doloribus asperiores repellat eaque ipsa quae ab illo inventore veritatis.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
];

export default function TermsNConditions() {
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-[#E9F7E5]/30 to-slate-100 flex flex-col font-sans">
      {/* <Header /> */}

      <main className="flex-1 min-h-0 max-w-5xl w-full mx-auto px-4 py-6 sm:px-8 flex flex-col">
        {/* Header Bar */}
        <div className="mb-6 flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="p-2.5 rounded-xl bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 transition shadow-xs flex items-center justify-center cursor-pointer"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Please review our user terms and operational guidelines carefully.
            </p>
          </div>
        </div>

        {/* Scrollable Terms Card */}
        <div className="flex-1 min-h-0 rounded-3xl bg-white border border-emerald-200/80 shadow-xl p-6 sm:p-8 flex flex-col overflow-hidden">
          <div className="flex-1 min-h-0 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1F5C2E] mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
              1. Introduction and Acceptance
            </h2>
            <ol className="space-y-4 pl-5 list-decimal text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              {termsRows.map((row, index) => (
                <li key={`term-${index}`} className="pl-2">
                  {row}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}