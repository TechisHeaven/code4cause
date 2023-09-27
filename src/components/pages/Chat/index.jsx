import React from "react";
import ChatSection from "./ChatSection/ChatSection";
import Sidebar from "./Sidebar/Sidebar";

const index = () => {
  return (
    <div className=" max-w-[1280px] m-auto">
      <div className="wrapper flex flex-row">
        <Sidebar />
        <ChatSection />
      </div>
    </div>
  );
};

export default index;
