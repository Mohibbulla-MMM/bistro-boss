import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDelete = (url, id) => {
    console.log(url,id);
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["delete-item", id],
    queryFn: async () =>
      await axiosSecure.delete(`/${url}/${id}`).then((res) => res.data),
  });
  return data;
};

export default useDelete;
