import React from "react";
import {
  FaUser,
  FaBell,
  FaCog,
  FaShieldAlt,
  FaGlobe,
  FaChevronRight,
  FaPen,
  FaHistory,
  FaHeart,
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

const recordItems = [
  { icon: <FaHistory />, label: "My Records", path: "/my-activities" },
  { icon: <FaHeart />, label: "Favorites" },
];

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-6 lg:px-20 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Account Settings
        </h2>

        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 bg-gradient-to-r from-[#f19ad2] to-[#ab4ee1] p-6 rounded-2xl shadow-md text-white">
          <div className="flex items-center gap-4">
            <img
              src={user.photo}
              alt="User"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">
                {user.fullName}
              </h3>
              <p className="text-sm sm:text-base break-all">{user.email}</p>
            </div>
          </div>
          <Link to="/profile/personal-info">
            <button className="text-white hover:text-gray-100 bg-[#9743c8] px-3 py-2 rounded-full shadow transition">
              <FaPen className="text-base" />
            </button>
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 my-10">
          {menuItems.map(({ icon, label, value, path }, i) => {
            const content = (
              <div className="flex items-center justify-between bg-[#f19ad2]/20 hover:bg-[#f19ad2]/40 rounded-2xl px-4 py-4 shadow transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full text-[#9743c8] shadow-md">
                    {icon}
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800">
                    {label}
                  </span>
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

        {/* My Records Section */}
        <h3 className="text-xl font-semibold mb-4 text-gray-800">My Records</h3>
        <div className="flex flex-col gap-4 my-10">
          {recordItems.map(({ icon, label, path }, i) => {
            const content = (
              <div className="flex items-center justify-between bg-[#ab4ee1]/10 hover:bg-[#ab4ee1]/20 rounded-2xl px-4 py-4 shadow transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full text-[#ab4ee1] shadow-md">
                    {icon}
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800">
                    {label}
                  </span>
                </div>
                <FaChevronRight className="text-gray-500" />
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
