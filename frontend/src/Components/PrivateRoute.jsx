import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  if (sessionStorage.getItem("isloggedin") && sessionStorage.getItem("accNo")) {
    return children;
  }

  return <Navigate to="/" />;
};
