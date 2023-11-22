import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useAdmin from "../../../hooks/useAdmin";

const NavMenu = () => {
  const { logOut, user } = useAuth();
  const [isAdimn] = useAdmin();
  console.log(isAdimn);

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
      {user && isAdimn && (
        <NavLink to="/dashbord/admin_home">Admin Dashbord</NavLink>
      )}
      {user && !isAdimn && (
        <NavLink to="/dashbord/user_home">User Dashbord</NavLink>
      )}

      <NavLink to="/order/all">Order</NavLink>
      {user ? (
        <span onClick={handleLogOut} className="cursor-pointer">
          Log OUt
        </span>
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
