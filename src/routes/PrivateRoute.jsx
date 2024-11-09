import { Navigate, Outlet } from "react-router-dom";
import { getUsername } from "../storage/user";

const PrivateRoute = () => {
  const username = getUsername();

  if (!username) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
