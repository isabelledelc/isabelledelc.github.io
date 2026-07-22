import { Eye, EyeOff, ChevronRight } from "lucide-react";

interface AccountSummaryProps {
  showBalance: boolean;
  onToggleBalance: () => void;
}

export default function AccountSummary({ showBalance, onToggleBalance }: AccountSummaryProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md">
      <div className="relative mb-4">
        <select className="w-full appearance-none cursor-pointer rounded-xl bg-slate-100 px-4 py-3 pr-8 text-sm font-semibold text-slate-700 outline-none">
          <option>Current Account</option>
        </select>
        <ChevronRight className="absolute right-3 top-3.5 h-4 w-4 rotate-90 text-slate-500" />
      </div>

      <div className="my-6 flex flex-col items-center justify-center gap-4 text-center">
        <div className="inline-flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            {showBalance ? "MYR 12,450.00" : "MYR ••••••••"}
          </span>
          <button
            onClick={onToggleBalance}
            className="cursor-pointer text-slate-500 transition hover:text-slate-800"
          >
            {showBalance ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>

        <div>
          <span className="inline-block rounded-full bg-[#EBF7EA] px-3 py-1.5 text-xs font-semibold text-emerald-600">
            + 0.2340
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <span>Last update</span>
          <span className="font-medium text-slate-800">10 Jul 2026</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Account no</span>
          <span className="font-medium text-slate-800">00108048</span>
        </div>
      </div>
    </div>
  );
}