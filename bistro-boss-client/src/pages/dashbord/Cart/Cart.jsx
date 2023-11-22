import { RiDeleteBin6Line } from "react-icons/ri";
import useCarts from "../../../hooks/useCarts";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [carts, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const totalPrice =
    carts &&
    carts?.reduce((a, b) => {
      const result = a + parseFloat(b.price);
      //   console.log(result);
      // console.log(b.price);
      return result;
    }, 0);
  // console.log(totalPrice);
  const handleDeletePopup = (id) => {
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
                <RiDeleteBin6Line />
              </span>{" "}
              Are sure delete this item
            </h1>
          </div>
          {/* button container */}
          <div
            onClick={() => toast.dismiss(t.id)}
            className="flex border-l border-gray-200 border-t"
          >
            <button
              onClick={() => handleDeleteConfirm(id)}
              className=" btn btn-ghost flex-1 text-red-600 capitalize rounded "
            >
              Yes
            </button>
            <b className="pl-[1px] bg-gray-300"></b>
            <button className=" btn btn-ghost flex-1 text-indigo-600 capitalize rounded ">
              No
            </button>
          </div>
        </div>
      );
    });
  };

  // handle delete confirm
  const handleDeleteConfirm = (id) => {
    axiosSecure
      .delete(`/carts/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount) {
          toast.success("Delete Success");
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };

  return (
    <div className="my-6">
      {/* user card header information */}
      <div className="flex justify-between items-center gap-2 text-2xl font-semibold ">
        <h2> Total Items: {carts && carts?.length}</h2>
        <h2> Total Price: $ {totalPrice.toFixed(2)}</h2>
        {carts && carts?.length ? (
          <Link to="/dashbord/payment">
            <button className="btn bg-yellow-600 border-none outline-none text-white rounded">
              Pay
            </button>{" "}
          </Link>
        ) : (
          <button
            disabled
            className="btn bg-yellow-600 border-none outline-none text-white rounded"
          >
            Pay
          </button>
        )}
      </div>
      {/* user cart list table */}

      <div className="overflow-x-auto mt-5">
        <table className="table rounded-2xl rounded-t-2xl overflow-hidden">
          {/* head */}
          <thead className="bg-yellow-600 bg-opacity-70 ">
            <tr className="text-white text-base ">
              <th>SL</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {carts &&
              carts?.map((item, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <figure>
                      <img
                        className="w-24 h-16 rounded object-cover "
                        src={item?.image}
                        alt=""
                      />
                    </figure>
                  </td>
                  <td>{item?.name}</td>
                  <td>
                    {/* delete button */}

                    <span
                      onClick={() => handleDeletePopup(item?._id)}
                      className="px-6 p-1 rounded text-xl cursor-pointer  inline-block bg-gray-300"
                    >
                      <RiDeleteBin6Line />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
