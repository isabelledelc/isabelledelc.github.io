import Header from "../../../components/shared/header";
import Navbar from "../../../components/shared/navbar";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import logo from "../../../assets/logo.png"; 
import Footer from "../../../components/shared/footer";

export default function AboutOpusTouch() {
  const appDetails = {
    version: "1.0.9662.22031",
    description: `cusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  };

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
              <span>About Opus Touch</span>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center bg-white py-12">
            <img
              src={logo}
              alt="Opus Touch Logo"
              className="h-16 object-contain"
            />
          </div>

          {/* Cards Section */}
          <div className="bg-[#EBF7EA] p-8">
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
              
              {/* App Version Card */}
              <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-md border-l-[10px] border-l-[#22C55E]">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <Info className="h-5 w-5 text-slate-700" />
                  <span>App Version</span>
                </div>
                <div className="mt-4 pl-7">
                  <p className="text-xs text-slate-400">current Version</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {appDetails.version}
                  </p>
                </div>
              </div>

              {/* What is Opus Touch Card */}
              <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-md border-l-[10px] border-l-[#22C55E]">
                <h3 className="font-bold text-slate-800">What is Opus Touch</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 font-mono">
                  {appDetails.description}
                </p>
              </div>

            </div>
          </div>
            <Footer />
        </div>
      </main>
    </div>
  );
}