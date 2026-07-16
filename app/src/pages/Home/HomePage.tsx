// DashboardPage.tsx
import Navbar from '../../components/shared/navbar';
import Footer from '../../components/shared/footer';

import PortfolioCard from './components/PortfolioCard';
import RecentActivity from './components/RecentActivity';
import QuickActions from './components/QuickActions';
import MarketCommentary from './components/ViewMarketCommentary';

export default function HomePage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Navbar />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Top Greeting */}
        <header style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#ccc' }} />
          <div>
            <p style={{ margin: 0, color: '#666' }}>Welcome back,</p>
            <h1 style={{ margin: 0, fontSize: '24px' }}>Placeholder Name</h1>
          </div>
        </header>

        {/* Dashboard Content split into Main and Sidebar columns */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
          
          {/* Main Content Column */}
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <PortfolioCard />
            <RecentActivity />
          </div>

          {/* Sidebar Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <QuickActions />
            <MarketCommentary />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}