import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const NavItems = [
    {
      id: 1,
      name: "Find a doctor",
      link: "doctor",
    },
    {
      id: 2,
      name: "Service",
      link: "service",
    },
    {
      id: 3,
      name: "Contact",
      link: "contact",
    },
  ];
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
      </div>
    </div>
  );
};

export default Header;
