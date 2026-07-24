import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Pencil, ArrowUpRight } from 'lucide-react';
import Header from '../../../components/shared/header';


interface Fund {
  id: string;
  name: string;
  code: string;
  allocatedAmount: string;
}

interface GoalData {
  id: string;
  title: string;
  targetAmount: string;
  savedAmount: string;
  remainingAmount: string;
  timeToGoal: string;
  estimateDate: string;
  progressPercentage: number;
  funds: Fund[];
}

const goalsData: Record<string, GoalData> = {
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
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (goal.progressPercentage / 100) * circumference;

  return (
    <div className="min-h-screen w-full bg-app-card transition-colors duration-300">
      <Header />
      

      <main className="mx-auto max-w-5xl p-4 md:p-10 space-y-8 pb-16">
        
        {/* Top Header Navigation */}
        <div className="flex items-center gap-4 pb-4 border-b border-app-border">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive flex items-center justify-center text-app-heading hover:text-app-primary transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            title="Go Back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-app-heading">View Goal Details</h1>
            <p className="text-xs font-semibold text-app-muted mt-0.5">Track your target progress and allocations</p>
          </div>
        </div>

        {/* Goal Overview Card */}
        <div className="rounded-[32px] bg-app-card border border-app-border shadow-xl backdrop-blur-md overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_340px] transition-colors duration-300">
          
          {/* Main Info Section */}
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-app-heading">
                {goal.title}
              </h2>
              <button
                type="button"
                onClick={() => navigate(`/invest/subpages/edit-goal?goalId=${goal.id}`)}
                className="w-10 h-10 rounded-2xl bg-app-primary hover:opacity-90 transition-all flex items-center justify-center text-white shadow-md active:scale-95 cursor-pointer"
                title="Edit Goal"
              >
                <Pencil className="w-4 h-4" />
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-4 text-sm grid-cols-1 sm:grid-cols-2">
              <div className="rounded-2xl border border-app-border bg-app-pill/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-app-muted">Target Goal Amount</p>
                <p className="mt-2 text-base font-bold text-app-heading">{goal.targetAmount}</p>
              </div>
              <div className="rounded-2xl border border-app-border bg-app-pill/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-app-muted">Time To Goal</p>
                <p className="mt-2 text-base font-bold text-app-heading">{goal.timeToGoal}</p>
              </div>
              <div className="rounded-2xl border border-app-border bg-app-pill/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-app-muted">Remaining Amount</p>
                <p className="mt-2 text-base font-bold text-app-heading">{goal.remainingAmount}</p>
              </div>
              <div className="rounded-2xl border border-app-border bg-app-pill/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-app-muted">Estimate Date</p>
                <p className="mt-2 text-base font-bold text-app-heading">{goal.estimateDate}</p>
              </div>
            </div>
          </div>

          {/* Expanded Radial Progress Graphic */}
          <div className="bg-app-pill/30 p-8 border-t md:border-t-0 md:border-l border-app-border flex flex-col items-center justify-center">
            <div className="relative w-56 h-56">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  className="stroke-app-border"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  className="stroke-app-primary"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <span className="text-sm font-bold text-app-heading tracking-tight">{goal.savedAmount}</span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-app-muted my-1">of</span>
                <span className="text-sm font-bold text-app-heading tracking-tight">{goal.targetAmount}</span>
                <span className="mt-3 text-xl font-extrabold text-app-primary">{goal.progressPercentage}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Funds Under Goal Section */}
        <div className="rounded-[32px] bg-app-card border border-app-border p-6 md:p-8 space-y-6 shadow-xl transition-colors duration-300">
          <h3 className="text-xl font-bold text-app-heading">Funds Under Goal</h3>
          {goal.funds.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {goal.funds.map((fund) => (
                <button
                  key={fund.id}
                  type="button"
                  onClick={() => navigate(`/invest/subpages/view-fund-details?fundId=${fund.id}`)}
                  className="w-full rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive p-5 text-left transition-all duration-200 hover:shadow-md cursor-pointer group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-app-heading group-hover:text-app-primary transition-colors">
                        {fund.name}
                      </h4>
                      <p className="text-xs font-semibold text-app-muted mt-1">{fund.code}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-app-heading">{fund.allocatedAmount}</span>
                      <div className="mt-2 flex items-center justify-end gap-1 text-[11px] font-bold text-app-primary">
                        <span>View Fund</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-32 text-app-muted text-sm font-semibold border border-dashed border-app-border rounded-2xl">
              No funds currently linked to this goal.
            </div>
          )}
        </div>

      </main>
    </div>
  );
}