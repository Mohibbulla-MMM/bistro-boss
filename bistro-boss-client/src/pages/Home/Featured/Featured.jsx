import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-black bg-blend-overlay bg-opacity-40  text-white bg-center bg-cover md:p-24 py-16 px-5"
    >
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
      <div className="flex lg:flex-row flex-col gap-10 items-center mt-6 ">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="text-white">
          <h2 className="text-xl">March 20, 2023</h2>
          <h2 className="text-xl">WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            officiis culpa fugiat molestias minima vero aperiam molestiae saepe
            nisi doloremque ea assumenda nihil iusto commodi velit, debitis
            reprehenderit modi a.
          </p>
          <button className="btn btn-ghost   border-0 border-b-2 border-white bg-transparent text-white">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
