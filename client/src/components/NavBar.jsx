import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBookOpen, FaUser } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: <FaHome className="text-xl mb-0.5" /> },
    { to: "/courses", label: "Courses", icon: <FaBookOpen className="text-xl mb-0.5" /> },
    { to: "/profile", label: "Profile", icon: <FaUser className="text-xl mb-0.5" /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop top navbar */}
      <nav className="hidden md:flex items-center justify-between px-10 h-[64px] bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="text-2xl font-semibold text-indigo-600">Omaazing</div>
        <div className="flex space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 ${
                isActive(item.to)
                  ? "text-indigo-600 font-medium"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile top header with logo */}
      <div className="flex md:hidden justify-center items-center h-12 bg-white shadow-sm fixed top-0 left-0 right-0 z-40">
        <span className="text-lg font-semibold text-indigo-600">Omaazing</span>
      </div>

      {/* Mobile bottom navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md md:hidden">
        <div className="flex justify-around items-center h-14">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center text-xs transition-colors duration-200 ${
                isActive(item.to)
                  ? "text-indigo-600 font-medium"
                  : "text-gray-500 hover:text-indigo-600"
              }`}
            >
              {item.icon}
              <span className="mt-0.5">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
