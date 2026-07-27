import React from 'react';
import { Globe, CreditCard, Wallet, Lock, TrendingUp, Zap } from 'lucide-react';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

const FEATURES: FeatureCard[] = [
  {
    id: 'anytime-anywhere',
    title: 'Transact Anytime, Anywhere',
    description: 'Invest & redeem in a few clicks',
    icon: <Globe className="w-5 h-5 text-white" />,
    iconBgColor: 'var(--bg-feature-icon-globe)',
  },
  {
    id: 'no-hidden-fees',
    title: 'No Hidden Fees',
    description: "It's exactly as it says! No entry and exit fees.",
    icon: <CreditCard className="w-5 h-5 text-white" />,
    iconBgColor: 'var(--bg-feature-icon-card)',
  },
  {
    id: 'minimal-topups',
    title: 'Minimal Top-ups',
    description: 'Reach your investment goals by regularly investing from as low as RM100!',
    icon: <Wallet className="w-5 h-5 text-white" />,
    iconBgColor: 'var(--bg-feature-icon-wallet)',
  },
  {
    id: 'safe-secure',
    title: 'Safe & Secure',
    description: 'We adopt a high standard of technology to safeguard your data.',
    icon: <Lock className="w-5 h-5 text-white" />,
    iconBgColor: 'var(--bg-feature-icon-lock)',
  },
  {
    id: 'instant-updates',
    title: 'Real-Time Tracking',
    description: 'Monitor your portfolio returns and fund progress anytime.',
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    iconBgColor: 'var(--bg-feature-icon-globe)',
  },
  {
    id: 'fast-execution',
    title: 'Instant Execution',
    description: 'Seamless deposit and withdrawal processing directly to your account.',
    icon: <Zap className="w-5 h-5 text-white" />,
    iconBgColor: 'var(--bg-feature-icon-card)',
  },
];

export default function FeaturesSection() {
  const doubleFeatures = [...FEATURES, ...FEATURES];

  return (
    <section 
      id="features"
      className="w-full pt-28 pb-20 font-sans relative overflow-hidden transition-colors"
      style={{ backgroundColor: 'var(--bg-features-section)' }}
    >
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 mb-10">
        <h2 
          className="text-4xl sm:text-5xl font-medium tracking-tight transition-colors"
          style={{ color: 'var(--text-feature-heading)' }}
        >
          Features
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Side Gradients for Smooth Edge Fading */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-features-section), transparent)' }}
        />
        <div 
          className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-features-section), transparent)' }}
        />

        {/* Scrolling Cards Row */}
        <div className="animate-marquee flex gap-6 px-4">
          {doubleFeatures.map((feature, index) => (
            <div
              key={`${feature.id}-${index}`}
              className="w-[280px] sm:w-[320px] rounded-[32px] p-7 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex-shrink-0 cursor-pointer"
              style={{ backgroundColor: 'var(--bg-feature-card)' }}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: feature.iconBgColor }}
                  >
                    {feature.icon}
                  </div>
                  
                  <h3 
                    className="text-base sm:text-lg font-medium leading-snug tracking-tight transition-colors"
                    style={{ color: 'var(--text-feature-card-title)' }}
                  >
                    {feature.title}
                  </h3>
                </div>

                <p 
                  className="text-sm leading-relaxed transition-colors"
                  style={{ color: 'var(--text-feature-card-desc)' }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}