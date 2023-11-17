import { FaBars, FaShoppingCart } from "react-icons/fa";
import SiteLogo from "./SiteLogo";
import NavMenu from "./NavMenu";
import useAuth from "../../../hooks/useAuth";
import useCarts from "../../../hooks/useCarts";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuth();
  const [carts] = useCarts();
  // console.log(carts);
  return (
    <div className="navbar  ">
      <div className="navbar-start">
        <div className="pr-3">
          <SiteLogo />
        </div>

        {/* dropdown button */}
        <div className="dropdown">
          <label tabIndex={0} className="text-2xl cursor-pointer lg:hidden">
            <FaBars />
          </label>
          {/* mobaile menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow  bg-white rounded-box w-52"
          >
            <NavMenu />
          </ul>
        </div>
      </div>
      {/* desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-3 text-lg menu-horizontal px-1">
          <NavMenu />
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* user cart button */}
        <Link to="/dashbord/cart">
          <button
            className="btn btn-sm btn-circle relative bg-gray-200 border-none btn-ghost
        "
          >
            <div className=" absolute -top-2 -right-2 bg-error rounded-full p-1 z-10">
              {" "}
              {carts && carts?.length}
            </div>
            <span className=" relative">
              <FaShoppingCart />
            </span>
          </button>
        </Link>

        {/* user porfile image */}
        <figure title={user && user?.displayName}>
          <img
            className="w-8 h-8 rounded-full"
            src={user && user?.photoURL}
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};

export default Navbar;
