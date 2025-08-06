import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    // After successful signup, redirect to packages or dashboard
    navigate("/packages");
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-center">
              What is your gender? 🧍‍♂️🧍‍♀️
            </h2>
            <div className="space-y-3">
              {["male", "female", "rather not to say"].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    value={opt}
                    checked={formData.gender === opt}
                    onChange={() => updateField("gender", opt)}
                    className="text-deepPink"
                  />
                  <span className="capitalize">I am {opt}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => navigate("/")}
                className="text-sm text-gray-500 underline"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.gender}
                className="bg-deepPink text-white py-2 px-6 rounded-full disabled:opacity-50"
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
              Choose Your Age 🎯
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {ageRanges.map((range) => (
                <button
                  key={range}
                  className={`py-3 px-4 rounded-full border-2 transition-colors ${
                    formData.ageRange === range
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => updateField("ageRange", range)}
                >
                  {range}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={prevStep}
                className="text-sm text-gray-500 underline"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.ageRange}
                className="bg-deepPink text-white py-2 px-6 rounded-full disabled:opacity-50"
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
              What is your goal by doing meditation? 🎯
            </h2>
            <div className="space-y-3">
              {goals.map((goal) => (
                <label
                  key={goal}
                  className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={formData.goals.includes(goal)}
                    onChange={() => toggleGoal(goal)}
                    className="text-deepPink"
                  />
                  <span>{goal}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={prevStep}
                className="text-sm text-gray-500 underline"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={formData.goals.length === 0}
                className="bg-deepPink text-white py-2 px-6 rounded-full disabled:opacity-50"
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
              Complete Your Profile 📝
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepPink"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepPink"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={(e) => updateField("dob", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepPink"
              />
              <input
                type="text"
                placeholder="Country"
                value={formData.country}
                onChange={(e) => updateField("country", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepPink"
              />
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={prevStep}
                className="text-sm text-gray-500 underline"
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
                className="bg-deepPink text-white py-2 px-6 rounded-full disabled:opacity-50"
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
              Create Your Account 🔒
            </h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepPink"
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => updateField("password", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepPink"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => updateField("confirmPassword", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepPink"
              />
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => updateField("rememberMe", e.target.checked)}
                  className="text-deepPink"
                />
                Remember me
              </label>
            </div>
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={prevStep}
                className="text-sm text-gray-500 underline"
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
                className="bg-deepPink text-white py-2 px-6 rounded-full disabled:opacity-50"
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg min-h-[80vh] flex flex-col justify-center">
        {renderStep()}
      </div>
    </div>
  );
}

export default RegisterFlow;
