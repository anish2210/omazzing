const HeroCard = () => {
  return (
    <div className="bg-[#F3E8FF] rounded-2xl px-6 py-5 mx-4 my-2 flex items-center justify-between shadow-md">
      <div className="flex-1">
        <h2 className="font-semibold text-lg text-gray-900">
          Daily Meditation
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Feel less stressed and more mindful with meditation
        </p>
      </div>

      <div className="w-16 h-16 flex-shrink-0 rounded-full bg-white flex items-center justify-center shadow-md ring-2 ring-purple-300 ml-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Meditation"
          className="w-12 h-12 object-contain"
        />
      </div>
    </div>
  );
};

export default HeroCard;
