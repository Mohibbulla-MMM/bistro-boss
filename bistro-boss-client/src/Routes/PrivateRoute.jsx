import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(location);
  // console.log(user);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center   ">
        <h1 className="text-4xl font-semibold text-orange-500">Please wait</h1>
      </div>
    );
  }
  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
