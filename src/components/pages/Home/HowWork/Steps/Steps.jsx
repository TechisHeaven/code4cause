import React from "react";

const Steps = () => {
  const items = [
    {
      id: 1,
      heading: "Sign up",
      description:
        "Create a account with Healthco ai by providing your name , email",
    },
    {
      id: 2,
      heading: "Customize your profile",
    },
    {
      id: 3,
      heading: "Chat with Healthco AI for solution.",
    },
    {
      id: 4,
      heading: "Get Appointment of here in app.",
    },
  ];
  return (
    <div className="items flex max-[768px]:flex-col gap-4 m-20 max-[1024px]:m-10 max-[910px]:m-5 max-[910px]:my-10">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="item p-4  border-t-[1px]  border-textMain"
          >
            <span className="text-textSecondary text-xs">0{item.id}.</span>
            <h1 className="text-textSecondary text-lg max-[910px]:text-base">
              {item.heading}
            </h1>
            <p className="text-textSecondary text-sm max-[910px]:text-xs">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
