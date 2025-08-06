import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CoursesPage from "./pages/CoursesPage";
import LandingPage from "./pages/LandingPage";
import RegisterFlow from "./pages/RegisterFlow";
import Login from "./pages/Login";
import Packages from "./pages/Packages";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-babyPink text-black">
        <Navbar />
        <main className="flex-1 p-4 pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/signup" element={<RegisterFlow />} />
            <Route path="/login" element={<Login />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/user" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
