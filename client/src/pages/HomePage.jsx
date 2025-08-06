import Header from "../components/home/Header";
import HeroCard from "../components/home/HeroCard";
import SectionHeader from "../components/home/SectionHeader";
import CategoryCard from "../components/home/CategoryCard";
import RecommendedCard from "../components/home/RecommendedCard";
import ScrollRow from "../components/home/ScrollRow";

// Placeholder images
const placeholder1 = "https://via.placeholder.com/80x80?text=Focus";
const placeholder2 = "https://via.placeholder.com/80x80?text=Scan";
const placeholder3 = "https://via.placeholder.com/160x100?text=Mindfulness";

const Home = () => {
  return (
    <div className="min-h-screen bg-white pb-6 lg:pb-12 px-4 sm:px-6 lg:px-16">
      {/* Top Header */}
      <Header />

      {/* Hero Section */}
      <div className="mt-6 lg:mt-10">
        <HeroCard />
      </div>

      {/* Categories Section */}
      <SectionHeader
        title="Explore by Categories"
        className="mt-8 lg:mt-12 text-black"
        // Use pinkAccent color for title if SectionHeader accepts className
      />
      <ScrollRow className="m-4 lg:p-6 overflow-x-auto">
        <CategoryCard title="Focus" count="32" img={placeholder1} />
        <CategoryCard title="Body Scan" count="18" img={placeholder2} />
        <CategoryCard title="Sleep" count="25" img={placeholder1} />
        <CategoryCard title="Relax" count="20" img={placeholder2} />
        <CategoryCard title="Calm" count="12" img={placeholder1} />
        <CategoryCard title="Energy" count="22" img={placeholder2} />
      </ScrollRow>

      {/* Recommended Section */}
      <SectionHeader
        title="Recommended for You"
        className="mt-10 lg:mt-14 text-black"
      />
      <ScrollRow className="mt-4 lg:mt-6 overflow-x-auto">
        <RecommendedCard
          title="Mindfulness"
          desc="Practice and develop mindfulness"
          img={placeholder3}
        />
        <RecommendedCard
          title="Relaxing Sounds"
          desc="Calm your mind and body"
          img={placeholder3}
        />
        <RecommendedCard
          title="Focus Booster"
          desc="Improve your attention span"
          img={placeholder3}
        />
      </ScrollRow>

      {/* Trending Section */}
      <SectionHeader title="Trending This Week" className="mt-10 lg:mt-14" />
      <ScrollRow className="mt-4 lg:mt-6 overflow-x-auto">
        <RecommendedCard
          title="Deep Sleep"
          desc="Sleep better with guided sessions"
          img={placeholder3}
        />
        <RecommendedCard
          title="Focus Boost"
          desc="Increase concentration with sounds"
          img={placeholder3}
        />
        <RecommendedCard
          title="Morning Energy"
          desc="Kickstart your day with clarity"
          img={placeholder3}
        />
      </ScrollRow>
    </div>
  );
};

export default Home;
