import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import DashbordMenu from "../pages/dashbord/DashbordMenu/DashbordMenu";

const Dashbord = () => {
  return (
    <div
      className="flex flex-col lg:flex-row   
      bg-white min-h-screen  "
    >
      {/* sidebar  */}
      <div className="w-64   ">
        <div className="drawer   overflow-y-auto    p-0 m-0">
          <input
            id="my-drawer-3"
            type="checkbox"
            className="drawer-toggle p-0 m-0"
          />
          <div className="drawer-content p-0 m-0 flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar p-0 m-0">
              <div className="flex-none lg:hidden p-0 m-0">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <FaBars />
                </label>
              </div>

              <div className="flex-none hidden lg:block fixed top-0 ">
                <ul
                  className="menu p-4 w-64 min-h-screen bg-yellow-600 gap-2 relative
               top-0"
                >
                  {/* Sidebar content here */}
                  <DashbordMenu />
                </ul>
              </div>
            </div>
            {/* Page content here Content */}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-64 min-h-screen bg-yellow-600 gap-2">
              {/* Sidebar content here */}
              <DashbordMenu />
            </ul>
          </div>
        </div>
      </div>
      {/* content container / outlet */}
      <div className="flex-1 p-3 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashbord;
