import React from "react";
import Calendar from "../../../../utils/Calender";

const Checkout = () => {
  return (
    <div className="max-w-[1280px] m-auto">
      <div>
        <div className="calender max-w-[320px] bg-white shadow-md border w-full rounded-md">
          <Calendar />
        </div>
        <div className="time"></div>
        <div className="details"></div>
      </div>
      <div className="checkout"></div>
    </div>
  );
};

export default Checkout;
