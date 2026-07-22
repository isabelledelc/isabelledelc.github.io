import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ChevronRight, FileText } from 'lucide-react';
import Header from '../../../components/shared/header';

const ALL_COMMENTARIES = [
  {
    id: 'fed-rate-decision-july-2026',
    date: 'Jul 22, 2026',
    title: 'Global Markets React to Fed Rate Decisions',
    summary: 'Equities rallied following signals of steady monetary policy, with tech leading the charge.',
    pdfUrl: '#',
  },
  {
    id: 'q3-tech-earnings-overview',
    date: 'Jul 18, 2026',
    title: 'Q3 Tech Earnings Overview',
    summary: 'Major cloud and enterprise software providers report higher-than-expected margin growth.',
    pdfUrl: '#',
  },
  {
    id: 'energy-sector-commodities-shift',
    date: 'Jul 12, 2026',
    title: 'Energy Sector Outlook & Commodities Shift',
    summary: 'Oil prices stabilized while renewable infrastructure investments hit a record high this quarter.',
    pdfUrl: '#',
  },
  {
    id: 'malaysian-ringgit-strength-q3',
    date: 'Jul 05, 2026',
    title: 'MYR Strengthening Against Regional Currencies',
    summary: 'Stronger export numbers and foreign direct investment continue to bolster domestic performance.',
    pdfUrl: '#',
  },
  {
    id: 'global-supply-chain-recovery',
    date: 'Jun 28, 2026',
    title: 'Supply Chain Bottlenecks Easing Across Asia',
    summary: 'Freight rates normalize as port efficiency improvements take effect across major trade hubs.',
    pdfUrl: '#',
  },
];

export default function MarketCommentaryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const selectedCommentary =
    ALL_COMMENTARIES.find((item) => item.id === id) || ALL_COMMENTARIES[0];

  const handleSelectReport = (reportId: string) => {
    navigate(`/market-commentary/${reportId}`);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Downloading ${selectedCommentary.title}...`);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-[#d2e7d3] bg-[radial-gradient(circle_at_center,_#E4EDE4_0%,_#CAEBDC_75%,_#8DC2AF_100%)] text-slate-800 dark:bg-[#1a2f24] dark:bg-[radial-gradient(circle_at_center,_#2B4737_0%,_#1B3226_50%,_#3B5958_100%)] dark:text-white">
      {/* Universal Top Header */}
      <Header />

      {/* Main Workspace Layout */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-6 py-4 flex flex-col gap-4 overflow-hidden">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/home')}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-white hover:text-[#2f8f79] dark:hover:text-emerald-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </button>
          
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-emerald-200/80">
            Market Commentary Reader
          </span>
        </div>

        {/* Split-Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 h-[calc(100vh-180px)] min-h-[650px]">
          
          {/* LEFT SIDEBAR: Report Selector List */}
          <div className="lg:col-span-4 flex flex-col rounded-3xl bg-white/60 dark:bg-[#284f40]/40 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-lg p-4 overflow-hidden transition-colors duration-300">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white px-2 py-1 mb-3">
              All Commentary Reports
            </h2>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {ALL_COMMENTARIES.map((item) => {
                const isActive = item.id === selectedCommentary.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelectReport(item.id)}
                    className={`group relative flex items-center justify-between rounded-2xl p-4 cursor-pointer transition-all duration-200 border ${
                      isActive
                        ? 'bg-emerald-50/90 dark:bg-[#1c382e] border-emerald-500 dark:border-emerald-400/80 shadow-lg ring-1 ring-emerald-500/30'
                        : 'bg-white dark:bg-[#48695e]/70 border-slate-200/80 dark:border-white/15 shadow-md hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Active Left Pill Bar */}
                    {isActive && (
                      <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-r-full" />
                    )}

                    <div className={`pr-3 ${isActive ? 'pl-2' : ''}`}>
                      <div className="flex items-center gap-2">
                        <FileText className={`h-3.5 w-3.5 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-[#2f8f79] dark:text-emerald-300'}`} />
                        <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-emerald-700 dark:text-emerald-400' : 'text-[#2f8f79] dark:text-emerald-300'}`}>
                          {item.date}
                        </span>
                      </div>
                      <h3 className={`font-bold text-sm mt-1 line-clamp-1 transition-colors ${
                        isActive 
                          ? 'text-emerald-950 dark:text-white' 
                          : 'text-slate-900 dark:text-white group-hover:text-[#2f8f79] dark:group-hover:text-emerald-300'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs mt-1 line-clamp-2 ${isActive ? 'text-slate-700 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>
                        {item.summary}
                      </p>
                    </div>

                    {/* Arrow Pill Indicator */}
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full shrink-0 transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-600 dark:bg-emerald-400 text-white dark:text-slate-950 shadow-md'
                        : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-white/70 group-hover:bg-[#2f8f79] dark:group-hover:bg-emerald-400 group-hover:text-white dark:group-hover:text-slate-900'
                    }`}>
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL: Report View Container */}
          <div className="lg:col-span-8 flex flex-col rounded-3xl bg-white/60 dark:bg-[#284f40]/40 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-xl overflow-hidden transition-colors duration-300">
            
            {/* Toolbar / Header */}
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 px-6 py-4 bg-white/90 dark:bg-[#162e24] shrink-0">
              <div>
                <span className="text-xs font-bold text-[#2f8f79] dark:text-emerald-400 uppercase tracking-wider">
                  {selectedCommentary.date}
                </span>
                <h1 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  {selectedCommentary.title}
                </h1>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#2f8f79] dark:bg-emerald-500 px-4 text-xs font-semibold text-white transition hover:bg-[#277966] dark:hover:bg-emerald-400 shadow-sm cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Report</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8 overflow-y-auto space-y-6">
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}