import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Navbar from "./components/NavBar";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import CoursesPage from "./pages/CoursesPage";
import RegisterFlow from "./pages/RegisterFlow";
import Login from "./pages/Login";
import CourseDetailPage from "./pages/CourseDetailPage";
import PricingPage from "./pages/PricingPage";
import MyActivitiesPage from "./pages/MyActivitiesPage"; // Update path as needed

// Create a layout wrapper to handle Navbar visibility
const Layout = ({ children }) => {
  const location = useLocation();
  // Paths where Navbar should NOT be shown
  const hideNavbarPaths = ["/", "/register", "/login"];

  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-babyPink text-black">
      {shouldShowNavbar && <Navbar />}
      <main className={`flex-1 ${shouldShowNavbar ? "pt-20" : ""}`}>
        {children}
      </main>
    </div>
  );
};


function App() {
  return (
    <UserProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/register" element={<RegisterFlow />} />
            <Route
              path="/profile/personal-info"
              element={<PersonalInfoPage />}
            />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/my-activities" element={<MyActivitiesPage />} />

          </Routes>
        </Layout>
      </Router>
    </UserProvider>
  );
}

export default App;
