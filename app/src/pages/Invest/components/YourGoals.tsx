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
    <div className="rounded-[32px] bg-app-card border border-app-border p-6 shadow-xl backdrop-blur-md flex flex-col justify-between space-y-6 transition-colors duration-300">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-app-heading">Your Goals</h3>
          <button
            onClick={onViewAllClick}
            className="text-xs font-bold text-app-primary hover:underline cursor-pointer"
          >
            View All Goals
          </button>
        </div>

        <div className="space-y-3">
          {goals.slice(0, 3).map((goal) => {
            // SVG Circle Progress Ring Calculation
            const radius = 20;
            const circumference = 2 * Math.PI * radius;
            const progressPercent = Math.min(Math.max(goal.progress, 0), 100);
            const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

            return (
              <div
                key={goal.id}
                onClick={() => navigate(`/invest/goals/${goal.id}`)}
                className="p-4 rounded-2xl bg-app-pill border border-app-border hover:border-app-border-interactive transition cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
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
                      {/* Progress Active Ring */}
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
                      <Home className="w-4 h-4 text-app-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-app-heading">{goal.title}</h4>
                    <p className="text-xs text-app-muted">
                      {goal.saved} of {goal.target}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-app-heading">{goal.progress}%</span>
                  <ChevronRight className="w-4 h-4 text-app-muted group-hover:text-app-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => navigate('/invest/create-goal')}
        className="w-full py-3.5 bg-app-primary text-white font-bold text-sm rounded-2xl shadow-md hover:opacity-90 active:scale-[0.98] transition cursor-pointer"
      >
        Create Goal
      </button>
    </div>
  );
}