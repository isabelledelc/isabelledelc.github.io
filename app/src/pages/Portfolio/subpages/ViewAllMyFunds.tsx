import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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
    <div className="min-h-screen w-full transition-colors duration-300 [background:var(--bg-page)] text-[var(--text-main)]">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Back Button with ChevronLeft Icon */}
            <button
              onClick={() => navigate(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-app)] bg-[var(--bg-card)] text-[var(--text-main)] transition hover:bg-[var(--bg-card-hover)] cursor-pointer"
              aria-label="Go back"
            >
              <ChevronLeft className="h-6 w-6 text-[var(--text-main)]" />
            </button>
            <h1 className="text-2xl font-bold text-[var(--text-heading)]">All My Funds</h1>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border-app)] bg-[var(--bg-card)] p-6 shadow-sm backdrop-blur-md">
          <div className="flex flex-col gap-3">
            {sampleFunds.map((fund) => (
              <button
                key={fund.id}
                onClick={() => navigate(`/funds/${fund.id}`)}
                className="flex cursor-pointer items-center justify-between rounded-xl border border-[var(--border-app)] bg-[var(--bg-container)] p-4 text-left transition hover:border-[var(--color-primary)] hover:bg-[var(--bg-card-hover)]"
              >
                <div>
                  <h2 className="text-sm font-bold text-[var(--text-heading)]">{fund.name}</h2>
                  <span className="text-xs font-semibold text-[var(--text-muted)]">{fund.code}</span>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <div>
                    <p className="text-sm font-bold text-[var(--text-heading)]">{fund.amount}</p>
                    <p className="text-xs font-semibold text-[var(--color-primary)]">{fund.returnVal}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[var(--text-muted)]" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}