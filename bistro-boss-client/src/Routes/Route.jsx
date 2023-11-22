import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../Layout/Dashbord";
import Cart from "../pages/dashbord/Cart/Cart";
import AllUsers from "../pages/dashbord/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/DashBord/AddItem/AddItem";
import ManageAllitems from "../pages/dashbord/ManageAllitems/ManageAllitems";
import ManageUpdateItem from "../pages/dashbord/ManageAllitems/ManageUpdateItem";
import MyPdf from "../pages/dashbord/Pdf/MyPdf";
import Payment from "../pages/dashbord/Payment/Payment";
import PaymentHistory from "../pages/dashbord/Payment/PaymentHistory";
import UserHome from "../pages/dashbord/UserHome/UserHome";
import AdminHome from "../pages/dashbord/AdminHome/AdminHome";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },

      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashbord",
    element: (
      <PrivateRoute>
        <Dashbord />
      </PrivateRoute>
    ),
    children: [
      {
        path: "user_home",
        element: <UserHome />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment_history",
        element: <PaymentHistory />,
      },

      // admin only access
      {
        path: "admin_home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "add_items",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manage_all_items",
        element: (
          <AdminRoute>
            <ManageAllitems />
          </AdminRoute>
        ),
      },
      {
        path: "manage_all_items/:id",
        element: (
          <AdminRoute>
            <ManageUpdateItem />
          </AdminRoute>
        ),
      },
      {
        path: "all_users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "my_pdf",
        element: <MyPdf />,
      },
    ],
  },
]);

export default Route;
