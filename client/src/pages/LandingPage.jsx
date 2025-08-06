import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🧘</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to <span className="text-deepPink">Omazzing</span> 👋
          </h1>
          <p className="text-gray-600 text-sm px-4">
            The best meditation app of the century to keep you calm and stay
            focused
          </p>
        </div>

        <div className="space-y-4">
          <button className="bg-white text-gray-700 py-3 px-6 rounded-full w-full border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
            <div>
              <FcGoogle />
            </div>
            Continue with Google
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="bg-gray-800 text-white py-3 px-6 rounded-full w-full hover:bg-gray-900 transition-colors"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-gray-200 text-gray-800 py-3 px-6 rounded-full w-full hover:bg-gray-300 transition-colors"
          >
            I Already Have an Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
