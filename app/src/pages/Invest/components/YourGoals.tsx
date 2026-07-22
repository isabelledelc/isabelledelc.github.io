import { useNavigate } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  saved: string;
  target: string;
  progress: number;
}

interface YourGoalsProps {
  goals: Goal[];
  onViewAllClick: () => void;
}

export default function YourGoals({ goals, onViewAllClick }: YourGoalsProps) {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl bg-[#EAF7E6] p-6 shadow-md flex flex-col justify-between space-y-4">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-900">Your Goals</h3>
          <button
            onClick={onViewAllClick}
            className="text-sm font-bold text-emerald-700 hover:underline cursor-pointer"
          >
            View All Goals
          </button>
        </div>

        <div className="space-y-3">
          {goals.slice(0, 3).map((goal) => (
            <div
              key={goal.id}
              onClick={() => navigate(`/invest/goals/${goal.id}`)}
              className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-4 border-amber-500 border-t-amber-800 flex items-center justify-center bg-slate-50">
                  <Home className="w-4 h-4 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{goal.title}</h4>
                  <p className="text-xs text-slate-500">{goal.saved} of {goal.target}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-800">{goal.progress}%</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate('/invest/create-goal')}
        className="w-full py-3.5 bg-[#22C55E] text-white font-bold text-sm rounded-xl hover:bg-emerald-600 active:scale-98 transition shadow-sm cursor-pointer"
      >
        Create Goal
      </button>
    </div>
  );
}