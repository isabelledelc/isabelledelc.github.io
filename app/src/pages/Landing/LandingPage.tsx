// LandingPage.tsx
import Header from '../../components/shared/header';
import Navbar from '../../components/shared/navbar';
import Footer from '../../components/shared/footer';

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import GettingStartedSection from './components/GettingStartedSection';
import BenefitsSection from './components/BenefitsSection';

export default function LandingPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Shared Navigation */}
      <Header />
      <Navbar variant="landing" />

      {/* Main Scrollable Sections */}
      <main>
        <HeroSection />
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

      {/* Shared Footer */}
      <section id="faq">
        <Footer />
      </section>
    </div>
  );
}