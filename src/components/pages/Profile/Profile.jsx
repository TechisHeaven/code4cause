import React, { useEffect } from "react";
import { useStateContext } from "../../../store";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const state = useStateContext();
  let user = state.user.user;
  const location = useNavigate();
  useEffect(() => {
    if (!user) {
      location("/");
    }
  }, []);
  const appointment = [
    {
      id: 1,
      name: "Dr lorem Singh",
      specailist: "cardiologist",
    },
    {
      id: 2,
      name: "Dr lorem Singh",
      specailist: "cardiologist",
    },
    {
      id: 3,
      name: "Dr lorem Singh",
      specailist: "cardiologist",
    },
    {
      id: 4,
      name: "Dr lorem Singh",
      specailist: "cardiologist",
    },
    {
      id: 5,
      name: "Dr lorem Singh",
      specailist: "cardiologist",
    },
    {
      id: 6,
      name: "Dr lorem Singh",
      specailist: "cardiologist",
    },
    {
      id: 7,
      name: "Dr lorem Singh",
      specailist: "cardiologist",
    },
    {
      id: 8,
      name: "Dr lorem Singh",
      specailist: "cardiologist",
    },
  ];
  return (
    <div className="max-w-[1280px] m-auto my-12">
      <div className="flex flex-row gap-8 justify-center">
        <div className="max-w-[420px] max-h-[620px] w-full bg-white shadow-md border p-4 rounded-md flex flex-col gap-4">
          <div className="w-full h-1/2 overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="profile image"
            />
          </div>
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">My Profile</h1>
            <p className="text-sm text-textSecondary capitalize">
              last login: 10 september 2023
            </p>
          </div>
          <p className="text-textSecondary p-2 border-b-2">{user.name}</p>
          <p className="text-textSecondary p-2 border-b-2">{user.email}</p>
          <p className="text-textSecondary p-2 border-b-2">+918527942120</p>
        </div>
        <div className="max-w-[420px] max-h-[620px] w-full bg-white shadow-md border p-4 rounded-md flex flex-col gap-4">
          <div className="flex justify-between border-b-2 pb-2">
            <h1 className="font-semibold text-xl">My Appointment</h1>
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="items overflow-y-auto">
            {appointment.map((item) => {
              return (
                <div
                  key={item.id}
                  className="item flex flex-row my-2 justify-between p-2 px-4 items-center border rounded-md"
                >
                  <div>
                    <h1 className="font-semibold">{item.name}</h1>
                    <p className="rounded-lg text-green-800 bg-green-400 text-center">
                      {item.specailist}
                    </p>
                  </div>
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
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
