import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  if (sessionStorage.getItem("LoggedIn") && sessionStorage.getItem("user")) {
    return children;
  }

  return <Navigate to="/" />;
};
