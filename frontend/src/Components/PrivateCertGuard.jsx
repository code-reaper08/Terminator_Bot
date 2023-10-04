import { Navigate } from "react-router-dom";

export const PrivateCertGuard = ({ children }) => {
  if (
    localStorage.getItem("AllDone") === "true" &&
    JSON.parse(localStorage.getItem("user")).resignation_status === true
  ) {
    console.log("Switcjing [page");
    return children;
  }

  return <Navigate to="/dashboard" />;
};
