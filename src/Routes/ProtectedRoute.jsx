import React from "react";
import { useStateContext } from "../store";
import { Navigate, Route } from "react-router-dom";
import { showToast } from "../components/utils/Toast";

const ProtectedRoute = ({ children }) => {
  const { user } = useStateContext();
  const loading = user.loading;
  if (!loading) {
    if (user.user) {
      return children;
    } else {
      showToast("Please Login first!", "error");
      return <Navigate to="/login" />;
    }
  } else {
    return "loading";
  }
};

export default ProtectedRoute;
