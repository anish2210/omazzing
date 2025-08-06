const IMAGE_MAP = {
  Focus:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80", // Woman meditating
  "Body Scan":
    "https://images.unsplash.com/photo-1483728642387-f4543fac2064?auto=format&fit=crop&w=100&q=80", // Abstract
  Sleep:
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=100&q=80", // Night calm
  Relax:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80", // Lake
  Calm: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80", // Calm face
  Energy:
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=100&q=80", // Sunrise
};

const CategoryCard = ({ title, count, img }) => {
  // Prefer Unsplash from map if title matches, fallback to provided img
  const imageUrl = IMAGE_MAP[title] || img;
  return (
    <div
      className="bg-babyPink hover:bg-pinkAccent/10 rounded-xl 
      p-4 lg:p-2 lg:m-2 flex flex-col items-center 
      min-w-[144px] max-w-[144px] lg:min-w-[180px] lg:max-w-[180px]
      flex-shrink-0 shadow-sm snap-start transition-all duration-150
      cursor-pointer group"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-12 h-12 lg:w-16 lg:h-16 object-cover rounded-full mb-2 lg:mb-3 border-2 border-white shadow-sm group-hover:scale-105 transition-all"
        loading="lazy"
      />
      <h4 className="text-sm lg:text-lg font-semibold text-center text-gray-900 group-hover:text-pinkAccent">
        {title}
      </h4>
      <p className="text-xs lg:text-sm text-gray-500 text-center mt-1">
        {count} courses
      </p>
    </div>
  );
};

export default CategoryCard;
