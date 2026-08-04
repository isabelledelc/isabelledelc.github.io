import Header from '../../components/shared/header';
import { Link } from 'react-router-dom';
import { User, Shield, Landmark, Bell, Phone, Info, ArrowLeft, ChevronRight } from 'lucide-react';

const settingsLinks = [
  {
    title: 'View Profile',
    href: '/settings/view-profile',
    icon: User,
  },
  {
    title: 'Security',
    href: '/settings/security',
    icon: Shield,
  },
  {
    title: 'Bank Account Information',
    href: '/settings/bank-account',
    icon: Landmark,
  },
  // {
  //   title: 'Notification Settings',
  //   href: '/settings/notifications',
  //   icon: Bell,
  // },
  {
    title: 'Contact Us',
    href: '/settings/contact-us',
    icon: Phone,
  },
  {
    title: 'About Opus Touch',
    href: '/settings/about-opus-touch',
    icon: Info,
  },
];

export default function Settings() {
  return (
    <div 
      className="min-h-screen w-full transition-colors duration-300 text-app-main"
      style={{ background: 'var(--bg-page)' }}
    >
      {/* Header handles main navigation and dark mode toggle */}
      <Header />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        {/* Main Card Container */}
        <div className="rounded-[32px] bg-app-card border border-app-border backdrop-blur-md p-6 shadow-xl transition-colors duration-300">
          
          {/* Top Header Row with Back Button */}
          <div className="mb-8 flex items-center gap-3 text-xl font-semibold text-app-heading">
            <Link
              to="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-app-border-interactive bg-app-pill text-app-muted transition hover:border-app-primary hover:text-app-primary"
              aria-label="Back to home"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <span>Settings</span>
          </div>

          {/* Settings Navigation Links Grid */}
          <div className="grid gap-3">
            {settingsLinks.map((item) => {
              const IconComponent = item.icon;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex items-center justify-between rounded-[24px] border border-app-border-interactive bg-app-card/60 px-5 py-4 text-sm text-app-main transition hover:border-app-primary hover:bg-app-card-hover hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon Pill */}
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-app-pill text-app-primary transition-colors group-hover:bg-app-primary group-hover:text-white">
                      <IconComponent className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-app-main">{item.title}</span>
                  </div>

                  {/* Right Arrow Indicator */}
                  <ChevronRight className="h-5 w-5 text-app-muted transition-transform group-hover:translate-x-1 group-hover:text-app-primary" />
                </Link>
              );
            })}
          </div>

        </div>
      </main>
    </div>
  );
}