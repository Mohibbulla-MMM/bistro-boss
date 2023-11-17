import { Parallax } from "react-parallax";
// import "./pageCover.css";

const PageCover = ({ bgImg, titleText, desText }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bgImg}
      bgImageAlt={titleText}
      strength={-200}
      //   bgImageStyle={
      //     cover
      //   }
      bgClassName="bg-center w-full  object-cover "
      // bgImageSize="bg-cover bg-center"
      // className="mm-bg-cover"
      // style={{ backgroundSize: "cover" }}
    >
      <div
        style={{
          backgroundSize: "cover",
          // backgroundImage: `url(${bgImg})`
        }}
        className="hero min-h-[70vh] sm:min-h-[90vh] text-white  px-10 lg:px-24"
      >
        <div className="sm:w-8/12 p-5  flex flex-col bg-black bg-opacity-40  backdrop-blur-sm uppercase text-center  text-white ">
          <h1 className="mb-5 text-5xl font-bold">{titleText}</h1>
          <p className="mb-5">{desText}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default PageCover;
