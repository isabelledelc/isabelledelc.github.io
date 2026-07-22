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
    <div className="space-y-6 rounded-3xl bg-white/60 p-6 shadow-xs backdrop-blur-md">
      <div className="rounded-2xl bg-white py-3.5 text-center shadow-xs">
        <h3 className="text-lg font-bold text-slate-800">{analysisFilter} Breakdown</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {breakdownData[analysisFilter].map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-xs transition hover:shadow-md"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{item.name}</p>
              <p className="mt-2 text-lg font-extrabold text-slate-900">{item.value}</p>
            </div>
            <div className="text-right">
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800">
                {item.code}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}