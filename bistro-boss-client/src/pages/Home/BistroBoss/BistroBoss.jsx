import bgImage from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className={`  bg-center bg-blend-overlay bg-opacity-10 py-20 lg:px-20 my-10`}
    >
      <div className="  text-center bg-white p-10 md:p-20  mx-auto ">
        <h1 className="text-3xl font-semibold uppercase mb-2">Bistro Boss</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
