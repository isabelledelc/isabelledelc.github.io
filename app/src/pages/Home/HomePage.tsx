import Header from '../../components/shared/header';
import Navbar from '../../components/shared/navbar';
import PortfolioCard from './components/PortfolioCard';
import RecentActivity from './components/RecentActivity';
import QuickActions from './components/QuickActions';
import MarketUpdates from './components/MarketCommentary';
import Funds from './components/Funds';

export default function HomePage() {
  return (
    /* 
      Light Mode (Default): Clean Slate/Gray background with dark text 
      Dark Mode (dark:): Your signature deep green radial gradient with white text
    */
   <div className="min-h-screen transition-colors duration-300 
    bg-[#d2e7d3] bg-[radial-gradient(circle_at_center,_#E4EDE4_0%,_#CAEBDC_75%,_#8DC2AF_100%)] text-slate-800 
    dark:bg-[#1a2f24] dark:bg-[radial-gradient(circle_at_center,_#2B4737_0%,_#1B3226_50%,_#3B5958_100%)] dark:text-white">
      <div>
        <Header />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          {/* Top Greeting */}
          <header style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h1 className="m-0 text-3xl font-semibold text-slate-800 dark:text-white">
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