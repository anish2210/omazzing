import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ScrollRow = ({ children }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full my-4">
      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide px-4"
      >
        {children}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ScrollRow;
