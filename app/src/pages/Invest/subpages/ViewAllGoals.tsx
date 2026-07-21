import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  saved: string;
  target: string;
  progress: number;
}

interface ViewAllGoalsProps {
  goals: Goal[];
  onClose: () => void;
}

export default function ViewAllGoals({ goals, onClose }: ViewAllGoalsProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-[#F4F4F4] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-5 bg-white border-b border-slate-200 flex items-center gap-4">
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-slate-100 transition cursor-pointer">
            <ChevronLeft className="w-6 h-6 text-slate-800" />
          </button>
          <h2 className="text-xl font-bold text-slate-900">All Goals</h2>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {goals.map((goal) => (
            <div
              key={goal.id}
              onClick={() => {
                onClose();
                navigate(`/invest/goals/${goal.id}`);
              }}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 transition cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-amber-500 border-t-amber-800 flex items-center justify-center bg-slate-50">
                  <Home className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{goal.title}</h3>
                  <p className="text-xs text-slate-600">{goal.saved} of {goal.target}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-900">{goal.progress}%</span>
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}