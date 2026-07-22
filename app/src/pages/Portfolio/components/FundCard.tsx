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
      className="group cursor-pointer rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      role="button"
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-slate-700">{fund.name}</div>
          <div className="text-[12px] text-slate-400">{fund.code}</div>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-emerald-600" />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <div className="text-sm font-semibold text-slate-800">{fund.amount}</div>
          <div className="text-xs text-emerald-600">{fund.returnVal}</div>
        </div>
        <div className="text-right text-xs text-slate-400">Units: —</div>
      </div>
    </article>
  );
}