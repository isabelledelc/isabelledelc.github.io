import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Pencil, ArrowUpRight, X } from 'lucide-react';
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
  targetAmount: number;
  savedAmount: number;
  monthlyAmount: number;
  timeToGoal: number; // In months
  estimateDate: string;
  funds: Fund[];
}

const initialGoalsData: Record<string, GoalData> = {
  'goal-1': {
    id: 'goal-1',
    title: 'House Deposit',
    targetAmount: 120000,
    savedAmount: 12800,
    monthlyAmount: 4500,
    timeToGoal: 24,
    estimateDate: 'July 2028',
    funds: [
      { id: 'fund-1', name: 'OPUS INCOME PLUS', code: 'IPF', allocatedAmount: 'MYR 8,000' },
      { id: 'fund-2', name: 'OPUS CASH EXTRA', code: 'CEF', allocatedAmount: 'MYR 4,800' },
    ],
  },
  'goal-2': {
    id: 'goal-2',
    title: 'Holiday Fund',
    targetAmount: 20000,
    savedAmount: 4500,
    monthlyAmount: 1300,
    timeToGoal: 12,
    estimateDate: 'July 2027',
    funds: [
      { id: 'fund-2', name: 'OPUS CASH EXTRA', code: 'CEF', allocatedAmount: 'MYR 4,500' },
    ],
  },
  'goal-3': {
    id: 'goal-3',
    title: 'Emergency Fund',
    targetAmount: 50000,
    savedAmount: 8200,
    monthlyAmount: 2300,
    timeToGoal: 18,
    estimateDate: 'Jan 2028',
    funds: [
      { id: 'fund-1', name: 'OPUS INCOME PLUS', code: 'IPF', allocatedAmount: 'MYR 8,200' },
    ],
  },
};

