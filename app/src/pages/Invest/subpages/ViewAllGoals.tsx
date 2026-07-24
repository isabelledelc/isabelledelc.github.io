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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-app-card border border-app-border w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col transition-colors duration-300">
        
        {/* Modal Header */}
        <div className="p-5 bg-app-card border-b border-app-border flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-app-pill hover:bg-app-border/40 transition cursor-pointer text-app-heading"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-bold text-app-heading">All Goals</h2>
        </div>

        {/* Goals List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {goals.map((goal) => {
            // SVG Circle Progress Ring Calculation
            const radius = 20;
            const circumference = 2 * Math.PI * radius;
            const progressPercent = Math.min(Math.max(goal.progress, 0), 100);
            const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

            return (
              <div
                key={goal.id}
                onClick={() => {
                  onClose();
                  navigate(`/invest/goals/${goal.id}`);
                }}
                className="p-4 rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive transition cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  {/* Goal SVG Progress Ring Badge */}
                  <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
                      {/* Background Track Circle */}
                      <circle
                        cx="24"
                        cy="24"
                        r={radius}
                        className="stroke-app-border"
                        strokeWidth="4"
                        fill="transparent"
                      />
                      {/* Active Progress Ring */}
                      <circle
                        cx="24"
                        cy="24"
                        r={radius}
                        className="stroke-app-primary transition-all duration-500 ease-out"
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Home className="w-5 h-5 text-app-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-app-heading">{goal.title}</h3>
                    <p className="text-xs text-app-muted">
                      {goal.saved} of {goal.target}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-app-heading">{goal.progress}%</span>
                  <ChevronRight className="w-5 h-5 text-app-muted group-hover:text-app-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}