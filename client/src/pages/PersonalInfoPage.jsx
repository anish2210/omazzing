import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext"; // ✅ use context

const PersonalInfoPage = () => {
  const { user, updateUser } = useUser(); // ✅ get user and updater

  const [formData, setFormData] = useState(user); // ✅ use context user

  useEffect(() => {
    setFormData(user); // keep in sync
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
    updateUser(formData); // ✅ update context
    alert("Profile updated!");
    window.history.back(); // go to ProfilePage
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-10 text-black flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-babyPink p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-pinkAccent mb-6">Edit Personal Info</h2>

        {/* Photo Upload */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={formData.photo}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <label className="cursor-pointer text-sm text-pinkAccent font-medium hover:underline">
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

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-semibold mb-1">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            >
              <option>Female</option>
              <option>Male</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            />
          </div>

          {/* Health Issues */}
          <div>
            <label className="block text-sm font-semibold mb-1">Health Issues</label>
            <input
              type="text"
              name="healthIssues"
              value={formData.healthIssues}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            />
          </div>

          {/* Meditation Goals */}
          <div>
            <label className="block text-sm font-semibold mb-1">Meditation Goals</label>
            <input
              type="text"
              name="meditationGoals"
              value={formData.meditationGoals}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            />
          </div>

          {/* Experience Level */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1">Experience Level</label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pinkAccent"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-8 gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-pinkAccent text-gray-600 border-gray-400 hover:bg-pink-500 border border-pinkAccent hover:text-white"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoPage;
