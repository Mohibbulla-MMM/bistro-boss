import { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import axios from "axios";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Testimonials = () => {
  const [review, setReview] = useState([]);
// console.log(review);
  useEffect(() => {
    axios({
      url: "https://bistro-boss-server-omega-lyart.vercel.app/reviews",
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        setReview(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="my-10">
      <SectionTitle
        heading={"textimonials"}
        subHeading={"What Ou Clients Say"}
      />

      <section className="mt-5">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {review &&
            review?.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="text-center space-y-2 max-w-2xl mx-auto">
                  <div className=" mx-auto flex justify-center ">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={item?.rating}
                      // onChange={setRating}
                      readOnly
                    />
                  </div>

                  <p className="flex justify-center text-5xl ">
                    <FaQuoteLeft />
                  </p>

                  <p className="mx-10">{item?.details}</p>

                  <p className="text-xl uppercase text-yellow-600 ">
                    {item?.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Testimonials;
