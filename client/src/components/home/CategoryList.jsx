import CategoryCard from "./CategoryCard";
import ScrollRow from "./ScrollRow";

const categories = [
  { title: "Focus", count: 32, img: "https://placehold.co/48x48?text=F" },
  { title: "Body Scan", count: 18, img: "https://placehold.co/48x48?text=B" },
  { title: "Sleep", count: 25, img: "https://placehold.co/48x48?text=S" },
  { title: "Relax", count: 20, img: "https://placehold.co/48x48?text=R" },
  { title: "Calm", count: 12, img: "https://placehold.co/48x48?text=C" },
  { title: "Energy", count: 22, img: "https://placehold.co/48x48?text=E" },
  { title: "Meditation", count: 19, img: "https://placehold.co/48x48?text=M" },
];

const CategoryList = () => (
  <div>
    <h3 className="mb-3 text-lg font-semibold">Explore by Categories</h3>
    <ScrollRow>
      {categories.map((cat) => (
        <CategoryCard
          key={cat.title}
          title={cat.title}
          count={cat.count}
          img={cat.img}
        />
      ))}
    </ScrollRow>
  </div>
);

export default CategoryList;
