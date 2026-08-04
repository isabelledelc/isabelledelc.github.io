import Header from "../../../components/shared/header";
import { Link } from "react-router-dom";
import { MapPin, Phone, Headphones, Mail, ChevronLeft } from "lucide-react";

export default function ContactUs() {
  const addressText = "B-19-2, Northpoint Offices, 1, Medan Syed Putra Utara, Mid Valley City, 59200 Kuala Lumpur";
  const generalLine = "+603455234242545";
  const clientServicesLine = "+603455234242545";
  const emailAddress = "clientservices@opussasset.com";

  const contactOptions = [
    {
      id: "address",
      title: "Address",
      value: addressText,
      buttonLabel: "Maps",
      icon: <MapPin className="h-5 w-5 shrink-0 text-app-primary mt-0.5" />,
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(addressText)}`, "_blank"),
    },
    {
      id: "general-line",
      title: "General Line",
      value: generalLine,
      buttonLabel: "Call",
      icon: <Phone className="h-5 w-5 shrink-0 text-app-primary mt-0.5" />,
      action: () => (window.location.href = `tel:${generalLine}`),
    },
    {
      id: "client-services",
      title: "Client Services",
      value: clientServicesLine,
      buttonLabel: "Call",
      icon: <Headphones className="h-5 w-5 shrink-0 text-app-primary mt-0.5" />,
      action: () => (window.location.href = `tel:${clientServicesLine}`),
    },
    {
      id: "email",
      title: "Email",
      value: emailAddress,
      buttonLabel: "Email",
      icon: <Mail className="h-5 w-5 shrink-0 text-app-primary mt-0.5" />,
      action: () => (window.location.href = `mailto:${emailAddress}`),
    },
  ];

  return (
    <div
      className="min-h-screen w-full transition-colors duration-300 text-app-main"
      style={{ background: 'var(--bg-page)' }}
    >
      <Header />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="overflow-hidden rounded-[32px] bg-app-card border border-app-border backdrop-blur-md p-6 shadow-xl transition-colors duration-300">
          
          {/* Header Bar */}
          <div className="mb-6 flex items-center gap-3 text-xl font-semibold text-app-heading">
            <div className="flex items-center gap-3 text-lg sm:text-xl font-bold text-app-heading">
              <Link
                to="/settings"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-app-border-interactive bg-app-pill text-app-muted transition hover:border-app-primary hover:text-app-primary"
                aria-label="Back to Settings"
              >
                <ChevronLeft className="h-5 w-5" />
              </Link>
              <span>Contact Us</span>
            </div>
          </div>

          {/* Subtitle / Intro Header */}
          <div className="mb-6 text-center text-sm sm:text-lg font-semibold text-app-muted">
            Reach Out Through Any Of The Channels Below
          </div>

          {/* Cards Section */}
          <div className="rounded-[24px] border border-app-border bg-app-pill p-4 sm:p-8">
            <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:gap-6">
              {contactOptions.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-app-card p-4 sm:p-6 shadow-sm border border-app-border hover:border-app-border-interactive transition"
                >
                  {/* Left Side: Icon + Text Content */}
                  <div className="flex gap-3 sm:gap-4 pr-0 sm:pr-4 w-full sm:w-auto">
                    {item.icon}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-app-heading text-sm sm:text-base">{item.title}</h3>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-app-muted leading-relaxed max-w-md break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  {/* Action Button: Full width on mobile, auto on desktop */}
                  <button
                    type="button"
                    onClick={item.action}
                    className="w-full sm:w-auto min-w-[100px] rounded-xl bg-app-primary px-5 py-2.5 sm:py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition cursor-pointer text-center"
                  >
                    {item.buttonLabel}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}