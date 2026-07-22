// DashboardPage.tsx
import Header from '../../components/shared/header';
import Navbar from '../../components/shared/navbar';
import PortfolioCard from './components/PortfolioCard';
import RecentActivity from './components/RecentActivity';
import QuickActions from './components/QuickActions';
import MarketUpdates from './components/MarketCommentary';
import Funds from './components/Funds';

export default function HomePage() {
  return (
    /* Added Tailwind background and text color classes here */
    <div className="min-h-screen bg-[#1c3c34] bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-[#5e9483] via-[#21433a] to-[#122b24] text-white">
      <div>
        <Header />
        <Navbar />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          {/* Top Greeting */}
          <header style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 600 }}>Welcome back, Name</h1>
          </header>

          <div className="px-4 sm:px-6 lg:px-8">  
            <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="flex flex-col gap-8">
                <PortfolioCard />
                <MarketUpdates />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-8">
                <QuickActions />
                <Funds />
                <RecentActivity />
              </div>

            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}