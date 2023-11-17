import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCarts from "../hooks/useCarts";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const { name, image, recipe, _id, price } = item || {};
  const [, refetch] = useCarts();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  // handleAddToCard -----
  const handleAddToCard = (data) => {
    if (user && user.email) {
      console.log(user.email, data);
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure({
        method: "POST",
        url: "/carts",
        data: cartItem,
      })
        .then((res) => {
          console.log(res);
          if (res.data.acknowledged) {
            refetch();
            toast.success("Add to cart success");
            return;
          }
          toast.error("Somethin wrong");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.custom((t) => {
        return (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5 h-auto`}
          >
            {/* alert body */}
            <div>
              <h1 className="py-5 text-center text-3xl font-semibold flex justify-center items-center gap-2">
                <span className="text-indigo-600">
                  <BiLogIn />
                </span>{" "}
                You are not logged in
              </h1>
            </div>
            {/* button container */}
            <div
              onClick={() => toast.dismiss(t.id)}
              className="flex border-l border-gray-200 border-t"
            >
              <button
                onClick={handleLoginNavigate}
                className=" btn btn-ghost flex-1 text-indigo-600 capitalize rounded "
              >
                Login
              </button>
              <b className="pl-[1px] bg-gray-300"></b>
              <button className=" btn btn-ghost flex-1 text-indigo-600 capitalize rounded ">
                No
              </button>
            </div>
          </div>
        );
      });
    }
  };

  const handleLoginNavigate = () => {
    navigate("/login", { state: { from: location } });
    console.log(location);
  };

  return (
    <div className="bg-gray-100 rounded-lg">
      <figure>
        <img className="w-full h-[300px] object-cover" src={image} alt="" />
      </figure>
      <div className="flex flex-col justify-center  items-center gap-2 py-5">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-gray-500 max-w-xs text-center">{recipe}</p>
        <button
          onClick={() => handleAddToCard(item)}
          className="btn btn-ghost border-0 rounded  border-b-2 border-yellow-600 text-yellow-600 bg-gray-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
