import Header from "../../../components/shared/header";
import Navbar from "../../../components/shared/navbar";
import { Link } from "react-router-dom";
import { MapPin, Phone, Headphones, Mail } from "lucide-react"; // Optional: lucide-react icons

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
      icon: <MapPin className="h-5 w-5 text-slate-700 mt-0.5" />,
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(addressText)}`, "_blank"),
    },
    {
      id: "general-line",
      title: "General Line",
      value: generalLine,
      buttonLabel: "Call",
      icon: <Phone className="h-5 w-5 text-slate-700 mt-0.5" />,
      action: () => (window.location.href = `tel:${generalLine}`),
    },
    {
      id: "client-services",
      title: "Client Services",
      value: clientServicesLine,
      buttonLabel: "Call",
      icon: <Headphones className="h-5 w-5 text-slate-700 mt-0.5" />,
      action: () => (window.location.href = `tel:${clientServicesLine}`),
    },
    {
      id: "email",
      title: "Email",
      value: emailAddress,
      buttonLabel: "Email",
      icon: <Mail className="h-5 w-5 text-slate-700 mt-0.5" />,
      action: () => (window.location.href = `mailto:${emailAddress}`),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#E9F7E5]">
      <Header />
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(30,63,40,0.08)]">
          {/* Header Bar */}
          <div className="border-b border-slate-200 p-6">
            <div className="flex items-center gap-3 text-xl font-bold text-slate-900">
              <Link
                to="/settings"
                className="inline-flex h-8 w-8 items-center justify-center text-xl text-slate-900 hover:opacity-75"
              >
                ‹
              </Link>
              <span>Contact Us</span>
            </div>
          </div>

          {/* Subtitle / Intro Header */}
          <div className="py-6 text-center text-lg font-semibold text-slate-600">
            Reach Out Through Any Of The Channels Below
          </div>

          {/* Cards Section */}
          <div className="bg-[#EBF7EA] p-8">
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
              {contactOptions.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-100"
                >
                  <div className="flex gap-4 pr-4">
                    {item.icon}
                    <div>
                      <h3 className="font-bold text-slate-800">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-md">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={item.action}
                    className="mt-1 min-w-[100px] rounded-xl bg-[#22C55E] px-6 py-2 text-sm font-semibold text-white shadow hover:bg-[#1ea850] transition-colors"
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