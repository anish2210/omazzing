import { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ScrollRow = ({ children }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position to toggle arrows
  const checkForScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkForScrollPosition();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkForScrollPosition);
    window.addEventListener("resize", checkForScrollPosition);

    return () => {
      el.removeEventListener("scroll", checkForScrollPosition);
      window.removeEventListener("resize", checkForScrollPosition);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      // Scroll by 50% of visible width for desktop, 300px for small screens
      const scrollAmount =
        window.innerWidth >= 1024 ? el.clientWidth * 0.5 : 300;

      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-5 my-6">
      {" "}
      {/* py-5 for vertical space */}
      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 px-4 scrollbar-thin scrollbar-thumb-pinkAccent scrollbar-track-babyPink scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        tabIndex={0}
        aria-label="Scrollable content"
        style={{ scrollPaddingBlock: 20 }} // Helps child focus ring, optional
      >
        {children}
      </div>
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 shadow-lg rounded-full z-20 hover:bg-pinkAccent/90 transition-colors"
        >
          <ChevronLeft size={24} className="text-pinkAccent" />
        </button>
      )}
      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 shadow-lg rounded-full z-20 hover:bg-pinkAccent/90 transition-colors"
        >
          <ChevronRight size={24} className="text-pinkAccent" />
        </button>
      )}
      {/* Optional gradient overlays to indicate scroll */}
      {canScrollLeft && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />
      )}
      {canScrollRight && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />
      )}
    </div>
  );
};

export default ScrollRow;
