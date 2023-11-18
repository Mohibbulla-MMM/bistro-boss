import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageAllitems = () => {
  const axiosSecure = useAxiosSecure();

  const [menu, , refetch] = useMenu();
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
  const handleDeleteConfirm = async (id) => {
    console.log(id);
    const res = await axiosSecure.delete(`/menu/${id}`);
    console.log(res);
    if (res.data.deletedCount) {
      toast.success("Delete success");
      refetch();
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Manage all items"}
        subHeading={"Hurry Up"}
        key={"Hurry Up"}
      />

      <div className="overflow-x-auto mt-5">
        <table className="table rounded-2xl rounded-t-2xl overflow-hidden">
          {/* head */}
          <thead className="bg-yellow-600 bg-opacity-70 ">
            <tr className="text-white text-base ">
              <th>{menu && menu?.length}</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu &&
              menu?.map((item, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>

                  <td className="inline-block">
                    <figure className="w-24 h-16   ">
                      <img
                        className="w-24 h-16 rounded object-cover "
                        src={item?.image}
                        alt=""
                      />
                    </figure>
                  </td>

                  <td>{item?.name}</td>

                  {/* update button */}
                  <td>
                    <Link to={`/dashbord/manage_all_items/${item?._id}`}>
                      <span className=" rounded text-xl cursor-pointer   btn btn-sm bg-yellow-600 border-none w-14">
                        <FaEdit className="text-white" />
                      </span>
                    </Link>
                  </td>

                  {/* delete button  */}
                  <td>
                    <span
                      onClick={() => handleDeletePopup(item?._id)}
                      className=" rounded text-xl cursor-pointer text-white  btn btn-sm bg-red-600 border-none w-14"
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

export default ManageAllitems;
