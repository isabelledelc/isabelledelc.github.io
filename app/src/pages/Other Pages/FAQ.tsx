import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ArrowLeft } from 'lucide-react';
// import Header from '../../components/shared/header';

interface FAQData {
  question: string;
  answer: string;
}

const faqDataList: FAQData[] = [
  {
    question: 'What is Opus Touch - Individual?',
    answer:
      'Opus Touch - Individual is a digital investment platform designed to allow retail investors to easily manage, track, and optimize their unit trust and wealth portfolios seamlessly.',
  },
  {
    question: 'How do I register for Opus Touch - Individual?',
    answer:
      'You can register by completing our step-by-step onboarding process. Prepare your IC/Passport, employment info, and bank details to complete identity verification (KYC) in under 5 minutes.',
  },
  {
    question: 'What are the minimum investment requirements?',
    answer:
      'Minimum investment amounts depend on the selected fund profile, starting from as low as RM 100 for basic portfolio setup.',
  },
  {
    question: 'Is my personal information secure?',
    answer:
      'Yes, we employ bank-grade encryption protocols and comply strictly with Malaysian regulatory frameworks (SC & BNM) to protect your identity and financial data.',
  },
  {
    question: 'How do I update my risk profile or account details?',
    answer:
      'Navigate to your Account Settings after logging in. You can reassess your risk profile annually or whenever your financial status changes.',
  },
  {
    question: 'What payment methods are supported for deposits?',
    answer:
      'We support direct online banking via FPX, telegraphic transfers, and recurring direct debits for regular investment plans.',
  },
];

export default function FAQ() {
  const navigate = useNavigate();

  // Track open state (-1 means all closed, or pass index number)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-[#E9F7E5]/30 to-slate-100 flex flex-col font-sans">
      {/* <Header /> */}

      <main className="flex-1 min-h-0 max-w-5xl w-full mx-auto px-4 py-6 sm:px-8 flex flex-col">
        {/* Page Header */}
        <div className="mb-6 flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="p-2.5 rounded-xl bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 transition shadow-xs flex items-center justify-center cursor-pointer"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Find quick answers to common questions about your account setup.
            </p>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-transparent">
          <div className="flex flex-col gap-3.5 pb-6">
            {faqDataList.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={`faq-${index}`}
                  className={`rounded-2xl border transition-all duration-200 bg-white overflow-hidden ${
                    isOpen
                      ? 'border-emerald-500 shadow-md ring-2 ring-emerald-500/10'
                      : 'border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left transition cursor-pointer"
                  >
                    <span
                      className={`text-base sm:text-lg font-bold leading-snug ${
                        isOpen ? 'text-emerald-700' : 'text-slate-800'
                      }`}
                    >
                      {item.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-full transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-emerald-100 text-emerald-600'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}