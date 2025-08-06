import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext"; // ✅ Import UserProvider

import Navbar from "./components/NavBar"; // Change this if your file is Navbar.jsx

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import CoursesPage from "./pages/CoursesPage";
import RegisterFlow from "./pages/RegisterFlow";
import Login from "./pages/Login";
import Packages from "./pages/Packages";
import CourseDetailPage from "./pages/CourseDetailPage"; // ✅ Added import
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-babyPink text-black">
          <Navbar />
          <main className="flex-1 p-4 pt-20">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/personal-info" element={<PersonalInfoPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/signup" element={<RegisterFlow />} />
              <Route path="/login" element={<Login />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/courses/:courseId" element={<CourseDetailPage />} />
               <Route path="/pricing" element={<PricingPage />} /> 
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
