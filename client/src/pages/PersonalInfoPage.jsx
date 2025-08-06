import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

const PersonalInfoPage = () => {
  const { user, updateUser } = useUser();
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files[0]) {
      const photoURL = URL.createObjectURL(files[0]);
      setFormData({ ...formData, photo: photoURL });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert("Profile updated!");
    window.history.back();
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-start p-4 sm:p-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-gradient-to-br from-[#f19ad2] to-[#ab4ee1] p-8 sm:p-10 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Edit Personal Info
        </h2>

        {/* Profile Image Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
          <img
            src={formData.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
          <label className="cursor-pointer text-sm font-semibold text-white hover:underline">
            Change Photo
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <InputField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {/* Email */}
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {/* Phone */}
          <InputField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {/* Date of Birth */}
          <InputField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          {/* Gender */}
          <SelectField
            label="Gender"
            name="gender"
            value={formData.gender}
            options={[
              "Female",
              "Male",
              "Non-binary",
              "Prefer not to say",
            ]}
            onChange={handleChange}
          />
          {/* Address */}
          <InputField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {/* Health Issues */}
          <InputField
            label="Health Issues"
            name="healthIssues"
            value={formData.healthIssues}
            onChange={handleChange}
          />
          {/* Meditation Goals */}
          <InputField
            label="Meditation Goals"
            name="meditationGoals"
            value={formData.meditationGoals}
            onChange={handleChange}
          />
          {/* Experience Level */}
          <SelectField
            label="Experience Level"
            name="experienceLevel"
            value={formData.experienceLevel}
            options={["Beginner", "Intermediate", "Advanced"]}
            onChange={handleChange}
            className="md:col-span-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <button
            type="button"
            onClick={handleCancel}
            className="px-5 py-2 rounded-lg bg-white text-[#9743c8] font-semibold border border-[#9743c8] hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-[#9743c8] text-white font-semibold hover:bg-[#8433b5] transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

// Reusable Input Field
const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-white font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-md border border-white bg-white text-[#333] focus:outline-none focus:ring-2 focus:ring-[#9743c8] shadow-sm"
    />
  </div>
);

// Reusable Select Field
const SelectField = ({ label, name, value, options, onChange, className = "" }) => (
  <div className={className}>
    <label className="block text-white font-medium mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-md border border-white bg-white text-[#333] focus:outline-none focus:ring-2 focus:ring-[#9743c8] shadow-sm"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default PersonalInfoPage;
