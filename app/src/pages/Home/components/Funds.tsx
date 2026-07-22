import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface FundItem {
  id: string;
  title: string;
  nav: string;
  dailyReturn: string;
}

const fundsList: FundItem[] = Array(4).fill({
  id: '1',
  title: 'Opus Income Plus',
  nav: 'MYR X.XXXX',
  dailyReturn: '+x.xx%',
});

export default function Funds() {
  const navigate = useNavigate();

  const handleInvest = (e: React.MouseEvent, fund: FundItem) => {
    // Prevent clicking "Invest" from opening the fund details page
    e.stopPropagation();
    navigate('/top-up', { state: { selectedFund: { id: fund.id, name: fund.title } } });
  };

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Funds</h2>
        <Link to="/portfolio/view-all-my-funds" className="text-[14px] text-sky-600 dark:text-sky-300/80 hover:underline">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fundsList.map((fund, index) => (
          <div
            key={index}
            onClick={() => navigate(`/funds/${fund.id}`)}
            className="group relative rounded-2xl p-4 backdrop-blur-md shadow-md transition-all border bg-white/80 border-slate-200/80 hover:bg-white dark:bg-[#4b7768]/70 dark:border-white/10 dark:hover:bg-[#4b7768]/90"
            >
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-base font-medium text-slate-900 dark:text-white">{fund.title}</h3>
              <ChevronRight className="h-5 w-5 text-slate-400 dark:text-white/80 transition-transform group-hover:translate-x-0.5" />
            </div>
            <p className="my-1 text-sm text-slate-600 dark:text-white/90">
              <span className="font-semibold text-slate-900 dark:text-white">NAV:</span> {fund.nav}
            </p>
            <p className="my-1 text-sm text-slate-600 dark:text-white/90">
              Daily Return: <span className="text-emerald-600 dark:text-emerald-300">{fund.dailyReturn}</span>
            </p>
            <button
              type="button"
              onClick={(e) => handleInvest(e, fund)}
              className="mt-2 inline-block text-xs font-medium text-sky-600 dark:text-sky-300/80 underline hover:text-sky-500 dark:hover:text-sky-200"
            >
              Invest
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}