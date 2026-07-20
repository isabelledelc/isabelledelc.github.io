import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Login/LoginPage.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import Portfolio from "./pages/Portfolio/Portfolio.tsx";
import Investment from "./pages/Invest/Investment.tsx";
import Activity from "./pages/Activity/Activity.tsx";
import Settings from "./pages/Settings/Settings.tsx";
import ViewProfile from './pages/Settings/subpages/ViewProfile';
import EditProfile from './pages/Settings/components/EditProfile';
import ChangePassword from './pages/Settings/subpages/ChangePassword';
import Security from './pages/Settings/subpages/Security';
import SecretPhrase from './pages/Settings/subpages/SecretPhrase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/invest" element={<Investment />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/settings" element={<Settings />} />

        {/* profile pages */}
        <Route path="/settings/view-profile" element={<ViewProfile />} />
        <Route path="/settings/edit-profile" element={<EditProfile />} />

        {/* security pages */}
        <Route path="/settings/security" element={<Security />} />
        <Route path="/settings/change-password" element={<ChangePassword />} />
        <Route path="/settings/secret-phrase" element={<SecretPhrase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;