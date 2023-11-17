import { useContext } from "react";
import { AuthContext } from "../provaider/AuthProvaider";

const useAuth = () => {
  const all = useContext(AuthContext);

  return all;
};

export default useAuth;
