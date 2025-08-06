import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBookOpen, FaUser, FaTag } from "react-icons/fa";
import logo from "../assets/images/image.png"; // Adjust path if needed

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    {
      to: "/homepage",
      label: "Home",
      icon: <FaHome className="text-xl mb-0.5" />,
    },
    {
      to: "/courses",
      label: "Courses",
      icon: <FaBookOpen className="text-xl mb-0.5" />,
    },
    {
      to: "/pricing",
      label: "Pricing",
      icon: <FaTag className="text-xl mb-0.5" />,
    },
    {
      to: "/profile",
      label: "Profile",
      icon: <FaUser className="text-xl mb-0.5" />,
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-center fixed top-0 left-0 right-0 z-50 h-[68px] px-0">
        <div className="flex items-center justify-between w-full max-w-5xl mx-auto h-[58px] bg-white/95 rounded-full shadow-md px-8">
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <img
              src={logo}
              alt="Omaazing Logo"
              className="w- h-10 object-contain rounded-full shadow-sm hover:scale-105 transition-transform"
            />
          </Link>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-2 px-4 py-2 font-medium rounded-full transition-all duration-200 
                  cursor-pointer select-none
                  ${
                    isActive(item.to)
                      ? "bg-pinkAccent/30 text-pinkAccent shadow"
                      : "text-gray-600 hover:bg-babyPink hover:text-pinkAccent"
                  }`}
              >
                {item.icon}
                <span className="text-base">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="w-full md:hidden fixed top-2 left-0 right-0 z-[51] px-3 pointer-events-none">
        <div className="w-full bg-white/70 backdrop-blur-xl shadow-md rounded-2xl px-0 py-2 flex justify-center items-center pointer-events-auto">
          <Link to="/" className="flex items-center cursor-pointer select-none">
            <img
              src={logo}
              alt="Omaazing Logo"
              className="w-40 h-10 object-contain rounded-full"
            />
          </Link>
        </div>
      </div>

      {/* Capsule Mobile Bottom Navbar */}
      <nav className="fixed bottom-3 left-0 right-0 z-50 md:hidden flex justify-center align-middle pointer-events-none">
        <div
          className="bg-white/60 backdrop-blur-xs shadow-xl rounded-[2rem] px-4 py-1.5 flex items-center w-[92vw] max-w-xl mx-auto pointer-events-auto border border-white/30
    justify-between" // <-- changed here for equal spacing
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg font-medium transition-all duration-200
          cursor-pointer select-none
          ${
            isActive(item.to)
              ? "bg-pinkAccent/20 text-pinkAccent"
              : "text-gray-500 hover:text-pinkAccent"
          }`}
            >
              {item.icon}
              <span className="mt-0.5 text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
