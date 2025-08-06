import React from "react";
import {
  FaUser,
  FaBell,
  FaCog,
  FaShieldAlt,
  FaGlobe,
  FaChevronRight,
  FaPen,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const menuItems = [
  { icon: <FaUser />, label: "Personal Info", path: "/profile/personal-info" },
  { icon: <FaBell />, label: "Notification" },
  { icon: <FaCog />, label: "Preferences" },
  { icon: <FaShieldAlt />, label: "Security" },
  {
    icon: <FaGlobe />,
    label: "Language",
    value: "English (US)",
  },
];

const ProfilePage = () => {
  const { user } = useUser(); // ✅ Get user from context

  return (
    <div className="min-h-screen bg-white text-black p-4 sm:p-6 lg:p-12 w-full">
      <div className="w-full max-w-7xl mx-auto">

        {/* Header */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Account</h2>

        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <img
              src={user.photo}
              alt="User"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.fullName}</h3>
              <p className="text-sm text-gray-500 break-all">
                {user.email}
              </p>
            </div>
          </div>
          <Link to="/profile/personal-info">
            <button className="text-gray-500 hover:text-pinkAccent">
              <FaPen className="text-base" />
            </button>
          </Link>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {menuItems.map(({ icon, label, value, path }, i) => {
            const content = (
              <div className="flex items-center justify-between bg-babyPink rounded-xl px-4 py-3 shadow-sm hover:bg-pinkAccent/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-full text-gray-700 shadow">
                    {icon}
                  </div>
                  <span className="text-sm md:text-base font-medium">{label}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  {value && <span className="hidden sm:inline">{value}</span>}
                  <FaChevronRight />
                </div>
              </div>
            );

            return path ? (
              <Link to={path} key={i}>
                {content}
              </Link>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
