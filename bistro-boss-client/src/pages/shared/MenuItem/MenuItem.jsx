const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item || {};
  return (
    <div className="flex gap-2 justify-center items-center ">
      <figure>
        <img
          src={image}
          alt={name}
          style={{ borderRadius: "0 250px 250px 280px" }}
          className="w-[120px] h-[100px] block border-t border-l "
        />
      </figure>
      {/* details part */}
      <div className="flex-1">
        <div className="flex justify-between relative items-center text-xl uppercase">
          <p className="absolute border border-gray-400 border-dashed top-1/2 left-0 w-full "></p>
          <h1 className="bg-white relative pr-2">{name}</h1>
          <p className="text-yellow-500 bg-white relative pl-3">${price}</p>
        </div>
        <p className="text-gray-500 mt-2">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
