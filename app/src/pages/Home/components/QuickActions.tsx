import { Link } from 'react-router-dom';

const actions = [
  { label: 'RSP', path: '/transactions/rsp' },
  { label: 'Switch', path: '/transactions/switching' },
  { label: 'Redeem', path: '/transactions/redemption' },
  { label: 'Top-Up', path: '/transactions/top-up' },
];

export default function QuickActions() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-white">Quick Actions</h2>
      <div className="flex flex-wrap gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            to={action.path}
            className="flex-1 min-w-[100px] rounded-full border text-center border-white/30 bg-[#4e796a]/70 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#4e796a]/90 active:scale-95"
          >
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}