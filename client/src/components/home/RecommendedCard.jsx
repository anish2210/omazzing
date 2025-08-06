const RecommendedCard = ({ title, desc, img }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 flex items-center w-72 flex-shrink-0 shadow-sm mr-3 snap-start">
      <div className="flex-1 pr-3">
        <h4 className="font-semibold text-sm text-gray-900">{title}</h4>
        <p className="text-xs text-gray-600 mt-1">{desc}</p>
      </div>
      <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="w-12 h-12 object-contain"
        />
      </div>
    </div>
  );
};

export default RecommendedCard;
