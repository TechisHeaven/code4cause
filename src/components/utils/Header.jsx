import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatchContext, useStateContext } from "../../store";
import { Popover, Transition } from "@headlessui/react";

const Header = () => {
  const NavItems = [
    {
      id: 1,
      name: "Find a doctor",
      link: "doctor",
    },
    {
      id: 2,
      name: "Chat",
      link: "chat",
    },
    {
      id: 3,
      name: "Contact",
      link: "contact",
    },
  ];
  const { user } = useStateContext();
  const dispatch = useDispatchContext();
  const loading = user.loading;
  //handle logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "LOGIN_RESET" });
    Cookies.remove("user");
  };

  const renderButton = () => {
    return (
      <div className="buttons font-semibold flex gap-2">
        <Link
          className="capitalize hover:outline hover:outline-1 transition-all rounded-md px-4 p-2"
          to="/register"
        >
          new account
        </Link>

        <Link
          className="capitalize shadow-md hover:shadow-lg bg-primary hover:bg-primaryHover transition-all text-white p-2 px-4 rounded-md"
          to="/login"
        >
          sign up
        </Link>
      </div>
    );
  };
  const renderPopover = () => {
    return (
      <Popover>
        <Popover.Button className={"rounded-full focus:outline-none"}>
          <img
            className="select-none inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Popover.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel className="absolute -left-32 top-2 z-10 rounded-md border w-40 bg-white">
            <h1 className="font-semibold p-2 px-4 border-b-[1px]">
              Hey , {user?.user?.name}
            </h1>
            <div className="grid w-full">
              <Link
                to="/profile"
                className="flex hover:bg-gray-200  p-2 px-4 transition-colors cursor-pointer"
              >
                Profile
              </Link>
            </div>
            <div className="grid w-full">
              <div
                onClick={handleLogout}
                className="flex w-full  hover:bg-gray-200  p-2 px-4 transition-colors cursor-pointer"
              >
                Logout
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  };

  return (
    <div className="max-w-[1280px] m-auto flex justify-between p-6">
      <div className="font-bebas-neue font-semibold text-2xl uppercase">
        <Link to="/">
          Health<span className="text-secondary">Co</span>
        </Link>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <ul className="flex gap-4">
          {NavItems.map((value) => {
            return (
              <li
                key={value.id}
                className="font-medium hover:text-textMain transition-all text-textSecondary"
              >
                <Link to={value.link}>{value.name}</Link>
              </li>
            );
          })}
        </ul>
        {loading ? (
          <div
            className="inline-block h-10 w-10 rounded-full bg-gray-200"
            alt=""
          />
        ) : user.user ? (
          renderPopover()
        ) : (
          renderButton()
        )}
      </div>
    </div>
  );
};

export default Header;
