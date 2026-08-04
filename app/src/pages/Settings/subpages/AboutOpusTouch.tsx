import Header from "../../../components/shared/header";
import { Link } from "react-router-dom";
import { Info, ShieldCheck, Cpu, ChevronLeft } from "lucide-react";
import logo from "../../../assets/logo.png";
import Footer from "../../../components/shared/footer";

export default function AboutOpusTouch() {
  const appDetails = {
    version: "1.0.9662.22031",
    description: `Opus Touch is designed to streamline your investment experience, giving you direct visibility and seamless control over your financial assets with real-time portfolio tracking, instant statements, and transparent analytics.`,
  };

  return (
    <div
      className="min-h-screen flex flex-col w-full transition-colors duration-300 text-app-main"
      style={{ background: "var(--bg-page)" }}
    >
      <Header />

      <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 pb-16 pt-4 sm:pt-8">
        <div className="overflow-hidden rounded-2xl sm:rounded-[32px] bg-app-card border border-app-border backdrop-blur-md p-4 sm:p-6 shadow-xl transition-colors duration-300">
          
          {/* Header Bar */}
          <div className="mb-6 flex items-center gap-3 text-lg sm:text-xl font-bold text-app-heading">
            <Link
              to="/settings"
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-app-border-interactive bg-app-pill text-app-muted transition hover:border-app-primary hover:text-app-primary"
              aria-label="Back to Settings"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <span>About Opus Touch</span>
          </div>

          {/* Main Card Grid Area */}
          <div className="rounded-xl sm:rounded-[24px] border border-app-border bg-app-pill p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Left Column: Brand & Meta Info */}
              <div className="md:col-span-5 bg-app-card border border-app-border rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center shadow-xs">
                <div className="w-full py-4 sm:py-6 flex items-center justify-center border-b border-app-border">
                  <img
                    src={logo}
                    alt="Opus Touch Logo"
                    className="h-10 sm:h-12 object-contain dark:brightness-110"
                  />
                </div>

                <div className="w-full pt-4 sm:pt-6 flex flex-col gap-3 sm:gap-4 text-left">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-app-pill/60 border border-app-border">
                    <div className="p-2 rounded-lg bg-app-primary/10 text-app-primary">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-app-muted uppercase">
                        Version
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-app-heading">
                        {appDetails.version}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-app-pill/60 border border-app-border">
                    <div className="p-2 rounded-lg bg-app-primary/10 text-app-primary">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-app-muted uppercase">
                        Status
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        Up to date
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Platform Overview */}
              <div className="md:col-span-7 flex flex-col justify-between h-full gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-app-primary/10 text-app-primary text-xs font-semibold mb-3 sm:mb-4">
                    <Info className="h-3.5 w-3.5" />
                    <span>Platform Overview</span>
                  </div>

                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-app-heading">
                    Opus Touch
                  </h1>

                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-app-muted font-normal">
                    {appDetails.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-app-border flex flex-wrap gap-3 sm:gap-4 text-xs text-app-muted">
                  <span>© {new Date().getFullYear()} Opus Asset Management</span>
                  <span>•</span>
                  <a
                    href="https://opusasset.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-app-heading underline underline-offset-4 transition"
                  >
                    Official Website
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}