import Header from '../../../components/shared/header';

import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, KeyRound, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Security() {
  return (
    <div
      className="min-h-screen w-full transition-colors duration-300 text-app-main"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />
      

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="rounded-[32px] bg-app-card border border-app-border backdrop-blur-md p-6 shadow-xl transition-colors duration-300">
          
          {/* Header Row */}
          <div className="mb-6 flex items-center gap-3 text-xl font-semibold text-app-heading">
            <Link
              to="/settings"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-app-border-interactive bg-app-pill text-app-muted transition hover:border-app-primary hover:text-app-primary"
              aria-label="Back to settings"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <span>Security</span>
            <span className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-app-pill text-app-primary border border-app-border">
              <ShieldCheck className="h-4 w-4" />
            </span>
          </div>

          {/* Navigation Links */}
          <div className="divide-y divide-app-border">
            <Link
              to="/settings/change-password"
              className="flex items-center justify-between py-4 text-sm font-medium text-app-heading hover:text-app-primary transition group"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-app-pill border border-app-border text-app-primary group-hover:scale-105 transition-transform">
                  <Lock className="h-4 w-4" />
                </span>
                <span>Change Password</span>
              </div>
              <ChevronRight className="h-5 w-5 text-app-muted group-hover:text-app-primary group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              to="/settings/secret-phrase"
              className="flex items-center justify-between py-4 text-sm font-medium text-app-heading hover:text-app-primary transition group"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-app-pill border border-app-border text-app-primary group-hover:scale-105 transition-transform">
                  <KeyRound className="h-4 w-4" />
                </span>
                <span>Secret Phrase</span>
              </div>
              <ChevronRight className="h-5 w-5 text-app-muted group-hover:text-app-primary group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}