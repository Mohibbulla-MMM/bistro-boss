import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const NavMenu = () => {
  const { logOut, user } = useAuth();

  const handleLogOut = () => {
    const loadingId = toast.loading("Please Wait");
    logOut()
      .then(() => {
        toast.success("Logged out", {
          id: loadingId,
        });
      })
      .catch((err) => {
        toast.error("Logged out failed", {
          id: loadingId,
        });
        console.log(err);
      });
  };
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/secret">Secret</NavLink>
      <NavLink to="/order/all">Order</NavLink>
      {user ? (
        <span onClick={handleLogOut} className="cursor-pointer">Log OUt</span>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
      <NavLink to="/register">Register</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Block</NavLink>
    </>
  );
};

export default NavMenu;
