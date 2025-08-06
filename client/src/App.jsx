import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterFlow from "./pages/RegisterFlow";
import Login from "./pages/Login";
import Packages from "./pages/Packages";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-babyPink text-black">
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
