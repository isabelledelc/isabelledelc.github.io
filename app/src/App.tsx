import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Login/LoginPage.tsx";
import Signup from "./pages/Login/Signup.tsx";
import SignUpEmail from "./pages/Login/subpages/SignUpEmail.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import Portfolio from "./pages/Portfolio/Portfolio.tsx";
import Investment from "./pages/Invest/Investment.tsx";
import Activity from "./pages/Activity/Activity.tsx";
import Settings from "./pages/Settings/Settings.tsx";
import FAQ from "./pages/Other Pages/FAQ.tsx";
import TermsNConditions from "./pages/Other Pages/TermsNConditions.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/email" element={<SignUpEmail />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/invest" element={<Investment />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-and-conditions" element={<TermsNConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;