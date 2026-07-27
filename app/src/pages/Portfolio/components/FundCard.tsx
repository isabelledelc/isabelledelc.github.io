import { ChevronRight } from "lucide-react";

export interface FundItem {
  id: string;
  name: string;
  code: string;
  amount: string;
  returnVal: string;
  goal: string;
  account: string;
}

interface FundCardProps {
  fund: FundItem;
  onClick: (fundId: string) => void;
}

export default function FundCard({ fund, onClick }: FundCardProps) {
  return (
    <article
      onClick={() => onClick(fund.id)}
      className="group cursor-pointer rounded-2xl border border-[var(--border-app)] bg-[var(--bg-card)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:bg-[var(--bg-card-hover)]"
      role="button"
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-[var(--text-heading)]">{fund.name}</div>
          <div className="text-[12px] text-[var(--text-muted)]">{fund.code}</div>
        </div>
        <ChevronRight className="h-5 w-5 text-[var(--text-muted)] group-hover:text-[var(--color-primary)] transition" />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <div className="text-sm font-semibold text-[var(--text-main)]">{fund.amount}</div>
          <div className="text-xs text-[var(--color-primary)] font-bold">{fund.returnVal}</div>
        </div>
        <div className="text-right text-xs text-[var(--text-muted)]">Units: 90.53</div>
      </div>
    </article>
  );
}