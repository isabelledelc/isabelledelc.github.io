
import Header from '../../components/shared/header';
import PortfolioCard from './components/PortfolioCard';
import RecentActivity from './components/RecentActivity';
import QuickActions from './components/QuickActions';
import MarketUpdates from './components/MarketCommentary';
import Funds from './components/Funds';

export default function HomePage() {
  return (
    <div 
      className="min-h-screen transition-colors duration-300 text-app-main"
      style={{ background: 'var(--bg-page)' }}
    >
      <div>
        <Header />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <header style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h1 className="m-0 text-3xl font-semibold text-app-heading">
              Welcome back, Name
            </h1>
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