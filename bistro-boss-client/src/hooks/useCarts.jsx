import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure({
        url: `/carts?email=${user?.email}`,
        method: "GET",
      });
      return res.data;
    },
    // retry: 3000,
    // retryDelay: 300,
  });
  // console.log(isError);
  // console.log(carts);
  return [carts, refetch];
};

export default useCarts;
