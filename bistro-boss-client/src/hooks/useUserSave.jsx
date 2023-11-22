import useAxiosPublic from "./useAxiosPublic";

const useUserSave = async (user) => {
  const axiosPublic = useAxiosPublic();

  const data = await axiosPublic({
    url: "/users",
    method: "POST",
    data: user,
  }).then((res) => {
    return res.data;
  });
  // console.log(data);
  return data;
};

export default useUserSave;
