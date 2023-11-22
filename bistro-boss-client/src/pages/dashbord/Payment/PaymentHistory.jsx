import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
  const { user } = useAuth();
  //   console.log(user);
  const axiosSecure = useAxiosSecure();
  const { data: carts = [] } = useQuery({
    queryKey: ["payments", user && user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user && user.email}`);

      return res.data;
    },
  });

  return (
    <div>
      <h1>Payment history</h1>
      <div className="overflow-x-auto mt-5">
        <table className="table rounded-2xl rounded-t-2xl overflow-hidden">
          {/* head */}
          <thead className="bg-yellow-600 bg-opacity-70 ">
            <tr className="text-white text-base ">
              <th>#</th>
              <th>Price</th>
              <th>TransecTion Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {carts &&
              carts?.map((item, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{item.price}</td>
                  <td>{item?.transactionId}</td>
                  <td>
                    <span className="btn btn-sm rounded-none btn-ghost bg-gray-200">
                    {item?.status}
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

export default PaymentHistory;
