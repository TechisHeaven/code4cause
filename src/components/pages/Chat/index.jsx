import React, { useEffect, useState } from "react";
import ChatSection from "./ChatSection/ChatSection";
import Sidebar from "./Sidebar/Sidebar";
import ConversationSidebar from "./ConversationSidebar/ConversationSidebar";

const index = () => {
  const [selectedTab, setSelectedTab] = useState();

  const [openSideBar, setOpenSideBar] = useState(true);

  // handle conversation tab selection
  const handleSelectTab = (id) => {
    setSelectedTab(id);
  };

  useEffect(() => {
    const query = `(max-width: 768px)`;
    const media = window.matchMedia(query);

    const handleMediaChange = (event) => {
      if (event.matches) {
        setOpenSideBar(false);
      } else {
        setOpenSideBar(true);
      }
    };
    media.addListener(handleMediaChange);
    handleMediaChange(media);
    return () => {
      media.removeListener(handleMediaChange);
    };
  }, []);

  return (
    <div className=" max-w-[1280px] m-auto h-screen grid place-items-center w-full">
      <div className="wrapper w-full">
        <div className="font-semibold text-2xl p-2 text-center border bg-primary text-white rounded-t-lg">
          HealthCo
        </div>
        {/* <Sidebar /> */}
        <div className="flex flex-row items-center relative w-full">
          <div className="w-full max-w-[350px]">
            <ConversationSidebar
              handleSelectTab={handleSelectTab}
              selectedTab={selectedTab}
            />
          </div>
          <ChatSection selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  );
};

export default index;
