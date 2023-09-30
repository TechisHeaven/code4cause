import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatchContext, useStateContext } from "../../../../store";

const Register = () => {
  const { user } = useStateContext();
  const dispatch = useDispatchContext();
  const [passwordHide, setPasswordHide] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const location = useNavigate();
  // handle user login
  useEffect(() => {
    if (user.user) {
      location("/");
    }
  }, [user]);

  const handleLogin = () => {
    const UserData = {
      name: name,
      email: email,
      password: password,
    };
    const url = import.meta.env.VITE_AXIOS_URL + "user";
    axios.post(url, UserData).then((response) => {
      dispatch({ type: "LOGIN_REQUEST" });
      showToast("Success Register!", "success");
      delete response.data[0].password;
      Cookies.set("user", JSON.stringify(response.data[0]), { expires: 30 });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data[0] });
      location("/");
    });
  };
  return (
    <div className="max-w-[480px] m-auto p-8 rounded-md shadow-lg my-20 border">
      <div className="wrapper flex flex-col gap-4">
        <div className="heading text-center px-12 mb-4">
          <h1 className="text-3xl font-semibold text-textMain">Register</h1>
          <p className="text-sm text-textSecondary">
            Hey, Enter your details to create a new account{" "}
          </p>
        </div>
        <div className="input flex flex-col gap-4">
          <div className="relative">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="p-2 border rounded-md w-full"
              placeholder="Enter Name"
            />
          </div>
          <div className="relative">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="p-2 border rounded-md w-full"
              placeholder="Enter Email"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" w-6 h-6 absolute top-1/2 translate-y-[-50%] right-2"
            >
              <path
                id="tick"
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={passwordHide ? "text" : "password"}
              className="p-2 border rounded-md w-full"
              placeholder="Password"
            />
            {passwordHide ? (
              <p
                onClick={() => setPasswordHide(!passwordHide)}
                className="absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer select-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            ) : (
              <p
                onClick={() => setPasswordHide(!passwordHide)}
                className="absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer select-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  id="password-hide"
                  className="w-6 h-6"
                >
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                </svg>
              </p>
            )}
          </div>
          <button
            onClick={handleLogin}
            className="capitalize shadow-md hover:shadow-lg bg-primary hover:bg-primaryHover transition-all text-white p-2 px-4 rounded-md"
          >
            Sign in
          </button>
        </div>
        <p className="text-center my-4 text-sm">Or Sign in with</p>
        <div className="justify-evenly flex flex-row">
          <div className="p-2 px-8 border rounded-md flex items-center gap-2">
            <img src="./Google.png" alt="Google" /> <p>Google</p>
          </div>
          <div className="p-2 px-8 border rounded-md flex items-center gap-2">
            <img src="./Facebook.png" alt="Facebook" />
            <p>Facebook</p>
          </div>
        </div>
        <p className="text-textSecondary text-center py-4">
          Don't have an account?{" "}
          <span className="text-blue-600">Register now</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
