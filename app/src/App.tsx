import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing & Auth Pages
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Login/LoginPage.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import Signup from "./pages/Login/Signup.tsx";
import SignUpEmail from "./pages/Login/subpages/SignUpEmail.tsx";
import SecretPhrasePage from "./pages/Login/subpages/SecretPhrase.tsx";
import KYConboarding from "./pages/KYC/KYConboarding.tsx";

// Main App Pages
import Portfolio from "./pages/Portfolio/Portfolio.tsx";
import Investment from "./pages/Invest/Investment.tsx";
import Activity from "./pages/Activity/Activity.tsx";
import Settings from "./pages/Settings/Settings.tsx";

// Profile & Settings Pages
import ViewProfile from "./pages/Settings/subpages/ViewProfile";
import EditProfile from "./pages/Settings/components/EditProfile";
import ChangePassword from "./pages/Settings/subpages/ChangePassword";
import Security from "./pages/Settings/subpages/Security";
import SecretPhrase from "./pages/Settings/subpages/SecretPhrase";
import ViewBankAccount from "./pages/Settings/subpages/BankAccountInfo.tsx";
import ContactUs from "./pages/Settings/subpages/ContactUs.tsx";
import AboutOpusTouch from "./pages/Settings/subpages/AboutOpusTouch.tsx";

// Fund & Goal Detail Pages
import FundDetails from "./pages/Portfolio/subpages/FundDetails";
import ViewAllMyFunds from "./pages/Portfolio/subpages/ViewAllMyFunds";
import GoalDetails from "./pages/Invest/subpages/GoalDetails";
import CreateGoal from "./pages/Invest/subpages/CreateGoals";

// Other Informational Pages
import FAQ from "./pages/Other Pages/FAQ";
import TermsNConditions from "./pages/Other Pages/TermsNConditions";
import MarketCommentaryDetailPage from "./pages/Home/subpages/MarketCommentaryDetailPage";
import FundFactSheet from "./pages/Other Pages/FundFactSheet";
import Placeholder from "./pages/Other Pages/Placeholder";

// Transaction Pages
import CoolingOff from "./pages/Transactions/CoolingOff";
import Switching from "./pages/Transactions/Switching";
import Redemption from "./pages/Transactions/Redemption";
import RedemptionInformation from "./pages/Transactions/subpages/RedemptionInformation";
import TopUp from "./pages/Transactions/TopUp";
import RSP from "./pages/Transactions/RSP";
import PaymentConfirmation from "./pages/Transactions/PaymentConfirmation";
import TransactionConfirm from "./pages/Transactions/TransactionConfirm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public & Landing Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Onboarding Flow Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/email" element={<SignUpEmail />} />
        <Route path="/secret-phrase" element={<SecretPhrasePage />} />
        <Route path="/kyc-onboarding" element={<KYConboarding />} />

        {/* Core Navigation Routes */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/invest" element={<Investment />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* Support & Legal Routes */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-and-conditions" element={<TermsNConditions />} />
        <Route path="/market-commentary/:id" element={<MarketCommentaryDetailPage />} />

        {/* Profile & Settings Subpages */}
        <Route path="/settings/view-profile" element={<ViewProfile />} />
        <Route path="/settings/edit-profile" element={<EditProfile />} />
        <Route path="/settings/security" element={<Security />} />
        <Route path="/settings/change-password" element={<ChangePassword />} />
        <Route path="/settings/secret-phrase" element={<SecretPhrase />} />
        <Route path="/settings/bank-account" element={<ViewBankAccount />} />
        <Route path="/settings/contact-us" element={<ContactUs />} />
        <Route path="/settings/about-opus-touch" element={<AboutOpusTouch />} />

        {/* Fund & Goal Subpages */}
        <Route path="/funds/:id" element={<FundDetails />} />
        <Route path="/portfolio/fund-details" element={<FundDetails />} />
        <Route path="/invest/subpages/view-fund-details" element={<FundDetails />} />
        <Route path="/portfolio/view-all-my-funds" element={<ViewAllMyFunds />} />
        <Route path="/invest/goal-details" element={<GoalDetails />} />
        <Route path="/invest/goals/:goalId" element={<GoalDetails />} />
        <Route path="/invest/create-goal" element={<CreateGoal />} />
        <Route path="/fund-fact-sheet" element={<FundFactSheet />} />
        <Route path="/fund-fact-sheet/:fundId" element={<FundFactSheet />} />

        {/* Transaction Flow Routes */}
        <Route path="/transactions/cooling-off" element={<CoolingOff />} />
        <Route path="/transactions/switching" element={<Switching />} />
        <Route path="/transactions/redemption" element={<Redemption />} />
        <Route path="/transactions/redemption-information" element={<RedemptionInformation />} />
        <Route path="/transactions/top-up" element={<TopUp />} />
        <Route path="/top-up" element={<TopUp />} />
        <Route path="/transactions/rsp" element={<RSP />} />
        <Route path="/transactions/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path="/transactions/transaction-confirmation" element={<TransactionConfirm />} />

        {/* Placeholder Fallback Page */}
        <Route path="/placeholder" element={<Placeholder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;