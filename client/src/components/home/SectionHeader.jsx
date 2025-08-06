import { FaArrowRight } from "react-icons/fa";

const SectionHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center px-4 mt-6 mb-2">
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition">
        <span>See all</span>
        <FaArrowRight className="text-xs" />
      </button>
    </div>
  );
};

export default SectionHeader;
