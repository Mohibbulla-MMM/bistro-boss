import sliderImg1 from "../../../assets/home/slide1.jpg";
import sliderImg2 from "../../../assets/home/slide2.jpg";
import sliderImg3 from "../../../assets/home/slide3.jpg";
import sliderImg4 from "../../../assets/home/slide4.jpg";
import sliderImg5 from "../../../assets/home/slide5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
const CategorySwiper = () => {
  return (
    <section>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10:00pm"}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwipe  mt-10"
      >
        <SwiperSlide>
          <img
            src={sliderImg1}
            alt=""
            className="w-full max-h-[500px] object-cover"
          />
          <h4
            style={{ textShadow: " 2px 2px #000000" }}
            className=" text-center uppercase   text-xl text-white  drop-shadow  -mt-14 md:-mt-20 
     
          "
          >
            Salad
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg3}
            alt=""
            className="w-full max-h-[500px] object-cover"
          />
          <h4
            style={{ textShadow: " 2px 2px #000000" }}
            className=" text-center uppercase shadow-md text-xl text-white  stroke-slate-600  -mt-14 md:-mt-20"
          >
            Soups
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg2}
            alt=""
            className="w-full max-h-[500px] object-cover"
          />
          <h4
            style={{ textShadow: " 2px 2px #000000" }}
            className=" text-center uppercase shadow-md text-xl text-white  stroke-slate-600   
          -mt-14 md:-mt-20"
          >
            pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg4}
            alt=""
            className="w-full max-h-[500px] object-cover"
          />
          <h4
            style={{ textShadow: " 2px 2px #000000" }}
            className=" text-center uppercase shadow-md text-xl text-white  stroke-slate-600   -mt-14 md:-mt-20"
          >
            desserts
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg5}
            alt=""
            className="w-full max-h-[500px] object-cover"
          />
          <h4
            style={{ textShadow: " 2px 2px #000000" }}
            className=" text-center uppercase shadow-md text-xl text-white  stroke-slate-600  -mt-14 md:-mt-20"
          >
            Salad
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CategorySwiper;
