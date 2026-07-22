interface ActivityItem {
  action: string;
  fund: string;
  time: string;
}

const activities: ActivityItem[] = [
  { action: 'Invested MYR 5,000', fund: 'Opus Income Plus', time: 'Today, 10:23 AM' },
  { action: 'Invested MYR 5,000', fund: 'Opus Income Plus', time: 'Yesterday, 6:21 PM' },
  { action: 'Invested MYR 5,000', fund: 'Opus Income Plus', time: '15 Jul 2026' },
  { action: 'Invested MYR 5,000', fund: 'Opus Income Plus', time: '10 Jul 2026' },
];

export default function RecentActivity() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Recent Activity</h2>
        <a href="/activity" className="text-[14px] text-sky-600 dark:text-sky-300/80 hover:underline">
          View All
        </a>
      </div>
      <div className="flex flex-col gap-3">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border bg-white/80 border-slate-200/80 px-5 py-4 backdrop-blur-md shadow-md transition-all hover:bg-white dark:bg-[#48695e]/70 dark:border-white/10 dark:hover:bg-[#4b7768]/90"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.action}</p>
              <p className="text-xs text-sky-600 dark:text-sky-300/80">{item.fund}</p>
            </div>
            <span className="text-xs font-medium text-slate-500 dark:text-white/80">{item.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}