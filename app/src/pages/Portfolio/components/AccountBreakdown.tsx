import type { AnalysisFilter, BreakdownItem } from "./AllocationChart";

interface AccountBreakdownProps {
  analysisFilter: AnalysisFilter;
  breakdownData: Record<AnalysisFilter, BreakdownItem[]>;
}

export default function AccountBreakdown({
  analysisFilter,
  breakdownData,
}: AccountBreakdownProps) {
  return (
    <div className="space-y-6 rounded-3xl bg-[var(--bg-container)] p-6 shadow-xs backdrop-blur-md border border-[var(--border-app)]">
      <div className="rounded-2xl bg-[var(--bg-card)] py-3.5 text-center shadow-xs border border-[var(--border-app)]">
        <h3 className="text-lg font-bold text-[var(--text-heading)]">{analysisFilter} Breakdown</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {breakdownData[analysisFilter].map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-[var(--border-app)] bg-[var(--bg-card)] p-5 shadow-xs transition hover:shadow-md"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">{item.name}</p>
              <p className="mt-2 text-lg font-extrabold text-[var(--text-heading)]">{item.value}</p>
            </div>
            <div className="text-right">
              <span className="rounded-lg bg-[var(--bg-pill)] px-3 py-1 text-xs font-bold text-[var(--text-main)]">
                {item.code}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}