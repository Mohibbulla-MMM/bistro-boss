import { RiDeleteBin6Line, RiGroupFill } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  //   console.log(users);
  // ############################### user delete #################################
  // handle delete popup
  const handleUserDeletePopup = (id) => {
    toast.custom((t) => {
      return (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5 h-auto border-red-500 border-4 overflow-hidden`}
        >
          {/* alert body */}
          <div>
            <h1 className="py-5 text-center text-3xl font-semibold flex justify-center items-center gap-2">
              <span className="text-red-600">
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
              onClick={() => handleDeleteUserConfirm(id)}
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

  // handle delete user
  const handleDeleteUserConfirm = async (id) => {
    console.log(id);
    try {
      const res = await axiosSecure.delete(`/users/${id}`);
      console.log(res);
      if (res.data.deletedCount) {
        toast.success("Deleted Success");
        refetch();
        console.log(res);
      }
    } catch (errr) {
      console.log(errr);
    }
  };
  // ############################## admin crate ##################################

  // handle make admin  user
  const handleMakeAdmin = async (user) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `${user?.name} make admin`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Admin it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
            if (res.data.matchedCount) {
              refetch();
              console.log(res.data);
              swalWithBootstrapButtons.fire({
                icon: "success",
                title: "Deleted!",
                text: "Your file has been deleted.",
              });
            }
          });
        }
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel;
      });
  };
  return (
    <div>
      <div className="py-6 text-3xl font-semibold flex justify-evenly gap-3">
        <h2 className=" ">All users {}</h2>
        <h2 className=" ">Total users: {users && users?.length}</h2>
      </div>

      <div className="overflow-x-auto mt-5">
        <table className="table rounded-2xl rounded-t-2xl overflow-hidden">
          {/* head */}
          <thead className="bg-yellow-600 bg-opacity-70 ">
            <tr className="text-white text-base ">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Pole</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users &&
              users?.map((item, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>

                  <td>
                    <span>{item?.name}</span>
                  </td>

                  <td>{item?.email}</td>
                  {/* pole button */}
                  <td>
                    {item.role === "admin" ? (
                      <span
                        className="font-bold text-sm rounded  btn btn-sm 
                       bg-red-700  hover:bg-red-700  border-none text-white w-[80px]"
                      >
                        Admin
                      </span>
                    ) : (
                      <span
                        onClick={() => handleMakeAdmin(item)}
                        className=" btn btn-sm border-none  rounded text-xl cursor-pointer   bg-yellow-600 text-white w-[80px]"
                      >
                        <RiGroupFill />
                      </span>
                    )}
                  </td>

                  {/* delete button */}
                  <td>
                    <span
                      onClick={() => handleUserDeletePopup(item?._id)}
                      className="btn btn-sm border-none  rounded text-xl   text-white  bg-red-700 w-[80px]"
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

export default AllUsers;
