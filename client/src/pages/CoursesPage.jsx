import React from "react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "foundation-of-yoga", // added id
    title: "Foundation of Yoga",
    status: "Start",
    duration: "8 hours",
    chapters: 12,
    progress: 0,
    image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
    locked: false,
  },
  {
    id: "mindful-meditation", // added id, must match mockCourses key
    title: "Mindful Meditation",
    status: "Continue",
    duration: "8 hours",
    chapters: 12,
    progress: 32,
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
    locked: false,
  },
  {
    id: "pranayanaam-basic", // added id
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
    <div className="bg-babyPink min-h-screen py-10 px-4 md:px-20 text-black">
      <h1 className="text-3xl font-bold mb-8">Prarambh Plan</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                {course.locked && <Lock className="w-4 h-4" />}
                {course.title}
              </h2>

              <div className="text-sm text-gray-600 mb-4 flex gap-4">
                <span>🕒 {course.duration}</span>
                <span>📘 {course.chapters} Chapters</span>
              </div>

              {course.progress > 0 && (
                <div className="mb-3">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-pinkAccent rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{course.progress}% Completed</p>
                </div>
              )}

              <div className="mt-auto">
                <Link
                  to={`/courses/${course.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <button
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
                      course.status.toLowerCase() === "unlock"
                        ? "bg-gray-200 hover:bg-gray-300 text-black border border-gray-300"
                        : "bg-pinkAccent hover:bg-pink-500 text-black border border-gray-300"
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
