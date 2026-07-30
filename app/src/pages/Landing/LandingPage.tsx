import { useEffect } from 'react';
import Header from '../../components/shared/header';
import Footer from '../../components/shared/footer';

import LoginHeroSection from './components/LoginHeroSection';
import FeaturesSection from './components/FeaturesSection';
import GettingStartedSection from './components/GettingStartedSection';
import BenefitsSection from './components/BenefitsSection';

export default function LandingPage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  }, []);

  return (
    <div className="relative w-full min-h-screen font-sans">
      {/* 
        REMOVED: 'absolute top-0 left-0 right-0' 
        CHANGED TO: 'sticky top-0 z-50' so the Header sticks as you scroll 
      */}
      <div className="sticky top-0 z-50 bg-transparent">
        <Header variant="landing" />
      </div>

      <main>
        <LoginHeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="get-started">
          <GettingStartedSection />
        </section>
        <section id="why-us">
          <BenefitsSection />
        </section>
      </main>

      <section id="faq">
        <Footer />
      </section>
    </div>
  );
}