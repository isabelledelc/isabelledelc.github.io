import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/home' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Invest', path: '/invest' },
  { label: 'Activity', path: '/activity' },
  { label: 'Settings', path: '/settings' },
];

export default function Navbar() {
  return (
    /* flex-row keeps everything horizontal; overflow-x-auto handles smaller displays gracefully */
    <nav className="flex flex-row items-center justify-between w-full max-w-full gap-1 overflow-x-auto px-1 py-1 no-scrollbar">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            /* Responsive text sizes (10px on small mobile, 12px/14px on larger screens) */
            `whitespace-nowrap shrink-0 rounded-full px-2.5 py-1.5 text-[10px] sm:text-xs md:text-sm font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-white text-slate-900 shadow-md dark:bg-slate-700 dark:text-white'
                : 'text-slate-300 hover:text-white'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}