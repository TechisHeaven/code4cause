import { useEffect } from "react";
import { useDispatchContext } from "../src/store";
import Cookies from "js-cookie";

const useAuth = () => {
  const dispatch = useDispatchContext();

  useEffect(() => {
    dispatch({ type: "LOGIN_REQUEST" });
    let user = Cookies.get("user");
    if (user && user !== "undefined") {
      user = JSON.parse(user);
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } else {
      // Handle authentication failure, e.g., redirect or show a toast
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }, [dispatch]);
};

export default useAuth;
