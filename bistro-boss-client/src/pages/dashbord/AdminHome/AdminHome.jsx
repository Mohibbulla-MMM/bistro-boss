import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminState from "./AdminState";
import AdminHomeChirt from "./AdminHomeChert";

const AdminHome = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["admin-state"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-state");
      return res.data;
    },
  });
  const { data: chertData = [] } = useQuery({
    queryKey: ["order-stats"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl">
        Hi Welcome {user ? user?.displayName : "Back"}
      </h1>

      <AdminState data={data} />
      <AdminHomeChirt chertData={chertData} />
    </div>
  );
};

export default AdminHome;
