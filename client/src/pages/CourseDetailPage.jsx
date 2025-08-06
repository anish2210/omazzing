// src/pages/CourseDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CheckCircle, Lock } from "lucide-react";

const mockCourses = {
  "mindful-meditation": {
    title: "Mindful Meditation",
    duration: "8 hours",
    chapters: 12,
    progress: 32,
    lessons: [
      { title: "Introduction", duration: "27 mins", status: "completed" },
      { title: "Focused Breathing", duration: "24 mins", status: "completed" },
      { title: "Uncluttered Mind", duration: "25 mins", status: "in-progress" },
      { title: "Clear Vision", duration: "64 mins", status: "locked" },
      { title: "Peacefulness", duration: "34 mins", status: "locked" },
      { title: "Mindfulness", duration: "7 mins", status: "locked" },
    ],
  },
};

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const data = mockCourses[courseId];
    setCourseData(data || null);
  }, [courseId]);

  if (!courseData) {
    return <p className="text-center mt-10">Course not found</p>;
  }

  return (
    <div className="min-h-screen bg-babyPink p-4 md:p-10 text-black">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">{courseData.title}</h1>
      <div className="flex items-center gap-6 text-sm text-gray-700 mb-6">
        <span>🕒 {courseData.duration}</span>
        <span>📘 {courseData.chapters} Chapters</span>
        <span className="text-pinkAccent">{courseData.progress}% Completed</span>
      </div>

      <div className="h-2 w-full bg-gray-300 rounded-full mb-6">
        <div
          className="h-2 bg-pinkAccent rounded-full"
          style={{ width: `${courseData.progress}%` }}
        />
      </div>

      <div className="space-y-4">
        {courseData.lessons.map((lesson, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-lg shadow-md bg-white ${
              lesson.status === "locked" ? "opacity-60" : ""
            }`}
          >
            <img
              src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
              alt="Lesson"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{lesson.title}</h3>
              <p className="text-sm text-gray-600">🕒 {lesson.duration}</p>
            </div>
            {lesson.status === "completed" && <CheckCircle className="text-pinkAccent" />}
            {lesson.status === "locked" && <Lock className="text-gray-500" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetailPage;
