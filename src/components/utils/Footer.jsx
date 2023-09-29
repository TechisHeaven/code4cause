import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  let navItems = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "doctor",
      url: "/doctor",
    },
    {
      id: 4,
      name: "chat",
      url: "/chat",
    },
  ];
  return (
    <div className="footer border-t-2">
      <div className="flex justify-between items-center max-w-[1280px] m-auto py-4">
        <div className="logo uppercase font-semibold text-xl">HealthCo</div>
        <ul className="flex gap-4 ">
          {navItems.map((item) => {
            return (
              <li className="text-textSecondary" key={item.id}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-between items-center max-w-[1280px] m-auto pb-4">
        <p>2023 HealthCo AI</p>
        <div className="social-icons flex gap-4">
          <div className="bg-primary p-2 rounded-full cursor-pointer hover:bg-primaryHover">
            <img loading="lazy" src="/Twitter.png" alt="" />
          </div>
          <div className="bg-primary p-2 rounded-full cursor-pointer hover:bg-primaryHover">
            <img loading="lazy" src="/Discord.png" alt="" />
          </div>
          <div className="bg-primary p-2 rounded-full cursor-pointer hover:bg-primaryHover">
            <img loading="lazy" src="/GitHub.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
