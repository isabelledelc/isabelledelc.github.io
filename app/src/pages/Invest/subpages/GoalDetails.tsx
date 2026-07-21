import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Pencil, ArrowUpRight } from 'lucide-react';
import Header from '../../../components/shared/header';
import Navbar from '../../../components/shared/navbar';

const goalsData = {
  'goal-1': {
    id: 'goal-1',
    title: 'House Deposit',
    targetAmount: 'MYR 120,000',
    savedAmount: 'MYR 12,800',
    remainingAmount: 'MYR 107,200',
    timeToGoal: '24 Months',
    estimateDate: 'July 2028',
    progressPercentage: 11,
    funds: [
      { id: 'fund-1', name: 'OPUS INCOME PLUS', code: 'IPF', allocatedAmount: 'MYR 8,000' },
      { id: 'fund-2', name: 'OPUS CASH EXTRA', code: 'CEF', allocatedAmount: 'MYR 4,800' },
    ],
  },
  'goal-2': {
    id: 'goal-2',
    title: 'Holiday Fund',
    targetAmount: 'MYR 20,000',
    savedAmount: 'MYR 4,500',
    remainingAmount: 'MYR 15,500',
    timeToGoal: '12 Months',
    estimateDate: 'July 2027',
    progressPercentage: 23,
    funds: [
      { id: 'fund-2', name: 'OPUS CASH EXTRA', code: 'CEF', allocatedAmount: 'MYR 4,500' },
    ],
  },
  'goal-3': {
    id: 'goal-3',
    title: 'Emergency Fund',
    targetAmount: 'MYR 50,000',
    savedAmount: 'MYR 8,200',
    remainingAmount: 'MYR 41,800',
    timeToGoal: '18 Months',
    estimateDate: 'Jan 2028',
    progressPercentage: 16,
    funds: [
      { id: 'fund-1', name: 'OPUS INCOME PLUS', code: 'IPF', allocatedAmount: 'MYR 8,200' },
    ],
  },
};

export default function GoalDetails() {
  const navigate = useNavigate();
  const { goalId } = useParams<{ goalId: string }>();
  const goalKey = (goalId ?? 'goal-1') as keyof typeof goalsData;
  const goal = goalsData[goalKey] ?? goalsData['goal-1'];

  const strokeWidth = 14;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (goal.progressPercentage / 100) * circumference;

  return (
    <div className="min-h-screen w-full bg-[#9ED382]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl p-4 md:p-8 space-y-6 pb-16">
        <div className="flex items-center gap-3 pb-2 border-b border-slate-700/20">
          <button
            onClick={() => navigate(-1)}
            className="p-1 rounded-xl hover:bg-black/10 transition"
          >
            <ChevronLeft className="w-7 h-7 text-slate-900" />
          </button>
          <h1 className="text-2xl font-bold text-slate-900">View Goal Details</h1>
        </div>

        <div className="rounded-3xl bg-[#EAF7E6] shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_280px]">
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold italic text-slate-900 underline decoration-2 underline-offset-4">
                {goal.title}
              </h2>
              <button
                onClick={() => navigate(`/invest/subpages/edit-goal?goalId=${goal.id}`)}
                className="w-10 h-10 rounded-full bg-[#22C55E] hover:bg-emerald-600 transition flex items-center justify-center text-white shadow-sm"
              >
                <Pencil className="w-5 h-5" />
              </button>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Target Goal Amount</p>
                <p className="mt-2 font-bold text-slate-900">{goal.targetAmount}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Time To Goal</p>
                <p className="mt-2 font-bold text-slate-900">{goal.timeToGoal}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Remaining Amount</p>
                <p className="mt-2 font-bold text-slate-900">{goal.remainingAmount}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Estimate Date</p>
                <p className="mt-2 font-bold text-slate-900">{goal.estimateDate}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col items-center justify-center">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke="#E5E7EB"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke="#C8383A"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[12px] font-semibold text-slate-900">{goal.savedAmount}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-1">of</span>
                <span className="text-[12px] font-semibold text-slate-900 mt-1">{goal.targetAmount}</span>
                <span className="mt-3 text-sm font-semibold text-slate-900">{goal.progressPercentage}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-white/80 p-6 min-h-[220px] space-y-4">
          <h3 className="text-xl font-bold text-white">Funds Under Goal</h3>
          {goal.funds.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {goal.funds.map((fund: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; code: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; allocatedAmount: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                <button
                  key={fund.id}
                  type="button"
                  onClick={() => navigate(`/invest/subpages/view-fund-details?fundId=${fund.id}`)}
                  className="w-full rounded-3xl bg-white p-4 text-left shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{fund.name}</h4>
                      <p className="text-xs text-slate-500">{fund.code}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-slate-900">{fund.allocatedAmount}</span>
                      <div className="mt-2 flex items-center justify-end gap-1 text-[11px] font-bold text-emerald-600">
                        <span>View Fund</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-32 text-white/80 text-sm font-semibold">
              No funds currently linked to this goal.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}