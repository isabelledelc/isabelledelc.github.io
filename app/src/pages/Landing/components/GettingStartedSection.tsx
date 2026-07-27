import React, { useState } from 'react';
import gettingStartedPic from '../../../assets/GettingStartedSectionPic.png';

const STEPS = [
  {
    step: '01',
    description: 'Create an electronic Know Your Client (e-KYC) account with our online application form.',
  },
  {
    step: '02',
    description: 'Choose from our selection of funds, from conventional to shariah compliant portfolios.',
  },
  {
    step: '03',
    description: 'Invest your money using latest trending e-wallets or through online banking accounts',
  },
];

export default function GettingStartedSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section 
      id="get-started" 
      className="w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-white font-sans overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content & Interactive Steps */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Section Header */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 transition-all duration-300">
              Getting Started
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-500 font-normal">
              Steps toward meeting your investment needs
            </p>

            {/* List Steps with Interactive Hover & Active States */}
            <div className="mt-10 divide-y divide-slate-100 border-t border-b border-slate-100">
              {STEPS.map((item, index) => {
                const isActive = activeStep === index;
                return (
                  <div 
                    key={item.step} 
                    onClick={() => setActiveStep(index)}
                    className={`group py-6 px-4 sm:px-5 flex items-start gap-6 sm:gap-8 cursor-pointer rounded-2xl transition-all duration-300 relative border-l-4 ${
                      isActive 
                        ? 'bg-slate-50/80 border-emerald-500 shadow-sm translate-x-1' 
                        : 'border-transparent hover:bg-slate-50/50 hover:translate-x-1'
                    }`}
                  >
                    <span 
                      className={`text-sm font-bold min-w-[24px] pt-0.5 transition-colors duration-300 ${
                        isActive 
                          ? 'text-emerald-600 font-extrabold scale-110' 
                          : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {item.step}
                    </span>
                    <p 
                      className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                        isActive 
                          ? 'text-slate-900 font-medium' 
                          : 'text-slate-700 group-hover:text-slate-900'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Call to Action Button with Pulsing Glow & Hover Scale */}
            <div className="mt-8">
              <a
                href="#login"
                className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 no-underline group overflow-hidden"
                style={{ backgroundColor: 'var(--color-primary, #22c55e)' }}
              >
                {/* Subtle shine effect on hover */}
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span className="relative z-10">Get Started with an Account</span>
              </a>
            </div>

          </div>

          {/* Right Column: Image Frame with Interactive Zoom */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm group border border-slate-100">
              <img
                src={gettingStartedPic}
                alt="Getting Started Visual"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Subtle gradient vignette overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}