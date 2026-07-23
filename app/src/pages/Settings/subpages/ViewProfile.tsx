import Header from '../../../components/shared/header';
import { Link } from 'react-router-dom';
import { ArrowLeft, Edit2, User } from 'lucide-react';

const profile = {
  name: 'EMMA LXC',
  nationality: 'MALAYSIA',
  gender: 'FEMALE',
  race: 'CHINESE',
  phone: '+60 123456789',
};

const fields = [
  { label: 'Name As Per ID', value: profile.name },
  { label: 'Nationality', value: profile.nationality },
  { label: 'Gender', value: profile.gender },
  { label: 'Race', value: profile.race },
  { label: 'Phone Number', value: profile.phone },
];

export default function ViewProfile() {
  return (
    <div 
      className="min-h-screen w-full transition-colors duration-300 text-app-main"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="rounded-[32px] bg-app-card border border-app-border backdrop-blur-md p-6 shadow-xl transition-colors duration-300">
          
          {/* Top Header Controls */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xl font-semibold text-app-heading">
              {/* Used Link instead of <a> to fix base URL issues */}
              <Link
                to="/settings"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-app-border-interactive bg-app-pill text-app-muted transition hover:border-app-primary hover:text-app-primary"
                aria-label="Back to settings"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <span>Profile</span>
            </div>

            {/* Edit Profile Link */}
            <Link
              to="/settings/edit-profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-app-border-interactive bg-app-pill text-app-muted transition hover:border-app-primary hover:text-app-primary"
              aria-label="Edit Profile"
            >
              <Edit2 className="h-5 w-5" />
            </Link>
          </div>

          {/* Profile Details Section */}
          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
            
            {/* Avatar Circle */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-app-pill text-app-muted border border-app-border">
                <User className="h-20 w-20" />
              </div>
            </div>

            {/* Data Rows */}
            <div className="grid gap-2">
              {fields.map((field) => (
                <div 
                  key={field.label} 
                  className="grid grid-cols-1 sm:grid-cols-[180px_minmax(0,1fr)] items-center gap-2 sm:gap-4 border-b border-app-border py-3 text-sm"
                >
                  <span className="font-medium text-app-muted">{field.label}</span>
                  <span className="font-semibold text-app-heading">{field.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Information Notice Box */}
          <div className="mt-8 rounded-[24px] border border-app-primary/30 bg-app-pill p-5 text-sm text-app-main">
            <h3 className="mb-2 font-semibold text-app-heading">
              Why can I only update some of my personal information?
            </h3>
            <p className="leading-relaxed text-app-muted">
              We do not allow users to update sensitive information like full name or ID number through the online platform to protect your account and identity. Please contact our Client Services at{' '}
              <span className="font-semibold text-app-heading">03-2288 8833</span> or email at{' '}
              <span className="font-semibold text-app-heading">clientservices@opusasset.com</span> to update these details.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}