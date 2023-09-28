import React from "react";
import Calendar from "../../../../utils/Calender";
import TimeSelect from "../../../../utils/TimeSelect";

const Checkout = () => {
  return (
    <div className="max-w-[1280px] m-auto flex gap-4 mb-8">
      <div className="flex gap-4 flex-row flex-wrap">
        <div className="flex gap-4">
          <div className="calender max-w-[320px] bg-white shadow-md border w-full rounded-md">
            <Calendar />
          </div>
          <div className="time  flex-grow bg-white shadow-md border w-full rounded-md">
            <TimeSelect />
          </div>
        </div>
        <div className="details p-4 max-w-[950px] bg-white shadow-md border w-full rounded-md">
          <div className="div p-2 name">
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_52_1526)">
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
                    fill="#333333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_52_1526">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <label htmlFor="fullname" className="font-semibold">
                Full Name
              </label>
            </div>
            <p className="ml-10 text-sm text-textSecondary">
              Enter your full name which you wish to use for details
            </p>
            <input
              id="fullname"
              className="ml-10 mt-2 border p-2 w-full max-w-[390px] rounded-sm text-sm"
              type="text"
              placeholder="Full Name..."
            />
          </div>
          <div className="div p-2 email">
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_52_1541)">
                  <path
                    d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"
                    fill="#333333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_52_1541">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <label htmlFor="email" className="font-semibold">
                Email
              </label>
            </div>
            <p className="ml-10 text-sm text-textSecondary">
              Enter your email which you wish to receive checkout related
              information.
            </p>
            <input
              id="email"
              className="ml-10 mt-2 border p-2 w-full max-w-[390px] rounded-sm text-sm"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="div p-2 phone">
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_52_1555)">
                  <path
                    d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.06004 13.63 6.62004 10.79L8.47004 8.94001C8.90004 8.51001 9.11004 7.91001 9.04004 7.30001L8.75004 4.78001C8.63004 3.77001 7.78004 3.01001 6.76004 3.01001H5.03004C3.90004 3.01001 2.96004 3.95001 3.03004 5.08001C3.56004 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z"
                    fill="#333333"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_52_1555">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <label htmlFor="mobile" className="font-semibold">
                Mobile Number
              </label>
            </div>
            <p className="ml-10 text-sm text-textSecondary">
              Enter your mobile which you wish to receive checkout related
              information.
            </p>
            <input
              id="mobile"
              className="ml-10 mt-2 border p-2 w-full max-w-[390px] rounded-sm text-sm"
              type="text"
              placeholder="Mobile Number"
            />
          </div>
        </div>
      </div>
      <div className="checkout h-full max-w-[360px] w-full">
        <div className="bg-white shadow-md border rounded-md">
          <div className="heading p-4 px-8 border-b-2 font-semibold capitalize">
            Booking Details
          </div>
          <div className="flex flex-col p-4 items-start gap-2 border-b-2">
            <p className="text-textSecondary text-xs">Doctor</p>
            <div className="flex justify-between w-full">
              <h1 className="font-semibold">Dr lorem Singh</h1>
              <p className="font-semibold text-sm">Rs.1200/-</p>
            </div>
            <p className="p-1 rounded-2xl  bg-green-300 text-sm text-green-800">
              cardiologist
            </p>
          </div>
          <div className="flex flex-col p-4 items-start">
            <p className="text-textSecondary text-xs">Test Center</p>
            <div className="flex justify-between w-full">
              <h1 className="font-semibold">Indra Gandhi Hospital</h1>
              <p className="font-semibold text-sm">Rs.1200/-</p>
            </div>
            <p className="rounded-2xl text-textSecondary">
              Indra Gandhi Hospital , Dwarka , New..
            </p>
          </div>
          <div className="flex flex-col p-4 items-start border-t-2 gap-2 my-12">
            <div className="flex justify-between w-full">
              <h1 className="font-semibold">Total Amount</h1>
              <p className="font-semibold text-sm">Rs.1200/-</p>
            </div>
            <button className="bg-primary text-white p-2 rounded-sm w-full">
              Procced to Pay
            </button>
          </div>
        </div>
        <div className="contact capitalize mt-4 p-4 bg-white shadow-md border rounded-md">
          <h1 className="text-lg font-semibold">We can help you</h1>
          <p className="text-sm text-textSecondary">
            call us 91+1212121212 (or) chat with our customer Support team
          </p>
          <button className="border text-sm border-textMain mt-2 px-2 p-1">
            Chat with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
