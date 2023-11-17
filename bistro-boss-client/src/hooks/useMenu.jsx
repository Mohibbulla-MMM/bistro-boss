import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useEffect, useState } from "react";

import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  // console.log(menu);
  // const [menu, setMenu] = useState([]);
  // const [loader, setLoader] = useState(false);
  const axiosPublic = useAxiosPublic();

  const {
    data: menu,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-menu"],
    queryFn: async () => await axiosPublic.get("/menu").then((res) => res.data),
  });
  // console.log(menu);
  // useEffect(() => {
  //   // ------------------ axios ---------------
  //   axios({
  //     method: "GET",
  //     url: "http://localhost:7000/menu",
  //   })
  //     .then((res) => {
  //       setMenu(res.data);
  //       setLoader(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log(menu);
  return [menu, isLoading, refetch];
};

export default useMenu;