export default function GoalDetails() {
  const navigate = useNavigate();
  const { goalId } = useParams<{ goalId: string }>();
  const goalKey = (goalId ?? 'goal-1') as keyof typeof initialGoalsData;

  const [goals, setGoals] = useState(initialGoalsData);
  const goal = goals[goalKey] ?? goals['goal-1'];

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTargetAmount, setEditTargetAmount] = useState(goal.targetAmount);
  const [editMonthlyAmount, setEditMonthlyAmount] = useState(goal.monthlyAmount);
  const [editTimeToGoal, setEditTimeToGoal] = useState(goal.timeToGoal);

  // Computed Values
  const remainingAmount = Math.max(0, goal.targetAmount - goal.savedAmount);
  const progressPercentage = Math.min(100, Math.round((goal.savedAmount / goal.targetAmount) * 100));

  const strokeWidth = 14;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  const handleOpenModal = () => {
    setEditTargetAmount(goal.targetAmount);
    setEditMonthlyAmount(goal.monthlyAmount);
    setEditTimeToGoal(goal.timeToGoal);
    setIsModalOpen(true);
  };

  const handleSaveGoal = (e: React.FormEvent) => {
    e.preventDefault();
    setGoals((prev) => ({
      ...prev,
      [goalKey]: {
        ...prev[goalKey],
        targetAmount: Number(editTargetAmount),
        monthlyAmount: Number(editMonthlyAmount),
        timeToGoal: Number(editTimeToGoal),
      },
    }));
    setIsModalOpen(false);
  };

  return (
    <div
      className="min-h-screen w-full transition-colors duration-300 text-app-main"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />

      <main className="mx-auto max-w-5xl p-4 md:p-10 space-y-8 pb-16">
        {/* Top Header Navigation */}
        <div className="flex items-center gap-4 pb-4 border-b border-app-border">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-2xl bg-app-card border border-app-border hover:border-app-border-interactive flex items-center justify-center text-app-heading hover:text-app-primary transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
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
                onClick={handleOpenModal}
                className="w-10 h-10 rounded-2xl bg-app-primary hover:opacity-90 transition-all flex items-center justify-center text-white shadow-md active:scale-95 cursor-pointer"
                title="Edit Goal"
              >
                <Pencil className="w-4 h-4" />
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-4 text-sm grid-cols-1 sm:grid-cols-2">
              <div className="rounded-2xl border border-app-border bg-slate-100/60 dark:bg-slate-900/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-app-muted">Target Goal Amount</p>
                <p className="mt-2 text-base font-bold text-app-heading">MYR {goal.targetAmount.toLocaleString()}</p>
              </div>
              <div className="rounded-2xl border border-app-border bg-slate-100/60 dark:bg-slate-900/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-app-muted">Monthly Investment</p>
                <p className="mt-2 text-base font-bold text-app-heading">MYR {goal.monthlyAmount.toLocaleString()} / mo</p>
              </div>
              <div className="rounded-2xl border border-app-border bg-slate-100/60 dark:bg-slate-900/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-app-muted">Time To Goal</p>
                <p className="mt-2 text-base font-bold text-app-heading">{goal.timeToGoal} Months</p>
              </div>
              <div className="rounded-2xl border border-app-border bg-slate-100/60 dark:bg-slate-900/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-app-muted">Remaining Amount</p>
                <p className="mt-2 text-base font-bold text-app-heading">MYR {remainingAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Radial Progress Graphic */}
          <div className="bg-slate-100/40 dark:bg-slate-900/40 p-8 border-t md:border-t-0 md:border-l border-app-border flex flex-col items-center justify-center">
            <div className="relative w-56 h-56">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  className="stroke-slate-200 dark:stroke-slate-800"
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
                <span className="text-sm font-bold text-app-heading tracking-tight">MYR {goal.savedAmount.toLocaleString()}</span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-app-muted my-1">of</span>
                <span className="text-sm font-bold text-app-heading tracking-tight">MYR {goal.targetAmount.toLocaleString()}</span>
                <span className="mt-3 text-xl font-extrabold text-app-primary">{progressPercentage}%</span>
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
                  className="w-full rounded-2xl bg-slate-100/50 dark:bg-slate-900/50 border border-app-border hover:border-app-border-interactive p-5 text-left transition-all duration-200 hover:shadow-md cursor-pointer group"
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

      {/* EDIT GOAL MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-3xl bg-app-card border border-app-border p-6 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-app-border pb-4">
              <h3 className="text-lg font-bold text-app-heading">Edit Goal Details</h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-app-muted hover:text-app-heading transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveGoal} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-app-muted mb-2">
                  Target Goal Amount (MYR)
                </label>
                <input
                  type="number"
                  min="1"
                  value={editTargetAmount}
                  onChange={(e) => setEditTargetAmount(Number(e.target.value))}
                  className="w-full rounded-2xl border border-app-border bg-slate-100/60 dark:bg-slate-900/60 p-3.5 text-sm font-bold text-app-heading focus:outline-none focus:border-app-primary transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-app-muted mb-2">
                  Monthly Investment Amount (MYR)
                </label>
                <input
                  type="number"
                  min="0"
                  value={editMonthlyAmount}
                  onChange={(e) => setEditMonthlyAmount(Number(e.target.value))}
                  className="w-full rounded-2xl border border-app-border bg-slate-100/60 dark:bg-slate-900/60 p-3.5 text-sm font-bold text-app-heading focus:outline-none focus:border-app-primary transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-app-muted mb-2">
                  Time To Goal (Months)
                </label>
                <input
                  type="number"
                  min="1"
                  value={editTimeToGoal}
                  onChange={(e) => setEditTimeToGoal(Number(e.target.value))}
                  className="w-full rounded-2xl border border-app-border bg-slate-100/60 dark:bg-slate-900/60 p-3.5 text-sm font-bold text-app-heading focus:outline-none focus:border-app-primary transition"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-app-border">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl px-5 py-2.5 text-xs font-bold text-app-muted hover:text-app-heading transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-app-primary px-6 py-2.5 text-xs font-bold text-white shadow-md hover:opacity-90 transition active:scale-95 cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}