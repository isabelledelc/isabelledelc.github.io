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
      icon: <MapPin className="h-5 w-5 text-app-primary mt-0.5" />,
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(addressText)}`, "_blank"),
    },
    {
      id: "general-line",
      title: "General Line",
      value: generalLine,
      buttonLabel: "Call",
      icon: <Phone className="h-5 w-5 text-app-primary mt-0.5" />,
      action: () => (window.location.href = `tel:${generalLine}`),
    },
    {
      id: "client-services",
      title: "Client Services",
      value: clientServicesLine,
      buttonLabel: "Call",
      icon: <Headphones className="h-5 w-5 text-app-primary mt-0.5" />,
      action: () => (window.location.href = `tel:${clientServicesLine}`),
    },
    {
      id: "email",
      title: "Email",
      value: emailAddress,
      buttonLabel: "Email",
      icon: <Mail className="h-5 w-5 text-app-primary mt-0.5" />,
      action: () => (window.location.href = `mailto:${emailAddress}`),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-app-card transition-colors duration-300">
      <Header />
      

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="overflow-hidden rounded-[32px] bg-app-card border border-app-border shadow-xl">
          
          {/* Header Bar */}
          <div className="border-b border-app-border p-6 bg-app-pill">
            <div className="flex items-center gap-3 text-xl font-bold text-app-heading">
              <Link
                to="/settings"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl hover:bg-app-card text-app-heading transition"
              >
                <ChevronLeft className="h-6 w-6" />
              </Link>
              <span>Contact Us</span>
            </div>
          </div>

          {/* Subtitle / Intro Header */}
          <div className="py-6 text-center text-lg font-semibold text-app-muted">
            Reach Out Through Any Of The Channels Below
          </div>

          {/* Cards Section */}
          <div className="bg-app-pill p-8 border-t border-app-border">
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
              {contactOptions.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between rounded-2xl bg-app-card p-6 shadow-sm border border-app-border hover:border-app-border-interactive transition"
                >
                  <div className="flex gap-4 pr-4">
                    {item.icon}
                    <div>
                      <h3 className="font-bold text-app-heading">{item.title}</h3>
                      <p className="mt-2 text-sm text-app-muted leading-relaxed max-w-md">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={item.action}
                    className="mt-1 min-w-[100px] rounded-xl bg-app-primary px-6 py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition cursor-pointer"
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