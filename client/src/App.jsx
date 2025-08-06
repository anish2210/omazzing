import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CoursesPage from "./pages/CoursesPage";
import LandingPage from "./pages/LandingPage";
import RegisterFlow from "./pages/RegisterFlow";
import Login from "./pages/Login";

// Helper component to handle conditional layout
function Layout({ children }) {
  const location = useLocation();
  // Define paths where Navbar should be hidden
  const hideNavbarPaths = ["/", "/register", "/login"];

  // If the current path is NOT in hideNavbarPaths, show the Navbar
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterFlow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
