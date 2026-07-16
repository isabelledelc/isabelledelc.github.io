// LandingPage.tsx
import Navbar from './components/shared/navbar.tsx';
import Footer from './components/shared/footer.tsx';

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import GettingStartedSection from './components/GettingStartedSection';
import BenefitsSection from './components/BenefitsSection';

export default function LandingPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Shared Navigation */}
      <Navbar />

      {/* Main Scrollable Sections */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <GettingStartedSection />
        <BenefitsSection />
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}