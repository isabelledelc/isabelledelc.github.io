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
    <div className="space-y-4 rounded-3xl bg-[var(--bg-container)] p-6 shadow-xs backdrop-blur-md border border-[var(--border-app)]">
      <div className="flex justify-around border-b border-[var(--border-app)] pb-3 text-sm font-bold">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`relative pb-1 transition cursor-pointer ${
              analysisFilter === filter
                ? "text-[var(--text-heading)] after:absolute after:bottom-[-13px] after:left-0 after:h-[2px] after:w-full after:bg-[var(--color-primary)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="pt-2">
        <p className="mb-4 text-center text-xs font-bold text-[var(--text-muted)]">Allocation</p>

        <div className="flex flex-col items-center justify-around gap-6 sm:flex-row">
          {/* Ring Container */}
          <div className="relative flex h-36 w-36 items-center justify-center">
            
            {/* 1. Masked Donut Ring (Cuts out the center completely so nothing bleeds through) */}
            <div 
              className="absolute inset-0 rounded-full bg-[conic-gradient(#A855F7_0%_40%,#00FF66_40%_65%,#8B5CF6_65%_85%,#A855F7_85%_100%)] shadow-sm"
              style={{
                WebkitMaskImage: 'radial-gradient(circle, transparent 55%, black 56%)',
                maskImage: 'radial-gradient(circle, transparent 55%, black 56%)'
              }}
            />

            {/* 2. Text Overlay Sitting Cleanly in the Hole */}
            <div className="relative z-10 text-center px-2">
              <span className="text-[10px] font-bold leading-tight text-[var(--text-heading)] block">
                Total Amount
                <br />
                by {analysisFilter}
              </span>
            </div>

          </div>

          <div className="w-full min-w-[200px] space-y-2.5 rounded-2xl border border-[var(--border-app)] bg-[var(--bg-card)] p-4 shadow-xs sm:w-auto">
            {breakdownData[analysisFilter].map((item, idx) => {
              const colors = ["bg-purple-500", "bg-emerald-400", "bg-violet-600", "bg-fuchsia-500"];
              return (
                <div key={item.id} className="flex items-center justify-between gap-6 text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${colors[idx % colors.length]}`} />
                    <span className="text-[var(--text-main)]">{item.code}</span>
                  </div>
                  <span className="text-[var(--text-heading)]">{item.percentage}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}