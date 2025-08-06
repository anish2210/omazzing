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
    <div className="min-h-screen bg-white pb-6">
      {/* Top Header */}
      <Header />

      {/* Hero Section */}
      <HeroCard />

      {/* Categories Section */}
      <SectionHeader title="Explore by Categories" />
      <ScrollRow>
        <CategoryCard title="Focus" count="32" img={placeholder1} />
        <CategoryCard title="Body Scan" count="18" img={placeholder2} />
        <CategoryCard title="Sleep" count="25" img={placeholder1} />
        <CategoryCard title="Relax" count="20" img={placeholder2} />
        <CategoryCard title="Calm" count="12" img={placeholder1} />
        <CategoryCard title="Energy" count="22" img={placeholder2} />
      </ScrollRow>

      {/* Recommended Section */}
      <SectionHeader title="Recommended for You" />
      <ScrollRow>
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
      <SectionHeader title="Trending This Week" />
      <ScrollRow>
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
