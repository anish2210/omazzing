import React from "react";

const TrendingCard = ({ title, img, tag }) => {
  return (
    <div className="bg-white rounded-xl shadow-md w-48 mr-4 p-3 flex-shrink-0">
      <img
        src={img}
        alt={title || "Trending Course"}
        className="w-full h-28 object-cover rounded-lg mb-2"
      />

      {tag && (
        <span className="text-xs text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full inline-block mb-1">
          {tag}
        </span>
      )}

      <h4 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
        {title}
      </h4>
    </div>
  );
};

export default TrendingCard;
