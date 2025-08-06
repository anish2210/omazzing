import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Array of images for each registration step (replace with your own images if you want)
const stepImages = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80", // Step 0: Gender
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=700&q=80", // Step 1: Age
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=700&q=80", // Step 2: Goal
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=700&q=80", // Step 3: Profile
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80", // Step 4: Create Account
];

function RegisterFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    gender: "",
    ageRange: "",
    goals: [],
    fullName: "",
    phone: "",
    dob: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleGoal = (goal) => {
    setFormData((prev) => {
      const goals = prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal];
      return { ...prev, goals };
    });
  };

  const handleSignup = () => {
    // Handle signup logic here
    console.log("Signup data:", formData);
    // After successful signup, redirect to homepage (or dashboard/packages)
    navigate("/homepage");
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center">
              What is your gender?
            </h2>
            <div className="space-y-3">
              {["male", "female", "rather not to say"].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-babyPink"
                >
                  <input
                    type="radio"
                    value={opt}
                    checked={formData.gender === opt}
                    onChange={() => updateField("gender", opt)}
                    className="text-pinkAccent"
                  />
                  <span className="capitalize">I am {opt}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => navigate("/")}
                className="text-sm border border-gray-400 px-6 py-2 rounded-full text-gray-500 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.gender}
                className="bg-pinkAccent text-white bg-fuchsia-600 py-2 px-6 rounded-full disabled:opacity-50 cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 1: {
        const ageRanges = [
          "14 - 17",
          "18 - 24",
          "25 - 29",
          "30 - 34",
          "35 - 39",
          "40 - 44",
          "45 - 49",
          "> 50",
        ];
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center">
              Choose Your Age
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {ageRanges.map((range) => (
                <button
                  key={range}
                  className={`py-3 px-4 rounded-full border-2 transition-colors ${
                    formData.ageRange === range
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:border-gray-400"
                  } cursor-pointer`}
                  onClick={() => updateField("ageRange", range)}
                >
                  {range}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={prevStep}
                className="text-sm text-gray-500 border border-gray-400 px-6 py-2 rounded-full cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.ageRange}
                className="bg-pinkAccent text-white bg-fuchsia-600 py-2 px-6 rounded-full disabled:opacity-50 cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        );
      }

      case 2: {
        const goals = [
          "Stress Reduction",
          "Improved Focus & Concentration",
          "Increased Self-Awareness",
          "Better Sleep",
          "Spirituality",
          "Greater Sense of Well-Being",
        ];
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center">
              What is your goal by doing meditation?
            </h2>
            <div className="space-y-3">
              {goals.map((goal) => (
                <label
                  key={goal}
                  className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-babyPink"
                >
                  <input
                    type="checkbox"
                    checked={formData.goals.includes(goal)}
                    onChange={() => toggleGoal(goal)}
                    className="text-pinkAccent"
                  />
                  <span>{goal}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={prevStep}
                className="text-sm text-gray-500 border border-gray-400 rounded-full px-6 py-2 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={formData.goals.length === 0}
                className="bg-pinkAccent text-white py-2 px-6 bg-fuchsia-600 rounded-full disabled:opacity-50 cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        );
      }

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center">
              Complete Your Profile
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pinkAccent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pinkAccent"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={(e) => updateField("dob", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pinkAccent"
              />
              <input
                type="text"
                placeholder="Country"
                value={formData.country}
                onChange={(e) => updateField("country", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pinkAccent"
              />
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={prevStep}
                className="text-sm text-gray-500 border py-2 px-6 border-gray-400 rounded-full cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={
                  !formData.fullName ||
                  !formData.phone ||
                  !formData.dob ||
                  !formData.country
                }
                className="bg-pinkAccent text-white py-2 px-6 bg-fuchsia-600 rounded-full disabled:opacity-50 cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center">
              Create Your Account
            </h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pinkAccent"
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => updateField("password", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pinkAccent"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => updateField("confirmPassword", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pinkAccent"
              />
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => updateField("rememberMe", e.target.checked)}
                  className="text-pinkAccent"
                />
                Remember me
              </label>
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={prevStep}
                className="text-sm text-gray-500 border border-gray-400 py-2 px-6 rounded-full underline cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={handleSignup}
                disabled={
                  !formData.email ||
                  !formData.password ||
                  !formData.confirmPassword ||
                  formData.password !== formData.confirmPassword
                }
                className="bg-pinkAccent text-white py-2 px-6 bg-fuchsia-400 rounded-full disabled:opacity-50 cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      {/* Left side image for desktop */}
      <div className="hidden lg:block w-1/2 h-screen transition-all duration-200">
        <img
          src={stepImages[step]}
          alt={`Step ${step} visual`}
          className="w-full h-full object-cover"
          key={step} // Helps React re-render image when step changes
        />
      </div>

      {/* Form side */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8 lg:p-16 bg-white shadow-lg min-h-screen overflow-y-auto">
        {/* Top image for mobile */}
        <div className="w-full max-w-md lg:hidden flex justify-center mb-6">
          <img
            src={stepImages[step]}
            alt={`Step ${step} visual`}
            className="w-full h-44 object-cover rounded-xl"
            key={step}
          />
        </div>

        <div className="w-full max-w-md">{renderStep()}</div>
      </div>
    </div>
  );
}

export default RegisterFlow;
