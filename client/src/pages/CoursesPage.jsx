import React from "react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "foundation-of-yoga",
    title: "Foundation of Yoga",
    status: "Start",
    duration: "8 hours",
    chapters: 12,
    progress: 0,
    image: "./assets/images/img-1.jpg",
    locked: false,
  },
  {
    id: "mindful-meditation",
    title: "Mindful Meditation",
    status: "Continue",
    duration: "8 hours",
    chapters: 12,
    progress: 32,
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
    locked: false,
  },
  {
    id: "pranayanaam-basic",
    title: "Pranayanaam Basic",
    status: "Unlock",
    duration: "8 hours",
    chapters: 12,
    progress: 0,
    image: "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg",
    locked: true,
  },
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f19ad2] via-[#ab4ee1] to-[#9743c8] py-10 px-4 md:px-20 text-black">
      <h1 className="text-4xl font-bold mb-10 text-white text-center">
        Prarambh Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-[1.015] duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-[#9743c8]">
                {course.locked && <Lock className="w-4 h-4" />}
                {course.title}
              </h2>

              <div className="text-sm text-gray-600 mb-4 flex gap-4">
                <span>🕒 {course.duration}</span>
                <span>📘 {course.chapters} Chapters</span>
              </div>

              {course.progress > 0 && (
                <div className="mb-3">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#f19ad2] via-[#ab4ee1] to-[#9743c8]"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {course.progress}% Completed
                  </p>
                </div>
              )}

              <div className="mt-auto pt-4">
                <Link to={`/courses/${course.id}`} style={{ textDecoration: "none" }}>
                  <button
                    className={`w-full py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
                      course.status.toLowerCase() === "unlock"
                        ? "bg-gray-200 hover:bg-gray-300 text-black"
                        : "bg-gradient-to-r from-[#f19ad2] via-[#ab4ee1] to-[#9743c8] text-white hover:opacity-90"
                    }`}
                  >
                    {course.status}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
