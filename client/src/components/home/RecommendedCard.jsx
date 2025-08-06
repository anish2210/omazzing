const IMAGE_MAP = {
  Mindfulness:
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=160&q=80", // Peaceful woman meditating
  "Relaxing Sounds":
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=160&q=80", // Calm water
  "Focus Booster":
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80", // Seated focus
  "Deep Sleep":
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=160&q=80", // Sleeping woman
  "Focus Boost":
    "https://images.unsplash.com/photo-1483728642387-f4543fac2064?auto=format&fit=crop&w=160&q=80", // Meditation abstract
  "Morning Energy":
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=160&q=80", // Sunrise outdoors
};

const RecommendedCard = ({ title, desc, img }) => {
  // Choose a real Unsplash image for matching titles; fallback to given img prop
  const imageUrl = IMAGE_MAP[title] || img;
  return (
    <div
      className="
        bg-babyPink hover:bg-pinkAccent/20
        rounded-xl p-4 lg:p-6 lg:m-2
        flex items-center w-64 lg:w-72 flex-shrink-0
        mr-4 lg:mr-6 shadow-sm snap-start cursor-pointer
        transition-all duration-300
      "
    >
      <div className="flex-1 pr-3">
        <h4 className="font-semibold text-base lg:text-lg text-gray-900">
          {title}
        </h4>
        <p className="text-xs lg:text-sm text-gray-700 mt-1 leading-snug">
          {desc}
        </p>
      </div>

      <div
        className="
          w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-lg 
          overflow-hidden bg-white flex items-center justify-center
        "
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-12 h-12 lg:w-16 lg:h-16 object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default RecommendedCard;
