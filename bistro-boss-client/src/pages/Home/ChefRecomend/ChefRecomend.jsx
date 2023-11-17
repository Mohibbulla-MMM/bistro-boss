import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import salad from "../../../assets/menu/salad-bg.jpg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";

const ChefRecomend = () => {
  return (
    <div className="mt-10">
      <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-6">
        {/* ---------- salad ------------ */}
        <div className="bg-gray-100">
          <figure>
            <img className="w-full h-[300px] object-cover" src={salad} alt="" />
          </figure>
          <div className="flex flex-col justify-center  items-center gap-2 py-5">
            <h1 className="text-xl font-bold">Caeser Salad</h1>
            <p className="text-gray-500 max-w-xs text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-ghost border-0 rounded  border-b-2 border-yellow-500 text-yellow-500 bg-gray-200">
              Add to Cart
            </button>
          </div>
        </div>

        {/* ---------- soup ------------ */}
        <div className="bg-gray-100">
          <figure>
            <img className="w-full h-[300px] object-cover" src={soup} alt="" />
          </figure>
          <div className="flex flex-col justify-center  items-center gap-2 py-5">
            <h1 className="text-xl font-bold">Soup</h1>
            <p className="text-gray-500 max-w-xs text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-ghost border-0 rounded  border-b-2 border-yellow-500 text-yellow-500 bg-gray-200">
              Add to Cart
            </button>
          </div>
        </div>

        {/* ---------- Pizza ------------ */}
        <div className="bg-gray-100">
          <figure>
            <img className="w-full h-[300px] object-cover" src={pizza} alt="" />
          </figure>
          <div className="flex flex-col justify-center  items-center gap-2 py-5">
            <h1 className="text-xl font-bold">Pizza </h1>
            <p className="text-gray-500 max-w-xs text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-ghost border-0 rounded  border-b-2 border-yellow-500 text-yellow-500 bg-gray-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomend;
