import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: menu,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-menu"],
    queryFn: async () => await axiosPublic.get("/menu").then((res) => res.data),
  });
  return [menu, isLoading, refetch];
};

export default useMenu;
