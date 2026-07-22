export type AnalysisFilter = "Fund" | "Goal" | "Account";

export interface BreakdownItem {
  id: string;
  name: string;
  code: string;
  value: string;
  percentage: string;
}

interface AllocationChartProps {
  analysisFilter: AnalysisFilter;
  breakdownData: Record<AnalysisFilter, BreakdownItem[]>;
  onFilterChange: (filter: AnalysisFilter) => void;
}

export default function AllocationChart({
  analysisFilter,
  breakdownData,
  onFilterChange,
}: AllocationChartProps) {
  const filters: AnalysisFilter[] = ["Fund", "Goal", "Account"];

  return (
    <div className="space-y-4 rounded-3xl bg-white/60 p-6 shadow-xs backdrop-blur-md">
      <div className="flex justify-around border-b border-slate-200/60 pb-3 text-sm font-bold">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`relative pb-1 transition cursor-pointer ${
              analysisFilter === filter
                ? "text-slate-900 after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:w-full after:bg-slate-900"
                : "text-slate-400 hover:text-slate-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="pt-2">
        <p className="mb-4 text-center text-xs font-bold text-slate-600">Allocation</p>

        <div className="flex flex-col items-center justify-around gap-6 sm:flex-row">
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[conic-gradient(#A855F7_0%_40%,#00FF66_40%_65%,#8B5CF6_65%_85%,#A855F7_85%_100%)] p-5 shadow-sm">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#EBF7EA] text-center">
              <span className="text-[10px] font-bold leading-tight text-slate-600">
                Total Amount
                <br />
                by {analysisFilter}
              </span>
            </div>
          </div>

          <div className="w-full min-w-[200px] space-y-2.5 rounded-2xl border border-slate-100/80 bg-white/90 p-4 shadow-xs sm:w-auto">
            {breakdownData[analysisFilter].map((item, idx) => {
              const colors = ["bg-purple-500", "bg-emerald-400", "bg-violet-600", "bg-fuchsia-500"];
              return (
                <div key={item.id} className="flex items-center justify-between gap-6 text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${colors[idx % colors.length]}`} />
                    <span className="text-slate-700">{item.code}</span>
                  </div>
                  <span className="text-slate-800">{item.percentage}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}