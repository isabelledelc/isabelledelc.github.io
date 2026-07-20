import Header from '../../components/shared/header';
import Navbar from '../../components/shared/navbar';
import { Link } from 'react-router-dom';

const settingsLinks = [
  {
    title: 'View Profile',
    href: '/settings/view-profile',
    icon: 'user',
  },
  {
    title: 'Security',
    href: '/settings/security',
    icon: 'shield',
  },
  {
    title: 'Bank Account Information',
    href: '/settings/bank-account',
    icon: 'bank',
  },
  {
    title: 'Notification Settings',
    href: '/settings/notifications',
    icon: 'bell',
  },
  {
    title: 'Contact Us',
    href: '/settings/contact',
    icon: 'phone',
  },
  {
    title: 'About Opus Touch',
    href: '/settings/about',
    icon: 'info',
  },
];

function renderIcon(name: string) {
  if (name === 'user') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" />
      </svg>
    );
  }
  if (name === 'shield') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2l8 4v6.5c0 4.9-3.1 9.5-8 10-4.9-.5-8-5.1-8-10v-6.5l8-4z" />
      </svg>
    );
  }
  if (name === 'bank') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4 10v2h16v-2h-16zm2 8v-4h12v4h2v-6h-16v6h2zm6-10l6-4h-12l6 4z" />
      </svg>
    );
  }
  if (name === 'bell') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2c-3.3 0-6 2.7-6 6v4c0 1.4-.8 2.6-2 3.2v1h16v-1c-1.2-.6-2-1.8-2-3.2v-4c0-3.3-2.7-6-6-6zm0 20c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" />
      </svg>
    );
  }
  if (name === 'phone') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M6.6 10.8c1.1 2.2 2.9 4 5 5.1l1.4-1.4c.2-.2.5-.3.8-.2 1 .3 2 .5 3 .5.5 0 1 .4 1 1v3.2c0 .6-.4 1-1 1-9.9 0-18-8.1-18-18 0-.6.4-1 1-1h3.2c.5 0 1 .4 1 1 0 1 .2 2 .5 3 .1.3 0 .6-.2.8l-1.4 1.4z" />
      </svg>
    );
  }
  if (name === 'info') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm1 15h-2v-6h2v6zm0-8h-2v-2h2v2z" />
      </svg>
    );
  }
  return null;
}

export default function Settings() {
  return (
    <div className="min-h-screen w-full bg-[#E9F7E5]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(30,63,40,0.08)]">
          <div className="mb-8 flex items-center gap-3 text-xl font-semibold text-slate-900">
            <a
              href="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-[#528c68] hover:text-[#528c68]"
            >
              ←
            </a>
            <span>Settings</span>
          </div>

          <div className="grid gap-3">
            {settingsLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 transition hover:border-[#528c68] hover:bg-white"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F3E8] text-[#2E7D4F]">
                    {renderIcon(item.icon)}
                  </span>
                  <span>{item.title}</span>
                </div>
                <span className="text-slate-400 transition group-hover:text-[#2E7D4F]">→</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

{settingsLinks.map((item) => (
  <Link
    key={item.href}
    to={item.href}
    className="group flex items-center justify-between rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 transition hover:border-[#528c68] hover:bg-white"
  >
    <div className="flex items-center gap-4">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F3E8] text-[#2E7D4F]">
        {renderIcon(item.icon)}
      </span>
      <span>{item.title}</span>
    </div>
    <span className="text-slate-400 transition group-hover:text-[#2E7D4F]">→</span>
  </Link>
))}
