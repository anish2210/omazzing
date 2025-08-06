// src/components/CourseProgressBar.jsx
import React from "react";

const CourseProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-2 bg-white bg-opacity-40 rounded-full mt-4 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-pinkAccent to-[#9743c8] transition-all duration-700 ease-out rounded-full"
        style={{
          width: `${Math.min(progress, 100)}%`, // ensures it never goes beyond 100%
        }}
      />
    </div>
  );
};

export default CourseProgressBar;
