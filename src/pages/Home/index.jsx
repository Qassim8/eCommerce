import AddsSection from "../../components/AddsSection";
import Featuers from "../../components/FeaturesSection";
import MenuNav from "../../components/MenuNav";
import Navbar from "../../components/Navbar";
import PopularCtegories from "../../components/PopularCategorySection";

const Home = () => {
  return (
    <>
      <div className="container px-3 md:px-0 xl:max-w-7xl lg:max-w-4xl md:max-w-2xl mx-auto">
        <Navbar />
      </div>
      <MenuNav isContainer={true} />
      <AddsSection />
      <Featuers />
      <PopularCtegories />
    </>
  );
};

export default Home;
