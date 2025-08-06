import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login data:", formData);
    // After successful login, redirect to packages or dashboard
    navigate("/packages");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg w-full">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back! 👋
            </h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepPink"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => updateField("password", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepPink"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => updateField("rememberMe", e.target.checked)}
                  className="text-deepPink"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-sm text-deepPink hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={!formData.email || !formData.password}
              className="w-full bg-fuchsia-600 text-white py-3 px-6 rounded-full disabled:opacity-50 hover:bg-opacity-90 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="flex justify-between items-center pt-4 text-sm">
            <button
              onClick={() => navigate("/")}
              className="text-gray-500 hover:underline"
            >
              ← Back to Home
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="text-deepPink hover:underline"
            >
              Don't have an account? Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
