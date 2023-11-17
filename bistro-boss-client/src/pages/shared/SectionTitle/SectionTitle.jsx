const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center my-3 gap-2" >
      <h3 className="italic text-yellow-500">---{subHeading}---</h3>
      <h1 className="text-3xl uppercase border-y-2 px-8 p-2">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
