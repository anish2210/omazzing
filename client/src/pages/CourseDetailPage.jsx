import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { PlayCircle, PauseCircle, CheckCircle, Lock, X } from "lucide-react";

// 🔹 Mock course data
const mockCourses = {
  "mindful-meditation": {
    title: "Mindful Meditation",
    duration: "8 hours",
    chapters: 12,
    progress: 32,
    lessons: [
      {
        title: "Introduction",
        duration: "27 mins",
        status: "completed",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
      },
      {
        title: "Focused Breathing",
        duration: "24 mins",
        status: "completed",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
      },
      {
        title: "Uncluttered Mind",
        duration: "25 mins",
        status: "in-progress",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
      },
      {
        title: "Clear Vision",
        duration: "64 mins",
        status: "locked",
        image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
      },
    ],
  },
};

// 🔹 Custom animated audio bars
const AudioPlayingAnimation = () => {
  return (
    <div className="flex items-end space-x-1 h-8 min-w-[60px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-2 bg-pinkAccent rounded-sm animate-bounceBar"
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: "1s",
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
};

// 🔹 Main component
const CourseDetailPage = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const data = mockCourses[courseId];
    setCourseData(data || null);
    setCurrentlyPlaying(null);
    setIsPlaying(false);
    audioRef.current.pause();

    return () => {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentlyPlaying(null);
    };
  }, [courseId]);

  const toggleAudio = async (lessonIndex, audioUrl) => {
    const audio = audioRef.current;

    try {
      if (currentlyPlaying === lessonIndex) {
        audio.pause();
        setIsPlaying(false);
        setCurrentlyPlaying(null);
      } else {
        audio.pause();
        audio.src = audioUrl;
        await audio.play();
        setCurrentlyPlaying(lessonIndex);
        setIsPlaying(true);
      }

      audio.onended = () => {
        setIsPlaying(false);
        setCurrentlyPlaying(null);
      };

      audio.onerror = () => {
        alert("Failed to load audio.");
        setIsPlaying(false);
        setCurrentlyPlaying(null);
      };
    } catch (error) {
      alert("Unable to play audio.");
    }
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const closePlayer = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setCurrentlyPlaying(null);
  };

  if (!courseData) {
    return <p className="text-center mt-10">Course not found</p>;
  }

  const currentLesson = currentlyPlaying !== null ? courseData.lessons[currentlyPlaying] : null;

  return (
    <div className="min-h-screen bg-[#fff0f6] p-4 md:p-10 text-black relative">
      {/* Header */}
      <div className="rounded-2xl p-6 text-white shadow-md mb-6 bg-gradient-to-r from-[#f19ad2] to-[#ab4ee1]">
        <h1 className="text-3xl md:text-4xl font-bold">{courseData.title}</h1>
        <div className="mt-2 flex flex-wrap gap-4 text-sm font-medium">
          <span>🕒 {courseData.duration}</span>
          <span>📘 {courseData.chapters} Chapters</span>
          <span>{courseData.progress}% Completed</span>
        </div>

        {/* Progress bar */}
        <div className="h-2 w-full bg-white bg-opacity-40 rounded-full mt-4">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${courseData.progress}%` }}
          />
        </div>
      </div>

      {/* Lessons */}
      <div className="space-y-4">
        {courseData.lessons.map((lesson, index) => {
          const isThisPlaying = currentlyPlaying === index && isPlaying;

          return (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 rounded-xl bg-[#ffe6f0] shadow-sm ${
                lesson.status === "locked" ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <img
                src={lesson.image}
                alt={lesson.title || "Lesson image"}
                className="w-16 h-16 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-[#9743c8]">{lesson.title}</h3>
                <p className="text-sm text-gray-600">🕒 {lesson.duration}</p>
              </div>

              {lesson.status === "completed" ? (
                <CheckCircle className="text-[#ab4ee1]" />
              ) : lesson.status === "locked" ? (
                <Lock className="text-gray-400" />
              ) : (
                <button
                  onClick={() => toggleAudio(index, lesson.audioUrl)}
                  aria-label={isThisPlaying ? `Pause ${lesson.title}` : `Play ${lesson.title}`}
                  className="cursor-pointer"
                >
                  {isThisPlaying ? (
                    <PauseCircle size={32} className="text-[#ab4ee1]" />
                  ) : (
                    <PlayCircle size={32} className="text-[#ab4ee1]" />
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Mini Player */}
      {currentLesson && (
        <div
          aria-live="polite"
          className="fixed bottom-6 right-6 max-w-xs w-full bg-white rounded-xl shadow-lg flex items-center gap-4 p-4 border border-pinkAccent z-50"
        >
          <img
            src={currentLesson.image}
            alt={currentLesson.title}
            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-pinkAccent">{currentLesson.title}</h4>
            <AudioPlayingAnimation />
          </div>
          <button
            onClick={handlePlayPause}
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
            className="text-pinkAccent hover:text-pink-600 transition"
          >
            {isPlaying ? <PauseCircle size={28} /> : <PlayCircle size={28} />}
          </button>
          <button
            onClick={closePlayer}
            aria-label="Close audio player"
            className="text-gray-500 hover:text-gray-700 transition ml-2"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseDetailPage;
