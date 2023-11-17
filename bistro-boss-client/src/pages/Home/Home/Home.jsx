import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import CategorySwiper from "../CategorySwiper/CategorySwiper";
import ChefRecomend from "../ChefRecomend/ChefRecomend";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <CategorySwiper />
      <BistroBoss />
      <PopularMenu />
      <CallUs />
      <ChefRecomend />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
