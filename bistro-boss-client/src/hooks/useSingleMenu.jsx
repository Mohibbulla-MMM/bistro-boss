import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSingleMenu = (id) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: singleMenu = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["single-menu", id],
    queryFn: async () =>
      await axiosSecure.get(`/menu/${id}`).then((res) => res.data),
  });
  +``;
  return [singleMenu, isLoading, refetch];
};

export default useSingleMenu;
