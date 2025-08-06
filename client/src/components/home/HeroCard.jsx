const HeroCard = () => {
  return (
    <div className="bg-babyPink rounded-2xl px-5 py-6 lg:py-8 lg:px-12 mx-2 lg:mx-0 my-2 flex items-center justify-between shadow-lg lg:min-h-[150px] transition-all duration-200">
      {/* Left: Text content */}
      <div className="flex-1">
        <h2 className="font-bold text-lg lg:text-2xl text-gray-900">
          Daily Meditation
        </h2>
        <p className="text-sm lg:text-base text-gray-700 mt-2 lg:mt-3 max-w-md">
          Feel less stressed and more mindful with meditation. Discover peace,
          balance, and renewed energy every day.
        </p>
      </div>
      {/* Right: Illustration */}
      <div className="w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0 rounded-full bg-white flex items-center justify-center shadow-md ring-2 ring-pinkAccent ml-4 lg:ml-8 transition-all duration-200">
        <img
          src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=100&q=80"
          alt="Meditation"
          className="w-12 h-12 lg:w-20 lg:h-20 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default HeroCard;
