export default function TotalGoalSummary() {
  return (
    <div className="rounded-[32px] bg-app-card border border-app-border p-6 shadow-xl backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-6 transition-colors duration-300">
      <div className="space-y-4 flex-1 w-full">
        <p className="text-xs font-bold text-app-muted uppercase tracking-wider">
          Total Saved Towards Goals
        </p>
        <h2 className="text-3xl font-extrabold text-app-heading">RM 35,500</h2>

        {/* Progress Bar */}
        <div className="w-full bg-app-pill rounded-full h-3 max-w-md border border-app-border overflow-hidden">
          <div className="bg-app-primary h-full rounded-full w-[45%] transition-all duration-500" />
        </div>

        <p className="text-xs font-semibold text-app-muted">
          45% of RM 78,800 across 3 goals
        </p>
      </div>

      {/* Ring Chart Badge */}
      <div className="bg-app-pill border border-app-border p-6 rounded-3xl shadow-sm flex flex-col items-center justify-center min-w-[200px] w-full md:w-auto">
        <div className="relative w-28 h-28 rounded-full border-8 border-app-border border-t-app-primary border-r-app-primary flex items-center justify-center">
          <span className="font-extrabold text-app-heading text-lg">45%</span>
        </div>
        <p className="text-xs font-bold text-app-muted mt-3 uppercase tracking-wider">Goals</p>
      </div>
    </div>
  );
}