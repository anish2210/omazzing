import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logoIcon from "../assets/images/logo-icon.png"; // <-- Adjust this path if different

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-0">
      {/* Image section for desktop only */}
      <div className="hidden lg:block w-1/2 h-screen">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
          alt="Meditation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Options (Google, signup, login) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center min-h-screen p-8 bg-white lg:p-16 rounded-none lg:rounded-l-none lg:rounded-r-lg shadow-lg text-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            {/* Replace the emoji with your logo image */}
            <img
              src={logoIcon}
              alt="Omazzing Logo"
              className="z-10 mx-auto w-20 h-20 lg:w-60 lg:h-60"
            />
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
              Welcome to <span className="text-deepPink">Omazing</span> 👋
            </h1>
            <p className="text-gray-600 text-sm lg:text-base px-4">
              The best meditation app of the century to keep you calm and stay
              focused
            </p>
          </div>

          <div className="space-y-4">
            <button className="bg-white text-gray-700 py-3 px-6 rounded-full w-full border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer">
              <div>
                <FcGoogle />
              </div>
              Continue with Google
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-gray-800 text-white py-3 px-6 rounded-full w-full cursor-pointer hover:bg-gray-900 transition-colors"
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/login")}
              className="bg-gray-200 text-gray-800 py-3 px-6 rounded-full w-full cursor-pointer hover:bg-gray-300 transition-colors"
            >
              I Already Have an Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
