import Cookies from "js-cookie";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatchContext, useStateContext } from "../../store";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

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
            loading="lazy"
            className="select-none inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile image"
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  //on location change close header
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className="max-w-[1280px] m-auto flex justify-between p-6 bg-background"
      aria-label="Global"
    >
      <div className="font-bebas-neue font-semibold text-2xl uppercase">
        <Link to="/">
          Health<span className="text-secondary">Co</span>
        </Link>
      </div>
      <div className="flex gap-8 lg:hidden">
        <div>{user.user && renderPopover()}</div>
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className="flex-row gap-8 items-center hidden lg:flex lg:gap-x-12">
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
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed flex flex-col gap-12 inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 text-xl">
              Health<span className="text-secondary">Co</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <div className="closebtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y flex flex-col gap-8 divide-gray-500/10">
              <ul className="flex gap-4 flex-col">
                {NavItems.map((value) => {
                  return (
                    <li
                      key={value.id}
                      className="font-medium w-full text-textSecondary"
                    >
                      <Link
                        className=" hover:text-textMain w-full flex transition-all p-2 hover:bg-gray-200"
                        to={value.link}
                      >
                        {value.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {loading ? (
                <div
                  className="inline-block h-10 w-10 rounded-full bg-gray-200"
                  alt=""
                />
              ) : (
                !user.user && renderButton()
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
