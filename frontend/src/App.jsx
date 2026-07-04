import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";



import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Experts from "./pages/Experts";
import NoticeBoard from "./pages/NoticeBoard";
import JobVacancies from "./pages/JobVacancies";
import Packages from "./pages/Packages";
import Appointment from "./pages/Appointment";

import ScrollToTop from "./components/ScrollToTop";

import AdminLogin from "./admin/pages/AdminLogin";

import ProtectedRoute from "./admin/components/ProtectedRoute";
import AdminLayout from "./admin/layouts/AdminLayout";

import DashboardHome from "./admin/pages/DashboardHome";
import ManageServices from "./admin/pages/ManageServices";
import ManagePackages from "./admin/pages/ManagePackages";
import ManageJobs from "./admin/pages/ManageJobs";
import ManageExperts from "./admin/pages/ManageExperts";
import ManageNotice from "./admin/pages/ManageNotice";
import Profile from "./admin/pages/Profile";
import ResetPassword from "./admin/pages/ResetPassword";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

import Footer from "./components/footer/Footer";

import NotFound from "./pages/NotFound";



function App() {

  const location = useLocation();

  const hideNavbar =
  location.pathname.startsWith("/admin") ||
  location.pathname.startsWith("/reset-password");

  return (
    <>

    <ScrollToTop />

    
  {!hideNavbar && <Navbar />}

  <main className="main-content">
    <Routes>

        {/* PUBLIC ROUTES */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/experts"
          element={<Experts />}
        />

        <Route
          path="/notice-board"
          element={<NoticeBoard />}
        />

        <Route
          path="/job-vacancies"
          element={<JobVacancies />}
        />

        <Route
  path="/packages"
  element={<Packages />}
/>

         <Route
    path="/appointment"
    element={<Appointment />}
  />

  <Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>

<Route
  path="/terms-and-conditions"
  element={<TermsConditions />}
/>

<Route path="*" element={<NotFound />} />

        <Route
          path="/admin-login-bsc-2026"
          element={<AdminLogin />}
        />
        
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

        {/* ADMIN ROUTES */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<DashboardHome />}
          />

          <Route
            path="services"
            element={<ManageServices />}
          />

          <Route
            path="packages"
            element={<ManagePackages />}
          />

          <Route
            path="jobs"
            element={<ManageJobs />}
          />

          <Route
            path="experts"
            element={<ManageExperts />}
          />

          <Route
            path="notice"
            element={<ManageNotice />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

        </Route>

            </Routes>
  </main>

  {!hideNavbar && <Footer />}

</>
  );
}

export default App;