export type AnalysisFilter = "Fund" | "Goal" | "Account";

export interface BreakdownItem {
  id: string;
  name: string;
  code: string;
  value: string;
  percentage: string; // e.g. "40%"
}

interface AllocationChartProps {
  analysisFilter: AnalysisFilter;
  breakdownData: Record<AnalysisFilter, BreakdownItem[]>;
  onFilterChange: (filter: AnalysisFilter) => void;
}

// Tokenized CSS color variables for chart items
const CHART_COLOR_TOKENS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

export default function AllocationChart({
  analysisFilter,
  breakdownData,
  onFilterChange,
}: AllocationChartProps) {
  const filters: AnalysisFilter[] = ["Fund", "Goal", "Account"];
  const currentData = breakdownData[analysisFilter] || [];

  // Generate dynamic conic-gradient CSS string based on data percentages and tokenized colors
  let cumulativePercentage = 0;
  const gradientStops = currentData.map((item, idx) => {
    const rawVal = parseFloat(item.percentage.replace("%", "")) || 0;
    const startPercentage = cumulativePercentage;
    cumulativePercentage += rawVal;
    const colorToken = CHART_COLOR_TOKENS[idx % CHART_COLOR_TOKENS.length];

    return `${colorToken} ${startPercentage}% ${cumulativePercentage}%`;
  });

  const conicGradientStyle =
    gradientStops.length > 0
      ? `conic-gradient(${gradientStops.join(", ")})`
      : "conic-gradient(var(--border-app) 0% 100%)";

  return (
    <div className="space-y-4 rounded-3xl bg-[var(--bg-container)] p-6 shadow-xs backdrop-blur-md border border-[var(--border-app)]">
      {/* Filter Tabs */}
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
            {/* Masked Donut Ring with Tokenized Conic Gradient */}
            <div
              className="absolute inset-0 rounded-full shadow-sm transition-all duration-300"
              style={{
                background: conicGradientStyle,
                WebkitMaskImage: "radial-gradient(circle, transparent 55%, black 56%)",
                maskImage: "radial-gradient(circle, transparent 55%, black 56%)",
              }}
            />

            {/* Inner Ring Overlay Text */}
            <div className="relative z-10 text-center px-2">
              <span className="text-[10px] font-bold leading-tight text-[var(--text-heading)] block">
                Total Amount
                <br />
                by {analysisFilter}
              </span>
            </div>
          </div>

          {/* Legend Items */}
          <div className="w-full min-w-[200px] space-y-2.5 rounded-2xl border border-[var(--border-app)] bg-[var(--bg-card)] p-4 shadow-xs sm:w-auto">
            {currentData.map((item, idx) => {
              const colorToken = CHART_COLOR_TOKENS[idx % CHART_COLOR_TOKENS.length];
              return (
                <div key={item.id} className="flex items-center justify-between gap-6 text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full shrink-0 shadow-xs"
                      style={{ backgroundColor: colorToken }}
                    />
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