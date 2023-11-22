import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data, isPending } = useQuery({
    queryKey: ["isAdimn", user?.email],
    enabled: !loading,
    queryFn: async () =>
      await axiosSecure
        .get(`/users/admin/${user?.email}`)
        .then((res) => res.data.admin),
  });
  console.log(data);
  return [data, isPending];
};

export default useAdmin;
