import {
  FaCalendarCheck,
  FaCalendarDay,
  FaCommentDots,
  FaHome,
  FaJediOrder,
  FaList,
  FaPaypal,
  FaPhone,
  FaShoppingCart,
  FaUser,
  FaUtensilSpoon,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useCarts from "../../../hooks/useCarts";

const DashbordMenu = () => {
  const [cart] = useCarts();
  const [admin] = useAdmin();
  // console.log(admin);
  // const admin = true;

  return (
    <>
      {admin ? (
        <>
          {/* --------------------- only admin ----------------------- */}

          {/* add home4 */}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded`}
              to="/dashbord/admin_home"
            >
              <FaHome />
              Admin Home
            </NavLink>
          </li>

          {/* add items  */}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded`}
              to="/dashbord/add_items"
            >
              <FaUtensilSpoon />
              Add Items
            </NavLink>
          </li>

          {/* manage all items */}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
              to="/dashbord/manage_all_items"
            >
              <FaList />
              Manage All Items
            </NavLink>
          </li>

          {/* manage booking */}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
              to="/dashbord/manage_bookin"
            >
              <FaCalendarDay />
              Manage Booking
            </NavLink>
          </li>

          {/* all users */}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
              to="/dashbord/all_users"
            >
              <FaUser />
              All users
            </NavLink>
          </li>

          {/*MY pdf */}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
              to="/dashbord/my_pdf"
            >
              <FaUser />
              My PDF
            </NavLink>
          </li>
        </>
      ) : (
        <>
          {/* --------------------- simple user ----------------------- */}
          {/* user home */}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded`}
              to="/dashbord/user_home"
            >
              <FaHome />
              User Home
            </NavLink>
          </li>
          {/* reservation */}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded`}
              to="/dashbord/reservation"
            >
              <FaCalendarDay />
              Reservation
            </NavLink>
          </li>
          {/*  Payment history*/}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
              to="/dashbord/payment_history"
            >
              <FaPaypal />
              Payment history
            </NavLink>
          </li>
          {/* my card */}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
              to="/dashbord/cart"
            >
              <FaShoppingCart />
              my Card ({cart && cart?.length})
            </NavLink>
          </li>
          {/* add review */}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
              to="/dashbord/add_review"
            >
              <FaCommentDots />
              Add review
            </NavLink>
          </li>
   
          {/* my booking*/}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
              to="/dashbord/my_booking"
            >
              <FaCalendarCheck />
              My booking
            </NavLink>
          </li>{" "}
          <li>
            <NavLink
              className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
              to="/dashbord/my_pdf"
            >
              <FaUser />
              My PDF
            </NavLink>
          </li>
        </>
      )}
      <div className="divider bg-white h-[2px]"></div>

      <li>
        <NavLink
          className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
          to="/"
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
          to="/menu"
        >
          <FaList />
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
          to="/order"
        >
          <FaJediOrder />
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`btn btn-block btn-ghost bg-white btn-sm hover:bg-gray-200 text-black flex justify-start items-center gap-2 rounded `}
          to="/contact"
        >
          <FaPhone />
          Contact
        </NavLink>
      </li>
    </>
  );
};

export default DashbordMenu;
