const CategoryCard = ({ title, count, img }) => {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col items-center min-w-[144px] max-w-[144px] flex-shrink-0 shadow-md snap-start">
      <img src={img} alt={title} className="w-12 h-12 object-contain mb-2" />
      <h4 className="text-sm font-medium text-center">{title}</h4>
      <p className="text-xs text-gray-500 text-center">{count} courses</p>
    </div>
  );
};

export default CategoryCard;
